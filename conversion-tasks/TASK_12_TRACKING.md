# Task 12: Conversion Tracking & Analytics

## Objective
Implement comprehensive conversion tracking, event tracking for all CTAs, funnel analysis, and prepare for A/B testing.

## Working Directory
/Users/lsd/msclaude/projects/1-1/diy-solar-consultants

## Analytics Setup

### 1. Google Analytics 4 Setup

```jsx
// src/lib/gtag.js
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

// Track page views
export const pageview = (url) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

// Track events
export const event = ({ action, category, label, value }) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track conversions
export const conversion = (conversionId, value = 0) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'conversion', {
      send_to: `${GA_MEASUREMENT_ID}/${conversionId}`,
      value: value,
      currency: 'USD',
    });
  }
};
```

```jsx
// src/pages/_app.jsx
import Script from 'next/script';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import * as gtag from '../lib/gtag';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      {/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_MEASUREMENT_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      
      <Component {...pageProps} />
    </>
  );
}
```

### 2. Event Tracking for CTAs

```jsx
// src/components/TrackedCTA.jsx
import * as gtag from '@/lib/gtag';

export function TrackedCTA({ children, href, category, label, value }) {
  const handleClick = () => {
    gtag.event({
      action: 'click',
      category: category || 'CTA',
      label: label || href,
      value: value || 0,
    });
  };

  return (
    <Link href={href} onClick={handleClick}>
      {children}
    </Link>
  );
}

// Usage:
<TrackedCTA 
  href="/design-request" 
  category="Hero CTA" 
  label="Get Free Design"
  value={2299}
>
  Get Free Design
</TrackedCTA>
```

### 3. Form Tracking

```jsx
// src/components/ContactForm.jsx
import * as gtag from '@/lib/gtag';

const handleSubmit = async (e) => {
  e.preventDefault();
  
  // Track form start
  gtag.event({
    action: 'form_start',
    category: 'Contact Form',
    label: 'Design Request Form',
  });
  
  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
    
    if (res.ok) {
      // Track successful submission
      gtag.conversion('CONTACT_FORM_CONVERSION_ID', 2299);
      gtag.event({
        action: 'form_submit',
        category: 'Contact Form',
        label: 'Design Request Form - Success',
        value: 2299,
      });
      
      // Redirect to thank you page
      router.push('/thank-you');
    }
  } catch (error) {
    // Track form errors
    gtag.event({
      action: 'form_error',
      category: 'Contact Form',
      label: 'Design Request Form - Error',
    });
  }
};
```

### 4. Funnel Tracking

```javascript
// Track multi-step funnel
export const trackFunnelStep = (stepName, stepNumber, value = 0) => {
  gtag.event({
    action: 'funnel_step',
    category: 'Design Request Funnel',
    label: `Step ${stepNumber}: ${stepName}`,
    value: value,
  });
};

// In multi-step form:
useEffect(() => {
  const steps = ['Contact Info', 'Project Details', 'Confirmation'];
  trackFunnelStep(steps[currentStep - 1], currentStep);
}, [currentStep]);
```

### 5. Scroll Depth Tracking

```jsx
// src/hooks/useScrollTracking.js
import { useEffect } from 'react';
import * as gtag from '@/lib/gtag';

export function useScrollTracking() {
  useEffect(() => {
    let tracked = { 25: false, 50: false, 75: false, 100: false };
    
    const handleScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      
      Object.keys(tracked).forEach(threshold => {
        if (scrollPercent >= threshold && !tracked[threshold]) {
          tracked[threshold] = true;
          gtag.event({
            action: 'scroll',
            category: 'Engagement',
            label: `${threshold}% Scroll Depth`,
            value: parseInt(threshold),
          });
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
}

// Usage in pages:
export default function HomePage() {
  useScrollTracking();
  return <div>...</div>;
}
```

### 6. Click Tracking for All Important Elements

