import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQSection from '@/components/FAQSection';
import TrustBadges from '@/components/TrustBadges';
import { Card } from '@/components/Card';
import { PrimaryCTA, SecondaryCTA, InContentCTA, EndOfPageCTA } from '@/components/CTA';
import {
  generateServicesPageSchema,
  generateBreadcrumbSchema,
  generateSchemaGraph
} from '@/utils/schema';
import { designFAQs, permittingFAQs } from '@/data/serviceFAQs';

export default function Services() {
  const [activeService, setActiveService] = useState(null);

  const toggleService = (index) => {
    setActiveService(activeService === index ? null : index);
  };

  return (
    <>
      <Head>
        <title>Solar Design Services - PE Stamped Plans | DIY Solar Consultants</title>
        <meta
          name="description"
          content="Expert solar design, permitting & equipment sourcing for DIY installers. Licensed PE stamps in all 50 states. 98% approval rate. 5-7 day turnaround guaranteed."
        />
        <meta name="keywords" content="solar system design services, solar permit package, solar engineering services, DIY solar design, solar permitting help, solar equipment sourcing, solar technical consulting" />
        <link rel="canonical" href="https://diysolar.com/services" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://diysolar.com/services" />
        <meta property="og:title" content="Professional Solar Services for DIY Success" />
        <meta property="og:description" content="Complete solar design & permitting services. Licensed PE engineers. Equipment sourcing. Technical consulting. Everything you need to go solar DIY." />
        <meta property="og:site_name" content="DIY Solar Consultants" />
        <meta property="og:image" content="https://diysolar.com/images/og-services.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="DIY Solar Consultants Services" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Professional Solar Services for DIY Success" />
        <meta name="twitter:description" content="Complete solar design & permitting services. Licensed PE engineers. 98% approval rate. 5-7 day turnaround." />
        <meta name="twitter:image" content="https://diysolar.com/images/og-services.jpg" />
        <meta name="twitter:image:alt" content="DIY Solar Consultants Services" />

        {/* Robots */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        {/* Enhanced Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              generateSchemaGraph([
                ...generateServicesPageSchema()['@graph'],
                generateBreadcrumbSchema([
                  { name: 'Home', url: '/' },
                  { name: 'Services', url: '/services' }
                ])
              ])
            )
          }}
        />
      </Head>
      <Header />

      <main id="main-content" className="pt-20 min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 bg-gradient-to-br from-solar-600 via-solar-700 to-solar-800 text-white overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="relative max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Save $15K+ With Expert<br /><span className="bg-gradient-to-r from-energy-300 to-yellow-200 bg-clip-text text-transparent">DIY Solar Guidance</span>
            </h1>
            <p className="text-xl md:text-2xl text-solar-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Professional designs, permit packages, and support—without the installer markup
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/design-request" className="px-8 py-4 bg-white text-solar-700 rounded-xl font-bold text-lg shadow-2xl hover:shadow-white/30 hover:-translate-y-1 transition-all">
                Get Started →
              </Link>
              <Link href="/pricing" className="px-8 py-4 bg-solar-800 border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-solar-900 transition-all">
                View Pricing
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-sm sm:text-base">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-energy-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">5,000+ Systems Designed</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-energy-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">98% Approval Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-energy-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">5-7 Day Turnaround</span>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <TrustBadges variant="horizontal" />
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Everything You Need to Go Solar on Your Terms
              </h2>
              <p className="text-lg text-gray-700">
                From professional system design to permit-ready plansets and equipment sourcing—we give you the
                expertise of big solar companies without the big price tag. Pick exactly what you need, install
                on your schedule, and save thousands.
              </p>
            </div>

            {/* Quick Navigation */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <a href="#design">
                <Card padding="sm" className="text-center">
                  <div className="text-3xl mb-2">📐</div>
                  <h3 className="font-semibold text-gray-900">System Design</h3>
                </Card>
              </a>
              <a href="#permitting">
                <Card padding="sm" className="text-center">
                  <div className="text-3xl mb-2">📋</div>
                  <h3 className="font-semibold text-gray-900">Permitting</h3>
                </Card>
              </a>
              <a href="#equipment">
                <Card padding="sm" className="text-center">
                  <div className="text-3xl mb-2">📦</div>
                  <h3 className="font-semibold text-gray-900">Equipment</h3>
                </Card>
              </a>
              <a href="#consulting">
                <Card padding="sm" className="text-center">
                  <div className="text-3xl mb-2">💡</div>
                  <h3 className="font-semibold text-gray-900">Consulting</h3>
                </Card>
              </a>
            </div>
          </div>
        </section>

        {/* Service 1: Solar System Design */}
        <section id="design" className="py-16 px-4 scroll-mt-4">
          <div className="max-w-6xl mx-auto">
            <Card variant="elevated" className="overflow-hidden p-0">
              <div className="bg-gradient-to-r from-solar-600 to-solar-700 p-8 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-5xl">📐</div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold">Get Maximum Solar Production at Minimum Cost</h2>
                    <p className="text-xl text-solar-100 mt-2">Professional PE-stamped designs that maximize your ROI and pass permitting first try</p>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <p className="text-lg text-gray-700 mb-8">
                  Skip the $15K+ installation markup. Our licensed Professional Engineers design complete solar systems
                  that give you the same quality as big solar companies, but at a fraction of the cost. Every design
                  is optimized for maximum energy production and fastest payback period.
                </p>

                {/* What's Included */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">What&apos;s Included</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      'Energy usage analysis and system sizing',
                      'Optimal panel placement and array configuration',
                      'Detailed production estimates (monthly/annual kWh)',
                      'ROI analysis and payback calculations',
                      'Equipment selection and specifications',
                      'String sizing and electrical calculations',
                      'Shade analysis and mitigation strategies',
                      'Inverter selection (string, micro, or optimizer)',
                      'Battery integration (if requested)',
                      'Detailed equipment list (bill of materials)',
                      'Installation layout drawings',
                      'Performance modeling (PVWatts or similar)',
                      'Utility interconnection requirements overview'
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <span className="text-energy-600 font-bold text-xl">✓</span>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deliverables */}
                <div className="mb-8 bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Deliverables</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-solar-600">▸</span>
                      <span>Site plan with panel layout</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-solar-600">▸</span>
                      <span>Single-line electrical diagram</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-solar-600">▸</span>
                      <span>Equipment specifications and datasheets</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-solar-600">▸</span>
                      <span>Production and financial analysis report</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-solar-600">▸</span>
                      <span>Installation guidelines</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-solar-600">▸</span>
                      <span>Digital files (PDF, CAD if needed)</span>
                    </li>
                  </ul>
                </div>

                {/* Timeline and Ideal For */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="border-l-4 border-solar-600 pl-4">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">Turnaround Time</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li><span className="font-semibold">Standard:</span> 5-7 business days</li>
                      <li><span className="font-semibold">Complex projects:</span> 7-10 business days</li>
                      <li><span className="font-semibold">Expedited service:</span> 2-3 business days (additional fee)</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-energy-600 pl-4">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">Ideal For</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• DIY homeowners starting their solar project</li>
                      <li>• Professional sizing and equipment selection needs</li>
                      <li>• Anyone wanting optimized system design</li>
                      <li>• Projects requiring production guarantees</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-solar-50 p-6 rounded-lg text-center">
                  <p className="text-2xl font-bold text-gray-900 mb-2">Starting at $XXX</p>
                  <Link href="/pricing" className="text-solar-700 hover:text-solar-800 font-semibold underline">
                    View detailed pricing →
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Service 2: Permitting Plansets */}
        <section id="permitting" className="py-16 px-4 bg-gray-50 scroll-mt-4">
          <div className="max-w-6xl mx-auto">
            <Card variant="elevated" className="overflow-hidden p-0">
              <div className="bg-gradient-to-r from-energy-600 to-energy-700 p-8 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-5xl">📋</div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold">Get Permit-Ready Plans in 5 Days</h2>
                    <p className="text-xl text-energy-100 mt-2">PE-stamped plansets that pass permitting on the first try (98% approval rate)</p>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <p className="text-lg text-gray-700 mb-8">
                  Stop wasting weeks waiting for permits. Our engineered solar designs pass permitting on the first try,
                  saving you weeks of delays and expensive revision fees. Get professional PE stamps for any jurisdiction
                  in all 50 states without the professional markup.
                </p>

                {/* What's Included */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">What&apos;s Included</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      'AHJ-specific permit documentation',
                      'Professional engineering stamp (PE seal)',
                      'Complete electrical diagrams to NEC code',
                      'Structural analysis and load calculations',
                      'Attachment and mounting details',
                      'Roof plan with dimensions',
                      'Equipment specifications and cut sheets',
                      'Three-line electrical diagram',
                      'Interconnection details',
                      'Site plan and property survey integration',
                      'Code compliance verification',
                      'Fire setback calculations (where required)',
                      'Rapid shutdown design (NEC 690.12)',
                      'Grounding and bonding details'
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <span className="text-energy-600 font-bold text-xl">✓</span>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deliverables */}
                <div className="mb-8 bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Deliverables</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-energy-600">▸</span>
                      <span>Complete permit-ready planset (PDF)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-energy-600">▸</span>
                      <span>Stamped engineering drawings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-energy-600">▸</span>
                      <span>Structural calculations (when required)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-energy-600">▸</span>
                      <span>Equipment cut sheets and specifications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-energy-600">▸</span>
                      <span>Code compliance documentation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-energy-600">▸</span>
                      <span>Wet-stamped copies (if required by AHJ)</span>
                    </li>
                  </ul>
                </div>

                {/* Timeline and Revision Policy */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="border-l-4 border-energy-600 pl-4">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">Turnaround Time</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li><span className="font-semibold">Standard:</span> Included with design (5-7 days)</li>
                      <li><span className="font-semibold">Stand-alone permitting:</span> 3-5 business days</li>
                      <li><span className="font-semibold">Expedited:</span> 1-2 business days (additional fee)</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-solar-600 pl-4">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">Revision Policy</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Free revisions for AHJ-requested changes</li>
                      <li>• 98% first-time approval rate</li>
                      <li>• We work with you until permit approved</li>
                    </ul>
                  </div>
                </div>

                {/* Ideal For */}
                <div className="mb-6 bg-energy-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Ideal For</h3>
                  <ul className="grid md:grid-cols-2 gap-2 text-gray-700">
                    <li>• Any jurisdiction requiring PE stamp</li>
                    <li>• Commercial projects</li>
                    <li>• Complex residential installations</li>
                    <li>• Areas with strict permitting requirements</li>
                    <li>• Projects requiring structural calculations</li>
                  </ul>
                </div>

                <div className="bg-energy-50 p-6 rounded-lg text-center">
                  <p className="text-2xl font-bold text-gray-900 mb-2">Starting at $XXX or included with design package</p>
                  <Link href="/pricing" className="text-energy-700 hover:text-energy-800 font-semibold underline">
                    View detailed pricing →
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Service 3: Equipment Sourcing */}
        <section id="equipment" className="py-16 px-4 scroll-mt-4">
          <div className="max-w-6xl mx-auto">
            <Card variant="elevated" className="overflow-hidden p-0">
              <div className="bg-gradient-to-r from-solar-600 to-solar-700 p-8 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-5xl">📦</div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold">Equipment Sourcing</h2>
                    <p className="text-xl text-solar-100 mt-2">Tier-1 equipment at competitive prices</p>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <p className="text-lg text-gray-700 mb-8">
                  Leverage our industry relationships to purchase high-quality solar equipment at competitive prices.
                  We source from trusted tier-1 manufacturers and help you avoid overpriced retail or questionable
                  online sellers.
                </p>

                {/* What's Included */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">What&apos;s Included</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      'Equipment recommendations based on your design',
                      'Competitive pricing from distributors',
                      'Tier-1 manufacturer equipment only',
                      'Complete bill of materials (BOM)',
                      'Equipment compatibility verification',
                      'Warranty registration assistance',
                      'Shipping coordination',
                      'Alternative options if primary choice unavailable',
                      'Updated pricing (equipment costs fluctuate)',
                      'Technical specifications and datasheets'
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <span className="text-energy-600 font-bold text-xl">✓</span>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Equipment Categories */}
                <div className="mb-8 bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Equipment Categories</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Solar Panels</h4>
                      <p className="text-sm text-gray-600">REC, Q.PEAK, Jinko, Canadian Solar, Longi</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Inverters</h4>
                      <p className="text-sm text-gray-600">SolarEdge, Enphase, SMA, Fronius, APsystems</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Mounting Systems</h4>
                      <p className="text-sm text-gray-600">IronRidge, Unirac, Quick Mount, S-5!</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Battery Storage</h4>
                      <p className="text-sm text-gray-600">Tesla Powerwall, Enphase, LG, Generac</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Balance of System</h4>
                      <p className="text-sm text-gray-600">Wire, conduit, disconnects, breakers</p>
                    </div>
                  </div>
                </div>

                {/* Pricing and Timeline */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="border-l-4 border-solar-600 pl-4">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">Pricing</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• 15-30% savings vs. retail pricing</li>
                      <li>• Transparent pricing (no hidden markups)</li>
                      <li>• Price matching on equivalent equipment</li>
                      <li>• Bulk order discounts when applicable</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-energy-600 pl-4">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">Turnaround Time</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li><span className="font-semibold">Quote:</span> 1-2 business days</li>
                      <li><span className="font-semibold">Order fulfillment:</span> Depends on manufacturer/distributor (typically 1-3 weeks)</li>
                    </ul>
                  </div>
                </div>

                {/* Ideal For */}
                <div className="mb-6 bg-solar-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Ideal For</h3>
                  <ul className="grid md:grid-cols-2 gap-2 text-gray-700">
                    <li>• Anyone purchasing equipment for DIY installation</li>
                    <li>• Those wanting verified tier-1 equipment</li>
                    <li>• Clients seeking the best price-to-quality ratio</li>
                    <li>• Projects requiring specific manufacturer warranties</li>
                  </ul>
                </div>

                <div className="bg-solar-50 p-6 rounded-lg text-center">
                  <p className="text-2xl font-bold text-gray-900 mb-2">Service Fee: $XXX or included in full package</p>
                  <Link href="/pricing" className="text-solar-700 hover:text-solar-800 font-semibold underline">
                    View detailed pricing →
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Service 4: Technical Consulting */}
        <section id="consulting" className="py-16 px-4 bg-gray-50 scroll-mt-4">
          <div className="max-w-6xl mx-auto">
            <Card variant="elevated" className="overflow-hidden p-0">
              <div className="bg-gradient-to-r from-energy-600 to-energy-700 p-8 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-5xl">💡</div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold">Technical Consulting</h2>
                    <p className="text-xl text-energy-100 mt-2">Expert guidance when you need it</p>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <p className="text-lg text-gray-700 mb-8">
                  Get professional answers to your solar questions. Whether you&apos;re troubleshooting installation issues,
                  need code clarification, or want a second opinion on design decisions, our engineers are here to help.
                </p>

                {/* What's Included */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">What&apos;s Included</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      'System design review and optimization',
                      'Installation guidance and best practices',
                      'Troubleshooting support',
                      'Code compliance verification',
                      'Utility interconnection assistance',
                      'Equipment selection advice',
                      'Performance analysis and optimization',
                      'Inverter programming guidance',
                      'Battery integration consulting',
                      'Shade mitigation strategies',
                      'String sizing verification',
                      'Safety and grounding review'
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <span className="text-energy-600 font-bold text-xl">✓</span>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Consulting Formats */}
                <div className="mb-8 bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Consulting Formats</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">📧</span>
                      <div>
                        <h4 className="font-bold text-gray-900">Email Support</h4>
                        <p className="text-sm text-gray-600">24-48 hour response time</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">📞</span>
                      <div>
                        <h4 className="font-bold text-gray-900">Phone Consultations</h4>
                        <p className="text-sm text-gray-600">Scheduled appointments</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">💻</span>
                      <div>
                        <h4 className="font-bold text-gray-900">Video Calls</h4>
                        <p className="text-sm text-gray-600">For visual troubleshooting</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">📄</span>
                      <div>
                        <h4 className="font-bold text-gray-900">Document Review</h4>
                        <p className="text-sm text-gray-600">Review and markup service</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Common Topics */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Common Topics</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      'Is my system design optimal?',
                      'How do I size my strings correctly?',
                      'What&apos;s the best inverter for my situation?',
                      'Should I add battery storage?',
                      'How do I handle this shading issue?',
                      'Is this installation method code-compliant?',
                      'Why is my system underperforming?'
                    ].map((topic, index) => (
                      <div key={index} className="bg-white p-3 rounded-lg border border-gray-200">
                        <p className="text-gray-700 italic">&quot;{topic}&quot;</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Timeline and Ideal For */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="border-l-4 border-energy-600 pl-4">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">Turnaround Time</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li><span className="font-semibold">Email responses:</span> 24-48 hours</li>
                      <li><span className="font-semibold">Scheduled consultations:</span> Within 1 week</li>
                      <li><span className="font-semibold">Urgent issues:</span> Same or next business day</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-solar-600 pl-4">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">Ideal For</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• DIY installers with specific technical questions</li>
                      <li>• Professional review of existing designs</li>
                      <li>• Troubleshooting installation or performance issues</li>
                      <li>• Anyone needing expert second opinion</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-energy-50 p-6 rounded-lg text-center">
                  <p className="text-2xl font-bold text-gray-900 mb-2">
                    Hourly rate: $XXX/hour | Email support: $XX per question
                  </p>
                  <Link href="/pricing" className="text-energy-700 hover:text-energy-800 font-semibold underline">
                    View package rates →
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Service Comparison Table */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Compare Our Service Packages
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full bg-white shadow-xl rounded-lg overflow-hidden">
                <thead className="bg-gradient-to-r from-solar-600 to-solar-700 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Feature</th>
                    <th className="px-6 py-4 text-center">Design Only</th>
                    <th className="px-6 py-4 text-center">Design + Permitting</th>
                    <th className="px-6 py-4 text-center bg-energy-600">Full Package</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { feature: 'System Design', design: true, designPermit: true, full: true },
                    { feature: 'Production Estimates', design: true, designPermit: true, full: true },
                    { feature: 'Equipment Selection', design: true, designPermit: true, full: true },
                    { feature: 'ROI Analysis', design: true, designPermit: true, full: true },
                    { feature: 'PE Stamp', design: false, designPermit: true, full: true },
                    { feature: 'Permit Planset', design: false, designPermit: true, full: true },
                    { feature: 'Structural Calcs', design: false, designPermit: true, full: true },
                    { feature: 'Equipment Sourcing', design: false, designPermit: false, full: true },
                    { feature: 'Installation Support', design: false, designPermit: false, full: true },
                  ].map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-6 py-4 font-medium text-gray-900">{row.feature}</td>
                      <td className="px-6 py-4 text-center">
                        {row.design ? (
                          <span className="text-energy-600 text-2xl font-bold">✓</span>
                        ) : (
                          <span className="text-gray-300 text-xl">-</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {row.designPermit ? (
                          <span className="text-energy-600 text-2xl font-bold">✓</span>
                        ) : (
                          <span className="text-gray-300 text-xl">-</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center bg-energy-50">
                        {row.full ? (
                          <span className="text-energy-600 text-2xl font-bold">✓</span>
                        ) : (
                          <span className="text-gray-300 text-xl">-</span>
                        )}
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-gray-100 font-bold">
                    <td className="px-6 py-4 text-gray-900">Price</td>
                    <td className="px-6 py-4 text-center text-solar-700">$XXX</td>
                    <td className="px-6 py-4 text-center text-solar-700">$XXX</td>
                    <td className="px-6 py-4 text-center text-energy-700 bg-energy-50">$XXX</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="text-center mt-8">
              <Link href="/pricing" className="inline-block bg-solar-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-solar-700 transition-colors">
                View Detailed Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
              How Our Services Work Together
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              From initial consultation to ongoing support, here&apos;s how we guide you through your solar journey
            </p>

            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-solar-300"></div>

              {/* Timeline items */}
              <div className="space-y-12">
                {[
                  {
                    step: '1',
                    title: 'Consultation',
                    time: 'Day 1',
                    description: 'Discuss needs, site conditions, and project goals',
                    icon: '🤝'
                  },
                  {
                    step: '2',
                    title: 'Design',
                    time: 'Days 2-7',
                    description: 'Create custom system design optimized for your property',
                    icon: '📐'
                  },
                  {
                    step: '3',
                    title: 'Permitting',
                    time: 'Days 5-10',
                    description: 'Prepare permit package with PE stamp (if included)',
                    icon: '📋'
                  },
                  {
                    step: '4',
                    title: 'Equipment',
                    time: 'Days 7-14',
                    description: 'Source and order equipment at competitive prices (if included)',
                    icon: '📦'
                  },
                  {
                    step: '5',
                    title: 'Support',
                    time: 'Ongoing',
                    description: 'Installation guidance and troubleshooting support',
                    icon: '💡'
                  }
                ].map((item, index) => (
                  <div key={index} className="relative">
                    <div className="md:flex md:items-center md:justify-between">
                      {/* Left side (odd) or Right side (even) */}
                      <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:order-2 md:pl-8'}`}>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                          <div className="flex items-center gap-3 md:justify-end mb-2">
                            <span className="text-3xl">{item.icon}</span>
                            <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                          </div>
                          <p className="text-sm text-solar-600 font-semibold mb-2">{item.time}</p>
                          <p className="text-gray-700">{item.description}</p>
                        </div>
                      </div>

                      {/* Center circle */}
                      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-solar-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                        <span className="text-white font-bold text-lg">{item.step}</span>
                      </div>

                      {/* Spacer for alternating layout */}
                      <div className="hidden md:block md:w-5/12"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Add-On Services */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Additional Services Available
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'Expedited Turnaround', time: '2-3 days', price: '+$XXX' },
                { name: 'Battery Storage Integration', time: 'Included in timeline', price: '+$XXX' },
                { name: 'Commercial Projects', time: 'Custom timeline', price: 'Custom pricing' },
                { name: 'Structural Engineering', time: 'When required', price: '+$XXX' },
                { name: 'Site Survey Coordination', time: '3-5 days', price: '+$XXX' },
                { name: 'Utility Interconnection Support', time: 'As needed', price: '+$XXX' },
                { name: 'Post-Installation Commissioning', time: '1 day', price: '+$XXX' },
              ].map((addon, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-solar-600">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{addon.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{addon.time}</p>
                  <p className="text-xl font-bold text-solar-700">{addon.price}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs with Schema Markup */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <FAQSection
              questions={[...designFAQs.slice(0, 5), ...permittingFAQs.slice(0, 5)]}
              generateSchema={true}
              title="Frequently Asked Questions About Our Services"
              description="Get answers to common questions about solar design, permitting, equipment sourcing, and installation support."
            />

            <div className="text-center mt-8">
              <Link href="/faq" className="text-solar-600 font-semibold hover:text-solar-700 text-lg">
                View All FAQs →
              </Link>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 bg-gradient-to-br from-solar-600 via-solar-700 to-energy-700 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-solar-100">
              Choose the services you need or request a custom package
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/pricing" className="bg-white text-solar-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-solar-50 transition-colors">
                View Pricing Packages
              </Link>
              <Link href="/design-request" className="bg-energy-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-energy-700 transition-colors border-2 border-white">
                Request Design Quote
              </Link>
              <Link href="/contact" className="bg-transparent text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors border-2 border-white">
                Schedule Consultation
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>98% approval rate</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>Licensed PE</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>5-7 day turnaround</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    <Footer />

    </>
  );
}
