import { useState } from 'react';
import Head from 'next/head';
import SimpleCalculator from '../components/SimpleCalculator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Calculators() {
  const [activeCalculator, setActiveCalculator] = useState('system-size');

  const calculators = [
    {
      id: 'system-size',
      name: 'System Size Calculator',
      icon: '📏',
      description: 'Calculate the optimal solar system size based on your electricity usage',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'payback',
      name: 'Payback Period Calculator',
      icon: '💰',
      description: 'Calculate your solar investment payback period and 25-year ROI',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'battery',
      name: 'Battery Sizing Calculator',
      icon: '🔋',
      description: 'Size your battery system based on critical loads and backup duration',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <>
      <Head>
        <title>Free Solar Calculators & Tools | DIY Solar Consultants</title>
        <meta
          name="description"
          content="Free interactive solar calculators for system sizing, ROI analysis, payback periods, and battery sizing. Professional tools from licensed engineers."
        />
      </Head>
      <Header />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-solar-600 via-solar-500 to-energy-500 text-white">
          <div className="section-container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="heading-xl mb-6">
                Solar Calculators & Tools
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-solar-50">
                Professional-grade calculators to plan your solar investment
              </p>
              <p className="text-lg text-solar-100">
                All calculators created by our licensed Professional Engineers
              </p>
            </div>
          </div>
        </section>

        {/* Calculator Selection */}
        <section className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {calculators.map((calc) => (
              <button
                key={calc.id}
                onClick={() => setActiveCalculator(calc.id)}
                className={`text-left p-6 rounded-lg border-2 transition-all ${
                  activeCalculator === calc.id
                    ? 'border-solar-500 bg-solar-50 shadow-lg'
                    : 'border-gray-200 bg-white hover:border-solar-300 hover:shadow-md'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`text-4xl bg-gradient-to-br ${calc.color} text-white p-3 rounded-lg`}>
                    {calc.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">
                      {calc.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {calc.description}
                    </p>
                  </div>
                </div>
                {activeCalculator === calc.id && (
                  <div className="mt-4 flex items-center gap-2 text-solar-600 font-semibold">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Active Calculator
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Active Calculator */}
          <div className="max-w-3xl mx-auto">
            <SimpleCalculator type={activeCalculator} />
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-white border-y border-gray-200">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="heading-md text-center mb-12">Why Use Our Calculators?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-solar-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-solar-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Accurate Estimates</h3>
                    <p className="text-gray-600">
                      Calculations based on real-world data and industry standards from licensed professionals
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-solar-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-solar-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Instant Results</h3>
                    <p className="text-gray-600">
                      Get immediate calculations without waiting for quotes or consultations
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-solar-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-solar-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Private & Secure</h3>
                    <p className="text-gray-600">
                      All calculations happen in your browser - your data never leaves your device
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-solar-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-solar-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Free Forever</h3>
                    <p className="text-gray-600">
                      No registration required, no credit card needed, completely free to use
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-md mb-6">Need More Detailed Analysis?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our calculators provide quick estimates, but a professional design gives you exact specifications, equipment recommendations, and permit-ready documentation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/design-request" className="btn-primary">
                Get Professional Design
              </a>
              <a href="/resources" className="btn-secondary">
                Browse All Resources
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-gray-100">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <h2 className="heading-md text-center mb-12">Calculator FAQs</h2>
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-2">How accurate are these calculators?</h3>
                  <p className="text-gray-600">
                    Our calculators use industry-standard formulas and real-world data. They provide estimates within 10-15% accuracy. For exact specifications, we recommend getting a professional design.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-2">Do I need to create an account?</h3>
                  <p className="text-gray-600">
                    No! All calculators are completely free to use without registration. Your calculations are private and performed entirely in your browser.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-2">Can I save or export my results?</h3>
                  <p className="text-gray-600">
                    Currently, you can take screenshots of your results. We're working on adding export functionality. For detailed reports, consider our professional design service.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-2">What's the next step after using the calculators?</h3>
                  <p className="text-gray-600">
                    Use these estimates to determine if solar makes sense for you. When ready, request a professional design for exact specifications, equipment lists, and permit-ready documents.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
