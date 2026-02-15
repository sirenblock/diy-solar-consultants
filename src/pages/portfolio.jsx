import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { caseStudies } from '@/data/caseStudies';
import FilterBar from '@/components/FilterBar';
import CaseStudyCard from '@/components/CaseStudyCard';
import CaseStudyDetail from '@/components/CaseStudyDetail';
import StatsDisplay from '@/components/StatsDisplay';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Portfolio() {
  const [filteredStudies, setFilteredStudies] = useState(caseStudies);
  const [selectedStudy, setSelectedStudy] = useState(null);
  const [filters, setFilters] = useState({
    size: 'All',
    region: 'All',
    systemType: 'All',
    propertyType: 'All'
  });
  const [sortBy, setSortBy] = useState('recent');

  // Apply filters and sorting
  useEffect(() => {
    let result = [...caseStudies];

    // Apply filters
    if (filters.size !== 'All') {
      result = result.filter(study => study.sizeCategory === filters.size);
    }

    if (filters.region !== 'All') {
      result = result.filter(study => study.stats.region === filters.region);
    }

    if (filters.systemType !== 'All') {
      if (filters.systemType === 'Grid-tied only') {
        result = result.filter(study =>
          study.stats.type.toLowerCase().includes('grid-tied') &&
          !study.stats.type.toLowerCase().includes('battery') &&
          !study.stats.type.toLowerCase().includes('off-grid')
        );
      } else if (filters.systemType === 'Battery backup') {
        result = result.filter(study =>
          study.stats.type.toLowerCase().includes('battery') ||
          study.stats.type.toLowerCase().includes('backup')
        );
      } else if (filters.systemType === 'Off-grid') {
        result = result.filter(study => study.stats.type.toLowerCase().includes('off-grid'));
      }
    }

    if (filters.propertyType !== 'All') {
      result = result.filter(study => study.propertyType === filters.propertyType);
    }

    // Apply sorting
    switch (sortBy) {
      case 'recent':
        result.sort((a, b) => {
          const dateA = new Date(a.completedDate);
          const dateB = new Date(b.completedDate);
          return dateB - dateA;
        });
        break;
      case 'size-asc':
        result.sort((a, b) => a.stats.systemSize - b.stats.systemSize);
        break;
      case 'size-desc':
        result.sort((a, b) => b.stats.systemSize - a.stats.systemSize);
        break;
      case 'savings-desc':
        result.sort((a, b) => {
          const savingsA = typeof a.costs.savings === 'number' ? a.costs.savings : 0;
          const savingsB = typeof b.costs.savings === 'number' ? b.costs.savings : 0;
          return savingsB - savingsA;
        });
        break;
      default:
        break;
    }

    setFilteredStudies(result);
  }, [filters, sortBy]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleSortChange = (newSort) => {
    setSortBy(newSort);
  };

  const handleCardClick = (study) => {
    setSelectedStudy(study);
  };

  const handleCloseDetail = () => {
    setSelectedStudy(null);
  };

  return (
    <>
      <Head>
        <title>Solar Portfolio & Case Studies | DIY Solar Consultants</title>
        <meta
          name="description"
          content="See real solar systems designed by our engineers and installed by homeowners. From 4kW to 35kW systems across all 50 states. 98% approval rate, 40-60% savings."
        />
        <meta name="keywords" content="solar case studies, DIY solar examples, solar system portfolio, real solar installations, solar success stories, DIY solar results" />
        <link rel="canonical" href="https://diysolarconsultants.com/portfolio" />

        {/* Open Graph */}
        <meta property="og:title" content="Solar Portfolio & Case Studies | DIY Solar Consultants" />
        <meta property="og:description" content="Real solar systems designed by our engineers and installed by DIY homeowners. See the results and savings." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://diysolarconsultants.com/portfolio" />
        <meta property="og:site_name" content="DIY Solar Consultants" />
        <meta property="og:image" content="https://diysolarconsultants.com/images/og-portfolio.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Solar Portfolio & Case Studies | DIY Solar Consultants" />
        <meta name="twitter:description" content="Real solar systems designed by our engineers and installed by DIY homeowners. See results and savings." />

        {/* Robots */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        {/* Schema.org markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'CollectionPage',
              name: 'Solar Portfolio & Case Studies',
              description: 'Real solar system installations designed by DIY Solar Consultants',
              provider: {
                '@type': 'Organization',
                name: 'DIY Solar Consultants',
                aggregateRating: {
                  '@type': 'AggregateRating',
                  ratingValue: '4.9',
                  reviewCount: '5000'
                }
              }
            })
          }}
        />
      </Head>
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 bg-gradient-to-br from-solar-600 via-solar-700 to-energy-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Solar <span className="bg-gradient-to-r from-yellow-300 to-energy-200 bg-clip-text text-transparent">Success Stories</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Real systems designed by our engineers, installed by homeowners like you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/design-request" className="px-8 py-4 bg-white text-solar-700 rounded-xl font-bold text-lg shadow-2xl hover:shadow-white/30 hover:-translate-y-1 transition-all">
              Start Your Project →
            </Link>
            <Link href="/calculator" className="px-8 py-4 bg-solar-700 border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-solar-800 transition-all">
              Calculate System Size
            </Link>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto bg-white/10 backdrop-blur rounded-lg p-6">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">5,000+</div>
              <div className="text-sm text-white/80">Systems Designed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">All 50</div>
              <div className="text-sm text-white/80">States</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">$50M+</div>
              <div className="text-sm text-white/80">Savings Delivered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-container bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            Every project is unique. Here are real examples of solar systems we've designed for DIY homeowners
            across the country. From small residential installations to large commercial projects, these case
            studies demonstrate what's possible when you combine professional engineering with DIY installation.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <FilterBar onFilterChange={handleFilterChange} onSortChange={handleSortChange} />

      {/* Case Studies Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Results count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-gray-900">{filteredStudies.length}</span> case{' '}
            {filteredStudies.length === 1 ? 'study' : 'studies'}
          </p>
        </div>

        {/* Grid */}
        {filteredStudies.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredStudies.map((study) => (
              <CaseStudyCard
                key={study.id}
                caseStudy={study}
                onClick={() => handleCardClick(study)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <svg
              className="w-16 h-16 text-gray-300 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No case studies found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your filters to see more results</p>
          </div>
        )}
      </section>

      {/* Aggregate Stats Section */}
      <StatsDisplay />

      {/* Testimonials Section */}
      <section className="section-container bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="heading-lg text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600">
            Hear from homeowners who've successfully completed their solar projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-700 mb-4 italic">
              "The design was more detailed than I expected. Every wire size, every connection point, every code
              requirement - all documented perfectly."
            </p>
            <p className="font-semibold text-gray-900">John M.</p>
            <p className="text-sm text-gray-500">Austin, TX</p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-700 mb-4 italic">
              "We saved $21,500 and got exactly the system we wanted. The support during installation was
              invaluable."
            </p>
            <p className="font-semibold text-gray-900">Sarah L.</p>
            <p className="text-sm text-gray-500">Denver, CO</p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-700 mb-4 italic">
              "I was nervous about DIY solar, but the process was smoother than expected. Worth every minute of
              effort."
            </p>
            <p className="font-semibold text-gray-900">Mike R.</p>
            <p className="text-sm text-gray-500">Tampa, FL</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-container bg-gradient-to-br from-solar-600 to-energy-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-lg mb-4">Ready to Create Your Own Success Story?</h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of homeowners who've successfully gone solar with our professional design services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-solar-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors text-lg shadow-lg">
              Request Your Design Quote
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-lg">
              Calculate Your System Size
            </button>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>98% approval rate</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Licensed PE</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>All 50 states</span>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Detail Modal */}
      {selectedStudy && (
        <CaseStudyDetail caseStudy={selectedStudy} onClose={handleCloseDetail} />
      )}
    <Footer />

    </>
  );
}
