export type CvArticle = {
  title: string;
  org?: string;
  location?: string;
  period?: string;
  bullets: string[];
  tags?: string[];
};

export const cvArticles: CvArticle[] = [
  {
    title: 'Software Engineering Intern',
    org: 'Example Corp',
    location: 'Remote',
    period: 'Jun 2024 – Aug 2024',
    bullets: [
      'Built a full‑stack feature in Next.js + Node, improving task completion speed by 18%.',
      'Wrote Playwright tests covering core user flows; stabilized E2E checks in CI.',
    ],
    tags: ['Next.js', 'TypeScript', 'Playwright'],
  },
  {
    title: 'QA Intern',
    org: 'Acme Inc.',
    location: 'San Francisco, CA',
    period: 'Jan 2024 – May 2024',
    bullets: [
      'Designed and executed Selenium and Pytest suites for regression coverage.',
      'Implemented Great Expectations checks on analytics pipeline to prevent schema drift.',
    ],
    tags: ['Selenium', 'Pytest', 'Great Expectations'],
  },
];


