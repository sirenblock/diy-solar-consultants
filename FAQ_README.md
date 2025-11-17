# FAQ Page - Documentation

## Overview
A comprehensive FAQ page for DIY Solar Consultants with accordion UI, real-time search, and category navigation.

## Files Created

### 1. `src/data/faqData.js`
Data structure containing all FAQ content organized into 8 categories:
- General Solar Questions (5 questions)
- Our Services (5 questions)
- Design Process (3 questions)
- Permitting & Codes (3 questions)
- Equipment & Costs (4 questions)
- DIY Installation (3 questions)
- Battery Storage (2 questions)
- Support & Guarantees (3 questions)

**Total: 28 comprehensive Q&A pairs**

### 2. `src/components/Accordion.jsx`
Reusable accordion component with:
- Smooth expand/collapse animations
- Keyboard accessibility (Enter/Space keys)
- Search term highlighting
- Markdown-style text formatting
- ARIA attributes for screen readers
- Focus management

### 3. `src/pages/faq.jsx`
Main FAQ page with:
- Hero section with search bar
- Category navigation (sticky sidebar on desktop, dropdown on mobile)
- Real-time search with 300ms debounce
- Smooth scroll to categories
- Active category highlighting
- "Still Have Questions" CTA section
- Related Resources links
- SEO optimization with FAQPage schema markup

## Features

### Search Functionality
- Real-time filtering of questions and answers
- 300ms debounce to improve performance
- Highlights matching text in yellow
- Shows result count
- Clear search button
- No results state with helpful message

### Category Navigation
**Desktop (lg+):**
- Sticky sidebar navigation
- Shows question count per category
- Highlights active category
- Smooth scroll on click

**Mobile:**
- Dropdown menu
- Touch-friendly buttons
- Auto-closes after selection

### Accordion Behavior
- One question open at a time (can be modified)
- Smooth height transitions
- Click or keyboard to toggle
- Visual indicator (chevron rotates)
- Focus states for accessibility

### Accessibility
- ✓ Semantic HTML (proper heading hierarchy)
- ✓ ARIA attributes (aria-expanded, aria-label, aria-hidden)
- ✓ Keyboard navigation (Enter/Space to toggle, Tab to navigate)
- ✓ Focus indicators (blue ring on focus)
- ✓ Screen reader friendly
- ✓ Skip links ready
- ✓ Color contrast compliant

### SEO Optimization
- Meta title and description
- Canonical URL
- SEO keywords
- FAQPage structured data (schema.org)
- Question/Answer schema for each Q&A
- Proper heading hierarchy (H1 → H2 for categories)

### Mobile Responsive
- Stacks vertically on mobile
- Touch-friendly tap targets
- Readable text sizes
- Optimized spacing
- Category dropdown instead of sidebar
- Full-width accordions

## Usage

### Adding New Questions
Edit `src/data/faqData.js`:

```javascript
{
  id: 'q29', // Unique ID
  category: 'general', // Category slug
  question: 'Your question here?',
  answer: `Your answer here.

**Bold text** for emphasis
- Bullet points work
- ✓ Checkmarks supported
- ✗ X marks supported

Multiple paragraphs work too.`
}
```

### Adding New Categories
Edit `src/data/faqData.js`:

```javascript
{
  id: 'new-category',
  name: 'New Category Name',
  slug: 'new-category-slug',
}
```

### Customizing Accordion Behavior
To allow multiple accordions open at once, modify `src/pages/faq.jsx`:

```javascript
// Change from:
const [openAccordionId, setOpenAccordionId] = useState(null);

// To:
const [openAccordionIds, setOpenAccordionIds] = useState([]);

// Update handleToggle function accordingly
```

## Text Formatting

The answer field supports markdown-like syntax:
- `**bold text**` → **bold text**
- `- bullet` → bullet point
- `- ✓ item` → checkmark bullet
- `- ✗ item` → X mark bullet
- Blank lines create paragraph breaks

## Performance

- Debounced search (300ms) prevents excessive re-renders
- Lazy rendering of accordion content (only expanded items fully render)
- Smooth CSS transitions
- Optimized re-renders with React hooks

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Next Steps

1. Add actual links to other pages (contact, services, calculator, etc.)
2. Implement Header/Footer components if not already done
3. Add actual contact information in "Still Have Questions" section
4. Consider adding "Jump to Top" button for long scrolls
5. Add analytics tracking for search terms and popular questions
6. Consider adding "Was this helpful?" feedback buttons

## Dependencies

- Next.js 14+
- React 18+
- Tailwind CSS 3+
- No additional packages required

## Styling

All styles use Tailwind CSS utility classes. To customize:
- Colors: Modify blue-* classes (currently blue-600, blue-700, etc.)
- Spacing: Adjust p-*, m-*, gap-* classes
- Typography: Change text-* and font-* classes
- Breakpoints: lg:, md:, sm: prefixes for responsive design

## Notes

- All placeholder XXX values in FAQ content should be replaced with actual prices
- Email addresses and phone numbers should be updated
- Links to other pages need to be created/verified
- Images can be added to enhance visual appeal (e.g., category icons)
