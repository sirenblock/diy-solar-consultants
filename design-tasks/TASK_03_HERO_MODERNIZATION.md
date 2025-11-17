# Task 03: Hero Section Modernization

## Objective
Redesign all hero sections with modern, bold typography, better CTAs, and engaging visual elements.

## Requirements
1. **Large Typography**: 60-72px headings on desktop, 36-48px mobile
2. **Gradient Backgrounds**: Subtle gradients or solid with overlay
3. **Bold CTAs**: Primary + secondary button combination
4. **Stats Display**: Show 5,000+ systems, 98% approval inline
5. **Modern Spacing**: More whitespace, better breathing room
6. **Micro-animations**: Subtle fade-in on page load

## Hero Code Example
```jsx
<section className="relative pt-32 pb-20 px-4 bg-gradient-to-br from-gray-50 via-white to-solar-50 overflow-hidden">
  <div className="absolute inset-0 bg-grid-pattern opacity-5" />
  <div className="relative max-w-6xl mx-auto text-center">
    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-solar-700 to-energy-700 bg-clip-text text-transparent leading-tight">
      Professional Solar Design<br />for DIY Homeowners
    </h1>
    <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
      Licensed PE engineers help you save 40-60% on solar installation. Get your custom design in 5-7 days.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
      <Link href="/design-request" className="px-8 py-4 bg-gradient-to-r from-solar-600 to-energy-600 text-white rounded-xl font-bold text-lg shadow-2xl shadow-solar-600/30 hover:shadow-solar-600/50 hover:-translate-y-1 transition-all">
        Get Free Quote →
      </Link>
      <Link href="/calculator" className="px-8 py-4 bg-white border-2 border-gray-300 text-gray-800 rounded-xl font-bold text-lg hover:border-solar-600 hover:text-solar-600 transition-all">
        Calculate Savings
      </Link>
    </div>
    <div className="flex flex-wrap justify-center gap-8 text-sm">
      <div className="flex items-center gap-2"><svg className="w-5 h-5 text-green-600">...</svg> 5,000+ Systems Designed</div>
      <div className="flex items-center gap-2"><svg className="w-5 h-5 text-green-600">...</svg> 98% Approval Rate</div>
      <div className="flex items-center gap-2"><svg className="w-5 h-5 text-green-600">...</svg> Licensed in 50 States</div>
    </div>
  </div>
</section>
```

## Success Criteria
- ✅ Bold, modern typography
- ✅ Gradient text effects
- ✅ Clear CTA hierarchy
- ✅ Trust signals visible
- ✅ Mobile optimized
