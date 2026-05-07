import { execSync } from 'node:child_process';
import { cp, mkdir, writeFile, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { build } from 'esbuild';

// Always run the Vite build first
execSync('npx vite build', { stdio: 'inherit' });

if (!process.env.VERCEL) process.exit(0);

// --- Vercel Build Output API ---
// Produces .vercel/output/ so Vercel serves the site correctly.
// dist/server/server.js is a fetch-handler (WinterCG), not a Node.js http
// server, so we bundle it together with a thin (req,res) adapter and all npm
// dependencies into a self-contained ESM function via esbuild.

const out = '.vercel/output';
if (existsSync(out)) await rm(out, { recursive: true });
await mkdir(`${out}/static`, { recursive: true });
await mkdir(`${out}/functions/ssr.func`, { recursive: true });

// Static client assets (served directly by Vercel CDN)
await cp('dist/client', `${out}/static`, { recursive: true });

// Thin adapter: converts Node.js (req,res) to the fetch-handler API
const adapterCode = `import { Readable } from 'node:stream';
import server from './server.js';

export default async function handler(req, res) {
  const protocol = req.headers['x-forwarded-proto'] ?? 'https';
  const host = req.headers['x-forwarded-host'] ?? req.headers.host;
  const url = \`\${protocol}://\${host}\${req.url}\`;

  const headers = new Headers();
  for (const [key, value] of Object.entries(req.headers)) {
    if (value == null) continue;
    Array.isArray(value)
      ? value.forEach(v => headers.append(key, v))
      : headers.set(key, value);
  }

  const hasBody = !['GET', 'HEAD'].includes((req.method ?? '').toUpperCase());
  const request = new Request(url, {
    method: req.method,
    headers,
    ...(hasBody ? { body: Readable.toWeb(req), duplex: 'half' } : {}),
  });

  const response = await server.fetch(request);

  res.statusCode = response.status;
  response.headers.forEach((value, key) => {
    if (key.toLowerCase() !== 'transfer-encoding') res.setHeader(key, value);
  });

  if (response.body) {
    Readable.fromWeb(response.body).pipe(res);
  } else {
    res.end();
  }
}
`;

await writeFile('dist/server/vercel-adapter.js', adapterCode);

// Bundle adapter + server.js + all npm deps into self-contained ESM chunks.
// Dynamic imports (route code-splitting) are handled by esbuild splitting:
// it rewrites the import paths to point at the co-located chunk files.
await build({
  entryPoints: { index: 'dist/server/vercel-adapter.js' },
  outdir: `${out}/functions/ssr.func`,
  bundle: true,
  splitting: true,
  platform: 'node',
  format: 'esm',
  external: ['node:*'],
  // react-dom (CJS) uses bare require("util") etc. inside an ESM bundle.
  // esbuild's __require shim checks `typeof require !== "undefined"`, which is
  // always false in ESM. Injecting createRequire makes it truthy so CJS
  // modules can resolve Node built-ins without crashing.
  banner: {
    js: `import { createRequire as __cjsRequire } from 'module';\nconst require = __cjsRequire(import.meta.url);`,
  },
  logLevel: 'warning',
});

// Vercel function metadata
await writeFile(`${out}/functions/ssr.func/.vc-config.json`, JSON.stringify({
  runtime: 'nodejs20.x',
  handler: 'index.js',
  launcherType: 'Nodejs',
}, null, 2));

// Routing: static assets served from CDN, everything else hits the SSR function
await writeFile(`${out}/config.json`, JSON.stringify({
  version: 3,
  routes: [
    {
      src: '^/assets/(.+)$',
      headers: { 'Cache-Control': 'public, max-age=31536000, immutable' },
      continue: true,
    },
    { handle: 'filesystem' },
    { src: '/(.*)', dest: '/ssr' },
  ],
}, null, 2));

console.log('Vercel output ready.');
