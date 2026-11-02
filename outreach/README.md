# Outreach video pipeline

Personalised 15s vertical videos: their site now, what I noticed, what it could be, CTA.

    node outreach/capture.mjs --url https://example.co.za --vertical gym --country za --dir outreach/prospects/gyms/<slug>
    node outreach/compose.mjs --dir outreach/prospects/gyms/<slug> --out outreach/out/gyms/<slug>.mp4
    node outreach/render.mjs  --url https://example.co.za --vertical gym --country za --slug <slug>   # both steps
    node outreach/render.mjs  --csv outreach/prospects-za.csv --limit 1                             # clinic batch / test

- `capture.mjs`: iPhone 14 (390x844, 3x). Records a 3s eased scroll (before.webm + frames), full-page screenshot,
  logo, brand colour, offerings, booking platforms, load time, and for gyms: timetable, online sign-up and pricing.
  Checks the homepage plus up to 6 relevant internal pages. Callouts come only from these facts and carry evidence.
- `templates/gym-after.html`: the "after" gym homepage, filled from data.json. Prices, plan names and coach photos
  are placeholders on purpose.
- `compose.mjs`: 1080x1920, 30fps, 15s. `--stills 45,200` also writes those frames as JPEGs for review.
- `test/fixture-gym`: a local dated gym page for smoke tests (`node outreach/test/serve-fixture.mjs`).

Needs Playwright and ffmpeg. Output (`out/`, `prospects/`) is gitignored.
