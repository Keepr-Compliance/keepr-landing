import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cookie Policy — Keepr",
  description: "How Keepr uses cookies and similar technologies.",
  robots: { index: false },
};

/**
 * Cookie Policy — v1.0 (Core) draft.
 *
 * Source text: keepr-legal-drafts/cookie-policy.md (v1.0 Core, Blue Spaces LLC).
 * Reproduced MOSTLY VERBATIM — reformatted from Markdown to JSX only (the Section 2
 * category table is rendered as a definition-style list because the .legal style has
 * no table styling); legal substance is unchanged. DO NOT edit clause wording here.
 *
 * TODO(founder/counsel): this is DRAFT text pending final attorney review before it
 * is presented as the operative, public Cookie Policy. Tracked under BACKLOG-2164
 * (landing), BACKLOG-2122 / BACKLOG-2133 (Cookie Policy + consent banner +
 * CCPA/CPRA/GPC + Microsoft Clarity handling), and the Legal, IP & Compliance epic
 * (BACKLOG-2116).
 */
export default function Cookies() {
  return (
    <>
      <Nav />
      <main>
        <div className="wrap">
          <article className="legal">
            <h1>Keepr — Cookie Policy</h1>
            <p className="updated">
              Effective date: July 18, 2026 · Draft — pending final legal review.
            </p>
            <div className="todo">
              Draft — pending final legal review. This text is reproduced from Keepr&apos;s
              counsel-ready v1.0 (Core) draft and is being finalized with legal counsel. It
              is not yet the operative, attorney-approved Cookie Policy.
            </div>

            <p>
              This Cookie Policy explains how Blue Spaces LLC (&quot;<strong>Keepr</strong>,&quot;
              &quot;<strong>we</strong>,&quot; &quot;<strong>us</strong>,&quot; or &quot;
              <strong>our</strong>&quot;) uses cookies and similar technologies on our marketing
              website at keeprcompliance.com and our broker portal at app.keeprcompliance.com
              (together, the &quot;<strong>Sites</strong>&quot;).
            </p>
            <p>
              <strong>Scope — web only.</strong> This policy applies only to our web properties.
              The <strong>Keepr desktop application</strong> (the Electron app for macOS and
              Windows) is not a website and generally does <strong>not</strong> use cookies. It
              stores its data locally on your device and, where it communicates with our servers,
              uses application tokens rather than browser cookies. This policy therefore governs
              the Sites, not the desktop app.
            </p>
            <p>
              For information about how we handle personal data generally, see our{" "}
              <Link href="/privacy">Privacy Policy</Link> (see Section 8).
            </p>

            <h2>1. What are cookies and similar technologies?</h2>
            <p>
              A <strong>cookie</strong> is a small text file that a website places on your device
              (computer, phone, or tablet) when you visit. Cookies let a site recognize your
              device, remember your actions and preferences, and understand how the site is used.
            </p>
            <p>
              We also use technologies that work like cookies, which this policy refers to
              collectively as &quot;<strong>cookies</strong>&quot;:
            </p>
            <ul>
              <li>
                <strong>Local storage / session storage</strong> — data stored by your browser to
                keep you signed in or to remember settings.
              </li>
              <li>
                <strong>Pixels / tags</strong> — tiny snippets of code or images used to measure
                whether a page loaded or an action occurred.
              </li>
              <li>
                <strong>Software development kits (SDKs) and scripts</strong> — code loaded on a
                page to enable a feature or measurement.
              </li>
            </ul>
            <p>Cookies may be:</p>
            <ul>
              <li>
                <strong>First-party</strong> — set by the Keepr Site you are visiting; or
              </li>
              <li>
                <strong>Third-party</strong> — set by a service provider we use (for example, an
                analytics provider).
              </li>
            </ul>
            <p>Cookies may also be:</p>
            <ul>
              <li>
                <strong>Session cookies</strong> — deleted when you close your browser; or
              </li>
              <li>
                <strong>Persistent cookies</strong> — remain until they expire or you delete them.
              </li>
            </ul>

            <h2>2. Categories of cookies we use</h2>
            <p>
              We aim to use as few cookies as possible. The categories below describe the types of
              cookies we use and why. Specific cookie names, providers, and durations may change;
              our preferences/opt-out mechanism (see Section 3) presents the current list at the
              time of your visit.
            </p>
            <ul>
              <li>
                <strong>Strictly Necessary.</strong> Enables core functionality of the broker
                portal (app.keeprcompliance.com): authentication, keeping you signed in during a
                session, load balancing, and security (e.g., protecting against cross-site request
                forgery). The Sites cannot function properly without these. First-party (portal);
                may include first-party cookies set by our infrastructure providers to deliver the
                service. <strong>Opt-out: No — always active.</strong>
              </li>
              <li>
                <strong>Analytics / Performance (third-party, non-essential).</strong> Helps us
                understand how visitors use our marketing website (keeprcompliance.com) — for
                example, which pages are viewed and whether calls-to-action (such as &quot;Get
                Keepr&quot; or &quot;Sign up&quot;) are clicked — so we can improve the site. This
                category covers <strong>Google Analytics</strong> and{" "}
                <strong>Microsoft Clarity</strong> (which also records sessions and builds heatmaps
                — see Section 5). <strong>Vercel Analytics</strong> also provides site analytics but
                is <strong>cookieless</strong> and so does not set cookies in this category.
                Third-party (see Section 5). <strong>Opt-out: Yes</strong> — you can opt out (Vercel
                Analytics, being cookieless, sets no cookies to opt out of).
              </li>
              <li>
                <strong>Advertising / Targeting.</strong>{" "}
                <strong>
                  We do not use advertising or targeting cookies, and we do not use cookies to build
                  advertising profiles or to track you across other websites for ad purposes.
                </strong>
              </li>
            </ul>
            <p>
              <strong>Strictly Necessary cookies</strong> are not subject to opt-out because they
              are required to deliver a service you have requested (such as signing in). You can
              still block them via your browser (see Section 4), but doing so may break sign-in and
              other portal features.
            </p>

            <h2>3. Cookie notice and your choices</h2>
            <p>
              The Service is offered only in the United States and is intended for{" "}
              <strong>US users</strong>. We follow a <strong>notice-and-opt-out</strong> approach to
              cookies rather than a prior-consent (opt-in) model.
            </p>
            <p>
              <strong>3.1 Notice and opt-out.</strong> We provide this Cookie Policy as{" "}
              <strong>notice</strong> of the cookies we use. <strong>Strictly Necessary</strong>{" "}
              cookies are always active because they are required to deliver a service you requested
              (such as signing in). For non-essential <strong>Analytics / Performance</strong>{" "}
              cookies (such as <strong>Google Analytics</strong> and{" "}
              <strong>Microsoft Clarity</strong>), <strong>you can opt out</strong> at any time
              through our preferences/opt-out mechanism (see Section 4). We do not sell your personal
              information and we do not use advertising or targeting cookies.
            </p>
            <p>
              <strong>3.2 US state privacy laws (CCPA / CPRA and other state laws).</strong>{" "}
              Depending on your state (for example, California, Colorado, Connecticut, Virginia,
              Utah, or Texas), you may have additional privacy rights described in our{" "}
              <Link href="/privacy">Privacy Policy</Link>, including the right to opt out of the
              &quot;sale&quot; or &quot;sharing&quot; of personal information.
            </p>
            <p>
              <strong>3.3 Global Privacy Control (GPC).</strong> We honor the{" "}
              <strong>Global Privacy Control (GPC)</strong> signal. If your browser or a browser
              extension sends a GPC signal, we treat it as a valid request to opt out of the
              &quot;sale&quot; or &quot;sharing&quot; of personal information and of targeted
              advertising for that browser, and we disable non-essential analytics cookies
              accordingly, as required by the CCPA/CPRA and similar state laws. Because GPC is
              browser- and device-specific, you may need to enable it on each browser and device you
              use.
            </p>

            <h2>4. How to control cookies</h2>
            <p>You have several ways to control cookies:</p>
            <ul>
              <li>
                <strong>Our preferences/opt-out mechanism.</strong> On the Sites, use the{" "}
                <strong>&quot;Cookie settings&quot;</strong> /{" "}
                <strong>&quot;Manage cookies&quot;</strong> link (typically in the website footer) to
                opt out of non-essential categories and to change your choices later.
              </li>
              <li>
                <strong>Global Privacy Control (GPC).</strong> Enable GPC in a supported browser or
                extension to send an automated opt-out signal that we will honor (see Section 3.3).
              </li>
              <li>
                <strong>Browser settings.</strong> Most browsers let you block or delete cookies,
                block third-party cookies, or alert you when a cookie is set. See your browser&apos;s
                help pages: Google Chrome, Apple Safari, Mozilla Firefox, and Microsoft Edge each
                provide cookie controls in their privacy or settings menus.
              </li>
              <li>
                <strong>Opt-out tools.</strong> Some analytics providers offer their own opt-out
                mechanisms (see Section 5).
              </li>
            </ul>
            <p>
              <strong>Please note:</strong> blocking or deleting <strong>Strictly Necessary</strong>{" "}
              cookies may prevent you from signing in to or using the broker portal. Blocking
              analytics cookies will not affect core functionality. Because cookie choices are
              stored in a cookie, clearing your cookies will also clear your saved preferences, and
              you may be asked to choose again.
            </p>

            <h2>5. Third-party analytics providers</h2>
            <p>
              We use the following third-party analytics providers to measure website usage and
              calls-to-action on keeprcompliance.com. The founder may use any or all of them:
            </p>
            <ul>
              <li>
                <strong>Google Analytics</strong> (Google LLC) — traffic and behavior analytics
                measuring how visitors use the site and which calls-to-action are clicked. Sets
                cookies (for example, <code>_ga</code>). Privacy policy:{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://policies.google.com/privacy
                </a>
                .
              </li>
              <li>
                <strong>Microsoft Clarity</strong> (Microsoft Corporation) — behavior analytics{" "}
                <strong>including session recording and heatmaps</strong>. Clarity captures mouse
                movement, clicks, scrolls, and page interactions and can replay recordings of user
                sessions. Sets cookies. Microsoft Privacy Statement:{" "}
                <a
                  href="https://privacy.microsoft.com/privacystatement"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://privacy.microsoft.com/privacystatement
                </a>
                .
              </li>
              <li>
                <strong>Vercel Analytics</strong> (Vercel Inc.) — privacy-friendly,{" "}
                <strong>cookieless</strong> aggregate site analytics. Vercel Analytics does{" "}
                <strong>not</strong> set cookies and does not use them to track you across sites.
                Privacy policy:{" "}
                <a
                  href="https://vercel.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://vercel.com/legal/privacy-policy
                </a>
                .
              </li>
            </ul>
            <p>
              <strong>Note on session recording (Microsoft Clarity).</strong> Microsoft Clarity{" "}
              <strong>records user sessions</strong> — it replays how visitors move through and
              interact with pages. Where the tool supports it, Keepr configures{" "}
              <strong>masking</strong> to avoid capturing sensitive input (such as text you type into
              form fields). You can <strong>opt out</strong> of Clarity (and Google Analytics) at
              any time through our preferences/opt-out mechanism (see Section 4).
            </p>
            <p>
              Because session recording can implicate US state{" "}
              <strong>session-replay and wiretap/eavesdropping laws</strong> (for example, in
              California, Florida, and Pennsylvania), Keepr treats this technology carefully — using
              masking to avoid capturing sensitive input, providing this disclosure, and honoring
              opt-out and Global Privacy Control signals.
            </p>
            <p>
              We do not share analytics data with advertising networks, and we do not use it to
              identify you personally or to serve ads. If a provider we use is later changed or
              added, we will update this section.
            </p>

            <h2>6. Changes to cookies over time</h2>
            <p>
              The specific cookies used on the Sites may change as we add or remove features,
              providers, or measurement tools. Our preferences/opt-out mechanism reflects the current
              cookie list at the time of your visit, which may differ from the categories described
              above.
            </p>

            <h2>7. Changes to this Cookie Policy</h2>
            <p>
              We may update this Cookie Policy from time to time to reflect changes in the
              technologies we use, in applicable law, or in our practices. When we make material
              changes, we will update the &quot;Effective date&quot; above and, where required,
              provide additional notice on the Sites. We encourage you to review this policy
              periodically.
            </p>

            <h2>8. Related policies and contact</h2>
            <p>
              This Cookie Policy is part of, and should be read together with, our{" "}
              <Link href="/privacy">Privacy Policy</Link>, which explains our broader data practices
              and your privacy rights.
            </p>
            <p>
              If you have questions about this Cookie Policy or our use of cookies, contact us at:
            </p>
            <ul>
              <li>
                <strong>Privacy Contact:</strong> privacy@keeprcompliance.com
              </li>
              <li>
                <strong>General support:</strong> support@keeprcompliance.com
              </li>
              <li>
                <strong>Mailing address:</strong> 382 NE 191st St, PMB 64835, Miami, FL 33179-3899
              </li>
            </ul>
            <p>Blue Spaces LLC</p>

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
