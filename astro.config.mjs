import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://matthewdenton.co.za',
  trailingSlash: 'ignore',
  redirects: { '/gyms': '/', '/work/nectra': '/work', '/services': '/#services', '/about': '/#about' },
});
