# Vercel Deployment Guide

## Prerequisites
- Node.js installed (v18+ recommended)
- Vercel CLI installed globally: `npm i -g vercel`

## Quick Deploy Steps

### Option 1: Deploy via Vercel CLI
1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy from project root:
   ```bash
   vercel --prod
   ```

3. Follow the prompts to:
   - Link your project
   - Configure build settings (should auto-detect)
   - Deploy

### Option 2: Deploy via Git Integration
1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect the framework (Vite)
5. Deploy with default settings

## Build Configuration
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

## Environment Variables
If you need any environment variables, add them in the Vercel dashboard under:
Settings > Environment Variables

## Custom Domain
After deployment, you can add a custom domain in the Vercel dashboard under:
Settings > Domains

## Troubleshooting
- Ensure all dependencies are listed in package.json
- Check that the build completes locally with `npm run build`
- Verify SPA routing works with the _redirects file

## Ready to Deploy!
Your project is now configured for Vercel deployment. The vercel.json file contains all necessary configuration for a successful deployment.
