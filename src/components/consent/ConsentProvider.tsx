"use client";

/**
 * Client provider that owns cookie-consent state and renders the banner, the
 * preferences modal, and the (consent-gated) analytics tags.
 *
 * Model: OPT-OUT. Analytics load by default and keep running unless the visitor
 * opts out (`status === "denied"`) or the browser sends a Global Privacy Control
 * signal. Consent state comes from an external store (consentStore.ts) via
 * useSyncExternalStore; this component only owns the transient "is the
 * preferences modal open" UI state.
 */

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  useSyncExternalStore,
} from "react";
import { type ConsentStatus } from "@/lib/consent";
import {
  denyConsent,
  getServerSnapshot,
  getSnapshot,
  grantConsent,
  subscribe,
} from "./consentStore";
import { Analytics } from "./Analytics";
import { CookieBanner } from "./CookieBanner";
import { CookiePreferences } from "./CookiePreferences";

interface ConsentContextValue {
  /** "unknown" until the visitor decides (or after a consent-version bump). */
  status: ConsentStatus;
  /** Browser Global Privacy Control opt-out signal is present. */
  gpc: boolean;
  /** Effective gate for loading analytics: not opted out AND no GPC. */
  analyticsAllowed: boolean;
  /** Whether the first-visit notice should be visible. */
  showBanner: boolean;
  accept(): void;
  reject(): void;
  openPrefs(): void;
  closePrefs(): void;
}

const ConsentContext = createContext<ConsentContextValue | null>(null);

export function useConsent(): ConsentContextValue {
  const ctx = useContext(ConsentContext);
  if (!ctx) throw new Error("useConsent must be used within <ConsentProvider>");
  return ctx;
}

export function ConsentProvider({ children }: { children: React.ReactNode }) {
  const snap = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [prefsOpen, setPrefsOpen] = useState(false);

  const accept = useCallback(() => {
    grantConsent();
    setPrefsOpen(false);
  }, []);
  const reject = useCallback(() => {
    denyConsent();
    setPrefsOpen(false);
  }, []);
  const openPrefs = useCallback(() => setPrefsOpen(true), []);
  const closePrefs = useCallback(() => setPrefsOpen(false), []);

  const value = useMemo<ConsentContextValue>(
    () => ({
      status: snap.status,
      gpc: snap.gpc,
      analyticsAllowed: snap.hydrated && !snap.gpc && snap.status !== "denied",
      showBanner:
        snap.hydrated && !snap.gpc && snap.status === "unknown" && !prefsOpen,
      accept,
      reject,
      openPrefs,
      closePrefs,
    }),
    [snap, prefsOpen, accept, reject, openPrefs, closePrefs]
  );

  return (
    <ConsentContext.Provider value={value}>
      {children}
      <CookieBanner />
      {prefsOpen ? <CookiePreferences /> : null}
      <Analytics />
    </ConsentContext.Provider>
  );
}
