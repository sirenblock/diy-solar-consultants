import Head from 'next/head'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TrustBadges from '@/components/TrustBadges'
import CustomerCounter from '@/components/CustomerCounter'
import TestimonialCarousel from '@/components/TestimonialCarousel'
import FAQSection from '@/components/FAQSection'
import QuickCalculator from '@/components/QuickCalculator'
import { IconCard, Card, StatCard } from '@/components/Card'
import { FadeIn, FadeInScale, StaggerChildren } from '@/components/animations'
import useScrollTracking from '@/hooks/useScrollTracking'
import {
  generateLocalBusinessSchema,
  generateOrganizationSchema,
  generateBreadcrumbSchema,
  generateSchemaGraph
} from '@/utils/schema'
import { homepageFAQs } from '@/data/serviceFAQs'

export default function Home() {
  // Track scroll depth on home page
  useScrollTracking();
  const valueProps = [
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: '40-60% Cost Savings',
      description:
        'Professional expertise without installation markup. Get the same quality design at a fraction of the cost.',
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: '98% Permit Approval Rate',
      description:
        'Licensed Professional Engineers in all 50 states. We get it right the first time.',
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
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
      ),
      title: '5,000+ Systems Designed',
      description:
        '25+ years of combined experience. We\'ve designed systems in every state and every condition.',
    },
  ]

  const stats = [
    { number: '5,000+', label: 'Systems Designed' },
    { number: '98%', label: 'First-Time Approval Rate' },
    { number: '40-60%', label: 'Average Cost Savings' },
    { number: '50', label: 'States Covered' },
    { number: '25+', label: 'Years Experience' },
    { number: '100%', label: 'DIY-Friendly Support' },
  ]

  const services = [
    {
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      title: 'Solar System Design',
      description:
        'Custom system sizing, panel placement, production estimates, and ROI analysis',
      link: '/services#design',
    },
    {
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      title: 'Permitting Plansets',
      description:
        'Professional engineering stamps, electrical diagrams, and AHJ-specific documentation',
      link: '/services#permitting',
    },
    {
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
      ),
      title: 'Equipment Sourcing',
      description:
        'Tier-1 solar panels, inverters, batteries, and mounting systems at 15-30% savings',
      link: '/services#equipment',
    },
    {
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
      title: 'Technical Consulting',
      description:
        'Installation guidance, troubleshooting, and code compliance verification',
      link: '/services#consulting',
    },
    {
      icon: (
        <svg
          className="w-10 h-10"
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
      ),
      title: 'System Sizing Calculator',
      description:
        'Free interactive tool to estimate your system size, costs, and savings',
      link: '/calculator',
    },
    {
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: 'Battery Storage Design',
      description:
        'Tesla Powerwall, Enphase, LG, and Generac battery system design and integration',
      link: '/services#battery',
    },
  ]

  const process = [
    {
      step: '1',
      title: 'Consultation',
      description: 'We assess your energy needs, site conditions, and goals',
      timeline: '30-60 minutes',
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      ),
    },
    {
      step: '2',
      title: 'Design',
      description:
        'Our engineers create a custom solar system tailored to your property',
      timeline: '5-7 business days',
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
          />
        </svg>
      ),
    },
    {
      step: '3',
      title: 'Permitting',
      description: 'We prepare all necessary documentation for permit approval',
      timeline: 'Included in design',
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      step: '4',
      title: 'Support',
      description: 'We provide guidance throughout your DIY installation',
      timeline: 'Ongoing',
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
    },
  ]

  const testimonials = [
    {
      quote:
        'The design was incredibly detailed and the permit was approved on first submission. Saved me $18,000 doing the install myself!',
      author: 'John M.',
      location: 'Texas',
      system: '8kW residential system',
    },
    {
      quote:
        'I\'m technically capable but needed the engineering expertise. DIY Solar Consultants provided exactly that - professional design without the installation markup.',
      author: 'Sarah L.',
      location: 'Colorado',
      system: '12kW with battery',
    },
    {
      quote:
        'Their equipment sourcing saved me another 20% on top of the DIY savings. The whole process was smooth and professional.',
      author: 'Mike R.',
      location: 'Florida',
      system: '6kW residential',
    },
  ]

  return (
    <>
      <Head>
        <title>Professional Solar System Design for DIY | DIY Solar</title>
        <meta
          name="description"
          content="Expert solar design & permitting for DIY installers. Save 40-60% on installation. Licensed PE engineers, 98% permit approval rate. Get started today!"
        />
        <meta
          name="keywords"
          content="DIY solar design, solar permit package, professional solar design, DIY solar installation, solar system design services, solar permitting help, solar engineering services"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://diysolar.com" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://diysolar.com" />
        <meta
          property="og:title"
          content="Save 40-60% on Solar with Professional Design"
        />
        <meta
          property="og:description"
          content="Professional solar system design & permitting for DIY homeowners. Licensed PE engineers. 98% approval rate. 5,000+ systems designed."
        />
        <meta property="og:site_name" content="DIY Solar Consultants" />
        <meta property="og:image" content="https://diysolar.com/images/og-home.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="DIY Solar Consultants - Professional Solar Design Services" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Save 40-60% on Solar with Professional Design" />
        <meta
          name="twitter:description"
          content="Professional solar system design & permitting for DIY homeowners. Licensed PE engineers. 98% approval rate."
        />
        <meta name="twitter:image" content="https://diysolar.com/images/og-home.jpg" />
        <meta name="twitter:image:alt" content="DIY Solar Consultants - Professional Solar Design Services" />

        {/* Robots */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />

        {/* Enhanced Schema.org markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              generateSchemaGraph([
                generateLocalBusinessSchema(),
                generateOrganizationSchema(),
                generateBreadcrumbSchema([
                  { name: 'Home', url: '/' }
                ])
              ])
            )
          }}
        />
      </Head>

      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 bg-gradient-to-br from-gray-50 via-white to-solar-50 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="relative max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-solar-700 to-energy-700 bg-clip-text text-transparent leading-tight animate-fade-in">
              Professional Solar Design<br />for DIY Homeowners
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Licensed PE engineers help you save 40-60% on solar installation. Get your custom design in 5-7 days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/design-request" className="px-8 py-4 bg-gradient-to-r from-solar-600 to-energy-600 text-white rounded-xl font-bold text-lg shadow-2xl shadow-solar-600/30 hover:shadow-solar-600/50 hover:-translate-y-1 transition-all">
                Get Free Quote →
              </Link>
              <Link href="/calculator" className="px-8 py-4 bg-white border-2 border-gray-300 text-gray-800 rounded-xl font-bold text-lg hover:border-solar-600 hover:text-solar-600 transition-all">
                Calculate Savings
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold text-gray-700">5,000+ Systems Designed</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold text-gray-700">98% Approval Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold text-gray-700">Licensed in 50 States</span>
              </div>
            </div>
          </div>
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 -mt-40 -mr-40 w-80 h-80 bg-solar-200 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -mb-40 -ml-40 w-80 h-80 bg-energy-200 rounded-full opacity-20 blur-3xl"></div>
        </section>

        {/* Trust Badges Section */}
        <section className="section-container bg-white">
          <FadeIn>
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Trusted & Certified Professionals
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Industry-leading credentials and proven track record
              </p>
            </div>
          </FadeIn>
          <FadeInScale delay={0.2}>
            <TrustBadges variant="horizontal" />
          </FadeInScale>
        </section>

        {/* Value Propositions Section */}
        <section className="section-container bg-gray-50">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="heading-lg mb-4">Why DIY Solar Consultants?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professional expertise without the installation markup. When you choose to{' '}
                <Link href="/process" className="text-solar-600 hover:text-solar-700 underline font-semibold">
                  work with our team
                </Link>
                , you get licensed engineers without paying installer prices.
              </p>
            </div>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {valueProps.map((prop, index) => (
              <IconCard
                key={index}
                icon={prop.icon}
                title={prop.title}
                description={prop.description}
              />
            ))}
          </StaggerChildren>
        </section>

        {/* Customer Counter Section */}
        <section className="section-container bg-gray-50">
          <CustomerCounter />
        </section>

        {/* Services Overview Grid */}
        <section className="section-container bg-gray-50">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="heading-lg mb-4">Our Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need for your DIY solar project. From{' '}
                <Link href="/services#design" className="text-solar-600 hover:text-solar-700 underline">
                  professional system design
                </Link>
                {' '}to{' '}
                <Link href="/services#permitting" className="text-solar-600 hover:text-solar-700 underline">
                  permit-ready plansets
                </Link>
                {' '}and{' '}
                <Link href="/equipment" className="text-solar-600 hover:text-solar-700 underline">
                  equipment sourcing
                </Link>
                .
              </p>
            </div>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" staggerDelay={0.08}>
            {services.map((service, index) => (
              <IconCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              >
                <Link
                  href={service.link}
                  className="inline-flex items-center text-solar-600 hover:text-solar-700 font-semibold transition-colors"
                >
                  Learn More
                  <svg
                    className="w-5 h-5 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </IconCard>
            ))}
          </StaggerChildren>
        </section>

        {/* Process Summary Section */}
        <section className="section-container bg-white">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="heading-lg mb-4">How It Works</h2>
              <p className="text-xl text-gray-600">
                Professional solar design made simple. Learn more about{' '}
                <Link href="/process" className="text-solar-600 hover:text-solar-700 underline font-semibold">
                  our proven process
                </Link>
                {' '}and{' '}
                <Link href="/pricing" className="text-solar-600 hover:text-solar-700 underline font-semibold">
                  transparent pricing
                </Link>
                .
              </p>
            </div>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.12}>
            {process.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-solar-300 to-solar-200"></div>
                )}

                <Card variant="outlined" className="relative text-center hover:border-solar-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-solar-600 text-white font-bold text-2xl relative z-10">
                    {step.step}
                  </div>
                  <div className="text-solar-600 mb-3 flex justify-center">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-3 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="inline-block px-3 py-1 bg-solar-50 text-solar-700 text-sm font-semibold rounded-full">
                    {step.timeline}
                  </div>
                </Card>
              </div>
            ))}
          </StaggerChildren>
        </section>

        {/* Social Proof Section */}
        <section className="section-container bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">
              Trusted by DIY Homeowners Nationwide
            </h2>
            <p className="text-xl text-gray-600">
              Real results from verified customers
            </p>
          </div>

          <TestimonialCarousel />
        </section>

        {/* Quick Calculator Lead Magnet */}
        <section className="section-container bg-white">
          <FadeInScale className="max-w-4xl mx-auto">
            <QuickCalculator />
          </FadeInScale>
        </section>

        {/* Call-to-Action Section */}
        <section className="section-container bg-gradient-to-br from-solar-600 via-solar-700 to-solar-800 text-white">
          <FadeIn className="max-w-4xl mx-auto text-center">
            <h2 className="heading-lg mb-6">Ready to Start Your Solar Project?</h2>
            <p className="text-xl mb-8 text-solar-100 leading-relaxed">
              Get a professional solar design and start saving on your energy
              bills
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="/design-request"
                className="px-8 py-4 bg-white hover:bg-gray-50 text-solar-700 font-bold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl text-lg"
              >
                Request Design Quote
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 bg-solar-500 hover:bg-solar-400 text-white font-bold rounded-lg border-2 border-white transition-colors duration-200 text-lg"
              >
                Contact Us
              </Link>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-solar-100">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Free consultation
              </div>
              <div className="text-solar-300">•</div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                No obligation
              </div>
              <div className="text-solar-300">•</div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                5-7 day turnaround
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Quick Answers Section with Schema Markup */}
        <section className="section-container bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <FAQSection
              questions={homepageFAQs}
              generateSchema={true}
              title="Quick Answers"
              description="Get answers to the most common questions about DIY solar design, installation, and our services."
            />

            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">
                Have more questions?{' '}
                <Link href="/faq" className="text-solar-600 hover:text-solar-700 underline font-semibold">
                  Visit our FAQ page
                </Link>
                {' '}or{' '}
                <Link href="/contact" className="text-solar-600 hover:text-solar-700 underline font-semibold">
                  contact our team
                </Link>
                .
              </p>
              <Link
                href="/faq"
                className="inline-flex items-center text-solar-600 hover:text-solar-700 font-semibold text-lg transition-colors"
              >
                View All FAQs
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
