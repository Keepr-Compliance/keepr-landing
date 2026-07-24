"use client";

/**
 * Consent-gated analytics tags. Rendered by <ConsentProvider>; under the opt-out
 * model these load by default and inject whenever `analyticsAllowed` is true (not
 * opted out + no GPC signal) AND the host is allowed (not local dev or a Vercel
 * preview URL).
 *
 * IDs + host rules live in src/lib/analytics-config.ts. Clarity input-masking is
 * a project-level setting in the Clarity dashboard (set masking to strict) — it
 * can't be forced from this snippet.
 */

import Script from "next/script";
import { CLARITY_ID, GA_ID, analyticsHostAllowed } from "@/lib/analytics-config";
import { useConsent } from "./ConsentProvider";

export function Analytics() {
  const { analyticsAllowed } = useConsent();

  const hostAllowed =
    typeof location !== "undefined" && analyticsHostAllowed(location.hostname);
  if (!analyticsAllowed || !hostAllowed) return null;

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

      {CLARITY_ID ? (
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
