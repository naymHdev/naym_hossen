export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  logo?: string;
}

export const workExperience: Experience[] = [
  {
    id: 'intelluxio',
    company: 'INTELLUXIO',
    position: 'Software Developer',
    startDate: 'Jan 2025',
    endDate: 'Present',
    logo: 'IX',
  },
  {
    id: 'rysen',
    company: 'Rysen Global LLC',
    position: 'Full Stack Developer II',
    startDate: 'Sep 2024',
    endDate: 'Dec 2024',
    logo: 'R',
  },
  {
    id: 'avion',
    company: 'Avion Realty Properties LLC',
    position: 'Full Stack Developer',
    startDate: 'May 2023',
    endDate: 'Sep 2024',
    logo: 'A',
  },
  {
    id: 'madicap',
    company: 'MediCap Software, Inc',
    position: 'Technical Documentation Writer',
    startDate: 'Oct 2022',
    endDate: 'Mar 2023',
    logo: 'MS',
  },
];
