import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function DesignRequestThankYou() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>Request Received | DIY Solar Consultants</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Header />

      <div className="pt-20 min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Success Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
            {/* Success Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-energy-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-energy-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Design Request Received!</h1>
            <p className="text-xl text-gray-600 mb-8">
              We'll review your information and send your custom solar design within 5-7 business
              days
            </p>

            {/* Request ID */}
            {id && (
              <div className="inline-block bg-solar-50 border-2 border-solar-200 rounded-lg px-6 py-3 mb-8">
                <p className="text-sm text-gray-600 mb-1">Your Request Number</p>
                <p className="text-2xl font-bold text-solar-700">{id}</p>
              </div>
            )}

            {/* What Happens Next */}
            <div className="max-w-2xl mx-auto text-left mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                What Happens Next
              </h2>

              <div className="space-y-6">
                {/* Step 1 */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-solar-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-solar-700 font-bold text-lg">1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Email Confirmation (within 5 minutes)
                    </h3>
                    <p className="text-gray-600">
                      We'll send a confirmation email with your request details
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-solar-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-solar-700 font-bold text-lg">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Engineer Review (1-2 business days)
                    </h3>
                    <p className="text-gray-600">Our team reviews your property and requirements</p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-solar-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-solar-700 font-bold text-lg">3</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Custom Design (5-7 business days)
                    </h3>
                    <p className="text-gray-600">We create your tailored solar system design</p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-energy-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-energy-700 font-bold text-lg">4</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">Quote & Consultation</h3>
                    <p className="text-gray-600">
                      We email your design, quote, and schedule a consultation call
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* While You Wait */}
            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                While You Wait, Explore These Resources
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                <Link
                  href="/calculator"
                  className="p-6 border-2 border-gray-200 rounded-lg hover:border-solar-500 hover:bg-solar-50 transition-all group"
                >
                  <div className="flex items-center justify-center mb-3">
                    <svg
                      className="w-8 h-8 text-solar-600 group-hover:text-solar-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Try Our Solar Calculator</h3>
                  <p className="text-sm text-gray-600">
                    Estimate your system size and potential savings
                  </p>
                </Link>

                <Link
                  href="/equipment"
                  className="p-6 border-2 border-gray-200 rounded-lg hover:border-solar-500 hover:bg-solar-50 transition-all group"
                >
                  <div className="flex items-center justify-center mb-3">
                    <svg
                      className="w-8 h-8 text-solar-600 group-hover:text-solar-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Browse Equipment Options</h3>
                  <p className="text-sm text-gray-600">
                    Explore solar panels, inverters, and batteries
                  </p>
                </Link>

                <Link
                  href="/resources"
                  className="p-6 border-2 border-gray-200 rounded-lg hover:border-solar-500 hover:bg-solar-50 transition-all group"
                >
                  <div className="flex items-center justify-center mb-3">
                    <svg
                      className="w-8 h-8 text-solar-600 group-hover:text-solar-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Read Our DIY Installation Guide
                  </h3>
                  <p className="text-sm text-gray-600">
                    Learn about the DIY solar installation process
                  </p>
                </Link>

                <Link
                  href="/faq"
                  className="p-6 border-2 border-gray-200 rounded-lg hover:border-solar-500 hover:bg-solar-50 transition-all group"
                >
                  <div className="flex items-center justify-center mb-3">
                    <svg
                      className="w-8 h-8 text-solar-600 group-hover:text-solar-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">View FAQ</h3>
                  <p className="text-sm text-gray-600">
                    Common questions about solar design and DIY installation
                  </p>
                </Link>
              </div>
            </div>

            {/* Questions Section */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Have Questions About Your Request?
              </h2>
              <p className="text-gray-600 mb-6">
                Our team is here to help! Feel free to reach out anytime.
              </p>

              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-solar-600 text-white rounded-lg font-semibold hover:bg-solar-700 transition-colors"
                >
                  Contact Us
                </Link>
                <a
                  href="mailto:info@diysolar.com"
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-solar-500 hover:text-solar-600 transition-colors"
                >
                  Email: info@diysolar.com
                </a>
                <a
                  href="tel:+15551234567"
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-solar-500 hover:text-solar-600 transition-colors"
                >
                  Call: (555) 123-4567
                </a>
              </div>
            </div>

            {/* Home Button */}
            <div className="mt-12">
              <Link
                href="/"
                className="inline-flex items-center text-solar-600 hover:text-solar-700 font-semibold"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Return to Homepage
              </Link>
            </div>
          </div>
        </div>
      </div>
    <Footer />

    </>
  );
}
