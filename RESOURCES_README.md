# DIY Solar Consultants - Resources Pages Documentation

## Overview

The Resources section of DIY Solar Consultants is a comprehensive library of guides, calculators, templates, and educational content designed to help DIY homeowners successfully plan, design, and install solar systems.

## Pages Created

### 1. Main Resources Page (`/resources`)
**File:** `src/pages/resources.jsx`

**Features:**
- Hero section with quick search
- Advanced search and filtering system
- Category-based navigation (8 categories)
- Featured resources section
- State-specific information preview
- Newsletter signup
- Email capture for downloads
- Responsive grid layout

**Components Used:**
- `ResourceCard` - Reusable card component for displaying resources
- `DownloadModal` - Email capture modal for downloadable resources
- `SearchFilter` - Advanced search and filtering functionality

### 2. Calculators Page (`/calculators`)
**File:** `src/pages/calculators.jsx`

**Features:**
- 3 Interactive calculators:
  - System Size Calculator
  - Payback Period Calculator
  - Battery Sizing Calculator
- Real-time calculations
- Professional-grade formulas
- FAQ section
- No registration required

**Components Used:**
- `SimpleCalculator` - Reusable calculator component with multiple types

## Components

### ResourceCard (`src/components/ResourceCard.jsx`)
Reusable card component for displaying individual resources.

**Props:**
- `resource` (object) - Resource data
- `onDownload` (function) - Callback for download actions

**Features:**
- Displays resource type, title, description
- Shows difficulty level, format, read time
- Displays tags and author information
- Different action buttons based on resource type
- Responsive design

### DownloadModal (`src/components/DownloadModal.jsx`)
Email capture modal for downloadable resources.

**Props:**
- `resource` (object) - Resource to download
- `isOpen` (boolean) - Modal visibility state
- `onClose` (function) - Close modal callback

**Features:**
- Email capture form
- Success state with confirmation
- Privacy notice
- Resource information display
- Simulated download functionality

### SearchFilter (`src/components/SearchFilter.jsx`)
Advanced search and filtering component.

**Props:**
- `onFilterChange` (function) - Callback when filters change
- `categories` (array) - Available categories

**Features:**
- Real-time search
- Category filtering (tabs)
- Difficulty level filter
- Format filter
- Sort options (Featured, Recent, A-Z, Popular)
- Active filters display with remove buttons
- Clear all filters option

### SimpleCalculator (`src/components/SimpleCalculator.jsx`)
Multi-purpose calculator component.

**Props:**
- `type` (string) - Calculator type: 'system-size', 'payback', or 'battery'

**Features:**
- System size calculation based on electric bill
- Payback period and ROI analysis
- Battery sizing for backup power
- Professional formulas
- Instant results
- Formatted output displays

### GuideDetail (`src/components/GuideDetail.jsx`)
Detailed view component for individual guides and articles.

**Props:**
- `resourceId` (string) - ID of resource to display
- `onDownload` (function) - Download callback
- `onClose` (function) - Close callback

**Features:**
- Table of contents
- Full content display
- Sidebar with quick info
- Related resources
- Download CTA
- Professional help CTA

## Data Structure

### Resources Data (`src/data/resources.js`)

**Main exports:**
- `resourceCategories` - Array of resource categories
- `resources` - Array of all resources (50+ items)
- Helper functions:
  - `getResourcesByCategory(categoryId)`
  - `getFeaturedResources()`
  - `searchResources(query)`
  - `getResourceById(id)`
  - `getRelatedResources(resourceId)`

**Resource Object Structure:**
```javascript
{
  id: 'unique-id',
  title: 'Resource Title',
  category: 'installation-guides',
  type: 'Guide',
  difficulty: 'Beginner',
  format: ['Article', 'PDF'],
  wordCount: 5000,
  readTime: '25 min',
  downloadable: true,
  featured: true,
  tags: ['tag1', 'tag2'],
  description: 'Short description',
  summary: 'Longer summary',
  author: 'Author name',
  lastUpdated: '2024-11-15',
  sections: ['Section 1', 'Section 2'],
  relatedResources: ['resource-id-1', 'resource-id-2']
}
```

