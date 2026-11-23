# Cloudflare Pages Deployment Checklist

## Pre-Deployment

### 1. Custom Domain Setup (theibresources.com)
- [ ] Domain registered and DNS on Cloudflare
- [ ] In Cloudflare Dashboard > Pages > theibresources > Custom domains
- [ ] Add `theibresources.com` and `www.theibresources.com`
- [ ] Verify DNS records auto-created (CNAME for www, CNAME flattening for apex)
- [ ] SSL/TLS mode: "Full (strict)" in Cloudflare SSL/TLS settings

### 2. Environment Variables (Pages > Settings > Environment variables)
**Production:**
- [ ] `CONTACT_EMAIL` = your@email.com
- [ ] `EMAIL_API_KEY` = your-sendgrid-mailgun-resend-api-key
- [ ] `EMAIL_API_PROVIDER` = "sendgrid" (or "mailgun" / "resend")
- [ ] `ALLOWED_ORIGIN` = "https://theibresources.com"
- [ ] `TURNSTILE_SECRET_KEY` = optional (for bot protection)

**Preview (optional):**
- [ ] Same variables with preview-specific values

### 3. Worker for Contact Form
- [ ] Create Worker: `workers.theibresources.com/contact`
- [ ] Copy `workers/contact.ts` code
- [ ] Add same environment variables in Worker settings
- [ ] Add route: `theibresources.com/api/contact/*` → Worker
- [ ] Update contact page form action to `/api/contact`

### 4. Security Headers
Create `public/_headers`:
```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()

/slides/*
  Cache-Control: public, max-age=31536000, immutable

/_next/static/*
  Cache-Control: public, max-age=31536000, immutable
```

### 5. Redirects (if needed)
Create `public/_redirects`:
```
/ess/* /courses/ess/:splat  301
/biology/* /courses/biology/:splat  301
/ia/ess /ia-guide/ess  301
/ia/bio /ia-guide/biology  301
```

## Deployment Commands

```bash
# Local build for Cloudflare
npm run build:cf

# Deploy via wrangler
./deploy.sh

# Or manually:
wrangler pages deploy ./out --project-name=theibresources
```

## Post-Deployment Verification

- [ ] Visit https://theibresources.pages.dev - all pages load
- [ ] Visit https://theibresources.com - custom domain works
- [ ] Test contact form submission
- [ ] Verify slides load in topic pages (ESS & Biology)
- [ ] Check mobile responsiveness
- [ ] Run Lighthouse audit (Performance, Accessibility, SEO)
- [ ] Submit sitemap to Google Search Console
- [ ] Configure Cloudflare Web Analytics
- [ ] Set up uptime monitoring

## Analytics Setup

### Cloudflare Web Analytics (Free)
1. Cloudflare Dashboard > Web Analytics > Add site
2. Add script to `layout.tsx` (or use Cloudflare Zaraz)

### Plausible (Alternative)
```html
<script defer data-domain="theibresources.com" src="https://plausible.io/js/script.js"></script>
```

## Performance Optimization

- [ ] Enable Cloudflare Auto Minify (CSS, JS, HTML)
- [ ] Enable Brotli compression
- [ ] Enable HTTP/3 (QUIC)
- [ ] Configure Cache Rules for static assets
- [ ] Consider Cloudflare Images for slide images

## Monitoring

- [ ] Cloudflare Pages deploy notifications
- [ ] Worker error alerts
- [ ] Uptime monitoring (UptimeRobot, Better Stack, etc.)
- [ ] Error tracking (Sentry optional)

## Legal Compliance

- [ ] Privacy Policy page (`/privacy`)
- [ ] Terms of Service page (`/terms`)
- [ ] Cookie consent if using analytics cookies
- [ ] GDPR/CCPA compliance for contact form data
- [ ] IB trademark disclaimer on all pages (already in Footer)