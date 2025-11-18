# Performance Optimization Guide

This document outlines the performance optimizations implemented for the DIY Solar Consultants website and provides guidelines for maintaining optimal performance.

## 🎯 Performance Goals

- **First Contentful Paint (FCP)**: < 2s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Total Blocking Time (TBT)**: < 300ms
- **Cumulative Layout Shift (CLS)**: < 0.1
- **Time to Interactive (TTI)**: < 3.5s
- **Lighthouse Performance Score**: 90+

## ✅ Implemented Optimizations

### 1. Next.js Configuration (`next.config.js`)

#### Image Optimization
- **AVIF & WebP formats**: Modern image formats for 30-50% smaller file sizes
- **Responsive sizes**: Optimized deviceSizes and imageSizes for all screen sizes
- **Minimum cache TTL**: 60 seconds for better caching

#### Code Optimization
- **SWC Minification**: Faster, more efficient JavaScript minification
- **Console log removal**: Removes console.log in production (keeps error/warn)
- **Bundle analysis**: Integrated @next/bundle-analyzer for monitoring

#### Caching Strategy
- **Static assets**: 1 year cache for fonts, images, and Next.js static files
- **Immutable headers**: Prevent unnecessary revalidation

#### Code Splitting
- **Vendor chunks**: Separate node_modules into dedicated chunk
- **Recharts splitting**: Heavy charting library loaded separately
- **Common chunks**: Shared code optimized for reuse
- **Runtime chunk**: Single runtime chunk for better caching

### 2. Font Optimization (`src/pages/_app.jsx`)

- **next/font**: Automatic font optimization with Inter font
- **Display swap**: Prevents FOIT (Flash of Invisible Text)
- **Subset loading**: Only loads Latin characters
- **Preloading**: Fonts preloaded for faster rendering
- **Weight optimization**: Only loads needed weights (400, 500, 600, 700)

### 3. Component Lazy Loading

#### Lazy Loaded Components (Dynamic Imports)
The following non-critical components are loaded on-demand:

- **CookieConsent**: Client-side only (SSR disabled)
- **StickyCTABar**: Below-the-fold component
- **FloatingActionButton**: Below-the-fold component
- **ExitIntentPopup**: Only triggered on exit intent
- **LiveActivityFeed**: Below-the-fold component

#### Chart Components (`src/components/LazyCharts.jsx`)
- **Recharts library**: ~100KB library lazy loaded
- **Loading placeholders**: Smooth loading experience
- **SSR disabled**: Charts only render client-side

### 4. Analytics Optimization

All analytics scripts use Next.js Script component with proper loading strategies:

- **Google Analytics**: `strategy="afterInteractive"`
- **Google Tag Manager**: `strategy="afterInteractive"`
- **Microsoft Clarity**: `strategy="afterInteractive"`

### 5. Image Optimization Script

#### Location: `scripts/optimize-images.js`

Batch optimize images with:
```bash
npm run optimize-images
```

**Features:**
- Converts to WebP and AVIF formats
- Resizes to max 1920px width
- Compresses with optimal quality settings
- Generates multiple formats for `<picture>` element

**Configuration:**
- WebP quality: 80
- AVIF quality: 75
- JPEG quality: 85
- PNG quality: 90

## 🔍 Performance Testing

### Lighthouse Testing

#### Run performance tests:
```bash
# Make sure dev server is running
npm run dev

# In another terminal, run Lighthouse tests
npm run test:performance
# or
npm run perf
```

#### What it tests:
- Performance score
- Accessibility score
- Best practices score
- SEO score
- Core Web Vitals (FCP, LCP, TBT, CLS, TTI)

#### Output:
- HTML reports in `lighthouse-reports/`
- JSON data for CI/CD integration
- Pass/fail based on thresholds

### Bundle Analysis

Monitor bundle size and composition:

```bash
# Generate bundle analysis
npm run analyze

# Opens interactive visualization in browser
# Shows:
# - Bundle sizes
# - Module composition
# - Duplicate dependencies
# - Optimization opportunities
```

## 📊 Performance Budget

Configuration in `lighthouse-budget.json`:

### Timing Budgets
- First Contentful Paint: 2000ms
- Largest Contentful Paint: 2500ms
- Time to Interactive: 3500ms
- Total Blocking Time: 300ms

