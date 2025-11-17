# Task 12: Analytics & Conversion Tracking Setup

## Objective
Implement comprehensive analytics, conversion tracking, and user behavior monitoring to measure optimization success and identify improvement opportunities.

## Working Directory
/Users/lsd/msclaude/projects/1-1/diy-solar-consultants

## Requirements

### 1. Set Up Google Analytics 4 (GA4)
- Create GA4 property
- Install gtag.js tracking code
- Configure enhanced measurement
- Set up custom events
- Create conversion goals

### 2. Set Up Google Tag Manager (GTM)
- Install GTM container
- Move GA4 to GTM
- Set up triggers and tags
- Create data layer
- Test in Preview mode

### 3. Configure Conversion Goals
Track these key conversions:
- Design request form submissions
- Phone number clicks
- Email link clicks
- Calculator usage
- PDF downloads
- Newsletter signups
- Quote button clicks

### 4. Set Up Event Tracking
Track user interactions:
- CTA button clicks
- Form field interactions
- Video plays
- Scroll depth (25%, 50%, 75%, 100%)
- Time on page milestones
- File downloads
- External link clicks

### 5. Create Custom Dimensions
- User type (new vs returning)
- Traffic source detail
- Device category
- Landing page
- Conversion funnel stage
- Form completion time

### 6. Set Up Goal Funnels
Track conversion paths:
1. Homepage → Services → Pricing → Design Request
2. Calculator → Results → Design Request
3. FAQ → Services → Contact

### 7. Implement Facebook Pixel (Optional)
If running Facebook ads:
- Install base pixel
- Set up custom conversions
- Create lookalike audiences
- Track ad performance

### 8. Add Hotjar or Microsoft Clarity
For behavior analytics:
- Install tracking script
- Set up heatmaps
- Configure session recordings
- Create surveys
- Set up feedback widgets

## Implementation Details

### Google Analytics 4 Setup
```jsx
// /src/components/Analytics.jsx
import Script from 'next/script';

export default function Analytics() {
  const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}
```

### Custom Event Tracking
```javascript
// /src/utils/analytics.js
export const trackEvent = (eventName, eventParams = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

// Usage examples:
// trackEvent('design_request_submitted', { form_type: 'multi-step' });
// trackEvent('phone_click', { location: 'sticky_cta' });
// trackEvent('calculator_completed', { monthly_bill: 150 });
```

### Track Form Submissions
```jsx
// In form component
const handleSubmit = async (e) => {
  e.preventDefault();

  // Track form start
  trackEvent('form_started', {
    form_name: 'design_request',
    form_step: 1
  });

  // ... form submission logic ...

  // Track form completion
  trackEvent('form_submitted', {
    form_name: 'design_request',
    form_value: estimatedValue,
    completion_time: completionTime
  });
};
```

### Track CTA Clicks
```jsx
// Enhanced CTA component
export default function TrackedCTA({ href, children, location }) {
  const handleClick = () => {
    trackEvent('cta_clicked', {
      cta_text: children,
      cta_location: location,
      cta_destination: href
    });
  };

  return (
    <Link href={href} onClick={handleClick} className="btn-primary">
      {children}
    </Link>
  );
}
```

### Scroll Depth Tracking
```jsx
// /src/hooks/useScrollTracking.js
import { useEffect } from 'react';

export default function useScrollTracking() {
  useEffect(() => {
    let depths = { 25: false, 50: false, 75: false, 100: false };

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;

      Object.keys(depths).forEach(depth => {
        if (scrollPercent >= depth && !depths[depth]) {
          trackEvent('scroll_depth', {
            depth: `${depth}%`,
            page: window.location.pathname
          });
          depths[depth] = true;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
}

// Use in pages
export default function HomePage() {
  useScrollTracking();
  // ...
}
```

### Phone Click Tracking
```jsx
// Phone link component
export default function PhoneLink({ number, location }) {
  const handleClick = () => {
    trackEvent('phone_clicked', {
      phone_number: number,
      click_location: location
    });
  };

  return (
    <a
      href={`tel:${number}`}
      onClick={handleClick}
      className="phone-link"
    >
      {number}
    </a>
  );
}
```

### Google Tag Manager Implementation
```jsx
// /src/components/GTM.jsx
import Script from 'next/script';

export default function GTM() {
  const GTM_ID = 'GTM-XXXXXXX';

  return (
    <>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
        `}
      </Script>
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
    </>
  );
}
```

### Microsoft Clarity Setup
```jsx
// /src/components/Clarity.jsx
import Script from 'next/script';

export default function Clarity() {
  const CLARITY_ID = 'XXXXXXXXXX';

  return (
    <Script id="microsoft-clarity" strategy="afterInteractive">
      {`
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${CLARITY_ID}");
      `}
    </Script>
  );
}
```

## Integration with _app.jsx
```jsx
// /src/pages/_app.jsx
import Analytics from '@/components/Analytics';
import GTM from '@/components/GTM';
import Clarity from '@/components/Clarity';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Analytics />
      <GTM />
      <Clarity />
      <Component {...pageProps} />
    </>
  );
}
```

## Conversion Goals to Configure

### Primary Conversions
1. Design Request Form Submission
   - Goal Type: Destination
   - URL: /design-request-thank-you
   - Value: $500

2. Phone Call Click
   - Goal Type: Event
   - Event: phone_clicked
   - Value: $250

3. Calculator Completion
   - Goal Type: Event
   - Event: calculator_completed
   - Value: $100

### Secondary Conversions
4. Email Signup
5. PDF Download
6. Chat Initiated
7. Video Watched

## Custom Reports to Create
1. Conversion Funnel Report
2. Traffic Source Performance
3. Landing Page Analysis
4. Form Abandonment Report
5. Device Performance Comparison

## Files to Create/Modify
- `/src/components/Analytics.jsx` - GA4 component
- `/src/components/GTM.jsx` - Tag Manager
- `/src/components/Clarity.jsx` - Behavior analytics
- `/src/utils/analytics.js` - Helper functions
- `/src/hooks/useScrollTracking.js` - Scroll tracking
- `/src/pages/_app.jsx` - Add analytics components

## Success Criteria
- ✅ GA4 tracking code installed and verified
- ✅ GTM container active and tested
- ✅ All conversion goals configured
- ✅ Custom events tracking correctly
- ✅ Phone click tracking working
- ✅ Form submission tracking validated
- ✅ Scroll depth tracking functional
- ✅ Heatmaps collecting data
- ✅ Real-time data showing in GA4
- ✅ No tracking errors in console

## Testing Checklist
- [ ] Test GA4 in Real-Time report
- [ ] Verify GTM Preview mode
- [ ] Submit test form and check event
- [ ] Click phone number and verify
- [ ] Test on mobile device
- [ ] Check conversion tracking
- [ ] Verify scroll depth events
- [ ] Test in incognito mode
- [ ] Check data layer in console
- [ ] Validate with GA Debugger extension

## Privacy Compliance
- Add cookie consent banner (GDPR)
- Privacy policy page
- Cookie policy page
- Opt-out option
- Data retention settings
- IP anonymization (if required)

## KPIs to Monitor
- Conversion rate (goal: 3-5%)
- Bounce rate (goal: <50%)
- Avg. session duration (goal: 3+ min)
- Pages per session (goal: 3+)
- Form completion rate (goal: 70%+)
- Phone click rate
- Calculator engagement rate

## Notes
- Test thoroughly before launch
- Don't track PII (personally identifiable information)
- Set up alerts for tracking failures
- Review data weekly
- A/B test based on insights
- Use data to inform optimization decisions
