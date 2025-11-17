import { useState } from 'react';
import Head from 'next/head';
import ResourceCard from '../components/ResourceCard';
import DownloadModal from '../components/DownloadModal';
import SearchFilter from '../components/SearchFilter';
import { resources, resourceCategories, getFeaturedResources, getResourcesByCategory } from '../data/resources';
import { statesData, getAllStates } from '../data/stateInfo';
import { blogArticles } from '../data/blogArticles';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Resources() {
  const [filteredResources, setFilteredResources] = useState(resources);
  const [downloadModalResource, setDownloadModalResource] = useState(null);
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const handleFilterChange = (filters) => {
    let filtered = [...resources];

    // Apply search query
    if (filters.searchQuery && filters.searchQuery.trim()) {
      const query = filters.searchQuery.toLowerCase();
      filtered = filtered.filter(
        (r) =>
          r.title.toLowerCase().includes(query) ||
          r.description.toLowerCase().includes(query) ||
          r.tags?.some((tag) => tag.toLowerCase().includes(query)) ||
          r.summary?.toLowerCase().includes(query)
      );
    }

    // Apply category filter
    if (filters.category && filters.category !== 'all') {
      filtered = filtered.filter((r) => r.category === filters.category);
    }

    // Apply difficulty filter
    if (filters.difficulty && filters.difficulty !== 'all') {
      filtered = filtered.filter((r) => r.difficulty === filters.difficulty);
    }

    // Apply format filter
    if (filters.format && filters.format !== 'all') {
      filtered = filtered.filter((r) => r.format?.includes(filters.format));
    }

    // Apply sorting
    if (filters.sortBy) {
      switch (filters.sortBy) {
        case 'featured':
          filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
          break;
        case 'recent':
          filtered.sort((a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated));
          break;
        case 'title':
          filtered.sort((a, b) => a.title.localeCompare(b.title));
          break;
        case 'popular':
          // In production, this would sort by actual popularity metrics
          filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
          break;
        default:
          break;
      }
    }

    setFilteredResources(filtered);
  };

  const handleDownload = (resource) => {
    setDownloadModalResource(resource);
    setIsDownloadModalOpen(true);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // In production, this would send to your email service
    console.log('Newsletter signup:', newsletterEmail);
    setNewsletterSubmitted(true);
    setTimeout(() => {
      setNewsletterEmail('');
      setNewsletterSubmitted(false);
    }, 3000);
  };

  const featuredResources = getFeaturedResources();

  return (
    <>
      <Head>
        <title>Free DIY Solar Resources, Guides & Tools | DIY Solar Consultants</title>
        <meta
          name="description"
          content="Comprehensive library of DIY solar guides, calculators, checklists, and tutorials. Free installation guides, permitting checklists, equipment comparisons, and more from licensed PE engineers."
        />
        <meta name="keywords" content="DIY solar guides, solar installation guide, solar permitting checklist, solar calculator, solar equipment guide, free solar resources, solar planning tools" />
        <meta property="og:title" content="Free DIY Solar Resources & Guides | DIY Solar Consultants" />
        <meta property="og:description" content="Everything you need to successfully plan, design, and install your solar system. Comprehensive guides from licensed professionals." />
        <meta property="og:type" content="website" />
      </Head>
      <Header />

      <div className="pt-20 min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-solar-600 via-solar-500 to-energy-500 text-white">
          <div className="section-container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="heading-xl mb-6">
                DIY Solar Resources & Guides
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-solar-50">
                Everything you need to successfully plan, design, and install your solar system
              </p>

              {/* Quick Search */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Quick search resources..."
                    onChange={(e) => handleFilterChange({ searchQuery: e.target.value })}
                    className="w-full px-6 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-4 focus:ring-white/30 focus:outline-none text-lg"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2">
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => {
                    const freePlanningGuide = resources.find(r => r.id === 'solar-planning-checklist');
                    if (freePlanningGuide) handleDownload(freePlanningGuide);
                  }}
                  className="btn-secondary bg-white hover:bg-gray-50 text-solar-600 inline-flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download Free Solar Planning Guide
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="bg-white border-b border-gray-200">
          <div className="section-container py-12">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you're just starting to research solar or actively installing your system, we've compiled the most comprehensive collection of DIY solar resources. All guides are created by our <strong>licensed Professional Engineers</strong> and <strong>NABCEP-certified professionals</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Search & Filters */}
        <section className="section-container">
          <SearchFilter onFilterChange={handleFilterChange} categories={resourceCategories} />

          {/* Results Count */}
          <div className="mb-6 flex items-center justify-between">
            <p className="text-gray-600">
              Showing <strong>{filteredResources.length}</strong> {filteredResources.length === 1 ? 'resource' : 'resources'}
            </p>
          </div>

          {/* Resources Grid */}
          {filteredResources.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {filteredResources.map((resource) => (
                <ResourceCard
                  key={resource.id}
                  resource={resource}
                  onDownload={handleDownload}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No resources found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your filters or search terms</p>
              <button
                onClick={() => handleFilterChange({ searchQuery: '', category: 'all', difficulty: 'all', format: 'all', sortBy: 'featured' })}
                className="btn-primary"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </section>

        {/* Featured Resources Section */}
        <section className="bg-gradient-to-br from-solar-50 to-energy-50 border-y border-solar-100">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="heading-lg text-gray-900 mb-4">Featured Resources</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our most popular and comprehensive guides to help you succeed with your DIY solar project
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredResources.slice(0, 6).map((resource) => (
                <ResourceCard
                  key={resource.id}
                  resource={resource}
                  onDownload={handleDownload}
                />
              ))}
            </div>
          </div>
        </section>

        {/* State Information Preview */}
        <section className="bg-white">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="heading-lg text-gray-900 mb-4">State-Specific Solar Information</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Select your state to see permitting requirements, incentives, and solar potential
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {getAllStates().slice(0, 10).map((state) => (
                <div
                  key={state.id}
                  className="bg-white border-2 border-gray-200 rounded-lg p-4 hover:border-solar-500 hover:shadow-lg transition-all cursor-pointer text-center"
                >
                  <div className="text-3xl mb-2">☀️</div>
                  <h3 className="font-semibold text-gray-900">{state.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{state.abbreviation}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-600">
                ...and {getAllStates().length - 10} more states. We serve all 50 states!
              </p>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-gradient-to-br from-solar-600 to-solar-700 text-white">
          <div className="section-container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="heading-md mb-4">Stay Updated with Solar Resources</h2>
              <p className="text-xl text-solar-100 mb-8">
                Get new guides, calculators, and articles delivered to your inbox monthly
              </p>

              {!newsletterSubmitted ? (
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="flex-1 px-6 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-4 focus:ring-white/30 focus:outline-none"
                  />
                  <button type="submit" className="btn-secondary bg-white hover:bg-gray-50 text-solar-600 px-8 py-4">
                    Subscribe
                  </button>
                </form>
              ) : (
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <svg className="w-12 h-12 text-green-300 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-xl font-semibold">Thanks for subscribing!</p>
                  <p className="text-solar-100 mt-2">Check your inbox for a confirmation email.</p>
                </div>
              )}

              <p className="text-sm text-solar-200 mt-4">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gray-900 text-white">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="heading-lg mb-6">Ready to Start Your Solar Project?</h2>
              <p className="text-xl text-gray-300 mb-8">
                These resources are helpful, but nothing beats professional design tailored to your property
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/design-request" className="btn-primary">
                  Get Professional Design
                </a>
                <a href="/calculator" className="btn-secondary border-white text-white hover:bg-white hover:text-gray-900">
                  Calculate Your System
                </a>
                <a href="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-gray-900">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Download Modal */}
      <DownloadModal
        resource={downloadModalResource}
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
      />
    </>
  );
}
