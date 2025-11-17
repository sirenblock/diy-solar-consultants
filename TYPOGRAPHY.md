# Typography System

## Overview
Professional, modern typography system using the Inter font family with proper hierarchy, consistent sizing, and optimized readability.

## Font Configuration

### Inter Font
- **Weights**: 400 (normal), 500 (medium), 600 (semibold), 700 (bold)
- **Display**: swap (optimized loading)
- **Preload**: enabled
- **Variable**: `--font-inter`

The font is automatically loaded and applied site-wide via `_app.jsx`.

## Type Scale

### Font Sizes with Line Heights and Letter Spacing

| Size   | Font Size | Line Height | Letter Spacing | Usage |
|--------|-----------|-------------|----------------|-------|
| `xs`   | 0.75rem   | 1.5         | 0.01em         | Small text, captions |
| `sm`   | 0.875rem  | 1.6         | 0              | Body small, UI labels |
| `base` | 1rem      | 1.6         | 0              | Default body text |
| `lg`   | 1.125rem  | 1.6         | 0              | Large body text |
| `xl`   | 1.25rem   | 1.5         | -0.01em        | Subheadings |
| `2xl`  | 1.5rem    | 1.4         | -0.01em        | H6, small headings |
| `3xl`  | 1.875rem  | 1.3         | -0.02em        | H5, medium headings |
| `4xl`  | 2.25rem   | 1.2         | -0.02em        | H4 |
| `5xl`  | 3rem      | 1.1         | -0.02em        | H3, H2 |
| `6xl`  | 3.75rem   | 1           | -0.02em        | H1, display text |

## Typography Components

### Heading Components

Import from `@/components/typography` or `@/components/Typography.jsx`:

```jsx
import { H1, H2, H3, H4, H5, H6 } from '@/components/typography'

// Usage
<H1>Main Page Heading</H1>
<H2 className="text-solar-700">Section Title</H2>
<H3 as="h2">Semantic override example</H3>
```

**Component Props:**
- `children`: Content to display
- `className`: Additional CSS classes (optional)
- `as`: Override semantic HTML tag (optional)

**Responsive Sizing:**
- H1: `text-4xl md:text-5xl lg:text-6xl`
- H2: `text-3xl md:text-4xl lg:text-5xl`
- H3: `text-2xl md:text-3xl lg:text-4xl`
- H4: `text-xl md:text-2xl lg:text-3xl`
- H5: `text-lg md:text-xl lg:text-2xl`
- H6: `text-base md:text-lg lg:text-xl`

### Body Text Components

```jsx
import { Paragraph, Lead, Small, Muted } from '@/components/typography'

// Lead paragraph (intro text)
<Lead>
  Larger, more prominent paragraph for introductions.
</Lead>

// Regular paragraph with size options
<Paragraph size="base">
  Default body text with comfortable reading line height.
</Paragraph>

<Paragraph size="lg">
  Larger body text for emphasis.
</Paragraph>

// Small text
<Small>Fine print or metadata</Small>

// Muted text
<Muted>Secondary information in gray</Muted>
```

### Display & Special Text

```jsx
import { Display, GradientText, Strong, Emphasis } from '@/components/typography'

// Hero/Display text (larger than H1)
<Display>
  Transform Your Home with Solar
</Display>

// Gradient text with solar/energy colors
<GradientText>
  Save 40-60% on Installation
</GradientText>

// Text emphasis
<Strong>Bold emphasis</Strong>
<Emphasis>Italic emphasis</Emphasis>
```

## Direct Tailwind Usage

### Headings
```jsx
<h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
  Page Title
</h1>

<h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
  Section Title
</h2>
```

### Body Text
```jsx
<p className="text-base leading-relaxed">
  Regular paragraph with comfortable reading line height (1.6).
</p>

<p className="text-lg md:text-xl leading-relaxed text-neutral-600">
  Lead paragraph or important introductory text.
</p>
```

### Font Weights
```jsx
<span className="font-normal">Normal (400)</span>
<span className="font-medium">Medium (500)</span>
<span className="font-semibold">Semibold (600)</span>
<span className="font-bold">Bold (700)</span>
```

