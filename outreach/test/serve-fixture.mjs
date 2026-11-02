// Serves the local gym fixture for smoke tests: node outreach/test/serve-fixture.mjs
import path from 'node:path';
import { serve, ROOT } from '../lib.mjs';
const s = await serve(path.join(ROOT, 'test/fixture-gym'));
console.log(s.url);
