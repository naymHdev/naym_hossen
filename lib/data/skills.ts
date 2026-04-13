export interface Skill {
  id: string;
  name: string;
  category?: string;
}

export const skills: Skill[] = [
  // Languages & Frontend
  { id: 'javascript', name: 'JavaScript' },
  { id: 'react', name: 'React' },
  { id: 'typescript', name: 'TypeScript' },
  { id: 'nextjs', name: 'Next.js' },
  { id: 'tailwind', name: 'Tailwind CSS' },
  { id: 'html', name: 'HTML' },
  { id: 'css', name: 'CSS' },

  // Backend & Databases
  { id: 'nodejs', name: 'Node.js' },
  { id: 'graphql', name: 'GraphQL' },
  { id: 'rest', name: 'REST' },
  { id: 'postgresql', name: 'PostgreSQL' },
  { id: 'mongodb', name: 'MongoDB' },
  { id: 'prisma', name: 'Prisma' },
  { id: 'docker', name: 'Docker' },
  { id: 'git', name: 'Git' },

  // Tools & Services
  { id: 'websockets', name: 'WebSockets' },
  { id: 'redis', name: 'Redis' },
  { id: 'aws', name: 'AWS' },
  { id: 'python', name: 'Python' },
  { id: 'sql', name: 'SQL' },
  { id: 'vercel', name: 'Vercel' },
  { id: 'firebase', name: 'Firebase' },
  { id: 'express', name: 'Express.js' },
];