### Resource Size Budgets (KB)
- JavaScript: 300KB
- Images: 500KB
- CSS: 50KB
- Fonts: 100KB
- Total: 1000KB

### Resource Count Budgets
- Scripts: 15 files
- Stylesheets: 5 files
- Third-party resources: 10 files

## 🚀 Best Practices

### Images

#### Always use Next.js Image component:
```jsx
import Image from 'next/image';

// Above-the-fold images (priority)
<Image
  src="/images/hero.jpg"
  alt="Description"
  width={1200}
  height={800}
  priority
  quality={85}
/>

// Below-the-fold images (lazy)
<Image
  src="/images/feature.jpg"
  alt="Description"
  width={800}
  height={600}
  loading="lazy"
  quality={75}
/>
```

### Components

#### Lazy load heavy/non-critical components:
```jsx
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('@/components/HeavyComponent'), {
  loading: () => <LoadingSpinner />,
  ssr: false, // If client-side only
});
```

### Third-Party Scripts

#### Use Next.js Script component:
```jsx
import Script from 'next/script';

// Analytics (afterInteractive)
<Script
  src="https://analytics.example.com/script.js"
  strategy="afterInteractive"
/>

// Non-critical widgets (lazyOnload)
<Script
  src="https://widget.example.com/script.js"
  strategy="lazyOnload"
/>
```

### CSS

- Use Tailwind's purge feature (automatic in production)
- Avoid `@import` in CSS files
- Use CSS containment for isolated components:
  ```css
  .card {
    contain: layout style paint;
  }
  ```

## 📈 Monitoring & Continuous Improvement

### Regular Checks

1. **Weekly**: Run Lighthouse tests
2. **Before deploys**: Run bundle analysis
3. **Monthly**: Review Core Web Vitals in Google Search Console
4. **Quarterly**: Full performance audit

### Performance Checklist for New Features

- [ ] Images use Next.js Image component
- [ ] Heavy components lazy loaded
- [ ] Third-party scripts use Next.js Script
- [ ] No layout shifts (reserve space for dynamic content)
- [ ] Fonts optimized with next/font
- [ ] Bundle size impact reviewed
- [ ] Lighthouse score maintained

### Warning Signs

Watch for these indicators:
- Lighthouse score drops below 90
- Bundle size increases > 10%
- LCP > 2.5s
- CLS > 0.1
- More than 15 JavaScript files loaded

## 🛠️ Troubleshooting

### Slow First Contentful Paint
- Check font loading strategy
- Reduce above-the-fold images
- Minimize critical CSS
- Defer non-critical JavaScript

### High Total Blocking Time
- Review third-party scripts
- Code split large JavaScript files
- Lazy load non-critical components
- Check for long-running client-side code

### Large Bundle Size
- Run bundle analyzer
- Remove unused dependencies
- Implement code splitting
- Tree-shake imports

### Layout Shift
- Always specify image dimensions
- Reserve space for dynamic content
- Avoid inserting content above existing content
- Use CSS aspect-ratio for responsive images

## 🔗 Resources

- [Next.js Performance Docs](https://nextjs.org/docs/advanced-features/measuring-performance)
- [Web.dev Performance](https://web.dev/performance/)
- [Core Web Vitals](https://web.dev/vitals/)
- [Lighthouse Docs](https://developers.google.com/web/tools/lighthouse)
- [Bundle Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)

## 📝 Scripts Reference

```bash
# Development
npm run dev                    # Start dev server

# Production
npm run build                  # Build for production
npm start                      # Start production server

# Performance
npm run analyze                # Bundle analysis
npm run optimize-images        # Optimize images
npm run test:performance       # Run Lighthouse tests
npm run perf                   # Shorthand for performance tests

# Code Quality
npm run lint                   # Run ESLint
```

## 🎯 Next Steps

1. **Baseline Testing**: Run `npm run perf` to establish baseline scores
2. **Image Optimization**: Run `npm run optimize-images` on existing images
3. **Monitor Production**: Set up Real User Monitoring (RUM) in production
4. **CI/CD Integration**: Add Lighthouse CI to deployment pipeline
5. **Performance Budget**: Enforce budgets in CI/CD

---

**Remember**: Performance is a feature, not an afterthought. Maintain these optimizations as the site grows!
