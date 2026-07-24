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
