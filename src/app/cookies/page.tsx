import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { legalEntity } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie Policy — Keepr",
  description: "How Keepr uses cookies and similar technologies.",
  robots: { index: false },
};

/**
 * Cookie Policy — STUB.
 * TODO(founder): replace this placeholder with the real, legally reviewed Cookie
 * Policy before the site is public. Tracked in BACKLOG-2122 / BACKLOG-2133
 * (Cookie Policy + consent banner + CCPA/CPRA/GPC + Microsoft Clarity handling).
 */
export default function Cookies() {
  return (
    <>
      <Nav />
      <main>
        <div className="wrap">
          <article className="legal">
            <h1>Cookie Policy</h1>
            <p className="updated">Last updated: July 2026 · Draft — not yet published.</p>
            <div className="todo">
              TODO(founder): This is a placeholder. A real, legally reviewed Cookie Policy
              for {legalEntity} (Keepr) must replace this before public launch.
            </div>
            <p>
              This marketing site itself sets no non-essential cookies or third-party
              trackers. The Keepr web portals use Microsoft Clarity for product analytics,
              which is loaded only after you consent. A full Cookie Policy — covering every
              category of cookie, your choices, and how to withdraw consent — is being
              finalized with legal counsel and will replace this page.
            </p>
            <h2>Sections to be completed</h2>
            <ul>
              <li>What cookies and similar technologies are</li>
              <li>Strictly necessary vs. analytics / performance categories</li>
              <li>Microsoft Clarity (analytics) on the Keepr portals, gated behind consent</li>
              <li>Managing your preferences and withdrawing consent</li>
              <li>US privacy choices (CCPA/CPRA) and the Global Privacy Control signal</li>
              <li>How to contact us about cookies</li>
            </ul>
            <Link className="back" href="/">
              ← Back to home
            </Link>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
