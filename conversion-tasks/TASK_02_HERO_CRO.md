# Task 02: Hero Section Conversion Optimization

## Objective
Optimize all hero sections for maximum conversions with clear value propositions, compelling headlines, and prominent CTAs above the fold.

## Working Directory
/Users/lsd/msclaude/projects/1-1/diy-solar-consultants

## Hero Section Formula
**Headline** (40-60 characters): Clear benefit-focused statement
**Subheadline** (100-150 characters): Expand on the benefit, address pain point
**CTA Button** (2-4 words): Action-oriented, contrasting color, 56px min height
**Visual Element**: Image/illustration supporting the message
**Trust Signal**: Below CTA (e.g., "Join 10,000+ homeowners")

## Homepage Hero Optimization

```jsx
<section className="relative bg-gradient-to-br from-blue-50 to-green-50 pt-20 pb-24 md:pt-28 md:pb-32">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Left: Copy */}
      <div>
        {/* Headline - Benefit-focused */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
          Save $2,000+ Per Year on
          <span className="bg-gradient-to-r from-solar-600 to-energy-600 bg-clip-text text-transparent"> Electricity</span>
        </h1>
        
        {/* Subheadline - Address objection/pain point */}
        <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
          Get expert DIY solar guidance without the $15K installation markup. 
          We design it, you save thousands.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Button 
            size="lg" 
            variant="primary"
            className="text-lg px-8 py-4 h-14"
            href="/design-request"
          >
            Get Free Custom Design
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button 
            size="lg" 
            variant="secondary"
            className="text-lg px-8 py-4 h-14"
            href="/calculator"
          >
            Calculate My Savings
          </Button>
        </div>
        
        {/* Trust Signals */}
        <div className="flex items-center gap-6 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-600" />
            <span>10,000+ Happy Customers</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            <span>4.9/5 Rating</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-blue-600" />
            <span>Licensed in 50 States</span>
          </div>
        </div>
      </div>
      
      {/* Right: Visual */}
      <div className="relative">
        <Image 
          src="/images/hero-solar-home.jpg" 
          alt="Beautiful home with solar panels"
          width={600}
          height={500}
          className="rounded-2xl shadow-2xl"
        />
        {/* Floating stat cards */}
        <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
          <p className="text-3xl font-bold text-green-600">$2,341</p>
          <p className="text-sm text-gray-600">Avg. Annual Savings</p>
        </div>
      </div>
    </div>
  </div>
</section>
```

## Other Page Heroes to Optimize

### Calculator Page
- Headline: "Calculate Your Exact Solar Savings in 60 Seconds"
- Subheadline: "Get a personalized estimate based on your actual electric bill"
- CTA: Already the calculator, add "Get Custom Design" at bottom

### Pricing Page
- Headline: "Transparent DIY Solar Pricing - No Hidden Fees"
- Subheadline: "Professional solar consulting for a fraction of installation costs"
- CTA: "Get Free Quote"

### Contact Page
- Headline: "Let's Design Your Perfect Solar System"
- Subheadline: "Free consultation with licensed solar experts"
- CTA: Form is the main CTA

### Services Page
- Headline: "Expert Solar Guidance at Every Step"
- Subheadline: "From system design to permitting, we've got you covered"
- CTA: "Start Your Solar Journey"

## Key Optimization Principles

1. **Above the Fold**: CTA must be visible without scrolling
2. **Benefit-Driven**: Focus on outcomes (save money, save planet) not features
3. **Urgency**: Add time-sensitive elements where appropriate
4. **Mobile-First**: Test all heroes on mobile devices
5. **Visual Hierarchy**: Headline → Subheadline → CTA → Trust signals
6. **Contrasting CTA**: Button must stand out visually
7. **Whitespace**: Don't crowd the hero

## A/B Testing Ideas
- Test different headlines (savings-focused vs. planet-focused)
- Test CTA copy ("Get Free Design" vs. "Start Saving Today")
- Test with/without trust signals
- Test image vs. illustration

## Files to Update
- `/src/pages/index.jsx` - Homepage hero
- `/src/pages/calculator.jsx` - Calculator hero
- `/src/pages/pricing.jsx` - Pricing hero
- `/src/pages/contact.jsx` - Contact hero
- `/src/pages/services.jsx` - Services hero
- `/src/pages/about.jsx` - About hero

## Success Criteria
✅ Every hero has clear benefit-focused headline
✅ CTA visible above the fold on all devices
✅ Trust signals prominently displayed
✅ Mobile-optimized with proper spacing
✅ Visually distinct from rest of page
✅ Clear visual hierarchy

## Metrics to Track
- Click-through rate on hero CTAs
- Scroll depth past hero
- Time spent on page
- Bounce rate improvement
