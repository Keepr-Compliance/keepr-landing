import { CheckIcon, SearchIcon } from "./icons";

export function SearchFeature() {
  return (
    <section className="band" id="search">
      <div className="wrap">
        <div className="search-feat">
          <div className="sf-copy">
            <span className="eyebrow">Find anything, across every email and text</span>
            <h2>
              Your own searchable archive<span className="hdot">.</span>
            </h2>
            <p>
              Keepr gathers every email and text from a deal into one place, and makes all
              of it searchable. Type a name, an address, a phone number, or a word someone
              mentioned once, and Keepr jumps straight to it. No inbox digging, no scrolling
              threads. It&apos;s your archive — encrypted on your device, and no one else
              can touch it.
            </p>
            <ul className="sf-list">
              <li>
                <CheckIcon /> Emails and texts in one unified index
              </li>
              <li>
                <CheckIcon /> Search people, keywords, phone numbers, attachments
              </li>
              <li>
                <CheckIcon /> One click from a result to the full conversation
              </li>
            </ul>
          </div>
          <div className="sf-visual">
            <div className="sf-mock" aria-hidden="true">
              <div className="sf-search">
                <SearchIcon />
                <span className="sf-typed">
                  gutter<span className="sf-caret" />
                </span>
              </div>
              <div className="sf-rescount">2 results across this deal</div>
              <div className="sf-hit">
                <span className="hit-kind hit-email">Email</span>
                <div className="sf-hit-main">
                  <b>Inspection report &amp; repair requests</b>
                  <span className="sf-hit-who">Tom Chen · Inspector</span>
                  <span className="sf-hit-snip">
                    …nothing major — a loose <mark className="hl">gutter</mark> and one GFCI
                    outlet…
                  </span>
                </div>
              </div>
              <div className="sf-hit">
                <span className="hit-kind hit-text">Text</span>
                <div className="sf-hit-main">
                  <b>Tom Chen</b>
                  <span className="sf-hit-who">+1 (305) 555-0193</span>
                  <span className="sf-hit-snip">
                    …two small items — loose <mark className="hl">gutter</mark>, one outlet…
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
