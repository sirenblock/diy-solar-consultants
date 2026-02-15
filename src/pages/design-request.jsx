import React from 'react';
import Head from 'next/head';
import DesignRequestForm from '../components/DesignRequestForm';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import useScrollTracking from '@/hooks/useScrollTracking';

export default function DesignRequest() {
  // Track scroll depth on design request page
  useScrollTracking();

  return (
    <>
      <Head>
        <title>Request Free Solar Design Quote | DIY Solar Consultants</title>
        <meta
          name="description"
          content="Get your custom solar design from licensed PE engineers. Free consultation, 5-7 day turnaround, 98% approval rate. Start saving today - request your quote!"
        />
        <meta
          name="keywords"
          content="solar design request, solar quote, solar system design, DIY solar design, solar permit package, solar engineering"
        />
        <link rel="canonical" href="https://diysolarconsultants.com/design-request" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://diysolarconsultants.com/design-request" />
        <meta property="og:title" content="Get Your Custom Solar Design - Free Quote" />
        <meta property="og:description" content="Licensed PE engineers. Custom solar design. 5-7 day turnaround. 98% approval rate. Start saving 40-60% today." />
        <meta property="og:site_name" content="DIY Solar Consultants" />
        <meta property="og:image" content="https://diysolarconsultants.com/images/og-quote.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Request Solar Design Quote" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Get Your Custom Solar Design - Free Quote" />
        <meta name="twitter:description" content="Licensed PE engineers. 5-7 day turnaround. 98% approval rate. Start saving 40-60% on solar today." />
        <meta name="twitter:image" content="https://diysolarconsultants.com/images/og-quote.jpg" />
        <meta name="twitter:image:alt" content="Request Solar Design Quote" />

        {/* Robots */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        {/* Schema.org markup for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              name: 'Solar System Design Services',
              description:
                'Professional solar system design, permitting, and equipment sourcing for DIY homeowners',
              provider: {
                '@type': 'Organization',
                name: 'DIY Solar Consultants',
                url: 'https://diysolarconsultants.com',
              },
              areaServed: 'United States',
              offers: {
                '@type': 'Offer',
                name: 'Solar Design Package',
                description: 'Custom solar system design with PE stamp and permitting',
              },
            }),
          }}
        />
      </Head>
      <Header />
      <div className="pt-20">
        <Breadcrumbs />
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-solar-600 via-solar-500 to-energy-500 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Request Your Solar System Design
          </h1>
          <p className="text-xl md:text-2xl text-solar-50 mb-6">
            Tell us about your project and we'll create a custom solar design tailored to your
            property
          </p>

          {/* Trust Signals */}
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 mt-8">
            <div className="flex items-center space-x-2">
              <svg
                className="w-6 h-6 text-energy-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm md:text-base font-medium">Licensed PE Engineers</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg
                className="w-6 h-6 text-energy-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm md:text-base font-medium">5-7 Day Turnaround</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg
                className="w-6 h-6 text-energy-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path
                  fillRule="evenodd"
                  d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm md:text-base font-medium">98% Permit Approval Rate</span>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <DesignRequestForm />
    <Footer />

    </>
  );
}
