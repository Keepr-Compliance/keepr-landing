import { primaryDownloadHref, downloads } from "@/lib/site";
import { EmailCapture } from "./EmailCapture";

export function FinalCTA() {
  return (
    <section id="download">
      <div className="wrap">
        <div className="final">
          <h2>
            Your next deal, audit-ready<span className="hdot">.</span>
          </h2>
          <p>
            Connect your email and texts, and watch your latest deal come together
            automatically.
          </p>
          <a href={primaryDownloadHref} className="btn btn-primary btn-lg">
            Download free
          </a>
          <p className="fine">Mac &amp; Windows · Free to download &amp; set up · No card to start</p>

          {/* Platform-specific direct links to the public release feed (v2.22.0). */}
          <div className="dl-platforms">
            <a className="dl-platform" href={downloads.macArm}>
              Download for Mac (Apple Silicon)
            </a>
            <a className="dl-platform" href={downloads.macIntel}>
              Mac (Intel)
            </a>
            <a className="dl-platform" href={downloads.windows}>
              Download for Windows
            </a>
          </div>

          <div style={{ maxWidth: 420, marginLeft: "auto", marginRight: "auto" }}>
            <EmailCapture hint="Open it on your Mac or PC — setup takes about two minutes." />
          </div>
        </div>
      </div>
    </section>
  );
}
