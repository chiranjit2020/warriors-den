// JSON-LD structured data builders. docs/architecture.md §4, master-prompt.md §18.
// Rule enforced throughout: every function here only marks up data that
// already exists elsewhere on the page (real /data records, or content
// passed in from the page itself) — never a fabricated field.
import type { Location } from '../../data/locations';
import type { Coach } from '../../data/coaches';

export const SITE_NAME = 'Warriors Den MMA';

export function organizationSchema(siteUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: siteUrl,
    description:
      'Martial arts and combat sports training academy in Kolkata, West Bengal, offering MMA, Boxing, Kickboxing, Muay Thai, Jiu-Jitsu, and Judo.',
  };
}

export function localBusinessSchema(location: Location, pageUrl: string) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'SportsActivityLocation',
    name: `${SITE_NAME} — ${location.name}`,
    url: pageUrl,
    address: {
      '@type': 'PostalAddress',
      streetAddress: location.streetAddress,
      addressLocality: location.addressLocality,
      addressRegion: location.addressRegion,
      postalCode: location.postalCode,
      addressCountry: 'IN',
    },
  };

  if (location.phone) schema.telephone = location.phone;

  if (location.googleRating && location.googleReviewCount) {
    schema.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: location.googleRating,
      reviewCount: location.googleReviewCount,
    };
  }

  return schema;
}

export function personSchema(coach: Coach, siteUrl: string) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: coach.name,
    jobTitle: coach.role,
    worksFor: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: siteUrl,
    },
  };
  if (coach.bio) schema.description = coach.bio;
  // Absolute URL against the eventual real domain (siteUrl), not this
  // deployment's base path — consistent with canonical/OG elsewhere.
  if (coach.photo) schema.image = new URL(coach.photo, siteUrl).toString();
  return schema;
}

// BreadcrumbList JSON-LD is emitted directly by Breadcrumbs.astro (built
// from the same `items` prop the visible nav renders), not from here.

export interface FaqEntry {
  question: string;
  answer: string;
}

export function faqPageSchema(faqs: FaqEntry[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
