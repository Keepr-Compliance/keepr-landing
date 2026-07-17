import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { legalEntity } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service — Keepr",
  description: "Keepr terms of service.",
  robots: { index: false },
};

/**
 * Terms of Service — STUB.
 * TODO(founder): replace this placeholder with the real, legally reviewed Terms of
 * Service before the site is public.
 */
export default function Terms() {
  return (
    <>
      <Nav />
      <main>
        <div className="wrap">
          <article className="legal">
            <h1>Terms of Service</h1>
            <p className="updated">Draft — not yet published.</p>
            <div className="todo">
              TODO(founder): This is a placeholder. Real, legally reviewed Terms of Service
              for {legalEntity} (Keepr) must replace this before public launch.
            </div>
            <p>
              Keepr is a productivity tool for organizing and auditing real estate
              transaction communications and documents. It is not legal advice, a legal
              compliance system, or a substitute for professional counsel. These terms will
              set out the agreement between you and {legalEntity}.
            </p>
            <h2>Sections to be completed</h2>
            <ul>
              <li>Acceptance of terms and eligibility</li>
              <li>License to use the Keepr desktop application</li>
              <li>Per-deal (pay-as-you-go) billing terms and refunds</li>
              <li>Acceptable use and your responsibilities</li>
              <li>Disclaimers, limitation of liability, and indemnification</li>
              <li>Termination and governing law</li>
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
