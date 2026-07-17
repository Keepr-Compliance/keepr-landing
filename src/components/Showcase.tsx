import { HousePhoto, RoomPhoto } from "./icons";

export function Showcase() {
  return (
    <section id="showcase">
      <div className="wrap">
        <div className="section-head">
          <h2>
            Exactly what you sent — no screenshots<span className="hdot">.</span>
          </h2>
          <p>
            Keepr preserves your conversations the way they actually happened: every
            bubble, photo, GIF, and email attachment. Audit-ready, nothing flattened or
            lost.
          </p>
        </div>
        <div className="show-grid">
          <div className="show-row">
            <div className="show-copy">
              <h3>Texts that look like your texts</h3>
              <p>
                Blue and gray bubbles, photos, GIFs, and timestamps — preserved exactly as
                they appeared in Messages. The walkthrough photo and the celebration GIF
                are part of the record, not lost to a screenshot.
              </p>
            </div>
            <div className="show-visual">
              <div className="show-phone">
                <div className="thread">
                  <div className="bubble-time">Sat, Jun 14</div>
                  <div className="bubble in">Are we still on for the walkthrough Saturday? 🙂</div>
                  <div className="bubble out">Yes! 10am at 123 Maple 🔑</div>
                  <div className="bubble in bubble-media">
                    <span className="msg-photo">
                      <HousePhoto />
                    </span>
                  </div>
                  <div className="bubble out">It looks even better in person</div>
                  <div className="bubble in bubble-media">
                    <span className="msg-gif">
                      <span className="gif-badge">GIF</span>
                      <span className="em">🎉</span>
                    </span>
                  </div>
                  <div className="bubble in">Congrats!! 🥳</div>
                </div>
              </div>
            </div>
          </div>

          <div className="show-row reverse">
            <div className="show-copy">
              <h3>Emails with every attachment</h3>
              <p>
                The full thread and every file — signed disclosures, inspection photos, the
                closing PDF — captured with the email and exported as one clean, audit-ready
                package.
              </p>
            </div>
            <div className="show-visual">
              <div className="show-mail">
                <div className="show-mail-head">Re: Offer accepted — 123 Maple St</div>
                <div className="mail-detail" style={{ padding: 16 }}>
                  <div className="email-from">
                    Rachel Brooks <span className="email-meta">· Jun 4, 9:12 AM</span>
                  </div>
                  <div className="email-text">
                    Attaching the signed disclosures and the inspection photos —
                    everything&apos;s a go for closing!
                  </div>
                  <div className="attach-row">
                    <span className="attach-img">
                      <HousePhoto />
                    </span>
                    <span className="attach-img">
                      <RoomPhoto />
                    </span>
                    <span className="attach-chip">
                      <span className="pdf-ic">PDF</span> Signed_Disclosures.pdf{" "}
                      <span className="ac-size">240 KB</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="show-row">
            <div className="show-copy">
              <h3>One export, built for the audit</h3>
              <p>
                Export the whole deal as a hyperlinked PDF with a clickable index — jump
                straight to any email, text, or document. And choose the format your
                brokerage&apos;s audit actually requires.
              </p>
            </div>
            <div className="show-visual">
              <div className="show-doc">
                <div className="doc-head">Audit Package — 123 Maple Street</div>
                <div className="doc-body">
                  <div className="doc-toc-label">Contents · click to jump</div>
                  <ul className="doc-toc">
                    <li>
                      <span className="lnk">1. Transaction summary</span>
                      <span className="pg">p.1</span>
                    </li>
                    <li>
                      <span className="lnk">2. Email correspondence (47)</span>
                      <span className="pg">p.2</span>
                    </li>
                    <li>
                      <span className="lnk">3. Text messages (132)</span>
                      <span className="pg">p.18</span>
                    </li>
                    <li>
                      <span className="lnk">4. Documents &amp; attachments (9)</span>
                      <span className="pg">p.31</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
