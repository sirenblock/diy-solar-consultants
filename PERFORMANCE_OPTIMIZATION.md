# Performance Optimization Guide

This document outlines all performance optimizations implemented in the DIY Solar Consultants website to achieve excellent Core Web Vitals scores and fast page load times.

## Overview

The website has been optimized following industry best practices to achieve:
- Lighthouse Performance Score: 90+
- First Contentful Paint (FCP): <1.8s
- Largest Contentful Paint (LCP): <2.5s
- Cumulative Layout Shift (CLS): <0.1
- First Input Delay (FID): <100ms

## Implemented Optimizations

### 1. Build Configuration (`next.config.js`)

#### Code Splitting & Minification
- **SWC Minification**: Enabled for faster, more efficient minification
- **Bundle Analyzer**: Integrated for visualizing bundle sizes
- **Webpack Optimization**: Custom splitChunks configuration
  - Separate vendor chunk for node_modules
  - Dedicated chunk for recharts (heavy library)
  - Common chunk for shared code
  - Deterministic module IDs for better caching

#### Image Optimization
- **Modern Formats**: AVIF and WebP support
- **Responsive Images**: Multiple device sizes (640px to 1920px)
- **Caching**: 60-second minimum cache TTL

#### Compression & Caching
- **Gzip Compression**: Enabled for all responses
- **Static Asset Caching**: Immutable cache headers for fonts and images
- **Source Maps**: Disabled in production to reduce bundle size

#### Package Optimization
- **Modular Imports**: Tree-shaking for @heroicons/react
- **Production Browser Source Maps**: Disabled

### 2. Resource Hints (`_document.jsx`)

#### Preconnect
- Google Fonts API (fonts.googleapis.com)
- Google Fonts CDN (fonts.gstatic.com)

#### DNS Prefetch
- Google Analytics (google-analytics.com)
- Google Tag Manager (googletagmanager.com)

#### Font Preloading
- Inter font preloaded with `font-display: swap`
- System font fallback stack
- Non-blocking font loading with noscript fallback

### 3. Font Optimization (`globals.css`)

#### System Font Stack
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI',
             Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
             'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
             'Noto Color Emoji';
