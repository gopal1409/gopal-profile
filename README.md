# Gopal Das Portfolio

[![CI](https://github.com/yourusername/gopal-portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/yourusername/gopal-portfolio/actions/workflows/ci.yml)
[![CD](https://github.com/yourusername/gopal-portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/yourusername/gopal-portfolio/actions/workflows/deploy.yml)
[![Docker](https://img.shields.io/badge/docker-ready-blue?logo=docker)](https://hub.docker.com/)
[![React](https://img.shields.io/badge/react-19-61DAFB?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/vite-6-646CFF?logo=vite)](https://vitejs.dev/)
[![MUI](https://img.shields.io/badge/MUI-6-007FFF?logo=mui)](https://mui.com/)

> **Enterprise Portfolio Website** for Gopal Das — Senior DevOps Consultant & Enterprise Solution Architect with 28+ years of experience.

## 🚀 Live Demo

**[https://gopaldas.dev](https://gopaldas.dev)** *(update with your domain)*

## ✨ Features

- **React 19** with latest features and performance optimizations
- **Vite 6** for lightning-fast development and optimized builds
- **Material UI 6** with custom dark theme and component overrides
- **Framer Motion** for smooth scroll animations and interactions
- **React Router 7** for client-side navigation
- **EmailJS** integration for contact form (no backend required)
- **Fully Responsive** design optimized for all devices
- **Docker & Nginx** production-ready containerization
- **GitHub Actions CI/CD** with automated testing and deployment
- **SEO Optimized** with meta tags, sitemap, and robots.txt

## 📁 Project Structure

```
gopal-portfolio/
├── .github/workflows/       # CI/CD pipelines
├── nginx/                   # Nginx configuration
├── public/                  # Static assets
│   ├── robots.txt
│   ├── sitemap.xml
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── layout/          # Navbar, Footer, Layout
│   │   ├── sections/        # Hero, About, Services, Skills, etc.
│   │   └── ui/              # Reusable UI components
│   ├── context/             # React Context providers
│   ├── hooks/               # Custom React hooks
│   ├── pages/               # Route pages
│   ├── theme/               # MUI theme configuration
│   ├── utils/               # Utilities & resume data
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── Dockerfile               # Multi-stage Docker build
├── docker-compose.yml       # Development compose
├── docker-compose.prod.yml  # Production compose
├── vite.config.js
├── package.json
└── README.md
```

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | React 19, Vite 6 |
| **UI Library** | Material UI 6, Emotion |
| **Routing** | React Router 7 |
| **Animation** | Framer Motion |
| **Fonts** | Inter Variable, JetBrains Mono Variable |
| **Form** | EmailJS (no backend needed) |
| **Icons** | Material Icons |
| **Linting** | ESLint 9, Prettier 3 |
| **Container** | Docker, Nginx |
| **CI/CD** | GitHub Actions |

## 🚀 Quick Start

### Prerequisites

- Node.js >= 20.0.0
- npm >= 10.0.0
- Docker (optional, for containerized deployment)

### Local Development

```bash
# Clone the repository
git clone https://github.com/yourusername/gopal-portfolio.git
cd gopal-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` directory.

### Docker Deployment

```bash
# Development (with hot reload)
npm run docker:compose

# Production
npm run docker:compose:prod
```

Or manually:

```bash
# Build image
docker build -t gopal-portfolio .

# Run container
docker run -p 80:80 gopal-portfolio
```

## 📧 EmailJS Configuration

The contact form uses EmailJS for sending emails without a backend.

1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Create an Email Service (Gmail, Outlook, etc.)
3. Create an Email Template with these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{phone}}` - Phone number
   - `{{company}}` - Company name
   - `{{service}}` - Selected service
   - `{{message}}` - Message content
4. Add these secrets to your GitHub repository:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`

For local development, create a `.env` file:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## 📝 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix ESLint issues |
| `npm run format` | Format code with Prettier |
| `npm run test` | Run tests |
| `npm run docker:build` | Build Docker image |
| `npm run docker:run` | Run Docker container |
| `npm run docker:compose` | Start with docker-compose (dev) |
| `npm run docker:compose:prod` | Start with docker-compose (prod) |

## 🏗️ Architecture

### Theme System
- Custom dark theme with cyan/amber accent palette
- Responsive breakpoints (xs, sm, md, lg, xl, xxl)
- Component overrides for consistent enterprise styling
- CSS custom properties for global values

### Animation Strategy
- Framer Motion for scroll-triggered animations
- Intersection Observer for performance
- Reduced motion support for accessibility
- Staggered animations for lists and grids

### Performance Optimizations
- Vite code splitting with manual chunks
- Lazy loading for below-fold sections
- Optimized images with WebP/AVIF
- Gzip compression via Nginx
- Static asset caching (1 year)
- HTML caching with revalidation (1 hour)

### Security
- Content Security Policy headers
- X-Frame-Options, X-Content-Type-Options
- Referrer-Policy, Permissions-Policy
- Non-root Docker user
- Security scanning with Trivy in CI

## 🚢 Deployment Options

### 1. GitHub Pages (Free)
Already configured via GitHub Actions. Push to `main` branch to deploy.

### 2. Netlify
```bash
# Build and deploy
npm run build
netlify deploy --prod --dir=dist
```

### 3. Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### 4. VPS / Cloud Server
```bash
# On your server
git clone https://github.com/yourusername/gopal-portfolio.git
cd gopal-portfolio
docker-compose -f docker-compose.prod.yml up -d
```

### 5. AWS / GCP / Azure
Use the Docker image with their container services:
- AWS ECS / EKS / App Runner
- Google Cloud Run / GKE
- Azure Container Instances / AKS

## 📄 License

MIT License — see [LICENSE](LICENSE) file for details.

## 👤 Author

**Gopal Das**
- Email: [gopal1409@gmail.com](mailto:gopal1409@gmail.com)
- LinkedIn: [linkedin.com/in/gopaldevops](https://linkedin.com/in/gopaldevops)
- Phone: +91-9537126262

---

Built with ❤️ using React 19, Vite, and Material UI.