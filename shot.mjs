import { chromium } from 'playwright';
const pages = process.argv.slice(2);
const b = await chromium.launch();
for (const spec of pages) {
  const [path, w, name, theme] = spec.split(',');
  const p = await b.newPage({ viewport: { width: +w, height: 900 }, colorScheme: theme || 'light' });
  await p.goto('http://localhost:4321' + path, { waitUntil: 'networkidle' });
  await p.waitForTimeout(1200);
  const sw = await p.evaluate(() => document.documentElement.scrollWidth);
  console.log(name, 'scrollWidth', sw, 'vs', w);
  await p.screenshot({ path: `/tmp/${name}.png`, fullPage: true });
}
await b.close();
