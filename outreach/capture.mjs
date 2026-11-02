// capture.mjs: record a prospect's homepage on an iPhone 14 and extract facts.
//
// One prospect:
//   node outreach/capture.mjs --url https://2-0.co.za --vertical gym --country za --dir prospects/gyms/2-0
// Every row of a CSV (columns: name,url,city,country,...):
//   node outreach/capture.mjs --csv outreach/prospects-za.csv --country za
//
// Writes <dir>/data.json, screenshot.png, before.webm (the 3s scroll),
// before/NNNN.jpg (its frames, used by compose), and logo / og image files when found. Callouts are built ONLY
// from facts detected here, and each one carries the evidence that produced it.
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { chromium, IPHONE, REPO, args, readCsv, slugify } from './lib.mjs';

const SCROLL_MS = 3000;
const FPS = 30;
const MAX_EXTRA_PAGES = 6;

// Booking and sign-up platforms, matched against link, iframe, script and form URLs.
export const PLATFORMS = {
  Fresha: /fresha\.com/i,
  Calendly: /calendly\.com/i,
  Setmore: /setmore\.com/i,
  Vagaro: /vagaro\.com/i,
  Mindbody: /mindbodyonline\.com|mindbody\.io|healcode\.com|mndbdy\.ly/i,
  Boulevard: /joinblvd\.com|blvd\.co\b|boulevard\.io/i,
  Glofox: /glofox\.com|glofox\.io/i,
  'Zen Planner': /zenplanner\.com/i,
  Wodify: /wodify\.com/i,
  PushPress: /pushpress\.com/i,
  TeamUp: /goteamup\.com|teamup\.com/i,
  Gymdesk: /gymdesk\.com/i,
  ClassPass: /classpass\.com/i,
};
const GYM_PLATFORMS = ['Mindbody', 'Glofox', 'Zen Planner', 'Wodify', 'PushPress', 'TeamUp', 'Gymdesk', 'ClassPass'];

const OFFERINGS = {
  clinic: /botox|tox\b|filler|injectab|laser|peel|microneedl|dermapen|hydrafacial|facial|skin|hair removal|ipl|prp|thread|carboxy|meso|contour|sculpt|tattoo removal|acne|pigment|rejuven|lip|wrinkle|anti.?ageing|anti.?aging|vein|coolsculpt|body|morpheus|profhilo|exosome|dermaplan|led therapy|rf\b|radiofrequency|tightening|scar/i,
  gym: /crossfit|hiit|yoga|pilates|spin|cycl|boxing|kickbox|mma|jiu.?jitsu|bjj|muay|karate|judo|martial|strength|conditioning|bootcamp|boot camp|functional|weightlift|olympic lift|powerlift|personal train|\bpt\b|group (class|training|fitness)|kids|cardio|circuit|barre|zumba|hyrox|open gym|mobility|stretch|rowing|dance|aerobic|aqua|swim|bodybuilding|endurance|athletic|performance|small group|metcon|kettlebell|calisthenics|reformer|women'?s|seniors/i,
};

const isMain = import.meta.url === `file://${process.argv[1]}`;
if (isMain) await main();

async function main() {
  const a = args();
  const jobs = [];
  if (a.csv) {
    const country = a.country || (/-us\b/.test(a.csv) ? 'us' : 'za');
    for (const r of readCsv(a.csv)) {
      if (!r.url) continue;
      const slug = slugify(r.name || r.url);
      jobs.push({ url: r.url, name: r.name, vertical: a.vertical || 'clinic', country: (r.country || country).toLowerCase().startsWith('u') ? 'us' : 'za', slug, dir: path.join(REPO, 'outreach/prospects', country, slug) });
    }
  } else if (a.url) {
    const slug = a.slug || slugify(a.url);
    const vertical = a.vertical || 'clinic';
    const country = a.country || 'za';
    const dir = path.resolve(REPO, a.dir || path.join('outreach/prospects', vertical === 'gym' ? 'gyms' : country, slug));
    jobs.push({ url: a.url, name: a.name, vertical, country, slug, dir });
  } else {
    console.error('usage: capture.mjs --url <url> [--vertical gym|clinic] [--country za|us] [--dir path] [--name "Name"]\n   or: capture.mjs --csv prospects-za.csv');
    process.exit(1);
  }
  const browser = await chromium.launch();
  let failed = 0;
  for (const job of jobs) {
    try { await capture(browser, job); }
    catch (e) { failed++; console.error(`✗ ${job.url}: ${e.message}`); }
  }
  await browser.close();
  process.exit(failed && failed === jobs.length ? 1 : 0);
}

