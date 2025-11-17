# Task 11: Local SEO Enhancement

## Objective
Create location-specific landing pages and optimize for local search to capture "solar design [city/state]" searches and improve local SEO rankings.

## Working Directory
/Users/lsd/msclaude/projects/1-1/diy-solar-consultants

## Requirements

### 1. Create State Landing Pages (Top 10 States)
Build dedicated pages for high-volume solar states:
- California (/solar-design-california)
- Texas (/solar-design-texas)
- Florida (/solar-design-florida)
- Arizona (/solar-design-arizona)
- Nevada (/solar-design-nevada)
- North Carolina (/solar-design-north-carolina)
- New York (/solar-design-new-york)
- Colorado (/solar-design-colorado)
- Massachusetts (/solar-design-massachusetts)
- New Jersey (/solar-design-new-jersey)

### 2. Add LocalBusiness Schema to State Pages
```json
{
  "@type": "LocalBusiness",
  "name": "DIY Solar Consultants - California",
  "areaServed": {
    "@type": "State",
    "name": "California"
  },
  "priceRange": "$$",
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {...}
  }
}
```

### 3. Create Location-Specific Content
Each state page should include:
- State-specific solar incentives and rebates
- Local permitting requirements
- Climate/weather considerations
- Regional electricity rates
- State-specific testimonials
- Local solar statistics
- Utility company information

### 4. Add Service Area Schema
Define geographic service coverage:
```json
{
  "serviceArea": [
    {
      "@type": "State",
      "name": "California"
    },
    {
      "@type": "State",
      "name": "All 50 US States"
    }
  ]
}
```

### 5. Create City-Level Content Sections
Within each state page, add sections for major cities:
- California: Los Angeles, San Diego, San Francisco, Sacramento
- Texas: Houston, Dallas, Austin, San Antonio
- Etc.

### 6. Optimize for Local Keywords
Target long-tail local keywords:
- "solar design services California"
- "DIY solar engineer Florida"
- "solar permit engineering Texas"
- "licensed PE solar design [state]"

### 7. Add Location-Based Testimonials
Show testimonials from specific regions:
- Group by state/region
- Include city in testimonial
- Add local success metrics
- Regional case studies

## Implementation Details

### State Page Template
```jsx
// /src/pages/states/[state].jsx
import { useRouter } from 'next/router';
import stateData from '@/data/stateInfo';

export default function StatePage({ state }) {
  return (
    <>
      <Head>
        <title>Solar Design Services in {state.name} | Licensed PE Engineers</title>
        <meta
          name="description"
          content={`Professional solar system design for {state.name} homeowners. Licensed PE, {state.name}-specific permitting, ${state.incentiveCount}+ incentives. Save 40-60%.`}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateLocalSchema(state)) }}
        />
      </Head>
      <Header />

      {/* Hero */}
      <section className="pt-20 bg-gradient-to-br from-solar-600 to-solar-800 text-white">
        <div className="section-container text-center">
          <h1 className="heading-xl mb-6">
            Solar Design Services in {state.name}
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Licensed Professional Engineers helping {state.name} homeowners go solar.
            {state.name}-specific permitting, local incentive guidance, and expert support.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/design-request" className="btn-primary bg-white text-solar-600">
              Get Your {state.name} Solar Design
            </Link>
            <Link href="#incentives" className="btn-secondary border-white text-white">
              View {state.name} Incentives
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us for [State] */}
      <section className="section-container">
        <h2 className="heading-lg text-center mb-12">
          Why {state.name} Homeowners Choose Us
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-3">
              {state.name} Permitting Experts
            </h3>
            <p>
              We understand {state.name}'s unique permitting requirements including {state.specialRequirement}.
              Our engineers are licensed in {state.name} and have completed {state.systemsDesigned}+ solar
              designs in the state.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3">
              Local Incentive Knowledge
            </h3>
            <p>
              Navigate {state.name}'s solar incentive programs including {state.topIncentive}.
              We'll help you maximize available rebates and tax credits specific to {state.name} residents.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3">
              {state.climate} Climate Optimized
            </h3>
            <p>
              Designs optimized for {state.name}'s {state.climate} climate and weather patterns.
              {state.specialConsideration}
            </p>
          </div>
        </div>
      </section>

      {/* State-Specific Incentives */}
      <section id="incentives" className="section-container bg-gray-50">
        <h2 className="heading-lg mb-8">{state.name} Solar Incentives & Rebates</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {state.incentives.map((incentive, i) => (
            <div key={i} className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-bold mb-2">{incentive.name}</h3>
              <p className="text-gray-600 mb-4">{incentive.description}</p>
              <div className="flex items-center text-solar-600 font-bold">
                <span className="text-2xl mr-2">💰</span>
                <span>{incentive.value}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Major Cities in [State] */}
      <section className="section-container">
        <h2 className="heading-lg mb-8">Serving Major Cities in {state.name}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {state.majorCities.map((city, i) => (
            <div key={i} className="text-center p-4 bg-gray-50 rounded-lg">
              <h3 className="font-bold text-gray-900">{city.name}</h3>
              <p className="text-sm text-gray-600">{city.systemsCompleted} systems</p>
            </div>
          ))}
        </div>
      </section>

      {/* State Testimonials */}
      <section className="section-container bg-gray-50">
        <h2 className="heading-lg mb-8">{state.name} Customer Success Stories</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {state.testimonials.map((testimonial, i) => (
            <TestimonialCard key={i} {...testimonial} />
          ))}
        </div>
      </section>

      {/* State-Specific FAQ */}
      <section className="section-container">
        <h2 className="heading-lg mb-8">
          Frequently Asked Questions - {state.name}
        </h2>
        <FAQ questions={state.faqs} />
      </section>

      {/* CTA */}
      <section className="section-container bg-gradient-to-r from-solar-600 to-energy-600 text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="heading-lg mb-6">
            Ready to Go Solar in {state.name}?
          </h2>
          <p className="text-xl mb-8">
            Join {state.homeownerCount}+ {state.name} homeowners who've gone solar with our expert guidance.
          </p>
          <Link href="/design-request" className="btn-primary bg-white text-solar-600 text-lg">
            Request Your {state.name} Solar Design
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const states = ['california', 'texas', 'florida', 'arizona', 'nevada', 
                  'north-carolina', 'new-york', 'colorado', 'massachusetts', 'new-jersey'];

  return {
    paths: states.map(state => ({ params: { state } })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const stateInfo = stateData[params.state];

  return {
    props: {
      state: stateInfo
    }
  };
}
```

