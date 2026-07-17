import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { legalEntity } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy — Keepr",
  description: "Keepr privacy policy.",
  robots: { index: false },
};

/**
 * Privacy Policy — STUB.
 * TODO(founder): replace this placeholder with the real, legally reviewed Privacy
 * Policy before the site is public.
 */
export default function Privacy() {
  return (
    <>
      <Nav />
      <main>
        <div className="wrap">
          <article className="legal">
            <h1>Privacy Policy</h1>
            <p className="updated">Draft — not yet published.</p>
            <div className="todo">
              TODO(founder): This is a placeholder. A real, legally reviewed Privacy Policy
              for {legalEntity} (Keepr) must replace this before public launch.
            </div>
            <p>
              Keepr is local-first: your messages, emails, and client records are encrypted
              and stored on your own device. This page will describe, in full, what data
              Keepr collects, how it is stored and secured, when (if ever) data leaves your
              device, and your rights as a user.
            </p>
            <h2>Sections to be completed</h2>
            <ul>
              <li>Information we collect and how it is used</li>
              <li>Local-first storage and encryption</li>
              <li>Optional cloud sync (team subscriptions) and its scope</li>
              <li>Third-party integrations (Gmail, Outlook/M365, iMessage, Android)</li>
              <li>Data retention, export, and deletion</li>
              <li>Your rights and how to contact us</li>
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
