// Program data — per docs/architecture.md §3 / master-prompt.md §30.
// Only the 6 disciplines confirmed live on denmma.netlify.app are listed.
// Karate, Kids Martial Arts, and Women's Self-Defence appear in the
// master prompt's suggested IA but are NOT confirmed as currently-offered
// programs — they are intentionally omitted here rather than invented.
// See docs/research.md §9.
//
// `overview` is general, factual, encyclopedic description of the
// discipline itself (what it is, where it comes from, what training
// looks like) — not a claim about Warriors Den's own coaching, results,
// or history. That distinction matters: the former is safe, defensible
// content; the latter would need verification we don't have yet.

export interface Program {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  overview: string[]; // 1-2 paragraphs for the program detail page
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
    overview: [
      'Mixed Martial Arts combines techniques from boxing, kickboxing, wrestling, and ground grappling into one integrated system. Rather than specializing in a single range of combat, MMA training builds the ability to move between striking, clinch, and ground positions.',
      'Classes typically progress through striking fundamentals, clinch control, and ground technique, building well-rounded skill that rewards consistency over raw athleticism.',
    ],
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
    overview: [
      'Boxing is one of the oldest organized combat sports, built almost entirely around footwork, hand technique, and defensive movement. What looks simple from the outside — punches, guard, footwork — is in practice a deeply technical skill that takes years to refine.',
      'Training centers on pad work, bag work, and partner drills that sharpen reflexes, build explosive power, and develop the composure to stay calm and think clearly under pressure.',
    ],
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
    overview: [
      "Kickboxing blends boxing's hand techniques with kicks and knee strikes, delivered at a tempo that makes it one of the most demanding full-body workouts in martial arts.",
      'Classes typically combine technical striking drills — combinations, pad work, footwork — with the conditioning needed to sustain that pace for a full round.',
    ],
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
    overview: [
      'Known as the "art of eight limbs," Muay Thai uses fists, elbows, knees, and shins alongside a distinctive clinch game. Originating in Thailand, it\'s prized both as a striking art and as one of the most physically demanding training systems in combat sports.',
      "Training builds power and technique through pad work and clinch drills, alongside the conditioning Muay Thai is known for.",
    ],
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
    overview: [
      'Jiu-Jitsu is a ground-based grappling art built on the principle that leverage and technique can overcome size and strength. Training moves through positional control, escapes, and submissions.',
      "Beyond the physical skill, Jiu-Jitsu is often described as physical chess — progress comes from problem-solving under pressure as much as from athleticism.",
    ],
    benefits: ['Practical self-defence', 'Problem-solving under pressure', 'Core & grip strength'],
    audience: 'All skill levels', // exact age ranges unconfirmed — see docs/research.md §9
    locationIds: [], // TODO: per-branch program availability not yet confirmed — see docs/research.md §9
  },
  {
    id: 'judo',
    name: 'Judo',
    slug: 'judo',
    shortDescription:
      "Throws, takedowns, and controlled falls built on balance, timing, and using an opponent's momentum.",
    overview: [
      "Judo is a throwing-based martial art built on balance, timing, and using an opponent's own momentum against them, rather than relying on brute strength.",
      'Training includes standing throws and takedowns alongside controlled falling technique (ukemi) and ground control, with a strong traditional emphasis on discipline and respect.',
    ],
    benefits: ['Balance & body awareness', 'Discipline & respect', 'Safe falling technique'],
    audience: 'All skill levels', // exact age ranges unconfirmed — see docs/research.md §9
    locationIds: [], // TODO: per-branch program availability not yet confirmed — see docs/research.md §9
  },
];
