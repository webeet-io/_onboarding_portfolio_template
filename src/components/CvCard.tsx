import { type CvArticle } from '../data/cv';

export function CvCard({ item }: { item: CvArticle }) {
  return (
    <article className="card p-5 md:p-6">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-lg font-semibold">{item.title}</h3>
        {item.period && (
          <span className="text-xs text-neutral-500 dark:text-neutral-400">{item.period}</span>
        )}
      </div>
      {(item.org || item.location) && (
        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">{[item.org, item.location].filter(Boolean).join(' · ')}</p>
      )}
      <ul className="mt-3 list-disc pl-5 space-y-1 text-sm">
        {item.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
      {item.tags && item.tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {item.tags.map((t) => (
            <span key={t} className="badge">{t}</span>
          ))}
        </div>
      )}
    </article>
  );
}


