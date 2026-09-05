// Base-path helpers. This deployment is served at a subpath
// (https://www.chiranjitkarmakar.com/warriors-den/) because the GitHub
// account's root Pages site already has a custom domain — every other
// project repo, including this one, nests under /<repo>/ on that same
// domain (standard GitHub Pages behavior, not a misconfiguration). See
// docs/architecture.md §7.
//
// `withBase` — use for every REAL navigation href/asset path so links
// actually resolve on this deployment. `stripBase` — used only where a
// path is about to be combined with `Astro.site` for canonical/OG/JSON-LD
// URLs (BaseLayout, Breadcrumbs): those represent the eventual real
// production domain, not this staging subpath, so the subpath must NOT
// leak into them.
//
// If/when a dedicated root-serving domain is attached for the real
// Warriors Den site, remove `base` from astro.config.mjs — at that point
// BASE_URL becomes '/' and both functions become no-ops, so nothing else
// needs to change.

const BASE = import.meta.env.BASE_URL; // e.g. '/warriors-den/' or '/'
const BASE_TRIMMED = BASE.replace(/\/$/, '');

export function withBase(path: string): string {
  if (/^https?:\/\//.test(path) || path.startsWith('mailto:') || path.startsWith('tel:') || path.startsWith('#')) {
    return path;
  }
  return `${BASE_TRIMMED}${path}`;
}

export function stripBase(pathname: string): string {
  if (BASE_TRIMMED && pathname.startsWith(BASE_TRIMMED)) {
    return pathname.slice(BASE_TRIMMED.length) || '/';
  }
  return pathname;
}