export async function capture(browser, job) {
  const { url, vertical, country, slug, dir } = job;
  fs.rmSync(dir, { recursive: true, force: true });
  fs.mkdirSync(path.join(dir, 'before'), { recursive: true });
  // iPhone 14 device (UA, touch, 3x pixels) at its full 390x844 screen, so the
  // recording fills the phone frame in the video.
  const context = await browser.newContext({ ...IPHONE, viewport: { width: 390, height: 844 }, screen: { width: 390, height: 844 } });
  const page = await context.newPage();

  const resp = await page.goto(url, { waitUntil: 'load', timeout: 45000 });
  if (!resp || resp.status() >= 400) throw new Error(`HTTP ${resp ? resp.status() : 'no response'}`);
  const timing = await page.evaluate(() => {
    const n = performance.getEntriesByType('navigation')[0];
    return n ? { load: Math.round(n.loadEventEnd || n.duration), dcl: Math.round(n.domContentLoadedEventEnd) } : null;
  });
  await page.waitForLoadState('networkidle', { timeout: 8000 }).catch(() => {});

  // Pre-scroll once so lazy-loaded images and scroll animations are in place.
  await page.evaluate(async () => {
    document.documentElement.style.scrollBehavior = 'auto';
    for (let y = 0; y < Math.min(document.documentElement.scrollHeight, innerHeight * 4); y += innerHeight / 2) {
      window.scrollTo(0, y); await new Promise(r => setTimeout(r, 120));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForLoadState('networkidle', { timeout: 5000 }).catch(() => {});
  await page.waitForTimeout(800);

  // Smooth 3s scroll, eased, rendered frame by frame at 30fps (deterministic, no
  // dropped frames, full device resolution).
  const frames = Math.round(SCROLL_MS / 1000 * FPS);
  const dist = await page.evaluate(() => Math.min(Math.max(0, document.documentElement.scrollHeight - innerHeight), innerHeight * 3.2));
  const ease = t => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
  for (let i = 0; i < frames; i++) {
    const y = Math.round(dist * ease(i / (frames - 1)));
    await page.evaluate(y => window.scrollTo(0, y), y);
    await page.screenshot({ path: path.join(dir, 'before', String(i + 1).padStart(4, '0') + '.jpg'), type: 'jpeg', quality: 85 });
  }

  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(300);
  await page.screenshot({ path: path.join(dir, 'screenshot.png'), fullPage: true });

  const home = await page.evaluate(extract, { offeringSrc: OFFERINGS[vertical].source, platforms: Object.fromEntries(Object.entries(PLATFORMS).map(([k, v]) => [k, v.source])) });
  home.page = page.url();

  // Follow a few relevant internal links (timetable, pricing, join, booking, services)
  // so "not found" claims cover more than the homepage.
  const extra = [];
  const origin = new URL(page.url()).origin;
  const wanted = /timetable|schedule|classes|class|price|pricing|rates|fees|membership|join|sign.?up|trial|book|treatment|services|menu/i;
  const candidates = [...new Map(home.links
    .filter(l => l.href.startsWith(origin) && !/#|\.(pdf|jpe?g|png)$/i.test(l.href) && l.href.replace(/\/$/, '') !== origin && wanted.test(l.text + ' ' + l.href))
    .map(l => [l.href.replace(/\/$/, ''), l])).values()].slice(0, MAX_EXTRA_PAGES);
  for (const l of candidates) {
    try {
      const r = await page.goto(l.href, { waitUntil: 'load', timeout: 25000 });
      if (!r || r.status() >= 400) continue;
      await page.waitForTimeout(800);
      const facts = await page.evaluate(extract, { offeringSrc: OFFERINGS[vertical].source, platforms: Object.fromEntries(Object.entries(PLATFORMS).map(([k, v]) => [k, v.source])) });
      facts.page = page.url();
      extra.push(facts);
    } catch { /* a broken subpage is not a fact we report */ }
  }

  // Download logo and og:image so compose works offline.
  const save = async (src, base) => {
    if (!src) return null;
    if (src.startsWith('<svg')) { fs.writeFileSync(path.join(dir, base + '.svg'), src); return base + '.svg'; }
    try {
      const r = await context.request.get(src, { timeout: 15000 });
      if (!r.ok()) return null;
      const ct = r.headers()['content-type'] || '';
      const ext = ct.includes('svg') ? '.svg' : ct.includes('png') ? '.png' : ct.includes('webp') ? '.webp' : ct.includes('gif') ? '.gif' : ct.includes('icon') ? '.ico' : '.jpg';
      fs.writeFileSync(path.join(dir, base + ext), await r.body());
      return base + ext;
    } catch { return null; }
  };
  const logoFile = await save(home.logo?.src, 'logo');
  const ogFile = await save(home.ogImage, 'og');

  await page.close();
  await context.close();

  execFileSync('ffmpeg', ['-y', '-v', 'error', '-framerate', String(FPS), '-i', path.join(dir, 'before', '%04d.jpg'),
    '-vf', 'scale=780:-2', '-c:v', 'libvpx', '-b:v', '4M', path.join(dir, 'before.webm')]);

  const data = buildData({ job, home, extra, timing, finalUrl: home.page, logoFile, ogFile, frames: fs.readdirSync(path.join(dir, 'before')).length });
  fs.writeFileSync(path.join(dir, 'data.json'), JSON.stringify(data, null, 2));
  console.log(`✓ ${data.name} (${slug}): ${data.callouts.map(c => c.text).join(' | ') || 'no callouts'}`);
  return data;
}

// Runs in the page. Returns raw signals only; interpretation happens in buildData.
function extract({ offeringSrc, platforms }) {
  const OFF = new RegExp(offeringSrc, 'i');
  const PL = Object.fromEntries(Object.entries(platforms).map(([k, v]) => [k, new RegExp(v, 'i')]));
  const vis = el => { const r = el.getBoundingClientRect(); const s = getComputedStyle(el); return s.display !== 'none' && s.visibility !== 'hidden' && (r.width > 0 || r.height > 0); };
  const txt = el => (el.innerText || el.textContent || el.getAttribute('aria-label') || el.value || '').replace(/\s+/g, ' ').trim();
  const abs = u => { try { return new URL(u, location.href).href; } catch { return ''; } };
  const meta = n => document.querySelector(`meta[property="${n}"],meta[name="${n}"]`)?.content || '';

  // Name
  const title = document.title.trim();
  const siteName = meta('og:site_name');

  // Links and CTAs
  const links = [...document.querySelectorAll('a[href]')].map(a => ({ text: txt(a).slice(0, 80), href: abs(a.getAttribute('href')), visible: vis(a) }));
  const buttons = [...document.querySelectorAll('button,input[type=submit],[role=button]')].filter(vis).map(b => txt(b).slice(0, 80)).filter(Boolean);
  const urls = [
    ...links.map(l => ({ url: l.href, kind: 'link', text: l.text })),
    ...[...document.querySelectorAll('iframe[src]')].map(f => ({ url: abs(f.getAttribute('src')), kind: 'iframe' })),
    ...[...document.querySelectorAll('script[src]')].map(s => ({ url: abs(s.getAttribute('src')), kind: 'script' })),
    ...[...document.querySelectorAll('form[action]')].map(f => ({ url: abs(f.getAttribute('action')), kind: 'form' })),
  ];
  const platformHits = [];
  for (const u of urls) for (const [name, re] of Object.entries(PL)) if (re.test(u.url)) platformHits.push({ platform: name, kind: u.kind, url: u.url.slice(0, 200), text: u.text || '' });
  // Also inline scripts that load widgets (e.g. Mindbody healcode, Glofox embeds)
  const inline = [...document.querySelectorAll('script:not([src])')].map(s => s.textContent).join('\n').slice(0, 400000);
  for (const [name, re] of Object.entries(PL)) if (re.test(inline)) platformHits.push({ platform: name, kind: 'inline-script', url: '', text: '' });

  const bookingRe = /\b(book(ing)?s?|book now|book online|book a (class|session|consult\w*|treatment|appointment)|appointments?|reserve)\b/i;
  const signupRe = /\b(join( now| online| today| us)?|sign ?up|start (your )?(free )?trial|free trial|register( now)?|become a member|get started)\b/i;
  const ctas = [
    ...links.filter(l => l.visible).map(l => ({ text: l.text, href: l.href })),
    ...buttons.map(t => ({ text: t, href: '' })),
  ];
  const bookingCtas = ctas.filter(c => bookingRe.test(c.text) || /\/(book|booking|appointments?)\b/i.test(c.href)).slice(0, 10);
  const signupCtas = ctas.filter(c => signupRe.test(c.text) || /\/(join|signup|sign-up|register|trial)\b/i.test(c.href)).slice(0, 10);

  // Forms that look like real sign-up / booking forms (not newsletter-only)
  const forms = [...document.querySelectorAll('form')].filter(vis).map(f => ({
    fields: [...f.querySelectorAll('input,select,textarea')].filter(i => !['hidden', 'submit'].includes(i.type)).map(i => (i.name || i.type || '').toLowerCase()),
    text: txt(f).slice(0, 160),
  }));

  // Headings / nav text for offerings and timetable
  const headings = [...document.querySelectorAll('h1,h2,h3,h4')].filter(vis).map(txt).filter(Boolean);
  const navText = [...document.querySelectorAll('nav a, header a, [class*=menu] a, [class*=nav] a')].map(txt).filter(Boolean);
  const pool = [...navText, ...headings, ...[...document.querySelectorAll('nav li, [class*=menu] li')].map(txt)];
  const offerings = [];
  for (const t of pool) {
    const clean = t.replace(/[|•›»]+/g, ' ').replace(/\s+/g, ' ').trim();
    if (clean.length < 3 || clean.length > 40 || clean.split(' ').length > 5) continue;
    if (OFF.test(clean) && !offerings.some(o => o.toLowerCase() === clean.toLowerCase())) offerings.push(clean);
  }

  const body = document.body ? document.body.innerText : '';
  const dayHits = (body.match(/\b(mon(day)?|tue(s|sday)?|wed(nesday)?|thu(rs|rsday)?|fri(day)?|sat(urday)?|sun(day)?)\b/gi) || []).map(d => d.slice(0, 3).toLowerCase());
  const days = new Set(dayHits);
  const timeHits = (body.match(/\b([01]?\d|2[0-3])[:h.][0-5]\d\s?(am|pm)?\b|\b(1[0-2]|[1-9])\s?(am|pm)\b/gi) || []).length;
  const timetableWords = [...pool, ...links.map(l => l.text)].filter(t => /time ?table|class schedule|schedule|class times/i.test(t)).slice(0, 5);
  const pricePat = /(\bR\s?\d[\d\s,.]{1,8}\b|\$\s?\d[\d,.]{1,7}\b|\b\d{2,5}\s?(zar|rand)\b)/gi;
  const prices = [...new Set((body.match(pricePat) || []).map(s => s.trim()))].slice(0, 8);
  const priceOnRequest = /(contact|enquire|ask|call|whatsapp)( us)? (for|about) (our )?(prices|pricing|rates|fees)|pricing on request|price on request/i.test(body);

  // Logo: header/nav image (prefer "logo" in src/alt/class), inline SVG, then og:image
  let logo = null;
  const scopes = [...document.querySelectorAll('header, nav, [class*=header], [id*=header], [class*=logo], [id*=logo]')];
  const imgs = scopes.flatMap(s => [...s.querySelectorAll('img')]).filter(vis);
  const score = i => (/logo/i.test(i.src + i.alt + i.className + (i.parentElement?.className || '')) ? 2 : 0) + (i.getBoundingClientRect().top < 200 ? 1 : 0);
  imgs.sort((x, y) => score(y) - score(x));
  if (imgs[0]) logo = { src: abs(imgs[0].currentSrc || imgs[0].src), source: 'header-img', alt: imgs[0].alt || '' };
  if (!logo) {
    const svg = scopes.flatMap(s => [...s.querySelectorAll('svg')]).find(s => vis(s) && s.getBoundingClientRect().width > 40);
    if (svg) { const c = svg.cloneNode(true); if (!c.getAttribute('xmlns')) c.setAttribute('xmlns', 'http://www.w3.org/2000/svg'); logo = { src: c.outerHTML, source: 'header-svg', alt: '' }; }
  }
  const ogImage = meta('og:image') ? abs(meta('og:image')) : '';
  if (!logo && ogImage) logo = { src: ogImage, source: 'og:image', alt: '' };

  // Brand colour: area-weighted non-neutral colours from buttons, links, header and headings
  const parse = c => { const m = c.match(/rgba?\(([^)]+)\)/); if (!m) return null; const [r, g, b, a = 1] = m[1].split(/[,\s/]+/).filter(Boolean).map(Number); return { r, g, b, a }; };
  const hsl = ({ r, g, b }) => { r /= 255; g /= 255; b /= 255; const mx = Math.max(r, g, b), mn = Math.min(r, g, b); const l = (mx + mn) / 2; const d = mx - mn; const s = d === 0 ? 0 : d / (1 - Math.abs(2 * l - 1)); return { s, l }; };
  const buckets = {};
  const add = (c, w, where) => {
    const p = parse(c); if (!p || p.a < 0.6) return;
    const { s, l } = hsl(p); if (s < 0.2 || l < 0.12 || l > 0.9) return;
    if (p.r === 0 && p.g === 0 && (p.b === 238 || p.b === 255)) return; // browser default link blue
    const q = v => Math.round(v / 12) * 12;
    const k = [q(p.r), q(p.g), q(p.b)].join(',');
    (buckets[k] ||= { w: 0, rgb: [p.r, p.g, p.b], where: new Set() }).w += w; buckets[k].where.add(where);
  };
  const els = [...document.querySelectorAll('a, button, [class*=btn], [class*=button], header, nav, h1, h2, h3, [class*=hero], [class*=banner], footer')].filter(vis).slice(0, 600);
  for (const el of els) {
    const s = getComputedStyle(el); const r = el.getBoundingClientRect();
    const area = Math.min(r.width * r.height, 60000) / 1000;
    const tag = el.tagName.toLowerCase();
    add(s.backgroundColor, area * (/btn|button/i.test(el.className) || tag === 'button' ? 3 : 1), tag + '-bg');
    add(s.color, Math.min(txt(el).length, 60) * (/^h\d$/.test(tag) ? 0.8 : 0.4), tag + '-text');
    add(s.borderTopColor, s.borderTopWidth !== '0px' ? r.width / 100 : 0, tag + '-border');
  }
  const ranked = Object.values(buckets).sort((a, b) => b.w - a.w).slice(0, 5)
    .map(b => ({ hex: '#' + b.rgb.map(v => v.toString(16).padStart(2, '0')).join(''), weight: Math.round(b.w), where: [...b.where].slice(0, 4) }));
  const themeColor = meta('theme-color');

  const footer = document.querySelector('footer') || document.body;
  const years = ((footer.innerText || '').match(/(?:©|&copy;|copyright)\s*(?:\d{4}\s*[-–]\s*)?(\d{4})/gi) || [])
    .map(s => +s.match(/(\d{4})(?!.*\d{4})/)[1]);

  return {
    title, siteName, ogImage, logo, links: links.slice(0, 400),
    platformHits, bookingCtas, signupCtas, forms,
    offerings, headings: headings.slice(0, 30), navText: navText.slice(0, 40),
    timetable: { words: timetableWords, dayCount: days.size, timeHits },
    prices, priceOnRequest,
    colours: ranked, themeColor,
    viewportMeta: !!document.querySelector('meta[name=viewport][content*="width=device-width"]'),
    overflowPx: Math.max(0, document.documentElement.scrollWidth - innerWidth),
    footerYear: years.length ? Math.max(...years) : null,
    whatsapp: links.some(l => /wa\.me|whatsapp\.com|api\.whatsapp/i.test(l.href)),
  };
}

function buildData({ job, home, extra, timing, finalUrl, logoFile, ogFile, frames }) {
  const all = [home, ...extra];
  const now = new Date();
  const host = new URL(finalUrl).hostname.replace(/^www\./, '');

  // Name: CSV/CLI name, then og:site_name, then the most brand-like part of <title>
  const fromTitle = (home.title.split(/\s+[|–—•:-]\s+/).sort((a, b) => a.length - b.length)[0] || '').trim();
  const name = job.name || home.siteName || fromTitle || host;

  const platforms = [...new Set(all.flatMap(p => p.platformHits.map(h => h.platform)))];
  const bookingCtas = all.flatMap(p => p.bookingCtas.map(c => ({ ...c, page: p.page })));
  const signupCtas = all.flatMap(p => p.signupCtas.map(c => ({ ...c, page: p.page })));
  const offline = c => /^(tel:|mailto:)|wa\.me|whatsapp/i.test(c.href);

  const booking = {
    found: platforms.length > 0 || bookingCtas.some(c => !offline(c)),
    platforms,
    evidence: [
      ...all.flatMap(p => p.platformHits.map(h => `${h.platform} ${h.kind} on ${p.page}${h.url ? ': ' + h.url : ''}`)),
      ...bookingCtas.slice(0, 5).map(c => `"${c.text}" -> ${c.href || '(button)'} on ${c.page}`),
    ].slice(0, 12),
    onlyByPhoneOrWhatsapp: !platforms.length && bookingCtas.length > 0 && bookingCtas.every(offline),
  };

  const data = {
    name, slug: job.slug, url: job.url, finalUrl, vertical: job.vertical, country: job.country,
    capturedAt: now.toISOString(),
    https: finalUrl.startsWith('https:'),
    loadTimeMs: timing?.load ?? null,
    domContentLoadedMs: timing?.dcl ?? null,
    loadTimeNote: 'Measured once from the capture machine on an emulated iPhone 14, not from the prospect\'s city.',
    logo: logoFile ? { file: logoFile, source: home.logo.source, src: home.logo.source === 'header-svg' ? '(inline svg)' : home.logo.src } : null,
    ogImage: ogFile ? { file: ogFile, src: home.ogImage } : null,
    brandColour: home.colours[0] ? { hex: home.colours[0].hex, source: 'computed styles', candidates: home.colours }
      : home.themeColor ? { hex: home.themeColor, source: 'meta theme-color', candidates: [] } : null,
    offerings: [...new Set(all.flatMap(p => p.offerings))].slice(0, 12),
    booking,
    mobile: { viewportMeta: home.viewportMeta, overflowPx: home.overflowPx },
    footerYear: home.footerYear,
    whatsapp: all.some(p => p.whatsapp),
    pagesChecked: all.map(p => p.page),
    media: { screenshot: 'screenshot.png', beforeVideo: 'before.webm', beforeFrames: frames },
  };

  if (job.vertical === 'gym') {
    const gymPlatforms = platforms.filter(p => GYM_PLATFORMS.includes(p));
    const ttPages = all.filter(p => p.timetable.words.length || (p.timetable.dayCount >= 3 && p.timetable.timeHits >= 4));
    const ttPlatform = all.some(p => p.platformHits.some(h => h.kind !== 'link' && GYM_PLATFORMS.includes(h.platform)));
    const signupOnline = signupCtas.filter(c => !offline(c));
    const priced = all.filter(p => p.prices.length);
    data.gym = {
      timetable: {
        found: ttPages.length > 0 || ttPlatform,
        evidence: [
          ...ttPages.map(p => `${p.page}: ${p.timetable.words.length ? 'mentions "' + p.timetable.words[0] + '"' : ''} ${p.timetable.dayCount} weekdays, ${p.timetable.timeHits} times`.replace(/\s+/g, ' ')),
          ...(ttPlatform ? ['embedded booking-platform widget'] : []),
        ],
      },
      signup: {
        found: gymPlatforms.length > 0 || signupOnline.length > 0,
        platforms: gymPlatforms,
        evidence: [...signupCtas.slice(0, 5).map(c => `"${c.text}" -> ${c.href || '(button)'} on ${c.page}`), ...gymPlatforms.map(p => `${p} detected`)],
        onlyByPhoneOrWhatsapp: !gymPlatforms.length && signupCtas.length > 0 && signupOnline.length === 0,
      },
      pricing: {
        found: priced.length > 0,
        onRequest: all.some(p => p.priceOnRequest),
        evidence: priced.map(p => `${p.page}: ${p.prices.slice(0, 4).join(', ')}`),
      },
    };
  }

  data.callouts = callouts(data, now.getFullYear());
  return data;
}

// Callouts in priority order. Every entry names the fact it came from.
function callouts(d, year) {
  const out = [];
  const push = (text, fact, evidence) => out.push({ text, fact, evidence });
  const checked = `${d.pagesChecked.length} page${d.pagesChecked.length > 1 ? 's' : ''} checked: ${d.pagesChecked.join(', ')}`;
  if (d.vertical === 'gym') {
    const g = d.gym;
    if (!g.signup.found) push(g.signup.onlyByPhoneOrWhatsapp ? 'Joining is by phone or WhatsApp only' : 'No online sign-up', 'gym.signup.found=false', checked);
    if (!g.timetable.found) push('No class timetable', 'gym.timetable.found=false', checked);
    if (!g.pricing.found) push(g.pricing.onRequest ? 'Pricing only on request' : 'Pricing hidden', 'gym.pricing.found=false', checked);
  } else {
    if (!d.booking.found) push(d.booking.onlyByPhoneOrWhatsapp ? 'Booking is by phone or WhatsApp only' : 'No online booking', 'booking.found=false', checked);
  }
  if (d.mobile.overflowPx > 8) push('Page is wider than a phone screen', 'mobile.overflowPx', `${d.mobile.overflowPx}px horizontal overflow at 390px`);
  else if (!d.mobile.viewportMeta) push('Not set up for mobile', 'mobile.viewportMeta=false', 'no width=device-width viewport tag');
  if (!d.https) push('Not secure (no HTTPS)', 'https=false', d.finalUrl);
  if (d.loadTimeMs && d.loadTimeMs > 4000) push(`Takes ${(d.loadTimeMs / 1000).toFixed(1)}s to load on mobile`, 'loadTimeMs', `${d.loadTimeMs}ms (${d.loadTimeNote})`);
  if (d.footerYear && d.footerYear <= year - 2) push(`Footer still says © ${d.footerYear}`, 'footerYear', `footer copyright ${d.footerYear}`);
  return out;
}
