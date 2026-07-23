/**
 * External store for cookie-consent state, read via useSyncExternalStore.
 *
 * The consent cookie and the browser's GPC signal are external (browser-only)
 * state, so a store + snapshot is the right primitive: it avoids reading them
 * in an effect and renders nothing consent-specific during SSR / hydration
 * (getServerSnapshot has hydrated=false), which prevents a banner flash for
 * visitors who already chose.
 */

import {
  clearAnalyticsCookies,
  hasGpcOptOut,
  readConsent,
  writeConsent,
  type ConsentStatus,
} from "@/lib/consent";

export interface ConsentSnapshot {
  status: ConsentStatus;
  gpc: boolean;
  /** False during SSR + the hydration render; true once running on the client. */
  hydrated: boolean;
}

const listeners = new Set<() => void>();
let cached: ConsentSnapshot | null = null;

function compute(): ConsentSnapshot {
  const record = readConsent();
  return {
    status: record ? (record.analytics ? "granted" : "denied") : "unknown",
    gpc: hasGpcOptOut(),
    hydrated: true,
  };
}

export function subscribe(onChange: () => void): () => void {
  listeners.add(onChange);
  return () => listeners.delete(onChange);
}

/** getSnapshot must return a stable reference when nothing changed. */
export function getSnapshot(): ConsentSnapshot {
  const next = compute();
  if (
    cached &&
    cached.status === next.status &&
    cached.gpc === next.gpc &&
    cached.hydrated === next.hydrated
  ) {
    return cached;
  }
  cached = next;
  return cached;
}

const SERVER_SNAPSHOT: ConsentSnapshot = {
  status: "unknown",
  gpc: false,
  hydrated: false,
};

export function getServerSnapshot(): ConsentSnapshot {
  return SERVER_SNAPSHOT;
}

function notify(): void {
  cached = null; // force a fresh compute on the next getSnapshot
  for (const l of listeners) l();
}

/** Record an opt-in and load analytics. */
export function grantConsent(): void {
  writeConsent(true);
  notify();
}

/**
 * Record an opt-out. If analytics were active this session — which, under the
 * opt-out model, is the default whenever there's no prior denial and no GPC
 * signal — tear the tags down (clear their cookies + reload so the injected
 * scripts stop).
 */
export function denyConsent(): void {
  const wasActive = !hasGpcOptOut() && readConsent()?.analytics !== false;
  writeConsent(false);
  notify();
  if (wasActive) {
    clearAnalyticsCookies();
    if (typeof location !== "undefined") location.reload();
  }
}
