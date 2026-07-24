"use client";

/**
 * Cookie preferences modal. Opened from the banner's "Manage" button or the
 * footer "Cookie settings" link, so visitors can change or withdraw consent at
 * any time. One non-essential category (Analytics / Performance) plus an
 * always-on Strictly-Necessary row, matching the Cookie Policy.
 *
 * Mounted only while open (see ConsentProvider), so the toggle initializes from
 * the current choice on mount — no syncing effect needed. When the browser sends
 * a Global Privacy Control signal, analytics are forced off and the toggle is
 * disabled: we honor GPC as an opt-out.
 */

import { useEffect, useRef, useState } from "react";
import { useConsent } from "./ConsentProvider";

export function CookiePreferences() {
  const { closePrefs, accept, reject, status, gpc } = useConsent();
  // Opt-out: analytics are on unless the visitor previously opted out or GPC is set.
  const [analytics, setAnalytics] = useState(() => !gpc && status !== "denied");
  const dialogRef = useRef<HTMLDivElement>(null);

  // Escape to close + focus the dialog on open.
  useEffect(() => {
    dialogRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePrefs();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [closePrefs]);

  const save = () => {
    if (analytics && !gpc) accept();
    else reject();
  };

  return (
    <div className="cc-modal-backdrop" onClick={closePrefs}>
      <div
        ref={dialogRef}
        className="cc-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cc-modal-title"
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 id="cc-modal-title" className="cc-modal-title">
          Cookie settings
        </h2>
        <p className="cc-modal-intro">
          We keep cookies to a minimum. Analytics are on by default so we can see
          how the site is used and improve it — turn them off here anytime. Your
          choice is saved on this browser.
        </p>

        <div className="cc-row">
          <div className="cc-row-text">
            <span className="cc-row-title">Strictly necessary</span>
            <span className="cc-row-desc">
              Required for the site and portal to work (e.g. signing in and
              security). Always active.
            </span>
          </div>
          <span className="cc-always-on">Always on</span>
        </div>

        <div className="cc-row">
          <div className="cc-row-text">
            <span className="cc-row-title">Analytics &amp; performance</span>
            <span className="cc-row-desc">
              Google Analytics and Microsoft Clarity, so we can see how the site
              is used and improve it.
            </span>
            {gpc ? (
              <span className="cc-row-note">
                Your browser is sending a Global Privacy Control signal, so
                analytics are turned off.
              </span>
            ) : null}
          </div>
          <label className="cc-toggle">
            <input
              type="checkbox"
              checked={analytics && !gpc}
              disabled={gpc}
              onChange={(e) => setAnalytics(e.target.checked)}
            />
            <span className="cc-toggle-track" aria-hidden="true" />
            <span className="cc-sr-only">Allow analytics cookies</span>
          </label>
        </div>

        <div className="cc-modal-actions">
          <button type="button" className="cc-btn cc-btn-ghost" onClick={closePrefs}>
            Cancel
          </button>
          <button type="button" className="cc-btn cc-btn-primary" onClick={save}>
            Save choices
          </button>
        </div>
      </div>
    </div>
  );
}