## Best Practices

### 1. Heading Hierarchy
- Use semantic HTML tags (h1-h6) for proper SEO
- Only one H1 per page
- Don't skip heading levels (h1 → h3)
- Use the `as` prop to override semantics when needed

```jsx
// Good: Semantic hierarchy
<H1>Page Title</H1>
<H2>Section</H2>
<H3>Subsection</H3>

// Also good: Visual override for design needs
<H3 as="h2">Looks like H3 but semantically H2</H3>
```

### 2. Line Heights
- Headings: 1.0-1.3 (tighter for impact)
- Body text: 1.5-1.6 (comfortable reading)
- Small text: 1.5 (maintain readability)

### 3. Letter Spacing
- Headings: -0.02em (tighter, more refined)
- Body: 0 (default)
- Small text: 0.01em (improve legibility)

### 4. Responsive Typography
Always use responsive classes for headings:
```jsx
// Good
<H1 className="text-4xl md:text-5xl lg:text-6xl">Title</H1>

// Avoid (not responsive)
<h1 className="text-6xl">Title</h1>
```

### 5. Color & Contrast
```jsx
// Primary text
<p className="text-neutral-900">High contrast main content</p>

// Secondary text
<p className="text-neutral-600">Supporting information</p>

// Muted text
<p className="text-neutral-500">Subtle metadata</p>

// Brand colors
<H2 className="text-solar-700">Solar-themed heading</H2>
<H2 className="text-energy-600">Energy-themed heading</H2>
```

## Examples

### Hero Section
```jsx
<section className="text-center">
  <Display className="mb-6">
    Professional <GradientText>Solar Design</GradientText>
  </Display>

  <Lead className="mb-8 max-w-3xl mx-auto">
    Get permit-ready solar system plans designed by licensed engineers.
    Save 40-60% compared to full-service installation.
  </Lead>
</section>
```

### Content Section
```jsx
<section>
  <H2 className="mb-4">Why Choose DIY Solar?</H2>

  <Paragraph className="mb-4">
    Our professional engineers design custom solar systems tailored to your
    energy needs, roof characteristics, and local requirements.
  </Paragraph>

  <Paragraph>
    Every design is optimized for <Strong>maximum production</Strong> and
    <Strong>cost-effectiveness</Strong>.
  </Paragraph>
</section>
```

### Card with Typography
```jsx
<div className="p-6 bg-white rounded-lg">
  <H3 className="text-solar-700 mb-2">System Design</H3>

  <Lead className="mb-4">
    Complete solar system engineering and layout
  </Lead>

  <Paragraph className="text-neutral-700 mb-4">
    Our licensed Professional Engineers design systems optimized for
    your specific property and energy goals.
  </Paragraph>

  <Small className="text-neutral-500">Starting at $297</Small>
</div>
```

## Migration Guide

### Replacing Old Typography

**Before:**
```jsx
<h1 className="text-6xl font-bold">Title</h1>
<p className="text-xl">Lead text</p>
<p className="text-gray-600">Body text</p>
```

**After:**
```jsx
<H1>Title</H1>
<Lead>Lead text</Lead>
<Paragraph className="text-neutral-600">Body text</Paragraph>
```

### Benefits
- ✅ Consistent sizing across the site
- ✅ Responsive by default
- ✅ Proper line heights and letter spacing
- ✅ Easier to maintain and update
- ✅ Better readability and accessibility

## Troubleshooting

### Font not loading?
1. Check `_app.jsx` has the Inter import and configuration
2. Verify the `inter.variable` class is applied to the app wrapper
3. Clear `.next` directory and rebuild

### Typography looks different on mobile?
- Verify responsive classes are used (md:, lg: breakpoints)
- Check that the component is using the responsive sizing classes

### Custom styling not applying?
- Add custom classes after component classes to override
- Use Tailwind's important modifier if needed: `!text-blue-500`

## Additional Resources

- [Tailwind Typography Documentation](https://tailwindcss.com/docs/font-size)
- [next/font Documentation](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
- [Inter Font Family](https://fonts.google.com/specimen/Inter)
