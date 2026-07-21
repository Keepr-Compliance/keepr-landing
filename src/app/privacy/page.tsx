import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Keepr",
  description: "Keepr Privacy Policy.",
  robots: { index: false },
};

/**
 * Privacy Policy — interim placeholder.
 *
 * The counsel-ready v1.0 draft is preserved on the `legal-drafts-staged` branch
 * (commit 5d5705d) and in keepr-legal-drafts/. Swap it in here once it clears
 * final attorney review. Tracked under BACKLOG-2164 / BACKLOG-2116.
 */
export default function Privacy() {
  return (
    <>
      <Nav />
      <main>
        <div className="wrap">
          <article className="legal">
            <h1>Privacy Policy</h1>
            <p>
              Our full Privacy Policy is being finalized and will be published here
              shortly. If you have any questions in the meantime, reach us at{" "}
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
