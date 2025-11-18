# Task 11: Pricing Psychology Optimization

## Objective
Optimize pricing page using psychological principles: anchor pricing, show savings prominently, payment plans, and risk reversal.

## Working Directory
/Users/lsd/msclaude/projects/1-1/diy-solar-consultants

## Pricing Psychology Principles

1. **Anchor Pricing** - Show what customers would pay elsewhere
2. **Decoy Effect** - Make middle option most attractive
3. **Price Framing** - "$99/month" vs "$1,188/year"
4. **Charm Pricing** - $1,299 instead of $1,300
5. **Value Stacking** - Show everything included
6. **Social Proof** - "Most popular" badges
7. **Scarcity** - Limited spots, time-sensitive
8. **Risk Reversal** - Money-back guarantee

## Optimized Pricing Page

```jsx
// src/pages/pricing.jsx
export default function PricingPage() {
  return (
    <>
      <Head>
        <title>Transparent Solar Consulting Pricing | DIY Solar Consultants</title>
      </Head>

      {/* Hero */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Transparent Pricing. Huge Savings.
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Get expert solar consulting for a fraction of what traditional installers charge
          </p>
          
          {/* Savings calculator */}
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <p className="text-gray-600 mb-2">Traditional Installer</p>
                <p className="text-4xl font-bold text-gray-400 line-through">$28,500</p>
              </div>
              <div>
                <p className="text-gray-600 mb-2">With DIY Solar Consultants</p>
                <p className="text-4xl font-bold text-green-600">$12,200</p>
              </div>
            </div>
            <div className="bg-green-50 border-2 border-green-500 rounded-xl p-4">
              <p className="text-3xl font-bold text-green-700">Save $16,300</p>
              <p className="text-green-600">57% less than traditional solar</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Basic Tier */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Basic Design</h3>
                <p className="text-gray-600">Perfect for simple roofs</p>
              </div>
              
              {/* Price */}
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-2xl text-gray-400 line-through">$1,999</span>
                  <span className="bg-red-100 text-red-700 text-sm font-bold px-2 py-1 rounded">Save $500</span>
                </div>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold">$1,499</span>
                </div>
                <p className="text-gray-600 mt-2">One-time payment</p>
                <p className="text-sm text-gray-500">Or 3 payments of $533</p>
              </div>
              
              {/* Features */}
              <ul className="space-y-3 mb-8">
                {[
                  'System sizing & layout',
                  'Equipment recommendations',
                  'Basic electrical diagrams',
                  '30-minute consultation',
                  'Email support'
                ].map(feature => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className="w-full py-3 border-2 border-solar-600 text-solar-600 font-bold rounded-lg hover:bg-solar-50 transition-colors">
                Get Started
              </button>
            </div>

            {/* Professional Tier - MOST POPULAR */}
            <div className="bg-gradient-to-br from-solar-600 to-energy-600 text-white rounded-2xl p-8 relative transform md:scale-105 shadow-2xl">
              {/* Popular Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 font-bold px-6 py-2 rounded-full text-sm">
                ⭐ MOST POPULAR
              </div>
              
              <div className="text-center mb-6 mt-4">
                <h3 className="text-2xl font-bold mb-2">Professional Design</h3>
                <p className="text-white/90">Complete DIY solution</p>
              </div>
              
              {/* Price */}
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-2xl text-white/60 line-through">$3,499</span>
                  <span className="bg-yellow-400 text-yellow-900 text-sm font-bold px-2 py-1 rounded">Save $1,200</span>
                </div>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold">$2,299</span>
                </div>
                <p className="text-white/90 mt-2">One-time payment</p>
                <p className="text-sm text-white/70">Or 4 payments of $599</p>
                <p className="text-xs text-white/60 mt-1">Saves you $15K+ vs installers</p>
              </div>
              
              {/* Features */}
              <ul className="space-y-3 mb-8">
                {[
                  'Everything in Basic, plus:',
                  'Engineered stamped drawings',
                  'Permit-ready plans',
                  'Equipment sourcing assistance',
                  '2 hour consultation call',
                  'Installation guidance',
                  '90-day email & phone support',
                  'Permit application help'
                ].map(feature => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span className={feature.includes('Everything') ? 'font-semibold' : ''}>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className="w-full py-3 bg-white text-solar-600 font-bold rounded-lg hover:bg-gray-100 transition-colors">
                Get Started - Best Value
              </button>
              
              {/* Guarantee */}
              <div className="mt-6 pt-6 border-t border-white/20 text-center">
                <p className="text-sm text-white/90 flex items-center justify-center gap-2">
                  <Shield className="w-4 h-4" />
                  30-Day Money-Back Guarantee
                </p>
              </div>
            </div>

            {/* Premium Tier */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Premium + Support</h3>
                <p className="text-gray-600">White-glove service</p>
              </div>
              
              {/* Price */}
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-2xl text-gray-400 line-through">$4,999</span>
                  <span className="bg-red-100 text-red-700 text-sm font-bold px-2 py-1 rounded">Save $1,500</span>
                </div>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold">$3,499</span>
                </div>
                <p className="text-gray-600 mt-2">One-time payment</p>
                <p className="text-sm text-gray-500">Or 6 payments of $599</p>
              </div>
              
              {/* Features */}
              <ul className="space-y-3 mb-8">
                {[
                  'Everything in Professional, plus:',
                  'On-site consultation visit',
                  'Real-time installation support',
                  'Video call assistance',
                  'Troubleshooting help',
                  '1-year extended support',
                  'Priority response (< 4 hours)'
                ].map(feature => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className={feature.includes('Everything') ? 'font-semibold text-gray-900' : 'text-gray-700'}>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className="w-full py-3 border-2 border-solar-600 text-solar-600 font-bold rounded-lg hover:bg-solar-50 transition-colors">
                Get Started
              </button>
            </div>
          </div>

          {/* Value Stack Section */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 border-2 border-blue-200">
              <h3 className="text-2xl font-bold text-center mb-8">Everything You Get (Total Value: $8,500)</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { item: 'Custom Solar System Design', value: '$2,500' },
                  { item: 'Engineered Stamped Drawings', value: '$1,200' },
                  { item: 'Permit-Ready Plans', value: '$800' },
                  { item: 'Equipment Sourcing Guide', value: '$500' },
                  { item: 'Installation Training Videos', value: '$400' },
                  { item: 'Expert Consultation (2 hrs)', value: '$600' },
                  { item: '90-Day Support Package', value: '$1,500' },
                  { item: 'Lifetime Access to Resources', value: '$1,000' }
                ].map(({ item, value }) => (
                  <div key={item} className="flex justify-between items-center bg-white rounded-lg p-4">
                    <span className="font-medium text-gray-900">{item}</span>
                    <span className="text-solar-600 font-bold">{value}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t-2 border-blue-300 flex justify-between items-center">
                <span className="text-xl font-bold">Your Investment:</span>
                <div className="text-right">
                  <p className="text-3xl font-bold text-green-600">Only $2,299</p>
                  <p className="text-sm text-gray-600">Save $6,201 (73% off)</p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ - Address Objections */}
          <div className="mt-16 max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-8">Common Questions</h3>
            {/* Add FAQ accordion */}
          </div>

          {/* Final CTA with Scarcity */}
          <div className="mt-16 bg-gradient-to-r from-solar-600 to-energy-600 text-white rounded-2xl p-12 text-center max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Ready to Save $15,000+?</h3>
            <p className="text-xl mb-6 text-white/90">
              Join 127 homeowners who started their solar journey this month
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <button className="px-8 py-4 bg-white text-solar-600 font-bold rounded-lg hover:bg-gray-100 text-lg">
                Get Started Now
              </button>
              <a href="tel:+18005551234" className="px-8 py-4 bg-transparent border-2 border-white font-bold rounded-lg hover:bg-white/10 text-lg">
                Call (800) 555-1234
              </a>
            </div>
            <div className="flex items-center justify-center gap-2 text-white/90">
              <Shield className="w-5 h-5" />
              <span>Protected by 30-Day Money-Back Guarantee</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
```

## Pricing Table Enhancements

**Add these psychological elements:**

1. **Comparison to Traditional** - Always show what they'd pay elsewhere
2. **Savings Highlight** - Make green savings boxes prominent
3. **Payment Plans** - Reduce sticker shock
4. **Most Popular Badge** - Social proof nudge
5. **Urgency** - "X people started this month"
6. **Risk Reversal** - Money-back guarantee
7. **Value Stacking** - Show total value vs. price

## Files to Update
- `/src/pages/pricing.jsx` - Complete redesign
- `/src/components/PricingCard.jsx` - Update with psychology
- `/src/components/PricingComparison.jsx` - Create comparison table

## Success Criteria
✅ Anchor pricing prominently displayed
✅ Middle tier highlighted as "most popular"
✅ Payment plans offered
✅ Money-back guarantee visible
✅ Value stack shows total worth
✅ Savings calculations prominent
✅ Social proof elements included
