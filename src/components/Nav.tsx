import { primaryDownloadHref } from "@/lib/site";

export function Nav() {
  return (
    <header className="nav">
      <div className="wrap">
        <a href="#top" className="wordmark">
          Keepr<span className="dot">.</span>
        </a>
        <div className="nav-cta">
          <nav className="nav-links">
            <a href="#how" className="link">
              How it works
            </a>
            <a href="#pricing" className="link">
              Pricing
            </a>
            {/* TODO(founder): point "Sign in" at the real app sign-in URL. */}
            <a href={primaryDownloadHref} className="link">
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
