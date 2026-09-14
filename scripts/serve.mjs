import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, dirname, extname, relative, isAbsolute, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../dist');
const port = Number(process.env.PORT || 4173);
const host = process.env.HOST || '127.0.0.1';
const mime = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.svg': 'image/svg+xml', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.txt': 'text/plain; charset=utf-8', '.xml': 'application/xml; charset=utf-8' };
const server = createServer(async (request, response) => {
  if (!['GET', 'HEAD'].includes(request.method)) { response.writeHead(405, { Allow: 'GET, HEAD' }); response.end(); return; }
  try {
    const path = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    if (path.includes('\0') || path.includes('\\')) { response.writeHead(400); response.end(); return; }
    let target = resolve(root, '.' + path);
    const rel = relative(root, target);
    if (rel === '..' || rel.startsWith('..' + sep) || isAbsolute(rel)) { response.writeHead(403); response.end(); return; }
    let status = 200;
    try { if ((await stat(target)).isDirectory()) target = resolve(target, 'index.html'); }
    catch { target = resolve(root, '404.html'); status = 404; }
    const body = await readFile(target);
    response.writeHead(status, { 'Content-Type': mime[extname(target)] || 'application/octet-stream', 'X-Content-Type-Options': 'nosniff', 'Referrer-Policy': 'strict-origin-when-cross-origin', 'Cache-Control': 'no-store' });
    response.end(request.method === 'HEAD' ? undefined : body);
  } catch { response.writeHead(400); response.end('Bad request'); }
});
server.listen(port, host, () => console.log(`NX Chess preview: http://${host}:${port}`));
