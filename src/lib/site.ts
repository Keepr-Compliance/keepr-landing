/**
 * Central site configuration: download links, pricing, and shared marketing constants.
 *
 * DOWNLOAD LINKS
 * --------------
 * The desktop app auto-updater feed lives in the PUBLIC repo `keepr-releases`.
 * Latest release: v2.25.0 (published to the feed 2026-07-21; carries the launch-blocker fixes).
 * RELEASE CHECKLIST: bump LATEST_VERSION each time a new release is cut so the platform
 * download buttons serve the newest build.
 *
 * TODO(founder): confirm the canonical public host for downloads. The auto-updater
 * feed repo was transferred 5hdaniel -> Keepr-Compliance; both hosts currently
 * resolve, but pick ONE for the public marketing links (and ideally front them with
 * a stable app.keeprcompliance.com/download redirect so the landing page never has
 * to hard-code a version number). Until then these point at the current release
 * assets (see LATEST_VERSION below) so the buttons serve the newest build.
 */

/** GitHub org that owns the public release feed. */
const RELEASE_REPO = "Keepr-Compliance/keepr-releases";

/** Latest shipped desktop version — bump when a new release lands (or replace with a redirect). */
export const LATEST_VERSION = "2.25.0";

const releaseBase = `https://github.com/${RELEASE_REPO}/releases`;
const assetBase = `${releaseBase}/download/v${LATEST_VERSION}`;

export const downloads = {
  /** All-releases page — safe fallback that never 404s on a version bump. */
  releasesPage: `${releaseBase}/latest`,
  /** macOS — Apple Silicon (M-series). */
  macArm: `${assetBase}/Keepr-${LATEST_VERSION}-arm64.dmg`,
  /** macOS — Intel. */
  macIntel: `${assetBase}/Keepr-${LATEST_VERSION}.dmg`,
  /** Windows installer. */
  windows: `${assetBase}/Keepr-Setup-${LATEST_VERSION}.exe`,
} as const;

/**
 * Primary "Download" CTA target. Points at the latest-release page so the button
 * always works and lets the visitor pick their platform. Platform-specific buttons
 * (mac/windows) are available in the download section for one-click installs.
 *
 * TODO(founder): if/when app.keeprcompliance.com/download exists as a stable
 * platform-detecting redirect, swap this to that URL.
 */
export const primaryDownloadHref = downloads.releasesPage;

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
