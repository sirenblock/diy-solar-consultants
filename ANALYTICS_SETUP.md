# Analytics & Conversion Tracking Setup Guide

This guide covers the comprehensive analytics and conversion tracking implementation for the DIY Solar Consultants website.

## Overview

The website includes:
- **Google Analytics 4 (GA4)** - Core analytics and event tracking
- **Google Tag Manager (GTM)** - Advanced tracking and tag management
- **Microsoft Clarity** - Heatmaps and session recordings
- **Facebook Pixel** - Social media advertising tracking
- **A/B Testing Framework** - Built-in experimentation capabilities

## Quick Start

### 1. Environment Variables

Copy `.env.local.example` to `.env.local` and fill in your tracking IDs:

```bash
# Google Analytics 4
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Google Tag Manager (optional)
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# Microsoft Clarity
NEXT_PUBLIC_CLARITY_ID=xxxxxxxxxx

# Facebook Pixel (optional)
NEXT_PUBLIC_FACEBOOK_PIXEL_ID=xxxxxxxxxxxxxx

# Enable analytics in development (optional)
NEXT_PUBLIC_ENABLE_ANALYTICS=false
```

### 2. Get Your Tracking IDs

#### Google Analytics 4
1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new GA4 property
3. Get your Measurement ID (format: `G-XXXXXXXXXX`)
4. Add it to `.env.local`

