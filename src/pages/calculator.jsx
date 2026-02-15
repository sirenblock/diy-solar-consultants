import Head from 'next/head';
import SolarCalculator from '../components/SolarCalculator/SolarCalculator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import useScrollTracking from '@/hooks/useScrollTracking';

export default function CalculatorPage() {
  // Track scroll depth on calculator page
  useScrollTracking();
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Solar System Size Calculator',
    description: 'Free solar calculator to estimate system size, costs, and savings. Calculate your solar ROI instantly.',
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    provider: {
      '@type': 'Organization',
      name: 'DIY Solar Consultants',
      url: 'https://diysolarconsultants.com',
    },
    featureList: [
      'System size calculator',
      'Cost estimator',
      'ROI calculator',
      'Savings projections',
      'Environmental impact',
    ],
  };

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Free Solar Calculator - Estimate System Size & Savings | DIY Solar Consultants</title>
        <meta
          name="title"
          content="Free Solar Calculator - Estimate System Size & Savings | DIY Solar Consultants"
        />
        <meta
          name="description"
          content="Calculate your solar system size, costs, and savings instantly. Find out how much you can save with DIY solar installation. Free estimates in 2 minutes."
        />
        <meta
          name="keywords"
          content="solar calculator, solar system size calculator, solar panel cost calculator, solar savings calculator, DIY solar cost estimator, how much solar do I need, solar ROI calculator, solar payback calculator"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://diysolarconsultants.com/calculator" />
        <meta
          property="og:title"
          content="Free Solar Calculator - Estimate System Size & Savings"
        />
        <meta
          property="og:description"
          content="Calculate your solar system size, costs, and savings instantly. Free estimates in 2 minutes."
        />
        <meta property="og:image" content="https://diysolarconsultants.com/images/solar-calculator-og.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://diysolarconsultants.com/calculator" />
        <meta
          property="twitter:title"
          content="Free Solar Calculator - Estimate System Size & Savings"
        />
        <meta
          property="twitter:description"
          content="Calculate your solar system size, costs, and savings instantly. Free estimates in 2 minutes."
        />
        <meta property="twitter:image" content="https://diysolarconsultants.com/images/solar-calculator-og.jpg" />

        {/* Additional Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="DIY Solar Consultants" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://diysolarconsultants.com/calculator" />

        {/* JSON-LD Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* FAQ Schema for rich snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'How accurate is a solar calculator?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Our calculator provides estimates within 10-15% of actual results. It uses real solar resource data from NREL and industry-standard calculations. For precise sizing and engineering, we recommend requesting a professional design.'
                }
              },
              {
                '@type': 'Question',
                name: 'What is included in a DIY solar cost estimate?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'The DIY estimate includes all equipment (panels, inverters, mounting, balance of system), professional design, and permitting services. It does not include installation labor since you will be doing that yourself.'
                }
              },
              {
                '@type': 'Question',
                name: 'Can I really save 40-60% going DIY solar?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes! Professional installers typically charge $2.50-$3.50 per watt, with much of that being labor costs. By doing the installation yourself while still getting professional design and permitting, you can save 40-60% on total project costs.'
                }
              }
            ]
          }) }}
        />
      </Head>
      <Header />

      <main className="pt-20 min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 bg-gradient-to-r from-solar-600 to-energy-600 text-white overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="relative max-w-6xl mx-auto text-center">
            {/* Headline - Benefit-focused (60 chars) */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Calculate Your Exact Solar Savings<br />
              <span className="bg-gradient-to-r from-yellow-300 to-energy-200 bg-clip-text text-transparent">in 60 Seconds</span>
            </h1>

            {/* Subheadline - Address pain point (94 chars) */}
            <p className="text-xl md:text-2xl text-solar-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Get a personalized estimate based on your actual electric bill
            </p>

            {/* Trust Signals */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm sm:text-base mb-8">
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6 text-energy-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">Free & Instant</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6 text-energy-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">2-Minute Estimate</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6 text-energy-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">No Email Required</span>
              </div>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <SolarCalculator />
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Why Use Our Solar Calculator?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="bg-solar-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-solar-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Accurate Estimates
                  </h3>
                  <p className="text-gray-600">
                    Our calculator uses real solar resource data and industry-standard calculations to provide
                    accurate system sizing and production estimates.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="bg-energy-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-energy-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    DIY vs Professional Costs
                  </h3>
                  <p className="text-gray-600">
                    See exactly how much you can save by going DIY versus hiring a professional installer.
                    Compare costs side-by-side.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    ROI & Savings Analysis
                  </h3>
                  <p className="text-gray-600">
                    See your payback period, 25-year savings projections, and return on investment.
                    Make data-driven decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Signals Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-solar-600 mb-2">5,000+</p>
                  <p className="text-gray-600 text-sm md:text-base">Systems Designed</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-energy-600 mb-2">98%</p>
                  <p className="text-gray-600 text-sm md:text-base">Permit Approval Rate</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">40-60%</p>
                  <p className="text-gray-600 text-sm md:text-base">Average Savings</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">50 States</p>
                  <p className="text-gray-600 text-sm md:text-base">Nationwide Service</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    How accurate is this calculator?
                  </h3>
                  <p className="text-gray-600">
                    Our calculator provides estimates within 10-15% of actual results. It uses real solar resource
                    data from NREL and industry-standard calculations. For precise sizing and engineering, we recommend
                    requesting a professional design.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    What's included in the DIY cost estimate?
                  </h3>
                  <p className="text-gray-600">
                    The DIY estimate includes all equipment (panels, inverters, mounting, balance of system),
                    professional design, and permitting services. It does not include installation labor since you'll
                    be doing that yourself.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Can I really save 40-60% going DIY?
                  </h3>
                  <p className="text-gray-600">
                    Yes! Professional installers typically charge $2.50-$3.50 per watt, with much of that being labor costs.
                    By doing the installation yourself while still getting professional design and permitting, you can save
                    40-60% on total project costs.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    What happens after I submit my information?
                  </h3>
                  <p className="text-gray-600">
                    You'll receive a detailed report within 24 hours with specific equipment recommendations, financing
                    options, and next steps. There's no obligation - it's completely free. If you want to move forward,
                    we can then prepare a custom design for your property.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-solar-600 to-energy-600">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Turn Your Estimate Into a Real Design
              </h2>
              <p className="text-xl text-solar-100 mb-4">
                Get a PE-stamped solar design and permit package tailored to your home
              </p>
              <p className="text-sm text-solar-200 mb-8">
                Free consultation &bull; 5-7 day turnaround &bull; 98% permit approval rate
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/design-request"
                  className="inline-flex items-center justify-center px-8 py-4 h-14 bg-white text-solar-700 rounded-lg font-bold text-lg hover:bg-solar-50 transition-colors shadow-lg"
                >
                  Get My Free Design Quote
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a
                  href="/pricing"
                  className="inline-flex items-center justify-center px-8 py-4 h-14 bg-solar-700 text-white rounded-lg font-semibold hover:bg-solar-800 transition-colors border-2 border-white"
                >
                  View Pricing
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
