# Warriors Den MMA — Design System

**Status:** Active — visual system revision (2026-09-06)
**Implements:** `Warriors Den — Design System Master Prompt.md`
**Supersedes:** the original orange/navy single-theme system (kept in git history)

This is the contract the components implement against. The website
**structure, content, IA, and routes are unchanged** — this document only
governs the visual system, interaction language, typography, colour,
components, imagery treatment, responsive behaviour, and motion.

Core principle: **"Brutal in typography. Disciplined in detail."**
Large type provides the aggression; the grid provides discipline; red
provides energy; dark space provides confidence; motion provides life.

---

## 1. Themes

Two themes, **one identity**. Dark is the canonical brand expression and
the default. Light is the same system in a bright environment — same
typography, spacing, geometry, interaction language, red accent, hierarchy.

- Theme is set by `data-theme="dark" | "light"` on `<html>`.
- A no-flash inline script in `BaseLayout.astro` applies the stored
  choice (`localStorage['wd-theme']`) before first paint; default `dark`.
- `ThemeToggle.astro` flips it and dispatches `wd:themechange` (the
  atmosphere canvas listens to re-tint).
- We do **not** follow `prefers-color-scheme` — dark is the brand default
  regardless of OS setting; the toggle is the only switch.

---

## 2. Colour

The palette must stay recognisable with all imagery removed. No colours
outside this set — no blue/green/purple/orange/yellow, no arbitrary tints.
Surface differentiation uses restrained steps derived from the near-black,
never unrelated hues.

### Fixed brand values (from the master prompt)

| Role | Value |
|---|---|
| Brand accent (red) | `#EF0D33` |
| Primary dark (near-black) | `#111517` |
| Neutral gray | `#888888` |
| White | `#FFFFFF` |

### Accent contrast rule

`#EF0D33` is **4.18:1 on `#111517` and 4.40:1 on `#FFFFFF`** — it clears
the 3:1 bar (large text ≥24px or ≥18.66px bold, borders, focus rings,
graphic accents, large fills) but **not** 4.5:1 for small text.

- Small accent-coloured text → `--color-accent-text`
  (`#FF4A63` on dark = 5.6:1, `#C40027` on light = 6.2:1).
- White on an accent fill is only used at Bebas display sizes (buttons),
  which are the large-text tier — so `#FFFFFF` on `#EF0D33` is compliant
  there. Never put small normal-weight white text on a red fill.

Red is never the sole signal of state — always paired with text/icon.
Never flood large areas with red.

### Semantic tokens (theme-aware — see `src/styles/tokens.css`)

```
--color-bg / --color-bg-sunken            page ground, sunken bands
--color-surface / --color-surface-raised  cards, raised controls
--color-border / --color-border-strong    hairline framing
--color-text / --color-text-strong        body / headings
--color-text-muted                        secondary text, metadata
--color-accent / --color-accent-hover     the red; hover state
--color-accent-text                       small accent-coloured text
--color-on-accent                         text/icon on a red fill
--color-success / --color-warning / --color-error
```

Legacy aliases (`--color-primary*`, `--color-secondary*`,
`--color-background*`, `--color-text-inverse*`, `--color-surface-dark`,
`--color-border-dark`) map onto the above so pages not yet through the
visual pass still render coherently.

---

## 3. Typography

**Display / titles — Bebas Neue** (self-hosted, weight 400 only).
Uppercase, condensed, high-impact. Used for the hero headline, section
titles, program names, large statements, big statistical figures.
Never for long body copy.

**Body / interface — Manrope** (self-hosted static weights 400–800).
Body copy, navigation, buttons' non-display text, forms, labels,
metadata, supporting headings (h3/h4). The clean technical counterbalance.
Never for major display headlines.

Fallback stacks are also condensed (Bebas → Oswald/Arial Narrow) and
humanist (Manrope → system UI) so a font swap doesn't reflow badly.
Static per-weight files, not variable fonts — WebKit mis-resolves the
Manrope variable weight axis (confirmed via Playwright).

### Scale

| Token | Font | Use |
|---|---|---|
| `--fs-display-xl` `clamp(2.75rem, 7.6vw, 6.5rem)` | Bebas | Hero headline |
| `--fs-display-l` `clamp(2.35rem, 6vw, 4.75rem)` | Bebas | Major section statement |
| `--fs-display-m` `clamp(2rem, 4.5vw, 3.5rem)` | Bebas | Section / component titles |
| `--fs-ui-heading` `1.0625rem` /700 | Manrope | Supporting headings |
| `--fs-body-lg` `1.125rem` | Manrope | Intro copy |
| `--fs-body` `1rem` | Manrope | Default reading size (min 16px on mobile) |
| `--fs-small` `0.875rem` | Manrope | Secondary text |
| `--fs-micro` `0.75rem`, `letter-spacing: 0.18em`, uppercase | Manrope | Technical labels |

Legacy `.text-display / .text-h1 / .text-h2` classes now render Bebas;
`.text-h3 / .text-h4` stay Manrope; `.text-caption` aliases `.text-micro`.

Body line length target 60–75 characters.

---

## 4. Layout & grid

- Wide content container (`--container-max-width: 1320px`), generous
  horizontal margins (gutters 20 / 32 / 48px).