#### Google Tag Manager (Optional but Recommended)
1. Go to [Google Tag Manager](https://tagmanager.google.com/)
2. Create a new container
3. Get your Container ID (format: `GTM-XXXXXXX`)
4. Add it to `.env.local`

#### Microsoft Clarity (Recommended - Free)
1. Go to [Microsoft Clarity](https://clarity.microsoft.com/)
2. Create a new project
3. Get your Project ID
4. Add it to `.env.local`

#### Facebook Pixel (Optional)
1. Go to [Facebook Business Manager](https://business.facebook.com/)
2. Create a pixel in Events Manager
3. Get your Pixel ID
4. Add it to `.env.local`

## Events Being Tracked

### Conversion Events (Primary)

| Event Name | Description | Value | Triggered When |
|-----------|-------------|-------|----------------|
| `conversion` | Contact form submission | $2299 | User submits design request form |
| `generate_lead` | Enhanced lead tracking | $2299 | Form submission with detailed data |
| `calculator_completed` | Solar calculator usage | Varies | User completes savings calculation |
| `phone_clicked` | Phone number click | - | User clicks any phone number |
| `email_clicked` | Email address click | - | User clicks email address |

### Engagement Events

| Event Name | Description | Triggered When |
|-----------|-------------|----------------|
| `scroll_depth` | Scroll tracking | 25%, 50%, 75%, 100% milestones |
| `time_on_page` | Page engagement | Page unload |
| `element_view` | Element visibility | Key elements become visible |
| `button_click` | Button/CTA clicks | Any button clicked |
| `faq_interaction` | FAQ engagement | FAQ item expanded/collapsed |
| `testimonial_view` | Testimonial visibility | Testimonial viewed |
| `video_play` | Video started | Video playback begins |

### Form Events

| Event Name | Description | Triggered When |
|-----------|-------------|----------------|
| `form_started` | Form interaction begun | First field interaction |
| `form_field_interaction` | Field focused | User interacts with field |
| `form_error` | Validation error | Field validation fails |
| `form_submitted` | Successful submission | Form submitted successfully |

### Funnel Events

| Event Name | Description | Tracked Data |
|-----------|-------------|--------------|
| `funnel_step` | Multi-step form progress | Step name, number, value |

## Tracked Components

### 1. ContactForm.jsx
- Form start tracking
- Field interaction tracking
- Error tracking
- Submission tracking
- Enhanced lead data

### 2. Header.jsx
- Phone click tracking (desktop + mobile)
- All CTA buttons tracked

### 3. Footer.jsx
- Phone click tracking
- Email click tracking

### 4. Button.jsx
- All button clicks tracked
- CTA navigation tracked
- Location-aware tracking

### 5. Pages with Scroll Tracking
Add to any page:
```jsx
import useScrollTracking from '@/hooks/useScrollTracking';

export default function MyPage() {
  useScrollTracking(); // Tracks 25%, 50%, 75%, 100%

  return <div>...</div>;
}
```

## A/B Testing

### Using the A/B Testing Framework

```jsx
import { useExperiment } from '@/lib/experiments';

export default function MyComponent() {
  const { variant, trackConversion, isVariantA, isVariantB } = useExperiment(
    'hero_headline_test',
    0.5 // 50/50 split
  );

  return (
    <div>
      {isVariantA && <h1>Save $2,000+ Per Year</h1>}
      {isVariantB && <h1>Go Solar & Save Thousands</h1>}

      <button onClick={() => trackConversion('cta_click', 100)}>
        Get Started
      </button>
    </div>
  );
}
```

### Predefined Experiments

Available in `EXPERIMENTS` constant:
- `HERO_HEADLINE` - Test different hero headlines
- `CTA_BUTTON_TEXT` - Test CTA button copy
- `PRICING_DISPLAY` - Test pricing presentation
- `TESTIMONIAL_LAYOUT` - Test testimonial layouts

## Google Analytics 4 Setup

### Recommended GA4 Events to Configure

1. **Conversions** (mark as conversion in GA4):
   - `conversion`
   - `generate_lead`
   - `form_submitted`

2. **Key Events** (important but not conversions):
   - `calculator_completed`
   - `phone_clicked`
   - `email_clicked`

### Custom Dimensions

Add these custom dimensions in GA4 for better reporting:

| Dimension Name | Scope | Parameter |
|---------------|-------|-----------|
| Form Name | Event | `form_name` |
| CTA Location | Event | `cta_location` |
| Project Type | Event | `project_type` |
| Timeline | Event | `timeline` |
| System Size | Event | `system_size` |
| Button Type | Event | `button_type` |

### How to Add Custom Dimensions

1. Go to GA4 Admin → Data display → Custom definitions
2. Click "Create custom dimension"
3. Add each dimension from the table above
4. Match the parameter name exactly

## Google Tag Manager Setup (Optional)

If using GTM, configure these:

### Tags to Create

1. **GA4 Configuration Tag**
   - Type: Google Analytics: GA4 Configuration
   - Measurement ID: Use GA_MEASUREMENT_ID
   - Trigger: All Pages

2. **Enhanced Conversions Tag**
   - Type: Google Ads Conversion Tracking
   - Conversion ID: Your Google Ads conversion ID
   - Trigger: Custom event `conversion`

3. **Facebook Pixel Tag**
   - Type: Custom HTML
   - Trigger: All Pages
   - Add Facebook pixel code

### Variables to Create

- `{{GA Measurement ID}}` - Pulls from environment
- `{{Form Name}}` - Data Layer variable
- `{{CTA Location}}` - Data Layer variable

## Conversion Funnel Setup

The design request form tracks a complete funnel:

1. **Form View** - User views form
2. **Form Start** - User interacts with first field
3. **Field Interactions** - Track each field touched
4. **Form Errors** - Track validation errors
5. **Form Submission** - Successful submission

### Viewing the Funnel in GA4

1. Go to Explore → Funnel exploration
2. Create a funnel with these steps:
   - Step 1: `page_view` (Design Request page)
   - Step 2: `form_started`
   - Step 3: `form_submitted`
3. View conversion rate and drop-off points

## Microsoft Clarity Setup

Clarity automatically records:
- Session recordings
- Heatmaps (click, scroll, area)
- Rage clicks
- Dead clicks
- Quick backs

No additional configuration needed after adding the Project ID.

## Testing Your Analytics

### Development Testing

1. Set `NEXT_PUBLIC_ENABLE_ANALYTICS=true` in `.env.local`
2. Open Chrome DevTools → Network tab
3. Filter by "analytics" or "gtag"
4. Perform actions and watch for tracking calls

### GA4 Real-Time Testing

1. Go to GA4 → Reports → Realtime
2. Perform actions on your site
3. Verify events appear in real-time view

### Debug Mode

Install [GA Debugger Chrome Extension](https://chrome.google.com/webstore/detail/google-analytics-debugger)

1. Enable the extension
2. Open DevTools console
3. See detailed GA tracking logs

## Privacy & Compliance

### GDPR Compliance

The implementation includes:
- Cookie consent banner (CookieConsent.jsx)
- Default consent set to "denied"
- Analytics only activate after user consent
- IP anonymization enabled

### Cookie Consent Flow

1. User visits site
2. Consent banner appears
3. Analytics set to "denied" by default
4. User accepts → Analytics enabled
5. User declines → No tracking

### Revoking Consent

```javascript
import { revokeConsent } from '@/utils/analytics';

// Call this when user revokes consent
revokeConsent();
```

## Troubleshooting

### Events Not Showing in GA4

1. Check environment variables are set
2. Verify GA_MEASUREMENT_ID format (G-XXXXXXXXXX)
3. Check browser console for errors
4. Ensure GDPR consent was given
5. Check GA4 real-time view (events can take 24-48h for reports)

### Clarity Not Recording

1. Verify CLARITY_ID is correct
2. Check if ad blockers are enabled
3. Clear cache and cookies
4. Wait 5-10 minutes for first recordings

### A/B Tests Not Working

1. Clear localStorage
2. Check if experiment ID matches in code
3. Verify variant assignment in DevTools → Application → Local Storage

## Performance Considerations

All analytics scripts load with:
- `strategy="afterInteractive"` - Loads after page is interactive
- No blocking of critical rendering path
- Minimal performance impact (<100ms)

## Support & Resources

- [GA4 Documentation](https://support.google.com/analytics/answer/9304153)
- [GTM Documentation](https://support.google.com/tagmanager)
- [Clarity Help](https://docs.microsoft.com/en-us/clarity/)
- [Next.js Analytics Guide](https://nextjs.org/docs/app/building-your-application/optimizing/analytics)

## File Structure

```
src/
├── lib/
│   ├── gtag.js              # GA4 tracking utilities
│   └── experiments.js       # A/B testing framework
├── utils/
│   └── analytics.js         # Main analytics functions
├── hooks/
│   └── useScrollTracking.js # Scroll depth tracking
├── components/
│   ├── Analytics.jsx        # GA4 component
│   ├── GTM.jsx             # Google Tag Manager
│   ├── Clarity.jsx         # Microsoft Clarity
│   ├── ContactForm.jsx     # Form with tracking
│   ├── Button.jsx          # Tracked buttons
│   ├── Header.jsx          # Tracked phone links
│   └── Footer.jsx          # Tracked contact links
└── pages/
    └── _app.jsx            # Analytics initialization
```

## Next Steps

1. ✅ Set up GA4 property
2. ✅ Add measurement ID to `.env.local`
3. ✅ Test in development mode
4. ✅ Configure custom dimensions
5. ✅ Set up conversion events
6. ✅ Create funnels in GA4
7. ✅ Set up Clarity project
8. ✅ Deploy to production
9. ✅ Monitor for 1 week
10. ✅ Set up custom reports

## Success Metrics

Track these KPIs:
- **Conversion Rate**: Form submissions / visitors
- **Phone Click Rate**: Phone clicks / visitors
- **Calculator Usage**: Calculator completions / visitors
- **Scroll Depth**: % reaching 75%+ scroll
- **Time on Page**: Average engagement time
- **Funnel Drop-off**: Where users abandon form

Good luck with your analytics setup! 📊
