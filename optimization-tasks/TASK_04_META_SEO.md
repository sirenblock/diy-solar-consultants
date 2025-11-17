# Task 04: Meta Tags & SEO Optimization

## Objective
Implement comprehensive meta tag optimization and technical SEO improvements across all pages to maximize search engine visibility and click-through rates from search results.

## Working Directory
/Users/lsd/msclaude/projects/1-1/diy-solar-consultants

## Requirements

### 1. Optimize Meta Descriptions
Create compelling meta descriptions for all pages:
- Length: 150-160 characters (optimal for display)
- Include primary keyword in first 120 characters
- Add call-to-action or value proposition
- Unique description for each page
- Include location keywords where relevant

### 2. Improve Title Tags
Optimize title tags for SEO and CTR:
- Length: 50-60 characters (max display width)
- Front-load primary keywords
- Include brand name at end ("| DIY Solar Consultants")
- Unique title for each page
- Use power words (Free, Save, Expert, Guaranteed)

### 3. Add Open Graph Images
Create and implement OG images for social sharing:
- Create 1200x630px images for each major page
- Include logo, tagline, and page-specific visuals
- Add og:image, og:image:width, og:image:height
- Ensure images load quickly (<200KB)

### 4. Add Twitter Card Markup
Implement Twitter Card meta tags:
- Use "summary_large_image" card type
- Add twitter:card, twitter:title, twitter:description
- Include twitter:image (same as OG image)
- Add twitter:site handle if available

### 5. Create robots.txt and sitemap.xml
Technical SEO files:
- Create robots.txt with proper directives
- Allow all important pages
- Block admin/private areas
- Reference sitemap location
- Generate dynamic sitemap.xml with all pages

### 6. Add Canonical URLs
Prevent duplicate content issues:
- Add canonical link tag to all pages
- Point to preferred URL version
- Ensure consistency across similar pages
- Handle URL parameters correctly

### 7. Optimize Heading Hierarchy
Ensure proper H1-H6 structure:
- One H1 per page (main topic)
- Logical H2-H6 hierarchy
- Include keywords naturally
- Use headings for structure, not styling

### 8. Add JSON-LD Breadcrumbs
Implement breadcrumb structured data:
- Add to all non-homepage pages
- Show full navigation path
- Use proper schema.org format
- Test with Rich Results tool

## Implementation Details

### File Locations
- `/src/app/layout.jsx` - Base metadata
- `/src/app/*/page.jsx` - Page-specific metadata
- `/public/robots.txt` - Robots file
- `/public/sitemap.xml` - Sitemap (or app/sitemap.js for dynamic)
- `/public/images/og/` - Open Graph images

### Next.js Metadata Example
```javascript
// /src/app/pricing/page.jsx
export const metadata = {
  title: 'Solar Design Pricing - Save 40-60% | DIY Solar Consultants',
  description: 'Professional solar system design from $297. Licensed PE stamps, permit-ready plans. Get your custom solar design in 3-5 days. 98% approval rate guaranteed.',
  keywords: 'solar design pricing, solar plan cost, permit ready solar plans, solar engineering',
  openGraph: {
    title: 'Save Thousands on Solar Installation with Professional Design',
    description: 'Expert solar system design for DIY installers. From $297 with licensed PE stamp.',
    images: [
      {
        url: '/images/og/pricing-og.jpg',
        width: 1200,
        height: 630,
        alt: 'DIY Solar Consultants Pricing Plans',
      },
    ],
    locale: 'en_US',
    type: 'website',
    siteName: 'DIY Solar Consultants',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solar Design Pricing - Save 40-60% on Installation',
    description: 'Professional solar system design from $297. Licensed PE stamps, permit-ready plans.',
    images: ['/images/og/pricing-og.jpg'],
  },
  alternates: {
    canonical: 'https://diysolar.com/pricing',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
```

### Robots.txt Example
```txt
# /public/robots.txt
User-agent: *
Allow: /

# Crawl-delay for slower bots
User-agent: *
Crawl-delay: 1

# Disallow admin areas (if any)
Disallow: /admin/
Disallow: /api/private/

# Sitemap location
Sitemap: https://diysolar.com/sitemap.xml
```

