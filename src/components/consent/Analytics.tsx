"use client";

/**
 * Consent-gated analytics tags, HYBRID model (2026-07-27 legal risk review, B-R1):
 *
 * - Google Analytics = OPT-OUT: loads by default whenever `analyticsAllowed`
 *   (not opted out + no GPC signal).
 * - Microsoft Clarity = AFFIRMATIVE CONSENT ONLY: session recording implicates
 *   US wiretap/session-replay statutes (CIPA §631/632, PA WESCA, FL FSA §934.03),
 *   and Javier v. Assurance IQ (9th Cir.) reads CIPA to require consent BEFORE
 *   capture. So Clarity injects only after the visitor affirmatively agrees
 *   (`status === "granted"` via "Got it" or saving the toggle on) — never during
 *   the pre-choice "unknown" window.
 *
 * IDs + host rules live in src/lib/analytics-config.ts. Clarity input-masking is
 * a project-level setting in the Clarity dashboard (set masking to strict) — it
 * can't be forced from this snippet.
 */

import Script from "next/script";
import { CLARITY_ID, GA_ID, analyticsHostAllowed } from "@/lib/analytics-config";
import { useConsent } from "./ConsentProvider";

export function Analytics() {
  const { analyticsAllowed, status } = useConsent();

  const hostAllowed =
    typeof location !== "undefined" && analyticsHostAllowed(location.hostname);
  if (!analyticsAllowed || !hostAllowed) return null;

  // Session recording requires an affirmative choice; "unknown" is not consent.
  const clarityAllowed = status === "granted";

  return (
    <>
      {GA_ID ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
          </Script>
        </>
      ) : null}

      {CLARITY_ID && clarityAllowed ? (
        <Script id="ms-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window,document,"clarity","script","${CLARITY_ID}");`}
        </Script>
      ) : null}
    </>
  );
}
