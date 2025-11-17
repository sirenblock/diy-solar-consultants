import Head from 'next/head'
import ContactForm from '@/components/ContactForm'
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us - DIY Solar Design & Permitting | DIY Solar Consultants</title>
        <meta
          name="description"
          content="Get in touch with our licensed PE solar engineers. Ask questions about solar design, permitting, equipment, or DIY installation. We respond within 24 hours."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph / Social Media */}
        <meta property="og:title" content="Contact Us - DIY Solar Consultants" />
        <meta property="og:description" content="Get in touch with our licensed PE solar engineers. We respond within 24 hours." />
        <meta property="og:type" content="website" />

        {/* Schema.org markup for ContactPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "mainEntity": {
                "@type": "Organization",
                "name": "DIY Solar Consultants",
                "url": "https://diysolar.com",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+1-555-555-1234",
                  "email": "info@diysolar.com",
                  "contactType": "Customer Service",
                  "availableLanguage": "English",
                  "areaServed": "US",
                  "hoursAvailable": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    "opens": "09:00",
                    "closes": "18:00"
                  }
                },
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "US"
                }
              }
            })
          }}
        />
      </Head>
      <Header />

      {/* Hero Section */}
      <section className="pt-20 relative bg-gradient-to-br from-solar-600 via-solar-700 to-solar-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/patterns/solar-panel-pattern.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

        <div className="relative section-container py-20 sm:py-24 lg:py-28">
          <div className="max-w-3xl">
            <h1 className="heading-xl text-white mb-6">
              Get in Touch
            </h1>
            <p className="text-xl sm:text-2xl text-solar-100 leading-relaxed">
              Have questions about solar design or DIY installation? We&apos;re here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content - Two Column Layout */}
      <section className="section-container">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left Column - Contact Form (60% / 3 columns) */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          {/* Right Column - Contact Info & Details (40% / 2 columns) */}
          <div className="lg:col-span-2 space-y-8">

            {/* Contact Information */}
            <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8">
              <h3 className="heading-sm text-gray-900 mb-6">Contact Information</h3>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-solar-100 text-solar-600">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-semibold text-gray-900 mb-1">Email</p>
                    <a href="mailto:info@diysolar.com" className="text-solar-600 hover:text-solar-700 font-medium">
                      info@diysolar.com
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Best for detailed questions and project inquiries</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-solar-100 text-solar-600">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-semibold text-gray-900 mb-1">Phone</p>
                    <a href="tel:+15555551234" className="text-solar-600 hover:text-solar-700 font-medium">
                      (555) 555-1234
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Available Monday-Friday, 9am-6pm EST</p>
                  </div>
                </div>

                {/* Response Time */}
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-energy-100 text-energy-600">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-semibold text-gray-900 mb-1">Response Time</p>
                    <p className="font-medium text-gray-900">Within 24 hours</p>
                    <p className="text-sm text-gray-500 mt-1">Most inquiries answered same business day</p>
                  </div>
                </div>
              </div>
            </div>

            {/* What to Expect */}
            <div className="bg-gradient-to-br from-solar-50 to-solar-100 rounded-xl shadow-lg p-6 lg:p-8">
              <h3 className="heading-sm text-gray-900 mb-6">What Happens Next?</h3>

              <div className="space-y-5">
                {/* Step 1 */}
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-solar-600 text-white font-bold text-sm">
                      1
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900 mb-1">We Review Your Message</h4>
                    <p className="text-sm text-gray-600">Our team reviews your inquiry and gathers relevant information</p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-solar-600 text-white font-bold text-sm">
                      2
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900 mb-1">Initial Response (24 hours)</h4>
                    <p className="text-sm text-gray-600">We respond with answers, next steps, or schedule a consultation</p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-solar-600 text-white font-bold text-sm">
                      3
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900 mb-1">Free Consultation</h4>
                    <p className="text-sm text-gray-600">If interested, we schedule a detailed consultation to discuss your project</p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-solar-600 text-white font-bold text-sm">
                      4
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900 mb-1">Custom Proposal</h4>
                    <p className="text-sm text-gray-600">We provide a tailored quote and timeline for your solar project</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Signals */}
            <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8">
              <h3 className="heading-sm text-gray-900 mb-6">Why Choose Us?</h3>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-solar-600 mb-1">Licensed</div>
                  <div className="text-xs text-gray-600">PE Engineers</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-solar-600 mb-1">NABCEP</div>
                  <div className="text-xs text-gray-600">Certified</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-solar-600 mb-1">5,000+</div>
                  <div className="text-xs text-gray-600">Systems Designed</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-solar-600 mb-1">98%</div>
                  <div className="text-xs text-gray-600">Approval Rate</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-solar-600 mb-1">All 50</div>
                  <div className="text-xs text-gray-600">States</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-solar-600 mb-1">25+</div>
                  <div className="text-xs text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8">
              <h3 className="heading-sm text-gray-900 mb-6">Helpful Resources</h3>

              <div className="space-y-3">
                <a href="/calculator" className="flex items-center p-3 hover:bg-solar-50 rounded-lg transition-colors group">
                  <svg className="h-5 w-5 text-solar-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <div className="font-medium text-gray-900 group-hover:text-solar-600">Solar Calculator</div>
                    <div className="text-sm text-gray-500">Estimate your system size</div>
                  </div>
                </a>

                <a href="/design-request" className="flex items-center p-3 hover:bg-solar-50 rounded-lg transition-colors group">
                  <svg className="h-5 w-5 text-solar-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <div>
                    <div className="font-medium text-gray-900 group-hover:text-solar-600">Design Request Form</div>
                    <div className="text-sm text-gray-500">Ready to start? Skip ahead</div>
                  </div>
                </a>

                <a href="/faq" className="flex items-center p-3 hover:bg-solar-50 rounded-lg transition-colors group">
                  <svg className="h-5 w-5 text-solar-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <div className="font-medium text-gray-900 group-hover:text-solar-600">FAQ</div>
                    <div className="text-sm text-gray-500">Find quick answers</div>
                  </div>
                </a>

                <a href="/pricing" className="flex items-center p-3 hover:bg-solar-50 rounded-lg transition-colors group">
                  <svg className="h-5 w-5 text-solar-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <div className="font-medium text-gray-900 group-hover:text-solar-600">Pricing</div>
                    <div className="text-sm text-gray-500">View our packages</div>
                  </div>
                </a>

                <a href="/about" className="flex items-center p-3 hover:bg-solar-50 rounded-lg transition-colors group">
                  <svg className="h-5 w-5 text-solar-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <div>
                    <div className="font-medium text-gray-900 group-hover:text-solar-600">About Us</div>
                    <div className="text-sm text-gray-500">Learn about our team</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Service Areas */}
            <div className="bg-gradient-to-br from-energy-50 to-energy-100 rounded-xl shadow-lg p-6 lg:p-8 text-center">
              <h3 className="heading-sm text-gray-900 mb-4">We Serve All 50 States</h3>
              <div className="space-y-2 text-gray-700">
                <p className="font-medium">Licensed Professional Engineers in every state</p>
                <p className="text-sm">We&apos;ve designed systems from Alaska to Florida, Maine to Hawaii</p>
              </div>

              {/* US Map Icon */}
              <div className="mt-6">
                <svg className="h-20 w-auto mx-auto text-energy-600 opacity-50" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Snippet */}
      <section className="bg-gray-50 py-16">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-lg text-center text-gray-900 mb-12">Common Questions</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-start">
                  <svg className="h-5 w-5 text-solar-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  How much does a solar design cost?
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Starting at $XXX for design-only, $XXX for design + permitting packages. Pricing varies based on system complexity and services needed.
                </p>
                <a href="/pricing" className="text-solar-600 hover:text-solar-700 font-medium text-sm inline-flex items-center">
                  View Pricing
                  <svg className="h-4 w-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-start">
                  <svg className="h-5 w-5 text-solar-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  How long does design take?
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  5-7 business days for standard residential designs. Complex projects may take 7-10 days. Expedited service available for rush projects.
                </p>
                <a href="/services" className="text-solar-600 hover:text-solar-700 font-medium text-sm inline-flex items-center">
                  Learn More
                  <svg className="h-4 w-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-start">
                  <svg className="h-5 w-5 text-solar-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                  Do you offer free consultations?
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Yes! Initial consultations are always free with no obligation. We&apos;ll discuss your project, answer questions, and provide guidance.
                </p>
                <a href="#form" className="text-solar-600 hover:text-solar-700 font-medium text-sm inline-flex items-center">
                  Contact Us
                  <svg className="h-4 w-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-start">
                  <svg className="h-5 w-5 text-solar-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  What&apos;s your permit approval rate?
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  We have a 98% first-time approval rate. Our PE-stamped designs meet all local codes and requirements, and we provide revision support if needed.
                </p>
                <a href="/process" className="text-solar-600 hover:text-solar-700 font-medium text-sm inline-flex items-center">
                  Our Process
                  <svg className="h-4 w-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="text-center">
              <a href="/faq" className="inline-flex items-center text-solar-600 hover:text-solar-700 font-semibold">
                View all FAQs
                <svg className="h-5 w-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gradient-to-br from-solar-600 to-solar-800 text-white py-16">
        <div className="section-container text-center">
          <h2 className="heading-lg text-white mb-4">Not ready to reach out yet?</h2>
          <p className="text-xl text-solar-100 mb-10 max-w-2xl mx-auto">
            Explore your options and learn more about going solar
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/calculator" className="btn-primary bg-white text-solar-600 hover:bg-gray-100 hover:text-solar-700">
              Try Solar Calculator
            </a>
            <a href="/pricing" className="btn-secondary border-white text-white hover:bg-white/10">
              View Services & Pricing
            </a>
            <a href="/portfolio" className="btn-secondary border-white text-white hover:bg-white/10">
              Read Customer Reviews
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
