export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image?: string;
  technologies: string[];
  link?: string;
  type: string;
}

export const projects: Project[] = [
  {
    id: 'zendawhisper',
    title: 'ZendaWhisper - AI-Powered WhatsApp Assistant',
    description: 'AI-driven WhatsApp assistant enabling automated customer interactions',
    fullDescription:
      'Involved in the development of ZendaWhisper, an AI-driven assistant for WhatsApp Business that enables automated and intelligent customer interactions. Utilized modern web technologies to build a scalable platform that helps businesses automate customer support.',
    type: 'Featured Project',
    technologies: ['AI Agents', 'NLP', 'TypeScript', 'Next.js', 'PostgreSQL'],
  },
  {
    id: 'typingmentor',
    title: 'TypingMentor - AI-Powered Typing Practice Platform',
    description: 'Personalized typing lessons with real-time performance tracking',
    fullDescription:
      'Holding full technical ownership of TypingMentor, an AI-powered typing practice platform with 250k+ users. The platform delivers personalized typing lessons based on real-time user performance analysis.',
    type: 'Featured Project',
    technologies: ['AI Agents', 'Next.js', 'TypeScript', 'Firebase', 'Public'],
  },
];
