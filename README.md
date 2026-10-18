# matthewdenton.co.za

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

- `src/data/site.ts`: all the content. Contact details, the clinic pains, the four parts of the system, the monthly report metrics, every case study and the FAQs.
- Case study numbers: fill in `results` for a project (e.g. `{ value: '4.2x', label: 'Return on ad spend' }`). The results strip only shows once it has numbers.
- Headshot: add `public/matt.webp` and uncomment the `<img class="portrait">` line in `src/pages/about.astro`.
- `src/components/CrmBoard.astro`: the example CRM board in the hero and on /services.
- `src/styles/global.css`: colours, fonts and spacing (the tokens at the top).

## Pages

/, /services (the system), /work, /work/harlan, /work/creative-pearls, /work/tnt-fitness, /work/nafts, /about, /contact (free audit request), 404.
/gyms and /work/nectra redirect.
