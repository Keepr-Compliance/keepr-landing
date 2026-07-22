import { primaryDownloadHref, bookDemoHref, pricingTiers } from "@/lib/site";
import { ShieldCheckIcon, InfoIcon } from "./icons";

/**
 * Pricing — founder-locked (BACKLOG-2003): PAYG per-deal, DESCENDING by
 * calendar-year volume ($14.99 -> $13 -> $12 -> $11), charged per unlock, only on
 * deals that CLOSE. Matches the shipped product. NO prepaid credit bundles.
 * Tiers come from src/lib/site.ts so the single source of truth stays in one place.
 */
export function Pricing() {
  return (
    <section className="band" id="pricing">
      <div className="wrap">
        <div className="section-head center">
          <h2>
            Your best year
            <br />
            is your cheapest<span className="hdot">.</span>
          </h2>
          <p>
            Close more transactions, pay less per deal — no subscription, no upfront cost.
            Every deal you close in a calendar year moves your rate lower.
          </p>
        </div>

        <div className="usage">
          <div className="usage-cap">
            The more you close each year, the lower your per-deal rate
          </div>
          <div className="usage-tiers">
            {pricingTiers.map((t) => (
              <div className="utier" key={t.range}>
                <div className="ut-range">{t.range}</div>
                <div className="ut-price">
                  {t.price} <span>/ deal</span>
                </div>
                <span className={`ut-save${t.isBase ? " ut-base" : ""}`}>{t.save}</span>
              </div>
            ))}
          </div>
          <div className="usage-guarantee">
            <ShieldCheckIcon />
            <span>
              <b>Deal falls through? You pay nothing.</b> You&apos;re only charged for the
              transactions that actually close — you pay Keepr when you get paid.
            </span>
          </div>
          <div className="usage-note">
            <InfoIcon />
            Read every message and export the full audit on any deal you open. No
            subscription, nothing to buy up front, and the more you close in a calendar
            year, the bigger your discount. Setup and your first look are always free.
          </div>
          <div className="usage-cta">
            <a
              href={primaryDownloadHref}
              className="btn btn-primary btn-lg"
              style={{ width: "100%", boxSizing: "border-box", textAlign: "center" }}
            >
              Download free — start with your first deal
            </a>
          </div>
        </div>

        <div className="team-cta">
          <div className="team-cta-copy">
            <h3>Buying for a team or brokerage?</h3>
            <p>
              Volume pricing and rollout support for your agents — plus subscription options
              for whole brokerages. Let&apos;s find the right fit.
            </p>
          </div>
          <div className="team-cta-actions">
            <a href={bookDemoHref} target="_blank" rel="noopener" className="btn btn-primary">
              Book a demo
            </a>
          </div>
        </div>

        <p className="price-foot">
          Downloading and setting up Keepr is free — you&apos;ll watch it pull each deal
          together automatically. You&apos;re charged one per-deal fee to unlock a
          transaction: every message, and the export.
        </p>
      </div>
    </section>
  );
}
