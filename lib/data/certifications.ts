export interface Certification {
  id: string;
  title: string;
  organization: string;
  date: string;
  type: 'certification' | 'course';
}

export const certifications: Certification[] = [
  {
    id: 'udemy-critical',
    title: 'Critical Thinking Strategies For Better Decisions',
    organization: 'Udemy',
    date: 'Sep 2025',
    type: 'course',
  },
  {
    id: 'microsoft-career',
    title: 'Career Essentials in Software Development',
    organization: 'Microsoft',
    date: 'Aug 2024',
    type: 'course',
  },
  {
    id: 'hackerrank-sql',
    title: 'SQL (Advanced)',
    organization: 'HackerRank',
    date: 'Nov 2024',
    type: 'certification',
  },
  {
    id: 'hackerrank-js',
    title: 'JavaScript (Intermediate)',
    organization: 'HackerRank',
    date: 'Sep 2024',
    type: 'certification',
  },
];
