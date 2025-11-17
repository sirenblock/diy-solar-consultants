# Task 05: Image Optimization & Alt Tags

## Objective
Optimize all images for performance and accessibility by adding descriptive alt text, implementing Next.js Image optimization, and creating modern image formats to improve LCP and overall page speed.

## Working Directory
/Users/lsd/msclaude/projects/1-1/diy-solar-consultants

## Requirements

### 1. Add Descriptive Alt Text to ALL Images
Create SEO-friendly, accessible alt text:
- Describe what's in the image specifically
- Include relevant keywords naturally
- Keep under 125 characters
- Don't start with "Image of" or "Picture of"
- For decorative images, use alt=""
- Include context relevant to surrounding content

### 2. Implement next/image for Automatic Optimization
Replace all <img> tags with Next.js Image component:
- Automatic WebP/AVIF format conversion
- Responsive image sizes
- Lazy loading by default
- Automatic width/height to prevent CLS
- Priority loading for above-fold images

### 3. Add Lazy Loading to Below-Fold Images
Optimize loading strategy:
- Use loading="lazy" or Next.js Image default
- Priority load hero images (loading="eager" or priority prop)
- Defer offscreen images
- Add placeholder blur for better UX

### 4. Create WebP Versions of Images
Modern format implementation:
- Convert all JPG/PNG to WebP (85-90% quality)
- Provide fallback for older browsers
- Use <picture> element if not using next/image
- Reduce file sizes by 25-40%

### 5. Add Proper Width/Height Attributes
Prevent Cumulative Layout Shift:
- Specify exact dimensions on all images
- Use aspect ratio CSS for responsive images
- Reserve space before image loads
- Maintain aspect ratio across breakpoints

### 6. Optimize Hero Images for LCP
Critical path image optimization:
- Compress hero images (<150KB)
- Use priority loading
- Preload LCP images
- Serve appropriately sized images per device
- Consider using blur placeholder

### 7. Implement Responsive Image Sizes
Serve appropriate sizes per viewport:
- Define sizes attribute for Next.js Image
- Create multiple image sizes
- Use srcset for responsive images
- Avoid loading desktop images on mobile

### 8. Add Image Compression
Reduce file sizes without quality loss:
- Use tools like TinyPNG, ImageOptim, or Sharp
- Target 80-90% quality for JPG
- Compress PNG with lossless tools
- Aim for <200KB per image (<100KB for thumbnails)

## Implementation Details

### File Locations
- `/public/images/` - All image assets
- `/src/components/` - Update components using images
- All page files using <img> tags

### Next.js Image Component Example
```jsx
import Image from 'next/image';

// Hero image (above fold) - Priority load
export default function Hero() {
  return (
    <div className="relative h-[600px]">
      <Image
        src="/images/solar-installation-hero.jpg"
        alt="Professional engineer reviewing solar panel installation plans on residential rooftop"
        fill
        priority
        className="object-cover"
        sizes="100vw"
        quality={90}
      />
    </div>
  );
}

// Regular image (below fold) - Lazy load
export default function ServiceCard() {
  return (
    <div className="card">
      <Image
        src="/images/permit-ready-plans.jpg"
        alt="Detailed solar system design blueprint with electrical diagrams and PE stamp"
        width={600}
        height={400}
        className="rounded-lg"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..."
      />
    </div>
  );
}

// Icon/Logo (small, critical)
export default function Logo() {
  return (
    <Image
      src="/images/logo.svg"
      alt="DIY Solar Consultants logo"
      width={200}
      height={50}
      priority
    />
  );
}
```

### Alt Text Examples

#### Good Alt Text
```jsx
// Specific and descriptive
<Image
  src="/solar-panels.jpg"
  alt="Grid of 24 monocrystalline solar panels installed on residential shingled roof"
/>

// Includes relevant context
<Image
  src="/engineer-photo.jpg"
  alt="Licensed PE engineer reviewing solar permit plans at desk with blueprints"
/>

// Describes function, not just object
<Image
  src="/calculator.jpg"
  alt="Solar savings calculator showing 25-year ROI projection of $45,000"
/>
```

#### Bad Alt Text (Avoid)
```jsx
// Too generic
<Image src="/image1.jpg" alt="solar panels" />

// Keyword stuffing
<Image src="/image2.jpg" alt="solar panels solar energy solar power solar installation solar design" />

// Redundant
<Image src="/image3.jpg" alt="Image of solar panels on roof" />
```

