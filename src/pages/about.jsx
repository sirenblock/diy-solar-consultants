import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InlineCTA from '@/components/InlineCTA';
import CertificationShowcase from '@/components/CertificationShowcase';
import {
  generateBreadcrumbSchema,
  generateReviewSchema,
  generateAggregateRatingSchema,
  generateSchemaGraph
} from '@/utils/schema';

// Testimonial Component
function TestimonialCard({ name, location, system, quote }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
      {/* Star Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <p className="text-gray-700 mb-6 leading-relaxed italic">&ldquo;{quote}&rdquo;</p>

      {/* Author */}
      <div className="border-t border-gray-200 pt-4">
        <p className="font-semibold text-gray-900">{name}</p>
        <p className="text-sm text-gray-600 mt-1">{location}</p>
        <p className="text-sm text-solar-600 font-medium mt-1">{system}</p>
      </div>
    </div>
  );
}

// Statistics Component
function StatCard({ number, label }) {
  return (
    <div className="text-center">
      <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-solar-600 mb-2">
        {number}
      </div>
      <div className="text-gray-600 text-sm sm:text-base font-medium">
        {label}
      </div>
    </div>
  );
}

// Credential Badge Component
function CredentialBadge({ title, icon }) {
  return (
    <div className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-md border border-gray-100">
      <div className="text-3xl">{icon}</div>
      <div className="font-semibold text-gray-900 text-sm sm:text-base">{title}</div>
    </div>
  );
}

