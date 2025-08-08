import Link from "next/link";
import { getProjects } from "src/data-access/sanity";
import { ProjectsBrowser } from "src/components/ProjectsBrowser";
import { projects as MockProjects, type Project } from "src/data/projects";

export default async function ProjectsPage() {
  const sanityProjects = await getProjects();

  const projects = sanityProjects.length === 0 ? MockProjects : sanityProjects;

  return (
    <section className="container-grid py-10 sm:py-14 flex-1">
      <div className="flex items-center justify-between gap-4">
        <h1 className="section-title">Projects</h1>
        <Link href="/" className="text-brand hover:underline">
          Home
        </Link>
      </div>
      <ProjectsBrowser projects={projects} />
    </section>
  );
}
