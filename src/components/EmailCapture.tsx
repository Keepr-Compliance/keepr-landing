"use client";

import { useState } from "react";
import { CheckIcon } from "./icons";

/**
 * "Email me the download link" capture.
 *
 * On submit it POSTs the address to /api/download-link, which sends the Keepr
 * download link via the org's Microsoft 365 mailbox (Graph API). The success
 * state shows ONLY on a 200; failures surface a visible error and let the
 * visitor retry.
 *
 * BACKLOG-2193 (Option B): real send wired up (was UI-only before).
 */
export function EmailCapture({ hint }: { hint: string }) {
  const [sent, setSent] = useState(false);
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || sending) return;

    setSending(true);
    setError(null);

    try {
      const res = await fetch("/api/download-link", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed }),
      });

      if (res.ok) {
        setSent(true);
        return;
      }

      const data = (await res.json().catch(() => null)) as { error?: string } | null;
      setError(data?.error || "Something went wrong. Please try again.");
    } catch {
      setError("Couldn't reach the server. Please check your connection and try again.");
    } finally {
      setSending(false);
    }
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
                disabled={sending}
                required
              />
              <button type="submit" disabled={sending}>
                {sending ? "Sending…" : "Email me the link"}
              </button>
            </div>
          </form>
          {error ? (
            <p className="dm-error" role="alert">
              {error}
            </p>
          ) : (
            <p className="dm-hint">{hint}</p>
          )}
        </>
      )}
    </div>
  );
}
