# matthew-denton.vercel.app (redesign)

Astro 5 static site. Fonts are self-hosted, so no Google Fonts call.

## Run it

    npm install
    npm run dev      # http://localhost:4321
    npm run build    # outputs to dist/

## Deploy (replacing your current site)

1. In your existing repo, delete the old `src/` and `public/` folders (keep `.git`).
2. Copy everything from this folder in (`src/`, `public/`, `package.json`, `astro.config.mjs`, `.gitignore`).
3. `npm install`, then `npm run build` to check it builds.
4. Commit and push. Vercel redeploys automatically.

If you move to your own domain later, change `site` in `astro.config.mjs`.

## Where to edit things

- `src/data/site.ts`: all your content. Contact details, the six services, every project/case study, tools, client names and FAQs. Add a new project here and its page is created automatically at /work/<slug>.
- `src/components/Mockup.astro`: the drawn browser previews of each project. When you have real screenshots, drop them in `public/work/` and swap the `<Mockup>` for an `<img>`.
- `src/styles/global.css`: colours, fonts and spacing (the tokens at the top).

## Pages

/, /work, /work/harlan, /work/creative-pearls, /work/tnt-fitness, /work/nafts, /work/nectra, /services, /about, /contact, /gyms, 404.
Old URLs /work/tnt-fitness, /work/nafts and /gyms still work.

The contact form has no backend: it opens WhatsApp (or email) with the enquiry pre-typed.
