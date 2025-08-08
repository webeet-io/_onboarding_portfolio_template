import Image from 'next/image';
import Link from 'next/link';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ProfileCard } from '../components/ProfileCard';
import { ProjectCard } from '../components/ProjectCard';
import { CvCard } from '../components/CvCard';
import { profile } from '../data/profile';
import { projects } from '../data/projects';
import { cvArticles } from '../data/cv';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">

      <Header />

      <div className="flex-1">
        <section className="container-grid pt-10 sm:pt-14">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr,auto] gap-6 lg:gap-8">
            <div className="card hero-card p-5 md:p-6">
              <div className="flex items-center gap-4">
                <Image
                  src={profile.avatar}
                  alt={`${profile.name} avatar`}
                  width={88}
                  height={88}
                  className="rounded-full border border-neutral-200/40 dark:border-neutral-800/40 bg-white/40 dark:bg-neutral-900/40"
                />
                <div>
                  <h1 className="text-2xl sm:text-3xl font-semibold">{profile.name}</h1>
                  <p className="text-neutral-600 dark:text-neutral-300">{profile.role}</p>
                </div>
              </div>
              <p className="mt-4 text-neutral-700 dark:text-neutral-300 leading-relaxed">{profile.summary}</p>
              <ProfileCard />
            </div>

            <aside className="space-y-4 lg:w-80">
              <div className="card p-5 md:p-6">
                <h2 className="section-title">Skills</h2>
                <div className="mt-3 flex flex-wrap gap-2">
                  {profile.skills.map((skill) => (
                    <span key={skill} className="badge">{skill}</span>
                  ))}
                </div>
              </div>
              <div className="card p-5 md:p-6">
                <h2 className="section-title">Links</h2>
                <ul className="mt-3 space-y-2 text-sm">
                  {profile.links.map((link) => (
                    <li key={link.href}>
                      <a
                        className="text-brand hover:underline"
                        href={link.href}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </section>

        <section id="projects" className="container-grid pt-10 sm:pt-14">
          <div className="flex items-end justify-between gap-4">
            <h2 className="section-title">Projects</h2>
            <Link href="/projects" className="text-brand hover:underline text-sm">View all</Link>
          </div>
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {projects.slice(0, 4).map((p) => (
              <ProjectCard key={p.title} project={p} />)
            )}
          </div>
        </section>

        <section id="cv" className="container-grid pt-10 sm:pt-14 pb-16">
          <div className="flex items-end justify-between gap-4">
            <h2 className="section-title">Experience</h2>
            <Link href="/resume" className="text-brand hover:underline text-sm">View full CV</Link>
          </div>
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {cvArticles.slice(0, 4).map((item) => (
              <CvCard key={`${item.title}-${item.org ?? ''}`} item={item} />
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}


