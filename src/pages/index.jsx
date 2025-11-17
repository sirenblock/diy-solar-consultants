import Head from 'next/head'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
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

  const faqs = [
    {
      question: 'How much can I really save going DIY?',
      answer:
        '40-60% on average, $12,000-$18,000 for typical residential systems',
    },
    {
      question: 'Do you provide engineering stamps?',
      answer: 'Yes, licensed PEs in all 50 states',
    },
    {
      question: 'What if my permit gets rejected?',
      answer: '98% approval rate, free revisions if needed',
    },
  ]

  return (
    <>
      <Head>
        <title>DIY Solar Design & Permitting Services | DIY Solar Consultants</title>
        <meta
          name="description"
          content="Professional solar system design, permitting, and equipment sourcing for DIY homeowners. Save 40-60% with expert guidance. Licensed PE | NABCEP Certified | 98% approval rate."
        />
        <meta
          name="keywords"
          content="DIY solar design, solar permit package, professional solar design, DIY solar installation, solar system design services, solar permitting help, solar engineering services"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="DIY Solar Design & Permitting Services | DIY Solar Consultants"
        />
        <meta
          property="og:description"
          content="Professional solar system design, permitting, and equipment sourcing for DIY homeowners. Save 40-60% with expert guidance."
        />
        <meta property="og:site_name" content="DIY Solar Consultants" />

        {/* Schema.org markup for LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'DIY Solar Consultants',
              description:
                'Professional solar design, permitting, and equipment sourcing services for DIY homeowners',
              telephone: '+1-888-555-1234',
              email: 'info@diysolarcosnultants.com',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'US',
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                reviewCount: '5000',
              },
              priceRange: '$$',
            }),
          }}
        />
      </Head>

      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-solar-50 via-white to-energy-50 overflow-hidden">
          <div className="section-container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="heading-xl mb-6">
                Expert Solar Design &{' '}
                <span className="text-solar-600">Permitting Services</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 mb-8 leading-relaxed">
                Professional solar design for DIY homeowners. Save 40-60% on
                installation costs with expert guidance.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link href="/design-request" className="btn-primary text-lg">
                  Get Your Solar Design
                </Link>
                <Link href="/calculator" className="btn-secondary text-lg">
                  Calculate System Size
                </Link>
              </div>

              {/* Trust Badge Strip */}
              <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-sm sm:text-base text-gray-700 border-t border-b border-gray-200 py-6">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-energy-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-semibold">Licensed PE</span>
                </div>
                <div className="hidden sm:block text-gray-300">|</div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-energy-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-semibold">NABCEP Certified</span>
                </div>
                <div className="hidden sm:block text-gray-300">|</div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-energy-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-semibold">5,000+ Systems</span>
                </div>
                <div className="hidden sm:block text-gray-300">|</div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-energy-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-semibold">98% Approval Rate</span>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 -mt-40 -mr-40 w-80 h-80 bg-solar-200 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -mb-40 -ml-40 w-80 h-80 bg-energy-200 rounded-full opacity-20 blur-3xl"></div>
        </section>

        {/* Value Propositions Section */}
        <section className="section-container bg-white">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Why DIY Solar Consultants?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional expertise without the installation markup
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {valueProps.map((prop, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-xl hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-solar-100 text-solar-600">
                  {prop.icon}
                </div>
                <h3 className="heading-sm mb-4">{prop.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {prop.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Key Statistics Section */}
        <section className="section-container bg-gradient-to-br from-solar-600 to-solar-700 text-white">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">By the Numbers</h2>
            <p className="text-xl text-solar-100">
              Proven track record of excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold mb-2 text-white">
                  {stat.number}
                </div>
                <div className="text-sm lg:text-base text-solar-100">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Overview Grid */}
        <section className="section-container bg-gray-50">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need for your DIY solar project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="text-solar-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
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
              </div>
            ))}
          </div>
        </section>

        {/* Process Summary Section */}
        <section className="section-container bg-white">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">
              Professional solar design made simple
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-solar-300 to-solar-200"></div>
                )}

                <div className="relative bg-white p-6 rounded-xl border-2 border-solar-100 hover:border-solar-300 transition-colors text-center">
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
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="section-container bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              Trusted by DIY Homeowners Nationwide
            </h2>
            <p className="text-xl text-gray-600">
              Real results from real customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-gray-900">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-600">
                    {testimonial.location} • {testimonial.system}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="section-container bg-gradient-to-br from-solar-600 via-solar-700 to-solar-800 text-white">
          <div className="max-w-4xl mx-auto text-center">
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
          </div>
        </section>

        {/* FAQ Snippet Section */}
        <section className="section-container bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-4">Common Questions</h2>
              <p className="text-xl text-gray-600">
                Quick answers to help you get started
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-solar-300 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
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
