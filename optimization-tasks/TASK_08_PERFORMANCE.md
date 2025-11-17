# Task 08: Page Speed Optimization

## Objective
Implement comprehensive performance optimizations to achieve fast page load times, excellent Core Web Vitals scores, and improved user experience through code splitting, asset optimization, and strategic loading techniques.

## Working Directory
/Users/lsd/msclaude/projects/1-1/diy-solar-consultants

## Requirements

### 1. Implement Code Splitting
Split JavaScript bundles for faster initial load:
- Use dynamic imports for route-based code splitting
- Lazy load below-fold components
- Split vendor bundles from application code
- Load heavy libraries only when needed
- Implement component-level code splitting

### 2. Minify CSS/JS
Reduce file sizes:
- Enable production builds with minification
- Remove console.log statements in production
- Minify inline scripts and styles
- Use Terser for JavaScript minification
- Enable CSS minification in build config

### 3. Remove Unused CSS
Eliminate dead code:
- Use PurgeCSS or built-in Tailwind purging
- Remove unused utility classes
- Audit third-party CSS libraries
- Inline critical CSS
- Remove duplicate styles

### 4. Preload Critical Fonts
Optimize font loading:
- Preload web fonts used above fold
- Use font-display: swap
- Subset fonts to include only needed characters
- Use system fonts as fallback
- Consider variable fonts to reduce requests

### 5. Optimize Bundle Size
Reduce JavaScript payload:
- Analyze bundle with webpack-bundle-analyzer
- Replace large libraries with lighter alternatives
- Tree-shake unused code
- Remove duplicate dependencies
- Use ES modules for better tree-shaking

### 6. Add Resource Hints
Speed up resource loading:
- Preconnect to external domains (Google Fonts, CDNs)
- Prefetch resources for next likely page
- DNS-prefetch for third-party domains
- Preload hero images
- Use modulepreload for critical JS

### 7. Lazy Load Non-Critical Components
Defer non-essential content:
- Lazy load chat widgets
- Defer analytics scripts
- Lazy load video embeds
- Defer social media widgets
- Load testimonials on scroll

### 8. Optimize Third-Party Scripts
Reduce impact of external resources:
- Async/defer third-party scripts
- Use facade pattern for heavy embeds
- Self-host Google Fonts
- Lazy load Google Maps
- Minimize tracking scripts

## Implementation Details

### File Locations
- `/next.config.js` - Build configuration
- `/src/app/layout.jsx` - Preload/preconnect tags
- `/src/components/` - Lazy loaded components
- `/public/fonts/` - Self-hosted fonts
- `/.env.production` - Production environment config

### Next.js Configuration
```javascript
// /next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  // Enable SWC minification (faster than Terser)
  swcMinify: true,

  // Optimize images
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    minimumCacheTTL: 60,
  },

  // Compress responses
  compress: true,

  // Production optimizations
  productionBrowserSourceMaps: false,

  // Experimental features for better performance
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', 'date-fns'],
  },

  // Headers for caching
  async headers() {
    return [
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // Webpack configuration
  webpack: (config, { dev, isServer }) => {
    // Production optimizations
    if (!dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            default: false,
            vendors: false,
            // Vendor chunk
            vendor: {
              name: 'vendor',
              chunks: 'all',
              test: /node_modules/,
              priority: 20,
            },
            // Common chunk
            common: {
              name: 'common',
              minChunks: 2,
              chunks: 'all',
              priority: 10,
              reuseExistingChunk: true,
              enforce: true,
            },
          },
        },
      };
    }
    return config;
  },
});
```

### Dynamic Imports (Code Splitting)
```jsx
// Lazy load heavy components
import dynamic from 'next/dynamic';

// Load chat widget only when needed
const ChatWidget = dynamic(() => import('@/components/ChatWidget'), {
  loading: () => <p>Loading chat...</p>,
  ssr: false,
});

// Load testimonials on scroll (intersection observer)
const Testimonials = dynamic(() => import('@/components/Testimonials'), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
  ssr: true,
});

// Load calculator only on pricing page
const SolarCalculator = dynamic(() => import('@/components/SolarCalculator'), {
  loading: () => <p>Loading calculator...</p>,
  ssr: false,
});

export default function Page() {
  return (
    <>
      <Hero /> {/* Critical, loaded immediately */}
      <Testimonials /> {/* Lazy loaded */}
      <ChatWidget /> {/* Only loads when user scrolls to footer */}
    </>
  );
}
```

### Preload Critical Resources
```jsx
// /src/app/layout.jsx
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="/fonts/inter-var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {/* DNS prefetch for analytics */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* Preload hero image */}
        <link
          rel="preload"
          as="image"
          href="/images/hero-solar-home.jpg"
          imageSrcSet="/images/hero-solar-home-640w.jpg 640w, /images/hero-solar-home-1280w.jpg 1280w"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

### Font Optimization
```css
/* /src/app/globals.css */

/* Self-hosted font with font-display swap */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 100 900;
  font-display: swap;
  src: url('/fonts/inter-var.woff2') format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* System font fallback stack */
