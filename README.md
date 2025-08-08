# SWE/QA Intern Portfolio Template

A minimal, clean portfolio template for SWE and QA interns. Edit your profile and projects in `src/data/`, replace images in `public/images/`, and deploy with Vercel.

## Quickstart

### Install & Run
```bash
# Install dependencies
npm install

# Run locally
npm run dev

# Build for production
npm run build
```

Open `http://localhost:3000` to see your portfolio.

## Customize Your Portfolio

### 1. Update Your Profile (`src/data/profile.ts`)

Edit the `profile` object with your information:

```typescript
export const profile: Profile = {
  name: 'Your Name',
  role: 'Software Engineering Intern',
  summary: 'I build web experiences with TypeScript, React, and Node.js. Passionate about shipping, learning fast, and collaborating with teams.',
  location: 'City, Country',
  email: 'you@example.com',
  lookingFor: 'Summer 2025 Internship',
  avatar: '/images/avatar.svg', // Keep this path or update it
  resumeUrl: 'https://your-resume-url.com',
  skills: [
    'TypeScript',
    'React', 
    'Next.js',
    'Node.js',
    'PostgreSQL',
    'Tailwind CSS',
    'Testing',
  ],
  links: [
    { label: 'GitHub', href: 'https://github.com/your-handle' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/your-handle' },
    { label: 'Email', href: 'mailto:you@example.com' },
  ],
};
```

### 2. Update Your Projects (`src/data/projects.ts`)

Replace the example projects with your own:

```typescript
export const projects: Project[] = [
  {
    title: 'Your Project Name',
    description: 'Short summary explaining what you built, the problem it solves, and your role. Keep it focused and outcome-oriented.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    image: '/images/project-placeholder.svg', // Keep this path or update it
    link: 'https://your-project-demo.com', // Optional: live demo
    repo: 'https://github.com/your-handle/project-repo', // Optional: source code
  },
  {
    title: 'Another Project',
    description: 'Another concise description highlighting impact, performance gains, or user adoption. Mention key responsibilities.',
    tags: ['React', 'Node.js'],
    image: '/images/project-placeholder.svg',
    link: 'https://another-demo.com',
    repo: 'https://github.com/your-handle/another-repo',
  },
];
```

### 3. Replace Images (`public/images/`)

**Required images to replace:**
- `public/images/avatar.svg` - Your profile picture (88x88px, will be displayed as circle)
- `public/images/project-placeholder.svg` - Default project image (800x450px)

**Optional images:**
- `public/images/logo.svg` - Your logo (28x28px, shown in header)
- `public/images/logos/github.svg` - GitHub icon (inherits text color)
- `public/images/logos/linkedin.svg` - LinkedIn icon (inherits text color)

**Image guidelines:**
- Keep the same filenames or update the paths in `src/data/profile.ts` and `src/data/projects.ts`
- SVG format recommended for logos and icons
- JPG/PNG work for photos
- Images will be automatically optimized by Next.js

### 4. Customize Colors (Optional)

Edit `tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  brand: {
    DEFAULT: '#3E5F44', // Primary accent color
    dark: '#2F5249',
  },
  // Add more custom colors as needed
}
```

## Deploy to Vercel

### One-time Setup
```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login
```

### Deploy
```bash
# Build your project
npm run build

# Deploy (first time - auto-links project)
vercel deploy --prebuilt

# Subsequent deployments
vercel deploy --prebuilt --prod
```

### Alternative: Deploy without global install
```bash
npx vercel@latest deploy --prebuilt
```

## Features

- ✅ **Dark/Light Mode Toggle** - Persistent theme preference
- ✅ **Responsive Design** - Works on all screen sizes  
- ✅ **SEO Optimized** - Meta tags and Open Graph
- ✅ **Fast Performance** - Next.js 14 with App Router
- ✅ **TypeScript** - Full type safety
- ✅ **Tailwind CSS** - Utility-first styling

## Tech Stack

- **Next.js 14** (App Router)
- **React 18** 
- **TypeScript**
- **Tailwind CSS 3**
- **Vercel** (deployment)

## File Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with theme provider
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/             # React components
│   ├── Header.tsx         # Navigation with theme toggle
│   ├── Footer.tsx         # Footer
│   ├── ProfileCard.tsx    # Profile info cards
│   └── ProjectCard.tsx    # Project display cards
└── data/                  # Your content
    ├── profile.ts         # Your profile information
    └── projects.ts        # Your projects list

public/
└── images/                # Your images
    ├── avatar.svg         # Your profile picture
    ├── logo.svg           # Your logo
    ├── project-placeholder.svg  # Default project image
    └── logos/             # Social media icons
```

## Notes

- No environment variables required by default
- All images are automatically optimized by Next.js
- Dark mode preference is saved to localStorage
- Build is optimized for production with static generation

