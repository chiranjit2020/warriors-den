// Location data — per docs/architecture.md §3 / master-prompt.md §16.
// Only the 3 owner-confirmed active branches (docs/research.md §2.1,
// confirmed 2026-09-05). Every field below is sourced from either the
// live site or an owner-supplied Google Business Profile screenshot —
// nothing here is invented. Fields marked TODO are real gaps, not
// guesses, and must stay visibly absent (not defaulted) until supplied.

export interface Location {
  id: string;
  name: string;
  slug: string;
  address: string;
  areaNote: string; // one factual sentence restating where the branch sits — not invented local color
  phone?: string;
  whatsapp?: string; // TODO — not yet confirmed for any branch
  hours?: string; // TODO — full weekly hours not yet confirmed for any branch
  instructor?: string; // TODO — not yet confirmed for any branch
  googleRating?: number;
  googleReviewCount?: number;
  mapsQuery: string; // used to build a Google Maps search link — built from the real address, not a fabricated coordinate
}

export const locations: Location[] = [
  {
    id: 'bablatala',
    name: 'Bablatala (Gopalpur)',
    slug: 'bablatala',
    address: '1st Floor, Krishti Abasan, Natunpara, Bablatala, Gopalpur I, Kolkata, West Bengal 700136',
    areaNote: 'Our Gopalpur branch, on the 1st floor of Krishti Abasan in Bablatala.',
    phone: '+91 88510 84372',
    mapsQuery: '1st Floor Krishti Abasan, Natunpara, Bablatala, Gopalpur I, Kolkata, West Bengal 700136',
  },
  {
    id: 'kestopur',
    name: 'Kestopur',
    slug: 'kestopur',
    address:
      'Prafulla Kanan Balak Brinda Club, AC-62, Prafulla Kanan Rd, Rabindrapally, opposite Ashirbad Inn Hotel, Kolkata, West Bengal 700102',
    areaNote: 'Our Kestopur branch, at Prafulla Kanan Balak Brinda Club in Rabindrapally, opposite Ashirbad Inn Hotel.',
    phone: '+91 86973 59951',
    mapsQuery:
      'Prafulla Kanan Balak Brinda Club, AC-62, Prafulla Kanan Rd, Rabindrapally, Kestopur, Kolkata 700102',
  },
  {
    id: 'madhyamgram',
    name: 'Madhyamgram',
    slug: 'madhyamgram',
    address:
      'MFJ8+HQ6 Susheila Apartment, near Kazi Nazrul Islam Sarani, Doltala, Jessore Road, Dohoria Ln, Dohoria, Srijoni Housing, Madhyamgram, Kolkata, West Bengal 700132',
    areaNote: 'Our Madhyamgram branch, off Jessore Road in Dohoria.',
    phone: '087773 44874',
    googleRating: 5.0,
    googleReviewCount: 34,
    mapsQuery:
      'Warriors Den MMA Fit Zone Madhyamgram, Susheila Apartment, Dohoria, Madhyamgram, Kolkata 700132',
  },
];