body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}
```

### Lazy Load Third-Party Scripts
```jsx
// /src/components/Analytics.jsx
'use client';
import { useEffect } from 'react';
import Script from 'next/script';

export default function Analytics() {
  return (
    <>
      {/* Google Analytics - Load after page interactive */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GA_MEASUREMENT_ID');
        `}
      </Script>

      {/* Chat widget - Load on idle */}
      <Script
        src="https://cdn.chatwidget.com/widget.js"
        strategy="lazyOnload"
        onLoad={() => {
          console.log('Chat widget loaded');
        }}
      />
    </>
  );
}
```

### Intersection Observer for Lazy Loading
```jsx
// /src/hooks/useIntersectionObserver.js
import { useEffect, useRef, useState } from 'react';

export function useIntersectionObserver(options = {}) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, options);

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [options]);

  return [elementRef, isVisible];
}

// Usage in component
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export default function LazySection() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div ref={ref}>
      {isVisible ? (
        <HeavyComponent />
      ) : (
        <div className="h-96 bg-gray-100" /> // Placeholder
      )}
    </div>
  );
}
```

### Bundle Analysis Script
```json
// package.json scripts
{
  "scripts": {
    "analyze": "ANALYZE=true next build",
    "build": "next build",
    "start": "next start",
    "dev": "next dev"
  }
}
```

### Remove Unused CSS (Tailwind)
```javascript
// tailwind.config.js
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // PurgeCSS will remove unused classes
  safelist: [
    // Add classes that are generated dynamically
    'bg-solar-600',
    'text-energy-600',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

## Performance Optimization Checklist

### JavaScript
- [ ] Enable code splitting for all routes
- [ ] Lazy load components below fold
- [ ] Dynamic imports for heavy libraries
- [ ] Remove console.log in production
- [ ] Minify all JS files
- [ ] Tree-shake unused code
- [ ] Analyze and reduce bundle size

### CSS
- [ ] Purge unused Tailwind classes
- [ ] Inline critical CSS
- [ ] Minify CSS in production
- [ ] Remove duplicate styles
- [ ] Optimize CSS delivery

### Fonts
- [ ] Preload critical fonts
- [ ] Use font-display: swap
- [ ] Self-host web fonts
- [ ] Subset fonts
- [ ] Use variable fonts

### Images
- [ ] Optimize all images (Task 05)
- [ ] Use next/image component
- [ ] Preload LCP images
- [ ] Lazy load below-fold images
- [ ] Serve modern formats (WebP/AVIF)

### Third-Party
- [ ] Defer non-critical scripts
- [ ] Use Script component with appropriate strategy
- [ ] Self-host analytics if possible
- [ ] Lazy load chat widgets
- [ ] Minimize tracking scripts

## Validation & Testing

### Tools to Use
1. **Lighthouse** - Overall performance score
2. **PageSpeed Insights** - Real-world performance data
3. **WebPageTest** - Detailed waterfall analysis
4. **Chrome DevTools** - Performance profiling
5. **webpack-bundle-analyzer** - Bundle visualization
6. **Coverage tab** - Unused CSS/JS detection

### Metrics to Track
- **FCP (First Contentful Paint)**: <1.8s
- **LCP (Largest Contentful Paint)**: <2.5s
- **FID (First Input Delay)**: <100ms
- **CLS (Cumulative Layout Shift)**: <0.1
- **TTI (Time to Interactive)**: <3.8s
- **TBT (Total Blocking Time)**: <200ms
- **Speed Index**: <3.4s

## Success Criteria
- ✅ Lighthouse Performance Score: 90+
- ✅ All Core Web Vitals in "Good" range
- ✅ Bundle size reduced by 30%+ from baseline
- ✅ FCP <1.8s on 3G
- ✅ LCP <2.5s on cable
- ✅ No render-blocking resources
- ✅ All fonts preloaded and optimized
- ✅ Critical resources loaded first
- ✅ Non-critical resources deferred
- ✅ Zero unused CSS >20KB

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

## Before/After Comparison

### Metrics to Document
Create a spreadsheet tracking:
- Current Lighthouse scores
- Current bundle sizes
- Current Core Web Vitals
- After optimization scores
- Percentage improvements

## Advanced Optimizations

### Service Worker (Optional)
```javascript
// Consider adding for offline support
// and caching static assets
```

### Brotli Compression
```javascript
// Enable on server/CDN for better compression
```

### HTTP/2 Server Push
```javascript
// Push critical resources
```

### Edge Caching
```javascript
// Use CDN edge caching for static assets
```

## Monitoring & Maintenance

### Continuous Monitoring
- Set up automated Lighthouse CI
- Monitor Core Web Vitals in Search Console
- Track bundle size in CI/CD
- Alert on performance regressions

### Regular Audits
- Monthly performance audits
- Quarterly bundle analysis
- Review third-party scripts impact
- Update optimization strategies

## Notes
- Performance is ongoing, not one-time
- Test on real devices and networks
- Prioritize user-facing metrics
- Balance performance with functionality
- Document all optimization decisions
- Set up performance budgets in CI/CD
- Consider user's network conditions (3G, 4G)
- Mobile performance often more critical than desktop
