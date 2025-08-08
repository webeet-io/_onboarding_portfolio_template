import { type CvArticle } from '../data/cv';

export function CvCard({ item }: { item: CvArticle }) {
  return (
    <article className="card p-5 md:p-6 relative">
      {/* Type indicator icon */}
      <div className="absolute top-3 right-3">
        {item.type === 'work' ? (
          <div className="w-6 h-6 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-emerald-700 dark:text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
            </svg>
          </div>
        ) : (
          <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-blue-700 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
          </div>
        )}
      </div>
      
      <div className="flex flex-wrap items-baseline justify-between gap-2 pr-8">
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


