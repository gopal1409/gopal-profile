import { createReadStream, existsSync, statSync } from 'node:fs'
import { createServer } from 'node:http'
import { extname, join, normalize, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const distDir = resolve(__dirname, 'dist')
const port = Number(process.env.PORT || 4173)

const contentTypes = {
  '.css': 'text/css; charset=utf-8',
  '.gif': 'image/gif',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.map': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2'
}

function sendFile(res, filePath) {
  const type = contentTypes[extname(filePath)] || 'application/octet-stream'
  res.writeHead(200, {
    'Content-Type': type,
    'Cache-Control': filePath.includes(`${join('dist', 'assets')}`)
      ? 'public, max-age=31536000, immutable'
      : 'public, max-age=0, must-revalidate'
  })
  createReadStream(filePath).pipe(res)
}

function resolveRequestPath(url = '/') {
  const pathname = decodeURIComponent(new URL(url, 'http://localhost').pathname)
  const normalizedPath = normalize(pathname).replace(/^(\.\.[/\\])+/, '')
  const requestedPath = resolve(distDir, `.${normalizedPath}`)

  if (!requestedPath.startsWith(distDir)) {
    return null
  }

  if (existsSync(requestedPath) && statSync(requestedPath).isFile()) {
    return requestedPath
  }

  return resolve(distDir, 'index.html')
}

const server = createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
    res.end('healthy\n')
    return
  }

  const filePath = resolveRequestPath(req.url)

  if (!filePath || !existsSync(filePath)) {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' })
    res.end('Not found')
    return
  }

  sendFile(res, filePath)
})

server.listen(port, '0.0.0.0', () => {
  console.log(`Serving dist on port ${port}`)
})
