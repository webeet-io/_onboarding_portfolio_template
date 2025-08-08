import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/app/**/*.{ts,tsx,mdx}',
    './src/components/**/*.{ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#10b981',
          dark: '#059669',
        },
      },
      boxShadow: {
        soft: '0 2px 16px rgba(0,0,0,0.06)',
      },
      borderRadius: {
        xl: '1rem',
      },
    },
  },
  plugins: [],
} satisfies Config;


