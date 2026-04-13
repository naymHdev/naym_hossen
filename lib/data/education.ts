export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  logo?: string;
}

export const education: Education[] = [
  {
    id: 'lse',
    institution: 'The London School of Economics and Political Science (LSE)',
    degree: 'Bachelor of Science in Data Science and Business Analytics',
    field: 'Data Science',
    startDate: '2023',
    endDate: 'Present',
    logo: 'LSE',
  },
];
