import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service — Keepr",
  description: "Keepr Terms of Service.",
  robots: { index: false },
};

/**
 * Terms of Service — interim placeholder.
 *
 * The counsel-ready v1.0 draft is preserved on the `legal-drafts-staged` branch
 * (commit 5d5705d) and in keepr-legal-drafts/. Swap it in here once it clears
 * final attorney review. Tracked under BACKLOG-2164 / BACKLOG-2116.
 */
export default function Terms() {
  return (
    <>
      <Nav />
      <main>
        <div className="wrap">
          <article className="legal">
            <h1>Terms of Service</h1>
            <p>
              Our full Terms of Service is being finalized and will be published here
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
