# AutoNexus Landing Page - Deployment Guide

## ✅ Build Status: COMPLETE

The entire AutoNexus landing page has been built and tested locally. Here's what's ready:

### What's Included:
- ✅ 9 React components (Hero, Problem, Features, Pricing, Form, CTA, Navigation, Testimonials, Footer)
- ✅ 3 API routes (form submission, checkout, health check)
- ✅ Airtable, Sendgrid, and Razorpay integrations
- ✅ Full TypeScript + Tailwind CSS configuration
- ✅ Responsive design (mobile + desktop)
- ✅ Production build passing (npm run build)

---

## 🚀 Deploy to GitHub & Vercel

### Step 1: Create GitHub Repository
1. Go to [github.com/new](https://github.com/new)
2. Create repo named: `autonexus-landing`
3. Do NOT initialize with README/gitignore (we already have them)
4. Click "Create repository"
5. Copy the HTTPS URL (e.g., `https://github.com/YOUR_USERNAME/autonexus-landing.git`)

### Step 2: Push Code to GitHub
```bash
cd "D:\hizenberg\ecommerce automation\autonexus-landing"

# Add GitHub remote
git remote add origin https://github.com/YOUR_USERNAME/autonexus-landing.git

# Push to GitHub (creates main branch)
git branch -M main
git push -u origin main
```

### Step 3: Deploy to Vercel
```bash
# Install Vercel CLI (if not already installed)
npm install -g vercel

# Login to Vercel
vercel login

# Deploy from project directory
cd "D:\hizenberg\ecommerce automation\autonexus-landing"
vercel
```

During `vercel` command, you'll be asked:
- "Set up and deploy?" → **Yes**
- "Which scope?" → Select your personal account
- "Link to existing project?" → **No**
- "Project name?" → `autonexus-landing`
- "Root directory?" → `./` (default)
- "Build command?" → Press Enter (uses default)
- "Output directory?" → Press Enter (uses default)

After deployment, Vercel will give you a live URL (e.g., `https://autonexus-landing.vercel.app`)

### Step 4: Add Environment Variables to Vercel
1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click on `autonexus-landing` project
3. Go to **Settings** → **Environment Variables**
4. Add each variable from `.env.example`:

**From Mr. Nadella (values needed):**
```env
NEXT_PUBLIC_AIRTABLE_API_KEY=your_value
NEXT_PUBLIC_AIRTABLE_CUSTOMERS_BASE_ID=appM6hWou1lyRZ4M1

SENDGRID_API_KEY=your_value
SENDGRID_FROM_EMAIL=hello@autonexus.example.com
SENDGRID_WELCOME_TEMPLATE_ID=d-85c95b0dd4b4437da6dc1b070a9a9982

NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_SPrb1ihp5edxV2
NEXT_PUBLIC_RAZORPAY_STARTER_PLAN_ID=plan_SPrYbLjEuJV0Oh
NEXT_PUBLIC_RAZORPAY_GROWTH_PLAN_ID=plan_SPrXpGXXwPHZUB
NEXT_PUBLIC_RAZORPAY_SCALE_PLAN_ID=plan_SPrYbLjEuJV0Oh

NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/autonexus/demo
NEXT_PUBLIC_DOMAIN=https://autonexus-landing.vercel.app
```

5. **Redeploy** after adding variables:
   - Vercel will auto-trigger a new deployment, OR
   - Click "Deployments" → Click "..." on latest → "Redeploy"

### Step 5: Test the Live Site
1. Visit your Vercel URL (e.g., `https://autonexus-landing.vercel.app`)
2. Test form submission - should save to Airtable + send welcome email
3. Test pricing buttons - should link to Razorpay checkout
4. Test all navigation links and CTAs
5. Test on mobile (responsive design)

---

## 📂 Project Structure
```
autonexus-landing/
├── app/
│   ├── api/
│   │   ├── form-submit/route.ts      # Lead capture API
│   │   ├── checkout/route.ts          # Razorpay checkout
│   │   └── health/route.ts            # Health check
│   ├── layout.tsx                     # Root layout + metadata
│   ├── page.tsx                       # Main landing page
│   └── globals.css                    # Tailwind styles
├── components/
│   ├── Navigation.tsx                 # Sticky header
│   ├── Hero.tsx                       # Hero section
│   ├── Problem.tsx                    # Problem statement
│   ├── Features.tsx                   # 6-feature grid
│   ├── Pricing.tsx                    # 3-tier pricing
│   ├── Form.tsx                       # Lead capture form
│   ├── CTA.tsx                        # Call-to-action
│   ├── Footer.tsx                     # Footer
│   └── Testimonials.tsx               # Social proof
├── lib/
│   ├── airtable.ts                    # Airtable client
│   ├── sendgrid.ts                    # Sendgrid client
│   └── razorpay.ts                    # Razorpay helper
├── tailwind.config.ts                 # Tailwind configuration
├── tsconfig.json                      # TypeScript config
├── next.config.ts                     # Next.js config
├── package.json                       # Dependencies
├── .env.example                       # Environment variables template
└── .gitignore                         # Git ignore rules
```

---

## 🔧 Local Development

To run locally before deploying:

```bash
# Install dependencies (already done)
npm install

# Create .env.local file (copy from .env.example)
# Fill in actual values from Mr. Nadella

# Run dev server
npm run dev

# Visit http://localhost:3000
```

---

## 📊 Verification Checklist

- [x] All 9 components built
- [x] 3 API routes configured
- [x] TypeScript compilation passing
- [x] Build succeeds (npm run build)
- [x] Git repo initialized and committed
- [ ] Pushed to GitHub (user does this)
- [ ] Deployed to Vercel (user does this)
- [ ] Environment variables added (Mr. Nadella provides)
- [ ] Live testing on vercel domain
- [ ] Form submission tested (Airtable + Sendgrid)
- [ ] Razorpay checkout tested

---

## ⚠️ Important Notes

1. **Do NOT commit `.env.local`** - It's in `.gitignore` ✅
2. **Environment variables are required for full functionality** - Form submissions and emails won't work without them
3. **Razorpay test mode** - The placeholders are in test mode (safe for testing)
4. **Sendgrid template ID** - Make sure the template exists in Mr. Nadella's Sendgrid account
5. **Airtable base ID** - The Customers table should exist in the specified base

---

## 🆘 Troubleshooting

### Form submissions fail
- Check AIRTABLE_API_KEY and AIRTABLE_CUSTOMERS_BASE_ID in Vercel env vars
- Check SENDGRID_API_KEY and SENDGRID_FROM_EMAIL

### Emails not sending
- Verify Sendgrid API key is valid
- Verify template ID exists in Sendgrid
- Check email in Sendgrid "Email Activity" dashboard

### Razorpay buttons show 404
- Check if RAZORPAY_KEY_ID is set correctly
- Verify plan IDs are correct (should start with "plan_")

### Build failing on Vercel
- Check all environment variables are set
- Run `npm run build` locally to verify build succeeds
- Check Vercel logs in dashboard

---

## 📞 Next Steps

1. **Share GitHub repo URL** with Mr. Nadella once pushed
2. **Get environment variables** from Mr. Nadella
3. **Add variables to Vercel** and redeploy
4. **Send live URL** to stakeholders for testing
5. **Monitor** form submissions in Airtable and emails in Sendgrid

---

**Status:** Ready for GitHub + Vercel deployment 🚀
