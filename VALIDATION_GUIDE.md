# Schema Validation Guide

## Quick Validation Checklist

### Before Deployment
Run your local development server and test each page with Google's Rich Results Test.

### Testing Tools

#### 1. Google Rich Results Test
**URL:** https://search.google.com/test/rich-results

**How to use:**
1. Start your development server (`npm run dev`)
2. Copy the full HTML of each page (View Source)
3. Paste into the "Code Snippet" tab
4. Click "Test Code"
5. Review results

**OR** (after deployment):
1. Enter your live URL
2. Click "Test URL"
3. Review results

#### 2. Schema.org Validator
**URL:** https://validator.schema.org/

**How to use:**
1. Copy page HTML or enter URL
2. Click "Run Test"
3. Check for errors/warnings

### Pages to Test

#### ✅ Homepage (/)
**Expected schemas:**
- LocalBusiness
- Organization
- BreadcrumbList

**What to verify:**
- Aggregate rating shows 4.9/5 with 5000 reviews
- Contact information present
- Social media links (sameAs)
- Service catalog listed

**Test command:**
```bash
# Get page HTML
curl http://localhost:3000/ > homepage.html
# Then paste into validator
```

#### ✅ Services (/services)
**Expected schemas:**
- Service (4 different services)
- BreadcrumbList

**What to verify:**
- All 4 services listed (design, permitting, equipment, consulting)
- Each service has provider, area served
- Pricing information where applicable

#### ✅ Equipment (/equipment)
**Expected schemas:**
- ItemList (equipment categories)
- Product (aggregate offering)
- BreadcrumbList

**What to verify:**
- 4 equipment categories (panels, inverters, batteries, mounting)
- Price range $7,300-$12,200
- Aggregate rating 4.9/5

#### ✅ Process (/process)
**Expected schemas:**
- HowTo
- BreadcrumbList

**What to verify:**
- 8 steps listed
- Each step has directions
- Tools and supplies listed
- Total time: P12W (12 weeks)
- Cost range: $10,000-$25,000

#### ✅ About (/about)
**Expected schemas:**
- AggregateRating
- Review (6 reviews)
- BreadcrumbList

**What to verify:**
- Aggregate rating 4.9/5
- 6 individual reviews
- All reviews have author, rating, text

#### ✅ FAQ (/faq)
**Expected schemas:**
- FAQPage
- Question/Answer pairs

**What to verify:**
- All FAQ questions included
- Answers properly formatted

#### ✅ Pricing (/pricing)
**Expected schemas:**
- Product (service packages)
- BreadcrumbList

**What to verify:**
- Package offers listed
- Pricing information

## Common Issues & Fixes

### Issue: "Missing required property"
**Fix:** Check the schema utility function to ensure all required properties are included.

### Issue: "Invalid date format"
**Fix:** Dates should be ISO 8601 format: `YYYY-MM-DD` or `YYYY-MM-DDTHH:MM:SS`

### Issue: "Invalid URL"
**Fix:** URLs must be absolute, not relative. Use `https://diysolar.com/page` not `/page`

### Issue: "Rating value out of range"
**Fix:** Ratings must be between 0-5. Check bestRating and worstRating are set correctly.

### Issue: "Price must be a string"
**Fix:** Prices should be strings: `"1000"` not `1000`

## Validation Workflow

### Step 1: Local Testing
```bash
# Start dev server
npm run dev

# Test each page in browser
# View source (Ctrl/Cmd + U)
# Copy HTML
# Paste into Rich Results Test
```

### Step 2: Fix Errors
If errors are found:
1. Note the schema type and property name
2. Check `/src/utils/schema.js`
3. Fix the issue
4. Re-test

### Step 3: Production Testing
After deployment:
1. Test live URLs in Rich Results Test
2. Submit sitemap to Google Search Console
3. Monitor "Enhancements" section in Search Console

## Expected Results

### Rich Snippets You Should See

#### Homepage
- ⭐ Star rating (4.9/5, 5000 reviews)
- 📍 Location (United States)
- 📞 Phone number
- 🕒 Business hours
- 🔗 Social media links

#### Services
- 📋 List of services
- 💰 Pricing (where provided)
- ⭐ Service ratings

#### Equipment
- 📦 Product categories
- 💵 Price ranges
- ⭐ Product ratings
- ✅ Availability

#### Process (HowTo)
- 📝 Step-by-step guide
- ⏱️ Time estimate (12 weeks)
- 💰 Cost estimate ($10k-$25k)
- 🛠️ Tools needed
- 📦 Supplies needed

#### FAQ
- ❓ Accordion-style Q&A
- 🔍 Direct answers in search

#### Reviews
- ⭐ Star ratings
- 💬 Review snippets
- 👤 Reviewer names

## Search Console Monitoring

After deployment, monitor these areas:

### Enhancements
- **Products** - Check equipment page
- **FAQs** - Check FAQ page
- **How-to** - Check process page
- **Breadcrumbs** - Should show on all pages

### Coverage
- Ensure all pages are indexed
- No "Excluded" pages with valid schema

### Performance
Monitor click-through rates:
- Pages with rich snippets should have higher CTR
- Compare before/after implementation

## Testing Schedule

### Immediate (Pre-deployment)
- [ ] Test all pages with Rich Results Test
- [ ] Validate with Schema.org validator
- [ ] Fix any errors or warnings
- [ ] Document any known issues

### Week 1 (Post-deployment)
- [ ] Submit sitemap to Search Console
- [ ] Verify pages are indexed
- [ ] Check for structured data errors
- [ ] Monitor enhancement reports

### Week 2-4
- [ ] Monitor rich snippet appearance in search
- [ ] Track CTR changes
- [ ] Address any new errors

### Monthly
- [ ] Review enhancement reports
- [ ] Update schema as content changes
- [ ] Monitor for new Google guidelines

## Troubleshooting

### Schema Not Appearing
**Possible causes:**
- Page not indexed yet (wait 1-2 weeks)
- Errors in schema markup
- Doesn't meet rich result eligibility

**Solutions:**
- Request indexing in Search Console
- Use URL Inspection tool
- Fix validation errors

### Warnings in Rich Results Test
**Note:** Warnings are optional features, not errors. Schema will still work.

**Common warnings:**
- Missing image (optional for many schema types)
- Missing aggregateRating (optional)
- Missing author (optional for some content)

**Decision:** Add these fields if they improve results, but not required.

## Success Metrics

Track these metrics to measure success:

### Search Console
- Number of pages with rich results
- Impressions from rich snippets
- Click-through rate (CTR) improvement

### Expected Improvements
- **CTR increase:** 20-30% higher for pages with rich snippets
- **Rich result appearance:** Within 2-4 weeks
- **Knowledge panel:** Possible for brand searches

## Resources

- **Google Search Central:** https://developers.google.com/search
- **Schema.org Documentation:** https://schema.org/docs/schemas.html
- **Rich Results Test:** https://search.google.com/test/rich-results
- **Schema Validator:** https://validator.schema.org/
- **Search Console:** https://search.google.com/search-console

## Support

If you encounter issues:
1. Check this guide
2. Review `SCHEMA_IMPLEMENTATION.md`
3. Check schema.org documentation
4. Test in Rich Results Tool
5. Review Google Search Central guidelines

## Next Steps

1. ✅ Complete local testing
2. ✅ Fix any errors found
3. ✅ Deploy to production
4. ✅ Submit sitemap to Search Console
5. ✅ Monitor for 2-4 weeks
6. ✅ Track performance improvements
