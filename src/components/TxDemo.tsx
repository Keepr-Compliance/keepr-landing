"use client";

import { useState } from "react";
import {
  ChatIcon,
  MailIcon,
  DocIcon,
  PeopleIcon,
  ClipIcon,
  DownloadIcon,
  HomeIcon,
  CalendarIcon,
  PinIcon,
  HousePhoto,
  RoomPhoto,
} from "./icons";
import { primaryDownloadHref } from "@/lib/site";

/**
 * Interactive transaction demo — mirrors the real Keepr transaction-details
 * screen (indigo header, Overview / Texts / Emails tabs, message rows). Clicking
 * "Export" reveals the finished, hyperlinked audit PDF (the real export deliverable).
 *
 * Ported from the approved prototype (artifact 622b5b9f). Interactions:
 *  - tab switching between Overview / Texts / Emails
 *  - drilling into an individual email or text thread and back
 *  - Export -> reveals the audit-package overlay with a clickable threads index
 */
type View =
  | "overview"
  | "emails"
  | "texts"
  | "email-1"
  | "email-2"
  | "email-3"
  | "text-1"
  | "text-2";

export function TxDemo() {
  const [view, setView] = useState<View>("overview");
  const [exported, setExported] = useState(false);

  const activeTab: "overview" | "emails" | "texts" =
    view.startsWith("email") ? "emails" : view.startsWith("text") ? "texts" : "overview";

  return (
    <div className="teaser" aria-label="Interactive transaction demo">
      <div className="tx-head">
        <div>
          <div className="tx-title">Transaction Details</div>
          <div className="tx-sub">123 Maple Street · Miami, FL 33179</div>
        </div>
        <div className="tx-head-actions">
          <button
            className={`tx-export${exported ? " exported" : ""}`}
            type="button"
            onClick={() => setExported(true)}
          >
            Export
          </button>
        </div>
      </div>

      <div className="tx-tabs" role="tablist">
        <button
          className={`tx-tab${activeTab === "overview" ? " active" : ""}`}
          type="button"
          onClick={() => setView("overview")}
        >
          Overview
        </button>
        <button
          className={`tx-tab${activeTab === "texts" ? " active" : ""}`}
          type="button"
          onClick={() => setView("texts")}
        >
          <ChatIcon /> Texts
        </button>
        <button
          className={`tx-tab${activeTab === "emails" ? " active" : ""}`}
          type="button"
          onClick={() => setView("emails")}
        >
          <MailIcon /> Emails
        </button>
      </div>

      <div className="tx-body">
        {view === "overview" && <OverviewPanel />}
        {view === "emails" && <EmailsList onOpen={(v) => setView(v)} />}
        {view === "email-1" && (
          <EmailDetail id="email-1" onBack={() => setView("emails")} />
        )}
        {view === "email-2" && (
          <EmailDetail id="email-2" onBack={() => setView("emails")} />
        )}
        {view === "email-3" && (
          <EmailDetail id="email-3" onBack={() => setView("emails")} />
        )}
        {view === "texts" && <TextsList onOpen={(v) => setView(v)} />}
        {view === "text-1" && (
          <TextThread id="text-1" onBack={() => setView("texts")} />
        )}
        {view === "text-2" && (
          <TextThread id="text-2" onBack={() => setView("texts")} />
        )}
      </div>

      <div className={`tx-audit${exported ? " show" : ""}`} aria-hidden={!exported}>
        <AuditPackage />
      </div>
    </div>
  );
}

