---
title: "TNT Fitness"
client: "TNT Fitness — Bothasig, Cape Town"
summary: "A boxing and self-defence gym that needed a site as direct and no-nonsense as the coaching — built to turn a first-time visitor into a booked session in one tap."
year: "2025"
services: ["Design", "Frontend build"]
liveUrl: "https://github.com/MattDenton94/TNT_Fitness"
coverImage: "/images/work/tnt-fitness-services.png"
coverImageAlt: "The Classes & Services section of the TNT Fitness site — eight cards covering boxing fitness, strength & conditioning, self-defence classes and more, each with a custom icon."
coverImageDark: true
gallery:
  - src: "/images/work/tnt-fitness-pricing.png"
    alt: "The pricing section — drop-in, weekly and unlimited membership tiers, plus a self-defence-only option, with a highlighted best-value card."
  - src: "/images/work/tnt-fitness-schedule.png"
    alt: "The weekly training schedule, styled as a red-and-black training board."
  - src: "/images/work/tnt-fitness-mobile.png"
    alt: "The TNT Fitness homepage on a mobile viewport."
accent: "ember"
featured: false
isPlaceholder: false
order: 2
---

## What the gym needed

TNT Fitness runs boxing, strength and self-defence classes out of Bothasig, Cape Town, and wanted one thing above all: a site a coach could text a link to and trust it would get someone booked, on a phone, standing in a gym car park. No CMS to maintain, no monthly hosting bill, nothing a non-technical owner would ever need to touch.

## What I designed and built

A single-page site with a hard black-and-red palette and condensed, shouting type — it's meant to feel like a gym noticeboard, not a spa brochure. Every section — services, pricing, the weekly schedule — routes straight into a pre-filled WhatsApp message, because that's where this gym's members actually reply; a contact form would have been a dead end.

Pricing is grouped by what someone's actually deciding between — drop-in, a few days a week, unlimited, or self-defence only — instead of one flat grid. The weekly schedule is built as a proper table that turns into a stacked, readable card list on a phone rather than forcing a horizontal scroll.

## The build, underneath

It's plain HTML, CSS and a sliver of vanilla JavaScript — no framework, no dependencies, no build step — so it deploys as-is and will still run in ten years without anyone updating a package. It also carries the fundamentals that don't show up in a screenshot: structured data so the gym's hours and location can surface directly in search results, visible focus states and `prefers-reduced-motion` support, and images sized so the page loads instantly on a patchy connection outside a gym.
