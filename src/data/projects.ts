export type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: 'Project One',
    description:
      'Short summary explaining what you built, the problem it solves, and your role. Keep it focused and outcome-oriented.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    image: '/images/project-placeholder.svg',
    link: '#',
    repo: '#',
  },
  {
    title: 'Project Two',
    description:
      'Another concise description highlighting impact, performance gains, or user adoption. Mention key responsibilities.',
    tags: ['React', 'Node.js'],
    image: '/images/project-placeholder.svg',
    link: '#',
    repo: '#',
  },
];


