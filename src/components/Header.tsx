'use client';

import Image from 'next/image';
import Link from 'next/link';
import { profile } from '../data/profile';
import { useDarkMode } from './DarkModeProvider';

export function Header() {
  const { isDark, toggleDark } = useDarkMode();

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200/50 dark:border-neutral-800/60 bg-white/60 dark:bg-neutral-950/40 backdrop-blur-md">
      <div className="container-grid py-3 sm:py-4 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/logo.svg" width={28} height={28} alt="Logo" />
          <span className="font-semibold">{profile.name}</span>
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/projects" className="hover:underline">Projects</Link>
          <Link href={profile.resumeUrl} className="hover:underline">Resume</Link>
          <button
            onClick={toggleDark}
            className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}


