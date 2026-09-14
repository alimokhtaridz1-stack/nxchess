import { mkdir, writeFile, cp } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { pages, document, notFound, escape } from '../src/pages.mjs';
import { site } from '../src/content.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const destination = resolve(root, 'dist');
const configuredOrigin = process.env.SITE_ORIGIN || '';
let origin = '';
if (configuredOrigin) {
  const url = new URL(configuredOrigin);
  if (!['https:', 'http:'].includes(url.protocol) || url.pathname !== '/' || url.username || url.password || url.search || url.hash) throw new Error('SITE_ORIGIN must be a plain http(s) origin.');
  origin = url.origin;
}
if (!site.preview && (!site.contentApproved || !site.contactConfirmed || !site.coaches.length || !origin)) {
  throw new Error('Release requires approved content, confirmed contact details, real coach profiles, and SITE_ORIGIN. Keep preview enabled until those are ready.');
}
await mkdir(destination, { recursive: true });
await cp(resolve(root, 'public'), destination, { recursive: true });
for (const page of pages) {
  const path = resolve(destination, '.' + page.path, 'index.html');
  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, document(page, origin));
}
await writeFile(resolve(destination, '404.html'), document(notFound, origin));
await writeFile(resolve(destination, 'robots.txt'), site.preview ? 'User-agent: *\nDisallow: /\n' : `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`);
await writeFile(resolve(destination, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${origin ? pages.map(page => `<url><loc>${escape(origin + page.path)}</loc></url>`).join('') : ''}</urlset>`);
console.log(`Built ${pages.length} pages + 404 to dist. Mode: ${site.preview ? 'review preview (noindex)' : 'release'}.`);
