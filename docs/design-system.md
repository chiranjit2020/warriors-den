# Warriors Den MMA — Design System

**Phase:** 1 — Design System
**Status:** Draft for review
**Depends on:** [research.md](./research.md)

This spec turns the brand references in `master-prompt.md` (§9–§10) into concrete, accessible tokens. Nothing here is final CSS — it's the contract that Phase 3 (base components) implements against.

---

## 1. Color Tokens

Brand references from the master prompt: primary `#FF7810` (Warriors orange), secondary `#1C2045` (deep navy).

**Accessibility finding:** `#FF7810` against white text is only **2.64:1** contrast — fails WCAG AA for text. `#1C2045` (navy) text on `#FF7810` is **5.92:1** — passes AA comfortably. So the token rule below is deliberate: **primary-colored surfaces use dark navy text, not white**, unless the orange is used purely as a background behind an icon/image, never behind body or button text at small sizes.

```css
:root {
  /* Brand */
  --color-primary:        #FF7810; /* Warriors Orange */
  --color-primary-hover:  #E56A00; /* darkened ~10% for hover/active */
  --color-primary-text:   #1C2045; /* required text color ON primary — 5.92:1 */
  --color-secondary:      #1C2045; /* Deep Navy */
  --color-secondary-hover:#141733;

  /* Surfaces */
  --color-background:      #FFFFFF;
  --color-background-dark: #14172F; /* dark sections, e.g. footer, dark hero */
  --color-surface:         #F7F7F9; /* cards/panels on light background */
  --color-surface-dark:    #22264F; /* cards/panels on dark background */

  /* Text */
  --color-text:            #16182B; /* body text on light backgrounds, ~15.5:1 on white */
  --color-text-muted:      #5B5F73; /* secondary text on light backgrounds, ~4.6:1 on white */
  --color-text-inverse:    #FFFFFF; /* text on dark/navy backgrounds */
  --color-text-inverse-muted: #B7B9CC;

  /* Border */
  --color-border:          #E4E4EA;
  --color-border-dark:     #33375C;

  /* Semantic */
  --color-success: #1F9254;
  --color-warning: #B45309;
  --color-error:   #D92D20;
}
```

Rule: color is never the only signal for state (form errors, success, etc. always pair with an icon and/or text — master prompt §23).

---

## 2. Typography

Mobile-first modern humanist sans for both headings and body — prioritizes readability over decorative display type, per master prompt. Recommend **Inter** (or **Manrope** for headings if a touch more character is wanted) loaded via a self-hosted/Google Fonts stack with a system-font fallback.

