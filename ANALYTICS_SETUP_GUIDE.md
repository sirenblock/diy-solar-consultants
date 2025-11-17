# Analytics & Conversion Tracking Setup Guide

## Overview

This guide explains how to set up and use the comprehensive analytics and conversion tracking system implemented for DIY Solar Consultants.

## What Was Implemented

### 1. Core Analytics Components

- **Google Analytics 4 (GA4)** - Primary analytics platform
- **Google Tag Manager (GTM)** - Optional advanced tag management
- **Microsoft Clarity** - Free heatmaps and session recordings
- **Cookie Consent Banner** - GDPR/CCPA compliant consent management

### 2. Tracking Features

✅ Page views (automatic)
✅ Scroll depth (25%, 50%, 75%, 100%)
✅ Time on page
✅ Form submissions
✅ Form abandonment
✅ CTA button clicks
✅ Phone number clicks
✅ Email link clicks
✅ Calculator usage
✅ File downloads
✅ External link clicks
✅ Conversion goals

## Quick Start

### Step 1: Set Up Analytics Accounts

1. **Google Analytics 4** (Recommended - Free)
   - Go to https://analytics.google.com/
   - Create a new GA4 property
   - Copy your Measurement ID (format: G-XXXXXXXXXX)

2. **Microsoft Clarity** (Optional but Recommended - Free)
   - Go to https://clarity.microsoft.com/
   - Sign up and create a new project
   - Copy your Project ID

3. **Google Tag Manager** (Optional - For Advanced Users)
   - Go to https://tagmanager.google.com/
   - Create a new container
   - Copy your Container ID (format: GTM-XXXXXXX)

### Step 2: Configure Environment Variables

1. Copy `.env.local.example` to `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```

2. Add your analytics IDs to `.env.local`:
   ```env
   # Required
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

   # Optional but recommended
   NEXT_PUBLIC_CLARITY_ID=XXXXXXXXXX

   # Optional (use if you prefer GTM over direct GA4)
   NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
   ```

3. Enable analytics:
   ```env
   NEXT_PUBLIC_ENABLE_ANALYTICS=true
   ```

### Step 3: Start the Development Server

```bash
npm run dev
```

Visit http://localhost:3000 and check the browser console for analytics events (in development mode, events are logged to console).

## File Structure

```
src/
├── components/
│   ├── Analytics.jsx              # GA4 component
│   ├── GTM.jsx                    # Google Tag Manager
│   ├── Clarity.jsx                # Microsoft Clarity
│   ├── CookieConsent.jsx          # GDPR consent banner
│   ├── TrackedPhoneLink.jsx       # Phone link with tracking
│   └── TrackedCTA.jsx             # CTA button with tracking
├── hooks/
│   └── useScrollTracking.js       # Scroll depth tracking hook
├── utils/
│   └── analytics.js               # Analytics helper functions
└── pages/
    └── _app.jsx                   # Analytics integration
```

## Conversion Goals Configured

### Primary Conversions (High Value)

| Goal | Event Name | Value | Description |
|------|-----------|-------|-------------|
| Design Request Submitted | `design_request_submitted` | $500 | User completes design request form |
| Phone Click | `phone_clicked` | $250 | User clicks phone number |
| Lead Captured | `lead_captured` | $100 | User submits email for report |

### Secondary Conversions

| Goal | Event Name | Description |
|------|-----------|-------------|
| Calculator Completed | `calculator_completed` | User finishes solar calculator |
| Form Started | `form_started` | User begins filling out a form |
| CTA Clicked | `cta_clicked` | User clicks any CTA button |
| Calculator Report Requested | `calculator_report_requested` | User requests detailed report |

## Custom Events Reference

### Form Tracking

```javascript
import { trackFormStart, trackFormSubmission } from '@/utils/analytics';

// Track when user starts form
trackFormStart('form_name');

// Track when form is submitted
trackFormSubmission('form_name', {
  field1: 'value1',
  field2: 'value2'
});
```

