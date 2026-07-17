"use client";

import { useState } from "react";
import { CheckIcon } from "./icons";

/**
 * "Email me the download link" capture — UI ONLY for now.
 *
 * TODO(founder): wire the submit handler to a real backend (e.g. a serverless
 * route + email/CRM provider). Right now it only shows a local "link sent"
 * confirmation and does not send anything or persist the address.
 */
export function EmailCapture({ hint }: { hint: string }) {
  const [sent, setSent] = useState(false);
  const [email, setEmail] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    // TODO(founder): POST the email to a real endpoint before showing success.
    setSent(true);
  }

  return (
    <div className="dl-mail">
      <p className="dm-label">On your phone? We&apos;ll email you the download link.</p>
      {sent ? (
        <p className="dm-sent">
          <CheckIcon />
          <span>
            <b>Link sent.</b> Check your inbox on your Mac or PC — setup takes about
            two minutes.
          </span>
        </p>
      ) : (
        <>
          <form onSubmit={onSubmit} noValidate>
            <div className="dl-mail-in">
              <input
                type="email"
                name="email"
                inputMode="email"
                autoComplete="email"
                placeholder="you@youragency.com"
                aria-label="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">Email me the link</button>
            </div>
          </form>
          <p className="dm-hint">{hint}</p>
        </>
      )}
    </div>
  );
}
