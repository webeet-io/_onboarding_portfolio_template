'use client';

import { useMemo, useState } from 'react';
import clsx from 'clsx';
import { type Project } from '../data/projects';
import { ProjectCardLarge } from './ProjectCardLarge';

type Props = {
  projects: Project[];
};

export function ProjectsBrowser({ projects }: Props) {
  const [query, setQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [layout, setLayout] = useState<'list' | 'grid'>('list');

  const allTags = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.tags.forEach((t) => set.add(t)));
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [projects]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      const matchesQuery = q
        ? p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)
        : true;
      const matchesTags = selectedTags.length
        ? selectedTags.every((t) => p.tags.includes(t))
        : true;
      return matchesQuery && matchesTags;
    });
  }, [projects, query, selectedTags]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setQuery('');
    setSelectedTags([]);
  };

  return (
    <div className="mt-6">
      {/* Controls */}
      <div className="card p-4 flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 justify-between">
          <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-300">
            <span>{filtered.length}</span>
            <span>of</span>
            <span>{projects.length}</span>
            <span>projects</span>
          </div>
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              className={clsx(
                'rounded-lg px-3 py-1.5 text-sm transition-colors border',
                layout === 'list'
                  ? 'bg-brand/15 text-brand border-brand/30'
                  : 'text-neutral-700 dark:text-neutral-200 border-neutral-300/40 dark:border-neutral-700/50 hover:bg-neutral-100/40 dark:hover:bg-neutral-800/40'
              )}
              onClick={() => setLayout('list')}
            >
              List
            </button>
            <button
              className={clsx(
                'rounded-lg px-3 py-1.5 text-sm transition-colors border',
                layout === 'grid'
                  ? 'bg-brand/15 text-brand border-brand/30'
                  : 'text-neutral-700 dark:text-neutral-200 border-neutral-300/40 dark:border-neutral-700/50 hover:bg-neutral-100/40 dark:hover:bg-neutral-800/40'
              )}
              onClick={() => setLayout('grid')}
            >
              Grid
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center gap-3">
          <div className="flex-1">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects..."
              className="w-full rounded-lg border border-neutral-300/50 dark:border-neutral-700/60 bg-white/60 dark:bg-neutral-900/50 backdrop-blur px-3 py-2 outline-none focus:ring-2 focus:ring-brand/40"
            />
          </div>
          <button
            className="rounded-lg px-3 py-2 text-sm border border-neutral-300/50 dark:border-neutral-700/60 hover:bg-neutral-100/40 dark:hover:bg-neutral-800/40"
            onClick={clearFilters}
          >
            Clear filters
          </button>
        </div>

        {/* Tag filters */}
        <div className="flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={clsx(
                'badge transition-colors border',
                selectedTags.includes(tag)
                  ? 'bg-brand/20 text-brand border-brand/30'
                  : 'bg-neutral-100/70 dark:bg-neutral-800/60 text-neutral-700 dark:text-neutral-200 border-transparent hover:bg-neutral-200/60 dark:hover:bg-neutral-700/60'
              )}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      <div
        className={clsx(
          'mt-6 grid gap-6',
          layout === 'grid' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'
        )}
      >
        {filtered.map((p) => (
          <ProjectCardLarge key={p.title} project={p} />
        ))}
      </div>
    </div>
  );
}


