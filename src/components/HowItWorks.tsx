"use client";

import { useState } from "react";
import { HouseSmallIcon, CheckIcon } from "./icons";

/**
 * "Three steps to an audit-ready deal" — an interactive walkthrough mirroring the
 * approved prototype. The left column lists the three steps; clicking one drives
 * the staged carousel on the right. The carousel has five screens (address,
 * contacts, auto-gather, export, audit-ready) grouped under the three steps.
 * Ported from artifact 622b5b9f.
 */

const STEPS = [
  { n: 1, title: "Add the deal", body: "Enter the property address for the transaction." },
  {
    n: 2,
    title: "Select the contacts",
    body: "Pick who’s on the deal — buyer, seller, inspector, and anyone else.",
  },
  {
    n: 3,
    title: "Export",
    body: "When you close, Export is one click — your brokerage gets a hyperlinked PDF, in the format their audit requires.",
  },
];

// Screen -> which step it belongs to (for highlighting the left list).
const SCREENS = [
  { key: "address", step: 0 },
  { key: "contacts", step: 1 },
  { key: "gather", step: 1 },
  { key: "export", step: 2 },
  { key: "ready", step: 2 },
] as const;

export function HowItWorks() {
  const [screen, setScreen] = useState(0);
  const activeStep = SCREENS[screen].step;

  const go = (s: number) => setScreen(Math.max(0, Math.min(SCREENS.length - 1, s)));
  // Map a step click to the first screen of that step.
  const goStep = (step: number) => setScreen(SCREENS.findIndex((s) => s.step === step));

  return (
    <section id="how">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">How it works</span>
          <h2>
            Three steps to an audit-ready deal<span className="hdot">.</span>
          </h2>
          <p>
            Connect once. After that, every deal is three steps — and the audit, the last
            thing between you and your commission, is waiting the moment you close.
          </p>
        </div>
        <div className="hw-grid">
          <div className="hw-left">
            <ol className="hw-steps">
              {STEPS.map((s, i) => (
                <li key={s.n}>
                  <button
                    type="button"
                    className={`hw-step${activeStep === i ? " on" : ""}`}
                    onClick={() => goStep(i)}
                  >
                    <span className="hw-num">{s.n}</span>
                    <div className="hw-text">
                      <h3>{s.title}</h3>
                      <p>{s.body}</p>
                    </div>
                  </button>
                </li>
              ))}
            </ol>
          </div>

          <div className="ct-stage" aria-label="Interactive walkthrough">
            <ScreenAddress on={screen === 0} />
            <ScreenContacts on={screen === 1} />
            <ScreenGather on={screen === 2} />
            <ScreenExport on={screen === 3} onExport={() => go(4)} />
            <ScreenReady on={screen === 4} />

            <div className="ct-nav">
              <button className="ct-btn ct-back" type="button" onClick={() => go(screen - 1)}>
                Back
              </button>
              <div className="ct-dots" role="tablist" aria-label="Walkthrough steps">
                {STEPS.map((s, i) => (
                  <button
                    key={s.n}
                    className={`ct-dot${activeStep === i ? " on" : ""}`}
                    type="button"
                    aria-label={`Step ${s.n}`}
                    onClick={() => goStep(i)}
                  />
                ))}
              </div>
              <button className="ct-btn ct-fwd" type="button" onClick={() => go(screen + 1)}>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ScreenAddress({ on }: { on: boolean }) {
  return (
    <div className={`ct-screen${on ? " on" : ""}`}>
      <span className="ct-step-tag">Step 1 · Add the deal</span>
      <p className="ct-lead">Type the property address.</p>
      <div className="cts-addr">
        <HouseSmallIcon />
        <span>
          123 Maple Street, Miami, FL 33179
          <i className="caret" />
        </span>
      </div>
      <div className="cts-rows">
        <i />
        <i />
        <i />
      </div>
    </div>
  );
}

function ScreenContacts({ on }: { on: boolean }) {
  const people = [
    { av: "RB", name: "Rachel Brooks", role: "Buyer", style: undefined },
    { av: "TC", name: "Tom Chen", role: "Inspector", style: { background: "linear-gradient(135deg,#6366F1,#4338CA)" } },
    { av: "MG", name: "Maria Gomez", role: "Title", style: { background: "linear-gradient(135deg,#3B82F6,#6366F1)" } },
  ];
  return (
    <div className={`ct-screen${on ? " on" : ""}`}>
      <span className="ct-step-tag">Step 2 · Select the contacts</span>
      <p className="ct-lead">
        Select the buyer, seller, inspector, and anyone else on the deal.
      </p>
      <div className="cts-ppl">
        {people.map((p) => (
          <div className="cts-person" key={p.av}>
            <span className="chk">
              <CheckIcon />
            </span>
            <span className="kc-av" style={p.style}>
              {p.av}
            </span>
            <b>{p.name}</b>
            <span className="role">{p.role}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ScreenGather({ on }: { on: boolean }) {
  return (
    <div className={`ct-screen${on ? " on" : ""}`}>
      <span className="ct-step-tag ct-tag-auto">Keepr does the work</span>
      <p className="ct-lead">
        While the deal happens, Keepr gathers every email and text tied to 123 Maple
        Street — automatically.
      </p>
      <div className="cts-prog">
        <i />
      </div>
      <div className="cts-counts">
        <span>34 emails</span>
        <span>128 texts</span>
        <span>12 attachments</span>
      </div>
    </div>
  );
}

function ScreenExport({ on, onExport }: { on: boolean; onExport: () => void }) {
  return (
    <div className={`ct-screen${on ? " on" : ""}`}>
      <span className="ct-step-tag">Step 3 · Export</span>
      <div className="cts-head">
        <div>
          <div className="t">123 Maple Street</div>
          <div className="a">Closed · Miami, FL 33179</div>
        </div>
        <button className="cts-export" type="button" onClick={onExport}>
          Export
        </button>
      </div>
      <div className="cts-rows">
        <i />
        <i />
        <i />
      </div>
      <p className="cts-note">
        Keepr remembers your export format from setup — no options to pick, just Export.
      </p>
    </div>
  );
}

function ScreenReady({ on }: { on: boolean }) {
  return (
    <div className={`ct-screen${on ? " on" : ""}`}>
      <span className="ct-step-tag ct-tag-auto">Audit-ready</span>
      <div className="cts-pdf">
        <div className="cover">123 Maple Street — Transaction Record</div>
        <div className="sub">Prepared with Keepr · 174 items · every entry below is a live link</div>
        <ul className="cts-toc">
          <li>
            <span className="lk">Summary &amp; parties</span>
            <span className="pg">p. 2</span>
          </li>
          <li>
            <span className="lk">Emails &amp; attachments</span>
            <span className="pg">p. 3</span>
          </li>
          <li>
            <span className="lk">Text messages</span>
            <span className="pg">p. 17</span>
          </li>
        </ul>
      </div>
      <div className="cts-done">
        <CheckIcon />
        Send it. Get paid.
      </div>
    </div>
  );
}
