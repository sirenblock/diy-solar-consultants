import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Accordion from '../components/Accordion';
import { faqData, faqCategories } from '../data/faqData';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [openAccordionId, setOpenAccordionId] = useState(null);
  const [activeCategory, setActiveCategory] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const categoryRefs = useRef({});

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  // Filter FAQs based on search term
  const filteredFaqs = debouncedSearchTerm
    ? faqData.filter(
        (faq) =>
          faq.question.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
          faq.answer.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
      )
    : faqData;

  // Group FAQs by category
  const faqsByCategory = faqCategories.map((category) => ({
    ...category,
    faqs: filteredFaqs.filter((faq) => faq.category === category.id),
  }));

  // Handle accordion toggle
  const handleToggle = (faqId) => {
    setOpenAccordionId(openAccordionId === faqId ? null : faqId);
  };

  // Handle category click - smooth scroll
  const scrollToCategory = (categoryId) => {
    const element = categoryRefs.current[categoryId];
    if (element) {
      const offset = 100; // Account for sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveCategory(categoryId);
      setIsMobileMenuOpen(false);
    }
  };

  // Track active category on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      for (const category of faqCategories) {
        const element = categoryRefs.current[category.id];
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveCategory(category.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Clear search
  const clearSearch = () => {
    setSearchTerm('');
    setDebouncedSearchTerm('');
  };

  // Generate FAQ schema for SEO
  const generateFAQSchema = () => {
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqData.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    };
  };

  return (
    <>
      <Head>
        <title>FAQ - DIY Solar Questions Answered | DIY Solar Consultants</title>
        <meta
          name="description"
          content="Get answers to common questions about DIY solar installation, design services, costs, permitting, equipment, and our process. Expert guidance from licensed PE engineers."
        />
        <meta
          name="keywords"
          content="DIY solar FAQ, solar design questions, DIY solar installation questions, solar permit questions, solar equipment questions, solar cost questions"
        />
        <link rel="canonical" href="https://diysolar.com/faq" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema()) }}
        />
      </Head>
      <Header />

      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Everything you need to know about DIY solar design and our services
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 pr-12 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300 text-lg"
                  aria-label="Search frequently asked questions"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                  {searchTerm && (
                    <button
                      onClick={clearSearch}
                      className="text-gray-400 hover:text-gray-600 focus:outline-none"
                      aria-label="Clear search"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  )}
                  <svg
                    className="w-6 h-6 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
              {debouncedSearchTerm && (
                <p className="text-sm text-blue-100 mt-2 text-left">
                  {filteredFaqs.length} result{filteredFaqs.length !== 1 ? 's' : ''} found
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Desktop Sidebar Navigation */}
            <aside className="hidden lg:block lg:w-64 flex-shrink-0">
              <div className="sticky top-24">
                <h2 className="text-lg font-bold text-gray-900 mb-4">Categories</h2>
                <nav className="space-y-1">
                  {faqCategories.map((category) => {
                    const count = faqsByCategory.find((c) => c.id === category.id)?.faqs.length || 0;
                    return (
                      <button
                        key={category.id}
                        onClick={() => scrollToCategory(category.id)}
                        className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                          activeCategory === category.id
                            ? 'bg-blue-600 text-white font-semibold'
                            : 'text-gray-700 hover:bg-gray-200'
                        } ${count === 0 ? 'opacity-50' : ''}`}
                        disabled={count === 0}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm">{category.name}</span>
                          <span className="text-xs">{count}</span>
                        </div>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </aside>

            {/* Mobile Category Dropdown */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg flex items-center justify-between text-gray-700 font-medium"
              >
                <span>
                  {activeCategory
                    ? faqCategories.find((c) => c.id === activeCategory)?.name
                    : 'Select Category'}
                </span>
                <svg
                  className={`w-5 h-5 transition-transform ${
                    isMobileMenuOpen ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isMobileMenuOpen && (
                <div className="mt-2 bg-white border border-gray-300 rounded-lg shadow-lg">
                  {faqCategories.map((category) => {
                    const count = faqsByCategory.find((c) => c.id === category.id)?.faqs.length || 0;
                    return (
                      <button
                        key={category.id}
                        onClick={() => scrollToCategory(category.id)}
                        className="w-full text-left px-4 py-3 border-b last:border-b-0 hover:bg-gray-50 transition-colors"
                        disabled={count === 0}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-700">{category.name}</span>
                          <span className="text-xs text-gray-500">{count}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* FAQ Content */}
            <div className="flex-1">
              {filteredFaqs.length === 0 ? (
                <div className="bg-white rounded-lg shadow-md p-12 text-center">
                  <svg
                    className="w-16 h-16 text-gray-300 mx-auto mb-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
                  <p className="text-gray-600 mb-6">
                    We couldn't find any FAQs matching "{debouncedSearchTerm}"
                  </p>
                  <button
                    onClick={clearSearch}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Clear Search
                  </button>
                </div>
              ) : (
                <div className="space-y-8">
                  {faqsByCategory.map((category) => {
                    if (category.faqs.length === 0) return null;

                    return (
                      <div
                        key={category.id}
                        ref={(el) => (categoryRefs.current[category.id] = el)}
                        className="scroll-mt-24"
                      >
                        <h2
                          id={category.slug}
                          className="text-2xl font-bold text-gray-900 mb-4 flex items-center"
                        >
                          <span className="w-1 h-8 bg-blue-600 mr-3 rounded"></span>
                          {category.name}
                        </h2>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                          {category.faqs.map((faq) => (
                            <Accordion
                              key={faq.id}
                              question={faq.question}
                              answer={faq.answer}
                              isOpen={openAccordionId === faq.id}
                              onToggle={() => handleToggle(faq.id)}
                              searchTerm={debouncedSearchTerm}
                            />
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="bg-white py-16 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Didn't find what you're looking for?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We're happy to answer any questions about DIY solar or our services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-md"
            >
              Contact Us
            </Link>
            <Link
              href="/design-request"
              className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors"
            >
              Schedule Consultation
            </Link>
            <Link
              href="/calculator"
              className="px-8 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors"
            >
              Try Solar Calculator
            </Link>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="bg-gray-50 py-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Related Resources
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            <Link
              href="/services"
              className="px-4 py-3 bg-white rounded-lg border border-gray-200 text-center hover:border-blue-500 hover:shadow-md transition-all"
            >
              <span className="text-sm font-medium text-gray-700">Services</span>
            </Link>
            <Link
              href="/pricing"
              className="px-4 py-3 bg-white rounded-lg border border-gray-200 text-center hover:border-blue-500 hover:shadow-md transition-all"
            >
              <span className="text-sm font-medium text-gray-700">Pricing</span>
            </Link>
            <Link
              href="/calculator"
              className="px-4 py-3 bg-white rounded-lg border border-gray-200 text-center hover:border-blue-500 hover:shadow-md transition-all"
            >
              <span className="text-sm font-medium text-gray-700">Calculator</span>
            </Link>
            <Link
              href="/design-request"
              className="px-4 py-3 bg-white rounded-lg border border-gray-200 text-center hover:border-blue-500 hover:shadow-md transition-all"
            >
              <span className="text-sm font-medium text-gray-700">Design Request</span>
            </Link>
            <Link
              href="/contact"
              className="px-4 py-3 bg-white rounded-lg border border-gray-200 text-center hover:border-blue-500 hover:shadow-md transition-all"
            >
              <span className="text-sm font-medium text-gray-700">Contact</span>
            </Link>
            <Link
              href="/resources"
              className="px-4 py-3 bg-white rounded-lg border border-gray-200 text-center hover:border-blue-500 hover:shadow-md transition-all"
            >
              <span className="text-sm font-medium text-gray-700">Resources</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
