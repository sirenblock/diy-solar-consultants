# Task 01: Brand Consistency & Logo Optimization

## Objective
Ensure "DIY Solar Consultants" branding is consistent everywhere on the site, including logo, meta tags, and all copy references.

## Working Directory
/Users/lsd/msclaude/projects/1-1/diy-solar-consultants

## Requirements

### 1. Logo Update
**Current Issue:** Logo may not say "DIY Solar Consultants" clearly

**Action Items:**
- Update logo in Header component to display "DIY Solar Consultants"
- Use proper typography (Inter font, bold for "DIY", medium for "Solar Consultants")
- Add solar icon/graphic element
- Ensure logo is responsive (text + icon on desktop, icon only on mobile)

**Logo Component:**
```jsx
// src/components/Logo.jsx
import { Sun } from 'lucide-react';

export function Logo({ className = "" }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="w-10 h-10 bg-gradient-to-br from-solar-500 to-energy-600 rounded-lg flex items-center justify-center">
        <Sun className="w-6 h-6 text-white" />
      </div>
      <div className="hidden sm:block">
        <span className="text-xl font-bold text-gray-900">DIY Solar</span>
        <span className="text-xl font-medium text-gray-700 ml-1">Consultants</span>
      </div>
    </div>
  );
}
```

### 2. Page Title Consistency
Update all page titles to include "DIY Solar Consultants":

```jsx
<Head>
  <title>Solar Calculator | DIY Solar Consultants</title>
  <title>Free Quote | DIY Solar Consultants</title>
  <title>About Us | DIY Solar Consultants</title>
  // etc.
</Head>
```

### 3. Meta Tags
Ensure all meta descriptions mention "DIY Solar Consultants":

```jsx
<meta name="description" content="Expert DIY solar panel consultations from DIY Solar Consultants. Get your custom solar design today." />
```

### 4. Footer Copyright
```jsx
<p className="text-gray-500 text-sm">
  © {new Date().getFullYear()} DIY Solar Consultants. All rights reserved.
</p>
```

### 5. Contact Forms
Update all form confirmation messages:
```jsx
"Thank you for contacting DIY Solar Consultants! We'll respond within 24 hours."
```

### 6. Email Templates
Check API routes for email content:
- /api/contact.js
- /api/design-request.js
- /api/subscribe.js

Ensure emails say "from DIY Solar Consultants"

### 7. Navigation Branding
Update Header component:
```jsx
<Link href="/" className="flex items-center">
  <Logo />
</Link>
```

### 8. Social Media References
If there are any social media links, ensure profile names are "DIY Solar Consultants"

## Files to Update
- `/src/components/Header.jsx` - Add/update Logo
- `/src/components/Logo.jsx` - Create if needed
- `/src/components/Footer.jsx` - Copyright text
- `/src/pages/*.jsx` - All page titles
- `/src/pages/api/*.js` - Email content
- `/src/components/*Form.jsx` - Confirmation messages

## Success Criteria
✅ Logo displays "DIY Solar Consultants" clearly
✅ All page titles include brand name
✅ All meta tags mention brand name
✅ Footer copyright says "DIY Solar Consultants"
✅ Forms and emails reference brand consistently
✅ No generic or incorrect brand references anywhere

## Testing
1. Check every page visually
2. View page source for meta tags
3. Submit test form to check confirmation
4. Search codebase for old brand names or generic terms
