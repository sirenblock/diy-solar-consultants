# Task 01: Enhanced Schema Markup & Structured Data

## Objective
Add comprehensive schema.org structured data markup across all pages to improve search engine visibility and enable rich snippets in search results.

## Working Directory
/Users/lsd/msclaude/projects/1-1/diy-solar-consultants

## Requirements

### 1. Add Service Schema to Services Page
- Add detailed Service schema for each service offered
- Include price ranges, service areas, and availability
- Add aggregateRating and review count

### 2. Add Product Schema to Equipment Page
- Add Product schema for each solar equipment category
- Include manufacturer, specifications, and ratings
- Add offer information with price availability

### 3. Add BreadcrumbList Schema
- Implement breadcrumb navigation schema on all pages
- Create hierarchical navigation structure
- Ensure proper itemListElement formatting

### 4. Add Organization Schema Enhancement
- Expand Organization schema with detailed information
- Add founder, foundingDate, numberOfEmployees
- Include sameAs for social media profiles
- Add award and accreditation information

### 5. Add HowTo Schema to Process Page
- Enhance existing HowTo schema with more detail
- Add step-by-step images and time estimates
- Include tools and materials needed

### 6. Add VideoObject Schema
- Add schema for any video content
- Include thumbnails, duration, description
- Add uploadDate and contentUrl

## Implementation Details

### File Locations
- `/src/pages/*.jsx` - Add schema to relevant pages
- Create `/src/utils/schema.js` - Centralize schema generation

### Schema Types to Implement
1. **LocalBusiness** (enhanced on homepage)
2. **Service** (services page)
3. **Product** (equipment page)
4. **FAQPage** (already exists, verify)
5. **BreadcrumbList** (all pages)
6. **Organization** (enhanced)
7. **HowTo** (process page)
8. **AggregateRating** (testimonials)
9. **Review** (individual reviews)

### Code Example
```javascript
// /src/utils/schema.js
export const generateServiceSchema = (service) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": service.name,
  "description": service.description,
  "provider": {
    "@type": "Organization",
    "name": "DIY Solar Consultants"
  },
  "areaServed": "United States",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Solar Services",
    "itemListElement": [...]
  }
});
```

## Validation
- Test all schema using Google Rich Results Test
- Validate with Schema.org validator
- Check Search Console for structured data errors

## Success Criteria
- ✅ All pages have appropriate schema markup
- ✅ Schema validates without errors
- ✅ Rich snippets appear in search results testing tool
- ✅ Breadcrumbs display correctly
- ✅ Service and Product schema properly formatted

## Testing URLs
- https://search.google.com/test/rich-results
- https://validator.schema.org/

## Notes
- Keep schema in sync with actual page content
- Use JSON-LD format (already in use)
- Ensure all required properties are included
- Add optional properties for richer display
