export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
}

export const socialLinks: SocialLink[] = [
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com',
    icon: 'github',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: 'linkedin',
  },
  {
    id: 'twitter',
    name: 'Twitter',
    url: 'https://twitter.com',
    icon: 'twitter',
  },
  {
    id: 'dev',
    name: 'Dev.to',
    url: 'https://dev.to',
    icon: 'dev',
  },
  {
    id: 'dribbble',
    name: 'Dribbble',
    url: 'https://dribbble.com',
    icon: 'dribbble',
  },
  {
    id: 'book',
    name: 'Blog',
    url: 'https://blog.example.com',
    icon: 'book',
  },
  {
    id: 'mail',
    name: 'Email',
    url: 'mailto:contact@example.com',
    icon: 'mail',
  },
];
