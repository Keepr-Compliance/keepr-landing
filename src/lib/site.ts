/**
 * Central site configuration: download links, pricing, and shared marketing constants.
 *
 * DOWNLOAD LINKS — self-updating (BACKLOG-2194)
 * ---------------------------------------------
 * The desktop app auto-updater feed lives in the PUBLIC repo `keepr-releases`.
 * The platform buttons point at our own `/dl/*` redirector (src/app/dl/[platform]),
 * which resolves the newest release asset at request time. There is NO version to bump
 * here on release — the served build always tracks the latest published release.
 * `LATEST_VERSION` below is only a display/fallback default; use `getLatestVersion()`
 * for an accurate on-page version label.
 */

/** GitHub org that owns the public release feed. */
const RELEASE_REPO = "Keepr-Compliance/keepr-releases";

/** Display/fallback version only — real downloads resolve via the `/dl/*` redirector. */
export const LATEST_VERSION = "2.25.2";

const releaseBase = `https://github.com/${RELEASE_REPO}/releases`;

export const downloads = {
  /** All-releases page — safe fallback that never 404s. */
  releasesPage: `${releaseBase}/latest`,
  /** macOS — Apple Silicon (M-series). Stable redirect → newest arm64 dmg. */
  macArm: "/dl/mac-arm",
  /** macOS — Intel. Stable redirect → newest x64 dmg. */
  macIntel: "/dl/mac-intel",
  /** Windows installer. Stable redirect → newest exe. */
  windows: "/dl/win",
} as const;

/**
 * Accurate latest version for display (e.g. "2.25.2"), read from the release feed and
 * cached for an hour. Falls back to LATEST_VERSION if the feed is unreachable.
 */
export async function getLatestVersion(): Promise<string> {
  try {
    const res = await fetch(`https://api.github.com/repos/${RELEASE_REPO}/releases/latest`, {
      headers: { Accept: "application/vnd.github+json", "User-Agent": "keepr-landing" },
      next: { revalidate: 300 },
    });
    if (!res.ok) return LATEST_VERSION;
    const data = (await res.json()) as { tag_name?: string };
    return data.tag_name?.replace(/^v/, "") || LATEST_VERSION;
  } catch {
    return LATEST_VERSION;
  }
}

/**
 * Primary "Download" CTA target → our own /download page, which detects the
 * visitor's OS and starts the correct direct download (falling back to platform
 * buttons). This keeps users on keeprcompliance.com instead of dumping them on
 * the GitHub releases page.
 */
export const primaryDownloadHref = "/download";

/** Broker/app sign-in — the portal login. */
export const signInHref = "https://app.keeprcompliance.com/login";

/** Team / brokerage demo booking link (from the approved prototype). */
export const bookDemoHref =
  "https://outlook.office.com/book/KeeprBetaProgramOnboarding@bluespaces.com/s/4iH7WsrwY0is7XN7Q5oZ-A2?ismsaljsauthenabled";

export const supportEmail = "support@keeprcompliance.com";

/** Legal entity — confirmed via the approved prototype footer. */
export const legalEntity = "Blue Spaces LLC";

/**
 * PRICING — founder-locked (BACKLOG-2003, 2026-07-17):
 * PAYG per-deal, DESCENDING by calendar-year volume, annual reset. Charged per
 * unlock, only on deals that CLOSE. This matches the shipped product.
 * NOT prepaid credit bundles (those are not built — do not reintroduce them).
 */
export const pricingTiers = [
  { range: "Your first 3 deals", price: "$14.99", save: "base rate", isBase: true },
  { range: "Deals 4–10", price: "$13.00", save: "save 13%", isBase: false },
  { range: "Deals 11–25", price: "$12.00", save: "save 20%", isBase: false },
  { range: "26 deals & up", price: "$11.00", save: "save 27%", isBase: false },
] as const;
