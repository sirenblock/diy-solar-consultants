# Task 03: Strategic CTA Placement & Optimization

## Objective
Place high-converting CTAs strategically throughout the site to maximize lead generation at every opportunity.

## Working Directory
/Users/lsd/msclaude/projects/1-1/diy-solar-consultants

## CTA Strategy

### Hierarchy of CTAs
1. **Primary CTA**: "Get Free Design" - Main conversion goal
2. **Secondary CTA**: "Calculate Savings" - Low-friction entry point
3. **Tertiary CTA**: "Learn More", "View Portfolio" - Nurture leads

### CTA Placement Rule
**Every 300-500px of scrolling should have a clear CTA**

## CTA Button Design System

```jsx
// src/components/CTA.jsx
import { ArrowRight, Calculator, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

export function PrimaryCTA({ children, href, onClick, icon: Icon = ArrowRight }) {
  return (
    <Link 
      href={href || '/design-request'}
      onClick={onClick}
      className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-solar-600 to-energy-600 text-white font-semibold rounded-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 text-lg"
    >
      {children}
      <Icon className="w-5 h-5" />
    </Link>
  );
}

export function SecondaryCTA({ children, href, onClick, icon: Icon = Calculator }) {
  return (
    <Link
      href={href || '/calculator'}
      onClick={onClick}
      className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-solar-600 text-solar-600 font-semibold rounded-lg hover:bg-solar-50 transition-all duration-200 text-lg"
    >
      {children}
      <Icon className="w-5 h-5" />
    </Link>
  );
}

export function TertiaryCTA({ children, href, icon: Icon }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 text-solar-600 hover:text-solar-700 font-medium underline underline-offset-4"
    >
      {children}
      {Icon && <Icon className="w-4 h-4" />}
    </Link>
  );
}
```

## Strategic CTA Placements

### 1. Hero Section (Every Page)
```jsx
<div className="flex flex-col sm:flex-row gap-4">
  <PrimaryCTA>Get Free Custom Design</PrimaryCTA>
  <SecondaryCTA>Calculate My Savings</SecondaryCTA>
</div>
```

### 2. After Value Proposition Section
```jsx
<section className="bg-gray-50 py-16">
  {/* Content about benefits */}
  <div className="text-center mt-8">
    <PrimaryCTA>Start Your Solar Journey</PrimaryCTA>
  </div>
</section>
```

### 3. After Social Proof
```jsx
<section className="py-16">
  {/* Testimonials */}
  <div className="text-center mt-12">
    <h3 className="text-2xl font-bold mb-4">Ready to Join Them?</h3>
    <PrimaryCTA>Get Your Free Design</PrimaryCTA>
  </div>
</section>
```

### 4. Sticky Bottom CTA Bar (Mobile)
```jsx
// Update StickyCTABar.jsx
<div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-solar-600 shadow-lg p-4 z-40 md:hidden">
  <div className="flex gap-2">
    <a href="tel:+18005551234" className="flex-1 btn-secondary">
      <Phone className="w-5 h-5" />
      Call Now
    </a>
    <Link href="/design-request" className="flex-1 btn-primary">
      Free Design
      <ArrowRight className="w-5 h-5" />
    </Link>
  </div>
</div>
```

### 5. Exit-Intent Popup
```jsx
// src/components/ExitIntentPopup.jsx
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export function ExitIntentPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0 && !sessionStorage.getItem('exitIntentShown')) {
        setShow(true);
        sessionStorage.setItem('exitIntentShown', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-8 relative">
        <button 
          onClick={() => setShow(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>
        
        <h3 className="text-3xl font-bold mb-4">Wait! Before You Go...</h3>
        <p className="text-lg text-gray-600 mb-6">
          Get our FREE Solar Savings Calculator and see how much you could save!
        </p>
        
        <PrimaryCTA href="/calculator">
          Get My Free Calculator
        </PrimaryCTA>
        
        <p className="text-sm text-gray-500 mt-4">
          No credit card required. Instant results.
        </p>
      </div>
    </div>
  );
}
```

### 6. In-Content CTAs
Place contextual CTAs within content:

```jsx
<div className="bg-gradient-to-r from-solar-50 to-energy-50 rounded-xl p-8 my-12 border-l-4 border-solar-600">
  <h4 className="text-xl font-bold mb-2">Ready to See Your Savings?</h4>
  <p className="text-gray-600 mb-4">Get a custom solar design tailored to your home.</p>
  <PrimaryCTA>Get Free Design Now</PrimaryCTA>
</div>
```

### 7. End of Page CTA
Every page should end with a strong CTA section:

```jsx
<section className="bg-gradient-to-br from-solar-600 to-energy-600 text-white py-20">
  <div className="max-w-4xl mx-auto text-center px-4">
    <h2 className="text-4xl font-bold mb-4">Ready to Start Saving?</h2>
    <p className="text-xl mb-8 text-white/90">
      Join 10,000+ homeowners who've gone solar with our expert guidance
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <button className="px-8 py-4 bg-white text-solar-600 font-bold rounded-lg hover:shadow-xl transition-all text-lg">
        Get Free Design
      </button>
      <a href="tel:+18005551234" className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all text-lg">
        Call (800) 555-1234
      </a>
    </div>
  </div>
</section>
```

## CTA Copy Best Practices

### Do's:
- ✅ "Get Your Free Design" (benefit + action)
- ✅ "Calculate My Savings" (personalized)
- ✅ "Start Saving Today" (urgency)
- ✅ "Yes, I Want to Save Money!" (commitment)

### Don'ts:
- ❌ "Submit" (vague)
- ❌ "Click Here" (no benefit)
- ❌ "Learn More" (as primary CTA)
- ❌ "Contact Us" (generic)

## Files to Update
- `/src/components/CTA.jsx` - Create CTA component
- `/src/components/ExitIntentPopup.jsx` - Create exit intent
- `/src/components/StickyCTABar.jsx` - Update mobile CTA
- `/src/pages/index.jsx` - Add multiple CTAs
- All other page files - Strategic CTA placement

## Success Criteria
✅ Primary CTA every 300-500px scroll
✅ Mobile sticky CTA bar on all pages
✅ Exit-intent popup on key pages
✅ Consistent CTA design system
✅ Action-oriented CTA copy
✅ Clear visual hierarchy of CTAs

## Analytics to Track
- CTA click-through rates by placement
- CTA conversion rates by type
- Exit-intent popup conversion rate
- Mobile vs. desktop CTA performance
