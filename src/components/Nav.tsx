import Link from "next/link";
import { primaryDownloadHref, signInHref } from "@/lib/site";

export function Nav() {
  return (
    <header className="nav">
      <div className="wrap">
        <Link href="/" className="wordmark">
          Keepr<span className="dot">.</span>
        </Link>
        <div className="nav-cta">
          <nav className="nav-links">
            {/* Root-relative so these work from any page (e.g. /download), not just the homepage. */}
            <a href="/#how" className="link">
              How it works
            </a>
            <a href="/#pricing" className="link">
              Pricing
            </a>
            <a href={signInHref} className="link">
              Sign in
            </a>
          </nav>
          <a
            href={primaryDownloadHref}
            className="btn btn-primary"
            style={{ padding: "11px 18px", fontSize: 15 }}
          >
            Download
          </a>
        </div>
      </div>
    </header>
  );
}
