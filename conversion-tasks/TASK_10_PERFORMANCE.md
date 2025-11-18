# Task 10: Page Speed & Performance Optimization

## Objective
Optimize for blazing-fast load times. Every second of delay costs conversions. Target: <2s load time, 90+ Lighthouse score.

## Working Directory
/Users/lsd/msclaude/projects/1-1/diy-solar-consultants

## Performance Optimizations

### 1. Image Optimization

```javascript
// next.config.js
module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
}
```

```jsx
// Use Next.js Image component everywhere
import Image from 'next/image';

<Image
  src="/images/hero-solar.jpg"
  alt="Solar panel installation"
  width={1200}
  height={800}
  priority // For above-the-fold images
  quality={85}
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..." // Low-quality placeholder
/>

// For below-the-fold images
<Image
  src="/images/testimonial-bg.jpg"
  alt="Background"
  width={800}
  height={600}
  loading="lazy" // Lazy load
  quality={75}
/>
```

### 2. Font Optimization

```javascript
// src/pages/_app.jsx
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // Prevent FOIT
  variable: '--font-inter',
  preload: true,
  fallback: ['system-ui', 'arial'], // System font fallback
});

export default function App({ Component, pageProps }) {
  return (
    <div className={inter.variable}>
      <Component {...pageProps} />
    </div>
  );
}
```

### 3. Code Splitting & Dynamic Imports

```jsx
// Lazy load heavy components
import dynamic from 'next/dynamic';

// Don't load calculator until needed
const SolarCalculator = dynamic(() => import('@/components/SolarCalculator'), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-xl" />,
  ssr: false, // Don't render on server if client-only
});

// Lazy load exit intent popup (not critical)
const ExitIntentPopup = dynamic(() => import('@/components/ExitIntentPopup'), {
  ssr: false,
});

// Lazy load video testimonials
const VideoTestimonials = dynamic(() => import('@/components/VideoTestimonials'), {
  loading: () => <div className="h-64 bg-gray-100 animate-pulse rounded-xl" />,
});
```

### 4. Optimize External Scripts

```jsx
// src/pages/_app.jsx
import Script from 'next/script';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      
      {/* Load analytics after page interactive */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        strategy="afterInteractive"
      />
      
      {/* Load chat widget lazily */}
      <Script
        id="chat-widget"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            // Chat widget code
          `,
        }}
      />
    </>
  );
}
```

### 5. Lazy Loading for Images Below Fold

```jsx
// Add loading="lazy" to all images below the fold
<div className="grid grid-cols-3 gap-6">
  {equipmentItems.map((item, i) => (
    <Image
      key={item.id}
      src={item.image}
      alt={item.name}
      width={400}
      height={300}
      loading="lazy"
      className="rounded-lg"
    />
  ))}
</div>
```

### 6. Optimize CSS

```css
/* src/styles/globals.css */

/* Critical CSS inline in _document.jsx */
/* Only load what's needed for above-the-fold */

/* Use containment for sections */
.testimonial-card {
  contain: layout style paint;
}

/* Use will-change sparingly */
.cta-button:hover {
  will-change: transform;
}

/* Avoid @import, use direct imports */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Purge unused CSS in production */
```

```javascript
// tailwind.config.js
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
  ],
  // Purge removes unused styles
}
```

### 7. Preload Critical Resources

```jsx
// src/pages/_document.jsx
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="/fonts/Inter-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
```

### 8. Minimize Third-Party Scripts

```jsx
// Only load what you need, when you need it
const [consentGiven, setConsentGiven] = useState(false);

useEffect(() => {
  // Only load analytics if consent given
  if (consentGiven) {
    // Load GA
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_ID';
    script.async = true;
    document.head.appendChild(script);
  }
}, [consentGiven]);
```

### 9. Compress Images

```bash
# Use image optimization tools
npm install sharp

# Create image optimization script
# scripts/optimize-images.js
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = './public/images';
const outputDir = './public/images/optimized';

fs.readdirSync(inputDir).forEach(file => {
  if (file.match(/\.(jpg|jpeg|png)$/i)) {
    sharp(path.join(inputDir, file))
      .resize(1920, null, { withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(path.join(outputDir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp')));
  }
});
```

### 10. Enable Compression

```javascript
// next.config.js
module.exports = {
  compress: true, // Enable gzip compression
  
  // Optimize production builds
  swcMinify: true,
  
  // Enable React strict mode
  reactStrictMode: true,
  
  // Remove console logs in production
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}
```

### 11. Reduce Bundle Size

```bash
# Analyze bundle
npm install @next/bundle-analyzer

# next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  // ... other config
});

# Run analysis
ANALYZE=true npm run build
```

### 12. Caching Strategy

```javascript
// public/sw.js - Service worker for caching
const CACHE_NAME = 'diy-solar-v1';
const urlsToCache = [
  '/',
  '/styles/main.css',
  '/script/main.js',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
```

## Performance Budget

Set performance budgets:

```javascript
// lighthouse-budget.json
[
  {
    "path": "/*",
    "timings": [
      {
        "metric": "first-contentful-paint",
        "budget": 2000
      },
      {
        "metric": "interactive",
        "budget": 3500
      }
    ],
    "resourceSizes": [
      {
        "resourceType": "script",
        "budget": 300
      },
      {
        "resourceType": "image",
        "budget": 500
      }
    ]
  }
]
```

## Testing Performance

```bash
# Lighthouse CI
npm install -g @lhci/cli

# Run Lighthouse
lhci autorun --collect.url=http://localhost:3000

# Test Core Web Vitals
npm run build && npm start
# Then use Chrome DevTools > Lighthouse
```

## Files to Update
- `/next.config.js` - Add performance config
- `/src/pages/_app.jsx` - Font optimization
- `/src/pages/_document.jsx` - Preload resources
- All components - Use Next Image, dynamic imports
- `/scripts/optimize-images.js` - Create image optimizer

## Success Criteria
✅ Lighthouse score 90+
✅ First Contentful Paint < 2s
✅ Time to Interactive < 3.5s
✅ Largest Contentful Paint < 2.5s
✅ Cumulative Layout Shift < 0.1
✅ Images in WebP/AVIF format
✅ Code splitting implemented
✅ Critical resources preloaded
