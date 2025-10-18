# 🚀 DEPLOYMENT CHECKLIST - Fix Production Issues

## ✅ CHANGES MADE

### 1. Fixed CSP Headers for Google Fonts
- ✅ Added `style-src-elem` directive to explicitly allow Google Fonts stylesheets
- ✅ Created `public/_headers` file for Cloudflare Pages
- ✅ Updated `next.config.ts` with correct CSP

### 2. Fixed Image 404 Errors
- ✅ Updated all references from old image names to new names:
  - `Avant-Versoix.jpeg` → `Avant-Renovation-1.jpeg`
  - `Avant-Gland.jpeg` → `Avant-Renovation-2.jpeg`
  - `Apres-Gland.jpeg` → `Apres-Renovation-2.jpeg`
  - `Avant-Mies.jpeg` → `Avant-Renovation-3.jpeg`
- ✅ Updated files:
  - `src/components/ImageGallery.tsx`
  - `src/data/services.ts`
  - `src/data/service-image-map.ts`
  - `src/components/ProjectsCarousel.tsx`

### 3. Cleaned Build Cache
- ✅ Removed `.next` folder
- ✅ Fresh build completed successfully

---

## 📋 DEPLOYMENT STEPS

### **Option 1: Cloudflare Pages (Recommended)**

1. **Commit and push changes:**
   ```bash
   git add .
   git commit -m "fix: CSP headers for Google Fonts and image 404 errors"
   git push origin main
   ```

2. **Cloudflare will auto-deploy** (if connected to GitHub)
   - The `_headers` file will be automatically read by Cloudflare
   - CSP will be applied correctly

3. **Verify deployment:**
   - Check that fonts load: https://sun7piscine.ch/services
   - Check browser console for errors

### **Option 2: Manual Deploy**

1. **Build locally:**
   ```bash
   npm run build
   ```

2. **Upload to Cloudflare:**
   - Upload the `.next` folder
   - Upload the `public` folder (including `_headers`)
   - Ensure `_headers` file is in the root of your deployment

---

## 🔍 VERIFY AFTER DEPLOYMENT

### Check These URLs:
- ✅ https://sun7piscine.ch - Homepage loads fonts
- ✅ https://sun7piscine.ch/services - Services page loads fonts
- ✅ https://sun7piscine.ch/realisations - Images load correctly

### Check Browser Console:
- ❌ **Should NOT see:** "Refused to load the stylesheet"
- ❌ **Should NOT see:** 404 errors for `Avant-Versoix.jpeg`, `Avant-Gland.jpeg`, etc.
- ✅ **Should see:** Montserrat and Bebas Neue fonts loading

---

## 🔧 IF STILL HAVING ISSUES

### Issue: CSP Still Blocking Fonts

**Solution 1: Clear Cloudflare Cache**
1. Go to Cloudflare Dashboard
2. Navigate to Caching → Configuration
3. Click "Purge Everything"
4. Wait 30 seconds
5. Test again

**Solution 2: Check Cloudflare Page Rules**
- Ensure no Page Rules are overriding CSP headers
- Check in Cloudflare Dashboard → Rules → Page Rules

**Solution 3: Add CSP via Cloudflare Transform Rules**
1. Go to Cloudflare Dashboard
2. Navigate to Rules → Transform Rules → Modify Response Header
3. Create new rule:
   - **Name:** Allow Google Fonts
   - **When incoming requests match:** All incoming requests
   - **Then:** Set dynamic > `Content-Security-Policy`
   - **Value:** 
   ```
   default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://static.cloudflareinsights.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; style-src-elem 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' data: https://fonts.gstatic.com; img-src 'self' data: blob: https:;
   ```

### Issue: Images Still 404

**Check:**
1. Verify files exist in `public/sun7piscine-photos/before and after/para edhe pas/`:
   - `Avant-Renovation-1.jpeg`
   - `Apres-Renovation-1.jpeg`
   - `Avant-Renovation-2.jpeg`
   - `Apres-Renovation-2.jpeg`
   - `Avant-Renovation-3.jpeg`
   - `Apres-Renovation-3.jpeg`

2. If files are missing, run:
   ```bash
   cd "/home/yll/websites-dev/sun7piscine.ch/public/sun7piscine-photos/before and after/para edhe pas"
   ls -la
   ```

3. Re-upload the correct images to production

---

## 🎯 EXPECTED RESULT

After deployment:
- ✅ Google Fonts (Montserrat & Bebas Neue) load correctly
- ✅ All images display without 404 errors
- ✅ No CSP violations in console
- ✅ Site loads fast with proper caching

---

## 📞 NEED HELP?

If issues persist after following these steps:
1. Share the production URL
2. Share screenshot of browser console errors
3. Check Cloudflare cache settings
4. Verify `_headers` file is deployed

---

## 🔄 QUICK REDEPLOY COMMAND

```bash
# Clean, build, and prepare for deployment
cd "/home/yll/websites-dev/sun7piscine.ch"
rm -rf .next
npm run build

# Then commit and push
git add .
git commit -m "fix: production CSP and image issues"
git push origin main
```

---

**Date:** October 18, 2025
**Status:** ✅ Ready for deployment