**Resource Categories:**
1. Installation Guides
2. Permitting Checklists
3. Equipment Selection Guides
4. Calculators & Tools
5. State-Specific Information
6. Video Tutorials (placeholders)
7. Blog Articles
8. Downloadable Templates

### State Information Data (`src/data/stateInfo.js`)

**Exports:**
- `statesData` - Object containing detailed info for 10 states
- `statesList` - Array of all states
- `getStateInfo(stateId)` - Get info for specific state
- `getAllStates()` - Get all state data

**State Data Structure:**
```javascript
{
  id: 'california',
  name: 'California',
  abbreviation: 'CA',
  averageSunHours: 5.8,
  electricityRate: 0.32,
  typicalSystemCost: 15000,
  typicalSystemSize: 6.5,
  paybackPeriod: 6.8,
  permitFees: '200-500',
  permitTimeline: '2-4 weeks',
  necVersion: '2023',
  rapidShutdown: 'Required',
  peStampRequired: 'Sometimes',
  netMetering: 'NEM 3.0',
  fireSetbacks: 'Required',
  incentives: [...],
  keyRequirements: [...],
  majorUtilities: [...],
  interconnectionInfo: {...},
  resources: [...]
}
```

**States Included:**
- California
- Florida
- Texas
- New York
- Arizona
- North Carolina
- Nevada
- New Jersey
- Massachusetts
- Colorado

### Blog Articles Data (`src/data/blogArticles.js`)

**Exports:**
- `blogArticles` - Array of blog articles with full content
- `getBlogArticleById(id)`
- `getBlogArticlesByCategory(category)`

**Article Structure:**
```javascript
{
  id: 'article-id',
  title: 'Article Title',
  slug: 'url-slug',
  category: 'Beginner Guides',
  author: 'Author Name',
  publishDate: '2024-11-15',
  readTime: '9 min',
  excerpt: 'Brief excerpt',
  content: 'Full article content (markdown/HTML)',
  tags: ['tag1', 'tag2'],
  relatedArticles: ['id1', 'id2']
}
```

**Articles Included:**
1. Solar Energy 101: How Solar Panels Work
2. Is Solar Worth It? Complete ROI Analysis
3. DIY Solar vs Professional Installation: Complete Comparison

## Content Summary

### Installation Guides (4 guides)
1. **Complete DIY Solar Installation Guide** - Comprehensive 11-phase guide covering the entire installation process
2. **Roof Mounting Installation Guide** - Detailed techniques for different roof types
3. **Electrical Wiring Guide** - Technical guide for solar electrical installations
4. **Battery Installation Guide** - Complete battery storage system installation

### Permitting Checklists (4 guides)
1. **Universal Permit Checklist** - Generic checklist for all jurisdictions
2. **California Permitting Guide** - CA-specific requirements
3. **Florida Permitting Guide** - FL-specific with hurricane requirements
4. **Texas Permitting Guide** - TX-specific guidelines

### Equipment Selection Guides (4 guides)
1. **Solar Panel Buying Guide 2024** - Panel technology and manufacturer comparison
2. **Inverter Selection Guide** - String vs microinverters comparison
3. **Battery Buying Guide** - Battery storage selection and sizing
4. **Mounting System Guide** - Racking selection by roof type

### Calculators & Tools (7 tools)
1. Solar System Size Calculator
2. DIY vs Professional Cost Comparison
3. Solar Production Estimator
4. Payback Period Calculator
5. Battery Sizing Calculator
6. Wire Size Calculator
7. String Sizing Calculator

### Blog Articles (3 articles with full content)
1. Solar Energy 101 (~1,800 words)
2. Is Solar Worth It? (~2,200 words)
3. DIY vs Professional (~2,500 words)

### Downloadable Templates (8 templates)
1. Solar Planning Checklist
2. Energy Usage Tracking Spreadsheet
3. Equipment Comparison Spreadsheet
4. Installation Day Checklist
5. Permit Application Template
6. Inspection Preparation Checklist
7. System Maintenance Log
8. ROI Tracking Spreadsheet

### Video Tutorials (3 placeholders)
1. Introduction to DIY Solar
2. Roof Mounting Installation Tutorial
3. Electrical Interconnection Tutorial

## Features

