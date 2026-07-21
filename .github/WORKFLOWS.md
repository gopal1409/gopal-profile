# GitHub Actions Workflows

This project includes automated CI/CD pipelines for building, testing, and deploying your portfolio.

## Workflows

### 1. **Build & Deploy** (`.github/workflows/build-deploy.yml`)
Triggers on: push to `main`/`master`, pull requests, manual workflow dispatch

**Features:**
- Tests against Node.js 18.x and 20.x
- Installs dependencies with legacy peer deps support
- Runs ESLint (if configured)
- Builds the Vite project
- Runs tests (if configured)
- **Automatically deploys to GitHub Pages** on push to main branch
- Uploads build artifacts for 7 days

**Environment Setup Required:**
1. Go to repository Settings → Pages
2. Set "Build and deployment" to "Deploy from a branch"
3. Select `gh-pages` branch and `/root` folder
4. The workflow will automatically create and push to this branch

### 2. **Docker Build & Push** (`.github/workflows/docker-build.yml`)
Triggers on: push to `main`/`master`, tags, pull requests, manual dispatch

**Features:**
- Builds and pushes Docker images to GitHub Container Registry (GHCR)
- Uses Docker layer caching
- Automatic image tagging (branch, semver, commit SHA)
- Security scanning with Trivy
- SARIF report integration with GitHub Security

**Container Registry Access:**
- Images pushed to: `ghcr.io/YOUR_USERNAME/gopal-portfolio`
- Authentication uses `GITHUB_TOKEN` (automatic)

### 3. **Code Quality & Analysis** (`.github/workflows/quality-checks.yml`)
Triggers on: push, pull requests, weekly schedule (Sundays)

**Features:**
- ESLint code quality checks
- Prettier format validation
- CodeQL security analysis (JavaScript)
- Dependency outdated checks
- npm security audits
- Weekly automated analysis

## GitHub Pages Deployment

Your portfolio will be automatically deployed to GitHub Pages at:
```
https://YOUR_USERNAME.github.io/gopal-portfolio/
```

To use a custom domain:
1. Settings → Pages → Custom domain
2. Add DNS records as instructed
3. Update `vite.config.js` if needed (base path)

## Environment Variables

For security features, add these secrets to Settings → Secrets and variables → Actions:

```
VITE_EMAILJS_SERVICE_ID   # EmailJS service ID
VITE_EMAILJS_TEMPLATE_ID  # EmailJS template ID
VITE_EMAILJS_PUBLIC_KEY    # EmailJS public key
```

These will be injected during build (prefixed with `VITE_`)

## Manual Workflow Dispatch

Run workflows manually from:
- GitHub repository → Actions → Select workflow → "Run workflow"

## Status Badges

Add these to your README.md:

```markdown
[![Build & Deploy](https://github.com/YOUR_USERNAME/gopal-portfolio/actions/workflows/build-deploy.yml/badge.svg)](https://github.com/YOUR_USERNAME/gopal-portfolio/actions/workflows/build-deploy.yml)

[![Docker Build & Push](https://github.com/YOUR_USERNAME/gopal-portfolio/actions/workflows/docker-build.yml/badge.svg)](https://github.com/YOUR_USERNAME/gopal-portfolio/actions/workflows/docker-build.yml)

[![Code Quality & Analysis](https://github.com/YOUR_USERNAME/gopal-portfolio/actions/workflows/quality-checks.yml/badge.svg)](https://github.com/YOUR_USERNAME/gopal-portfolio/actions/workflows/quality-checks.yml)
```

## Troubleshooting

**Pages deployment failing?**
- Check Settings → Pages configuration
- Ensure `gh-pages` branch exists
- Verify deploy token permissions

**Docker push failing?**
- Ensure `GITHUB_TOKEN` has `packages:write` permission
- Check container registry is public or you have access

**ESLint/Tests failing?**
- Workflows continue on error for non-critical checks
- Fix issues locally: `npm run lint:fix`
- Run tests: `npm test`

## Customization

Edit workflows to:
- Change Node.js versions in matrix
- Add deployment to custom server
- Modify build commands
- Add notifications (Slack, email, etc.)
- Change deployment triggers
