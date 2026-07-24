# Yuras Pokharel — Portfolio

A production-grade personal portfolio built with Next.js 15 (App Router), React 19, TypeScript,
Tailwind CSS v4, and Framer Motion.

## Design system

The visual identity is built around one idea specific to Yuras: he works across two disciplines —
frontend engineering and business development — so the site tags content **DEV** (indigo/cyan) or
**BIZ** (amber) throughout skills, the experience timeline, and elsewhere, instead of using generic
decoration. Typography pairs Space Grotesk (display) with Inter (body) and JetBrains Mono (labels/data).

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Before you deploy — replace these placeholders

| What | Where | Notes |
|---|---|---|
| Profile photo | `public/images/profile-photo.jpg` | Square-ish portrait, ideally 800×1000 or larger |
| Resume PDF | `public/resume/Yuras_Pokharel_Resume.pdf` | Linked from Hero + Contact sections |
| OG / social share image | `public/images/og-cover.png` | 1200×630 |
| Favicon | `app/favicon.ico` | |
| Project preview images | `public/images/projects/*.png` | Replace with real screenshots |
| GitHub username | `app/api/github/route.ts` (`GITHUB_USERNAME`) and `components/sections/github-stats.tsx` reads it from `data/profile.ts`'s `github` URL — keep both in sync | Powers live stats + contribution cards |
| All copy, links, projects, experience, education | `data/*.ts` | Everything is centralized here — no need to touch components |
| Contact form submission | `components/sections/contact.tsx` | Currently simulates a submit; wire to Formspree, Resend, or your own API route |

## Folder structure

```
app/            Routes, layout, metadata, robots/sitemap, API route
components/
  layout/       Navbar, footer, page loader, scroll progress, back-to-top
  sections/     Hero, About, Skills, Tech Stack, Projects, Experience, Education, GitHub, Contact
  animations/   Reveal, text reveal, blobs, particles, spotlight, tilt
  ui/           Button, badge, section heading, dialog
data/           All editable content (profile, skills, projects, experience, education)
hooks/          useTypewriter, useCounter, useMousePosition
lib/            cn() helper, next/font definitions
public/         Images, resume
```

## Notes

- Verified with a production build (`next build`) — compiles and type-checks cleanly.
- Respects `prefers-reduced-motion` for particles and global animation.
- The GitHub stats section calls the public GitHub REST API server-side via `/api/github`
  (revalidated hourly) and falls back gracefully if the API is unreachable or rate-limited.
- Deploy directly to Vercel: `vercel` or connect the repo in the Vercel dashboard.