function OverviewPanel() {
  return (
    <div style={{ padding: "14px 16px 16px" }}>
      <div className="ov-sec">
        <div className="ov-h">
          <DocIcon className="ic-doc" /> Summary
        </div>
        <div className="ov-summary">
          <span className="sum-item">
            <HomeIcon /> Type <span className="type-pill">Sale</span>
          </span>
          <span className="sum-div">·</span>
          <span className="sum-item">
            <CalendarIcon /> Audit period Mar 1 – Jun 20, 2026
          </span>
          <span className="sum-div">·</span>
          <span className="sum-item">
            <CalendarIcon /> Closing Jun 20, 2026
          </span>
          <div className="sum-addr">
            <PinIcon /> 123 Maple Street, Miami, FL 33179
          </div>
        </div>
      </div>
      <div className="ov-sec">
        <div className="ov-h">
          <PeopleIcon className="ic-people" /> Key Contacts
        </div>
        <div className="kc-list">
          <div className="kc-card">
            <span className="kc-av">RB</span>
            <span className="kc-body">
              <span className="kc-name">Rachel Brooks</span>
              <span className="kc-meta">rachel.brooks@gmail.com · (305) 555-0148</span>
            </span>
            <span className="kc-role">Buyer</span>
          </div>
          <div className="kc-card">
            <span className="kc-av" style={{ background: "linear-gradient(135deg,#6366F1,#4338CA)" }}>
              TC
            </span>
            <span className="kc-body">
              <span className="kc-name">Tom Chen</span>
              <span className="kc-meta">tom@pinnacleinspect.com · (305) 555-0193</span>
            </span>
            <span className="kc-role">Inspector</span>
          </div>
          <div className="kc-card">
            <span className="kc-av" style={{ background: "linear-gradient(135deg,#3B82F6,#6366F1)" }}>
              MG
            </span>
            <span className="kc-body">
              <span className="kc-name">Maria Gomez</span>
              <span className="kc-meta">mgomez@titlepartners.com · (305) 555-0177</span>
            </span>
            <span className="kc-role">Title</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function MailCard({
  onOpen,
  av,
  avStyle,
  subj,
  parts,
  prev,
  date,
  clip,
}: {
  onOpen: () => void;
  av: string;
  avStyle?: React.CSSProperties;
  subj: string;
  parts: string;
  prev?: string;
  date: string;
  clip?: boolean;
}) {
  return (
    <button className="mailcard" type="button" onClick={onOpen}>
      <div className="mailcard-inner">
        <div className="mail-av" style={avStyle}>
          {av}
        </div>
        <div className="mail-body">
          <div className="mail-subj">{subj}</div>
          <div className="mail-parts">{parts}</div>
          {prev && <div className="mail-prev">{prev}</div>}
        </div>
        <div className="mail-right">
          {clip && (
            <span className="mail-clip">
              <ClipIcon />
            </span>
          )}
          <span className="mail-date">{date}</span>
          <span className="mail-view">View →</span>
        </div>
      </div>
    </button>
  );
}

function EmailsList({ onOpen }: { onOpen: (v: View) => void }) {
  return (
    <div style={{ padding: "14px 16px 16px" }}>
      <div className="tx-panel-head">3 conversations · 47 emails</div>
      <MailCard
        onOpen={() => onOpen("email-1")}
        av="RB"
        subj="Re: Offer accepted — 123 Maple St"
        parts="Rachel Brooks, you +2 · 6 emails"
        prev="Great news — the sellers signed this morning. Attaching the signed disclosures…"
        date="Jun 4–18"
        clip
      />
      <MailCard
        onOpen={() => onOpen("email-2")}
        av="TC"
        avStyle={{ background: "linear-gradient(135deg,#6366F1,#4338CA)" }}
        subj="Inspection report & repair requests"
        parts="Tom Chen (inspector) · 4 emails"
        prev="Please find the full inspection report attached. A few items to flag…"
        date="Jun 9–12"
        clip
      />
      <MailCard
        onOpen={() => onOpen("email-3")}
        av="MG"
        avStyle={{ background: "linear-gradient(135deg,#3B82F6,#6366F1)" }}
        subj="Closing disclosure — final"
        parts="Maria Gomez (title) · 8 emails"
        prev="Wire instructions confirmed. See you at the closing table…"
        date="Jun 20"
        clip
      />
    </div>
  );
}

function BackBtn({ onBack, label }: { onBack: () => void; label: string }) {
  return (
    <button className="tx-back" type="button" onClick={onBack}>
      ← {label}
    </button>
  );
}

function EmailDetail({ id, onBack }: { id: "email-1" | "email-2" | "email-3"; onBack: () => void }) {
  return (
    <div>
      <BackBtn onBack={onBack} label="Back to emails" />
      <div className="mail-detail">
        {id === "email-1" && (
          <>
            <div className="md-subj">Re: Offer accepted — 123 Maple St</div>
            <div className="email-msg">
              <div className="email-from">
                Rachel Brooks <span className="email-meta">· Jun 4, 9:12 AM</span>
              </div>
              <div className="email-text">
                Hi! Great news — the sellers signed this morning. Attaching the signed
                disclosures and a photo of the place. So happy for you both! 🎉
              </div>
              <div className="attach-row">
                <span className="attach-img">
                  <HousePhoto />
                </span>
                <span className="attach-chip">
                  <span className="pdf-ic">PDF</span> Signed_Disclosures.pdf{" "}
                  <span className="ac-size">240 KB</span>
                </span>
              </div>
            </div>
            <div className="email-msg">
              <div className="email-from">
                You <span className="email-meta">· Jun 4, 9:40 AM</span>
              </div>
              <div className="email-text">
                Amazing — thank you, Rachel! Sending to the title company now.
              </div>
            </div>
          </>
        )}
        {id === "email-2" && (
          <>
            <div className="md-subj">Inspection report &amp; repair requests</div>
            <div className="email-msg">
              <div className="email-from">
                Tom Chen <span className="email-meta">· Jun 11, 3:04 PM</span>
              </div>
              <div className="email-text">
                Full inspection report attached, plus photos of the two items we
                discussed. Nothing major — a loose gutter and one GFCI outlet.
              </div>
              <div className="attach-row">
                <span className="attach-img">
                  <HousePhoto />
                </span>
                <span className="attach-img">
                  <RoomPhoto />
                </span>
                <span className="attach-chip">
                  <span className="pdf-ic">PDF</span> Inspection_Report.pdf{" "}
                  <span className="ac-size">1.2 MB</span>
                </span>
              </div>
            </div>
          </>
        )}
        {id === "email-3" && (
          <>
            <div className="md-subj">Closing disclosure — final</div>
            <div className="email-msg">
              <div className="email-from">
                Maria Gomez <span className="email-meta">· Jun 20, 8:15 AM</span>
              </div>
              <div className="email-text">
                Final closing disclosure attached. Wire instructions are confirmed —
                see you at the table at 2pm.
              </div>
              <div className="attach-row">
                <span className="attach-chip">
                  <span className="pdf-ic">PDF</span> Closing_Disclosure.pdf{" "}
                  <span className="ac-size">312 KB</span>
                </span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function TextsList({ onOpen }: { onOpen: (v: View) => void }) {
  return (
    <div style={{ padding: "14px 16px 16px" }}>
      <div className="tx-panel-head">2 conversations · 132 texts</div>
      <MailCard
        onOpen={() => onOpen("text-1")}
        av="RB"
        avStyle={{ background: "linear-gradient(135deg,#4F46E5,#7A6BF2)" }}
        subj="Rachel Brooks"
        parts="+1 (305) 555-0148 · 86 texts"
        prev="Congrats again — you’re going to love it! 🎉"
        date="Jun 3–20"
      />
      <MailCard
        onOpen={() => onOpen("text-2")}
        av="TC"
        avStyle={{ background: "linear-gradient(135deg,#64748B,#475569)" }}
        subj="Tom Chen"
        parts="+1 (305) 555-0193 · 46 texts"
        prev="Roof and HVAC look great — full report by email."
        date="Jun 9–11"
      />
    </div>
  );
}

function TextThread({ id, onBack }: { id: "text-1" | "text-2"; onBack: () => void }) {
  return (
    <div>
      <BackBtn onBack={onBack} label="Back to texts" />
      {id === "text-1" ? (
        <div className="thread">
          <div className="bubble-time">Sat, Jun 14 · 8:42 AM</div>
          <div className="bubble in">Are we still on for the walkthrough Saturday? 🙂</div>
          <div className="bubble out">Yes! 10am at 123 Maple. I’ll bring the paperwork 🔑</div>
          <div className="bubble in bubble-media">
            <span className="msg-photo">
              <HousePhoto />
            </span>
          </div>
          <div className="bubble in">Look how good it looks 😍</div>
          <div className="bubble out">Perfect 🙌</div>
          <div className="bubble in bubble-media">
            <span className="msg-gif">
              <span className="gif-badge">GIF</span>
              <span className="em">🎉</span>
            </span>
          </div>
          <div className="bubble in">Congrats again — you’re going to love it!</div>
        </div>
      ) : (
        <div className="thread">
          <div className="bubble-time">Wed, Jun 11 · 1:20 PM</div>
          <div className="bubble out">How did the inspection go?</div>
          <div className="bubble in">Roof and HVAC look great 👍</div>
          <div className="bubble in">
            Two small items — loose gutter, one outlet. Full report by email.
          </div>
          <div className="bubble out">Perfect, thanks Tom!</div>
        </div>
      )}
    </div>
  );
}

/** The finished, hyperlinked audit PDF revealed after Export. */
function AuditPackage() {
  return (
    <>
      <div className="ta-bar">
        <span className="ta-file">
          <DocIcon /> Transaction Audit — 123 Maple St.pdf
        </span>
        <a className="ta-dl" href={primaryDownloadHref}>
          <DownloadIcon /> Download
        </a>
      </div>
      <div className="ta-doc">
        <div className="ta-page">
          <div className="ta-doc-h">Transaction Audit Summary</div>
          <div className="ta-period">Audit Period: March 3 – June 24, 2026</div>
          <div className="ta-gen">Generated on July 14, 2026</div>
          <div className="ta-prop">
            <div className="ta-prop-h">Property Information</div>
            <div className="ta-prop-addr">123 Maple Street, Miami, FL 33179</div>
          </div>
          <div className="ta-grid">
            <div className="ta-cell">
              <span>Transaction Type</span>
              <b>Purchase</b>
            </div>
            <div className="ta-cell">
              <span>Closing Date</span>
              <b>June 24, 2026</b>
            </div>
            <div className="ta-cell">
              <span>Total Emails</span>
              <b>34</b>
            </div>
            <div className="ta-cell">
              <span>Total Text Messages</span>
              <b>128</b>
            </div>
          </div>
          <div className="ta-block">
            <div className="ta-block-h">Contacts (3)</div>
            <div className="ta-party">
              <span className="ta-av">RB</span>
              <span>
                <b>Rachel Brooks</b>
                <span>Buyer · rachel.brooks@gmail.com · (305) 555-0148</span>
              </span>
              <span className="ta-role">Buyer</span>
            </div>
            <div className="ta-party">
              <span className="ta-av" style={{ background: "linear-gradient(135deg,#6366F1,#4338CA)" }}>
                TC
              </span>
              <span>
                <b>Tom Chen</b>
                <span>Inspector · tom@pinnacleinspect.com · (305) 555-0193</span>
              </span>
              <span className="ta-role">Inspector</span>
            </div>
            <div className="ta-party">
              <span className="ta-av" style={{ background: "linear-gradient(135deg,#3B82F6,#6366F1)" }}>
                MG
              </span>
              <span>
                <b>Maria Gomez</b>
                <span>Title · mgomez@titlepartners.com · (305) 555-0177</span>
              </span>
              <span className="ta-role">Title</span>
            </div>
          </div>
          <div className="ta-block">
            <div className="ta-block-h">Email Threads Index (2)</div>
            <div className="ta-idx">
              <span className="ta-idxn">001</span>
              <span className="ta-idxt">
                <b>Wire instructions — closing funds</b>
                <span>Maria Gomez</span>
              </span>
              <span className="ta-idxa">↗</span>
            </div>
            <div className="ta-idx">
              <span className="ta-idxn">002</span>
              <span className="ta-idxt">
                <b>We got the keys! 🎉</b>
                <span>Rachel Brooks</span>
              </span>
              <span className="ta-idxa">↗</span>
            </div>
          </div>
          <div className="ta-block">
            <div className="ta-block-h">Text Threads Index (3)</div>
            <div className="ta-idx">
              <span className="ta-idxn">001</span>
              <span className="ta-idxt">
                <b>Tom Chen</b>
                <span>5 msgs</span>
              </span>
              <span className="ta-idxa">↗</span>
            </div>
            <div className="ta-idx">
              <span className="ta-idxn">002</span>
              <span className="ta-idxt">
                <b>Rachel Brooks</b>
                <span>78 msgs</span>
              </span>
              <span className="ta-idxa">↗</span>
            </div>
            <div className="ta-idx">
              <span className="ta-idxn">003</span>
              <span className="ta-idxt">
                <b>Maria Gomez</b>
                <span>45 msgs</span>
              </span>
              <span className="ta-idxa">↗</span>
            </div>
          </div>
          <div className="ta-foot">
            This report was automatically generated by Keepr
            <br />
            <span>Transaction ID: 7b16cfc1-84c8-4426-90a3-daaeee98f696</span>
          </div>
        </div>

        <div className="ta-page">
          <div className="ta-thread-h">Wire instructions — closing funds</div>
          <div className="ta-thread-sub">6 message(s) in thread</div>
          <div className="ta-msg">
            <div className="ta-ml">
              <span>From:</span> Maria Gomez &lt;mgomez@titlepartners.com&gt;
            </div>
            <div className="ta-ml">
              <span>To:</span> you@youragency.com
            </div>
            <div className="ta-ml">
              <span>Date:</span> Thursday, June 18, 2026, 2:31 PM
            </div>
            <div className="ta-mbody">
              Attached are the verified wire instructions and the title commitment for
              the 123 Maple Street closing. Please confirm receipt before initiating any
              transfer.
            </div>
            <div className="ta-att">
              <div className="ta-att-h">Attachments (2)</div>
              <div className="ta-att-row">
                <ClipIcon />
                <span>Wire_Instructions_123Maple.pdf</span>
                <span className="ta-att-sz">248 KB</span>
              </div>
              <div className="ta-att-row">
                <ClipIcon />
                <span>Title_Commitment.pdf</span>
                <span className="ta-att-sz">1.2 MB</span>
              </div>
              <div className="ta-att-note">Files included in the /attachments folder</div>
            </div>
          </div>
        </div>

        <div className="ta-page">
          <div className="ta-thread-h">We got the keys! 🎉</div>
          <div className="ta-thread-sub">3 message(s) in thread</div>
          <div className="ta-msg">
            <div className="ta-ml">
              <span>From:</span> Rachel Brooks &lt;rachel.brooks@gmail.com&gt;
            </div>
            <div className="ta-ml">
              <span>To:</span> you@youragency.com
            </div>
            <div className="ta-ml">
              <span>Date:</span> Wednesday, June 24, 2026, 5:40 PM
            </div>
            <div className="ta-mbody">
              We just did the final walkthrough and picked up the keys — we’re officially
              homeowners! Thank you for everything. 🥳
            </div>
            <div className="ta-gif">
              <span className="ta-gif-badge">GIF</span>
              <span className="ta-gif-em">🎉🔑</span>
            </div>
          </div>
        </div>

        <div className="ta-page">
          <div className="ta-thread-h">
            Conversation with Tom Chen <span className="ta-hash">#001</span>
          </div>
          <div className="ta-thread-sub">(305) 555-0193 | 5 messages</div>
          <div className="ta-thread">
            <div className="ta-b out">
              <span className="ta-bm">You · Jun 11, 2026, 1:20 PM</span>How did the
              inspection go?
            </div>
            <div className="ta-b in">
              <span className="ta-bm">Tom Chen · Jun 11, 2026, 1:24 PM</span>Roof and HVAC
              look great 👍
            </div>
            <div className="ta-b in">
              <span className="ta-bm">Tom Chen · Jun 11, 2026, 1:25 PM</span>Two small
              items — loose gutter, one outlet. Full report by email.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
