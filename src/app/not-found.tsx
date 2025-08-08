import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen grid place-items-center">
      <div className="card p-6 text-center">
        <h1 className="section-title">Page not found</h1>
        <p className="mt-2 text-neutral-700 dark:text-neutral-300">The page you are looking for does not exist.</p>
        <div className="mt-4">
          <Link href="/" className="inline-flex rounded-lg px-3 py-1.5 bg-brand/15 text-brand hover:bg-brand/20">Go home</Link>
        </div>
      </div>
    </main>
  );
}


