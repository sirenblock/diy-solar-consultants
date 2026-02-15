import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import TestimonialCard from '@/components/TestimonialCard';
import CaseStudy from '@/components/CaseStudy';
import VideoTestimonial from '@/components/VideoTestimonial';
import StatsSection from '@/components/StatsSection';
import { testimonials, videoTestimonials } from '@/data/testimonials';
import { caseStudies } from '@/data/caseStudies';
import { Star } from 'lucide-react';
import { getAbsoluteUrl, getOgImageUrl } from '@/utils/siteConfig';
import { generateBreadcrumbSchema } from '@/utils/schema';

export default function ReviewsPage() {
  // Get featured case studies for display (first 3)
  const featuredCaseStudies = caseStudies.filter(cs => cs.featured).slice(0, 3);

  // Display first 12 testimonials
  const displayedTestimonials = testimonials.slice(0, 12);

  return (
    <>
      <Head>
        <title>Customer Reviews & Testimonials | DIY Solar Consultants</title>
        <meta
          name="description"
          content="Read reviews from 10,000+ satisfied customers who saved thousands with our DIY solar designs. 4.9/5 rating. Real results, real savings, real success stories."
        />
        <meta name="keywords" content="DIY solar reviews, solar design testimonials, solar consultant reviews, DIY solar success stories" />
        <link rel="canonical" href={getAbsoluteUrl('/reviews')} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={getAbsoluteUrl('/reviews')} />
        <meta property="og:title" content="4.9/5 Rating - Customer Reviews | DIY Solar Consultants" />
        <meta property="og:description" content="10,000+ homeowners saved an average of $12,800 with our DIY solar designs. Read their stories." />
        <meta property="og:site_name" content="DIY Solar Consultants" />
        <meta property="og:image" content={getOgImageUrl('og-reviews.jpg')} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="4.9/5 Rating - Customer Reviews | DIY Solar Consultants" />
        <meta name="twitter:description" content="10,000+ homeowners saved an average of $12,800 with our DIY solar designs." />
        <meta name="twitter:image" content={getOgImageUrl('og-reviews.jpg')} />

        {/* Robots */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />

        {/* AggregateRating Schema for rich snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'DIY Solar Consultants',
              url: 'https://diysolarconsultants.com',
              telephone: '+1-888-555-1234',
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                bestRating: '5',
                ratingCount: '3247',
                reviewCount: '3247',
              },
              review: displayedTestimonials.slice(0, 5).map((t) => ({
                '@type': 'Review',
                author: { '@type': 'Person', name: t.name || t.author },
                reviewRating: {
                  '@type': 'Rating',
                  ratingValue: t.rating || '5',
                  bestRating: '5',
                },
                reviewBody: t.quote || t.text || t.review,
              })),
            }),
          }}
        />

        {/* Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              generateBreadcrumbSchema([
                { name: 'Home', url: '/' },
                { name: 'Reviews', url: '/reviews' },
              ])
            ),
          }}
        />
      </Head>

      <Header />
      <div className="pt-20">
        <Breadcrumbs />
      </div>

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              What Our Customers Are Saying
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join 10,000+ homeowners who have achieved energy independence with expert DIY solar guidance
            </p>

            {/* Overall Rating */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-8 h-8 fill-yellow-500 text-yellow-500"
                  />
                ))}
              </div>
              <div className="text-left">
                <p className="text-3xl font-bold">4.9/5</p>
                <p className="text-sm text-gray-600">from 3,247 reviews</p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              <div>
                <p className="text-4xl font-bold text-solar-600">10,000+</p>
                <p className="text-gray-600">Happy Customers</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-green-600">$28M+</p>
                <p className="text-gray-600">Total Savings</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-blue-600">98%</p>
                <p className="text-gray-600">Would Recommend</p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <StatsSection />

        {/* Video Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">See What Our Customers Say</h2>
              <p className="text-xl text-gray-600">
                Hear directly from homeowners who went solar with our help
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {videoTestimonials.map(video => (
                <VideoTestimonial key={video.id} {...video} />
              ))}
            </div>
          </div>
        </section>

        {/* Customer Testimonials Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Real Results from Real Customers</h2>
              <p className="text-xl text-gray-600">
                Every testimonial is from a verified customer who completed their DIY solar project
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedTestimonials.map(testimonial => (
                <TestimonialCard key={testimonial.id} {...testimonial} />
              ))}
            </div>

            {/* View More Button */}
            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">
                Showing 12 of {testimonials.length}+ customer reviews
              </p>
              <Link
                href="/portfolio"
                className="inline-flex items-center px-6 py-3 bg-solar-600 text-white rounded-lg font-semibold hover:bg-solar-700 transition-colors"
              >
                View All Success Stories
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Case Studies with ROI */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Success Stories with Real ROI</h2>
              <p className="text-xl text-gray-600">
                Detailed case studies showing system size, costs, and actual savings
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredCaseStudies.map(caseStudy => (
                <CaseStudy
                  key={caseStudy.id}
                  title={caseStudy.name}
                  location={caseStudy.stats.location}
                  systemSize={caseStudy.stats.systemSize}
                  cost={caseStudy.costs.totalDIY}
                  savings={caseStudy.system.annualSavings}
                  payback={5.1} // Average payback
                  image={caseStudy.headerImage}
                  slug={caseStudy.id}
                />
              ))}
            </div>

            {/* View More Button */}
            <div className="text-center mt-12">
              <Link
                href="/portfolio"
                className="inline-flex items-center px-6 py-3 bg-solar-600 text-white rounded-lg font-semibold hover:bg-solar-700 transition-colors"
              >
                View All Case Studies
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Why Customers Choose Us</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Average Savings</h3>
                <p className="text-4xl font-bold text-green-600 mb-2">$12,800</p>
                <p className="text-gray-600">vs traditional installers</p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Permit Approval</h3>
                <p className="text-4xl font-bold text-blue-600 mb-2">98%</p>
                <p className="text-gray-600">first-time approval rate</p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Payback Period</h3>
                <p className="text-4xl font-bold text-purple-600 mb-2">5.1 years</p>
                <p className="text-gray-600">average time to ROI</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-solar-600 to-energy-600 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Join Thousands of Satisfied Customers?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Get your free custom solar design and start saving on energy bills
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/design-request"
                className="px-8 py-4 bg-white text-solar-600 rounded-lg font-bold hover:bg-gray-100 transition-colors text-lg"
              >
                Get Free Design
              </Link>
              <Link
                href="/calculator"
                className="px-8 py-4 bg-solar-500 text-white rounded-lg font-bold border-2 border-white hover:bg-solar-400 transition-colors text-lg"
              >
                Calculate My Savings
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
