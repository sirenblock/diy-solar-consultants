# DIY Solar Consultants Website

Professional solar design and permitting services website built with Next.js 14 and Tailwind CSS.

## Features

- **Responsive Design**: Mobile-first approach with breakpoints for tablet and desktop
- **SEO Optimized**: Meta tags, semantic HTML, and Schema.org markup for LocalBusiness
- **Professional UI**: Clean, modern design with solar/energy color scheme
- **Conversion Focused**: Multiple CTAs, trust signals, and clear value propositions

## Pages Included

- **Homepage** (`/`) - Complete landing page with all sections:
  - Hero section with CTAs
  - Value propositions
  - Key statistics
  - Services overview
  - 4-step process
  - Customer testimonials
  - FAQ snippet
  - Newsletter signup

## Components

### Header Component
- Sticky navigation with logo and menu
- Mobile-responsive hamburger menu
- Phone number and primary CTA button
- Smooth scroll behavior

### Footer Component
- Company information and tagline
- Quick links navigation
- Services list
- Trust signals
- Newsletter signup form
- Contact information
- Legal links (Privacy Policy, Terms of Service)

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
diy-solar-consultants/
├── public/              # Static assets
│   └── images/         # Images and graphics
├── src/
│   ├── components/     # Reusable React components
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   ├── pages/         # Next.js pages
│   │   ├── _app.jsx   # App wrapper
│   │   ├── _document.jsx
│   │   └── index.jsx  # Homepage
│   └── styles/        # Global styles
│       └── globals.css
├── tailwind.config.js
├── next.config.js
└── package.json
```

## Design System

### Colors
- **Solar Blue**: Primary brand color
  - solar-600: #0284c7 (primary)
  - solar-700: #0369a1 (hover states)
- **Energy Green**: Secondary/accent color
  - energy-500: #22c55e
  - energy-600: #16a34a

### Typography
- Headings: Bold, tracking-tight
- Body: Regular weight, relaxed leading for readability

### Components
- **btn-primary**: Primary CTA button
- **btn-secondary**: Secondary/outline button
- **section-container**: Consistent page section wrapper
- **heading-xl/lg/md/sm**: Responsive heading classes

## Key Features Implemented

### SEO
- Meta title and description optimized for search
- Schema.org LocalBusiness markup
- Open Graph tags for social sharing
- Semantic HTML with proper heading hierarchy

### Performance
- Next.js automatic code splitting
- Optimized images (ready for Next.js Image component)
- Minimal dependencies
- Static generation where possible

### Accessibility
- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast compliance
- Alt text ready for images

### Mobile Responsive
- Mobile-first Tailwind CSS approach
- Hamburger menu for mobile
- Touch-friendly tap targets
- Optimized layouts for all screen sizes

## Customization

### Update Contact Information
Edit the phone number and email in:
- `src/components/Header.jsx` (line 75)
- `src/components/Footer.jsx` (lines 80-95)

### Update Company Details
Modify the company information in:
- `src/components/Footer.jsx`
- `src/pages/index.jsx` (Schema.org markup)

### Change Colors
Update the color scheme in:
- `tailwind.config.js` (solar and energy color palettes)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Technologies Used

- **Next.js 14**: React framework with Pages Router
- **React 18**: UI library
- **Tailwind CSS 3**: Utility-first CSS framework
- **PostCSS**: CSS processing
- **ESLint**: Code linting

## License

All rights reserved © 2024 DIY Solar Consultants

## Next Steps

1. Add remaining pages (About, Services, Equipment, Calculator, Contact, etc.)
2. Implement solar calculator functionality
3. Create multi-step design request form
4. Add equipment database and filtering
5. Set up contact form backend
6. Add blog/resources section
7. Integrate analytics (Google Analytics, etc.)
8. Set up email newsletter service
9. Add testimonials database
10. Create case studies/portfolio section

## Support

For questions or issues, please contact the development team.