### CTA Tracking

```javascript
import { trackCTAClick } from '@/utils/analytics';

trackCTAClick('Button Text', 'header', '/destination-url');
```

### Phone Click Tracking

```javascript
import TrackedPhoneLink from '@/components/TrackedPhoneLink';

<TrackedPhoneLink
  phoneNumber="(555) 123-4567"
  location="sticky_header"
  className="text-white font-bold"
/>
```

### Calculator Tracking

```javascript
import { trackCalculatorUsage } from '@/utils/analytics';

trackCalculatorUsage({
  monthly_bill: 150,
  system_size: 8.5,
  state: 'CA'
});
```

### Scroll Tracking

```javascript
import useScrollTracking from '@/hooks/useScrollTracking';

export default function MyPage() {
  // Automatically tracks 25%, 50%, 75%, 100% scroll depths
  useScrollTracking();

  return (
    <div>Page content...</div>
  );
}
```

## Testing Your Setup

### 1. Real-Time Testing in GA4

1. Go to GA4 > Reports > Realtime
2. Open your website in another tab
3. Perform actions (click buttons, submit forms, etc.)
4. Watch events appear in real-time

### 2. Debug Mode

In development, all events are logged to the browser console:

```javascript
// You'll see logs like:
📊 Analytics Event: cta_clicked { cta_text: "Get Quote", cta_location: "hero" }
```

### 3. GTM Preview Mode (if using GTM)

1. In GTM, click "Preview"
2. Enter your website URL
3. See all tags, triggers, and data layer events in real-time

### 4. Test Cookie Consent

1. Open your site in incognito mode
2. You should see the cookie consent banner
3. Click "Accept" - analytics should initialize
4. Check localStorage: `cookieConsent` should be set to "accepted"

## Google Analytics 4 Setup

### Configure Enhanced Measurement

1. Go to GA4 > Admin > Data Streams
2. Click your web stream
3. Under "Enhanced measurement", ensure these are enabled:
   - ✅ Page views
   - ✅ Scrolls
   - ✅ Outbound clicks
   - ✅ File downloads

### Create Custom Conversions

