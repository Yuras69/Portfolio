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
