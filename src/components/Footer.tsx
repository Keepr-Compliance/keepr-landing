import { supportEmail, legalEntity } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site">
      <div className="wrap">
        <div className="foot-top">
          <div>
            <a href="#top" className="wordmark">
              Keepr<span className="dot">.</span>
            </a>
            <p
              style={{
                margin: "12px 0 0",
                fontSize: 14,
                color: "var(--muted)",
                maxWidth: "30ch",
              }}
            >
              The real estate transaction auditing platform.
            </p>
          </div>
          <div className="foot-links">
            <div className="foot-col">
              <span className="h">Product</span>
              <a href="#how">How it works</a>
              <a href="#pricing">Pricing</a>
              <a href="#download">Download</a>
            </div>
            <div className="foot-col">
              <span className="h">Company</span>
              <a href={`mailto:${supportEmail}`}>Support</a>
              <a href="/privacy">Privacy</a>
              <a href="/terms">Terms</a>
            </div>
            <div className="foot-col">
              <span className="h">Contact</span>
              <a href={`mailto:${supportEmail}`}>{supportEmail}</a>
            </div>
          </div>
        </div>
      </div>
      <div className="foot-bottom">
        <div className="wrap">
          <p className="foot-fine">
            <span className="biz">Keepr by {legalEntity} · Keepr Compliance</span> — Keepr is
            a productivity tool for organizing and auditing real estate transaction
            communications and documents. It is not legal advice, a legal compliance system,
            or a substitute for professional counsel.
          </p>
          <div className="foot-legal">
            <span>© 2026 {legalEntity}.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
