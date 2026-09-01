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
  components/   Header, Footer, WorkCard, ProjectSpotlight, CtaBand, Logo, WhatsAppFloat
  content/work/ Case study markdown files (NAFTS, TNT Fitness, Nectra)
  layouts/      BaseLayout.astro — head, SEO, header/footer wrapper
  lib/site.ts   Site-wide config: name, contact details, nav links, pricing
  pages/        index, work/, about, contact, small-business-websites, 404
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

- Final production domain (`SITE.url` in `src/lib/site.ts` is still a placeholder)
- A real portrait photo for `/about` (currently a placeholder graphic)
- Real testimonial quotes, if/when added to the homepage
- Confirm the build year and live URL for the Nectra case study (`src/content/work/nectra.md`)

## Deployment

Static output (`output: "static"` in `astro.config.mjs`), deployable to any static host. When connecting this repo to Vercel, note that its only branch is `claude/freelance-web-design-site-ufbnu7` — there is no `main` — so the Production Branch / environment branch tracking must point at that branch explicitly.
