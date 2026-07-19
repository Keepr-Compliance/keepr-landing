import { primaryDownloadHref } from "@/lib/site";

export function Nav() {
  return (
    <header className="nav">
      <div className="wrap">
        <a
          href="#top"
          className="wordmark"
          style={{ display: "inline-flex", alignItems: "center", gap: 9 }}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 512 512"
            role="img"
            aria-label="Keepr logo"
            style={{ display: "block", borderRadius: 6, flexShrink: 0 }}
          >
            <defs>
              <linearGradient id="navK" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#4F46E5" />
                <stop offset="1" stopColor="#6D5DF0" />
              </linearGradient>
            </defs>
            <rect width="512" height="512" rx="116" fill="url(#navK)" />
            <text
              x="242"
              y="362"
              textAnchor="middle"
              fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Inter, system-ui, sans-serif"
              fontWeight="800"
              fontSize="296"
              fill="#FFFFFF"
            >
              K<tspan fill="#F5A524">.</tspan>
            </text>
          </svg>
          <span>
            Keepr<span className="dot">.</span>
          </span>
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
