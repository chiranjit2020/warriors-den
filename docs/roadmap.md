# Warriors Den MMA — MVP Roadmap

**Status:** Phases 0–12 complete (2026-09-05)
**Depends on:** all other `/docs` files

Full long-term roadmap is defined in `master-prompt.md` §46 (Phases 0–21) and §64 (post-MVP platform phases). This document sequences the **public-website portion only** (Phases 0–12) into concrete, independently-testable, committable units, per §7/§38 of the master prompt. Nothing in Phase 13+ (PWA/auth/dashboard/chat) is scheduled here.

| Phase | Deliverable | Depends on | Exit criteria | Status |
|---|---|---|---|---|
| 0 | Research + Discovery | — | `research.md` reviewed and open questions answered enough to proceed | ✅ Done |
| 1 | Design System | Phase 0 | `design-system.md` approved; tokens ready to implement as CSS | ✅ Done |
| 2 | Information Architecture | Phase 0 | `information-architecture.md` approved; location count question resolved enough to fix the route list | ✅ Done |
| 3 | Project Setup + Base Components | Phase 1, 2 | Astro project scaffolded; Header, Footer, Button, Container, SectionHeading, Card primitives, Modal, Toast, Loader built and visually verified against tokens; no pages yet | ✅ Done |
| 4 | Homepage | Phase 3 | Sections per master-prompt §12 built with real/placeholder-marked data; desktop/tablet/mobile tested; primary CTA works | ✅ Done |
| 5 | Programs | Phase 4 | `/programs/` overview + one page per confirmed program, each with unique outcome-focused content | ✅ Done |
| 6 | Locations | Phase 4 | `/locations/` overview + pages for the 3 confirmed locations (Bablatala, Kestopur, Madhyamgram — research.md §2.1) | ✅ Done |
| 7 | About / Coaches | Phase 4 | Story, philosophy, coach bios (real, confirmed credentials only) | ✅ Done |
| 8 | Gallery + Reviews | Phase 4 | Captioned gallery; real reviews only (or section omitted until reviews are supplied) | ✅ Done — honest placeholders, no fabricated content |
| 9 | Contact + Free Trial | Phase 4 | Working `TrialForm`/`ContactForm` with all states (loading/success/error) per design-system §8 | ✅ Done — submission stays stubbed (architecture.md §7.1, owner-confirmed) |
| 10 | SEO + Structured Data | Phases 4–9 | Every shipped page has title/description/canonical/OG/JSON-LD; sitemap + robots.txt present | ✅ Done |
| 11 | Performance + Accessibility | Phases 4–9 | Core Web Vitals checked (LCP/CLS/INP), keyboard/screen-reader pass, `prefers-reduced-motion` respected | ✅ Done — axe-core: 0 violations on 19/19 pages after fixing 2 real contrast bugs; LCP 76-504ms even on throttled 3G |
| 12 | Testing + GitHub Deployment | Phase 11 | Site live on GitHub Pages (or equivalent), smoke-tested across breakpoints, no console errors, no broken links | ⚠️ Workflow shipped; needs the repo's Pages source flipped to "GitHub Actions" (manual, one click) — see architecture.md §7 |

**Phases 13–21** (PWA architecture, authentication, student dashboard, chat infrastructure — §46) and the owner/admin platform phases (§64) are intentionally not sequenced here. They begin only once the public website is live and validated, per master-prompt.md's closing instruction: *"Simple now. Scalable later."*

## Commit discipline

One meaningful commit per unit of work within a phase (master prompt §39) — e.g. `design: establish design tokens`, `feat: add base UI components`, `feat: build site header`, not one giant commit per phase.

## What happens after this document

The public-website portion of the roadmap (Phases 0–12) is complete. Two things need a human, not more code:
1. Flip the repo's Pages source to "GitHub Actions" (architecture.md §7) — one click, no CLI access from here.
2. The still-open items in `research.md` §9 (per-branch hours/WhatsApp/instructor, coach bios, GBP data for Bablatala/Kestopur, pricing, schedule, real testimonials/photography, domain, Sanshinkan-relationship wording, and the `TrialForm` submission decision logged in architecture.md §7.1) — none block the site being live, but real content should replace the honestly-marked placeholders before this replaces the current live site.

Phase 13+ (PWA, auth, member dashboard, chat, owner panel — master-prompt.md §46/§64) begins only once this public site has been reviewed and validated against real traffic, per the master prompt's closing instruction: *"Simple now. Scalable later."*
