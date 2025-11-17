# Button & CTA Design System

## Overview

A comprehensive, modern button system with gradient designs, multiple variants, sizes, and states. Built for accessibility, responsiveness, and analytics tracking.

## Design Philosophy

- **Modern & Minimal**: Clean design with subtle gradients and shadows
- **Professional**: Consistent styling that builds trust
- **Accessible**: WCAG compliant with proper focus states and ARIA attributes
- **Responsive**: Touch-friendly on mobile, precise on desktop
- **Analytics-Ready**: Built-in tracking for all CTA interactions

---

## Button Component

### Location
`/src/components/Button.jsx`

### Basic Usage

```jsx
import Button from '@/components/Button'

// Basic primary button
<Button variant="primary" size="md">
  Get Started
</Button>

// Button as link
<Button
  href="/design-request"
  variant="primary"
  size="lg"
  location="homepage-hero"
>
  Get Your Free Design
</Button>

// Button with loading state
<Button
  variant="primary"
  size="md"
  loading={isSubmitting}
  disabled={!formValid}
>
  Submit Form
</Button>
```

---

## Variants

### 1. Primary Button
**Use for**: Main CTAs, primary actions, conversion points

**Features**:
- Gradient background (solar-600 to energy-600)
- White text
- Shadow with 30% opacity
- Lifts on hover (-translate-y-0.5)
- Focus ring with solar-500

**Code**:
```jsx
<Button variant="primary" size="md">
  Get Started
</Button>
```

**CSS Class**:
```jsx
<a className="btn-primary">Get Started</a>
```

---

### 2. Secondary Button
**Use for**: Secondary actions, alternative options, cancel buttons

**Features**:
- White background
- Gray border that changes to solar-600 on hover
- Text changes from gray-800 to solar-600 on hover
- Shadow appears on hover
- Focus ring with solar-500

**Code**:
```jsx
<Button variant="secondary" size="md">
  Learn More
</Button>
```

**CSS Class**:
```jsx
<a className="btn-secondary">Learn More</a>
```

---

### 3. Ghost Button
**Use for**: Tertiary actions, less prominent options, inline actions

**Features**:
- Transparent background
- Gray text
- Light gray background on hover
- No shadow by default
- Focus ring with gray-500

**Code**:
```jsx
<Button variant="ghost" size="md">
  Cancel
</Button>
```

**CSS Class**:
```jsx
<button className="btn-ghost">Cancel</button>
```

---

### 4. Icon Buttons
**Use for**: Actions represented by icons, compact interfaces

**Features**:
- Square or circle shape
- Consistent sizing
- Shadow effects
- Hover color changes

**Code**:
```jsx
import { IconButton } from '@/components/Button'

// Square icon button
<IconButton
  icon={<MenuIcon className="w-5 h-5" />}
  shape="square"
  size="md"
  aria-label="Open menu"
/>

// Circle icon button
<IconButton
  icon={<CloseIcon className="w-5 h-5" />}
  shape="circle"
  size="md"
  aria-label="Close"
/>
```

**CSS Classes**:
```jsx
<button className="btn-icon">
  <MenuIcon className="w-5 h-5" />
</button>

<button className="btn-icon-circle">
  <CloseIcon className="w-5 h-5" />
</button>
```

---

## Sizes

### Small (sm)
- Padding: `py-2 px-4`
- Text: `text-sm`
- Icon: `w-4 h-4`

**Usage**: Inline actions, compact interfaces, mobile optimization

```jsx
<Button variant="primary" size="sm">Small Button</Button>
```

### Medium (md) - Default
- Padding: `py-3 px-6`
- Text: `text-base`
- Icon: `w-5 h-5`

**Usage**: Standard buttons, most common size

```jsx
<Button variant="primary" size="md">Medium Button</Button>
```

### Large (lg)
- Padding: `py-4 px-8`
- Text: `text-lg`
- Icon: `w-6 h-6`

**Usage**: Hero CTAs, important conversion points, emphasis

```jsx
<Button variant="primary" size="lg">Large Button</Button>
```

---

## States

### 1. Default
Standard appearance, ready for interaction

### 2. Hover
- Primary: Stronger shadow, lifts up
- Secondary: Border and text change color, shadow appears
- Ghost: Background appears
- Icon: Background color changes, stronger shadow

