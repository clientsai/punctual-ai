# Punctual.AI Website - Deployment Guide

## 🚀 Quick Deploy to Vercel

### Option 1: Deploy with Vercel CLI (Recommended)

1. **Install Vercel CLI** (if not installed):
```bash
npm install -g vercel
```

2. **Deploy to Vercel**:
```bash
vercel
```

Follow the prompts:
- Set up and deploy: Yes
- Which scope: Select your account
- Link to existing project: No
- Project name: punctual-ai-website
- Directory: ./ (current directory)
- Build settings: Use defaults (auto-detected)

3. **Deploy to production**:
```bash
vercel --prod
```

Your site will be available at: https://punctual-ai-website.vercel.app

### Option 2: Deploy via GitHub

1. **Push to GitHub**:
```bash
git init
git add .
git commit -m "Initial commit: Punctual.AI marketing website"
gh repo create punctual-ai-website --public --push
```

2. **Connect to Vercel**:
- Go to [vercel.com](https://vercel.com)
- Click "New Project"
- Import your GitHub repository
- Use default build settings (auto-detected)
- Click "Deploy"

### Option 3: Deploy with One Click

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/punctual-ai-website)

## 🌐 Custom Domain Setup

After deployment:

1. Go to your Vercel dashboard
2. Select the project
3. Go to Settings → Domains
4. Add your custom domain (e.g., punctual.ai)
5. Follow DNS configuration instructions

## 🔧 Environment Variables (if needed)

Create a `.env.local` file for any environment variables:
```
NEXT_PUBLIC_API_URL=https://api.punctual.ai
```

## 📊 Analytics

Consider adding:
- Vercel Analytics: `npm install @vercel/analytics`
- Google Analytics: Add script to `app/layout.tsx`

## 🎯 Post-Deployment Checklist

- [ ] Test all pages on production
- [ ] Verify responsive design on mobile devices
- [ ] Check all forms and interactive elements
- [ ] Test page load speed (should be < 2s)
- [ ] Verify SEO meta tags
- [ ] Submit sitemap to Google Search Console
- [ ] Set up monitoring and error tracking

## 📈 Performance Optimization

The site is optimized for:
- Lighthouse score > 95
- First Contentful Paint < 1.5s
- Cumulative Layout Shift < 0.1

## 🔄 Updating the Site

To update after making changes:
```bash
git add .
git commit -m "Your update message"
git push
```

Vercel will automatically redeploy on push to main branch.

## 📝 Notes

- The site is built with Next.js 14 and uses the App Router
- All pages are statically generated for optimal performance
- Images should be added to `/public/images/`
- The site is fully responsive and works on all devices

## 🆘 Support

For issues or questions:
- Check Vercel deployment logs
- Review Next.js documentation
- Open an issue on GitHub

---

**Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion**