# CTA Integration Guide

## Strategic CTA Placement & Optimization

This guide shows how to integrate the new CTA component system into your pages for maximum conversion.

## Rule of Thumb
**Place a CTA every 300-500px of scrolling** to maximize lead generation opportunities.

---

## CTA Components Available

### 1. PrimaryCTA
Main conversion driver - use for "Get Free Design", "Get Free Quote"

```jsx
import { PrimaryCTA } from '@/components/CTA';

<PrimaryCTA location="hero-section">
  Get Free Custom Design
</PrimaryCTA>
```

### 2. SecondaryCTA
Low-friction entry point - use for "Calculate Savings", "See Pricing"

```jsx
import { SecondaryCTA } from '@/components/CTA';

<SecondaryCTA location="hero-section">
  Calculate My Savings
</SecondaryCTA>
```

### 3. InContentCTA
Full-width CTA blocks for placement within content sections

```jsx
import { InContentCTA } from '@/components/CTA';

<InContentCTA
  variant="default" // or 'highlighted', 'subtle', 'urgent'
  title="Ready to Get Started?"
  description="Get your custom solar design from licensed PE engineers"
  primaryCTA={<PrimaryCTA location="after-value-props">Get Free Design</PrimaryCTA>}
  secondaryCTA={<SecondaryCTA>Calculate Savings</SecondaryCTA>}
  showTrustSignals={true}
/>
```

### 4. EndOfPageCTA
Large, prominent section for end of each page

```jsx
import { EndOfPageCTA } from '@/components/CTA';

<EndOfPageCTA
  title="Ready to Start Saving?"
  description="Join 10,000+ homeowners who've gone solar with our expert guidance"
/>
```

---

## Homepage Integration Example

Here's how to add strategic CTAs to `src/pages/index.jsx`:

### Step 1: Add Imports

```jsx
import { PrimaryCTA, SecondaryCTA, InContentCTA, EndOfPageCTA } from '@/components/CTA';
```

### Step 2: Update Hero CTAs (Optional - enhance existing)

```jsx
{/* CTA Buttons in Hero */}
<div className="flex flex-col sm:flex-row gap-4 mb-8">
  <PrimaryCTA location="hero-section">
    Get Free Custom Design
  </PrimaryCTA>
  <SecondaryCTA location="hero-section">
    Calculate My Savings
  </SecondaryCTA>
</div>
```

### Step 3: Add CTA After Value Propositions

After the "Why DIY Solar Consultants?" section (around line 533):

```jsx
{/* Value Propositions Section */}
<section className="section-container bg-gray-50">
  {/* ... existing value props content ... */}
</section>

{/* CTA #1: After Value Propositions */}
<section className="section-container bg-white">
  <InContentCTA
    variant="default"
    title="See How Much You Can Save"
    description="Get a professional solar design tailored to your home and energy needs"
    primaryCTA={<PrimaryCTA location="after-value-props">Get Free Design</PrimaryCTA>}
    secondaryCTA={<SecondaryCTA location="after-value-props">Calculate Savings</SecondaryCTA>}
  />
</section>
```

### Step 4: Add CTA After Services Section

After the services grid (around line 606):

```jsx
{/* Services Overview Grid */}
<section className="section-container bg-gray-50">
  {/* ... existing services content ... */}
</section>

{/* CTA #2: After Services */}
<section className="section-container bg-white">
  <InContentCTA
    variant="highlighted"
    title="Ready to Start Your Solar Project?"
    description="Our licensed PE engineers will design your perfect system in 5-7 days"
    primaryCTA={<PrimaryCTA location="after-services">Get Started Now</PrimaryCTA>}
    secondaryCTA={<SecondaryCTA location="after-services">See Pricing</SecondaryCTA>}
  />
</section>
```

### Step 5: Add CTA After Testimonials

After the social proof section (around line 669):

```jsx
{/* Social Proof Section */}
<section className="section-container bg-gradient-to-br from-gray-50 to-gray-100">
  {/* ... existing testimonials content ... */}
</section>

{/* CTA #3: After Social Proof */}
<section className="section-container bg-white">
  <InContentCTA
    variant="subtle"
    title="Join Thousands of Happy Customers"
    description="Get your custom solar design and start saving like they did"
    primaryCTA={<PrimaryCTA location="after-testimonials">Get Free Design</PrimaryCTA>}
  />
</section>
```

### Step 6: Replace End CTA Section

Replace the existing end CTA section (around line 678-749) with:

```jsx
{/* Call-to-Action Section */}
<EndOfPageCTA
  title="Ready to Start Saving?"
  description="Join 10,000+ homeowners who've gone solar with our expert guidance"
/>
```

---

## Services Page Integration

For `src/pages/services.jsx`:

```jsx
import { InContentCTA, EndOfPageCTA } from '@/components/CTA';

// After each major service description:
<InContentCTA
  variant="default"
  title="Interested in This Service?"
  description="Get a custom quote and see how we can help with your solar project"
  primaryCTA={<PrimaryCTA location="services-solar-design">Get Free Quote</PrimaryCTA>}
/>

// At end of page:
<EndOfPageCTA />
```

---

## Pricing Page Integration

For `src/pages/pricing.jsx`:

```jsx
import { InContentCTA, EndOfPageCTA } from '@/components/CTA';

// After pricing tiers:
<InContentCTA
  variant="highlighted"
  title="Ready to Get Started?"
  description="Choose your package and get your solar design in 5-7 days"
  primaryCTA={<PrimaryCTA location="pricing-after-tiers">Select Package</PrimaryCTA>}
/>

// At end of page:
<EndOfPageCTA
  title="Questions About Pricing?"
  description="Contact us for a custom quote tailored to your specific needs"
/>
```

---

## Portfolio Page Integration

For `src/pages/portfolio.jsx`:

```jsx
// After every 2-3 case studies:
<InContentCTA
  variant="subtle"
  title="Want Results Like These?"
  description="Get your custom solar design from the same engineers"
  primaryCTA={<PrimaryCTA location="portfolio-mid">Get Free Design</PrimaryCTA>}
  compact={true}
/>
```

---

## CTA Placement Checklist

✅ **Hero Section**: Primary + Secondary CTA
✅ **After Value Proposition**: InContentCTA (default variant)
✅ **After Services/Features**: InContentCTA (highlighted variant)
✅ **After Social Proof**: InContentCTA (subtle variant)
✅ **Before Footer**: EndOfPageCTA
✅ **Sticky Bar**: StickyCTABar (already implemented)
✅ **Exit Intent**: ExitIntentPopup (already implemented)

---

## CTA Copy Best Practices

### Good Examples:
- ✅ "Get Your Free Design" (benefit + action)
- ✅ "Calculate My Savings" (personalized)
- ✅ "Start Saving Today" (urgency)
- ✅ "Yes, I Want to Save Money!" (commitment)

### Avoid:
- ❌ "Submit" (vague)
- ❌ "Click Here" (no benefit)
- ❌ "Learn More" (weak primary CTA)
- ❌ "Contact Us" (generic)

---

## Analytics Tracking

All CTA components automatically track clicks with:
- CTA text
- Location identifier (e.g., "after-value-props")
- Destination URL

Monitor these metrics:
- CTA click-through rates by placement
- CTA conversion rates by type
- Exit-intent popup conversion rate
- Mobile vs. desktop CTA performance

---

## Variant Guide

### InContentCTA Variants:

**default** - Light background, good for mid-page CTAs
```jsx
<InContentCTA variant="default" />
```

**highlighted** - Bold gradient, use sparingly for high-priority CTAs
```jsx
<InContentCTA variant="highlighted" />
```

**subtle** - Minimal design, good after content-heavy sections
```jsx
<InContentCTA variant="subtle" />
```

**urgent** - Orange/red gradient, use for limited-time offers
```jsx
<InContentCTA variant="urgent" />
```

---

## Implementation Priority

1. **Homepage** (highest traffic) - Add all strategic CTAs
2. **Pricing Page** (high intent) - Add CTAs after tiers
3. **Services Page** (info gathering) - Add CTAs between services
4. **Portfolio Page** (social proof) - Add CTAs between case studies
5. **Blog Posts** (long-form) - Add CTAs every 500-800px

---

## Testing Recommendations

1. A/B test CTA copy variations
2. Test CTA placement (above vs. below fold)
3. Test variant styles (default vs. highlighted)
4. Monitor scroll depth vs. CTA engagement
5. Track mobile vs. desktop performance

---

## Need Help?

Refer to `src/components/CTA.jsx` for full component documentation and props.
