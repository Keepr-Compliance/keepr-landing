"use client";

/**
 * Footer "Cookie settings" link — a persistent way to reopen the preferences
 * modal and change or withdraw consent. Rendered inside the (server) Footer;
 * styled to match the other footer links.
 */

import { useConsent } from "./ConsentProvider";

export function CookieSettingsLink() {
  const { openPrefs } = useConsent();
  return (
    <button type="button" className="foot-link-btn" onClick={openPrefs}>
      Cookie settings
    </button>
  );
}

/**
 * CCPA/CPRA-labeled opt-out control (Privacy Policy §11.1 promises a mechanism
 * under this exact label). Opens the same preferences modal — turning analytics
 * off there is the opt-out.
 */
export function DoNotSellLink() {
  const { openPrefs } = useConsent();
  return (
    <button type="button" className="foot-link-btn" onClick={openPrefs}>
      Do Not Sell or Share My Personal Information
    </button>
  );
}
