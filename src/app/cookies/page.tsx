import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cookie Policy — Keepr",
  description: "How Keepr uses cookies.",
  robots: { index: false },
};

/**
 * Cookie Policy — interim placeholder.
 *
 * The counsel-ready v1.0 draft is preserved on the `legal-drafts-staged` branch
 * (commit 5d5705d) and in keepr-legal-drafts/cookie-policy.md. Swap it in here once
 * it clears final attorney review AND the consent/opt-out UI it describes is wired
 * up (BACKLOG-2122 / BACKLOG-2133). Tracked under BACKLOG-2164 / BACKLOG-2116.
 */
export default function Cookies() {
  return (
    <>
      <Nav />
      <main>
        <div className="wrap">
          <article className="legal">
            <h1>Cookie Policy</h1>
            <p>
              Our Cookie Policy is being finalized and will be published here shortly.
              If you have any questions in the meantime, reach us at{" "}
              <a href="mailto:support@keeprcompliance.com">support@keeprcompliance.com</a>.
            </p>
            <Link className="back" href="/">← Back to home</Link>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
