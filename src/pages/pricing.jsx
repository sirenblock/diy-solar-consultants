import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import PricingCard from '../components/PricingCard';
import ComparisonTable from '../components/ComparisonTable';
import SavingsCalculator from '../components/SavingsCalculator';
import AddOnServices from '../components/AddOnServices';
import SuccessStories from '../components/SuccessStories';
import PricingFAQ from '../components/PricingFAQ';
import PaymentInfo from '../components/PaymentInfo';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import UrgencyBanner from '@/components/UrgencyBanner';
import InlineCTA from '@/components/InlineCTA';
import GuaranteeBadge from '@/components/GuaranteeBadge';
import {
  packages,
  addons,
  faqs,
  successStories,
  paymentInfo,
  guarantee
} from '../data/pricingData';
import {
  generateBreadcrumbSchema,
  generateSchemaGraph
} from '@/utils/schema';

export default function Pricing() {
  const handlePackageSelect = (pkg) => {
    // Handle package selection - could navigate to contact form, etc.
    console.log('Selected package:', pkg);
    // Example: router.push(`/contact?package=${pkg.id}`);
  };

  // Schema markup for SEO
  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'DIY Solar Consultants - Professional Solar Design Services',
    description: 'Professional solar design and permitting services for DIY homeowners',
    brand: {
      '@type': 'Brand',
      name: 'DIY Solar Consultants'
    },
    offers: packages
      .filter(pkg => pkg.id !== 'consultation')
      .map(pkg => ({
        '@type': 'Offer',
        name: pkg.name,
        price: pkg.price,
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        description: pkg.subtitle
      }))
  };

  return (
    <>
      <Head>
        <title>Solar Design Pricing - Save 40-60% | DIY Solar</title>
        <meta
          name="description"
          content="Professional solar design from $297. Licensed PE stamps, permit-ready plans delivered in 3-5 days. 98% approval rate guaranteed. Get your quote today!"
        />
        <meta name="keywords" content="solar design pricing, solar permit cost, DIY solar design cost, solar engineering services cost, solar plan pricing, PE stamp cost" />
        <link rel="canonical" href="https://diysolar.com/pricing" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://diysolar.com/pricing" />
        <meta property="og:title" content="Save Thousands with Professional Solar Design" />
        <meta property="og:description" content="Expert solar system design from $297. Licensed PE stamps, permit-ready plans. 98% approval rate. Transparent pricing, no hidden fees." />
        <meta property="og:site_name" content="DIY Solar Consultants" />
        <meta property="og:image" content="https://diysolar.com/images/og-pricing.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="DIY Solar Consultants Pricing Plans" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Solar Design Pricing - Save 40-60% on Installation" />
        <meta name="twitter:description" content="Professional solar system design from $297. Licensed PE stamps, permit-ready plans. 98% approval rate guaranteed." />
        <meta name="twitter:image" content="https://diysolar.com/images/og-pricing.jpg" />
        <meta name="twitter:image:alt" content="DIY Solar Consultants Pricing Plans" />

        {/* Robots */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        {/* Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: 'https://diysolar.com'
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'Pricing',
                  item: 'https://diysolar.com/pricing'
                }
              ]
            })
          }}
        />

        {/* Product Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </Head>
      <Header />

      {/* Urgency Banner - Top of Page */}
      <UrgencyBanner type="limited-spots" />

      <div className="pt-20 min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="relative max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Transparent Pricing for<br /><span className="bg-gradient-to-r from-yellow-300 to-green-200 bg-clip-text text-transparent">Professional Solar Design</span>
            </h1>
            <p className="text-xl md:text-2xl text-green-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              No hidden fees. No surprises. Professional engineering at honest prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/design-request" className="px-8 py-4 bg-white text-green-700 rounded-xl font-bold text-lg shadow-2xl hover:shadow-white/30 hover:-translate-y-1 transition-all">
                Get Your Quote →
              </Link>
              <Link href="/calculator" className="px-8 py-4 bg-green-800 border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-green-900 transition-all">
                Calculate Savings
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-sm sm:text-base">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">98% Approval Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">Licensed PE</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">All 50 States</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">Money-Back Guarantee</span>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              We believe in transparent pricing. Unlike many solar companies, we show our prices upfront.
              Choose the package that fits your needs, or build a custom solution. Every package includes
              professional engineering from our licensed PEs and NABCEP-certified team.
            </p>
          </div>
        </section>

        {/* Social Proof Urgency Banner */}
        <div className="bg-gray-50">
          <UrgencyBanner type="social-proof" />
        </div>

        {/* Pricing Cards */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Choose Your Package
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {packages.map((pkg) => (
                <PricingCard key={pkg.id} pkg={pkg} onSelect={handlePackageSelect} />
              ))}
            </div>

            {/* Guarantee Badge */}
            <div className="mt-16">
              <GuaranteeBadge variant="full" />
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Detailed Package Comparison
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              See exactly what's included in each package to make an informed decision
            </p>
            <ComparisonTable packages={packages} />

            {/* Inline CTA after comparison */}
            <InlineCTA
              variant="highlighted"
              title="Ready to Secure Your Spot?"
              description="Only a limited number of design slots available each month. Lock in your quote today."
              primaryButtonText="Get My Custom Design"
              primaryButtonLink="/design-request"
              secondaryButtonText="Schedule Consultation"
              secondaryButtonLink="/contact"
            />
          </div>
        </section>

        {/* Countdown Urgency Banner */}
        <div className="bg-gray-50">
          <UrgencyBanner type="countdown" />
        </div>

        {/* Savings Calculator */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <SavingsCalculator />
          </div>
        </section>

        {/* Add-On Services */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Customize Your Package
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Add these services to any package for additional support
            </p>
            <AddOnServices addons={addons} />
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-green-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Real Client Savings
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              See how much our clients saved by choosing DIY solar with professional design
            </p>
            <SuccessStories stories={successStories} />
          </div>
        </section>

        {/* Payment & Guarantee */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <PaymentInfo paymentInfo={paymentInfo} guarantee={guarantee} />
          </div>
        </section>

        {/* Pricing FAQs */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Pricing FAQs
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Common questions about our pricing and services
            </p>
            <PricingFAQ faqs={faqs} />

            {/* Inline CTA in FAQ section */}
            <InlineCTA
              variant="urgent"
              title="Don't Miss Out on This Month's Availability"
              description="We're already booking into next month. Secure your design slot before they're gone."
              primaryButtonText="Reserve My Spot Now"
              primaryButtonLink="/design-request"
              compact={true}
            />
          </div>
        </section>

        {/* Who This Is For */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Is This Right for You?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Great Fit */}
              <div className="bg-green-50 border-2 border-green-300 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-green-900 mb-6 flex items-center">
                  <svg className="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Great Fit If:
                </h3>
                <ul className="space-y-3">
                  {[
                    'You\'re comfortable with DIY projects',
                    'You want professional engineering without installation markup',
                    'You want to save $10,000-$20,000+',
                    'You have time for a weekend or two of work',
                    'You\'re willing to hire help for specific tasks (electrician, roofer)',
                    'You value learning and understanding your system'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Not a Good Fit */}
              <div className="bg-red-50 border-2 border-red-300 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-red-900 mb-6 flex items-center">
                  <svg className="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  Not a Good Fit If:
                </h3>
                <ul className="space-y-3">
                  {[
                    'You have zero DIY experience and no desire to learn',
                    'You can\'t dedicate any time to the project',
                    'You\'re uncomfortable on roofs and unwilling to hire help',
                    'You want 100% turnkey (consider professional installation)',
                    'Time is more valuable than money to you'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-lg text-gray-700 mb-4">Still unsure?</p>
              <button className="bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition-all shadow-lg hover:shadow-xl">
                Schedule Free Consultation
              </button>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-br from-green-600 to-green-800 text-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-green-100">
              Choose your package and start saving on solar
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition-all shadow-lg hover:shadow-xl">
                Get Design + Permit Package
              </button>
              <button className="bg-green-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-800 transition-all border-2 border-white">
                Request Custom Quote
              </button>
              <button className="bg-transparent text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition-all border-2 border-white">
                Schedule Free Consultation
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                98% approval rate
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Licensed PE
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Money-back guarantee
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-green-500">
              <h3 className="text-xl font-bold mb-4">Still have questions about pricing?</h3>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <a href="#faq" className="hover:text-green-200 underline">View FAQ</a>
                <a href="/contact" className="hover:text-green-200 underline">Contact Us</a>
                <a href="tel:555-555-5555" className="hover:text-green-200 underline">Call: (555) 555-5555</a>
                <a href="mailto:pricing@diysolar.com" className="hover:text-green-200 underline">pricing@diysolar.com</a>
              </div>
            </div>
          </div>
        </section>

        {/* Volume/Enterprise Pricing */}
        <section className="py-16 bg-gray-800 text-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4">Volume & Commercial Pricing</h2>
            <p className="text-lg text-gray-300 mb-8">
              Installing solar on multiple properties or need commercial design services?
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-bold mb-2">Perfect For:</h3>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Multiple properties/systems</li>
                  <li>• Commercial projects (20kW+)</li>
                  <li>• Developer projects</li>
                  <li>• Non-profit organizations</li>
                  <li>• Community solar</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-2">Benefits:</h3>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Volume discounts</li>
                  <li>• Dedicated project manager</li>
                  <li>• Priority scheduling</li>
                  <li>• Custom payment terms</li>
                </ul>
              </div>
            </div>
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-700 transition-all">
              Contact for Commercial Pricing
            </button>
          </div>
        </section>
      </div>
    <Footer />

    </>
  );
}
