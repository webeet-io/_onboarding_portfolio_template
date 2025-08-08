import Image from 'next/image';
import { type Project } from '../data/projects';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card overflow-hidden group">
      <div className="aspect-[16/9] relative overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover project-image transition-transform duration-300 ease-out group-hover:scale-105 will-change-transform"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">{project.description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="badge">{tag}</span>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-3 text-sm">
          {project.link && (
            <a className="text-brand hover:underline" href={project.link} target="_blank" rel="noreferrer noopener">Live</a>
          )}
          {project.repo && (
            <a className="text-brand hover:underline" href={project.repo} target="_blank" rel="noreferrer noopener">Code</a>
          )}
        </div>
      </div>
    </article>
  );
}


