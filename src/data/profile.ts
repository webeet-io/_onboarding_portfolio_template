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
  role: 'Software Engineering Intern',
  summary:
    'Software Engineering Intern experienced in building AI-first, map-centric products in a fast-paced, agile environment. Hands-on with TDD, trunk-based development, CI, and end-to-end type safety across React (SSR), TypeScript, Fastify/Node, FastAPI/Python, and PostgreSQL. Implemented RAG-powered conversational AI, BFF endpoints for performance, and data visualizations with MapLibre.',
  location: 'City, Country',
  email: 'you@example.com',
  lookingFor: 'Summer 2025 Internship',
  avatar: '/images/avatar.svg',
  resumeUrl: '/resume',
  skills: [
    'TypeScript',
    'React (SSR)',
    'Next.js',
    'Node.js',
    'Fastify',
    'Python',
    'FastAPI',
    'Zod',
    'Zustand',
    'PostgreSQL',
    'SQLAlchemy',
    'MapLibre',
    'RAG / LLM',
    'Backend-for-Frontend (BFF)',
    'TDD',
    'Trunk-based development',
    'CI/CD',
    'Playwright',
    'Jest',
    'Pytest',
    'Selenium',
    'Great Expectations',
    'Git',
    'Tailwind CSS',
    'JavaScript',
    'SQL',
  ],
  links: [
    { label: 'GitHub', href: 'https://github.com/your-handle' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/your-handle' },
    { label: 'Email', href: 'mailto:you@example.com' },
  ],
};


