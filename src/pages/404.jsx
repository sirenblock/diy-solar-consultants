import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FadeIn } from '@/components/animations';

export default function Custom404() {
  const popularLinks = [
    { href: '/', label: 'Home', description: 'Return to the homepage' },
    { href: '/services', label: 'Our Services', description: 'Explore solar design services' },
    { href: '/calculator', label: 'Solar Calculator', description: 'Calculate your savings' },
    { href: '/pricing', label: 'Pricing', description: 'View our transparent pricing' },
    { href: '/design-request', label: 'Get a Quote', description: 'Request a custom design' },
    { href: '/contact', label: 'Contact Us', description: 'Get in touch with our team' },
  ];

  return (
    <>
      <Head>
        <title>Page Not Found | DIY Solar Consultants</title>
        <meta name="description" content="The page you're looking for could not be found. Explore our solar design services or return to the homepage." />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <Header />

      <main id="main-content" className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="section-container">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              {/* 404 Icon */}
              <div className="mb-8">
                <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-solar-100 to-energy-100 mb-6">
                  <svg
                    className="w-16 h-16 text-solar-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
              </div>

              {/* Error Message */}
              <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-4">
                404
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">
                Page Not Found
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
                Looks like this page got lost in the sun. The page you&apos;re looking for
                doesn&apos;t exist or may have been moved.
              </p>

              {/* Primary CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-solar-600 to-energy-600 text-white font-bold rounded-xl shadow-lg shadow-solar-600/30 hover:shadow-solar-600/50 hover:-translate-y-1 transition-all"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  Back to Home
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-gray-300 text-gray-800 font-bold rounded-xl hover:border-solar-600 hover:text-solar-600 transition-all"
                >
                  Contact Support
                </Link>
              </div>

              {/* Popular Links */}
              <div className="border-t border-gray-200 pt-12">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">
                  Popular Pages
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {popularLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="group p-4 bg-white rounded-xl border border-gray-200 hover:border-solar-300 hover:shadow-md transition-all text-left"
                    >
                      <span className="font-semibold text-gray-900 group-hover:text-solar-600 transition-colors">
                        {link.label}
                      </span>
                      <p className="text-sm text-gray-500 mt-1">
                        {link.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </main>

      <Footer />
    </>
  );
}
