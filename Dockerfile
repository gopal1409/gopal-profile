# ============================================
# Gopal Das Portfolio - Production Dockerfile
# Multi-stage build for optimized production image
# ============================================

# ---- Stage 1: Build ----
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies first (better caching)
COPY package*.json ./
RUN npm ci --only=production=false

# Copy source code
COPY . .

# Build the application
RUN npm run build

# ---- Stage 2: Production ----
FROM nginx:1.27-alpine AS production

# Install security updates
RUN apk update && apk upgrade && apk add --no-cache     curl     ca-certificates     && rm -rf /var/cache/apk/*

# Create non-root user
RUN addgroup -g 1001 -S nodejs &&     adduser -S nextjs -u 1001

# Copy custom nginx configuration
COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Copy built assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Create required directories and set permissions
RUN mkdir -p /var/cache/nginx/client_temp     /var/cache/nginx/proxy_temp     /var/cache/nginx/fastcgi_temp     /var/cache/nginx/uwsgi_temp     /var/cache/nginx/scgi_temp     /var/log/nginx     && chown -R nextjs:nodejs /var/cache/nginx     && chown -R nextjs:nodejs /var/log/nginx     && chown -R nextjs:nodejs /usr/share/nginx/html     && touch /var/run/nginx.pid     && chown nextjs:nodejs /var/run/nginx.pid

# Switch to non-root user
USER nextjs

# Expose port
EXPOSE 8080

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3     CMD curl -f http://localhost:8080/ || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]