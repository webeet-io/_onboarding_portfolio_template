import Link from 'next/link';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { profile } from '../../data/profile';
import { PrintButton } from '../../components/PrintButton';
import { cvArticles } from '../../data/cv';

export default function ResumePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <section className="container-grid py-10 sm:py-14 flex-1">
        <div className="card p-6">
          <div className="flex items-center justify-between gap-4">
            <h1 className="section-title">Resume</h1>
            <PrintButton />
          </div>
          <div className="mt-6 space-y-4 text-sm leading-6">
            <p className="font-semibold">{profile.name}</p>
            <p className="text-neutral-600 dark:text-neutral-300">{profile.role}</p>
            <p>
              <a className="text-brand hover:underline" href={`mailto:${profile.email}`}>{profile.email}</a>
              <span className="mx-2">·</span>
              <span>{profile.location}</span>
            </p>
            <hr className="border-neutral-200/60 dark:border-neutral-800/60" />
            <p>{profile.summary}</p>
            <div>
              <p className="font-medium">Skills</p>
              <p className="mt-1 text-neutral-700 dark:text-neutral-300">{profile.skills.join(' · ')}</p>
            </div>
            <div>
              <p className="font-medium">Experience & Projects</p>
              <div className="mt-2 space-y-5">
                {cvArticles.map((a) => (
                  <article key={`${a.title}-${a.org ?? ''}`}>
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h2 className="font-semibold">{a.title}</h2>
                      {a.period && <span className="text-xs text-neutral-500 dark:text-neutral-400">{a.period}</span>}
                    </div>
                    {(a.org || a.location) && (
                      <p className="text-sm text-neutral-600 dark:text-neutral-300">{[a.org, a.location].filter(Boolean).join(' · ')}</p>
                    )}
                    <ul className="mt-2 list-disc pl-5 space-y-1">
                      {a.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                    {a.tags && a.tags.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-2">
                        {a.tags.map((t) => (
                          <span key={t} className="badge">{t}</span>
                        ))}
                      </div>
                    )}
                  </article>
                ))}
              </div>
            </div>
            <div>
              <p className="font-medium">Links</p>
              <ul className="mt-1 flex flex-wrap gap-x-3 gap-y-1">
                {profile.links.map((l) => (
                  <li key={l.href}>
                    <a className="text-brand hover:underline" href={l.href} target="_blank" rel="noreferrer noopener">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 text-sm">
            <Link className="text-brand hover:underline" href="/">Back to home</Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}