export default function About() {
  const [activeTab, setActiveTab] = useState('knowledge');

  const testimonials = [
    {
      name: "John Martinez",
      location: "Austin, Texas",
      system: "8.5kW Residential System",
      quote: "I'm a retired electrician, so I knew I could do the installation myself. But I needed the engineering and permitting expertise. DIY Solar Consultants delivered exactly what I needed - professional design, PE stamp, and permit approval on first submission. Saved me $18,000."
    },
    {
      name: "Sarah Chen",
      location: "Denver, Colorado",
      system: "12kW with Tesla Powerwall 3",
      quote: "The design was incredibly detailed - panel layout, string sizing, electrical diagrams, everything. My local inspector was impressed with the quality. The system has been producing exactly as projected for 18 months now."
    },
    {
      name: "Mike Rodriguez",
      location: "Tampa, Florida",
      system: "10kW Residential",
      quote: "I was nervous about DIY solar until I found this service. They designed the system, got the permit, and guided me through the installation. Their equipment sourcing saved me another $3,000. Total savings: $22,000 vs. installer quotes."
    },
    {
      name: "Jennifer Park",
      location: "Portland, Oregon",
      system: "6.8kW Residential",
      quote: "As an engineer myself, I appreciated the thoroughness. Load calculations, structural analysis, shade modeling - everything was professional grade. And the support during installation was invaluable."
    },
    {
      name: "David Thompson",
      location: "Phoenix, Arizona",
      system: "9.2kW with Battery",
      quote: "Worth every penny. The permit was approved in 3 days. Installation went smoothly with their guidance. System commissioned and interconnected in 6 weeks total. Now saving $200+/month."
    },
    {
      name: "Lisa Anderson",
      location: "Charlotte, North Carolina",
      system: "8kW Residential",
      quote: "I got quotes from 5 installers ranging from $32k-$38k for an 8kW system. DIY Solar Consultants designed it for me, I installed it myself, total cost $14,500. Same equipment, same quality, $20,000 saved."
    }
  ];

  const whyChooseContent = {
    knowledge: {
      title: "Expert Knowledge",
      items: [
        "Licensed PE stamps for all 50 states",
        "NABCEP certified solar professionals",
        "5,000+ systems designed across all climates and jurisdictions",
        "Deep understanding of electrical codes (NEC), structural requirements, and AHJ-specific regulations",
        "Expertise in all inverter types (string, micro, optimizers) and battery systems",
        "Shade analysis and production modeling"
      ]
    },
    process: {
      title: "Streamlined Process",
      items: [
        "5-7 day turnaround for standard designs",
        "Single point of contact throughout project",
        "We handle all permitting paperwork and engineering",
        "98% first-time permit approval rate",
        "Free revisions until permit approved",
        "Clear, detailed documentation designed for DIY installation",
        "Installation guidance and support included"
      ]
    },
    cost: {
      title: "Cost Effective",
      items: [
        "No installation markup (save 40-60%)",
        "Equipment sourcing at wholesale prices (save 15-30% on materials)",
        "Transparent pricing with no hidden fees",
        "Average savings: $12,000-$18,000 on typical residential system",
        "ROI typically improves from 8-10 years to 4-6 years",
        "Same quality engineering as professional installers"
      ]
    }
  };

  return (
    <>
      <Head>
        <title>About Our Solar Engineers | DIY Solar Consultants</title>
        <meta
          name="description"
          content="Licensed PE & NABCEP certified solar engineers. 5,000+ systems designed, 98% approval rate. Professional solar design expertise for DIY installers nationwide."
        />
        <meta name="keywords" content="professional solar design services, licensed PE solar engineer, NABCEP certified solar design, DIY solar engineering support, solar permit engineering, solar design all 50 states" />
        <link rel="canonical" href="https://diysolarconsultants.com/about" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://diysolarconsultants.com/about" />
        <meta property="og:title" content="Expert Solar Engineers Helping DIY Homeowners" />
        <meta property="og:description" content="Licensed PE & NABCEP certified professionals. 25+ years experience, 5,000+ systems designed. Professional solar design expertise for DIY success." />
        <meta property="og:site_name" content="DIY Solar Consultants" />
        <meta property="og:image" content="https://diysolarconsultants.com/images/og-about.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="DIY Solar Consultants Team" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Expert Solar Engineers Helping DIY Homeowners" />
        <meta name="twitter:description" content="Licensed PE & NABCEP certified. 5,000+ systems designed, 98% approval rate. Professional solar expertise for DIY success." />
        <meta name="twitter:image" content="https://diysolarconsultants.com/images/og-about.jpg" />
        <meta name="twitter:image:alt" content="DIY Solar Consultants Team" />

        {/* Robots */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        {/* Enhanced Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              generateSchemaGraph([
                generateBreadcrumbSchema([
                  { name: 'Home', url: '/' },
                  { name: 'About', url: '/about' }
                ]),
                generateAggregateRatingSchema({
                  value: '4.9',
                  count: '5000'
                }),
                ...testimonials.map((testimonial) =>
                  generateReviewSchema({
                    author: testimonial.name,
                    date: '2024-01-01',
                    text: testimonial.quote,
                    rating: '5',
                    serviceName: 'DIY Solar Consultants'
                  })
                )
              ])
            )
          }}
        />
      </Head>
      <Header />

      <main className="pt-20 bg-gray-50">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 bg-gradient-to-br from-solar-700 via-solar-600 to-solar-800 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="relative z-10 max-w-6xl mx-auto text-center">
            {/* Headline - Benefit-focused (51 chars) */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Save $15K-$25K with
              <br />
              <span className="bg-gradient-to-r from-energy-300 to-solar-200 bg-clip-text text-transparent">Professional Solar Design</span>
            </h1>

            {/* Subheadline - Address pain point (101 chars) */}
            <p className="text-xl md:text-2xl text-solar-100 max-w-3xl mx-auto mb-10 leading-relaxed">
              Licensed PE and NABCEP-certified pros helping homeowners go solar without installer markups
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/design-request"
                className="inline-flex items-center justify-center px-8 py-4 h-14 bg-white text-solar-700 rounded-xl font-bold text-lg shadow-2xl hover:shadow-white/30 hover:-translate-y-1 transition-all"
              >
                Get Your Design
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center px-8 py-4 h-14 bg-solar-800 border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-solar-900 transition-all"
              >
                View Pricing
              </Link>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm sm:text-base">
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6 text-energy-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">Licensed in All 50 States</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6 text-energy-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">5,000+ Systems Designed</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6 text-energy-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">98% Approval Rate</span>
              </div>
            </div>
          </div>
        </section>

        {/* Company Story Section */}
        <section className="section-container bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-lg text-center mb-8 text-gray-900">Our Mission</h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                We founded DIY Solar Consultants to democratize professional solar expertise. Too many capable homeowners were stuck between two bad options: paying 100% markup for professional installation, or going completely DIY without engineering support. We created a third path - professional design and permitting at a fraction of installation costs.
              </p>

              <div className="bg-solar-50 border-l-4 border-solar-600 p-6 my-8">
                <h3 className="heading-sm mb-4 text-gray-900">What We Believe:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-solar-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Solar should be accessible to everyone</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-solar-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>DIY homeowners deserve professional engineering support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-solar-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Quality design doesn&apos;t require installation markup</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-solar-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>With the right guidance, technically capable people can successfully install solar</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-solar-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Transparency and education empower better decisions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* First Inline CTA */}
          <div className="max-w-4xl mx-auto mt-12">
            <InlineCTA
              variant="default"
              title="Experience the Difference Professional Design Makes"
              description="Our licensed engineers will create a custom solar system tailored to your home, ensuring maximum savings and hassle-free permit approval."
              primaryButtonText="Get Your Custom Design"
              primaryButtonLink="/design-request"
              secondaryButtonText="Learn About Our Process"
              secondaryButtonLink="/process"
            />
          </div>
        </section>

        {/* Team Credentials Section */}
        <section className="section-container bg-gradient-to-br from-gray-50 to-gray-100">
          <CertificationShowcase />
        </section>

        {/* Why Choose DIY Solar Consultants - Tabbed Section */}
        <section className="section-container bg-white">
          <h2 className="heading-lg text-center mb-4 text-gray-900">Why Choose DIY Solar Consultants?</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Get professional designs without the professional markup. Here&apos;s what makes us different.
          </p>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 max-w-3xl mx-auto">
            <button
              onClick={() => setActiveTab('knowledge')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                activeTab === 'knowledge'
                  ? 'bg-solar-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Expert Knowledge
            </button>
            <button
              onClick={() => setActiveTab('process')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                activeTab === 'process'
                  ? 'bg-solar-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Streamlined Process
            </button>
            <button
              onClick={() => setActiveTab('cost')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                activeTab === 'cost'
                  ? 'bg-solar-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Cost Effective
            </button>
          </div>

          {/* Tab Content */}
          <div className="max-w-4xl mx-auto bg-gray-50 rounded-xl p-8 shadow-inner border border-gray-200">
            <h3 className="heading-sm mb-6 text-gray-900">{whyChooseContent[activeTab].title}</h3>
            <ul className="space-y-4">
              {whyChooseContent[activeTab].items.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-energy-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Second Inline CTA */}
          <div className="max-w-4xl mx-auto mt-12">
            <InlineCTA
              variant="subtle"
              title="See How Much You Can Save"
              description="Get a free quote and discover how professional solar design can reduce your energy costs by 40-60%."
              primaryButtonText="Request Free Quote"
              primaryButtonLink="/design-request"
              compact={true}
            />
          </div>
        </section>

        {/* Coverage Section */}
        <section className="section-container bg-gradient-to-br from-solar-50 to-solar-100">
          <h2 className="heading-lg text-center mb-8 text-gray-900">All 50 States Coverage</h2>
          <p className="text-xl text-gray-700 text-center max-w-4xl mx-auto mb-12">
            We&apos;re licensed and able to provide engineering stamps for solar installations in all 50 states. Our team understands the unique requirements of each jurisdiction, from California&apos;s Title 24 to Florida&apos;s wind load requirements to Massachusetts&apos; interconnection procedures.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-md border border-solar-200">
              <h3 className="font-bold text-solar-700 mb-2">California</h3>
              <p className="text-sm text-gray-600">Title 24 compliance, NEM 3.0, fire setbacks</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md border border-solar-200">
              <h3 className="font-bold text-solar-700 mb-2">Florida</h3>
              <p className="text-sm text-gray-600">Hurricane wind loads, FPL/Duke interconnection</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md border border-solar-200">
              <h3 className="font-bold text-solar-700 mb-2">Texas</h3>
              <p className="text-sm text-gray-600">ERCOT requirements, unique utility interconnection</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md border border-solar-200">
              <h3 className="font-bold text-solar-700 mb-2">Northeast</h3>
              <p className="text-sm text-gray-600">Snow load calculations, net metering programs</p>
            </div>
          </div>

          <p className="text-center text-gray-600 mt-8 text-lg font-medium">
            And all other 46 states with expert regional knowledge
          </p>
        </section>

        {/* What Makes Us Different */}
        <section className="section-container bg-white">
          <h2 className="heading-lg text-center mb-12 text-gray-900">What Makes Us Different</h2>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* vs Professional Installation */}
            <div className="bg-gradient-to-br from-solar-50 to-solar-100 rounded-xl p-8 border-2 border-solar-300">
              <h3 className="heading-sm mb-6 text-gray-900">vs. Professional Installation Companies</h3>
              <ul className="space-y-4">
                {[
                  "Same engineering quality, 40-60% lower cost",
                  "No sales pressure or inflated quotes",
                  "Transparent pricing and equipment specs",
                  "You keep the installation savings ($15,000-$25,000)",
                  "Direct equipment pricing, not marked up",
                  "Educational approach - you learn the system"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-energy-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* vs Pure DIY */}
            <div className="bg-gradient-to-br from-energy-50 to-energy-100 rounded-xl p-8 border-2 border-energy-300">
              <h3 className="heading-sm mb-6 text-gray-900">vs. Pure DIY (No Professional Support)</h3>
              <ul className="space-y-4">
                {[
                  "Professional engineering ensures code compliance",
                  "PE stamps where required by jurisdiction",
                  "98% permit approval rate (vs. 60-70% DIY rejection rate)",
                  "Optimal system sizing and production estimates",
                  "Electrical calculations and safety verification",
                  "String sizing and inverter selection expertise",
                  "Liability protection through engineered design"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-solar-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Third Inline CTA */}
          <div className="max-w-4xl mx-auto mt-12">
            <InlineCTA
              variant="highlighted"
              title="Join the DIY Solar Revolution"
              description="Thousands of homeowners have saved $15,000-$25,000 with our professional design services. You could be next."
              primaryButtonText="Start Saving Today"
              primaryButtonLink="/design-request"
              secondaryButtonText="View Pricing"
              secondaryButtonLink="/pricing"
            />
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section-container bg-gradient-to-br from-gray-50 to-gray-100">
          <h2 className="heading-lg text-center mb-4 text-gray-900">What Our Clients Say</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Real results from homeowners who chose professional DIY solar design</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </section>

        {/* Trust Signals & Certifications */}
        <section className="section-container bg-white">
          <h2 className="heading-lg text-center mb-12 text-gray-900">Certifications & Partnerships</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <CredentialBadge title="Licensed PE (50 States)" icon="🎓" />
            <CredentialBadge title="NABCEP Certified" icon="⚡" />
            <CredentialBadge title="REC Partner" icon="☀️" />
            <CredentialBadge title="Jinko Partner" icon="🔆" />
            <CredentialBadge title="Enphase Partner" icon="⚙️" />
            <CredentialBadge title="SolarEdge Partner" icon="🔌" />
            <CredentialBadge title="Tesla Partner" icon="🔋" />
            <CredentialBadge title="Canadian Solar" icon="🍁" />
          </div>
        </section>

        {/* By the Numbers */}
        <section className="section-container bg-gradient-to-br from-solar-700 via-solar-600 to-solar-800 text-white">
          <h2 className="heading-lg text-center mb-16">By the Numbers</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 max-w-6xl mx-auto">
            <StatCard number="5,000+" label="Systems Designed" />
            <StatCard number="98%" label="First-Time Approval Rate" />
            <StatCard number="50" label="States Covered" />
            <StatCard number="25+" label="Years Combined Experience" />
            <StatCard number="$15K-$25K" label="Average Client Savings" />
            <StatCard number="40-60%" label="Cost Reduction" />
            <StatCard number="5-7" label="Days Standard Turnaround" />
            <StatCard number="100%" label="Client Satisfaction Focus" />
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="section-container bg-gradient-to-r from-energy-600 to-energy-700 text-white">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="heading-lg mb-6">Ready to Start Saving on Solar?</h2>
            <p className="text-xl mb-8 text-energy-100">
              Join thousands of homeowners who&apos;ve successfully gone solar with professional guidance
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <Link href="/design-request" className="px-8 py-4 bg-white text-energy-700 font-bold rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-200 text-lg">
                Get Your Design Quote
              </Link>
              <Link href="/contact" className="px-8 py-4 bg-energy-800 text-white font-bold rounded-lg border-2 border-white hover:bg-energy-900 transition-all duration-200 text-lg">
                Schedule Consultation
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-energy-100">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Free consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Licensed PEs</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>98% approval rate</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
