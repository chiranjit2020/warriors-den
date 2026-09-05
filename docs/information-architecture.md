# Warriors Den MMA — Information Architecture

**Phase:** 2 — Information Architecture
**Status:** Draft for review
**Depends on:** [research.md](./research.md)

This IA follows the master prompt's recommended structure (§11), adjusted for what's actually buildable at MVP given the open questions in the research report — most importantly, that the confirmed location count is currently unknown (1 confirmed, up to 4 candidates pending business confirmation).

## Site map (MVP target — not built yet)

```
/                          Home
/about/                    Our Story
/about/philosophy/         Our Philosophy
/about/coaches/            Coaches
/programs/                 Programs overview
/programs/mma/
/programs/boxing/
/programs/kickboxing/
/programs/muay-thai/
/programs/jiu-jitsu/
/programs/judo/
/programs/kids-martial-arts/
/programs/womens-self-defence/
/locations/                Locations overview
/locations/bablatala/      Gopalpur / Bablatala branch
/locations/kestopur/       Kestopur branch
/locations/madhyamgram/    Madhyamgram branch
/gallery/
/reviews/
/blog/                     (content engine, later in MVP sequence)
/contact/
/free-trial/               Primary conversion page
```

Notes:
- Grappling was listed as a program name on the current site; master prompt's recommended list uses Jiu-Jitsu/Judo instead, which already cover that skill area. Recommend folding "Grappling" into Jiu-Jitsu content rather than adding a ninth near-duplicate program page — flag for confirmation rather than deciding unilaterally.
- Per master prompt §16 and §19: location pages are built only for verified locations. Branch count is now resolved (research.md §2.1, owner-confirmed 2026-09-05): **3 active locations — Bablatala, Kestopur, Madhyamgram.** Per-branch detail (hours, WhatsApp, instructor, exact public brand name for Kestopur/Madhyamgram) is still pending and tracked in research.md §9.
- `/blog/` is sequenced later in the roadmap (Phase 10+) — included here for URL-structure planning only, not built at MVP launch.

## Primary navigation (header)

Home · About · Programs · Locations · Gallery · Reviews · Contact — with **Book a Free Trial** as a persistent, visually distinct CTA button (not a regular nav item).

## Footer navigation

- Programs (full list)
- Locations (full list)
- About / Coaches
- Gallery / Reviews / Blog
- Contact / Free Trial
- Legal (Privacy Policy, Terms — to be drafted when a form collects personal data)
- Social links (pending confirmed handles — see research.md #8)

## Mobile navigation

Hamburger menu with the same primary items; sticky bottom/top bar carries the **Book Free Trial** CTA plus a secondary **Call** or **WhatsApp** action per master prompt §33.

## URL & content rules

- Descriptive, lowercase, hyphenated slugs (`/programs/muay-thai/`, not `/programs?id=3`).
- Each location page gets genuinely unique content (schedule, instructor, photos, reviews) per §19 — no templated pages that differ only by city name.
- Programs, locations, coaches, and testimonials are data-driven from `/data`, not hardcoded per page (ties to §30 in master-prompt.md and the technical architecture doc).

## Cross-linking rules

- Every program page links to the location(s) where it's offered and to `/free-trial/`.
- Every location page links to the programs offered there and to `/free-trial/` pre-filled with that location where feasible.
- Homepage "Choose Your Goal" section (master prompt §14) links into relevant program pages, not generic anchors.
