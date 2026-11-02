// render.mjs: capture + compose in one go.
//
// Batch every row of the prospect CSVs (clinics):
//   node outreach/render.mjs --csv outreach/prospects-za.csv --csv outreach/prospects-us.csv
// Only the first N rows of each (for a test run):
//   node outreach/render.mjs --csv outreach/prospects-za.csv --limit 1
// One-off prospect (e.g. a gym):
//   node outreach/render.mjs --url https://2-0.co.za --vertical gym --country za --slug 2-0
//
// Output: outreach/out/<za|us|gyms>/<slug>.mp4
import path from 'node:path';
import { chromium, REPO, readCsv, slugify } from './lib.mjs';
import { capture } from './capture.mjs';
import { compose } from './compose.mjs';

const argv = process.argv.slice(2);
const opt = k => { const i = argv.indexOf('--' + k); return i >= 0 ? argv[i + 1] : undefined; };
const csvs = argv.flatMap((a, i) => a === '--csv' ? [argv[i + 1]] : []);
const limit = opt('limit') ? +opt('limit') : Infinity;

const jobs = [];
for (const csv of csvs) {
  const country = /-us\b/.test(csv) ? 'us' : 'za';
  for (const r of readCsv(path.resolve(REPO, csv)).filter(r => r.url).slice(0, limit)) {
    const slug = slugify(r.name || r.url);
    jobs.push({ url: r.url, name: r.name, vertical: opt('vertical') || 'clinic', country, slug, group: country });
  }
}
if (opt('url')) {
  const vertical = opt('vertical') || 'clinic';
  const country = opt('country') || 'za';
  jobs.push({ url: opt('url'), name: opt('name'), vertical, country, slug: opt('slug') || slugify(opt('url')), group: vertical === 'gym' ? 'gyms' : country });
}
if (!jobs.length) { console.error('nothing to render: pass --csv <file> or --url <url>'); process.exit(1); }

const browser = await chromium.launch();
const results = [];
for (const j of jobs) {
  const dir = path.join(REPO, 'outreach/prospects', j.group, j.slug);
  const out = path.join(REPO, 'outreach/out', j.group, j.slug + '.mp4');
  try {
    await capture(browser, { ...j, dir });
    await compose({ dir, out, browser });
    results.push({ slug: j.slug, ok: true });
  } catch (e) {
    console.error(`✗ ${j.url}: ${e.message}`);
    results.push({ slug: j.slug, ok: false, error: e.message });
  }
}
await browser.close();
const bad = results.filter(r => !r.ok);
console.log(`\n${results.length - bad.length}/${results.length} rendered${bad.length ? '; failed: ' + bad.map(b => b.slug).join(', ') : ''}`);
process.exit(bad.length === results.length ? 1 : 0);
