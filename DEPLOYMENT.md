# Deployment Guide

This guide covers deploying your portfolio website to various platforms.

## Prerequisites

Before deploying, ensure:
1. Your code is committed to a Git repository
2. All tests pass: `npm run build`
3. No linting errors: `npm run lint`
4. Content in `data/portfolio.json` is up to date

## Deployment Options

### 1. Vercel (Recommended) ⭐

Vercel is the easiest option for Next.js applications and is created by the Next.js team.

#### Steps:
1. Push your code to GitHub, GitLab, or Bitbucket
2. Visit [vercel.com](https://vercel.com)
3. Sign up or log in
4. Click "New Project"
5. Import your repository
6. Vercel auto-detects Next.js configuration
7. Click "Deploy"
8. Done! Your site is live at `https://your-project.vercel.app`

#### Custom Domain:
1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Update your DNS settings as instructed
5. SSL certificate is automatically provided

### 2. Netlify

Netlify is another excellent option with great features.

#### Steps:
1. Push your code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect to your Git provider
5. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy site"
7. Your site is live!

#### Environment Variables:
- Go to Site Settings → Build & Deploy → Environment
- Add any required environment variables
- Redeploy the site

### 3. GitHub Pages (Static Export)

For static export deployment:

#### Configuration:
1. Update `next.config.mjs`:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/your-repo-name', // Only if using project page
};

export default nextConfig;
```

#### Steps:
1. Build the static site: `npm run build`
2. The output is in the `out` directory
3. Push the `out` directory to the `gh-pages` branch
4. Enable GitHub Pages in repository settings
5. Select `gh-pages` branch as source

#### Automated Deployment:
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

### 4. AWS Amplify

AWS Amplify provides hosting with CI/CD.

#### Steps:
1. Visit [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
2. Click "New app" → "Host web app"
3. Connect your Git repository
4. Configure build settings:
   - Build command: `npm run build`
   - Output directory: `.next`
5. Click "Save and deploy"

### 5. Railway

Railway offers simple deployment with automatic SSL.

#### Steps:
1. Visit [railway.app](https://railway.app)
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your repository
4. Railway detects Next.js automatically
5. Deploy!

### 6. Self-Hosted (VPS/Cloud Server)

For deploying on your own server:

#### Requirements:
- Node.js 18+ installed
- PM2 or similar process manager
- Nginx (optional, for reverse proxy)

#### Steps:
1. Clone your repository on the server
2. Install dependencies: `npm ci --production`
3. Build the application: `npm run build`
4. Start with PM2:
```bash
pm2 start npm --name "portfolio" -- start
pm2 save
pm2 startup
```

#### Nginx Configuration (optional):
```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### 7. Docker

Deploy using Docker containers:

#### Create Dockerfile:
```dockerfile
FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
EXPOSE 3000
ENV PORT 3000
CMD ["node", "server.js"]
```

#### Build and Run:
```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

## Post-Deployment Checklist

After deployment, verify:
- [ ] All pages load correctly
- [ ] Theme toggle works
- [ ] All links function properly
- [ ] Images display correctly
- [ ] Mobile responsiveness
- [ ] Form submissions (if applicable)
- [ ] Performance metrics (Lighthouse)
- [ ] SEO meta tags
- [ ] SSL certificate is active
- [ ] Custom domain configured (if applicable)

## Continuous Deployment

Set up automatic deployments:

### Vercel/Netlify:
- Automatically deploys on push to main branch
- Preview deployments for pull requests
- No additional configuration needed

### GitHub Actions:
- Create workflows for automated testing and deployment
- See GitHub Pages section for example

## Environment Variables

If you add environment variables:
1. Add them to `.env.local` for local development
2. Configure them in your hosting platform's dashboard
3. Never commit sensitive data to the repository
4. Use `.env.example` to document required variables

## Troubleshooting

### Build Fails:
- Check Node.js version (18+)
- Verify all dependencies are installed
- Check build logs for errors
- Ensure `npm run build` works locally

### Site Not Loading:
- Check deployment logs
- Verify build output directory
- Confirm server is running
- Check DNS settings for custom domain

### Images Not Displaying:
- Check image paths in JSON
- Verify images are in the `public` folder
- Check image optimization settings

## Support

For deployment issues:
- Check platform-specific documentation
- Review deployment logs
- Test locally with production build: `npm run build && npm run start`
- Open an issue in the repository

## Performance Optimization

After deployment:
1. Test with Google Lighthouse
2. Enable CDN (most platforms do this automatically)
3. Monitor Core Web Vitals
4. Use platform analytics to track performance

---

For more information, see the main [README.md](./README.md)