- Strong column alignment; every component aligns to the same grid.
- Editorial / Swiss / brutalist influence: asymmetric moments, offset
  elements, oversized index numbers, horizontal rules, small technical
  labels, cropped imagery, intentional whitespace. Not every component
  symmetrical.
- Full-width bands contrasted with contained content.
- Breakpoints: base (<600), 600, 720, 900, 1024. Mobile is single-column
  and intentionally designed — never a compressed desktop layout. No
  horizontal scroll at any width (verified 360 / 768 / 1440).

---

## 5. Spacing

4px base, 8px rhythm, editorial upper range:
`4 8 12 16 20 24 32 48 64 80 96 120 160 192`. Every margin/padding/gap
references a token. Premium feeling comes from space + hierarchy, not
decoration. Sections breathe (`--space-24` block padding default).

---

## 6. Geometry, borders, elevation

- **Sharp**: `--radius-sm/md 2px`, `--radius-lg 3px`. No SaaS-rounded
  cards or pill buttons. Buttons feel solid and physical.
- Borders sparingly — thin neutral hairlines, horizontal rules,
  technical framing. No thick card borders, no boxed-in everything. The
  interface reads architectural, not component-heavy.
- Elevation is minimal; dark relies on borders, not shadow. Shadows are
  reserved for true overlays (menu, modal, toast).

---

## 7. Components

| Component | Notes |
|---|---|
| **Button** | Bebas uppercase labels. Primary = `#EF0D33` fill / white. Secondary & Outline = transparent + hairline, red on hover. Text = Manrope inline. Hover = 2px lift + optional arrow nudge; active resets. No bounce/scale. `focus-visible` ring always. 48px min height (44 for icon). |
| **Header** | Dark, sticky, hairline appears on scroll, light backdrop blur (not glassmorphism). White nav, red underline on hover. Theme toggle + dominant primary CTA. Structure unchanged. |
| **Card / ProgramCard / CoachCard / LocationCard** | Structured surfaces: `--color-surface`, hairline border, sharp, strong title, understated metadata, red interaction state, 4px hover lift. ProgramCard leads with `01 / NAME` index + Bebas name. |
| **SectionHeading** | Micro-label eyebrow + optional oversized red index + Bebas title. |
| **Stats** | Large Bebas numerals as anchors (`03`, `06`, `5.0★`), Manrope micro label, hairline-gridded tiles. |
| **Forms** | Dark input surface, hairline border, white text, muted placeholder, **red focus** (`--color-accent`). Micro uppercase labels. Required marked with a glyph, not colour. Loading/success/error states all real. Not overly rounded. Submit is dominant. |
| **Badge** | Square micro-label, tracked, transparent + hairline. |
| **FAQItem** | Native `<details>`; `+` → `×` on open, red icon. |
| **Gallery** | Honest designed placeholders (frame + index + "photo pending"), never fake stock. |
| **Icons** | Simple, geometric, line-based, single consistent style. Support information, never dominate. |

---

## 8. Motion

`--duration-fast 160ms` (micro), `--duration-base 260ms` (standard),
`--duration-slow 480ms` (large). `--ease-out` for entrances,
`--ease-standard` otherwise. Fast, physical, intentional — no bounce, no
long easings, no flashy transitions, no scroll-jacking.

**Scroll-reveal:** `[data-reveal]` elements fade/rise in once on view
(IntersectionObserver, `rootMargin: 200px`, one-shot). Not every element
animates — some just exist. Fully disabled under `prefers-reduced-motion`
and without JS (always visible); a timeout safety-net reveals everything
if the observer is ever starved.

---

## 9. Atmosphere (Three.js)

`Atmosphere.astro` — a fixed, `z-index:-1`, `pointer-events:none` depth
field behind the whole site. Three.js loaded from
`cdn.jsdelivr.net/npm/three@0.160.1` as an inline ES module.

Barely-there: ~150 fine points in a shallow slab, slow drift, smoothed
low-amplitude pointer parallax, one deliberate red mote. DPR capped at
1.5. Re-tints on `wd:themechange`.

**Hard constraints (all enforced):** never runs under
`prefers-reduced-motion`; skipped on ≤768px and <4-core devices; paused
when the tab is hidden or scrolled away (`visibilitychange` +
IntersectionObserver); silently absent if WebGL/CDN is unavailable. It
must never affect reading, navigation, CTAs, or mobile performance. The
goal is "something is moving," not "there's a WebGL demo here."

---

## 10. Texture

`.grain-overlay` — a fixed, non-interactive fractal-noise layer at
`opacity: 0.025–0.035`, `mix-blend-mode: overlay`. Almost subliminal.
Removed under reduced-motion. Never makes the page look dirty or
distressed.

---

## 11. Accessibility

Strong contrast (see §2), visible focus on every interactive element
(never removed), full keyboard operability, semantic controls, 44px+
touch targets, descriptive `alt`, reduced-motion support, and **no state
conveyed by colour alone**. The aggressive visual direction does not
relax any of this — the axe-core clean bar from the previous build
carries forward.

---

## 12. Do-not list

Don't: change site structure/IA, invent or remove sections, introduce
colours outside the palette, set Bebas on body copy or Manrope on display
headlines, flood red, round components like SaaS, overuse
gradients/glassmorphism/animation, let Three.js become visually dominant,
replace the hero's right-side media frame, or drift cyberpunk/gothic/
military/horror. Dark = training floor at night + professional fight camp
+ premium sports technology.
