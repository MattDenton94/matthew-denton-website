---
title: "TNT Fitness"
client: "TNT Fitness — Bothasig, Cape Town"
summary: "A concept rebuild for a boxing and self-defence gym: a single-page site built to get first-time visitors onto a WhatsApp booking thread in one tap."
year: "2025"
services: ["Design", "Front-end build", "Accessibility", "Local SEO"]
liveUrl: "https://github.com/MattDenton94/TNT_Fitness"
coverImage: "/images/work/tnt-fitness-cover.png"
coverImageAlt: "The TNT Fitness homepage, showing the hero section with the tagline and a WhatsApp booking button."
accent: "ember"
featured: true
isPlaceholder: false
order: 1
---

## The brief

TNT Fitness is a boxing, strength and self-defence gym in Bothasig, Cape Town, run by coaches who wanted a site that reads like the gym feels — direct, disciplined, a little relentless — and that turns a browsing stranger into a booked first session without making them think about it.

No CMS, no monthly hosting bill, no build pipeline for a client who will never touch the code. Just a fast, honest, single page that a coach can hand off a link to and trust it'll do its job on a phone screen in a gym car park.

## What I built

A single-page, mobile-first static site — plain HTML, CSS and a sliver of vanilla JavaScript for the mobile nav. No framework, no dependencies, no build step. It deploys as-is to GitHub Pages and will still run in ten years without anyone updating a package.

Every call to action — hero, pricing card, schedule, footer — routes straight into a pre-filled WhatsApp message, because that's where this gym's members actually reply. A contact form would have been a dead end; a chat thread converts.

The layout runs on a small set of repeating patterns — an eyebrow label, a heading, a card — reused across services, pricing tiers, results and testimonials, so the page feels consistent without feeling templated. Pricing is grouped by what a visitor is actually deciding between (drop-in vs. membership vs. self-defence-only) rather than laid out as one flat grid.

## Details that mattered

- **Structured data** — a `SportsActivityLocation` schema block with opening hours and address, so the gym's hours and location can surface directly in search results.
- **Accessibility** — skip link, visible focus states, `prefers-reduced-motion` support, and a schedule table that degrades to a readable stacked card layout instead of forcing a horizontal scroll on small screens.
- **Performance** — no web fonts beyond two families, no JS framework, images sized and lazy-loaded correctly. The whole page ships light enough to load instantly on the kind of patchy data connection you actually have standing outside a gym.
- **Honesty about state** — this build shipped with clearly labelled placeholder photography rather than stock images pretending to be the real gym, so the client always knows exactly what's real and what's still waiting on a camera.

## Why it looks the way it does

Dense black background, a hard red accent, condensed uppercase display type for anything shouting a decision at you (headings, buttons, the pricing board), and a calmer body font for anything you're meant to actually read. It's meant to feel like a gym noticeboard, not a spa brochure.

The screenshot above is the real build, served from the repository linked below — not a mock-up.
