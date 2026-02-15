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
import InlineCTA from '@/components/InlineCTA';
import GuaranteeBadge from '@/components/GuaranteeBadge';
import MoneyBackGuarantee from '@/components/MoneyBackGuarantee';
import CertificationBadges from '@/components/CertificationBadges';
import Breadcrumbs from '@/components/Breadcrumbs';
import {
  packages,
  addons,
  faqs,
  successStories,
  paymentInfo,
  guarantee,
  valueStack,
  savingsComparison
} from '../data/pricingData';
import {
  generateBreadcrumbSchema,
  generateSchemaGraph
} from '@/utils/schema';
import { getAbsoluteUrl, getOgImageUrl } from '@/utils/siteConfig';

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
        <title>Solar Design Pricing - Save 40-60% | DIY Solar Consultants</title>
        <meta
          name="description"
          content="Professional solar design from $297. Licensed PE stamps, permit-ready plans delivered in 3-5 days. 98% approval rate guaranteed. Get your quote today!"
        />
        <meta name="keywords" content="solar design pricing, solar permit cost, DIY solar design cost, solar engineering services cost, solar plan pricing, PE stamp cost" />
        <link rel="canonical" href={getAbsoluteUrl('/pricing')} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={getAbsoluteUrl('/pricing')} />
        <meta property="og:title" content="Save Thousands with Professional Solar Design" />
        <meta property="og:description" content="Expert solar system design from $297. Licensed PE stamps, permit-ready plans. 98% approval rate. Transparent pricing, no hidden fees." />
        <meta property="og:site_name" content="DIY Solar Consultants" />
        <meta property="og:image" content={getOgImageUrl('og-pricing.jpg')} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="DIY Solar Consultants Pricing Plans" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Solar Design Pricing - Save 40-60% on Installation" />
        <meta name="twitter:description" content="Professional solar system design from $297. Licensed PE stamps, permit-ready plans. 98% approval rate guaranteed." />
        <meta name="twitter:image" content={getOgImageUrl('og-pricing.jpg')} />
        <meta name="twitter:image:alt" content="DIY Solar Consultants Pricing Plans" />

        {/* Robots */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        {/* Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              generateBreadcrumbSchema([
                { name: 'Home', url: '/' },
                { name: 'Pricing', url: '/pricing' }
              ])
            )
          }}
        />

        {/* Product Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </Head>
      <Header />
      <div className="pt-20">
        <Breadcrumbs />
      </div>

      <main id="main-content" className="min-h-screen bg-gray-50">
        {/* Hero Section with Savings Comparison */}
        <section className="relative pt-12 pb-12 px-4 bg-gradient-to-br from-blue-50 to-green-50 overflow-hidden">
          <div className="relative max-w-4xl mx-auto text-center">
            {/* Headline - Benefit-focused (54 chars) */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
              Transparent DIY Solar Pricing
              <br />
              <span className="bg-gradient-to-r from-solar-600 to-energy-600 bg-clip-text text-transparent">No Hidden Fees</span>
            </h1>

            {/* Subheadline - Address pain point (89 chars) */}
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Professional solar consulting for a fraction of installation costs
            </p>

            {/* Savings Calculator */}
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto mb-8">
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-gray-600 mb-2">Traditional Installer</p>
                  <p className="text-4xl font-bold text-gray-400 line-through">
                    ${savingsComparison.traditional.toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-gray-600 mb-2">With DIY Solar Consultants</p>
                  <p className="text-4xl font-bold text-green-600">
                    ${savingsComparison.withDIY.toLocaleString()}
                  </p>
                </div>
              </div>
              <div className="bg-green-50 border-2 border-green-500 rounded-xl p-4 mb-6">
                <p className="text-3xl font-bold text-green-700">
                  Save ${savingsComparison.totalSavings.toLocaleString()}
                </p>
                <p className="text-green-600 font-semibold">
                  {savingsComparison.savingsPercent}% less than traditional solar
                </p>
              </div>

              {/* CTA Button */}
              <Link
                href="/design-request"
                className="inline-flex items-center justify-center px-8 py-4 h-14 bg-gradient-to-r from-solar-600 to-energy-600 text-white rounded-xl font-bold text-lg shadow-2xl hover:shadow-solar-600/50 hover:-translate-y-1 transition-all"
              >
                Get Free Quote
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">98% Approval Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">Licensed PE</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
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

            {/* Enhanced Money-Back Guarantee */}
            <div className="mt-12">
              <MoneyBackGuarantee />
            </div>
          </div>
        </section>

        {/* Certifications & Trust Section */}
        <CertificationBadges />

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

            {/* Value Stack Section */}
            <div className="mt-16 max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 border-2 border-blue-200">
                <h3 className="text-2xl font-bold text-center mb-8">
                  Everything You Get (Total Value: ${valueStack.totalValue.toLocaleString()})
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  {valueStack.items.map(({ item, value }) => (
                    <div key={item} className="flex justify-between items-center bg-white rounded-lg p-4">
                      <span className="font-medium text-gray-900">{item}</span>
                      <span className="text-green-600 font-bold">{value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t-2 border-blue-300 flex justify-between items-center">
                  <span className="text-xl font-bold">Your Investment:</span>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-green-600">
                      Only ${valueStack.yourInvestment.toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-600">
                      Save ${valueStack.savingsAmount.toLocaleString()} ({valueStack.savingsPercent}% off)
                    </p>
                  </div>
                </div>
              </div>
            </div>

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
              <Link href="/contact" className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition-all shadow-lg hover:shadow-xl">
                Schedule Free Consultation
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA with Scarcity and Risk Reversal */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Save $15,000+?
            </h2>
            <p className="text-xl mb-6 text-white/90">
              Join 127 homeowners who started their solar journey this month
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link href="/design-request" className="px-8 py-4 bg-white text-green-600 font-bold rounded-lg hover:bg-gray-100 text-lg transition-all shadow-lg hover:shadow-xl">
                Get Started Now
              </Link>
              <a href="tel:+18885551234" className="px-8 py-4 bg-transparent border-2 border-white font-bold rounded-lg hover:bg-white/10 text-lg transition-all">
                Call (888) 555-1234
              </a>
            </div>

            {/* Risk Reversal - Money-Back Guarantee */}
            <div className="mt-8 pt-6 border-t border-white/20">
              <div className="flex items-center justify-center gap-2 text-white/90 mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-lg font-semibold">Protected by 30-Day Money-Back Guarantee</span>
              </div>
              <p className="text-sm text-white/80 max-w-2xl mx-auto">
                If we can&apos;t deliver a code-compliant, permit-ready solar design for your property, we&apos;ll refund your payment 100%. No questions asked.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-white/20">
              <h3 className="text-xl font-bold mb-4">Still have questions about pricing?</h3>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <a href="#faq" className="hover:text-green-200 underline">View FAQ</a>
                <a href="/contact" className="hover:text-green-200 underline">Contact Us</a>
                <a href="tel:+18885551234" className="hover:text-green-200 underline">Call: (888) 555-1234</a>
                <a href="mailto:info@diysolarconsultants.com" className="hover:text-green-200 underline">info@diysolarconsultants.com</a>
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
            <Link href="/contact?subject=commercial" className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-700 transition-all">
              Contact for Commercial Pricing
            </Link>
          </div>
        </section>
      </main>
    <Footer />

    </>
  );
}
