# matthewdenton.co.za

Matthew Denton's freelance web design & development site — built with [Astro](https://astro.build), Tailwind CSS, and TypeScript.

## Stack

- **Astro** (static output) for pages, layouts and content collections
- **Tailwind CSS** for styling, with a custom design system (see `tailwind.config.mjs`)
- **@fontsource** self-hosted fonts (Fraunces, Inter, IBM Plex Mono) — no external font CDN
- **@astrojs/sitemap** for automatic sitemap generation

## Project structure

```
src/
  components/   Header, Footer, WorkCard, ProjectSpotlight, CtaBand, Logo
  content/work/ Case study markdown files (NAFTS, TNT Fitness)
  layouts/      BaseLayout.astro — head, SEO, header/footer wrapper
  lib/site.ts   Site-wide config: name, contact details, nav links
  pages/        index, work/, about, contact, 404
public/
  images/       Static assets, including case study screenshots
```

## Local development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # type-check + production build to dist/
npm run preview   # serve the production build locally
```

## Content still needed before launch

The following are placeholder values in `src/lib/site.ts` and `src/pages/about.astro` — replace before going live:

- Real email address and WhatsApp number
- Final production domain
- A real portrait photo (currently a placeholder graphic)
- The NAFTS case study screenshots are in `public/images/work/nafts-*.jpg`; swap in higher-resolution originals if available

## Deployment

Static output (`output: "static"` in `astro.config.mjs`), deployable to any static host. When connecting this repo to Vercel, note that its only branch is `claude/freelance-web-design-site-ufbnu7` — there is no `main` — so the Production Branch / environment branch tracking must point at that branch explicitly.
