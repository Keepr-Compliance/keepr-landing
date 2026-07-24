/**
 * Analytics IDs + where they're allowed to run.
 *
 * These IDs are PUBLIC client-side identifiers (visible in any live page's
 * source), so committing them here is not a secret exposure — it just lets the
 * production deploy work without a Vercel env step. Set NEXT_PUBLIC_GA_ID /
 * NEXT_PUBLIC_CLARITY_ID in the environment to override per-deploy, or set one
 * to an empty string to turn that provider off.
 *
 * Loading is still gated by consent (see Analytics.tsx / consent.ts). This file
 * only decides *which* IDs and *which hosts* — never whether the visitor opted
 * in.
 */

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-HEWCVNQCL8";
export const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID ?? "xr5yxy69xn";

/**
 * Keep analytics from firing on local dev and Vercel preview URLs, which would
 * pollute the production GA/Clarity properties. Anything else (the real custom
 * domain) is allowed. Returns false during SSR (no hostname), which is fine —
 * the tags are client-only (afterInteractive) anyway.
 */
export function analyticsHostAllowed(hostname: string | undefined): boolean {
  if (!hostname) return false;
  if (
    hostname === "localhost" ||
    hostname === "127.0.0.1" ||
    hostname.endsWith(".local")
  ) {
    return false;
  }
  if (hostname.endsWith(".vercel.app")) return false; // preview deployments
  return true;
}