### Dynamic Sitemap Example
```javascript
// /src/app/sitemap.js
export default function sitemap() {
  const baseUrl = 'https://diysolar.com';

  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/process`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/equipment`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/design-request`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];

  return routes;
}
```

### Breadcrumb Schema Example
```javascript
// Add to each page component
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://diysolar.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://diysolar.com/services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Solar Design",
      "item": "https://diysolar.com/services/solar-design"
    }
  ]
};
```

## Pages to Optimize

### Priority 1 (High Traffic/Conversion)
- Homepage - "Professional Solar System Design for DIY Installers | DIY Solar"
- Pricing - "Solar Design Pricing - Save 40-60% | DIY Solar Consultants"
- Design Request - "Request Free Solar Design Quote | DIY Solar Consultants"
- Services - "Solar Design Services - PE Stamped Plans | DIY Solar"

### Priority 2 (Important Pages)
- About - "About Our Solar Engineers | DIY Solar Consultants"
- Process - "How Our Solar Design Process Works | DIY Solar Consultants"
- FAQ - "Solar Design FAQs - Common Questions Answered | DIY Solar"
- Equipment - "Recommended Solar Equipment & Components | DIY Solar"

### Priority 3 (Supporting Pages)
- Contact - "Contact Our Solar Engineers | DIY Solar Consultants"
- Blog/Resources - If applicable

## SEO Keyword Targets

### Primary Keywords by Page
- **Homepage**: "DIY solar design", "solar system design", "solar plan design"
- **Pricing**: "solar design cost", "solar plan pricing", "PE stamp cost"
- **Services**: "solar engineering services", "solar permit plans", "licensed solar design"
- **Process**: "solar design process", "how to design solar system"
- **About**: "solar engineers", "NABCEP certified solar designer"
- **FAQ**: "solar design questions", "permit requirements solar"
- **Equipment**: "best solar panels", "solar inverter selection"

### Long-Tail Keywords
- "permit ready solar plans"
- "licensed engineer solar design"
- "DIY solar installation design"
- "solar system design for permit"
- "professional solar design services"

## Validation & Testing

### Tools to Use
1. **Google Search Console** - Index status, errors
2. **Google Rich Results Test** - Structured data validation
3. **Screaming Frog** - Crawl site, check metadata
4. **Ahrefs/SEMrush** - Keyword rankings, competitors
5. **PageSpeed Insights** - Core Web Vitals impact on SEO
6. **Mobile-Friendly Test** - Mobile usability

### What to Check
- All meta descriptions are unique and within character limits
- All title tags are unique and optimized
- OG images display correctly on social platforms
- Canonical URLs point to correct pages
- Sitemap includes all important pages
- Robots.txt doesn't block important content
- Heading hierarchy is logical (no H1 → H4 jumps)
- Breadcrumb schema validates without errors

## Success Criteria
- ✅ All pages have unique, optimized title tags (50-60 chars)
- ✅ All pages have unique meta descriptions (150-160 chars)
- ✅ Open Graph images created for all major pages
- ✅ Twitter Card markup on all pages
- ✅ robots.txt and sitemap.xml created and accessible
- ✅ Canonical URLs added to all pages
- ✅ Proper H1-H6 hierarchy on all pages
- ✅ Breadcrumb schema on all non-homepage pages
- ✅ No errors in Google Search Console
- ✅ All pages indexed in Google within 2 weeks

## Performance Targets
- 0 errors in Search Console
- 90+ SEO score in Lighthouse
- All pages crawlable by Googlebot
- Sitemap submitted and processed
- Rich results showing in search (where applicable)

## Notes
- Update metadata when page content changes
- Monitor Search Console for crawl errors
- Test social sharing on Facebook, Twitter, LinkedIn
- Keep titles and descriptions aligned with content
- Use actual business name consistently
- Ensure all URLs are lowercase and hyphenated
- Avoid keyword stuffing - write for humans first