```css
--font-family-base: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

| Token | Size (mobile → desktop) | Weight | Line-height | Use |
|---|---|---|---|---|
| `--text-display` | 2.25rem → 3.5rem | 800 | 1.1 | Hero headline only |
| `--text-h1` | 1.875rem → 2.5rem | 700 | 1.15 | Page title |
| `--text-h2` | 1.5rem → 2rem | 700 | 1.2 | Section title |
| `--text-h3` | 1.25rem → 1.5rem | 600 | 1.25 | Card/subsection title |
| `--text-h4` | 1.125rem → 1.25rem | 600 | 1.3 | Minor heading |
| `--text-body` | 1rem | 400 | 1.6 | Paragraph text |
| `--text-small` | 0.875rem | 400 | 1.5 | Secondary/support text |
| `--text-caption` | 0.75rem | 500 | 1.4 | Labels, meta, timestamps |
| `--text-button` | 0.9375rem | 600 | 1 | Button labels |

Minimum body text on mobile: 16px (never smaller, to avoid iOS auto-zoom and to keep readability). Line length target: 60–75 characters for body copy blocks.

---

## 3. Spacing Scale

4px base unit, per master prompt §9:

```css
--space-1: 4px;   --space-2: 8px;   --space-3: 12px;  --space-4: 16px;
--space-6: 24px;  --space-8: 32px;  --space-12: 48px; --space-16: 64px;
--space-20: 80px; --space-24: 96px; --space-30: 120px;
```

Rule: all margin/padding/gap values reference a token. No arbitrary pixel values in component CSS.

---

## 4. Container System

```css
--container-max-width: 1280px;
--gutter-mobile: 16px;   /* < 600px */
--gutter-tablet: 24px;   /* 600–1023px */
--gutter-desktop: 32px;  /* ≥ 1024px */
```

---

## 5. Border Radius

```css
--radius-sm: 6px;    /* inputs, small chips */
--radius-md: 10px;   /* buttons, cards */
--radius-lg: 16px;   /* large cards, panels, modals */
--radius-pill: 999px;/* pill buttons, badges */
```

---

## 6. Shadows

Used sparingly — mainly for elevation on cards/modals, never decoratively.

```css
--shadow-subtle:  0 1px 2px rgba(20, 23, 47, 0.06);
--shadow-medium:  0 4px 12px rgba(20, 23, 47, 0.10);
--shadow-elevated:0 12px 32px rgba(20, 23, 47, 0.16);
```

---

## 7. Button System

Variants: **Primary**, **Secondary**, **Outline**, **Ghost**, **Text**, **Icon**.

| Variant | Background | Text | Border |
|---|---|---|---|
| Primary | `--color-primary` | `--color-primary-text` (navy) | none |
| Secondary | `--color-secondary` | `--color-text-inverse` (white) | none |
| Outline | transparent | `--color-secondary` | 2px `--color-secondary` |
| Ghost | transparent (surface tint on hover) | `--color-secondary` | none |
| Text | transparent | `--color-primary-hover` (underline on hover) | none |
| Icon | transparent / circular surface | inherits | none |

States required for every variant: `default`, `hover`, `focus-visible` (visible focus ring, min 2px, `--color-primary` or high-contrast outline — never removed), `active`, `disabled` (reduced opacity + `not-allowed` cursor), `loading` (inline spinner, label retained for screen readers via `aria-busy`).

Rule: **the primary CTA (Book a Free Trial) always uses the Primary button variant** and appears only once per view as the dominant action, per master prompt §5/§32.

Minimum tap target: 44×44px on touch devices.

---

## 8. Form System

Elements: Input, Select, Textarea, Checkbox, Radio, Label, Help text, Error state, Success state, Loading state.

- Every field has a visible `<label>` (no placeholder-only labels).
- Required fields marked with a visible indicator, not color alone.
- Error state: red border (`--color-error`) + inline error text + error icon, referenced via `aria-describedby`.
- Success state: green accent + confirmation text.
- Focus state: visible focus ring on every interactive form element, consistent with buttons.
- Submit buttons show a `loading` state while a request is in flight, and either a success confirmation or a recoverable error message — never a silent failure.

---

## 9. Card System

Reusable card primitives for: Program, Coach, Location, Testimonial, FAQ, Blog post, Stat.

Shared card contract: `--radius-lg`, `--shadow-subtle` at rest → `--shadow-medium` on hover (desktop only; no hover-dependent info on touch), `--space-6` internal padding, `--color-surface` background on light sections / `--color-surface-dark` on dark sections. Content-specific fields (e.g. ProgramCard needs name/description/benefits/audience/CTA per §15) are defined at component-build time in Phase 3, not here.

---

## 10. Icon System

Single consistent icon library, outline-style, matched stroke weight throughout (recommend **Lucide** — open-source, MIT-licensed, wide coverage, easy to self-host/tree-shake). No mixing of filled and outline styles, no mixing libraries.

---

## 11. Responsive System

Mobile-first breakpoints matching master prompt §9:

```css
/* small mobile:  <380px   (base styles, no media query) */
/* large mobile:  380–599px */
@media (min-width: 380px)  { }
/* tablet:        600–899px */
@media (min-width: 600px)  { }
/* laptop:        900–1199px */
@media (min-width: 900px)  { }
/* desktop:       1200–1599px */
@media (min-width: 1200px) { }
/* large desktop: ≥1600px */
@media (min-width: 1600px) { }
```

Layout rule: single-column mobile → progressive enhancement to multi-column at tablet/laptop. No horizontal scrolling at any breakpoint (master prompt §40).

---

## 12. Motion System

```css
--duration-fast: 120ms;
--duration-base: 200ms;
--duration-slow: 320ms;
--ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
```

Rules:
- Motion is used only to clarify state change (hover, open/close, load-in), never as decoration.
- No scroll-jacking, no auto-playing carousels stealing attention, no parallax abuse.
- All animation wrapped to respect `prefers-reduced-motion: reduce` — motion is disabled or reduced to opacity-only fades for users who request it.

---

## 13. Accessibility Rules (cross-cutting)

- Semantic HTML first; ARIA only to fill real gaps.
- Full keyboard operability — every interactive element reachable and operable via keyboard, with a visible focus indicator at all times.
- Color contrast: body text ≥4.5:1, large text/UI components ≥3:1 (see §1 for the primary-orange finding this drove).
- All images carry descriptive `alt` text (decorative images get `alt=""`).
- Mobile menu and modals are screen-reader and keyboard trap-safe (focus management on open/close).
- Never convey required/error/success state through color alone.

---

## 14. What Phase 3 builds against this

Base components to implement: Header, MobileMenu, Button, Container, SectionHeading, ProgramCard, LocationCard, CoachCard, TestimonialCard, ReviewCard, FAQItem, ContactForm, TrialForm, Gallery, Footer, Badge, Stats, Modal, Toast, Loader — per master prompt §31. No section-specific one-off styles; everything composes from the tokens above.
