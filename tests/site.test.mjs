import test from 'node:test';
import assert from 'node:assert/strict';
import { pages, document, escape } from '../src/pages.mjs';
import { site } from '../src/content.mjs';
import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const html = new Map(pages.map(page => [page.path, document(page)]));
test('seven public pages are readable without JavaScript, with unique titles and one primary heading', () => {
  assert.equal(pages.length, 7);
  assert.equal(new Set(pages.map(p => p.title)).size, 7);
  for (const [path, markup] of html) {
    assert.equal((markup.match(/<h1[ >]/g) || []).length, 1, path);
    assert.ok(markup.includes('<main id="main"'));
    assert.ok(markup.includes(`href="${path}" aria-current="page"`));
    assert.ok(markup.includes('noindex,nofollow'));
    assert.ok(!markup.includes('<form'));
  }
});
test('all internal links and fragments resolve to real routes and sections', () => {
  for (const [path, markup] of html) {
    for (const match of markup.matchAll(/href="([^"]+)"/g)) {
      const href = match[1].replaceAll('&amp;', '&');
      if (!href.startsWith('/') && !href.startsWith('#')) continue;
      const url = new URL(href, 'https://test.invalid' + path);
      if (['/styles.css', '/favicon.svg'].includes(url.pathname)) continue;
      assert.ok(html.has(url.pathname), `${path} links to missing ${url.pathname}`);
      if (url.hash) assert.ok(html.get(url.pathname).includes(`id="${url.hash.slice(1)}"`), `Missing ${url.hash} in ${url.pathname}`);
    }
  }
});
test('contact uses the confirmed UAE number, without a fabricated endpoint', () => {
  assert.equal(site.whatsapp, '971557678025');
  assert.equal(site.contactConfirmed, true);
  const contact = html.get('/contact/');
  assert.ok(contact.includes('https://wa.me/971557678025?text='));
  assert.ok(contact.includes('tel:+971557678025'));
  assert.ok(!contact.includes('mailto:'));
});
test('curriculum is visible and unverified services are labeled', () => {
  assert.equal((html.get('/curriculum/').match(/class="curriculum-stage"/g) || []).length, 5);
  assert.ok(html.get('/programs/').includes('not confirmed class offerings'));
  assert.ok(html.get('/coaches/').includes('Introductions'));
});
test('HTML escaping handles owner-entered text', () => {
  assert.equal(escape('<img onerror="x">&'), '&lt;img onerror=&quot;x&quot;&gt;&amp;');
});
test('generated build contains the pages, static assets, and preview robots rules', () => {
  const dist = fileURLToPath(new URL('../dist/', import.meta.url));
  for (const page of pages) assert.ok(existsSync(dist + page.path + 'index.html'));
  for (const asset of ['styles.css', 'site.js', 'favicon.svg', '404.html', 'sitemap.xml']) assert.ok(existsSync(dist + asset));
  assert.match(readFileSync(dist + 'robots.txt', 'utf8'), /Disallow: \//);
});
