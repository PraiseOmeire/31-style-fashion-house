# Cloudflare Pages Deployment Guide

## What Was Changed

### Files Created:
1. **`functions/api/bespoke-submit.ts`** - Cloudflare Pages Function (replaces Vercel API)
2. **`public/_redirects`** - React Router support (prevents 404 on direct route access)
3. **`public/_headers`** - Security headers (optional but recommended)

### Key Differences from Vercel:
- **File Location:** `functions/api/` instead of `api/`
- **Request/Response:** Standard Web API (`Request`, `Response`) instead of Vercel types
- **Environment Variables:** Access via `context.env` instead of `process.env`
- **Export Format:** Named export `onRequestPost` instead of default export

---

## Step 1: Commit and Push to GitHub

Commit these new files:

```bash
git add functions/ public/_redirects public/_headers
git commit -m "Add Cloudflare Pages Functions and routing config"
git push origin main
```

---

## Step 2: Connect to Cloudflare Pages

1. Go to **https://dash.cloudflare.com**
2. Navigate to **Workers & Pages** → **Create application** → **Pages**
3. Click **Connect to Git**
4. Select your GitHub repository: `31-style-fashion-house`
5. Authorize Cloudflare to access the repository

---

## Step 3: Configure Build Settings

Use these exact settings in the Cloudflare dashboard:

| Setting | Value |
|---------|-------|
| **Framework preset** | `Vite` |
| **Build command** | `yarn build` |
| **Build output directory** | `dist` |
| **Root directory** | `/` (leave empty) |
| **Production branch** | `main` |

---

## Step 4: Add Environment Variables

Before deploying, add these environment variables in Cloudflare:

1. In the Cloudflare dashboard, go to **Settings** → **Environment variables**
2. Add the following (Production environment):

| Variable Name | Value | Notes |
|---------------|-------|-------|
| `RESEND_API_KEY` | `re_86P7bfoZ_AWcqhjdiswfKQWRGthNrCPgr` | Your Resend API key |
| `EMAIL_FROM` | `onboarding@resend.dev` | Sandbox: test only |
| `EMAIL_TO` | `delivered@resend.dev` | Sandbox: test address |

**Important:** For production, you MUST verify your domain in Resend and update these values:
- `EMAIL_FROM` → `inquiries@31stylefashionhouse.com` (your verified domain)
- `EMAIL_TO` → `omeirederah@gmail.com` (your real email)

---

## Step 5: Deploy

1. Click **Save and Deploy**
2. Cloudflare will build and deploy your site
3. You'll get a `.pages.dev` domain like: `31-style-fashion-house.pages.dev`
4. Wait 2-5 minutes for the build to complete

---

## How It Works

### Cloudflare Pages Functions
- **Path:** `/functions/api/bespoke-submit.ts`
- **URL:** `https://your-site.pages.dev/api/bespoke-submit`
- **Automatically deployed** with your static site (no separate deployment needed)

### Frontend API Calls
- Your frontend already uses: `fetch('/api/bespoke-submit', ...)`
- This works seamlessly with Cloudflare Pages Functions
- No code changes needed in your React components

### Build Output
- **Frontend:** Static files in `dist/` directory
- **API:** Cloudflare Pages Functions (serverless, runs on Cloudflare's edge)

---

## Testing After Deployment

### 1. Test Homepage
Visit `https://your-site.pages.dev/` → should load correctly

### 2. Test Routing
Visit `https://your-site.pages.dev/academy` → should NOT 404 (thanks to `_redirects`)

### 3. Test API Endpoint
Complete the bespoke flow:
1. Click "Start Custom Design" on homepage
2. Fill out all 5 steps
3. Click "Submit"
4. Should see success message

### 4. Check Logs (Optional)
In Cloudflare dashboard:
1. Go to your Pages project
2. Click **Functions** tab
3. View real-time logs to debug any issues

---

## Troubleshooting

### API Returns 500 Error
**Cause:** Missing environment variables

**Fix:**
1. Go to Settings → Environment variables
2. Verify all 3 variables are set (RESEND_API_KEY, EMAIL_FROM, EMAIL_TO)
3. Redeploy: Settings → Deployments → Retry deployment

### Routes Return 404
**Cause:** `_redirects` file not working

**Fix:**
1. Verify `public/_redirects` exists and contains: `/*    /index.html   200`
2. Rebuild and redeploy

### Email Not Sending
**Cause:** Resend sandbox domain restrictions

**Sandbox mode limitations:**
- `onboarding@resend.dev` can ONLY send to `delivered@resend.dev`
- For real emails, verify your domain in Resend

**Fix for production:**
1. Go to https://resend.com/domains
2. Add your domain: `31stylefashionhouse.com`
3. Add DNS records provided by Resend
4. Update environment variables in Cloudflare
5. Redeploy

---

## Local Development

Your existing setup still works:

```bash
# Full-stack dev server (Vite + Vercel Functions) - port 3000
yarn start

# Frontend-only dev server (Vite) - port 5173
yarn run dev

# Production build (test before deploying)
yarn build
yarn preview
```

**Note:** Local development uses Vercel Functions (`/api/bespoke-submit.ts`). Production uses Cloudflare Pages Functions (`/functions/api/bespoke-submit.ts`). Both are kept for compatibility.

---

## Cost

**Cloudflare Pages Free Tier:**
- ✅ Unlimited requests
- ✅ Unlimited bandwidth
- ✅ 500 builds/month
- ✅ 100,000 Pages Functions requests/day
- ✅ Free SSL certificate
- ✅ Free `.pages.dev` subdomain

**Expected cost:** $0/month (well within free tier)

---

## Custom Domain (Optional)

To use your own domain (e.g., `31stylefashionhouse.com`):

1. In Cloudflare dashboard, go to **Custom domains** tab
2. Click **Set up a custom domain**
3. Enter your domain: `31stylefashionhouse.com`
4. Follow DNS configuration instructions
5. Cloudflare will auto-provision SSL certificate (free)

---

## Files You Need to Commit

Only these new files need to be committed:

```
functions/api/bespoke-submit.ts  (NEW - Cloudflare Pages Function)
public/_redirects                 (NEW - React Router support)
public/_headers                   (NEW - Security headers)
```

Your existing files remain unchanged:
- ✅ `vite.config.ts` - already correct
- ✅ `package.json` - build script already correct
- ✅ Frontend code - no changes needed
- ✅ `/api/bespoke-submit.ts` - kept for local dev with Vercel

---

## Summary

**What you have now:**
- ✅ Static frontend (Vite + React + TypeScript)
- ✅ API endpoint at `/api/bespoke-submit` (Cloudflare Pages Function)
- ✅ React Router support (no 404s)
- ✅ Security headers
- ✅ Free hosting on Cloudflare Pages
- ✅ Email sending via Resend

**Next steps:**
1. Commit and push new files to GitHub
2. Connect GitHub repo to Cloudflare Pages
3. Add environment variables in Cloudflare dashboard
4. Deploy and test
5. (Optional) Set up custom domain
6. (For production) Verify domain in Resend and update EMAIL_FROM/EMAIL_TO
