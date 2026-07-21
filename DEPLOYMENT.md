# Deployment Guide

Complete guide for deploying the Gopal Das Portfolio website to various platforms.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Environment Variables](#environment-variables)
3. [Docker Deployment](#docker-deployment)
4. [GitHub Pages](#github-pages)
5. [Netlify](#netlify)
6. [Vercel](#vercel)
7. [AWS](#aws)
8. [VPS / Cloud Server](#vps--cloud-server)
9. [SSL / HTTPS](#ssl--https)
10. [Domain Configuration](#domain-configuration)
11. [Monitoring](#monitoring)
12. [Troubleshooting](#troubleshooting)

## Prerequisites

- Node.js >= 20.0.0
- npm >= 10.0.0
- Docker & Docker Compose (for containerized deployment)
- Git

## Environment Variables

Create a `.env` file in the project root:

```env
# EmailJS Configuration (required for contact form)
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

# Optional: Analytics
# VITE_GA_TRACKING_ID=G-XXXXXXXXXX
```

For production builds, set these as environment variables or GitHub Secrets.

## Docker Deployment

### Development

```bash
# Start with docker-compose (includes hot reload)
npm run docker:compose

# Or manually
docker-compose up --build
```

Access at `http://localhost:3000` (dev server) or `http://localhost:80` (nginx).

### Production

```bash
# Production with docker-compose
npm run docker:compose:prod

# Or manually
docker-compose -f docker-compose.prod.yml up -d --build
```

Access at `http://localhost`.

### Manual Docker Commands

```bash
# Build image
docker build -t gopal-portfolio:latest .

# Run container
docker run -d \
  --name gopal-portfolio \
  -p 80:8080 \
  --restart unless-stopped \
  gopal-portfolio:latest

# View logs
docker logs -f gopal-portfolio

# Stop and remove
docker stop gopal-portfolio
docker rm gopal-portfolio
```

### Docker Image Optimization

The Dockerfile uses multi-stage builds:
1. **Builder stage**: Installs dependencies and builds the app
2. **Production stage**: Serves static files via Nginx (Alpine Linux)

Final image size: ~25-30MB (Alpine + Nginx + static files)

## GitHub Pages

Already configured in `.github/workflows/deploy.yml`.

1. Push code to GitHub
2. Go to **Settings > Pages**
3. Select "GitHub Actions" as source
4. The workflow will automatically deploy on push to `main`

**URL**: `https://yourusername.github.io/gopal-portfolio`

### Custom Domain

1. Add your domain in **Settings > Pages > Custom domain**
2. Create a `CNAME` file in the `public/` directory with your domain
3. Configure DNS (see [Domain Configuration](#domain-configuration))

## Netlify

### Method 1: Git Integration

1. Connect your GitHub repo to Netlify
2. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Add environment variables in Site settings
4. Deploy!

### Method 2: CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod --dir=dist
```

### Netlify Configuration (`netlify.toml`)

Create `netlify.toml` in project root:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "20"
```

## Vercel

### Method 1: Git Integration

1. Import your GitHub repo on Vercel
2. Framework preset: **Vite**
3. Build command: `npm run build`
4. Output directory: `dist`
5. Add environment variables
6. Deploy!

### Method 2: CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

### Vercel Configuration (`vercel.json`)

Create `vercel.json` in project root:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ],
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    }
  ]
}
```

## AWS

### Option 1: S3 + CloudFront (Recommended)

```bash
# Build
npm run build

# Sync to S3
aws s3 sync dist/ s3://your-bucket-name --delete

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

### Option 2: ECS / Fargate

Use the Docker image with Amazon ECS:

```bash
# Build and push to ECR
aws ecr get-login-password | docker login --username AWS --password-stdin YOUR_ACCOUNT.dkr.ecr.region.amazonaws.com

docker build -t gopal-portfolio .
docker tag gopal-portfolio:latest YOUR_ACCOUNT.dkr.ecr.region.amazonaws.com/gopal-portfolio:latest
docker push YOUR_ACCOUNT.dkr.ecr.region.amazonaws.com/gopal-portfolio:latest
```

### Option 3: Elastic Beanstalk

```bash
# Create Dockerrun file
echo '{"AWSEBDockerrunVersion":"1","Image":{"Name":"gopal-portfolio"},"Ports":[{"ContainerPort":"8080"}]}' > Dockerrun.aws.json

# Deploy
eb init -p docker gopal-portfolio
eb create gopal-portfolio-env
eb open
```

## VPS / Cloud Server

### Ubuntu / Debian

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Docker
curl -fsSL https://get.docker.com | sh
sudo usermod -aG docker $USER
newgrp docker

# Clone and deploy
git clone https://github.com/yourusername/gopal-portfolio.git
cd gopal-portfolio

# Create .env file
cat > .env << EOF
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
EOF

# Deploy with docker-compose
sudo docker-compose -f docker-compose.prod.yml up -d

# Setup auto-restart
sudo systemctl enable docker
```

### Setup Nginx Reverse Proxy (Optional)

If running multiple services:

```nginx
# /etc/nginx/sites-available/gopaldas.dev
server {
    listen 80;
    server_name gopaldas.dev www.gopaldas.dev;

    location / {
        proxy_pass http://localhost:8080;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## SSL / HTTPS

### Let's Encrypt with Certbot

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx -y

# Obtain certificate
sudo certbot --nginx -d gopaldas.dev -d www.gopaldas.dev

# Auto-renewal (already set up by certbot)
sudo certbot renew --dry-run
```

### Cloudflare (Recommended)

1. Add your site to Cloudflare
2. Update nameservers
3. Enable "Always Use HTTPS"
4. Set SSL/TLS to "Full (strict)"
5. Enable Auto Minify for CSS, JS, HTML

## Domain Configuration

### DNS Records

| Type | Host | Value | TTL |
|------|------|-------|-----|
| A | @ | YOUR_SERVER_IP | 3600 |
| A | www | YOUR_SERVER_IP | 3600 |
| CNAME | * | gopaldas.dev | 3600 |

### For GitHub Pages

| Type | Host | Value | TTL |
|------|------|-------|-----|
| A | @ | 185.199.108.153 | 3600 |
| A | @ | 185.199.109.153 | 3600 |
| A | @ | 185.199.110.153 | 3600 |
| A | @ | 185.199.111.153 | 3600 |
| CNAME | www | yourusername.github.io | 3600 |

## Monitoring

### Docker Health Check

Already configured in Dockerfile and docker-compose:

```yaml
healthcheck:
  test: ["CMD", "curl", "-f", "http://localhost:8080/"]
  interval: 30s
  timeout: 10s
  retries: 3
```

### Uptime Monitoring

Recommended services:
- [UptimeRobot](https://uptimerobot.com/) (Free tier available)
- [Pingdom](https://www.pingdom.com/)
- [StatusCake](https://www.statuscake.com/)

### Log Aggregation

```bash
# View Docker logs
sudo docker logs -f gopal-portfolio-prod

# Or use log rotation
sudo docker run -d \
  --log-opt max-size=10m \
  --log-opt max-file=3 \
  gopal-portfolio
```

## Troubleshooting

### Build Errors

```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

### Docker Issues

```bash
# Rebuild without cache
docker-compose build --no-cache

# Check container logs
docker-compose logs -f

# Prune unused images
docker system prune -a
```

### Contact Form Not Working

1. Verify EmailJS credentials in environment variables
2. Check browser console for errors
3. Verify EmailJS template variables match the code
4. Check EmailJS dashboard for delivery status

### 404 on Refresh (SPA Routing)

Ensure your server is configured to serve `index.html` for all routes:

- **Nginx**: `try_files $uri $uri/ /index.html;`
- **Apache**: `FallbackResource /index.html`
- **Netlify**: `_redirects` file with `/* /index.html 200`

### Performance Issues

1. Check bundle size: `npm run build` output
2. Enable gzip compression (already in Nginx config)
3. Use CDN for static assets
4. Enable browser caching
5. Optimize images (use WebP/AVIF format)

---

For additional help, refer to the [README](README.md) or contact [gopal1409@gmail.com](mailto:gopal1409@gmail.com).