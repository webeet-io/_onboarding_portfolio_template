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
    title: 'Software Engineering Intern',
    org: 'Webeet',
    location: 'Amsterdam, Remote',
    period: 'Start date – End date',
    bullets: [
      'Designed and shipped SSR React features via a BFF layer in Fastify to orchestrate data dependencies and improve first load performance.',
      'Implemented foundations for a RAG service to power conversational AI and contextual insights.',
      'Practiced TDD with Jest/Playwright (Node) and Pytest (Python); stabilized CI pipelines with smoke tests and fixtures.',
      'Collaborated on PostgreSQL schema design and SQLAlchemy migrations; partnered with DevSecOps and Data teams for safe deploys.',
    ],
    tags: ['React (SSR)', 'Fastify', 'FastAPI', 'RAG', 'Zustand', 'Zod', 'MapLibre', 'PostgreSQL'],
    type: 'work',
  },
  {
    title: 'QA Intern',
    org: 'Example (Prior Experience)',
    location: 'Remote',
    period: 'Earlier',
    bullets: [
      'Practiced TDD with Jest (unit/integration) and Playwright (E2E); implemented automated suites integrated into CI/CD pipelines.',
      'Owned CI/CD test workflows, adding smoke checks and flake mitigation to stabilize pipelines and shorten feedback loops.',
      'Designed Selenium and Pytest suites for regression coverage across core user journeys.',
      'Introduced Great Expectations checks to detect schema drift in analytics pipelines.',
      'Gained strong practical experience in building maintainable QA frameworks, communicating findings, and measuring impact on delivery speed and quality.',
    ],
    tags: ['Playwright', 'Jest', 'CI/CD', 'Selenium', 'Pytest', 'Great Expectations'],
    type: 'work',
  },
];


