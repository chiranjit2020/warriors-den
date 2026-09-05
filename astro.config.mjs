import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Site URL is a placeholder until the final domain is confirmed
// (see docs/research.md §9, item "Domain"). Update this the moment a
// domain is chosen — canonical URLs, OG tags, and the sitemap all key
// off it.
export default defineConfig({
  site: 'https://denmma.netlify.app',
  integrations: [
    sitemap({
      // Exclude the internal QA style-guide page (already noindex'd) —
      // it's not part of the public IA (docs/information-architecture.md).
      filter: (page) => !page.includes('/dev/'),
    }),
  ],
});
