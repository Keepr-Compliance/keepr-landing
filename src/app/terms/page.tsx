import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service — Keepr",
  description: "Keepr terms of service.",
  robots: { index: false },
};

/**
 * Terms of Service — v1.0 (Core) draft.
 *
 * Source text: keepr-legal-drafts/terms-of-service.md (v1.0 Core, AI-free launch
 * bundle, Blue Spaces LLC). Reproduced MOSTLY VERBATIM — reformatted from Markdown
 * to JSX only; legal substance is unchanged. DO NOT edit clause wording here.
 *
 * TODO(founder/counsel): this is DRAFT text pending final attorney review before it
 * is presented as the operative, public Terms of Service. Tracked under BACKLOG-2164
 * (landing) and the Legal, IP & Compliance epic (BACKLOG-2116).
 */
export default function Terms() {
  return (
    <>
      <Nav />
      <main>
        <div className="wrap">
          <article className="legal">
            <h1>Keepr — Terms of Service</h1>
            <p className="updated">
              Version 1.0 (Core) · Effective Date: July 18, 2026 · Draft — pending final
              legal review.
            </p>
            <div className="todo">
              Draft — pending final legal review. This text is reproduced from Keepr&apos;s
              counsel-ready v1.0 (Core) draft and is being finalized with legal counsel. It
              is not yet the operative, attorney-approved Terms of Service.
            </div>

            <p>
              These Terms of Service (&quot;<strong>Terms</strong>&quot;) form a binding
              agreement between you (&quot;<strong>you</strong>,&quot; &quot;
              <strong>your</strong>,&quot; or &quot;<strong>User</strong>&quot;) and Blue
              Spaces LLC (&quot;<strong>Keepr</strong>,&quot; &quot;<strong>we</strong>,&quot;
              &quot;<strong>us</strong>,&quot; or &quot;<strong>our</strong>&quot;), the
              operator of the Keepr desktop application and the Keepr broker portal. These
              Terms govern your access to and use of the Service (defined below).
            </p>
            <p>
              <strong>PLEASE READ THESE TERMS CAREFULLY.</strong> By creating an account,
              downloading or installing the desktop application, accessing the broker portal,
              or otherwise using the Service, you agree to be bound by these Terms and by our
              Privacy Policy, Acceptable Use Policy, Billing &amp; Refund Policy, End User
              License Agreement (EULA), and — for brokerage/Organization customers — the Data
              Processing Agreement (DPA), each of which is incorporated by reference.{" "}
              <strong>
                SECTION 16 CONTAINS A BINDING ARBITRATION PROVISION AND A CLASS-ACTION WAIVER
                THAT AFFECT YOUR LEGAL RIGHTS. PLEASE REVIEW THEM CAREFULLY.
              </strong>
            </p>
            <p>If you do not agree to these Terms, do not use the Service.</p>

            <h2>1. Acceptance of Terms; Eligibility</h2>
            <p>
              <strong>1.1 Acceptance.</strong> By accessing or using the Service, you
              acknowledge that you have read, understood, and agree to be bound by these Terms.
              If you use the Service on behalf of a brokerage, company, or other organization
              (an &quot;<strong>Organization</strong>&quot;), you represent and warrant that
              you have the authority to bind that Organization to these Terms, and &quot;
              you&quot; refers to both you individually and that Organization.
            </p>
            <p>
              <strong>1.2 Eligibility.</strong> The Service is intended for use by{" "}
              <strong>real-estate professionals in the United States</strong> — including
              licensed agents, brokers, transaction coordinators, and brokerage office staff —
              and the brokerages that supervise them. You must be at least{" "}
              <strong>18 years of age</strong> and capable of forming a legally binding
              contract to use the Service. By using the Service, you represent and warrant that
              you meet these requirements, that you are using the Service for legitimate
              real-estate transaction activities, and that you are not barred from using the
              Service under the laws of the United States or any other applicable jurisdiction.
              You must create an Account using <strong>Google or Microsoft sign-in</strong>{" "}
              (see Section 4).
            </p>
            <p>
              <strong>1.3 Registration Not Required to Be Bound.</strong> Downloading,
              installing, or using any part of the Service constitutes acceptance of these
              Terms even if you do not complete account registration.
            </p>

            <h2>2. Definitions</h2>
            <p>
              For the purposes of these Terms, the following capitalized terms have the
              meanings set out below. Other terms are defined where they first appear.
            </p>
            <ul>
              <li>
                <strong>&quot;Service&quot;</strong> means, collectively, the Keepr desktop
                application, the Keepr broker portal, and all related software, websites, APIs,
                features, content, and services made available by Keepr.
              </li>
              <li>
                <strong>&quot;Desktop App&quot;</strong> means the Keepr local-first desktop
                application (Electron; macOS and Windows) that stores your transaction data
                encrypted on your own device.
              </li>
              <li>
                <strong>&quot;Broker Portal&quot;</strong> or <strong>&quot;Portal&quot;</strong>{" "}
                means the web application (hosted at app.keeprcompliance.com) through which a
                brokerage reviews transactions that an agent has explicitly submitted.
              </li>
              <li>
                <strong>&quot;Account&quot;</strong> means the registered account used to access
                the Service.
              </li>
              <li>
                <strong>&quot;User Content&quot;</strong> means any data, files, communications,
                messages, contacts, transactions, attachments, notes, and other materials that
                you create, upload, ingest, submit, or store through the Service, including
                emails and text messages you ingest.
              </li>
              <li>
                <strong>&quot;Submitted Transaction&quot;</strong> means a transaction package
                that you explicitly submit from the Desktop App to your brokerage for review
                through the Broker Portal.
              </li>
              <li>
                <strong>&quot;Audit-Ready Records&quot;</strong> means the organized,
                best-effort records of a transaction&apos;s communications that the Service
                helps you assemble. See Section 10 for important limitations on this term.
              </li>
              <li>
                <strong>&quot;Paid Features&quot;</strong> means features, unlocks, or capacity
                that require payment of Fees, including per-deal and per-transaction unlocks.
              </li>
              <li>
                <strong>&quot;Fees&quot;</strong> means the amounts payable for Paid Features as
                described in Section 8 and the Billing &amp; Refund Policy.
              </li>
              <li>
                <strong>&quot;Third-Party Services&quot;</strong> means third-party products,
                platforms, and services that integrate with or are used in connection with the
                Service, including Google, Microsoft, and Stripe.
              </li>
              <li>
                <strong>&quot;AUP&quot;</strong> means the Keepr Acceptable Use Policy.
              </li>
            </ul>

            <h2>3. Description of the Service</h2>
            <p>
              <strong>3.1 What Keepr Does.</strong> Keepr helps real-estate agents build
              organized, Audit-Ready Records of a transaction&apos;s communications. The Service
              has two principal surfaces operated under one company:
            </p>
            <ul>
              <li>
                <strong>The Desktop App</strong> ingests emails (via your own authorized email
                account) and text messages (from your own device or a companion app), associates
                them with transactions and contacts, and helps you assemble records for your own
                use.
              </li>
              <li>
                <strong>The Broker Portal</strong> allows a brokerage to review Submitted
                Transactions that its agents have explicitly submitted for supervisory review.
              </li>
            </ul>
            <p>
              <strong>3.2 Local-First Architecture.</strong> The Desktop App is{" "}
              <strong>local-first</strong>. Your primary transaction data — including email
              bodies, text-message bodies, contacts, transactions, and attachments — is stored{" "}
              <strong>encrypted on your own device</strong> and is{" "}
              <strong>not synced to Keepr&apos;s servers in the background</strong>. Certain
              account, usage, license, diagnostic, and audit-log metadata is transmitted to and
              stored on Keepr&apos;s cloud infrastructure as described in the Privacy Policy.
              Your primary transaction content leaves your device only when <strong>you</strong>{" "}
              explicitly submit a transaction to your brokerage for review, or as otherwise
              described in the Privacy Policy.
            </p>
            <p>
              <strong>3.3 Local Data Is Your Responsibility.</strong> Because primary
              transaction data is stored on your device,{" "}
              <strong>
                you are responsible for the security, backup, and retention of that data
              </strong>
              , including maintaining access to your device, operating-system keychain, and
              encryption keys. Keepr does not maintain a background copy of your local data and
              generally <strong>cannot recover</strong> local data if your device is lost,
              damaged, reset, or if your keychain credentials are lost. You are strongly
              encouraged to maintain your own backups.
            </p>
            <p>
              <strong>3.4 Changes to the Service.</strong> Keepr may modify, add, suspend, or
              discontinue any part of the Service at any time. We will use commercially
              reasonable efforts to notify you of material changes that adversely affect your use
              of Paid Features. If Keepr discontinues the Service (or a material part of it)
              entirely, we will provide at least <strong>sixty (60) days&apos;</strong> notice.
            </p>

            <h2>4. Accounts and Registration</h2>
            <p>
              <strong>4.1 Account Creation.</strong> To use certain features, you must register
              for an Account using <strong>Google or Microsoft single sign-on (SSO)</strong>.
              You agree to provide accurate, current, and complete information and to keep it
              updated. Your use of Google or Microsoft sign-in is also subject to that
              provider&apos;s terms.
            </p>
            <p>
              <strong>4.2 Account Security.</strong> You are responsible for safeguarding your
              Account credentials and for all activity that occurs under your Account. You agree
              to notify us immediately at support@keeprcompliance.com of any unauthorized use of,
              or security breach relating to, your Account. Keepr is not liable for any loss or
              damage arising from your failure to protect your credentials.
            </p>
            <p>
              <strong>4.3 Organization Accounts.</strong> If you are added to, or use the Service
              in connection with, an Organization (such as a brokerage), your Organization&apos;s
              administrator may have the ability to access, manage, monitor, restrict, or remove
              your access, and to view Submitted Transactions associated with the Organization.
              Your use in that context is also subject to any agreement between Keepr and your
              Organization and any policies your Organization applies.
            </p>
            <p>
              <strong>4.4 One Account per User.</strong> Unless expressly permitted, you may not
              maintain more than one Account, share your Account, or transfer your Account to any
              other person.
            </p>

            <h2>5. Acceptable Use</h2>
            <p>
              <strong>5.1 Acceptable Use Policy.</strong> Your use of the Service is governed by
              the Keepr Acceptable Use Policy (&quot;AUP&quot;), which is incorporated into these
              Terms by reference. The summary in this Section is provided for convenience and
              does not limit the AUP. In the event of a conflict, the AUP controls with respect
              to permitted and prohibited conduct.
            </p>
            <p>
              <strong>5.2 Summary of Prohibited Conduct.</strong> Without limiting the AUP, you
              agree not to:
            </p>
            <ul>
              <li>
                (a) use the Service in violation of any applicable law, regulation, or third
                party&apos;s rights;
              </li>
              <li>
                (b) access, ingest, capture, store, or record any communication that you are not
                authorized to access, capture, or record (see Section 5.3);
              </li>
              <li>
                (c) upload or transmit malware or engage in any activity that interferes with,
                disrupts, or compromises the integrity or security of the Service;
              </li>
              <li>
                (d) reverse engineer, decompile, or attempt to derive the source code of the
                Service, except to the extent this restriction is prohibited by applicable law;
              </li>
              <li>
                (e) probe, scan, or test the vulnerability of the Service, or circumvent any
                security or usage-limit mechanism;
              </li>
              <li>
                (f) resell, sublicense, or provide the Service to third parties except as
                expressly permitted; or
              </li>
              <li>
                (g) use the Service to infringe intellectual-property rights, harass, or engage
                in unlawful, fraudulent, or abusive conduct.
              </li>
            </ul>
            <p>
              <strong>5.3 Your Authority to Capture Communications (Keepr-Specific).</strong>{" "}
              <strong>
                You represent and warrant that you own, or are otherwise authorized to access,
                capture, and record, all emails, text messages, and other communications that you
                ingest into or store through the Service.
              </strong>{" "}
              You are solely responsible for obtaining any consent required under applicable law
              before ingesting or recording any communication. You acknowledge that laws
              governing the recording and interception of communications vary by jurisdiction,
              including differences between <strong>one-party-consent</strong> and{" "}
              <strong>all-party- (two-party-) consent</strong> states, and that you — not Keepr —
              are responsible for determining and complying with the requirements applicable to
              you and to each communication you ingest. Keepr does not review your legal authority
              to capture any communication and provides the Service in reliance on your
              representations in this Section.
            </p>
            <p>
              <strong>5.4 Enforcement.</strong> Keepr may investigate suspected violations and
              may suspend or terminate access for conduct that Keepr reasonably believes violates
              these Terms or the AUP, or that creates risk or possible legal exposure for Keepr or
              others.
            </p>

            <h2>6. Your Content; License; No Monitoring</h2>
            <p>
              <strong>6.1 Ownership of User Content.</strong> As between you and Keepr, you retain
              all right, title, and interest in and to your User Content. These Terms do not
              transfer any ownership of your User Content to Keepr.
            </p>
            <p>
              <strong>6.2 License to Keepr.</strong> You grant Keepr a limited, non-exclusive,
              worldwide, royalty-free license to host, store, process, transmit, display, and
              otherwise use your User Content solely as necessary to (a) provide, maintain, and
              improve the Service for you; (b) enable the features you use (including, where you
              choose, submitting a transaction to your brokerage); (c) comply with applicable law;
              and (d) enforce these Terms. This license is limited to the purposes described above
              and ends when your User Content is deleted, except for content necessarily retained
              in backups or as required by law and except for Submitted Transactions that have
              been shared with your Organization.
            </p>
            <p>
              <strong>6.3 No Monitoring.</strong> Keepr does <strong>not</strong> monitor, review,
              or moderate User Content in the ordinary course, and — given the local-first
              architecture — generally does not have access to the primary transaction content
              stored on your device. You are solely responsible for your User Content and for
              ensuring it is lawful and accurate. Keepr&apos;s ability to access User Content is
              limited to the account, usage, diagnostic, and audit metadata described in the
              Privacy Policy and to Submitted Transactions. Nothing in these Terms obligates Keepr
              to monitor User Content, but Keepr may do so where permitted or required by law.
            </p>
            <p>
              <strong>6.4 Feedback.</strong> If you provide suggestions, ideas, or feedback about
              the Service, you grant Keepr a perpetual, irrevocable, royalty-free license to use
              them without restriction or obligation to you.
            </p>

            <h2>7. Intellectual Property</h2>
            <p>
              <strong>7.1 Keepr&apos;s Rights.</strong> The Service, including all software, code,
              designs, text, graphics, logos, trademarks, and other content provided by Keepr
              (excluding User Content and Third-Party Services), is owned by Keepr or its licensors
              and is protected by intellectual-property and other laws. Keepr reserves all rights
              not expressly granted.
            </p>
            <p>
              <strong>7.2 License to You.</strong> The Service is{" "}
              <strong>licensed to you, not sold.</strong> Subject to your compliance with these
              Terms, Keepr grants you a limited, non-exclusive, non-transferable, non-sublicensable,
              revocable license to download and use the Desktop App{" "}
              <strong>on one (1) device</strong>, and to access the Broker Portal, for your own
              internal business use of assembling and, where applicable, submitting transaction
              records. This license terminates automatically upon termination of these Terms or
              your Account. Detailed license terms are set out in the End User License Agreement
              (EULA), which is incorporated by reference; in the event of a conflict regarding the
              software license grant, the EULA controls.
            </p>
            <p>
              <strong>7.3 Trademarks.</strong> &quot;Keepr&quot; and the Keepr logos are
              trademarks of Keepr. You may not use them without Keepr&apos;s prior written
              permission. All other trademarks are the property of their respective owners.
            </p>
            <p>
              <strong>7.4 No Resale.</strong> Your license is for your own professional use only.
              You may not <strong>resell, sublicense, lease, rent, white-label, rebrand, or
              otherwise redistribute</strong> the Service or any of its outputs, in whole or in
              part. You may not use the Service to provide services to third parties, operate a
              service bureau, or bundle the Service with other products or offerings. Any violation
              of this Section is a material breach and is grounds for immediate termination without
              refund.
            </p>

            <h2>8. Paid Features, Fees, and Billing</h2>
            <p>
              <strong>8.1 Paid Features and Pricing Model.</strong> Certain features of the Service
              are Paid Features.
            </p>
            <p>
              <strong>Individual tier — usage-based, per-transaction.</strong> For individual
              users, Keepr charges on a <strong>usage-based, pay-per-transaction basis</strong>:
              you unlock a given transaction (deal) for full functionality by paying the applicable
              Fee. The per-transaction price descends as your annual transaction volume increases
              and resets at the start of each calendar year. There is no recurring subscription
              charge for the Individual tier.
            </p>
            <p>
              <strong>Team / Enterprise tier.</strong> Team and Enterprise plans are not offered in
              this version. If and when they become available, their pricing and terms will be
              described at the point of purchase and in the Billing &amp; Refund Policy.
            </p>
            <p>
              Plans may include a <strong>storage limit</strong> for attachments and documents. If
              you exceed your limit, Keepr may restrict uploads until you upgrade or reduce usage.
              The specific Fees, applicable tiers, storage limits, and any prepaid-credit or
              per-transaction charging mechanics are described at the point of purchase, on our
              pricing page, and in the Billing &amp; Refund Policy. Prices are subject to change on
              a prospective basis.
            </p>
            <p>
              <strong>8.2 Payment Processing (Stripe).</strong> Payments are processed by{" "}
              <strong>Stripe</strong>, our third-party payment processor. By making a purchase, you
              authorize us and Stripe to charge your designated payment method for all applicable
              Fees and taxes. Your use of Stripe is subject to Stripe&apos;s terms and privacy
              policy. Keepr does not store full payment-card numbers.
            </p>
            <p>
              <strong>8.3 Taxes.</strong> Fees are exclusive of taxes unless stated otherwise. You
              are responsible for all applicable sales, use, value-added, and similar taxes,
              excluding taxes based on Keepr&apos;s net income.
            </p>
            <p>
              <strong>8.4 No Refunds Except Where Required by Law.</strong> Except as expressly
              stated in the Billing &amp; Refund Policy or as required by applicable law,{" "}
              <strong>all Fees and per-transaction unlocks are non-refundable</strong>, including
              for partially used periods or unused unlocks. This Section is subject to any
              non-waivable consumer-protection rights you may have.
            </p>
            <p>
              <strong>8.5 Failed Payments; Suspension.</strong> If a charge fails or a payment is
              overdue, Keepr may suspend or restrict access to Paid Features until payment is
              resolved. You remain responsible for all Fees incurred before suspension.
            </p>
            <p>
              <strong>8.6 Billing Policy Controls.</strong> The Billing &amp; Refund Policy provides
              the detailed terms governing Fees, unlocks, refunds, chargebacks, and cancellations,
              and is incorporated into these Terms by reference. In the event of a conflict between
              this Section and the Billing &amp; Refund Policy regarding billing mechanics, the
              Billing &amp; Refund Policy controls.
            </p>

            <h2>9. [Reserved]</h2>

            <h2>10. No Professional Advice; Nature of &quot;Audit-Ready Records&quot; (Critical)</h2>
            <p>
              <strong>10.1 Keepr Does Not Provide Professional Advice.</strong> Keepr is a software
              tool. <strong>Keepr does not provide legal, financial, real-estate, brokerage, tax,
              or regulatory-compliance advice</strong>, and nothing in the Service — including any
              record, summary, template, checklist, label, or notification — constitutes such
              advice or creates any professional-client relationship. You should consult qualified
              professionals (such as attorneys, brokers, and compliance officers) regarding your
              specific obligations.
            </p>
            <p>
              <strong>
                10.2 &quot;Audit-Ready Records&quot; Are Not a Compliance Certification.
              </strong>{" "}
              The term <strong>&quot;Audit-Ready Records&quot;</strong> and similar descriptions
              (such as &quot;audit trail&quot; or &quot;audit-ready&quot;) refer to{" "}
              <strong>
                best-effort records that the Service helps you organize for your own use.
              </strong>{" "}
              These records:
            </p>
            <ul>
              <li>
                <strong>
                  are NOT a legal, brokerage, or regulatory compliance certification, attestation,
                  or determination of any kind;
                </strong>
              </li>
              <li>
                <strong>
                  are NOT warranted, represented, or guaranteed to satisfy any legal, brokerage,
                  supervisory, recordkeeping, or regulatory retention requirement
                </strong>{" "}
                that may apply to you or your Organization (including, without limitation, any
                state real-estate commission recordkeeping rule, brokerage retention policy, or
                securities or financial-industry recordkeeping obligation); and
              </li>
              <li>
                <strong>
                  do NOT establish the completeness, accuracy, admissibility, authenticity, or
                  immutability of any record.
                </strong>
              </li>
            </ul>
            <p>
              You are solely responsible for determining what records you are required to keep, in
              what form, and for how long, and for independently verifying that any records you
              assemble using the Service actually meet those requirements. Keepr expressly disclaims
              any representation that use of the Service will cause you or your Organization to be,
              or remain, in compliance with any law, rule, or policy.
            </p>
            <p>
              <strong>10.3 No Reliance.</strong> You acknowledge that you are not relying on Keepr,
              the Service, or any Keepr statement for legal, financial, real-estate, or compliance
              conclusions, and that your use of Audit-Ready Records for any regulatory,
              supervisory, evidentiary, or dispute-related purpose is at your own risk.
            </p>

            <h2>11. Third-Party Services</h2>
            <p>
              <strong>11.1 Integrations.</strong> The Service integrates with, or depends on,
              Third-Party Services, including <strong>Google</strong> (Gmail API),{" "}
              <strong>Microsoft</strong> (Microsoft Graph / Outlook), <strong>Stripe</strong>{" "}
              (payments), and infrastructure providers. Your access to email data is obtained
              through your own <strong>OAuth</strong> consent using least-privilege scopes.
            </p>
            <p>
              <strong>11.2 Governed by Their Terms.</strong> Your use of Third-Party Services is
              governed by the respective third party&apos;s terms of service and privacy policies,
              not by these Terms. You are responsible for complying with those terms and for
              maintaining any accounts, credentials, API keys, or consents required. Keepr&apos;s
              use of data obtained through Google APIs adheres to the Google API Services User Data
              Policy, including its Limited Use requirements, and Keepr adheres to equivalent
              Microsoft requirements, as further described in the Privacy Policy.
            </p>
            <p>
              <strong>11.3 No Responsibility for Third-Party Services.</strong> Keepr does not
              control and is not responsible for Third-Party Services, including their
              availability, accuracy, security, or changes to their functionality or terms. A
              Third-Party Service may change, limit, or discontinue access in ways that affect the
              Service, and Keepr is not liable for any resulting impact.
            </p>

            <h2>12. Disclaimer of Warranties</h2>
            <p>
              <strong>
                THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE,&quot; WITH ALL
                FAULTS AND WITHOUT WARRANTY OF ANY KIND.
              </strong>{" "}
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, KEEPR AND ITS LICENSORS AND
              SUPPLIERS DISCLAIM ALL WARRANTIES, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE,
              INCLUDING ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
              TITLE, AND NON-INFRINGEMENT, AND ANY WARRANTIES ARISING FROM COURSE OF DEALING OR
              USAGE OF TRADE.
            </p>
            <p>
              WITHOUT LIMITING THE FOREGOING, KEEPR DOES NOT WARRANT THAT: (a) THE SERVICE WILL BE
              UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE; (b) ANY RECORDS, DATA, OR OUTPUT
              (INCLUDING AUDIT-READY RECORDS) WILL BE ACCURATE, COMPLETE, RELIABLE, OR SUFFICIENT
              FOR ANY LEGAL, REGULATORY, OR BUSINESS PURPOSE; (c) THE SERVICE WILL MEET YOUR
              REQUIREMENTS OR SATISFY ANY COMPLIANCE OBLIGATION; OR (d) ANY ERRORS OR DATA LOSS WILL
              BE CORRECTED OR RECOVERABLE. YOU ASSUME ALL RESPONSIBILITY FOR THE SECURITY, BACKUP,
              AND RETENTION OF DATA STORED ON YOUR DEVICE.
            </p>
            <p>
              Keepr&apos;s infrastructure runs on SOC 2-certified sub-processors; however,{" "}
              <strong>
                Keepr does not represent that it holds any SOC 2 or other security attestation of
                its own.
              </strong>{" "}
              Some jurisdictions do not allow the exclusion of certain warranties, so some of the
              above exclusions may not apply to you.
            </p>

            <h2>13. Limitation of Liability</h2>
            <p>
              <strong>13.1 Exclusion of Indirect Damages.</strong> TO THE MAXIMUM EXTENT PERMITTED
              BY APPLICABLE LAW, KEEPR AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, LICENSORS,
              AND SUPPLIERS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL,
              EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR ANY LOSS OF PROFITS, REVENUE, GOODWILL,
              BUSINESS, OR DATA, OR FOR THE COST OF SUBSTITUTE SERVICES, ARISING OUT OF OR RELATING
              TO THESE TERMS OR THE SERVICE, WHETHER BASED ON CONTRACT, TORT (INCLUDING NEGLIGENCE),
              STRICT LIABILITY, OR ANY OTHER LEGAL THEORY, AND WHETHER OR NOT KEEPR HAS BEEN ADVISED
              OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
            <p>
              <strong>13.2 Liability Cap.</strong> TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE
              LAW, KEEPR&apos;S TOTAL AGGREGATE LIABILITY ARISING OUT OF OR RELATING TO THESE TERMS
              OR THE SERVICE WILL NOT EXCEED THE TOTAL FEES YOU ACTUALLY PAID TO KEEPR FOR THE
              SERVICE IN THE TWELVE (12) MONTHS IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO THE
              LIABILITY.
            </p>
            <p>
              <strong>13.3 Essential Basis.</strong> The limitations in this Section apply even if
              any limited remedy fails of its essential purpose, and reflect an allocation of risk
              that is an essential basis of the bargain between you and Keepr. Some jurisdictions do
              not allow certain limitations, so some of the above may not apply to you; in such
              cases, Keepr&apos;s liability is limited to the greatest extent permitted by law.
            </p>

            <h2>14. Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless Keepr and its officers, directors,
              employees, agents, licensors, and suppliers from and against any and all claims,
              damages, losses, liabilities, costs, and expenses (including reasonable attorneys&apos;
              fees) arising out of or relating to: (a) your User Content; (b) your ingestion,
              capture, recording, or use of any communication, including any failure to obtain
              required consent or authority (see Section 5.3); (c) your use or misuse of the
              Service; (d) your violation of these Terms, the AUP, or any applicable law; (e) your
              violation of any third party&apos;s rights, including privacy, publicity, or
              intellectual-property rights; or (f) your reliance on any Audit-Ready Record. Keepr
              may, at its own expense, assume the exclusive defense and control of any matter
              subject to indemnification, in which case you agree to cooperate.
            </p>

            <h2>15. Term and Termination</h2>
            <p>
              <strong>15.1 Term.</strong> These Terms apply from the time you first access or use
              the Service and continue until terminated as described below.
            </p>
            <p>
              <strong>15.2 Termination by You.</strong> You may stop using the Service and delete
              your Account at any time. Deleting the Desktop App or uninstalling it does not by
              itself delete data stored on your device.
            </p>
            <p>
              <strong>15.3 Termination or Suspension by Keepr.</strong> Keepr may suspend or
              terminate your access to all or part of the Service at any time, with or without
              notice, if: (a) you materially breach these Terms or the AUP; (b) your use creates
              risk or possible legal exposure for Keepr or others; (c) required by law; or (d) Keepr
              discontinues the Service, in which case Keepr will provide at least{" "}
              <strong>sixty (60) days&apos;</strong> notice as described in Section 3.4.
            </p>
            <p>
              <strong>15.4 Effect on Data (Local vs. Cloud).</strong> Upon termination:
            </p>
            <ul>
              <li>
                <strong>Local data (Desktop App):</strong> Data stored encrypted on your device
                remains on your device and under your control. Keepr does not delete, and generally
                cannot access or recover, your local data. You are responsible for exporting,
                backing up, or deleting your local data.
              </li>
              <li>
                <strong>Cloud data (account, metadata, Submitted Transactions):</strong> Keepr will
                handle deletion and retention of cloud-stored data as described in the Privacy
                Policy. <strong>Submitted Transactions</strong> that have already been shared with
                your Organization may be retained by, and remain accessible to, that Organization
                subject to its own retention practices and any agreement between Keepr and the
                Organization.
              </li>
            </ul>
            <p>
              <strong>15.5 Survival.</strong> Provisions that by their nature should survive
              termination will survive, including Sections 5.3 (Authority to Capture), 6.1–6.2
              (Ownership/License), 7 (IP), 8 (accrued Fees), 10 (No Professional Advice), 12
              (Disclaimer), 13 (Limitation of Liability), 14 (Indemnification), 16 (Governing Law /
              Dispute Resolution), and 19 (Miscellaneous).
            </p>

            <h2>16. Governing Law; Venue; Dispute Resolution</h2>
            <p>
              <strong>16.1 Governing Law.</strong> These Terms and any dispute arising out of or
              relating to them or the Service are governed by the laws of the State of{" "}
              <strong>Florida</strong>, without regard to its conflict-of-laws principles, and,
              where applicable, by the laws of the United States.
            </p>
            <p>
              <strong>16.2 Venue.</strong> Subject to Section 16.3, you and Keepr agree that the
              exclusive jurisdiction and venue for any dispute not subject to arbitration will be
              the state and federal courts located in <strong>Florida</strong>, and each party
              consents to personal jurisdiction there and waives any objection to venue.
            </p>
            <p>
              <strong>16.3 Binding Arbitration and Class-Action Waiver.</strong>
            </p>
            <p>
              <strong>(a) Agreement to Arbitrate.</strong> Except as provided in subsection (d),
              you and Keepr agree that any dispute, claim, or controversy arising out of or relating
              to these Terms or the Service (&quot;<strong>Dispute</strong>&quot;) will be resolved
              by <strong>final and binding arbitration</strong> administered by the{" "}
              <strong>American Arbitration Association (AAA)</strong> under its then-current rules,
              rather than in court. The arbitration will be <strong>seated in Florida</strong>, or,
              at your election, conducted by videoconference or telephone where available. Judgment
              on the award may be entered in any court of competent jurisdiction. The Federal
              Arbitration Act governs the interpretation and enforcement of this provision.
            </p>
            <p>
              <strong>(b) Class-Action Waiver.</strong>{" "}
              <strong>
                YOU AND KEEPR AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN AN
                INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS,
                COLLECTIVE, CONSOLIDATED, OR REPRESENTATIVE PROCEEDING.
              </strong>{" "}
              The arbitrator may not consolidate more than one person&apos;s claims and may not
              preside over any form of a representative or class proceeding.
            </p>
            <p>
              <strong>(c) Opt-Out.</strong> You may opt out of this arbitration provision by
              sending written notice to legal@keeprcompliance.com within thirty (30) days of first
              accepting these Terms. If you opt out, Sections 16.1–16.2 govern.
            </p>
            <p>
              <strong>(d) Exceptions.</strong> This provision does not require arbitration of: (i)
              claims that qualify for small-claims court; or (ii) claims seeking injunctive or
              equitable relief for infringement or misuse of intellectual property.
            </p>
            <p>
              <strong>(e) Severability.</strong> If the Class-Action Waiver in subsection (b) is
              found unenforceable as to a particular claim, that claim will be severed and litigated
              in court under Sections 16.1–16.2, and the remainder of this provision will remain in
              effect.
            </p>
            <p>
              <strong>16.4 Time to Bring Claims.</strong> To the extent permitted by applicable law,
              any claim arising out of or relating to these Terms or the Service must be brought
              within <strong>one (1) year</strong> after the claim arose; otherwise, it is
              permanently barred.
            </p>

            <h2>17. Changes to These Terms</h2>
            <p>
              Keepr may modify these Terms from time to time. If we make material changes, we will
              provide at least <strong>thirty (30) days&apos;</strong> notice by reasonable means,
              such as posting the updated Terms at keeprcompliance.com with a new Effective Date or
              notifying you through the Service. Changes are effective at the end of that notice
              period unless otherwise stated.{" "}
              <strong>
                Your continued use of the Service after changes become effective constitutes your
                acceptance of the updated Terms.
              </strong>{" "}
              If you do not agree, you must stop using the Service.
            </p>

            <h2>18. DMCA / Copyright Complaints</h2>
            <p>
              Keepr respects intellectual-property rights and responds to notices of alleged
              copyright infringement under the Digital Millennium Copyright Act (&quot;DMCA&quot;).
              If you believe content available through the Service infringes your copyright, please
              send a written notice to our Designated Copyright Agent containing the information
              required by 17 U.S.C. § 512(c)(3), including: (a) your physical or electronic
              signature; (b) identification of the copyrighted work; (c) identification of the
              allegedly infringing material and its location; (d) your contact information; (e) a
              statement that you have a good-faith belief the use is not authorized; and (f) a
              statement, under penalty of perjury, that the notice is accurate and that you are
              authorized to act.
            </p>
            <p>
              <strong>Designated Copyright Agent:</strong>
              <br />
              Copyright Agent, Blue Spaces LLC
              <br />
              382 NE 191st St, PMB 64835, Miami, FL 33179-3899
              <br />
              Email: legal@keeprcompliance.com
            </p>
            <p>
              Keepr may remove or disable access to allegedly infringing material and may terminate
              the accounts of repeat infringers. If you believe material was removed in error, you
              may submit a counter-notice as permitted by the DMCA.
            </p>

            <h2>19. Miscellaneous</h2>
            <ul>
              <li>
                <strong>19.1 Assignment.</strong> You may not assign or transfer these Terms or any
                rights or obligations under them without Keepr&apos;s prior written consent. Keepr
                may assign these Terms without restriction, including in connection with a merger,
                acquisition, or sale of assets. Any prohibited assignment is void.
              </li>
              <li>
                <strong>19.2 Severability.</strong> If any provision of these Terms is held invalid
                or unenforceable, that provision will be enforced to the maximum extent permissible,
                and the remaining provisions will remain in full force and effect.
              </li>
              <li>
                <strong>19.3 Waiver.</strong> No waiver of any term is effective unless in writing,
                and no failure to enforce any right is a waiver of that or any other right.
              </li>
              <li>
                <strong>19.4 Entire Agreement.</strong> These Terms, together with the Privacy
                Policy, Acceptable Use Policy, Billing &amp; Refund Policy, End User License
                Agreement (EULA), the Data Processing Agreement (DPA) (where applicable to
                Organization customers), and any documents expressly incorporated by reference,
                constitute the entire agreement between you and Keepr regarding the Service and
                supersede all prior agreements and understandings on that subject.
              </li>
              <li>
                <strong>19.5 Force Majeure.</strong> Keepr is not liable for any failure or delay in
                performance due to causes beyond its reasonable control, including acts of God,
                natural disasters, war, terrorism, civil unrest, labor disputes, governmental
                action, internet or utility failures, third-party service failures, or cyberattacks.
              </li>
              <li>
                <strong>19.6 Notices.</strong> Keepr may provide notices to you via the Service,
                email associated with your Account, or by posting at keeprcompliance.com. You may
                provide notices to Keepr at legal@keeprcompliance.com or 382 NE 191st St, PMB 64835,
                Miami, FL 33179-3899.
              </li>
              <li>
                <strong>19.7 No Third-Party Beneficiaries.</strong> Except as expressly stated, these
                Terms do not confer any rights on any third party.
              </li>
              <li>
                <strong>19.8 Relationship.</strong> You and Keepr are independent contractors. These
                Terms do not create any partnership, joint venture, agency, or employment
                relationship.
              </li>
              <li>
                <strong>19.9 Export and Sanctions Compliance.</strong> You represent that you are not
                located in, and will not use the Service in violation of, any applicable
                export-control or sanctions laws.
              </li>
              <li>
                <strong>19.10 Headings.</strong> Section headings are for convenience only and do not
                affect interpretation.
              </li>
            </ul>

            <h2>20. Contact</h2>
            <p>Questions about these Terms may be directed to:</p>
            <p>
              <strong>Blue Spaces LLC</strong>
              <br />
              Email (Legal): legal@keeprcompliance.com
              <br />
              Email (Support): support@keeprcompliance.com
              <br />
              Website: keeprcompliance.com
              <br />
              Mailing Address: 382 NE 191st St, PMB 64835, Miami, FL 33179-3899
            </p>

            <h2>Changes to This Terms of Service</h2>
            <p>
              This document may be updated as described in Section 17 (Changes to These Terms). The
              &quot;Effective Date&quot; at the top of this document indicates when these Terms were
              last revised. We encourage you to review these Terms periodically. Material changes
              will be communicated as described in Section 17, and your continued use of the Service
              after the updated Effective Date constitutes acceptance.
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
