# Warriors Den MMA — Technical Architecture

**Status:** Draft for review
**Depends on:** [information-architecture.md](./information-architecture.md), [design-system.md](./design-system.md)

## 1. MVP stack decision

**Framework: Astro**, static output, deployed via GitHub (Pages or a GitHub-connected static host).

Rationale against master prompt §24's requirements:

| Requirement | Why Astro fits |
|---|---|
| Excellent performance | Ships zero JS by default; only interactive pieces (mobile menu, forms, filters) get hydrated islands. Best-in-class Lighthouse/Core Web Vitals story for content sites. |
| SEO | File-based routing gives every program/location its own real URL out of the box (needed per IA — anchor-nav single-pagers can't do this); easy per-page `<title>`/meta/canonical/OG/structured data. |
| Component reuse | `.astro` components map directly to the design-system component list (Header, ProgramCard, LocationCard, etc.), plus can mix in React/Vue islands later if the PWA phase needs richer interactivity. |
| Maintainability | Plain HTML/CSS/JS mental model, no heavy client framework to learn for a mostly-static marketing site. |
| Easy GitHub deployment | Static `dist/` output deploys cleanly to GitHub Pages, or to Netlify/Vercel later with zero rewrite (§26 future hosting). |
| Room to grow into PWA later | Astro supports islands (React/Preact/Svelte) so Phase 13+ (PWA, auth, dashboard) can introduce a hydrated app section without a full rewrite. |

**Alternative considered:** plain hand-rolled HTML/CSS/JS (explicitly allowed by §24). Rejected only because per-page templating (7 programs × up to 4 locations, each needing unique SEO metadata) would mean hand-duplicating markup, directly against §30/§42's "don't hardcode repeated data" rule. Astro gets the same zero-JS-by-default outcome while templating that content from `/data`.

**Styling:** Plain CSS with the design-system tokens as CSS custom properties (`:root` variables from `design-system.md` §1–§12), organized as a small set of shared stylesheets rather than a utility framework — keeps the dependency footprint minimal per §24/§25 and matches the token system already specified.

## 2. Project structure (MVP)

```
/src
  /components       # Header, MobileMenu, Button, Container, SectionHeading,
                     # ProgramCard, LocationCard, CoachCard, TestimonialCard,
                     # ReviewCard, FAQItem, ContactForm, TrialForm, Gallery,
                     # Footer, Badge, Stats, Modal, Toast, Loader
  /layouts           # BaseLayout (meta/OG/canonical/schema slot), PageLayout
  /pages             # file-based routes matching information-architecture.md
    index.astro
    about/...
    programs/[slug].astro
    locations/[slug].astro
    gallery.astro
    reviews.astro
    contact.astro
    free-trial.astro
  /styles            # tokens.css (design-system variables), base.css, utilities
/data
  programs.ts        # program content — name, slug, description, benefits, audience
  locations.ts        # ONLY confirmed locations (per research.md open question #1)
  coaches.ts
  testimonials.ts
  faq.ts
/public
  /images
  robots.txt
  sitemap.xml (generated at build)
/docs                 # this documentation set
```

This directly implements master prompt §30/§31: business/content data lives in `/data`, is imported by page/component templates, and nothing business-specific is hardcoded inside a component.

## 3. Data model sketch

```ts
// /data/locations.ts
type Location = {
  id: string;
  name: string;
  slug: string;
  address: string;
  phone: string;
  whatsapp: string;
  hours: string;       // placeholder until confirmed
  programs: string[];  // program ids offered at this branch
  coordinates: { lat: number; lng: number };
  instructor: string;
  googleRating?: number; // omitted until GBP data is confirmed, never fabricated
};

// /data/programs.ts
type Program = {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  benefits: string[];
  audience: string;     // e.g. "Teens & Adults" — only what's confirmed
  locations: string[];  // location ids offering this program
};
```

Coaches, testimonials, and FAQ follow the same shape-per-record, array-of-objects pattern. Every optional/unverified field is typed as optional and rendered conditionally — the UI never fabricates a placeholder value that looks like real data (e.g. no fake "4.9★" if `googleRating` is undefined).

## 4. SEO implementation plan

- `BaseLayout.astro` accepts per-page `title`, `description`, `canonical`, and OG/Twitter fields — enforced as required props so no page ships without them.
- JSON-LD structured data injected per page type: `Organization` (site-wide), `LocalBusiness`/appropriate subtype per location page, `Person` per coach, `FAQPage` where real FAQ content exists, `BreadcrumbList` site-wide, `Article` once the blog ships. Only markup fields with real on-page data, per §18.
- `sitemap.xml` generated at build from the actual route list (Astro's sitemap integration).
- `robots.txt` in `/public`, allow-all for MVP.
- Semantic heading hierarchy enforced per page template (one `<h1>`, nested `<h2>`/`<h3>` for sections/cards).

## 5. Performance plan

- Static output = no server render cost; only islands hydrate.
- Images: Astro's built-in image optimization (responsive `srcset`, WebP/AVIF output, explicit width/height to avoid CLS), lazy-loaded below the fold, hero image preloaded/prioritized for LCP.
- No animation libraries; motion via CSS transitions per the design-system motion tokens.
- Fonts: subset + `font-display: swap`.
- Dependency budget: Astro + its image/sitemap integrations only; no UI kit, no analytics script until §37 explicitly greenlights one.

## 6. Accessibility plan

Implemented at the component level per `design-system.md` §13: semantic landmarks (`header`, `nav`, `main`, `footer`), keyboard-operable `MobileMenu`/`Modal` with focus trapping and `Escape`-to-close, form components with label/error wiring built in once in `ContactForm`/`TrialForm` rather than per-instance.

## 7. Deployment (MVP)

`.github/workflows/deploy.yml` builds and deploys `dist/` to GitHub Pages on every push to `master` (Phase 12). No environment secrets needed since there's no backend.

**One manual step required, not automatable from here:** GitHub Pages must be switched to "GitHub Actions" as its source once, in the repo's Settings → Pages → Build and deployment. This session has no `gh` CLI or token to flip that toggle itself.

**Root-domain assumption — read before attaching a domain.** Every internal link in this site (nav, footer, cross-links, canonical URLs) is root-relative (e.g. `/programs/mma/`), which only resolves correctly when served from a domain root: either a custom domain attached to GitHub Pages, or another root-serving host (Netlify, etc.) — both work with the code exactly as it is. If instead served at the raw project subpath `https://<user>.github.io/warriors-den/` with **no** custom domain, every internal link breaks. That needs an Astro `base` path plus a link-prefixing pass across the whole codebase, which this project deliberately does not have — add it only if that specific subpath scenario is the actual target, not speculatively.

## 7.1 Form submission — decided: staying stubbed (2026-09-05)

`TrialForm`/`ContactForm` submission remains a simulated stub (see the component-level comment in `TrialForm.astro`) rather than being wired to Netlify Forms, a third-party endpoint (e.g. Formspree), or a custom backend. Owner-confirmed decision, not a default — revisit before this site actually replaces the live one, since a "Book a Free Trial" form that doesn't deliver leads anywhere is a real gap for a conversion-focused site once it's live. All UI states (loading/success/error) are real and fully testable regardless.

## 8. Forward-compatibility boundaries (not built now)

To make §26–§29/§49–§67's future phases (PWA, Supabase auth, member dashboard, owner panel, chat) additive rather than a rewrite:

- `/data` access is already abstracted behind typed functions (e.g. `getLocations()`, `getPrograms()`) rather than components importing the arrays directly — swapping the implementation to fetch from Supabase later changes only that function body.
- Astro's island architecture means an authenticated member/owner area can be added as a separate hydrated app section (or a separate app entirely under a subdomain/path) without touching the static marketing pages.
- No component assumes a logged-out-only world (e.g. header leaves room for a future "Member Login" slot) without actually building auth now.

## 9. Explicitly out of scope for MVP

Per master prompt §24–§29 and §64: Supabase, Redis, WebSockets, authentication, any backend API, the owner/admin dashboard, and the chat system. None of these are introduced until their dedicated phase is reached and approved.
