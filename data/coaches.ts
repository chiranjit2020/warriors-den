// Coach data — per docs/architecture.md §3 / master-prompt.md §31.
// Only the 2 founder names confirmed on denmma.netlify.app. No
// credentials, belts, or competition history are published anywhere
// we could verify — bio is left undefined rather than invented,
// per master-prompt.md §30/§44. See docs/research.md §9.
//
// `photo` — root-relative path into /public; withBase() is applied at
// render (CoachCard) / an absolute URL is built in schema.ts.

export interface Coach {
  id: string;
  name: string;
  role: string;
  bio?: string; // TODO — not yet supplied
  photo?: string;
}

export const coaches: Coach[] = [
  {
    id: 'ranjit-sharma',
    name: 'Ranjit Sharma',
    role: 'Co-Founder',
    photo: '/ranjit-sharma-coach-warriors-den.jpg',
  },
  { id: 'adarsh-pal', name: 'Adarsh Pal', role: 'Co-Founder' }, // photo TODO
];