### Search & Filtering
- **Real-time search** across titles, descriptions, and tags
- **Category filtering** - Filter by resource category
- **Difficulty filtering** - Filter by skill level
- **Format filtering** - Filter by content format
- **Sorting options** - Featured, Recent, A-Z, Popular
- **Active filters display** - Visual feedback with remove buttons

### Email Capture System
- Modal-based email capture for downloads
- Name and email collection
- Privacy notice included
- Success confirmation
- Simulated download delivery
- Ready for CRM integration

### Responsive Design
- Mobile-first approach
- Responsive grid layouts
- Touch-friendly navigation
- Optimized for all screen sizes

### SEO Optimization
- Semantic HTML structure
- Meta tags for pages
- Descriptive titles and descriptions
- Schema markup ready
- Keyword-optimized content

## Technical Details

### Technologies Used
- **Next.js 14** - React framework with Pages Router
- **React 18** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Custom components** - Reusable React components

### File Structure
```
src/
├── components/
│   ├── ResourceCard.jsx
│   ├── DownloadModal.jsx
│   ├── SearchFilter.jsx
│   ├── SimpleCalculator.jsx
│   └── GuideDetail.jsx
├── data/
│   ├── resources.js
│   ├── stateInfo.js
│   └── blogArticles.js
└── pages/
    ├── resources.jsx
    └── calculators.jsx
```

### Styling
- Uses Tailwind CSS utility classes
- Custom color palette (solar-* and energy-*)
- Responsive breakpoints (sm, md, lg)
- Custom utility classes defined in globals.css
- Gradient backgrounds
- Smooth transitions and hover effects

## Future Enhancements

### Phase 2 Potential Features
1. **Actual video content** - Replace placeholder videos with real tutorials
2. **PDF generation** - Server-side PDF generation for guides
3. **User accounts** - Save favorites, track downloads
4. **Comments/reviews** - User feedback on resources
5. **Interactive diagrams** - SVG diagrams for technical guides
6. **Progress tracking** - Track which guides user has read
7. **Printable versions** - Print-optimized layouts
8. **Advanced calculators** - More detailed calculation tools
9. **State map visualization** - Interactive US map for state selection
10. **Resource ratings** - User ratings and popularity metrics

### Integration Points
1. **Email service** - MailChimp, SendGrid, or ConvertKit for email capture
2. **CRM integration** - Salesforce, HubSpot for lead management
3. **Analytics** - Google Analytics, Mixpanel for usage tracking
4. **CDN for downloads** - S3, CloudFront for file hosting
5. **Search enhancement** - Algolia or ElasticSearch for advanced search

## Development Notes

### Running Locally
```bash
npm run dev
```
Server runs on http://localhost:3000 (or next available port)

### Building for Production
```bash
npm run build
npm start
```

### Adding New Resources
1. Add resource object to `src/data/resources.js`
2. Include all required fields
3. Add to appropriate category
4. Set `featured: true` if it should be highlighted
5. Include related resources IDs

### Adding New States
1. Add state data to `src/data/stateInfo.js`
2. Follow existing state object structure
3. Include incentives, requirements, and utility info

### Adding New Blog Articles
1. Add article to `src/data/blogArticles.js`
2. Include full content (markdown or HTML)
3. Set appropriate category and tags
4. Link related articles

## Testing Checklist

- [x] Resources page loads correctly
- [x] Search functionality works
- [x] Category filtering works
- [x] All calculator types function
- [x] Download modal opens and closes
- [x] Email capture form validation
- [x] Mobile responsive design
- [x] All links and navigation work
- [x] SEO meta tags present
- [x] No console errors

## Deployment

The resources pages are ready for production deployment. Ensure:
1. Environment variables are set (if using email service)
2. Static assets are optimized
3. Images are compressed and served via CDN
4. Analytics tracking is configured
5. Error tracking is set up (Sentry, etc.)

## Support

For questions or issues with the resources pages:
1. Check this documentation first
2. Review component code and comments
3. Test in development mode
4. Check browser console for errors

## License

Created for DIY Solar Consultants. All content is proprietary.

---

**Last Updated:** November 17, 2024
**Version:** 1.0.0
**Author:** Claude (Anthropic)
