import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import { profile } from '../data/profile';
import { DarkModeProvider } from '../components/DarkModeProvider';
import { AmbientDrift } from '../components/AmbientDrift';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: `${profile.name} · ${profile.role}`,
  description: profile.summary,
  metadataBase: new URL('https://example.com'),
  openGraph: {
    title: `${profile.name} · ${profile.role}`,
    description: profile.summary,
    url: 'https://example.com',
    siteName: `${profile.name} Portfolio`,
    images: ['/images/project-placeholder.svg'],
    type: 'website',
  },
  authors: [{ name: profile.name }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <DarkModeProvider>
          <AmbientDrift />
          {children}
        </DarkModeProvider>
      </body>
    </html>
  );
}


