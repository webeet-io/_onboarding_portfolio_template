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
    title: "Layered AI (Webeet.io)",
    description:
      "Implemented LLM orchestration to generate neighborhood scores and visualized them as a choropleth on a map-centric interface. Built BFF endpoints to orchestrate data for SSR React views.",
    tags: ["RAG", "LLM", "MapLibre", "Fastify", "React (SSR)", "TypeScript"],
    image: "/images/project-placeholder.svg",
    link: undefined,
    repo: undefined,
  },
  {
    title: "Instagram Clone",
    description:
      "Full-stack social media clone with React Router v7, Fastify backend, Zod validation, and comprehensive Jest TDD testing. Features include user authentication, post creation, real-time likes/comments, and responsive design.",
    tags: ["React Router v7", "Fastify", "Zod", "Jest", "TDD", "TypeScript"],
    image: "/images/project-placeholder.svg",
    link: "#",
    repo: "#",
  },
  {
    title: "Testing Platform & CI Stability",
    description:
      "Authored comprehensive Jest unit/integration tests and Playwright E2E suites with fixtures. Set up Pytest for Python services and smoke checks to stabilize CI pipelines.",
    tags: ["Playwright", "Jest", "Pytest", "Selenium"],
    image: "/images/project-placeholder.svg",
    link: "#",
    repo: "#",
  },
];