### Image Optimization Script
```javascript
// /scripts/optimize-images.js
// Run this to batch optimize images

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imageDir = './public/images';
const outputDir = './public/images/optimized';

async function optimizeImage(filePath) {
  const fileName = path.basename(filePath, path.extname(filePath));

  // Create WebP version
  await sharp(filePath)
    .webp({ quality: 85 })
    .toFile(`${outputDir}/${fileName}.webp`);

  // Create optimized JPG
  await sharp(filePath)
    .jpeg({ quality: 85, progressive: true })
    .toFile(`${outputDir}/${fileName}.jpg`);

  // Create responsive sizes
  const sizes = [640, 768, 1024, 1280, 1920];

  for (const size of sizes) {
    await sharp(filePath)
      .resize(size, null, { withoutEnlargement: true })
      .webp({ quality: 85 })
      .toFile(`${outputDir}/${fileName}-${size}w.webp`);
  }
}

// Process all images in directory
fs.readdirSync(imageDir).forEach(file => {
  const filePath = path.join(imageDir, file);
  if (/\.(jpg|jpeg|png)$/i.test(file)) {
    optimizeImage(filePath);
  }
});
```

### next.config.js Configuration
```javascript
// /next.config.js
module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.unsplash.com',
      },
      // Add other image CDN domains if needed
    ],
  },
};
```

## Images to Optimize

### Critical Images (Priority Load)
- `/public/images/hero-solar-home.jpg` - Homepage hero
- `/public/images/logo.svg` - Site logo
- `/public/images/solar-design-hero.jpg` - Services hero

### Important Images (Optimize + Lazy Load)
- `/public/images/solar-panels-roof.jpg`
- `/public/images/engineer-working.jpg`
- `/public/images/permit-documents.jpg`
- `/public/images/electrical-diagram.jpg`
- `/public/images/solar-inverter.jpg`
- `/public/images/battery-storage.jpg`

### Testimonial Images
- Customer photos/avatars (optimize to <50KB each)
- Use blur placeholder while loading

### Icon/Badge Images
- Trust badges, certifications, partner logos
- Use SVG where possible
- Optimize PNG icons to <20KB

## Alt Text Strategy by Page

### Homepage
- Hero: "Modern home with rooftop solar panel installation designed by licensed engineers"
- Benefits: Describe each benefit illustration specifically
- Testimonials: "Satisfied customer [Name] from [Location] next to their solar installation"

### Services
- Service icons: Describe what the service accomplishes
- Process diagrams: Explain each step shown
- Example plans: "Sample solar system design blueprint showing panel layout and electrical connections"

### Pricing
- Package comparisons: "Comparison chart of three solar design service tiers"
- Value indicators: Describe what savings/value is shown

### Equipment
- Panel images: "High-efficiency monocrystalline solar panel with black frame and 400W output"
- Inverter images: "String inverter with DC disconnect and monitoring capabilities"
- Battery images: "Residential lithium battery storage system with 13.5kWh capacity"

## Validation & Testing

### Tools to Use
1. **Lighthouse** - Image optimization score, LCP
2. **WebPageTest** - Image load timing, sizes
3. **Chrome DevTools** - Network tab for image sizes
4. **axe DevTools** - Alt text accessibility check
5. **WAVE** - Alternative text validation
6. **ImageOptim** - Compression before upload

### What to Check
- All images have alt attributes (no missing alt)
- All alt text is descriptive and specific
- Hero images load in <2.5s (LCP)
- All images using next/image component
- No CLS from images loading
- Images are appropriately sized (not loading 3000px on mobile)
- WebP versions serving to modern browsers
- File sizes optimized (<200KB each)

## Success Criteria
- ✅ 100% of images have descriptive alt text
- ✅ All <img> tags replaced with next/image
- ✅ Hero images use priority loading
- ✅ Below-fold images lazy load
- ✅ WebP format serving to 90%+ users
- ✅ All images have width/height specified
- ✅ Average image size reduced by 40%+
- ✅ LCP <2.5s on all pages
- ✅ Zero CLS from images
- ✅ 100/100 Lighthouse accessibility score for images

## Performance Targets
- LCP: <2.5s (Good)
- CLS: <0.1 (Good)
- Total image weight: <2MB per page
- Above-fold images: <300KB total
- Individual images: <200KB (except hero <500KB)

## Accessibility Requirements
- All meaningful images must have alt text
- Decorative images must have alt=""
- Alt text must describe content, not say "image of"
- Complex images (charts/diagrams) need detailed descriptions
- Color contrast in text overlays on images: 4.5:1 minimum

## Notes
- Use blur placeholders for better perceived performance
- Consider using CDN for image delivery (Cloudinary, Imgix)
- Monitor Core Web Vitals impact after optimization
- Update alt text if image content changes
- Use SVG for logos, icons, simple graphics
- Avoid text in images (bad for accessibility/SEO)
- Test on actual mobile devices, not just browser resize
