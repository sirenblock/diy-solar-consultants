# Animation Examples - Quick Reference

## Common Use Cases

### 1. Hero Section

```jsx
import { FadeIn, FadeInScale } from '@/components/animations';

<section className="hero">
  <FadeIn>
    <h1>Professional Solar Design</h1>
  </FadeIn>

  <FadeIn delay={0.2} y={30}>
    <p>Save 40-60% on installation costs</p>
  </FadeIn>

  <FadeInScale delay={0.4}>
    <div className="cta-buttons">
      <AnimatedButton variant="primary">Get Started</AnimatedButton>
      <AnimatedButton variant="outline">Learn More</AnimatedButton>
    </div>
  </FadeInScale>
</section>
```

### 2. Feature Grid

```jsx
import { StaggerChildren } from '@/components/animations';

<StaggerChildren className="grid grid-cols-3 gap-6" staggerDelay={0.1}>
  {features.map((feature) => (
    <FeatureCard key={feature.id} {...feature} />
  ))}
</StaggerChildren>
```

### 3. Pricing Cards

```jsx
import { LiftOnHover, AnimatedButton } from '@/components/animations';

{packages.map((pkg) => (
  <LiftOnHover key={pkg.id}>
    <div className="pricing-card">
      <h3>{pkg.name}</h3>
      <div className="price">${pkg.price}</div>

      <AnimatedButton
        variant="primary"
        onClick={() => handleSelect(pkg)}
      >
        Get Started
      </AnimatedButton>
    </div>
  </LiftOnHover>
))}
```

### 4. Loading States

```jsx
import { LoadingSkeleton, LoadingSpinner } from '@/components/animations';

// Loading Cards
{isLoading ? (
  <div className="grid grid-cols-3 gap-4">
    {[1, 2, 3].map((i) => (
      <LoadingSkeleton key={i} variant="card" />
    ))}
  </div>
) : (
  <CardsGrid data={data} />
)}

// Loading Button
<AnimatedButton disabled={isSubmitting}>
  {isSubmitting ? (
    <>
      <LoadingSpinner size="sm" />
      <span className="ml-2">Submitting...</span>
    </>
  ) : (
    'Submit Form'
  )}
</AnimatedButton>
```

### 5. Interactive Cards

```jsx
import { ScaleOnHover, AnimatedLink } from '@/components/animations';

<ScaleOnHover scale={1.03}>
  <div className="service-card">
    <img src={service.image} alt={service.title} />
    <h3>{service.title}</h3>
    <p>{service.description}</p>

    <AnimatedLink href={service.link} variant="outline">
      Learn More →
    </AnimatedLink>
  </div>
</ScaleOnHover>
```

### 6. Testimonial Carousel

```jsx
import { FadeIn, AnimatedIconButton } from '@/components/animations';

<div className="testimonial-carousel">
  <AnimatedIconButton
    onClick={handlePrev}
    ariaLabel="Previous testimonial"
  >
    <ChevronLeft />
  </AnimatedIconButton>

  <FadeIn key={currentTestimonial.id}>
    <Testimonial {...currentTestimonial} />
  </FadeIn>

  <AnimatedIconButton
    onClick={handleNext}
    ariaLabel="Next testimonial"
  >
    <ChevronRight />
  </AnimatedIconButton>
</div>
```

### 7. FAQ Section

```jsx
import { FadeIn, StaggerChildren } from '@/components/animations';

<section className="faq-section">
  <FadeIn>
    <h2>Frequently Asked Questions</h2>
  </FadeIn>

  <StaggerChildren staggerDelay={0.05}>
    {faqs.map((faq) => (
      <Accordion key={faq.id} question={faq.question}>
        {faq.answer}
      </Accordion>
    ))}
  </StaggerChildren>
</section>
```

### 8. Stats Counter

```jsx
import { FadeInScale, StaggerChildren } from '@/components/animations';

<FadeInScale>
  <div className="stats-section">
    <StaggerChildren className="grid grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div key={stat.label} className="stat-card">
          <div className="stat-number">{stat.number}</div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </StaggerChildren>
  </div>
</FadeInScale>
```

