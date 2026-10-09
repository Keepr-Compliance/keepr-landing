import { LockIcon } from "./icons";

// Testimonials section is hidden until we have real, permissioned quotes from named
// agents. Do NOT set true with placeholder/invented endorsements (FTC violation).
const SHOW_TESTIMONIALS = false;

export function Trust() {
  return (
    <section id="trust">
      <div className="wrap">
        <div className="section-head">
          <h2>
            Your texts<span className="hdot">.</span> Your privacy<span className="hdot">.</span>{" "}
            Your peace of mind<span className="hdot">.</span>
          </h2>
        </div>
        <div className="sec-banner">
          <div className="sec-ic">
            <LockIcon />
          </div>
          <div>
            <h3>Local-first, and yours</h3>
            <p>
              Your messages, emails, and client records stay on your own device — not on our
              servers, and not your brokerage&apos;s. Nothing is shared until you choose to:
              you decide what to submit to your broker and what to export. Your data stays in
              your control.
            </p>
          </div>
        </div>
        {/* Hidden until we have REAL, permissioned testimonials from named agents
            (see Testimonials() below). Flip to true only with real, permissioned quotes —
            invented endorsements would be an FTC violation. */}
        {SHOW_TESTIMONIALS && <Testimonials />}
      </div>
    </section>
  );
}

/**
 * Testimonials — PLACEHOLDERS ONLY.
 *
 * TODO(founder): replace these with REAL, permissioned testimonials from named
 * agents before the site goes public. Publishing invented endorsements would be an
 * FTC violation — do not ship fabricated quotes/names/photos. The cards below are
 * intentionally empty and visibly marked as placeholders.
 */
function Testimonials() {
  return (
    <div className="testimonials">
      <h3 className="tm-title">What early agents are saying</h3>
      <p className="tm-note">
        <span className="tag">Placeholder</span>
        Real, permissioned testimonials go here before launch — TODO(founder).
      </p>
      <div className="tm-grid">
        {[1, 2, 3].map((i) => (
          <div className="tm-card tm-placeholder" key={i}>
            <div className="tm-stars" aria-hidden="true">
              ☆☆☆☆☆
            </div>
            <p className="tm-quote">
              &ldquo;Real customer quote pending — awaiting a signed permission from a named
              agent.&rdquo;
            </p>
            <div className="tm-who">
              <span className="tm-av" aria-hidden="true" />
              <span className="tm-name">
                Name pending
                <small>Role · City, ST</small>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
