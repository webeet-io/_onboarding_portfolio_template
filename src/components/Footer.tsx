export function Footer() {
  return (
    <footer className="border-t border-neutral-200/70 dark:border-neutral-800">
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


