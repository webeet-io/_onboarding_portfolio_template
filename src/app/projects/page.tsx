import Link from 'next/link';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { projects } from '../../data/projects';
import { ProjectsBrowser } from '../../components/ProjectsBrowser';

export default function ProjectsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <section className="container-grid py-10 sm:py-14 flex-1">
        <div className="flex items-center justify-between gap-4">
          <h1 className="section-title">Projects</h1>
          <Link href="/" className="text-brand hover:underline">Home</Link>
        </div>
        <ProjectsBrowser projects={projects} />
      </section>
      <Footer />
    </main>
  );
}


