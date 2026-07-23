/**
 * POST /api/download-link
 *
 * Emails the Keepr desktop download link to a visitor who is browsing on a phone.
 * Sends via the organisation's Microsoft 365 mailbox using the Graph API with
 * client-credentials (app-only) auth — the SAME app registration + env vars the
 * broker-portal uses (AZURE_TENANT_ID / AZURE_CLIENT_ID / AZURE_CLIENT_SECRET /
 * EMAIL_SENDER_ADDRESS).
 *
 * Self-contained (no broker-portal call, no CORS): the Graph REST calls are made
 * directly with fetch, so no Azure/Graph SDK dependency is added to this repo.
 *
 * BACKLOG-2193 (Option B / B2): wire the landing-page email capture to real send.
 */

import { NextResponse } from "next/server";
import { downloads, downloadPageUrl, LATEST_VERSION } from "@/lib/site";

// Run on the Node.js runtime (not Edge) — client-credentials token + Graph send.
export const runtime = "nodejs";
// Never cache — this is a side-effecting POST endpoint.
export const dynamic = "force-dynamic";

// ---------------------------------------------------------------------------
// Lightweight in-memory rate limit (best-effort abuse guard)
// ---------------------------------------------------------------------------
// Note: serverless instances are ephemeral and not shared, so this only throttles
// bursts hitting the same warm instance. It is a courtesy guard, not a hard limit.

const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const RATE_LIMIT_MAX = 5; // max sends per IP per window
const hits = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || now > entry.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  entry.count += 1;
  if (entry.count > RATE_LIMIT_MAX) return true;
  return false;
}

// Basic RFC-5322-ish email validation — good enough to reject obvious garbage.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// ---------------------------------------------------------------------------
// Microsoft Graph send (client-credentials, direct fetch)
// ---------------------------------------------------------------------------

async function getGraphToken(): Promise<string> {
  const tenantId = process.env.AZURE_TENANT_ID;
  const clientId = process.env.AZURE_CLIENT_ID;
  const clientSecret = process.env.AZURE_CLIENT_SECRET;

  if (!tenantId || !clientId || !clientSecret) {
    throw new Error("Email service not configured (missing Azure credentials)");
  }

  const body = new URLSearchParams({
    client_id: clientId,
    client_secret: clientSecret,
    scope: "https://graph.microsoft.com/.default",
    grant_type: "client_credentials",
  });

  const res = await fetch(
    `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`,
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    },
  );

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`Graph token request failed (${res.status}): ${detail.slice(0, 300)}`);
  }

  const json = (await res.json()) as { access_token?: string };
  if (!json.access_token) {
    throw new Error("Graph token response missing access_token");
  }
  return json.access_token;
}

async function sendDownloadEmail(to: string): Promise<void> {
  const senderAddress = process.env.EMAIL_SENDER_ADDRESS;
  if (!senderAddress) {
    throw new Error("Email service not configured (missing EMAIL_SENDER_ADDRESS)");
  }

  const token = await getGraphToken();
  const { html, text, subject } = buildEmail();

  const message = {
    subject,
    body: { contentType: "HTML", content: html },
    toRecipients: [{ emailAddress: { address: to } }],
  };

  const res = await fetch(
    `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(senderAddress)}/sendMail`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      // saveToSentItems omitted → defaults to true, matching broker-portal behaviour.
      body: JSON.stringify({ message }),
    },
  );

  // Graph returns 202 Accepted (no body) on success.
  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`Graph sendMail failed (${res.status}): ${detail.slice(0, 300)}`);
  }

  // Reference `text` so it is not tree-shaken away and stays available if we later
  // attach a plain-text alternative; Graph HTML body is what recipients see.
  void text;
}

// ---------------------------------------------------------------------------
// Email content — short, on-brand
// ---------------------------------------------------------------------------

function buildEmail(): { subject: string; html: string; text: string } {
  const subject = "Your Keepr download link";

  const html = `<!DOCTYPE html>
<html lang="en">
  <body style="margin:0;padding:0;background:#F4F5F9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#191B2E;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F4F5F9;padding:32px 0;">
      <tr>
        <td align="center">
          <table role="presentation" width="480" cellpadding="0" cellspacing="0" style="max-width:480px;background:#FFFFFF;border-radius:14px;padding:36px 34px;">
            <tr>
              <td>
                <h1 style="margin:0 0 14px;font-size:22px;line-height:1.25;letter-spacing:-0.01em;color:#191B2E;">Your Keepr download link</h1>
                <p style="margin:0 0 22px;font-size:15px;line-height:1.55;color:#40465C;">
                  Keepr runs on your Mac or PC. Open this link on your computer to download and set up — it takes about two minutes.
                </p>
                <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 0 24px;">
                  <tr>
                    <td style="border-radius:10px;background:#4F46E5;">
                      <a href="${downloadPageUrl}" style="display:inline-block;padding:13px 24px;font-size:15px;font-weight:700;color:#FFFFFF;text-decoration:none;">Download Keepr</a>
                    </td>
                  </tr>
                </table>
                <p style="margin:0 0 6px;font-size:13px;line-height:1.5;color:#666C82;">
                  Or go straight to the build you need:
                </p>
                <p style="margin:0 0 22px;font-size:13px;line-height:1.7;color:#666C82;">
                  <a href="${downloads.macArm}" style="color:#4F46E5;text-decoration:none;">Mac — Apple Silicon</a><br />
                  <a href="${downloads.macIntel}" style="color:#4F46E5;text-decoration:none;">Mac — Intel</a><br />
                  <a href="${downloads.windows}" style="color:#4F46E5;text-decoration:none;">Windows</a>
                </p>
                <p style="margin:0;font-size:12px;line-height:1.5;color:#9AA0B4;">
                  Keepr v${LATEST_VERSION} · Free to download &amp; set up.<br />
                  You&apos;re getting this because you asked us to email you the download link from keeprcompliance.com.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  const text = [
    "Your Keepr download link",
    "",
    "Keepr runs on your Mac or PC. Open this link on your computer to download and set up — it takes about two minutes.",
    "",
    `Download: ${downloadPageUrl}`,
    "",
    "Or go straight to the build you need:",
    `Mac — Apple Silicon: ${downloads.macArm}`,
    `Mac — Intel: ${downloads.macIntel}`,
    `Windows: ${downloads.windows}`,
    "",
    `Keepr v${LATEST_VERSION} · Free to download & set up.`,
    "You're getting this because you asked us to email you the download link from keeprcompliance.com.",
  ].join("\n");

  return { subject, html, text };
}

// ---------------------------------------------------------------------------
// Route handler
// ---------------------------------------------------------------------------

export async function POST(request: Request) {
  // Client IP for the rate-limit key (Vercel sets x-forwarded-for).
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again in a minute." },
      { status: 429 },
    );
  }

  let email: unknown;
  try {
    const parsed = (await request.json()) as { email?: unknown };
    email = parsed?.email;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (typeof email !== "string" || !EMAIL_RE.test(email.trim()) || email.length > 320) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  try {
    await sendDownloadEmail(email.trim());
    return NextResponse.json({ ok: true });
  } catch (err) {
    const detail = err instanceof Error ? err.message : "Unknown error";
    // Log server-side for debugging; don't leak internals to the client.
    console.error("[download-link] send failed:", detail);
    return NextResponse.json(
      { error: "We couldn't send the email right now. Please try again shortly." },
      { status: 502 },
    );
  }
}
