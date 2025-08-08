export function Footer() {
  return (
    <footer className="border-t border-neutral-200/50 dark:border-neutral-800/60 bg-white/40 dark:bg-neutral-950/30 backdrop-blur-md">
      <div className="container-grid py-6 text-sm flex items-center justify-between">
        <p>
          © {new Date().getFullYear()} · Built with Next.js + Tailwind CSS
        </p>
        <p>
          <a className="text-brand hover:underline" href="#top">Back to top</a>
        </p>
      </div>
    </footer>
  );
}


