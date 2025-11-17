# Animation System Documentation

This directory contains all animation components and utilities for the DIY Solar Consultants website, built with **Framer Motion**.

## Features

- Modern, professional scroll animations
- Subtle hover micro-interactions
- Smooth page transitions
- Loading states (spinners & skeletons)
- Accessibility support (respects `prefers-reduced-motion`)
- Fully responsive

## Components

### Scroll Animations

#### `<FadeIn>`
Fades in content on scroll with optional Y-offset.

```jsx
import { FadeIn } from '@/components/animations';

<FadeIn delay={0.2} duration={0.5} y={20}>
  <h2>Your Content</h2>
</FadeIn>
```

**Props:**
- `delay` (number): Animation delay in seconds (default: 0)
- `duration` (number): Animation duration in seconds (default: 0.5)
- `y` (number): Y offset for slide animation (default: 20)
- `className` (string): Additional CSS classes

#### `<FadeInScale>`
Fades in with scale effect.

```jsx
<FadeInScale delay={0.1}>
  <div>Your Content</div>
</FadeInScale>
```

#### `<StaggerChildren>`
Animates children with stagger effect.

```jsx
<StaggerChildren staggerDelay={0.1} className="grid grid-cols-3 gap-4">
  <Card>Item 1</Card>
  <Card>Item 2</Card>
  <Card>Item 3</Card>
</StaggerChildren>
```

**Props:**
- `staggerDelay` (number): Delay between each child (default: 0.1)
- `className` (string): Additional CSS classes

### Hover Micro-interactions

#### `<ScaleOnHover>`
Scales element on hover.

```jsx
<ScaleOnHover scale={1.05}>
  <div>Hover me!</div>
</ScaleOnHover>
```

#### `<LiftOnHover>`
Lifts element on hover (Y-axis).

```jsx
<LiftOnHover>
  <Card>Hover to lift</Card>
</LiftOnHover>
```

#### `<ButtonPress>`
Button with press effect.

```jsx
<ButtonPress onClick={handleClick} className="btn-primary">
  Click Me
</ButtonPress>
```

### Buttons

#### `<AnimatedButton>`
Button component with micro-interactions.

```jsx
import { AnimatedButton } from '@/components/animations';

<AnimatedButton
  variant="primary"
  size="lg"
  onClick={handleClick}
>
  Get Started
</AnimatedButton>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'outline'
- `size`: 'sm' | 'md' | 'lg'
- `onClick`: Click handler
- `disabled`: Boolean
- `className`: Additional CSS classes

#### `<AnimatedLink>`
Next.js Link with micro-interactions.

```jsx
<AnimatedLink href="/pricing" variant="primary" size="md">
  View Pricing
</AnimatedLink>
```

#### `<AnimatedIconButton>`
Icon button with rotation on hover.

```jsx
<AnimatedIconButton onClick={handleClick} ariaLabel="Menu">
  <MenuIcon />
</AnimatedIconButton>
```

### Page Transitions

#### `<PageTransition>`
Wraps page content for smooth transitions.

```jsx
// In _app.jsx
import { PageTransition } from '@/components/animations';

<PageTransition>
  <Component {...pageProps} />
</PageTransition>
```

### Loading States

#### `<LoadingSpinner>`
Animated circular spinner.

```jsx
<LoadingSpinner size="md" color="text-green-600" />
```

**Props:**
- `size`: 'sm' | 'md' | 'lg'
- `color`: Tailwind color class

#### `<LoadingDots>`
Three dots loading animation.

```jsx
<LoadingDots color="bg-green-600" />
```

#### `<LoadingPulse>`
Pulsing circle animation.

```jsx
<LoadingPulse color="bg-green-600" />
```

#### `<LoadingSkeleton>`
Skeleton loading screen with shimmer effect.

```jsx
<LoadingSkeleton variant="card" />
<LoadingSkeleton variant="text" lines={3} />
<LoadingSkeleton variant="circle" />
```

**Props:**
- `variant`: 'text' | 'card' | 'circle'
- `lines`: Number of lines for text variant
- `className`: Additional CSS classes

#### `<CardSkeleton>`
Pre-built card skeleton.

```jsx
<CardSkeleton count={3} />
```

## Hooks

### `useReducedMotion()`
Detects if user prefers reduced motion.

```jsx
import { useReducedMotion } from '@/components/animations';

function MyComponent() {
  const shouldReduceMotion = useReducedMotion();

  return shouldReduceMotion ? (
    <div>Static content</div>
  ) : (
    <motion.div animate={{ scale: 1.1 }}>
      Animated content
    </motion.div>
  );
}
```

## Accessibility

All animations respect the `prefers-reduced-motion` media query. When a user has this preference enabled:
- Scroll animations are disabled
- Hover micro-interactions are disabled
- Page transitions are disabled
- Loading animations remain (essential for UX)

## Best Practices

1. **Use scroll animations sparingly** - Only for key sections
2. **Keep animations subtle** - Avoid distracting users
3. **Respect reduced motion** - Always use `useReducedMotion` hook
4. **Optimize performance** - Use `whileInView` with `viewport={{ once: true }}`
5. **Test on mobile** - Ensure smooth 60fps animations

## Examples

### Homepage Hero Section
```jsx
<FadeIn>
  <h1>Professional Solar Design</h1>
</FadeIn>
<FadeInScale delay={0.2}>
  <p>Save 40-60% on installation</p>
</FadeInScale>
```

### Services Grid
```jsx
<StaggerChildren className="grid grid-cols-3 gap-6" staggerDelay={0.08}>
  {services.map((service) => (
    <ServiceCard key={service.id} {...service} />
  ))}
</StaggerChildren>
```

### Interactive Card
```jsx
<LiftOnHover>
  <Card>
    <h3>Pricing Plan</h3>
    <AnimatedButton variant="primary">
      Get Started
    </AnimatedButton>
  </Card>
</LiftOnHover>
```

### Loading State
```jsx
{isLoading ? (
  <CardSkeleton count={3} />
) : (
  <div>{content}</div>
)}
```

## Tailwind Animations

The following Tailwind animations are available:
- `animate-fade-in` - Fade in with Y-offset
- `animate-scale-in` - Scale in with fade
- `animate-slide-up` - Slide up with fade
- `animate-shimmer` - Shimmer effect for skeletons
- `animate-pulse-slow` - Slow pulse animation

## Performance Tips

1. **Use `viewport={{ once: true }}`** - Animations trigger only once
2. **Lazy load off-screen content** - Don't animate until visible
3. **Avoid animating many elements** - Limit to 10-15 per viewport
4. **Use GPU-accelerated properties** - transform, opacity
5. **Test on low-end devices** - Ensure 60fps

## Browser Support

- Chrome/Edge 88+
- Firefox 85+
- Safari 14.1+
- Mobile browsers (iOS 14.5+, Android 88+)

## Dependencies

- `framer-motion` ^11.0.0
- `react` ^18.2.0
- `next` ^14.2.0
