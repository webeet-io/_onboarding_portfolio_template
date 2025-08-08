export type LinkItem = {
  label: string;
  href: string;
};

export type Profile = {
  name: string;
  role: string;
  summary: string;
  location: string;
  email: string;
  lookingFor: string;
  avatar: string;
  resumeUrl: string;
  skills: string[];
  links: LinkItem[];
};

export const profile: Profile = {
  name: 'Your Name',
  role: 'Engineering Intern (SWE/QA)',
  summary:
    'I build and test web experiences with TypeScript, React, and Node.js. Passionate about quality, shipping, learning fast, and collaborating with teams.',
  location: 'City, Country',
  email: 'you@example.com',
  lookingFor: 'Summer 2025 Internship',
  avatar: '/images/avatar.svg',
  resumeUrl: '#',
  skills: [
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'PostgreSQL',
    'Tailwind CSS',
    'Testing',
    'QA',
    'Playwright',
    'Jest',
    'Pytest',
    'Selenium',
    'Great Expectations',
    'Python',
    'Remix',
    'JavaScript',
    'Zod',
    'Git',
    'Fastify',
    'SQLite',
    'FastAPI',
    'React Router v7',
    'Zustand',
    'SQL',
  ],
  links: [
    { label: 'GitHub', href: 'https://github.com/your-handle' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/your-handle' },
    { label: 'Email', href: 'mailto:you@example.com' },
  ],
};