```

**Benefits:**
- Instant text rendering with system fonts
- Progressive enhancement with Inter
- No layout shift on font load
- Excellent cross-platform support

### 4. Code Splitting & Lazy Loading

#### Intersection Observer Hook (`useIntersectionObserver.js`)
Custom hook for lazy loading components when they enter the viewport:
- Configurable threshold and root margin
- Support for trigger-once or continuous observation
- Fallback for browsers without IntersectionObserver support

**Usage Example:**
```javascript
const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 })
return (
  <div ref={ref}>
    {isVisible ? <HeavyComponent /> : <Placeholder />}
  </div>
)
```

#### Lazy Chart Components (`LazyCharts.jsx`)
Recharts components dynamically imported to reduce initial bundle:
- Recharts is ~100KB gzipped
- Only loaded when charts are displayed
- SSR disabled for interactive components
- Loading placeholders during import

**Usage Example:**
```javascript
import { LazyLineChart, LazyLine } from '@/components/LazyCharts'
// Charts only load when ResultsDisplay is rendered
```

### 5. Analytics Optimization (`Analytics.jsx`)

#### Script Loading Strategy
- **afterInteractive**: Google Analytics loads after page is interactive
- **lazyOnload**: Chat widgets and non-critical scripts load on idle
- **Production Only**: Analytics disabled in development

#### GDPR Compliance
- Default consent set to denied
- Anonymized IP addresses
- SameSite cookie flags

#### Custom Event Tracking
Helper functions for tracking custom events and page views:
```javascript
import { trackEvent } from '@/components/Analytics'
trackEvent('calculator_completed', { system_size: '8kW' })
```

### 6. CSS Optimization (`tailwind.config.js`)

#### Content Purging
- Configured to scan all component files
- Removes unused CSS in production builds

#### Safelist
Dynamic classes preserved from purging:
- Solar and energy color variants
- Custom animation classes
- Dynamically applied utility classes

**Result:** Minimal CSS bundle size in production

### 7. Third-Party Script Optimization

All third-party scripts use Next.js `<Script>` component with appropriate strategies:
- **Analytics**: afterInteractive
- **Chat Widgets**: lazyOnload
- **Social Embeds**: lazyOnload

### 8. Environment Configuration

#### Production (`.env.production.example`)
- Google Analytics ID
- Feature flags for optional services
- Production API endpoints

#### Development (`.env.local.example`)
- Analytics disabled by default
- Local development URLs
- Debug mode enabled

## Performance Monitoring

### Bundle Analysis

Analyze bundle sizes and dependencies:
```bash
npm run analyze
```

This will:
1. Build the production bundle
2. Generate interactive visualizations
3. Open in browser automatically
4. Show both client and server bundles

**Look for:**
- Large individual packages (>100KB)
- Duplicate dependencies
- Unexpected includes in bundles

### Lighthouse Testing

Run Lighthouse in Chrome DevTools:
1. Open DevTools (F12)
2. Navigate to Lighthouse tab
3. Select "Performance" category
4. Run audit on production build

**Target Scores:**
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

### WebPageTest

Test real-world performance:
1. Visit https://www.webpagetest.org
2. Enter your production URL
3. Select test location and device
4. Review waterfall and metrics

**Monitor:**
- Start Render time
- Speed Index
- Time to Interactive
- Total Page Size

## Performance Budget

### JavaScript
- Main bundle: <200KB (gzipped)
- Vendor bundle: <150KB (gzipped)
- Total JS: <400KB (gzipped)

### CSS
- Main CSS: <50KB (gzipped)
- Critical CSS: <14KB (inline)

### Images
- Hero image: <150KB
- Other images: <100KB each
- Total per page: <2MB

### Fonts
- Font files: <100KB total
- WOFF2 format only

### Total Page Weight
- Initial load: <1MB
- Full page: <3MB

## Best Practices

### When Adding New Dependencies

1. **Check bundle size:**
   ```bash
   npm run analyze
   ```

2. **Consider alternatives:**
   - Is there a lighter alternative?
   - Can we use native APIs?
   - Is the feature worth the size?

3. **Use dynamic imports:**
   ```javascript
   const HeavyComponent = dynamic(() => import('./Heavy'))
   ```

### When Adding Images

1. **Optimize before adding:**
   - Use ImageOptim or similar tools
   - Target <100KB per image
   - Use appropriate format (AVIF/WebP)

2. **Use next/image:**
   ```javascript
   import Image from 'next/image'
   <Image src="/hero.jpg" width={1920} height={1080} alt="..." />
   ```

3. **Lazy load below-fold images:**
   ```javascript
   <Image src="/..." loading="lazy" />
   ```

### When Adding Third-Party Scripts

1. **Use Next.js Script component:**
   ```javascript
   import Script from 'next/script'
   <Script src="..." strategy="lazyOnload" />
   ```

2. **Choose appropriate strategy:**
   - `beforeInteractive`: Critical scripts only (rare)
   - `afterInteractive`: Analytics, ads
   - `lazyOnload`: Chat widgets, non-critical

3. **Consider self-hosting:**
   - Google Fonts can be self-hosted
   - Analytics can be proxied
   - Reduces external dependencies

## Continuous Monitoring

### Automated Checks

Consider setting up:
- **Lighthouse CI**: Automated Lighthouse audits on PRs
- **Bundle size tracking**: Fail builds if bundles exceed budget
- **Performance regression alerts**: Monitor Core Web Vitals

### Manual Audits

Recommended frequency:
- **Weekly**: Quick Lighthouse check
- **Monthly**: Full WebPageTest analysis
- **Quarterly**: Bundle analysis and dependency review
- **After major features**: Full performance audit

### Core Web Vitals in Production

Monitor real user metrics:
- Use Google Search Console
- Review Core Web Vitals report
- Track trends over time
- Investigate regressions

## Troubleshooting

### Slow Initial Load

1. Check bundle size: `npm run analyze`
2. Look for large dependencies
3. Implement code splitting
4. Lazy load heavy components

### High LCP Score

1. Identify LCP element (DevTools > Performance)
2. Optimize LCP image (size, format)
3. Preload LCP image
4. Remove render-blocking resources

### Layout Shift (CLS)

1. Set explicit dimensions on images
2. Reserve space for dynamic content
3. Avoid injecting content above fold
4. Use font-display: swap

### Slow Time to Interactive

1. Reduce JavaScript execution time
2. Implement code splitting
3. Defer non-critical scripts
4. Optimize third-party scripts

## Resources

- [Next.js Performance Docs](https://nextjs.org/docs/advanced-features/measuring-performance)
- [Web Vitals](https://web.dev/vitals/)
- [Lighthouse Documentation](https://developers.google.com/web/tools/lighthouse)
- [WebPageTest](https://www.webpagetest.org/)
- [Bundle Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)

## Summary

All major performance optimizations have been implemented:
- ✅ Code splitting and lazy loading
- ✅ Image optimization with next/image
- ✅ Font optimization with system fonts
- ✅ Resource hints (preconnect, dns-prefetch)
- ✅ Bundle analysis and optimization
- ✅ CSS purging and minification
- ✅ Third-party script optimization
- ✅ Compression and caching
- ✅ Analytics with optimal loading strategy

The website is now optimized for excellent Core Web Vitals scores and fast page load times across all devices and network conditions.