### State Data Structure
```javascript
// /src/data/stateInfo.js
export const stateData = {
  california: {
    name: 'California',
    slug: 'california',
    specialRequirement: 'Title 24 compliance and fire setback requirements',
    systemsDesigned: '1200',
    topIncentive: 'SGIP battery storage rebates',
    climate: 'sunny Mediterranean',
    specialConsideration: 'Fire setbacks required in high fire risk areas.',
    homeownerCount: '5000',
    incentiveCount: '12',
    incentives: [
      {
        name: 'Federal Solar Tax Credit (ITC)',
        description: '30% federal tax credit on total system cost including installation',
        value: '30% Tax Credit'
      },
      {
        name: 'California SGIP',
        description: 'Self-Generation Incentive Program for battery storage systems',
        value: 'Up to $250/kWh'
      },
      {
        name: 'Net Energy Metering 3.0',
        description: 'Export excess solar energy to grid with retail rate credits',
        value: 'Retail Rate Credits'
      },
      // Add more incentives
    ],
    majorCities: [
      { name: 'Los Angeles', systemsCompleted: '450' },
      { name: 'San Diego', systemsCompleted: '280' },
      { name: 'San Francisco', systemsCompleted: '190' },
      { name: 'Sacramento', systemsCompleted: '140' },
    ],
    testimonials: [
      {
        name: 'Sarah Chen',
        location: 'Los Angeles, CA',
        system: '12kW with Tesla Powerwall',
        quote: 'The design met all California Title 24 requirements and fire setbacks. Permit approved in 4 days!',
        rating: 5
      },
      // Add more CA testimonials
    ],
    faqs: [
      {
        question: 'Does California require a PE stamp for solar permits?',
        answer: 'Most California jurisdictions require a licensed Professional Engineer stamp for residential solar systems. Our engineers are licensed in California and provide PE stamps as part of our permit package. This ensures your design meets California Building Code and Title 24 energy efficiency standards.'
      },
      // Add more CA-specific FAQs
    ]
  },
  // Add data for other 9 states...
};
```

## URL Structure
- /solar-design-california
- /solar-design-texas
- /solar-design-florida
- etc.

## SEO Keyword Targets
Each state page should target:
- Primary: "solar design [state]"
- Secondary: "solar engineer [state]", "solar permitting [state]"
- Long-tail: "DIY solar design services [state]", "licensed PE solar [state]"
- City variations: "solar design [city] [state]"

## Files to Create
- `/src/pages/states/[state].jsx` - Dynamic state page
- `/src/data/stateInfo.js` - State-specific data
- `/src/components/StateTestimonials.jsx` - Location testimonials
- `/src/utils/localSchema.js` - Local SEO schema helpers

## Internal Linking Strategy
- Link from homepage to top 3 states
- Add state selector widget
- Link from testimonials to state pages
- Add "Serving [State]" in footer
- Cross-link related states

## Success Criteria
- ✅ 10 state pages created and published
- ✅ All pages have unique, location-specific content
- ✅ LocalBusiness schema on all state pages
- ✅ State-specific keywords in meta tags
- ✅ 5+ local testimonials per state
- ✅ State incentive information accurate and current
- ✅ FAQ section answers state-specific questions
- ✅ Pages indexed in Google within 7 days

## Content Research Sources
- DSIRE (Database of State Incentives)
- State energy office websites
- Local utility company programs
- State solar associations
- Competitor state pages

## Notes
- Keep content accurate and updated
- Don't duplicate content between states
- Research actual local requirements
- Use real testimonials from those states
- Update incentive info quarterly
