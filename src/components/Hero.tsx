import { primaryDownloadHref } from "@/lib/site";
import { LockIcon } from "./icons";
import { TxDemo } from "./TxDemo";
import { EmailCapture } from "./EmailCapture";

export function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-copy">
          <h1>
            No more screenshots.
            <br />
            No more email hunting.
            <br />
            <span className="accent">
              Just click Export<span className="hdot">.</span>
            </span>
          </h1>
          <p className="sub">
            Keepr pulls every text and email from a transaction and hands you a finished
            audit package — export-ready in 90 seconds. The last step before you get paid,
            done for you.
          </p>
          <div className="hero-actions">
            <a href={primaryDownloadHref} className="btn btn-primary btn-lg">
              Download free
            </a>
            <a href="#how" className="btn btn-ghost btn-lg">
              See how it works
            </a>
          </div>
          <p className="trust-line">
            <span>Mac &amp; Windows</span>
            <span className="sep" />
            <span>Free to set up</span>
          </p>
          <p className="hero-secure">
            <LockIcon /> Encrypted on your device — never on our servers, or your
            broker&apos;s.
          </p>
          <div className="works-with" aria-label="Works with">
            <span className="ww-label">Works with</span>
            <div className="ww-chips">
              <span className="ww-chip">
                <GmailGlyph />
                Gmail
              </span>
              <span className="ww-chip">
                <OutlookGlyph />
                Outlook / M365
              </span>
              <span className="ww-chip">
                <IMessageGlyph />
                iMessage
              </span>
              <span className="ww-chip">
                <AndroidGlyph />
                Android
              </span>
            </div>
          </div>
          <EmailCapture hint="Keepr runs on Mac & Windows — open the link on your computer." />
        </div>

        <TxDemo />
      </div>
    </section>
  );
}

function GmailGlyph() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2.5" y="5" width="19" height="14" rx="2.5" fill="#FFFFFF" stroke="#D5D8E2" />
      <path
        d="M4.5 7.5 12 13l7.5-5.5"
        fill="none"
        stroke="#EA4335"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function OutlookGlyph() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2.5" y="4" width="19" height="16" rx="3.5" fill="#0F6CBD" />
      <circle cx="12" cy="12" r="4.6" fill="none" stroke="#FFFFFF" strokeWidth="2.4" />
    </svg>
  );
}

function IMessageGlyph() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <defs>
        <linearGradient id="wwImsg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#6BE362" />
          <stop offset="1" stopColor="#28B438" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="20" height="20" rx="5.5" fill="url(#wwImsg)" />
      <path
        d="M12 6.7c-3.5 0-6.3 2.2-6.3 5 0 1.7 1 3.1 2.6 4-.1.8-.5 1.5-1.1 2 1.2-.1 2.2-.5 3-1.1.6.1 1.2.2 1.8.2 3.5 0 6.3-2.3 6.3-5.1s-2.8-5-6.3-5z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

function AndroidGlyph() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="#1A73E8" />
      <rect x="6.4" y="7.4" width="11.2" height="7.6" rx="2.4" fill="#FFFFFF" />
      <path d="m8.2 15 .2 2.6 3-2.6z" fill="#FFFFFF" />
    </svg>
  );
}
