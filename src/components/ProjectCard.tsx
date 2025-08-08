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
            <a
              className="inline-flex items-center gap-1 rounded-lg px-3 py-1.5 bg-brand/15 text-brand hover:bg-brand/20 active:bg-brand/25 transition-colors"
              href={project.link}
              target="_blank"
              rel="noreferrer noopener"
            >
              Live
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          )}
          {project.repo && (
            <a
              className="inline-flex items-center gap-1 rounded-lg px-3 py-1.5 border border-brand/30 text-brand hover:bg-brand/10 active:bg-brand/15 transition-colors"
              href={project.repo}
              target="_blank"
              rel="noreferrer noopener"
            >
              Code
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
              </svg>
            </a>
          )}
          {!project.link && !project.repo && (
            <span className="text-xs text-neutral-500 dark:text-neutral-400 italic">Company project</span>
          )}
        </div>
      </div>
    </article>
  );
}