### 3. Active/Focus
- Focus ring with 2px width
- Ring offset of 2px
- Color matches variant (solar-500 or gray-500)

### 4. Disabled
```jsx
<Button variant="primary" disabled>
  Disabled Button
</Button>
```

**Appearance**:
- Gray background (#E5E5E5)
- Gray text (#737373)
- No hover effects
- Cursor: not-allowed

### 5. Loading
```jsx
<Button variant="primary" loading={true}>
  Processing...
</Button>
```

**Features**:
- Spinning loader icon
- Disabled interaction
- Maintains button dimensions
- Shows processing state

---

## Advanced Features

### With Icons

```jsx
// Left icon
<Button
  variant="primary"
  leftIcon={<ArrowRightIcon className="w-5 h-5" />}
>
  Continue
</Button>

// Right icon
<Button
  variant="secondary"
  rightIcon={<ExternalLinkIcon className="w-5 h-5" />}
>
  View Details
</Button>

// Both icons
<Button
  variant="ghost"
  leftIcon={<DownloadIcon className="w-5 h-5" />}
  rightIcon={<ArrowDownIcon className="w-5 h-5" />}
>
  Download Report
</Button>
```

### External Links

```jsx
<Button
  href="https://example.com"
  external={true}
  variant="primary"
>
  External Link
</Button>
```

### Button Groups

```jsx
import { ButtonGroup } from '@/components/Button'

// Horizontal group (default)
<ButtonGroup>
  <Button variant="primary">Save</Button>
  <Button variant="secondary">Cancel</Button>
  <Button variant="ghost">Reset</Button>
</ButtonGroup>

// Vertical group
<ButtonGroup orientation="vertical">
  <Button variant="secondary">Option 1</Button>
  <Button variant="secondary">Option 2</Button>
  <Button variant="secondary">Option 3</Button>
</ButtonGroup>
```

---

## Analytics Integration

All buttons automatically track CTA clicks when used with an `href` prop.

```jsx
<Button
  href="/design-request"
  variant="primary"
  location="homepage-hero"
>
  Get Free Quote
</Button>
```

**Tracked Data**:
- Button text/label
- Location identifier
- Destination URL
- Timestamp

---

## Accessibility

### ARIA Attributes

All buttons include proper ARIA attributes:

```jsx
<Button
  variant="primary"
  loading={true}
  aria-label="Submitting form"
  aria-busy={true}
>
  Submit
</Button>
```

### Keyboard Navigation

- **Tab**: Navigate between buttons
- **Enter/Space**: Activate button
- **Shift+Tab**: Navigate backwards

### Focus Indicators

All buttons have visible focus rings:
- 2px ring width
- 2px offset from button
- High contrast colors
- Visible on keyboard navigation

### Touch Targets

Mobile buttons meet WCAG 2.5.5 Level AAA:
- Minimum 44x44px touch target
- Proper spacing between buttons
- Easy to tap with thumb

---

## Migration Guide

### From Old Button Classes

**Before**:
```jsx
<a className="btn-primary">Get Started</a>
```

**After**:
```jsx
<Button variant="primary" href="/start">Get Started</Button>
```

### From TrackedCTA

**Before**:
```jsx
<TrackedCTA
  href="/design"
  variant="primary"
  location="homepage"
>
  Get Design
</TrackedCTA>
```

**After**:
```jsx
<Button
  href="/design"
  variant="primary"
  location="homepage"
>
  Get Design
</Button>
```

**Note**: TrackedCTA now wraps the Button component, so both work!

---

## Best Practices

### Do's ✅

1. **Use primary for main actions**
   ```jsx
   <Button variant="primary">Get Started</Button>
   ```

2. **Provide clear labels**
   ```jsx
   <Button variant="primary">Download Your Free Guide</Button>
   ```

3. **Use loading states for async actions**
   ```jsx
   <Button loading={isSubmitting}>Submit</Button>
   ```

4. **Include location for analytics**
   ```jsx
   <Button location="homepage-hero">Get Quote</Button>
   ```

5. **Use aria-label for icon buttons**
   ```jsx
   <IconButton icon={<Menu />} aria-label="Open menu" />
   ```

### Don'ts ❌

1. **Don't use multiple primary buttons in one section**
   ```jsx
   <!-- Bad -->
   <Button variant="primary">Action 1</Button>
   <Button variant="primary">Action 2</Button>

   <!-- Good -->
   <Button variant="primary">Main Action</Button>
   <Button variant="secondary">Secondary Action</Button>
   ```

2. **Don't use vague labels**
   ```jsx
   <!-- Bad -->
   <Button>Click Here</Button>

   <!-- Good -->
   <Button>Get Your Free Solar Design</Button>
   ```

3. **Don't forget disabled state validation**
   ```jsx
   <!-- Bad -->
   <Button>Submit</Button>

   <!-- Good -->
   <Button disabled={!isValid}>Submit</Button>
   ```

---

## Examples

### Hero CTA
```jsx
<Button
  href="/design-request"
  variant="primary"
  size="lg"
  location="homepage-hero"
>
  Get Your Free Solar Design
</Button>
```

### Form Submit
```jsx
<Button
  type="submit"
  variant="primary"
  size="md"
  loading={isSubmitting}
  disabled={!formIsValid}
  leftIcon={<CheckIcon className="w-5 h-5" />}
>
  {isSubmitting ? 'Submitting...' : 'Submit Application'}
</Button>
```

### Navigation
```jsx
<Button
  href="/calculator"
  variant="secondary"
  size="md"
  location="navigation"
>
  Try Calculator
</Button>
```

### Mobile Menu Toggle
```jsx
<IconButton
  icon={isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
  onClick={toggleMenu}
  shape="circle"
  size="md"
  aria-label={isOpen ? 'Close menu' : 'Open menu'}
  aria-expanded={isOpen}
/>
```

---

## Component API Reference

### Button Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'ghost' \| 'icon'` | `'primary'` | Visual style variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| `href` | `string` | - | Link destination (makes button a link) |
| `external` | `boolean` | `false` | Whether link is external |
| `loading` | `boolean` | `false` | Shows loading spinner |
| `disabled` | `boolean` | `false` | Disables button |
| `location` | `string` | `'unknown'` | Analytics location identifier |
| `leftIcon` | `ReactNode` | - | Icon before text |
| `rightIcon` | `ReactNode` | - | Icon after text |
| `iconShape` | `'square' \| 'circle'` | - | Shape for icon variant |
| `className` | `string` | `''` | Additional CSS classes |
| `onClick` | `function` | - | Click handler |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | Button type |

### IconButton Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | `ReactNode` | **Required** | Icon element |
| `shape` | `'square' \| 'circle'` | `'square'` | Button shape |
| `aria-label` | `string` | **Required** | Accessible label |
| All Button props | - | - | Inherits all Button props |

### ButtonGroup Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Group direction |
| `className` | `string` | `''` | Additional CSS classes |
| `children` | `ReactNode` | **Required** | Button elements |

---

## Success Criteria ✅

- ✅ Modern, professional design with gradients
- ✅ Consistent across all button types
- ✅ Responsive and mobile-friendly (44px+ touch targets)
- ✅ Accessible (ARIA, keyboard navigation, focus states)
- ✅ Smooth interactions and animations
- ✅ Loading and disabled states
- ✅ Analytics tracking integration
- ✅ Well-documented with examples
- ✅ Backward compatible with CSS classes
- ✅ Icon button support
- ✅ Button group component

---

## Files Modified

1. **Created**: `/src/components/Button.jsx` - Main Button component
2. **Updated**: `/src/components/TrackedCTA.jsx` - Now wraps Button
3. **Updated**: `/src/components/Header.jsx` - Uses new Button
4. **Updated**: `/src/styles/globals.css` - Updated CSS classes

---

## Next Steps

To use the new button system throughout the site:

1. **Import the component**:
   ```jsx
   import Button from '@/components/Button'
   ```

2. **Replace old button markup**:
   ```jsx
   // Before
   <a className="btn-primary" href="/start">Get Started</a>

   // After
   <Button variant="primary" href="/start">Get Started</Button>
   ```

3. **Add analytics tracking**:
   ```jsx
   <Button location="component-name-action">Text</Button>
   ```

4. **Use loading states for forms**:
   ```jsx
   <Button loading={isSubmitting}>Submit</Button>
   ```

---

## Support

For questions or issues with the button system:
- Review this documentation
- Check `/src/components/Button.jsx` for implementation details
- See the Header component for real-world examples
