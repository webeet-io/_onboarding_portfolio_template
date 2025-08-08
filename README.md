### SWE/QA Intern Portfolio Template (Next.js + Tailwind CSS)

A minimal, clean portfolio template for SWE and QA interns. Edit your profile and projects in `src/data/`, replace images in `public/images/`, and deploy with Vercel.

### Quickstart

- Install dependencies:
  - npm: `npm install`
  - pnpm: `pnpm install`
  - yarn: `yarn`

- Run locally: `npm run dev`
- Build: `npm run build`
- Start production build locally: `npm start`

Open `http://localhost:3000`.

### Customize

- Edit profile: `src/data/profile.ts`
- Edit projects: `src/data/projects.ts`
- Replace images: `public/images/*` (keep the same filenames or update paths in data files)

### Deploy to Vercel (CLI)

- One-time setup:
  - `npm install -g vercel` (or `pnpm add -g vercel`)
  - `vercel login`

- First deploy (auto-link project):
  - `npm run build`
  - `vercel deploy --prebuilt`

- Subsequent deploys:
  - `vercel deploy --prebuilt --prod`

Notes:
- No environment variables required by default.
- You can also use `npx vercel@latest` instead of a global install.

### Tech
- Next.js 14 (App Router)
- React 18
- Tailwind CSS 3

Minimal comments are included directly in the code where helpful.

