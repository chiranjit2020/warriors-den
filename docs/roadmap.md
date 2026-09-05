# Warriors Den MMA — MVP Roadmap

**Status:** Draft for review
**Depends on:** all other `/docs` files

Full long-term roadmap is defined in `master-prompt.md` §46 (Phases 0–21) and §64 (post-MVP platform phases). This document sequences the **public-website portion only** (Phases 0–12) into concrete, independently-testable, committable units, per §7/§38 of the master prompt. Nothing in Phase 13+ (PWA/auth/dashboard/chat) is scheduled here.

| Phase | Deliverable | Depends on | Exit criteria |
|---|---|---|---|
| 0 | Research + Discovery | — | `research.md` reviewed and open questions answered enough to proceed |
| 1 | Design System | Phase 0 | `design-system.md` approved; tokens ready to implement as CSS |
| 2 | Information Architecture | Phase 0 | `information-architecture.md` approved; location count question resolved enough to fix the route list |
| 3 | Project Setup + Base Components | Phase 1, 2 | Astro project scaffolded; Header, Footer, Button, Container, SectionHeading, Card primitives, Modal, Toast, Loader built and visually verified against tokens; no pages yet |
| 4 | Homepage | Phase 3 | Sections per master-prompt §12 built with real/placeholder-marked data; desktop/tablet/mobile tested; primary CTA works |
| 5 | Programs | Phase 4 | `/programs/` overview + one page per confirmed program, each with unique outcome-focused content |
| 6 | Locations | Phase 4 | `/locations/` overview + pages for the 3 confirmed locations (Bablatala, Kestopur, Madhyamgram — research.md §2.1) |
| 7 | About / Coaches | Phase 4 | Story, philosophy, coach bios (real, confirmed credentials only) |
| 8 | Gallery + Reviews | Phase 4 | Captioned gallery; real reviews only (or section omitted until reviews are supplied) |
| 9 | Contact + Free Trial | Phase 4 | Working `TrialForm`/`ContactForm` with all states (loading/success/error) per design-system §8 |
| 10 | SEO + Structured Data | Phases 4–9 | Every shipped page has title/description/canonical/OG/JSON-LD; sitemap + robots.txt present |
| 11 | Performance + Accessibility | Phases 4–9 | Core Web Vitals checked (LCP/CLS/INP), keyboard/screen-reader pass, `prefers-reduced-motion` respected |
| 12 | Testing + GitHub Deployment | Phase 11 | Site live on GitHub Pages (or equivalent), smoke-tested across breakpoints, no console errors, no broken links |

**Phases 13–21** (PWA architecture, authentication, student dashboard, chat infrastructure — §46) and the owner/admin platform phases (§64) are intentionally not sequenced here. They begin only once the public website is live and validated, per master-prompt.md's closing instruction: *"Simple now. Scalable later."*

## Commit discipline

One meaningful commit per unit of work within a phase (master prompt §39) — e.g. `design: establish design tokens`, `feat: add base UI components`, `feat: build site header`, not one giant commit per phase.

## What happens after this document

Per master-prompt.md §45/§48, work **stops here** for review. The location-count question is now resolved (research.md §2.1/§9), but the remaining items in `research.md` §9 (per-branch hours/WhatsApp/instructor, coach bios, GBP data for all 3 branches, pricing, schedule, real testimonials, brand assets, domain, Sanshinkan-relationship wording) should be answered as far as possible before Phase 3 scaffolding begins.