```jsx
// Track phone clicks
<a 
  href="tel:+18005551234"
  onClick={() => gtag.event({
    action: 'click',
    category: 'Phone',
    label: 'Header Phone Number',
  })}
>
  (800) 555-1234
</a>

// Track email clicks
<a 
  href="mailto:info@diysolar.com"
  onClick={() => gtag.event({
    action: 'click',
    category: 'Email',
    label: 'Footer Email',
  })}
>
  info@diysolar.com
</a>

// Track calculator interactions
<button 
  onClick={() => {
    gtag.event({
      action: 'calculate',
      category: 'Solar Calculator',
      label: 'Calculate Savings Button',
      value: parseInt(estimatedSavings),
    });
    calculateSavings();
  }}
>
  Calculate My Savings
</button>
```

### 7. Heatmap Integration (Microsoft Clarity)

```jsx
// src/pages/_app.jsx
<Script
  id="clarity-init"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_ID}");
    `,
  }}
/>
```

### 8. A/B Testing Framework

```jsx
// src/lib/experiments.js
export const getExperimentVariant = (experimentId) => {
  // Check if user already has a variant
  let variant = localStorage.getItem(`experiment_${experimentId}`);
  
  if (!variant) {
    // Randomly assign variant
    variant = Math.random() < 0.5 ? 'A' : 'B';
    localStorage.setItem(`experiment_${experimentId}`, variant);
    
    // Track variant assignment
    gtag.event({
      action: 'experiment_view',
      category: 'A/B Test',
      label: `${experimentId}_${variant}`,
    });
  }
  
  return variant;
};

// Usage:
const heroVariant = getExperimentVariant('hero_headline_test');

{heroVariant === 'A' ? (
  <h1>Save $2,000+ Per Year on Electricity</h1>
) : (
  <h1>Go Solar & Save Thousands Every Year</h1>
)}
```

### 9. Conversion Goals Setup

```javascript
// Define conversion goals
export const CONVERSION_GOALS = {
  DESIGN_REQUEST: 'design_request_submitted',
  PHONE_CALL: 'phone_call_clicked',
  CALCULATOR_USED: 'calculator_completed',
  EMAIL_SIGNUP: 'email_subscribed',
  RESOURCE_DOWNLOAD: 'resource_downloaded',
};

// Track conversions
export const trackConversion = (goal, value = 0) => {
  gtag.event(goal, {
    value: value,
    currency: 'USD',
  });
  
  // Also send to conversion tracking
  if (goal === CONVERSION_GOALS.DESIGN_REQUEST) {
    gtag.conversion('AW-CONVERSION_ID/CONVERSION_LABEL', value);
  }
};
```

### 10. Dashboard Data Layer

```jsx
// Send enhanced data to analytics
const trackEnhancedData = (formData) => {
  gtag.event('generate_lead', {
    currency: 'USD',
    value: 2299,
    lead_type: 'design_request',
    electric_bill: formData.electricBill,
    timeline: formData.timeline,
    location: formData.state,
  });
};
```

## Environment Variables

```bash
# .env.local
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_CLARITY_ID=xxxxxxxxxx
NEXT_PUBLIC_FB_PIXEL_ID=xxxxxxxxxxxxxx
```

## Files to Create/Update
- `/src/lib/gtag.js` - Analytics utilities
- `/src/lib/experiments.js` - A/B testing framework
- `/src/hooks/useScrollTracking.js` - Scroll depth tracking
- `/src/pages/_app.jsx` - Add analytics scripts
- All CTA components - Add event tracking
- All form components - Add conversion tracking

## Events to Track

### Critical Conversion Events:
- ✅ Design request form submission
- ✅ Calculator completion
- ✅ Phone number clicks
- ✅ Email address clicks
- ✅ Chat widget opened
- ✅ Resource downloads

### Engagement Events:
- ✅ Scroll depth (25%, 50%, 75%, 100%)
- ✅ Video plays
- ✅ Testimonial views
- ✅ FAQ expansions
- ✅ Pricing tier views

### Funnel Events:
- ✅ Form starts
- ✅ Form step completions
- ✅ Form errors
- ✅ Form abandonment

## Success Criteria
✅ GA4 fully configured
✅ All CTAs tracked with events
✅ Form submissions tracked as conversions
✅ Funnel visualization in GA4
✅ Heatmaps active (Clarity)
✅ A/B testing framework ready
✅ Custom conversion goals defined
✅ Enhanced ecommerce data layer
