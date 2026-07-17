# keepr-landing

Keepr's public marketing / landing site — a standalone **Next.js (App Router) + TypeScript + Tailwind v4** app, deployed to its own Vercel project on the public domain (keeprcompliance.com). It is intentionally **decoupled** from the Keepr desktop monorepo so marketing can ship on its own cadence.

Tracked as **BACKLOG-2003**.

---

## Tech stack

- **Next.js 16** (App Router, static-friendly — all pages prerender)
- **TypeScript** (strict)
- **Tailwind CSS v4** (present; the bespoke landing design lives in `src/app/globals.css` as a ported design system)
- No external runtime dependencies, fonts, or CDNs — the site is fully self-contained (system font stack, inline SVGs).

## Local development

```bash
npm install
npm run dev          # http://localhost:3000
```

Quality gates (all must be clean):

```bash
npm run type-check   # tsc --noEmit
npm run lint         # eslint
npm run build        # production build (prerenders /, /privacy, /terms)
```

## Project structure

```
src/
  app/
    layout.tsx         # root layout + metadata
    page.tsx           # landing page (composes the sections below)
    globals.css        # ported design system (indigo/amber Keepr brand)
    privacy/page.tsx   # Privacy Policy — STUB (TODO(founder))
    terms/page.tsx     # Terms of Service — STUB (TODO(founder))
  components/
    Nav, Hero, TxDemo, HowItWorks, Showcase, SearchFeature,
    Pricing, Trust, FinalCTA, Footer, EmailCapture, icons
  lib/
    site.ts            # single source of truth: download links, pricing, entity
```

Interactive pieces (`TxDemo`, `HowItWorks`, `EmailCapture`) are client components; everything else is a server component.

## Pricing (founder-locked)

Pricing is **pay-as-you-go per deal, descending by calendar-year volume** (annual reset), charged per unlock, only on deals that **close**:

| Volume (per calendar year) | Rate |
|---|---|
| First 3 deals | $14.99 / deal |
| Deals 4–10 | $13.00 / deal |
| Deals 11–25 | $12.00 / deal |
| 26 deals & up | $11.00 / deal |

This matches the shipped product. There are **no prepaid credit bundles** — do not reintroduce them. The tiers are defined once in `src/lib/site.ts`.

## Download links

The "Download" CTAs point at the **public release feed** (`Keepr-Compliance/keepr-releases`). Primary CTAs use the always-current `/releases/latest` page; the download section also offers platform-specific direct links (Mac Apple Silicon `.dmg`, Mac Intel `.dmg`, Windows `.exe`) for the latest release (currently **v2.22.0**). All links live in `src/lib/site.ts` — bump `LATEST_VERSION` there when a new release ships, or wire the CTAs to a stable `app.keeprcompliance.com/download` redirect (see the `TODO(founder)` in that file).

## Outstanding `TODO(founder)` items (must resolve before public launch)

- **Testimonials** — the Trust section shows clearly-labelled empty placeholders. Real, permissioned testimonials from named agents must replace them (fabricated endorsements are an FTC violation).
- **Privacy Policy** (`/privacy`) and **Terms of Service** (`/terms`) — both are stubs awaiting legally reviewed copy.
- **Email capture** — the "email me the download link" forms are UI-only; the submit handler needs a real backend.
- **Sign-in link** and the stable download redirect — see TODOs in `Nav.tsx` and `site.ts`.
- **Legal entity** — confirmed as **Blue Spaces LLC** (per the approved prototype); re-confirm before launch.

## Deployment

Deployed via **Vercel** (framework auto-detected as Next.js). The founder owns the Vercel project + domain connection — this repo does not contain any Vercel config or secrets, and CI/agents do not deploy it.
