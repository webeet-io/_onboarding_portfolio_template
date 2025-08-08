export type CvArticle = {
  title: string;
  org?: string;
  location?: string;
  period?: string;
  bullets: string[];
  tags?: string[];
  type: 'work' | 'education';
};

export const cvArticles: CvArticle[] = [
  {
    title: 'SWE Intern',
    org: 'Webeet',
    location: 'Remote',
    period: 'Jan 2024 - Present',
    bullets: [
      'Built AI-first features using RAG/LLM orchestration and MapLibre visualization',
      'Implemented SSR React views with Fastify BFF endpoints and PostgreSQL',
      'Owned CI/CD pipeline and trunk-based development with comprehensive testing',
      'Collaborated on microservice architecture with FastAPI and Zustand state management',
    ],
    tags: ['React (SSR)', 'Fastify', 'FastAPI', 'RAG', 'Zustand', 'Zod', 'MapLibre', 'PostgreSQL'],
    type: 'work',
  },
  {
    title: 'QA Intern',
    org: 'Webeet',
    location: 'Remote',
    period: 'Jan 2024 - Present',
    bullets: [
      'Implemented TDD approach with Jest unit tests and Playwright E2E testing',
      'Owned CI/CD pipeline stability through comprehensive test automation',
      'Delivered value through automated testing reducing manual QA effort by 60%',
      'Learned advanced testing patterns and quality assurance best practices',
    ],
    tags: ['Playwright', 'Jest', 'CI/CD', 'Selenium', 'Pytest', 'Great Expectations'],
    type: 'work',
  },
  {
    title: 'Software Engineering Full Stack',
    org: 'Masterschool',
    location: 'Remote',
    period: '2023 - 2024',
    bullets: [
      'Comprehensive full-stack development curriculum with Python and JavaScript',
      'Built end-to-end applications using modern frameworks and databases',
      'Learned software architecture patterns and best practices',
      'Completed capstone project demonstrating full-stack proficiency',
    ],
    tags: ['Python', 'JavaScript', 'Full Stack', 'Software Engineering'],
    type: 'education',
  },
  {
    title: 'QA Testing with Python & Selenium',
    org: 'Masterschool',
    location: 'Remote',
    period: '2023 - 2024',
    bullets: [
      'Specialized QA curriculum focusing on Python automation and Selenium testing',
      'Mastered test automation frameworks and continuous integration practices',
      'Developed comprehensive test suites for web applications',
      'Learned advanced testing methodologies and quality assurance strategies',
    ],
    tags: ['Python', 'Selenium', 'QA Testing', 'Automation'],
    type: 'education',
  },
];


