# Changelog

All notable changes to this project will be documented in this file.

## [1.0.0] - 2026-07-21

### Added
- Initial release of the portfolio website
- React 19 with latest features
- Vite 6 build system
- Material UI 6 with custom dark theme
- Framer Motion animations
- React Router 7 navigation
- EmailJS contact form integration
- Fully responsive design
- Docker & Nginx production setup
- GitHub Actions CI/CD pipelines
- SEO optimization (meta tags, sitemap, robots.txt)
- 8 main sections: Hero, About, Services, Skills, Experience, Certifications, Clients, Training, Projects, Contact
- Client marquee animation
- Animated statistics counters
- Timeline for projects and experience
- Training program accordions
- Form validation with custom hook
- Scroll-triggered animations
- Mobile drawer navigation
- Social links component
- Resume download functionality

### Security
- Content Security Policy headers
- Security headers via Nginx
- Non-root Docker user
- Trivy vulnerability scanning in CI
- npm audit in CI pipeline

### Performance
- Code splitting with manual chunks
- Gzip compression
- Static asset caching (1 year)
- Optimized Docker image (~25MB)
- Intersection Observer for animations
- Reduced motion support
