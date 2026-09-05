// Program data — per docs/architecture.md §3 / master-prompt.md §30.
// Only the 6 disciplines confirmed live on denmma.netlify.app are listed.
// Karate, Kids Martial Arts, and Women's Self-Defence appear in the
// master prompt's suggested IA but are NOT confirmed as currently-offered
// programs — they are intentionally omitted here rather than invented.
// See docs/research.md §9.

export interface Program {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  benefits: string[];
  audience: string;
  locationIds: string[]; // which /data/locations.ts branches offer it — TODO confirm per-branch
}

export const programs: Program[] = [
  {
    id: 'mma',
    name: 'MMA',
    slug: 'mma',
    shortDescription:
      'Mixed Martial Arts training combining striking, clinch work, and ground grappling into one complete skill set.',
    benefits: ['Full-body conditioning', 'Well-rounded stand-up and ground skills', 'Mental toughness'],
    audience: 'All skill levels', // exact age ranges unconfirmed — see docs/research.md §9
    locationIds: [], // TODO: per-branch program availability not yet confirmed — see docs/research.md §9
  },
  {
    id: 'boxing',
    name: 'Boxing',
    slug: 'boxing',
    shortDescription:
      'Classic boxing fundamentals — footwork, hand technique, and defence — built through structured pad and bag work.',
    benefits: ['Cardiovascular fitness', 'Hand-eye coordination', 'Discipline & focus'],
    audience: 'All skill levels', // exact age ranges unconfirmed — see docs/research.md §9
    locationIds: [], // TODO: per-branch program availability not yet confirmed — see docs/research.md §9
  },
  {
    id: 'kickboxing',
    name: 'Kickboxing',
    slug: 'kickboxing',
    shortDescription:
      'High-energy striking that combines boxing with kicks, knees, and combinations for a demanding full-body workout.',
    benefits: ['High-intensity fitness', 'Coordination & timing', 'Practical striking skills'],
    audience: 'All skill levels', // exact age ranges unconfirmed — see docs/research.md §9
    locationIds: [], // TODO: per-branch program availability not yet confirmed — see docs/research.md §9
  },
  {
    id: 'muay-thai',
    name: 'Muay Thai',
    slug: 'muay-thai',
    shortDescription:
      'The "art of eight limbs" — strikes with fists, elbows, knees, and shins, alongside clinch control.',
    benefits: ['Full-body strength', 'Clinch & close-range control', 'Traditional technique'],
    audience: 'All skill levels', // exact age ranges unconfirmed — see docs/research.md §9
    locationIds: [], // TODO: per-branch program availability not yet confirmed — see docs/research.md §9
  },
  {
    id: 'jiu-jitsu',
    name: 'Jiu-Jitsu',
    slug: 'jiu-jitsu',
    shortDescription:
      'Ground-based grappling and submission technique, teaching control and leverage over strength alone.',
    benefits: ['Practical self-defence', 'Problem-solving under pressure', 'Core & grip strength'],
    audience: 'All skill levels', // exact age ranges unconfirmed — see docs/research.md §9
    locationIds: [], // TODO: per-branch program availability not yet confirmed — see docs/research.md §9
  },
  {
    id: 'judo',
    name: 'Judo',
    slug: 'judo',
    shortDescription:
      'Throws, takedowns, and controlled falls built on balance, timing, and using an opponent\'s momentum.',
    benefits: ['Balance & body awareness', 'Discipline & respect', 'Safe falling technique'],
    audience: 'All skill levels', // exact age ranges unconfirmed — see docs/research.md §9
    locationIds: [], // TODO: per-branch program availability not yet confirmed — see docs/research.md §9
  },
];
