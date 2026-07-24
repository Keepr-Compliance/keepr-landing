/**
 * POST /api/download-link
 *
 * Emails the Keepr desktop download link to a visitor browsing on a phone.
 *
 * ROUTED design (BACKLOG-2193, Option B1): the marketing site does NOT hold any
 * Azure/M365 secret. It validates the email, applies a light per-IP rate limit,
 * then makes a server-to-server POST to the broker-portal gateway
 * (POST /api/send-download-link), which owns the M365 Graph sender and the email
 * content. This route only proxies + maps the response.
 */

import { NextResponse } from "next/server";
import { checkBotId } from "botid/server";

// Run on the Node.js runtime; never cache (side-effecting POST).
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// ---------------------------------------------------------------------------
// Lightweight in-memory rate limit (best-effort abuse guard)
// ---------------------------------------------------------------------------
// Serverless instances are ephemeral/unshared, so this only throttles bursts on
// the same warm instance — a courtesy guard, not a hard limit.

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
  return entry.count > RATE_LIMIT_MAX;
}

// Basic RFC-5322-ish email validation — good enough to reject obvious garbage.
// Linear-time / no catastrophic backtracking: domain labels exclude '.', so the
// dot-separated groups can't overlap (avoids polynomial ReDoS on hostile input).
const EMAIL_RE = /^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)+$/;

// Broker-portal gateway that actually sends the email (holds the M365 secret).
const GATEWAY_URL =
  (process.env.BROKER_PORTAL_URL ?? "https://app.keeprcompliance.com") +
  "/api/send-download-link";

export async function POST(request: Request) {
  // Reject bots before doing any work (Vercel BotID; basic mode, no dashboard
  // setup needed). Fail OPEN if the check can't run — e.g. local dev without
  // Vercel OIDC, or a transient BotID outage — so a protection hiccup never
  // breaks the form. The per-IP rate limit and validation below still apply, and
  // real detection runs on Vercel. BACKLOG-2226.
  try {
    const { isBot } = await checkBotId();
    if (isBot) {
      return NextResponse.json({ error: "Access denied." }, { status: 403 });
    }
  } catch {
    // BotID infrastructure unavailable — allow the request through.
  }

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

  if (typeof email !== "string" || email.length > 320 || !EMAIL_RE.test(email.trim())) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const sharedSecret = process.env.DOWNLOAD_LINK_SHARED_SECRET;
  if (!sharedSecret) {
    console.error("[download-link] DOWNLOAD_LINK_SHARED_SECRET is not set");
    return NextResponse.json(
      { error: "We couldn't send the email right now. Please try again shortly." },
      { status: 500 },
    );
  }

  try {
    const res = await fetch(GATEWAY_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": sharedSecret,
      },
      body: JSON.stringify({ email: email.trim() }),
    });

    if (res.ok) {
      return NextResponse.json({ ok: true });
    }

    // Gateway rejected (bad email, rate limit, auth, send failure). Log the
    // status server-side; return a friendly message to the visitor.
    const detail = await res.text().catch(() => "");
    console.error(
      `[download-link] gateway returned ${res.status}: ${detail.slice(0, 300)}`,
    );
    return NextResponse.json(
      { error: "We couldn't send the email right now. Please try again shortly." },
      { status: 502 },
    );
  } catch (err) {
    const detail = err instanceof Error ? err.message : "Unknown error";
    console.error("[download-link] gateway request failed:", detail);
    return NextResponse.json(
      { error: "We couldn't send the email right now. Please try again shortly." },
      { status: 502 },
    );
  }
}
