# Deployment Guide

## Overview

This guide covers deploying the Fairness-Aware Movie Recommendation System to various platforms.

## Prerequisites

- Node.js 16+ installed
- Git repository set up
- Environment variables configured

## Environment Variables

Create a `.env` file in the root directory:

```env
# Application
VITE_APP_NAME=Fairness-Aware Movie Recommendation System
VITE_APP_VERSION=1.0.0

# API Configuration (for future backend integration)
VITE_API_BASE_URL=https://api.yourdomain.com
VITE_API_VERSION=v1

# Authentication (for future integration)
VITE_JWT_SECRET=your-jwt-secret-key

# Analytics (optional)
VITE_GOOGLE_ANALYTICS_ID=GA-XXXXXXXXX

# Feature Flags
VITE_ENABLE_ADMIN_PANEL=true
VITE_ENABLE_ANALYTICS=false
```

## Build Process

### Development Build
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

The build output will be in the `dist/` directory.

## Deployment Options

### 1. Netlify (Recommended)

#### Automatic Deployment
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on git push

#### Manual Deployment
```bash
# Build the project
npm run build

# Install Netlify CLI
npm install -g netlify-cli

# Deploy to Netlify
netlify deploy --prod --dir=dist
```

### 2. Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

### 3. GitHub Pages

```bash
# Install gh-pages
npm install -g gh-pages

# Build and deploy
npm run build
gh-pages -d dist
```

### 4. AWS S3 + CloudFront

```bash
# Build the project
npm run build

# Sync to S3 bucket
aws s3 sync dist/ s3://your-bucket-name --delete

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"
```

### 5. Docker Deployment

Create `Dockerfile`:
```dockerfile
FROM node:18-alpine as builder

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Create `nginx.conf`:
```nginx
events {
    worker_connections 1024;
}

http {
    include /etc/nginx/mime.types;
    default_type application/octet-stream;

    server {
        listen 80;
        server_name localhost;
        root /usr/share/nginx/html;
        index index.html;

        location / {
            try_files $uri $uri/ /index.html;
        }

        location /static/ {
            expires 1y;
            add_header Cache-Control "public, immutable";
        }
    }
}
```

Build and run:
```bash
docker build -t fairness-movie-rec .
docker run -p 80:80 fairness-movie-rec
```

## Performance Optimization

### Build Optimization
```bash
# Analyze bundle size
npm run build -- --analyze

# Enable gzip compression
# (handled by most hosting platforms automatically)
```

### Caching Strategy
- Static assets: 1 year cache
- HTML files: No cache
- API responses: 5 minutes cache

### CDN Configuration
Configure your CDN to:
- Compress all text-based files
- Set appropriate cache headers
- Enable HTTP/2
- Use modern image formats (WebP, AVIF)

## Monitoring and Analytics

### Error Tracking
Consider integrating:
- Sentry for error tracking
- LogRocket for session replay
- Google Analytics for user behavior

### Performance Monitoring
- Lighthouse CI for performance audits
- Web Vitals monitoring
- Real User Monitoring (RUM)

## Security Considerations

### Content Security Policy
Add to your HTML head:
```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:;">
```

### HTTPS
- Always use HTTPS in production
- Configure HSTS headers
- Use secure cookies for authentication

## Backup and Recovery

### Database Backup (Future)
- Regular automated backups
- Point-in-time recovery
- Cross-region replication

### Code Backup
- Git repository with multiple remotes
- Regular code reviews
- Automated testing pipeline

## Scaling Considerations

### Frontend Scaling
- CDN for global distribution
- Image optimization and lazy loading
- Code splitting and lazy loading

### Backend Scaling (Future)
- Load balancing
- Database sharding
- Caching layers (Redis)
- Microservices architecture

## Troubleshooting

### Common Issues

1. **Build Failures**
   - Check Node.js version compatibility
   - Clear node_modules and reinstall
   - Verify environment variables

2. **Routing Issues**
   - Configure server for SPA routing
   - Check base URL configuration
   - Verify route definitions

3. **Performance Issues**
   - Analyze bundle size
   - Optimize images
   - Enable compression

### Debug Commands
```bash
# Check build output
npm run build && npm run preview

# Analyze bundle
npm run build -- --analyze

# Check for security vulnerabilities
npm audit

# Update dependencies
npm update
```

## Maintenance

### Regular Tasks
- Update dependencies monthly
- Monitor performance metrics
- Review error logs
- Update documentation
- Security patches

### Monitoring Checklist
- [ ] Application uptime
- [ ] Response times
- [ ] Error rates
- [ ] User engagement metrics
- [ ] Security alerts