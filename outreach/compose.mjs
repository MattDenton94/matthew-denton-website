// compose.mjs: turn a captured prospect into a 1080x1920, 15s, 30fps outreach video.
//
//   node outreach/compose.mjs --dir outreach/prospects/gyms/2-0 --out outreach/out/gyms/2-0.mp4
//
// Timeline: 0-3s the recorded scroll of their site, 3-6s up to 3 callouts from
// data.json, 6-11s wipe into the "after" template scrolling, 11-15s the CTA.
import fs from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { chromium, REPO, ROOT, args, serve } from './lib.mjs';

const W = 1080, H = 1920, FPS = 30, SECONDS = 15;

// Copy per vertical and country. SA uses British spelling.
const COPY = {
  gym: {
    template: 'templates/gym-after.html',
    cta: {
      za: 'I build gym websites with <em>online sign-ups and class booking</em> built in',
      us: 'I build gym websites with <em>online sign-ups and class booking</em> built in',
    },
  },
  clinic: {
    template: 'templates/clinic-after.html',
    cta: {
      za: 'I build clinic websites with <em>online booking</em> built in',
      us: 'I build clinic websites with <em>online booking</em> built in',
    },
  },
};
const LINE = 'Matthew Denton <span style="opacity:.5">|</span> <b>matthewdenton.co.za</b>';

const isMain = import.meta.url === `file://${process.argv[1]}`;
if (isMain) {
  const a = args();
  if (!a.dir) { console.error('usage: compose.mjs --dir <prospect dir> [--out file.mp4] [--keep-frames dir]'); process.exit(1); }
  const dir = path.resolve(REPO, a.dir);
  const out = path.resolve(REPO, a.out || path.join('outreach/out', path.basename(path.dirname(dir)), path.basename(dir) + '.mp4'));
  await compose({ dir, out, stills: a.stills });
}

export async function compose({ dir, out, stills, browser: shared }) {
  const data = JSON.parse(fs.readFileSync(path.join(dir, 'data.json'), 'utf8'));
  const v = COPY[data.vertical];
  if (!v) throw new Error(`unknown vertical ${data.vertical}`);
  const tpl = path.join(ROOT, v.template);
  if (!fs.existsSync(tpl)) throw new Error(`missing template ${path.relative(REPO, tpl)}`);
  const country = data.country === 'us' ? 'us' : 'za';
  const rel = p => '/' + path.relative(REPO, p).split(path.sep).join('/');
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  const frameDir = path.join(dir, 'before');
  const beforeFrames = fs.existsSync(frameDir) ? fs.readdirSync(frameDir).filter(f => f.endsWith('.jpg')).sort().map(f => rel(path.join(frameDir, f))) : [];
  if (!beforeFrames.length) throw new Error('no before frames; run capture.mjs first');

  const callouts = (data.callouts || []).slice(0, 3).map(c => esc(c.text));
  const cfg = {
    beforeFrames,
    afterUrl: `${rel(tpl)}?data=${encodeURIComponent(rel(path.join(dir, 'data.json')))}`,
    callouts,
    captions: {
      before: `Hi ${esc(data.name)}, this is <em>your website</em> right now`,
      callouts: callouts.length ? 'A few things I noticed' : '',
      after: `Here's what it <em>could</em> look like`,
    },
    labels: { before: 'Now', after: 'Could be' },
    cta: { headline: v.cta[country], line: LINE },
    wordmark: fs.readFileSync(path.join(REPO, 'src/assets/wordmark.svg'), 'utf8'),
  };

  const srv = await serve(REPO);
  const browser = shared || await chromium.launch();
  const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 1 });
  page.on('pageerror', e => console.error('stage error:', e.message));
  await page.goto(`${srv.url}/outreach/templates/compose-stage.html`);
  const info = await page.evaluate(c => window.setup(c), cfg);

  fs.mkdirSync(path.dirname(out), { recursive: true });
  const ff = spawn('ffmpeg', ['-y', '-v', 'error', '-f', 'image2pipe', '-framerate', String(FPS), '-c:v', 'mjpeg', '-i', '-',
    '-c:v', 'libx264', '-preset', 'medium', '-crf', '19', '-pix_fmt', 'yuv420p', '-r', String(FPS), '-movflags', '+faststart', out],
    { stdio: ['pipe', 'inherit', 'inherit'] });
  const done = new Promise((res, rej) => ff.on('close', code => code === 0 ? res() : rej(new Error('ffmpeg exited ' + code))));

  const stillAt = new Set((stills ? String(stills).split(',') : []).map(Number));
  const total = FPS * SECONDS;
  for (let i = 0; i < total; i++) {
    const t = i / FPS;
    await page.evaluate(t => window.render(t), t);
    const buf = await page.screenshot({ type: 'jpeg', quality: 92 });
    if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once('drain', r));
    if (stillAt.has(i)) fs.writeFileSync(out.replace(/\.mp4$/, `.f${String(i).padStart(3, '0')}.jpg`), buf);
  }
  ff.stdin.end();
  await done;
  await page.close();
  if (!shared) await browser.close();
  srv.close();
  console.log(`✓ ${path.relative(REPO, out)} (${data.name}; ${callouts.length} callouts; after page scroll ${info.afterMax}px)`);
  return out;
}
