/**
 * Cookie-consent model for the marketing site (BACKLOG-2133).
 *
 * Keepr runs an OPT-OUT model (US "notice-and-opt-out"): non-essential analytics
 * (Google Analytics + Microsoft Clarity) load by default and keep running unless
 * the visitor opts out — or the browser sends a Global Privacy Control signal, in
 * which case they stay off. Strictly-necessary cookies are not covered here — they
 * are always allowed. There is a single non-essential category ("Analytics /
 * Performance") which matches the Cookie Policy, so the choice is a single boolean
 * rather than a per-vendor matrix.
 *
 * The choice is persisted in a first-party cookie so it survives across pages and
 * can be re-read on return visits. Bumping CONSENT_VERSION re-prompts everyone
 * (use when the set of tools or the policy materially changes).
 */

/** First-party cookie that stores the visitor's choice. */
export const CONSENT_COOKIE = "keepr_cookie_consent";

/** Schema/policy version. Bump to invalidate stored choices and re-prompt. */
export const CONSENT_VERSION = 1;

/** How long a recorded choice is remembered. */
const MAX_AGE_DAYS = 180;

export type ConsentDecision = "granted" | "denied";
/** "unknown" = no valid choice on record yet (first visit or after a version bump). */
export type ConsentStatus = ConsentDecision | "unknown";

export interface ConsentRecord {
  /** Whether non-essential analytics/performance cookies are allowed. */
  analytics: boolean;
  /** Consent schema version this choice was made against. */
  v: number;
  /** Unix ms when the choice was recorded. */
  ts: number;
}

/**
 * Read the stored choice. Returns null when there is no cookie, it can't be
 * parsed, or it was written against a different CONSENT_VERSION (→ re-prompt).
 */
export function readConsent(): ConsentRecord | null {
  if (typeof document === "undefined") return null;
  const entry = document.cookie
    .split("; ")
    .find((c) => c.startsWith(`${CONSENT_COOKIE}=`));
  if (!entry) return null;
  try {
    const parsed = JSON.parse(
      decodeURIComponent(entry.slice(CONSENT_COOKIE.length + 1))
    ) as Partial<ConsentRecord>;
    if (typeof parsed.analytics !== "boolean" || parsed.v !== CONSENT_VERSION) {
      return null;
    }
    return {
      analytics: parsed.analytics,
      v: CONSENT_VERSION,
      ts: typeof parsed.ts === "number" ? parsed.ts : 0,
    };
  } catch {
    return null;
  }
}

/** Persist the visitor's choice to the first-party cookie. */
export function writeConsent(analytics: boolean): ConsentRecord {
  const record: ConsentRecord = { analytics, v: CONSENT_VERSION, ts: Date.now() };
  const secure =
    typeof location !== "undefined" && location.protocol === "https:"
      ? "; Secure"
      : "";
  document.cookie =
    `${CONSENT_COOKIE}=${encodeURIComponent(JSON.stringify(record))}` +
    `; path=/; max-age=${MAX_AGE_DAYS * 24 * 60 * 60}; SameSite=Lax${secure}`;
  return record;
}

/**
 * Whether the browser is sending a Global Privacy Control opt-out signal.
 * We honor GPC as a valid opt-out (CCPA/CPRA & similar state laws): when set,
 * analytics stay off regardless of any in-page choice.
 */
export function hasGpcOptOut(): boolean {
  if (typeof navigator === "undefined") return false;
  return (
    (navigator as Navigator & { globalPrivacyControl?: boolean })
      .globalPrivacyControl === true
  );
}

/**
 * Best-effort teardown of first-party analytics cookies after a visitor
 * withdraws consent. (Third-party cookies on clarity.ms can't be cleared from
 * here; the caller reloads so the already-injected tags stop running.)
 */
export function clearAnalyticsCookies(): void {
  if (typeof document === "undefined" || typeof location === "undefined") return;
  const registrable = location.hostname.replace(/^www\./, "");
  const names = document.cookie.split("; ").map((c) => c.split("=")[0]);
  const isAnalytics = (n: string) =>
    /^_ga/.test(n) || // GA4: _ga, _ga_<container>
    n === "_gid" ||
    /^_gat/.test(n) ||
    n === "_clck" || // Clarity (first-party)
    n === "_clsk" ||
    n.startsWith("_clarity");
  for (const name of names) {
    if (!isAnalytics(name)) continue;
    document.cookie = `${name}=; path=/; max-age=0`;
    document.cookie = `${name}=; path=/; domain=.${registrable}; max-age=0`;
  }
}
