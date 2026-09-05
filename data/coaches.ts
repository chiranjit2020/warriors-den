// Coach data — per docs/architecture.md §3 / master-prompt.md §31.
// Only the 2 founder names confirmed on denmma.netlify.app. No
// credentials, belts, or competition history are published anywhere
// we could verify — bio/photo are left undefined rather than invented,
// per master-prompt.md §30/§44. See docs/research.md §9.

export interface Coach {
  id: string;
  name: string;
  role: string;
  bio?: string; // TODO — not yet supplied
  photo?: string; // TODO — not yet supplied
}

export const coaches: Coach[] = [
  { id: 'ranjit-sharma', name: 'Ranjit Sharma', role: 'Co-Founder' },
  { id: 'adarsh-pal', name: 'Adarsh Pal', role: 'Co-Founder' },
];
