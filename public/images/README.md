# Image Directory Structure & Guidelines

This directory contains all images for the DIY Solar Consultants website. Images are optimized using Next.js Image component for automatic WebP/AVIF conversion, responsive sizing, and lazy loading.

## Directory Structure

```
/public/images/
├── logo.png                    # Main site logo (600x60px)
├── portfolio/                  # Case study project images
│   ├── austin-suburban-main.jpg
│   ├── austin-before.jpg
│   ├── austin-mounting.jpg
│   ├── austin-panels.jpg
│   ├── austin-complete.jpg
│   ├── austin-monitoring.jpg
│   ├── denver-powerwall-main.jpg
│   ├── denver-before.jpg
│   ├── denver-mounting.jpg
│   ├── denver-microinverter.jpg
│   ├── denver-powerwall.jpg
│   ├── denver-monitoring.jpg
│   ├── tampa-budget-main.jpg
│   ├── tampa-progress1.jpg
│   ├── tampa-progress2.jpg
│   ├── tampa-wiring.jpg
│   ├── tampa-complete.jpg
│   ├── tampa-bills.jpg
│   ├── phoenix-luxury-main.jpg
│   ├── phoenix-aerial.jpg
│   ├── phoenix-tile-work.jpg
│   ├── phoenix-panels.jpg
│   ├── phoenix-powerwalls.jpg
│   ├── phoenix-monitoring.jpg
│   ├── portland-commercial-main.jpg
│   ├── portland-site.jpg
│   ├── portland-racking.jpg
│   ├── portland-panels.jpg
│   ├── portland-inverter.jpg
│   ├── portland-complete.jpg
│   ├── montana-offgrid-main.jpg
│   ├── montana-site.jpg
│   ├── montana-mount.jpg
│   ├── montana-batteries.jpg
│   ├── montana-inverter.jpg
│   └── montana-winter.jpg
├── video-thumbnails/           # Video tutorial thumbnails
│   ├── intro-diy-solar.jpg
│   ├── roof-mounting.jpg
│   └── electrical-connection.jpg
└── optimized/                  # Auto-generated optimized images (DO NOT EDIT)
    └── [Various optimized versions]
```

## Image Requirements

### File Formats
- **Source**: JPG, PNG, or SVG
- **Output**: Automatically converted to WebP and AVIF by Next.js

### Image Sizes

#### Header/Hero Images
- **Dimensions**: 1920x1080px (16:9 aspect ratio)
- **Max file size**: 500KB (before optimization)
- **Use case**: Case study headers, page heroes

#### Portfolio Gallery Images
- **Dimensions**: 1280x720px (16:9 aspect ratio)
- **Max file size**: 200KB (before optimization)
- **Use case**: Case study photo galleries

#### Video Thumbnails
- **Dimensions**: 1280x720px (16:9 aspect ratio)
- **Max file size**: 150KB (before optimization)
- **Use case**: Video preview thumbnails

#### Logo
- **Dimensions**: 600x60px (10:1 aspect ratio)
- **Format**: PNG with transparency
- **Max file size**: 50KB

### Naming Conventions

1. **Use lowercase** with hyphens (kebab-case)
2. **Be descriptive** but concise
3. **Include project identifier** for portfolio images

**Examples:**
- ✅ `austin-suburban-main.jpg`
- ✅ `denver-powerwall-monitoring.jpg`
- ✅ `intro-diy-solar.jpg`
- ❌ `IMG_1234.jpg`
- ❌ `Austin Suburban.jpg`
- ❌ `image1.jpg`

## Alt Text Requirements

All images MUST have descriptive alt text defined in the data files (`/src/data/caseStudies.js` and `/src/data/resources.js`).

### Alt Text Best Practices

1. **Be specific and descriptive** (not generic)
2. **Include relevant keywords naturally**
3. **Keep under 125 characters**
4. **Don't start with "Image of" or "Picture of"**
5. **Describe what's shown, not just what it is**

**Good Examples:**
```javascript
alt: "12kW solar system with Tesla Powerwall 3 battery backup on steep-pitch Colorado roof with snow load mounting"
alt: "Licensed electrician installing AC disconnect and making electrical connections at main panel for solar system"
alt: "Completed 6kW solar system with 15 Jinko panels arranged on single-plane roof in Tampa"
```