1. Go to GA4 > Configure > Events
2. Find these events in the list (after they've been tracked):
   - `design_request_submitted`
   - `phone_clicked`
   - `lead_captured`
   - `calculator_completed`
3. Click "Mark as conversion" for each

### Set Up Conversion Values

1. Go to GA4 > Configure > Conversions
2. For each conversion, click to edit
3. Add the suggested values:
   - Design Request: $500
   - Phone Click: $250
   - Lead Captured: $100

## Microsoft Clarity Setup

1. Go to https://clarity.microsoft.com/
2. Click on your project
3. View:
   - **Heatmaps** - See where users click and scroll
   - **Recordings** - Watch session replays
   - **Insights** - Get AI-powered insights

### Recommended Settings

- Enable session recordings
- Set up heatmaps for key pages:
  - Homepage
  - Design Request page
  - Calculator page
- Create segments for high-intent users

## Privacy & Compliance

### GDPR Compliance

✅ Cookie consent banner implemented
✅ Consent stored in localStorage
✅ Analytics only initialize after consent
✅ IP anonymization enabled
✅ Users can decline tracking

### Cookie Policy Updates Needed

Add to your Privacy Policy page:

```markdown
## Analytics & Cookies

We use analytics tools to improve our website:

- **Google Analytics 4** - Website analytics
- **Microsoft Clarity** - User behavior insights

These services collect:
- Pages visited
- Time on site
- Interactions with forms and buttons
- General location (city/state level)

We do NOT collect:
- Personally identifiable information
- Exact GPS coordinates
- Sensitive personal data

You can opt out at any time by declining cookies.
```

## Monitoring & Optimization

### Weekly Review Checklist

- [ ] Check conversion rate trends
- [ ] Review top-performing CTAs
- [ ] Analyze form abandonment points
- [ ] Check calculator completion rate
- [ ] Review Clarity heatmaps
- [ ] Watch session recordings of bounced users

### Key Metrics to Monitor

| Metric | Target | Current | Trend |
|--------|--------|---------|-------|
| Conversion Rate | 3-5% | - | - |
| Bounce Rate | <50% | - | - |
| Avg. Session Duration | >3 min | - | - |
| Form Completion Rate | >70% | - | - |
| Calculator Usage | - | - | - |
| Phone Clicks | - | - | - |

## Troubleshooting

### Events Not Showing in GA4

1. Check `.env.local` has correct `NEXT_PUBLIC_GA_MEASUREMENT_ID`
2. Clear browser cache and cookies
3. Wait 24-48 hours (GA4 can have delays)
4. Check browser console for errors
5. Ensure `NEXT_PUBLIC_ENABLE_ANALYTICS=true`

### Cookie Consent Not Appearing

1. Clear localStorage: `localStorage.clear()`
2. Refresh the page
3. Check `CookieConsent.jsx` is imported in `_app.jsx`

### Tracking Not Working After Consent

1. Accept cookie consent
2. Check localStorage: `localStorage.getItem('cookieConsent')`
3. Should return `"accepted"`
4. Refresh the page
5. Check console for gtag initialization

### No Data in Microsoft Clarity

1. Verify `NEXT_PUBLIC_CLARITY_ID` is correct
2. Wait 5-10 minutes for first data
3. Check Clarity dashboard > Settings > Installation
4. Ensure script is loading in browser DevTools

## Advanced Usage

### Create Custom Dimensions in GA4

1. Go to GA4 > Configure > Custom Definitions
2. Create custom dimensions:
   - **User Type** - Event parameter: `user_type`
   - **Traffic Source** - Event parameter: `traffic_source`
   - **Form Type** - Event parameter: `form_name`

### Set Up Goal Funnels

Track conversion paths:

```
Homepage → Calculator → Design Request
Calculator → Results → Lead Capture
FAQ → Services → Contact Form
```

### A/B Testing Integration

Use the analytics data to:
1. Identify underperforming pages
2. Test different CTAs
3. Optimize form fields
4. Improve calculator UX

## Support

### Documentation

- [Google Analytics 4 Docs](https://support.google.com/analytics/answer/10089681)
- [Microsoft Clarity Docs](https://docs.microsoft.com/en-us/clarity/)
- [GTM Documentation](https://support.google.com/tagmanager)

### Common Questions

**Q: Do I need both GA4 and GTM?**
A: No, start with GA4 only. Add GTM later if you need advanced tracking.

**Q: Is Microsoft Clarity free?**
A: Yes, completely free with unlimited sessions.

**Q: How long does data take to appear?**
A: Real-time reports are instant. Standard reports can take 24-48 hours.

**Q: Can users opt out?**
A: Yes, they can click "Decline" on the cookie banner.

## Next Steps

1. ✅ Set up GA4 account
2. ✅ Add IDs to `.env.local`
3. ✅ Test in development
4. ✅ Deploy to production
5. ⏳ Wait 48 hours for initial data
6. ⏳ Configure conversions in GA4
7. ⏳ Set up Clarity heatmaps
8. ⏳ Create weekly reporting dashboard
9. ⏳ Begin optimization based on data

## Production Deployment

Before deploying to production:

1. Update `.env.production` with production analytics IDs
2. Test cookie consent in incognito
3. Verify all tracking works on staging
4. Set up GA4 email alerts for tracking issues
5. Create initial baseline report

## Updates & Maintenance

- Review analytics setup quarterly
- Update conversion values based on actual LTV
- Add new events as features are added
- Archive old data per retention policy
- Update privacy policy as needed

---

**Last Updated:** 2025-01-17
**Version:** 1.0
**Contact:** analytics@diysolar.com