### 9. Form with Validation

```jsx
import { FadeIn, AnimatedButton, LoadingDots } from '@/components/animations';

<form onSubmit={handleSubmit}>
  <FadeIn>
    <h2>Contact Us</h2>
  </FadeIn>

  <FadeIn delay={0.1}>
    <input type="text" placeholder="Name" />
  </FadeIn>

  <FadeIn delay={0.2}>
    <input type="email" placeholder="Email" />
  </FadeIn>

  <FadeIn delay={0.3}>
    <textarea placeholder="Message" />
  </FadeIn>

  <FadeIn delay={0.4}>
    <AnimatedButton type="submit" disabled={isSubmitting}>
      {isSubmitting ? (
        <>
          <LoadingDots />
          <span className="ml-2">Sending</span>
        </>
      ) : (
        'Send Message'
      )}
    </AnimatedButton>
  </FadeIn>
</form>
```

### 10. Navigation Menu

```jsx
import { AnimatedIconButton, FadeIn } from '@/components/animations';

const [isOpen, setIsOpen] = useState(false);

<nav>
  <AnimatedIconButton
    onClick={() => setIsOpen(!isOpen)}
    ariaLabel="Toggle menu"
  >
    <MenuIcon />
  </AnimatedIconButton>

  {isOpen && (
    <FadeIn>
      <div className="mobile-menu">
        {menuItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </div>
    </FadeIn>
  )}
</nav>
```

### 11. Modal/Dialog

```jsx
import { FadeIn, ScaleOnHover } from '@/components/animations';

{isModalOpen && (
  <div className="modal-overlay">
    <FadeIn>
      <div className="modal-content">
        <h2>Modal Title</h2>
        <p>Modal content goes here</p>

        <div className="modal-actions">
          <AnimatedButton
            variant="outline"
            onClick={handleCancel}
          >
            Cancel
          </AnimatedButton>
          <AnimatedButton
            variant="primary"
            onClick={handleConfirm}
          >
            Confirm
          </AnimatedButton>
        </div>
      </div>
    </FadeIn>
  </div>
)}
```

### 12. Success Message

```jsx
import { FadeInScale, AnimatedIconButton } from '@/components/animations';

{showSuccess && (
  <FadeInScale>
    <div className="success-message">
      <CheckCircle className="text-green-600" />
      <p>Your form has been submitted successfully!</p>

      <AnimatedIconButton
        onClick={() => setShowSuccess(false)}
        ariaLabel="Dismiss"
      >
        <X />
      </AnimatedIconButton>
    </div>
  </FadeInScale>
)}
```

## Performance Tips

### ✅ DO
- Use `viewport={{ once: true }}` for scroll animations
- Limit animations to 10-15 per viewport
- Use GPU-accelerated properties (transform, opacity)
- Wrap multiple children in StaggerChildren instead of animating individually

### ❌ DON'T
- Don't animate expensive properties (width, height, top, left)
- Don't create animations in render functions
- Don't skip the useReducedMotion hook
- Don't animate too many elements simultaneously

## Accessibility Checklist

- ✅ All animations use `useReducedMotion` hook
- ✅ Interactive elements have proper aria-labels
- ✅ Focus states are maintained
- ✅ Animations don't interfere with keyboard navigation
- ✅ Loading states provide screen reader feedback

## Debugging

### Animation not triggering?
1. Check if element is in viewport
2. Verify `viewport={{ once: true }}` hasn't already triggered
3. Check browser console for errors
4. Ensure Framer Motion is imported

### Performance issues?
1. Reduce number of simultaneous animations
2. Use `will-change: transform` CSS property
3. Check Chrome DevTools Performance tab
4. Simplify animation complexity

### Reduced motion not working?
1. Verify `useReducedMotion` hook is called
2. Check browser settings: System Preferences > Accessibility > Display > Reduce motion
3. Test in different browsers
