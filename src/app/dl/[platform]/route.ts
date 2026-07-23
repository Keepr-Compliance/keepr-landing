import { NextResponse, type NextRequest } from "next/server";

/**
 * Self-updating download redirector (BACKLOG-2194).
 *
 * Resolves the newest release asset at request time from the public feed, so the
 * marketing site (and the download-link email) never hard-code a version number.
 * `/dl/mac-arm`, `/dl/mac-intel`, `/dl/win` always 307 → the latest matching asset.
 *
 * The GitHub API response is cached for an hour (`revalidate: 3600`), which keeps us
 * far under the unauthenticated rate limit (60 req/hr/IP) — ~1 upstream call per hour.
 * Any failure (API down, rate-limited, no matching asset, unknown platform) falls back
 * to the human-readable releases page, so a download link never dead-ends.
 */

const RELEASE_REPO = "Keepr-Compliance/keepr-releases";
const RELEASES_LATEST_PAGE = `https://github.com/${RELEASE_REPO}/releases/latest`;
const RELEASES_API = `https://api.github.com/repos/${RELEASE_REPO}/releases/latest`;

// Asset names look like: Keepr-2.25.2-arm64.dmg | Keepr-2.25.2.dmg | Keepr-Setup-2.25.2.exe
const MATCHERS: Record<string, (name: string) => boolean> = {
  "mac-arm": (n) => /arm64\.dmg$/i.test(n),
  "mac-intel": (n) => /\.dmg$/i.test(n) && !/arm64/i.test(n),
  win: (n) => /\.exe$/i.test(n),
};

type ReleaseAsset = { name: string; browser_download_url: string };
type LatestRelease = { assets?: ReleaseAsset[] };

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ platform: string }> },
) {
  const { platform } = await params;
  const match = MATCHERS[platform];

  // Unknown platform → releases page rather than a 404.
  if (!match) return NextResponse.redirect(RELEASES_LATEST_PAGE, 307);

  try {
    const res = await fetch(RELEASES_API, {
      headers: {
        Accept: "application/vnd.github+json",
        "User-Agent": "keepr-landing",
      },
      next: { revalidate: 3600 },
    });
    if (!res.ok) return NextResponse.redirect(RELEASES_LATEST_PAGE, 307);

    const release = (await res.json()) as LatestRelease;
    const asset = release.assets?.find((a) => match(a.name));
    if (!asset?.browser_download_url) {
      return NextResponse.redirect(RELEASES_LATEST_PAGE, 307);
    }
    return NextResponse.redirect(asset.browser_download_url, 307);
  } catch {
    return NextResponse.redirect(RELEASES_LATEST_PAGE, 307);
  }
}
