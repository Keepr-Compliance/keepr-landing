import { primaryDownloadHref, bookDemoHref, plans } from "@/lib/site";
import { CheckIcon, XIcon } from "./icons";

/**
 * Pricing — option 1a (three cards, Agent highlighted).
 * Plans come from src/lib/site.ts. Brokerage price is intentionally NOT shown ("Book a Call").
 */
export function Pricing() {
  return (
    <section className="band" id="pricing">
      <div className="wrap">
        <div className="section-head center">
          {/* TODO(founder): headline copy pending approval */}
          <h2>
            Pick the plan that fits how you work<span className="hdot">.</span>
          </h2>
          <p>
            Pay per export, go unlimited with a monthly license, or roll Keepr out across
            your brokerage.
          </p>
        </div>

        <div className="plans">
          {/* Solo Export */}
          <div className="plan">
            <div className="plan-head">
              <div className="plan-name">{plans.solo.name}</div>
              <div className="plan-price">
                {plans.solo.price} <span>/ export</span>
              </div>
              <div className="plan-sub">Per transaction. Pay as you go.</div>
            </div>
            <ul className="plan-list">
              <li><CheckIcon />No subscription</li>
              <li><CheckIcon />No cancellation</li>
            </ul>
            <a href={primaryDownloadHref} className="btn btn-ghost plan-cta">
              Download free
            </a>
          </div>

          {/* Agent */}
          <div className="plan plan-featured">
            <span className="plan-badge">Unlimited</span>
            <div className="plan-head">
              <div className="plan-name">{plans.agent.name}</div>
              <div className="plan-price">
                {plans.agent.price} <span>/ month</span>
              </div>
              <div className="plan-sub">Single license.</div>
            </div>
            <ul className="plan-list">
              <li><CheckIcon />Unlimited text and email exports</li>
              <li className="plan-no"><XIcon />No broker portal</li>
            </ul>
            <a href={primaryDownloadHref} className="btn btn-primary plan-cta">
              Download free
            </a>
          </div>

          {/* Brokerage — no price shown */}
          <div className="plan plan-team">
            <div className="plan-head">
              <div className="plan-name">{plans.brokerage.name}</div>
              <div className="plan-price plan-price-talk">
                Let&apos;s talk<span className="hdot">.</span>
              </div>
              <div className="plan-sub">Per month, per agent.</div>
            </div>
            <ul className="plan-list">
              <li><CheckIcon />Purchased by a Designated Broker</li>
              <li><CheckIcon />Demo required</li>
            </ul>
            <a href={bookDemoHref} target="_blank" rel="noopener" className="btn btn-primary plan-cta">
              Book a Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
