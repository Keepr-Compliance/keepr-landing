import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Keepr",
  description: "Keepr privacy policy.",
  robots: { index: false },
};

/**
 * Privacy Policy — v1.0 (Core) draft.
 *
 * Source text: keepr-legal-drafts/privacy-policy.md (v1.0 Core, AI-free launch
 * bundle, Blue Spaces LLC). Reproduced MOSTLY VERBATIM — reformatted from Markdown
 * to JSX only; legal substance is unchanged. DO NOT edit clause wording here.
 *
 * TODO(founder/counsel): this is DRAFT text pending final attorney review before it
 * is presented as the operative, public Privacy Policy. Tracked under BACKLOG-2164
 * (landing) and the Legal, IP & Compliance epic (BACKLOG-2116).
 */
export default function Privacy() {
  return (
    <>
      <Nav />
      <main>
        <div className="wrap">
          <article className="legal">
            <h1>Keepr Privacy Policy</h1>
            <p className="updated">
              Version 1.0 (Core) · Effective date: July 18, 2026 · Draft — pending final
              legal review.
            </p>
            <div className="todo">
              Draft — pending final legal review. This text is reproduced from Keepr&apos;s
              counsel-ready v1.0 (Core) draft and is being finalized with legal counsel. It
              is not yet the operative, attorney-approved Privacy Policy.
            </div>

            <p>
              This Privacy Policy explains how Blue Spaces LLC (&quot;Keepr,&quot; &quot;we,&quot;
              &quot;us,&quot; or &quot;our&quot;) collects, uses, discloses, and protects personal
              information in connection with the Keepr desktop application, the Keepr broker portal,
              and our website. By using Keepr, you acknowledge the practices described here.
            </p>
            <p>
              Keepr helps real-estate agents and brokerages build{" "}
              <strong>audit-ready records</strong> of a transaction&apos;s communications. A core
              design principle of Keepr is that it is <strong>local-first</strong>: most of the data
              you work with stays encrypted on your own device and is not sent to us. This Policy is
              written to reflect that architecture accurately.
            </p>

            <h2>1. Who We Are and Scope</h2>
            <p>This Policy applies to:</p>
            <ul>
              <li>
                <strong>The Keepr desktop application</strong> (macOS and Windows) — the &quot;App&quot;;
              </li>
              <li>
                <strong>The Keepr broker portal</strong> at app.keeprcompliance.com — the
                &quot;Portal&quot;; and
              </li>
              <li>
                <strong>Our website</strong> at keeprcompliance.com — the &quot;Website.&quot;
              </li>
            </ul>
            <p>
              Together, the App, Portal, and Website are the &quot;Services.&quot; Where the App,
              Portal, and Website are treated differently — which is often, because of Keepr&apos;s
              local-first design — we say so.
            </p>
            <p>
              This Policy does <strong>not</strong> cover third-party services you connect to Keepr
              under your own credentials (for example, your Google or Microsoft mailbox). Those
              services are governed by their own privacy policies and by the permissions you grant
              them.
            </p>

            <h2>2. Summary of Keepr&apos;s Data Model</h2>
            <p>
              Because Keepr&apos;s architecture is unusual for a SaaS product, this summary orients
              the rest of the Policy. Details follow in Sections 3–5.
            </p>
            <ul>
              <li>
                <strong>Your primary transaction data stays on your device.</strong> Email bodies,
                text-message bodies, contacts, transactions, and attachments are stored{" "}
                <strong>encrypted on your own device</strong> and are <strong>not</strong> synced to
                Keepr&apos;s servers in the background.
              </li>
              <li>
                <strong>We receive a limited set of data by default</strong> — your account profile,
                device/usage metadata, product analytics, audit logs, and error diagnostics — to
                operate, secure, and improve the Services.
              </li>
              <li>
                <strong>We receive full transaction content only when you explicitly submit a
                transaction to your broker</strong> for review. Until you take that action, that
                content does not leave your device.
              </li>
              <li>
                <strong>Payment data is handled by Stripe.</strong> We do not store full payment card
                numbers.
              </li>
            </ul>

            <h2>3. Information We Collect</h2>
            <p>
              <strong>3.1 Data that stays encrypted on your device and is NOT sent to us.</strong>{" "}
              When you use the App to build transaction records, the following data is created and
              stored <strong>encrypted on your own device</strong> using AES-256 (SQLCipher), with
              the encryption key held in your operating system&apos;s keychain. In the ordinary
              course, this data is <strong>not transmitted to Keepr&apos;s servers</strong>:
            </p>
            <ul>
              <li>
                <strong>Email content</strong> you ingest (message bodies, headers, sender/recipient
                details, and attachments);
              </li>
              <li>
                <strong>Text-message content</strong> you ingest (message bodies, participant
                identifiers, and timestamps);
              </li>
              <li>
                <strong>Contacts</strong> you create or import;
              </li>
              <li>
                <strong>Transactions</strong> you build (parties, property details, prices, notes);
                and
              </li>
              <li>
                <strong>Attachments and other files</strong> associated with a transaction.
              </li>
            </ul>
            <p>
              Because this data resides only on your device (until and unless you submit a
              transaction package to your broker — see Section 3.3), Keepr generally cannot access
              it, produce it, or delete it on your behalf. You control it directly, including by
              deleting it locally.
            </p>
            <p>
              <strong>3.2 Data we receive by default.</strong> To operate the Services, we collect
              and store the following in our cloud infrastructure (primarily Supabase):
            </p>
            <ul>
              <li>
                <strong>Account profile.</strong> Your email address, name, avatar/profile image (if
                provided), and the account identifier associated with your login, including the
                identifier returned by your OAuth provider when you sign in.
              </li>
              <li>
                <strong>Subscription and entitlement status.</strong> Your plan or tier,
                subscription/billing status, and the paid features or per-transaction unlocks
                associated with your account.
              </li>
              <li>
                <strong>Device registrations.</strong> Information identifying the device(s)
                registered to your account, used to enforce licensing (including the one-device
                limit) and to secure your account.
              </li>
              <li>
                <strong>Storage limits and usage.</strong> The storage allocated to your plan and
                your usage against it (for attachments and documents), used to manage entitlements
                and enforce plan limits.
              </li>
              <li>
                <strong>Device and usage metadata.</strong> Information such as app version,
                operating system, device and browser characteristics, feature usage, session
                activity, and license/usage counts (for example, the number of transactions you have
                unlocked or processed).
              </li>
              <li>
                <strong>Product analytics.</strong> Aggregated and event-level analytics about how
                the Services are used, which we use to understand product performance and improve
                features.
              </li>
              <li>
                <strong>Audit logs.</strong> Security and accountability logs recording actions taken
                in the Services (for example, action type, affected resource, user identifier, IP
                address, and user-agent).
              </li>
              <li>
                <strong>Error diagnostics.</strong> Crash and error reports, including stack traces
                and limited application-state information, collected via Supabase and our
                error-monitoring provider, Sentry. We work to minimize personal information in
                diagnostics and are actively tightening the scrubbing of personal information from
                error telemetry; however, diagnostics may occasionally include limited personal
                information.
              </li>
            </ul>
            <p>
              <strong>3.3 Data we receive only when you submit a transaction to your broker.</strong>{" "}
              Keepr allows you to <strong>explicitly submit</strong> a completed transaction package
              to your brokerage for review. <strong>Only when you take this action</strong> does the
              full content of that package leave your device and reach our servers. A submitted
              package may include:
            </p>
            <ul>
              <li>Full email and text-message content associated with the transaction;</li>
              <li>Participant names and contact details;</li>
              <li>Property address, prices, dates, and transaction details; and</li>
              <li>Attachment files.</li>
            </ul>
            <p>
              Submitted packages are stored in our cloud database (Supabase) and are made visible to
              the specific brokerage organization you submitted to. Access is isolated at the tenant
              level using Postgres row-level security (RLS), so one brokerage cannot access
              another&apos;s data. If you never submit a transaction, its content remains on your
              device only.
            </p>
            <p>
              <strong>3.4 Payment data (Stripe).</strong> We use <strong>Stripe</strong> to process
              payments for paid features and per-transaction unlocks. When you make a payment, you
              provide your payment details directly to Stripe, and Stripe processes them under its own
              privacy policy. We do <strong>not</strong> store full payment card numbers. We receive
              limited billing-related information from Stripe (such as a transaction/subscription
              identifier, billing status, and the last four digits or card brand) to manage your
              account and entitlements. Our current pricing is usage-based (fees for paid features and
              per-transaction unlocks); regardless of the specific billing model in effect, payment
              card data is handled by Stripe rather than stored by us.
            </p>
            <p>
              <strong>3.5 Website and support information.</strong> When you visit our Website or
              contact us, we may collect information you provide (such as your name, email, and
              message) and standard server/analytics information (such as IP address, pages viewed,
              and referring URLs). We use this to respond to you, operate the Website, and understand
              traffic.
            </p>
            <p>
              We use the following third-party analytics providers on the Website (and possibly the
              Portal):
            </p>
            <ul>
              <li>
                <strong>Google Analytics</strong> (Google LLC) — traffic and behavior analytics
                (pages viewed, calls-to-action clicked, and similar usage), using cookies.
              </li>
              <li>
                <strong>Microsoft Clarity</strong> (Microsoft Corporation) — behavior analytics that
                also <strong>records user sessions</strong> (replays of mouse movement, clicks,
                scrolls, and page interactions) and builds heatmaps. Where supported, we configure
                masking to avoid capturing sensitive input.
              </li>
              <li>
                <strong>Vercel Analytics</strong> (Vercel Inc.) — privacy-friendly,{" "}
                <strong>cookieless</strong> aggregate site analytics.
              </li>
            </ul>
            <p>
              How these providers set cookies, how session recording works, and how you can opt out
              (including our cookie notice, opt-out controls, and our honoring of Global Privacy
              Control) are described in our{" "}
              <Link href="/cookies">Cookie Policy</Link>.
            </p>

            <h2>4. Email Data — Google (Gmail) and Microsoft</h2>
            <p>
              Keepr can connect to your email so that it can build transaction records from your
              correspondence. You connect your mailbox using <strong>OAuth</strong> — an
              industry-standard authorization flow in which <strong>you</strong> grant Keepr
              permission, and you can revoke that permission at any time. Keepr requests{" "}
              <strong>least-privilege</strong> scopes and accesses your mail only to provide the
              Services&apos; transaction-record features.
            </p>
            <p>
              <strong>4.1 Google (Gmail) — Limited Use Disclosure.</strong> When you connect a Google
              account, Keepr accesses the following Google user data through the scopes you authorize:
            </p>
            <ul>
              <li>
                Your Gmail messages and their content (message bodies, headers, sender/recipient
                information, dates, and attachments) that are relevant to building your transaction
                records; and
              </li>
              <li>
                Basic Google account profile information (such as your name, email address, and
                account identifier) used to establish and maintain the connection.
              </li>
            </ul>
            <p>
              <strong>
                Keepr&apos;s use of information received from Google APIs will adhere to the{" "}
                <a
                  href="https://developers.google.com/terms/api-services-user-data-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google API Services User Data Policy
                </a>
                , including the Limited Use requirements.
              </strong>{" "}
              Specifically:
            </p>
            <ul>
              <li>
                We use Google user data <strong>only</strong> to provide and improve the
                transaction-record features you request within Keepr;
              </li>
              <li>
                We do <strong>not</strong> use Google user data for advertising or marketing purposes;
              </li>
              <li>
                We do <strong>not</strong> sell Google user data, and we do <strong>not</strong>{" "}
                transfer it to others except as necessary to provide and improve user-facing features,
                to comply with applicable law, or as part of a merger, acquisition, or sale of assets
                with appropriate notice;
              </li>
              <li>
                We do <strong>not</strong> use Google user data to develop, improve, or train
                generalized or non-personalized artificial intelligence or machine-learning models;
                and
              </li>
              <li>
                Humans do not read your Google user data except with your affirmative consent, as
                necessary for security purposes (such as investigating abuse), to comply with
                applicable law, or where the data has been aggregated and anonymized.
              </li>
            </ul>
            <p>
              Consistent with Keepr&apos;s local-first design, Gmail content you ingest is stored
              encrypted on your device and is not sent to our servers unless you submit a transaction
              package to your broker (see Section 3.3).
            </p>
            <p>
              <strong>How to revoke Google access.</strong> You can review and revoke Keepr&apos;s
              access to your Google account at any time at{" "}
              <a
                href="https://myaccount.google.com/permissions"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://myaccount.google.com/permissions
              </a>
              . Revoking access stops future syncing; see Section 9 for how connected-account data is
              handled on disconnection.
            </p>
            <p>
              <strong>4.2 Microsoft (Outlook / Microsoft Graph) — Disclosure.</strong> When you
              connect a Microsoft account, Keepr accesses your email through the{" "}
              <strong>Microsoft Graph</strong> API using the scopes you authorize. Keepr accesses:
            </p>
            <ul>
              <li>
                Your Outlook/Exchange Online messages and their content (message bodies, headers,
                sender/recipient information, dates, and attachments) that are relevant to building
                your transaction records; and
              </li>
              <li>
                Basic Microsoft account profile information used to establish and maintain the
                connection.
              </li>
            </ul>
            <p>
              We use Microsoft data <strong>only</strong> to provide and improve the
              transaction-record features you request within Keepr. We do <strong>not</strong> use
              Microsoft data for advertising or marketing, we do <strong>not</strong> sell it, and we
              do <strong>not</strong> use it to develop, improve, or train generalized or
              non-personalized AI/ML models. Our handling of Microsoft data is consistent with the
              Microsoft APIs Terms of Use and applicable Microsoft platform policies. As with Gmail,
              Microsoft email content you ingest is stored encrypted on your device and is not sent to
              our servers unless you submit a transaction package to your broker.
            </p>
            <p>
              <strong>How to revoke Microsoft access.</strong> You can review and revoke application
              permissions from your Microsoft account security and privacy settings at{" "}
              <a href="https://account.microsoft.com/" target="_blank" rel="noopener noreferrer">
                https://account.microsoft.com/
              </a>{" "}
              (or, for work/school accounts, through your organization&apos;s Microsoft Entra ID /
              Azure Active Directory &quot;My Apps&quot; portal at{" "}
              <a
                href="https://myapplications.microsoft.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://myapplications.microsoft.com/
              </a>
              ).
            </p>

            <h2>5. Text Messages</h2>
            <p>
              Keepr can incorporate text (SMS/MMS) messages into your transaction records.{" "}
              <strong>
                Keepr does not send text messages and does not operate as a messaging carrier or
                gateway.
              </strong>{" "}
              Text-message content is ingested from <strong>your own device or a companion
              application</strong> (for example, the Android SMS provider on a paired device, or your
              Mac). This content is stored encrypted on your device like your other primary data
              (Section 3.1).
            </p>
            <p>
              <strong>
                You are responsible for having the authority and consent to capture the messages you
                ingest.
              </strong>{" "}
              By ingesting text messages, you represent that you own or are authorized to access those
              messages and that you have obtained any consents required by applicable law. Laws on
              recording or retaining communications vary by jurisdiction — some U.S. states require the
              consent of only one party to a communication (&quot;one-party consent&quot;), while
              others require the consent of all parties (&quot;two-party&quot; or &quot;all-party
              consent&quot;). You are solely responsible for compliance with the laws applicable to you
              and to the communications you capture. See also our Terms of Service.
            </p>

            <h2>6. [Reserved]</h2>

            <h2>7. How We Use Information</h2>
            <p>
              We use the information we receive (as described in Sections 3–5) to:
            </p>
            <ul>
              <li>
                Provide, maintain, and secure the Services, including authenticating you and enforcing
                entitlements;
              </li>
              <li>Enable the broker-submission workflow you initiate;</li>
              <li>Process payments and manage billing through Stripe;</li>
              <li>Monitor, debug, and improve the Services (including analytics and error diagnostics);</li>
              <li>Maintain audit logs for security and accountability;</li>
              <li>Communicate with you about your account, transactions, security, and product updates;</li>
              <li>Provide customer support; and</li>
              <li>Comply with legal obligations and enforce our agreements.</li>
            </ul>
            <p>
              We do <strong>not</strong> use the content that stays on your device to do any of the
              above, because we do not receive it (unless you submit it to your broker).
            </p>

            <h2>8. How We Share Information</h2>
            <p>
              We do <strong>not sell</strong> personal information, and we do <strong>not share</strong>{" "}
              personal information for cross-context behavioral advertising, as those terms are used
              under California and other U.S. state privacy laws.
            </p>
            <p>
              <strong>8.1 Sub-processors and service providers.</strong> We use the following service
              providers (&quot;sub-processors&quot;) to operate the Services. They process personal
              information on our behalf under contractual confidentiality and data-protection
              obligations:
            </p>
            <ul>
              <li>
                <strong>Supabase</strong> — Cloud database and authentication (account profile,
                metadata, audit logs, diagnostics, and submitted transaction packages).
              </li>
              <li>
                <strong>Vercel</strong> — Hosting of the broker Portal (Portal request/traffic data).
              </li>
              <li>
                <strong>Sentry</strong> — Error and crash monitoring (error diagnostics, PII-minimized).
              </li>
              <li>
                <strong>Stripe</strong> — Payment processing (billing and payment data).
              </li>
              <li>
                <strong>Google Maps API</strong> — Property-address autocomplete (typed
                property-address query strings).
              </li>
              <li>
                <strong>Google (Google Analytics)</strong> — Website traffic and behavior analytics
                (website usage/behavior data, device/browser data, IP address; sets cookies).
              </li>
              <li>
                <strong>Microsoft (Microsoft Clarity)</strong> — Website behavior analytics, including
                session recording and heatmaps (website usage/behavior data and session recordings,
                with masking configured where supported; sets cookies).
              </li>
              <li>
                <strong>Vercel (Vercel Analytics)</strong> — Privacy-friendly, cookieless aggregate
                website analytics (aggregate site-usage metrics; cookieless).
              </li>
            </ul>
            <p>
              Our website analytics sub-processors (Google Analytics, Microsoft Clarity, and Vercel
              Analytics) and the related cookies, session recording, and opt-out mechanisms are
              described in more detail in our <Link href="/cookies">Cookie Policy</Link>.
            </p>
            <p>
              Our source code is hosted with <strong>GitHub</strong>, which does not receive customer
              data.
            </p>
            <p>
              <strong>8.2 Services you direct.</strong> When you use certain features, information is
              transmitted to third parties <strong>at your direction</strong> and under your own
              credentials or keys: <strong>Google</strong> and <strong>Microsoft</strong> (your
              connected mailboxes, via OAuth). These are not our sub-processors; they act under your
              instructions and their own terms.
            </p>
            <p>
              <strong>8.3 Your brokerage.</strong> When you <strong>submit a transaction</strong>{" "}
              (Section 3.3), the submitted package is shared with the brokerage organization you submit
              to. That brokerage&apos;s use of the data is subject to its own policies.
            </p>
            <p>
              <strong>8.4 Legal, safety, and business transfers.</strong> We may disclose information
              if required by law, subpoena, or legal process; to protect the rights, safety, or
              property of Keepr, our users, or the public; or in connection with a merger, acquisition,
              financing, or sale of assets, in which case we will provide notice as required by law.
            </p>

            <h2>9. Retention and Deletion</h2>
            <ul>
              <li>
                <strong>Data on your device.</strong> Data stored locally (Section 3.1) is controlled
                by <strong>you</strong>. It persists on your device until you delete it or uninstall
                the App. We cannot retrieve or delete it for you because we do not have it.
              </li>
              <li>
                <strong>Cloud account data.</strong> Data we hold in the cloud (Section 3.2) is
                retained while your account is active and for as long as reasonably necessary to
                provide the Services, comply with legal obligations, resolve disputes, and enforce our
                agreements, after which it is deleted or de-identified.
              </li>
              <li>
                <strong>Submitted transaction packages.</strong> Submitted packages (Section 3.3) are
                retained in the destination brokerage&apos;s tenant according to that brokerage&apos;s
                needs and our retention practices; the brokerage may also retain copies under its own
                control.
              </li>
              <li>
                <strong>Connected email accounts.</strong> If you disconnect a Google or Microsoft
                account, or revoke access at the provider, we cease further syncing and{" "}
                <strong>purge data derived from that connection that we hold within 30 days of
                disconnection</strong>, except where retention is required by law.
              </li>
              <li>
                <strong>Diagnostics and logs.</strong> Error diagnostics and audit logs are retained
                for limited periods appropriate to security and debugging.
              </li>
            </ul>
            <p>
              <strong>Account deletion.</strong> You may request deletion of your account and
              associated cloud data by contacting us at <strong>privacy@keeprcompliance.com</strong>.
              We will process the request within the timeframe required by applicable law. Deleting
              your account does not delete data stored locally on your device (which you control
              directly) or data already held by a brokerage you submitted to.
            </p>

            <h2>10. Security</h2>
            <p>
              We take reasonable and appropriate measures to protect personal information, including:
            </p>
            <ul>
              <li>
                <strong>Encryption at rest.</strong> On-device data is encrypted with SQLCipher
                AES-256, with keys held in your operating system&apos;s keychain; cloud data is
                encrypted at rest by Supabase.
              </li>
              <li>
                <strong>Encryption in transit.</strong> TLS/HTTPS is used across the Services.
              </li>
              <li>
                <strong>Tenant isolation.</strong> The Portal enforces Postgres row-level security so
                brokerages cannot access one another&apos;s data.
              </li>
              <li>
                <strong>Change management.</strong> We use branch protection, peer code review, CI
                security scanning, and signed commits.
              </li>
              <li>
                <strong>Vetted infrastructure.</strong> Our infrastructure providers (such as
                Supabase/AWS and Vercel) maintain SOC 2 certifications.{" "}
                <strong>Keepr itself is pre-attestation</strong> and is self-assessing against SOC 2
                criteria; we do <strong>not</strong> claim that Keepr is SOC 2 certified.
              </li>
            </ul>
            <p>
              A known hardening item in progress is tightening the scrubbing of personal information
              from error telemetry. No method of transmission or storage is completely secure, and we
              cannot guarantee absolute security.
            </p>

            <h2>11. Your Privacy Rights</h2>
            <p>
              <strong>11.1 California (CCPA/CPRA).</strong> If you are a California resident, you have
              the right to: <strong>know</strong> what personal information we collect, use, and
              disclose; <strong>access</strong> and obtain a copy of it; <strong>correct</strong>{" "}
              inaccurate personal information; <strong>delete</strong> it (subject to exceptions); and{" "}
              <strong>opt out of the sale or sharing</strong> of personal information and of certain
              targeted advertising. We <strong>do not sell</strong> personal information and{" "}
              <strong>do not share</strong> it for cross-context behavioral advertising; nonetheless,
              we honor opt-out requests and provide a{" "}
              <strong>&quot;Do Not Sell or Share My Personal Information&quot;</strong> mechanism. We
              will <strong>not discriminate</strong> against you for exercising your rights. You may
              also designate an authorized agent to make requests on your behalf.
            </p>
            <p>
              <strong>11.2 Virginia, Colorado, Connecticut, Utah, and Texas.</strong> If you are a
              resident of Virginia (VCDPA), Colorado (CPA), Connecticut (CTDPA), Utah (UCPA), or Texas
              (TDPSA), you have the right to: confirm whether we process your personal data and access
              it; correct inaccuracies (where applicable); delete personal data; obtain a portable
              copy; and opt out of targeted advertising, sale, and certain profiling. Several of these
              laws also provide a right to <strong>appeal</strong> a denied request; if we deny your
              request, we will inform you how to appeal.
            </p>
            <p>
              <strong>11.3 Users Outside the United States.</strong> The Service is offered only in the
              United States and is intended for <strong>US users</strong>. It is{" "}
              <strong>not directed to individuals in the European Union, the European Economic Area,
              the United Kingdom, or Switzerland</strong>. If you are located in any of those regions,
              please do not use the Service. Accordingly, this Policy does not provide rights or
              mechanisms specific to the EU/EEA/UK General Data Protection Regulation or equivalent
              non-US laws.
            </p>
            <p>
              <strong>11.4 How to Exercise Your Rights.</strong> To exercise any of these rights,
              contact us at <strong>privacy@keeprcompliance.com</strong>. We will verify your request
              (typically by confirming control of the account email) and respond within the period
              required by applicable law. Because much of your data resides only on your device, some
              requests may be satisfied directly by you within the App.
            </p>

            <h2>12. Children&apos;s Privacy</h2>
            <p>
              The Services are intended for real-estate professionals and are{" "}
              <strong>not directed to children</strong>. We do not knowingly collect personal
              information from anyone under 18 (or under 16 where a lower threshold applies under state
              law). If you believe a minor has provided us personal information, contact us at{" "}
              <strong>privacy@keeprcompliance.com</strong> and we will delete it.
            </p>

            <h2>13. Where We Store and Process Data</h2>
            <p>
              We are based in the United States, and Keepr stores and processes personal information in
              the <strong>United States</strong>. The Service is offered only to US users (see Section
              11.3).
            </p>

            <h2>14. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. When we do, we will revise the
              &quot;Effective date&quot; above and, where changes are material, provide additional
              notice (for example, by email or an in-product notice). Your continued use of the
              Services after an update takes effect constitutes acceptance of the revised Policy.
            </p>

            <h2>15. Contact</h2>
            <p>
              If you have questions about this Privacy Policy or our privacy practices, or wish to
              exercise your rights, contact us at:
            </p>
            <ul>
              <li>
                <strong>Privacy email:</strong> privacy@keeprcompliance.com
              </li>
              <li>
                <strong>Mailing address:</strong> Blue Spaces LLC, 382 NE 191st St, PMB 64835, Miami,
                FL 33179-3899
              </li>
              <li>
                <strong>Privacy Contact:</strong> privacy@keeprcompliance.com
              </li>
            </ul>
            <p>
              Our Privacy Contact (privacy@keeprcompliance.com) serves as our contact for
              data-protection and privacy-rights matters.
            </p>

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
