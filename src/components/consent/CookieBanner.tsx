"use client";

/**
 * First-visit cookie notice (opt-out). Analytics already load by default, so
 * this bar informs the visitor and offers an easy way out: "Got it" acknowledges
 * (and stops the notice reshowing), "Cookie settings" opens the preferences modal
 * where analytics can be turned off. Hidden once a choice is on record or when a
 * GPC signal is present.
 */

import Link from "next/link";
import { useConsent } from "./ConsentProvider";

export function CookieBanner() {
  const { showBanner, accept, openPrefs } = useConsent();
  if (!showBanner) return null;

  return (
    <div className="cc-banner" role="region" aria-label="Cookie consent">
      <div className="cc-banner-wrap">
        <p className="cc-copy">
          We use cookies, including Google Analytics and Microsoft Clarity, to
          understand how visitors use our site so we can improve it. You can opt
          out anytime.{" "}
          <Link href="/cookies" className="cc-link">
            Cookie Policy
          </Link>
        </p>
        <div className="cc-actions">
          <button type="button" className="cc-btn cc-btn-ghost" onClick={openPrefs}>
            Cookie settings
          </button>
          <button type="button" className="cc-btn cc-btn-primary" onClick={accept}>
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}