**Bad Examples:**
```javascript
alt: "solar panels"  // Too generic
alt: "Image of a house with solar"  // Redundant phrase
alt: "solar panels solar installation solar power solar energy"  // Keyword stuffing
```

## Image Optimization

### Automatic Optimization (Next.js Image Component)

All images are automatically optimized when served through the Next.js Image component:
- ✅ Automatic format conversion (WebP/AVIF)
- ✅ Responsive image sizes
- ✅ Lazy loading
- ✅ Blur placeholders

### Manual Optimization Script

For batch optimization before deployment, run:

```bash
npm run optimize-images
```

This script will:
1. Create WebP and AVIF versions
2. Generate responsive sizes (640w, 768w, 1024w, 1280w, 1920w)
3. Compress images (85-90% quality)
4. Generate blur placeholder data URLs
5. Save optimized versions to `/public/images/optimized/`

### Pre-Deployment Checklist

Before adding images to production:

- [ ] Images are properly named (lowercase, descriptive)
- [ ] Images are optimized (under max file size)
- [ ] Alt text is added to data files
- [ ] Images are in correct subdirectory
- [ ] Run `npm run optimize-images` for batch processing
- [ ] Test images load correctly in development (`npm run dev`)

## Adding New Images

### Step 1: Add Image Files
Place optimized source images in the appropriate directory:
- Case study images → `/public/images/portfolio/`
- Video thumbnails → `/public/images/video-thumbnails/`
- Logos/icons → `/public/images/`

### Step 2: Update Data Files
Add image references and alt text to the appropriate data file:

**Case Studies** (`/src/data/caseStudies.js`):
```javascript
{
  headerImage: '/images/portfolio/project-name-main.jpg',
  headerImageAlt: 'Descriptive alt text for header image',
  photos: [
    {
      src: '/images/portfolio/project-name-photo1.jpg',
      alt: 'Specific description of what is shown in this photo',
      caption: 'Short caption'
    }
  ]
}
```

**Resources** (`/src/data/resources.js`):
```javascript
{
  thumbnail: '/images/video-thumbnails/video-name.jpg',
  thumbnailAlt: 'Descriptive alt text for video thumbnail'
}
```

### Step 3: Run Optimization (Optional)
For additional optimization beyond Next.js automatic processing:
```bash
npm run optimize-images
```

### Step 4: Test
```bash
npm run dev
```
Navigate to the page and verify:
- Image loads correctly
- Alt text is present (inspect element)
- Image is responsive (resize browser)
- No console errors

## Image Performance Targets

### Core Web Vitals
- **LCP (Largest Contentful Paint)**: < 2.5s
- **CLS (Cumulative Layout Shift)**: < 0.1
- **Total Image Weight**: < 2MB per page

### Optimization Goals
- Above-fold images: < 300KB total
- Individual images: < 200KB (optimized)
- Hero images: < 500KB (optimized)
- Average reduction: 40%+ from source

## Troubleshooting

### Image Not Loading
1. Check file path is correct (case-sensitive)
2. Verify image exists in `/public/images/`
3. Check console for errors
4. Ensure Next.js Image component is used

### Image Quality Issues
1. Check source image quality
2. Adjust quality settings in `next.config.js` (images.quality)
3. Try different source format (PNG vs JPG)

### Slow Image Loading
1. Verify images are optimized (< max file size)
2. Check if priority prop is needed for above-fold images
3. Run optimization script: `npm run optimize-images`
4. Consider using blur placeholders

### Alt Text Not Showing
1. Verify alt text is added to data files
2. Check component is using alt prop correctly
3. Inspect element to see actual alt attribute

## Additional Resources

- [Next.js Image Component Docs](https://nextjs.org/docs/api-reference/next/image)
- [Web.dev Image Optimization Guide](https://web.dev/fast/#optimize-your-images)
- [WCAG Alt Text Guidelines](https://www.w3.org/WAI/tutorials/images/)
- [Core Web Vitals](https://web.dev/vitals/)

## Notes

- The `/optimized/` directory is auto-generated - DO NOT commit to version control
- Add `/public/images/optimized/` to `.gitignore`
- Source images should be version controlled
- Logo should be SVG when possible for scalability
- Consider using a CDN for production (Cloudinary, Imgix, etc.)
