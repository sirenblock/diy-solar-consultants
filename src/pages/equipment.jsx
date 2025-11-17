import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import EquipmentCard from '../components/EquipmentCard';
import EquipmentComparisonTable from '../components/EquipmentComparisonTable';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQSection from '@/components/FAQSection';
import {
  solarPanels,
  stringInverters,
  microinverters,
  powerOptimizers,
  batteries,
  mountingSystems,
  inverterTypeComparison,
  batterySizingGuide
} from '../data/equipmentData';
import {
  generateEquipmentCategorySchema,
  generateBreadcrumbSchema,
  generateSchemaGraph
} from '@/utils/schema';
import { equipmentFAQs, batteryStorageFAQs } from '@/data/serviceFAQs';

export default function Equipment() {
  const [activeSection, setActiveSection] = useState(null);
  const [viewMode, setViewMode] = useState('cards'); // 'cards' or 'table'

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  // Combine all inverter types for the inverter section
  const allInverters = [...stringInverters, ...microinverters, ...powerOptimizers];

  return (
    <>
      <Head>
        <title>Recommended Solar Equipment | DIY Solar Consultants</title>
        <meta
          name="description"
          content="Tier-1 solar panels, inverters & batteries. REC, Jinko, Enphase, SolarEdge, Tesla Powerwall. Expert recommendations + 15-30% savings vs retail pricing."
        />
        <meta name="keywords" content="solar panel comparison, best solar inverters, Tesla Powerwall pricing, Enphase IQ8 microinverters, solar battery storage, solar equipment costs, tier-1 solar panels, REC solar panels, SolarEdge inverter, solar mounting systems" />
        <link rel="canonical" href="https://diysolar.com/equipment" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://diysolar.com/equipment" />
        <meta property="og:title" content="Premium Solar Equipment at Competitive Prices" />
        <meta property="og:description" content="Tier-1 solar panels, inverters, batteries & mounting systems. REC, Enphase, SolarEdge, Tesla. 15-30% savings vs retail." />
        <meta property="og:site_name" content="DIY Solar Consultants" />
        <meta property="og:image" content="https://diysolar.com/images/og-equipment.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Solar Equipment Selection" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Premium Solar Equipment at Competitive Prices" />
        <meta name="twitter:description" content="Tier-1 solar panels, inverters & batteries. Expert recommendations + 15-30% savings vs retail." />
        <meta name="twitter:image" content="https://diysolar.com/images/og-equipment.jpg" />
        <meta name="twitter:image:alt" content="Solar Equipment Selection" />

        {/* Robots */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        {/* Enhanced Equipment Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              generateSchemaGraph([
                generateEquipmentCategorySchema(),
                {
                  "@type": "Product",
                  "name": "Solar Equipment Package",
                  "description": "Tier-1 solar panels, inverters, battery storage, and mounting systems from trusted manufacturers",
                  "brand": {
                    "@type": "Brand",
                    "name": "DIY Solar Consultants"
                  },
                  "offers": {
                    "@type": "AggregateOffer",
                    "priceCurrency": "USD",
                    "lowPrice": "7300",
                    "highPrice": "12200",
                    "offerCount": "20+",
                    "availability": "https://schema.org/InStock"
                  },
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "2500",
                    "bestRating": "5",
                    "worstRating": "1"
                  }
                },
                generateBreadcrumbSchema([
                  { name: 'Home', url: '/' },
                  { name: 'Equipment', url: '/equipment' }
                ])
              ])
            )
          }}
        />
      </Head>
      <Header />

      <div className="pt-20 min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-solar-600 via-solar-700 to-solar-800 text-white py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Tier-1 Solar Equipment at Competitive Prices
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-solar-100 max-w-3xl mx-auto">
              We source premium solar panels, inverters, batteries, and mounting systems from trusted manufacturers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-solar-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-solar-50 transition-colors">
                Get Equipment Quote
              </Link>
              <Link href="/design-request" className="bg-solar-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-solar-600 transition-colors border-2 border-white">
                Schedule Consultation
              </Link>
            </div>

            {/* Trust Signal */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-solar-100">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Tier-1 manufacturers</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>25-year warranties</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Competitive pricing</span>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              We work exclusively with tier-1 manufacturers who offer proven reliability, comprehensive warranties,
              and long-term performance. Our industry relationships allow us to source equipment at competitive prices
              while ensuring you get quality components for your DIY solar installation.
            </p>
          </div>
        </section>

        {/* Quick Navigation */}
        <section className="py-8 px-4 bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
          <div className="max-w-7xl mx-auto">
            <nav className="flex flex-wrap justify-center gap-4">
              <a href="#panels" className="px-4 py-2 bg-solar-100 text-solar-800 rounded-lg hover:bg-solar-200 transition-colors font-medium text-sm">
                Solar Panels
              </a>
              <a href="#inverters" className="px-4 py-2 bg-solar-100 text-solar-800 rounded-lg hover:bg-solar-200 transition-colors font-medium text-sm">
                Inverters
              </a>
              <a href="#batteries" className="px-4 py-2 bg-solar-100 text-solar-800 rounded-lg hover:bg-solar-200 transition-colors font-medium text-sm">
                Battery Storage
              </a>
              <a href="#mounting" className="px-4 py-2 bg-solar-100 text-solar-800 rounded-lg hover:bg-solar-200 transition-colors font-medium text-sm">
                Mounting Systems
              </a>
              <a href="#selection-guide" className="px-4 py-2 bg-solar-100 text-solar-800 rounded-lg hover:bg-solar-200 transition-colors font-medium text-sm">
                Selection Guide
              </a>
              <a href="#pricing" className="px-4 py-2 bg-solar-100 text-solar-800 rounded-lg hover:bg-solar-200 transition-colors font-medium text-sm">
                Pricing
              </a>
            </nav>
          </div>
        </section>

        {/* Solar Panels Section */}
        <section id="panels" className="py-16 px-4 scroll-mt-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Solar Panels
              </h2>
              <p className="text-xl text-gray-600 mb-2">
                Tier-1 Modules with 25+ Year Warranties
              </p>
              <p className="text-gray-700 max-w-3xl mx-auto">
                We recommend only tier-1 solar panels from manufacturers with proven track records, strong financials,
                and comprehensive warranties. All panels include 25-year performance warranties and 12-15 year product warranties.
              </p>
            </div>

            {/* View Toggle */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex rounded-lg border border-gray-300 bg-white">
                <button
                  onClick={() => setViewMode('cards')}
                  className={`px-6 py-2 rounded-l-lg font-medium transition-colors ${
                    viewMode === 'cards'
                      ? 'bg-solar-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Card View
                </button>
                <button
                  onClick={() => setViewMode('table')}
                  className={`px-6 py-2 rounded-r-lg font-medium transition-colors ${
                    viewMode === 'table'
                      ? 'bg-solar-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Table View
                </button>
              </div>
            </div>

            {/* Cards View */}
            {viewMode === 'cards' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {solarPanels.map((panel) => (
                  <EquipmentCard key={panel.id} item={panel} type="panel" />
                ))}
              </div>
            )}

            {/* Table View */}
            {viewMode === 'table' && (
              <div className="mb-12">
                <EquipmentComparisonTable data={solarPanels} type="panels" />
              </div>
            )}
          </div>
        </section>

        {/* Inverters Section */}
        <section id="inverters" className="py-16 px-4 bg-gray-50 scroll-mt-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Inverters
              </h2>
              <p className="text-xl text-gray-600 mb-2">
                String Inverters, Microinverters, and Power Optimizers
              </p>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Inverter selection is critical to system performance, reliability, and monitoring. We help you choose
                between string inverters, microinverters, and optimizer systems based on your roof layout, shading conditions, and budget.
              </p>
            </div>

            {/* Inverter Type Quick Guide */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                <h3 className="text-xl font-bold text-gray-900 mb-2">String Inverters</h3>
                <p className="text-gray-700">Best for unshaded roofs, single array, lowest cost</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Microinverters</h3>
                <p className="text-gray-700">Best for complex roofs, shading, panel-level monitoring</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
                <h3 className="text-xl font-bold text-gray-900 mb-2">String + Optimizers</h3>
                <p className="text-gray-700">Middle ground, panel-level monitoring with central inverter</p>
              </div>
            </div>

            {/* String Inverters */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">String Inverters</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {stringInverters.map((inverter) => (
                  <EquipmentCard key={inverter.id} item={inverter} type="inverter" />
                ))}
              </div>
            </div>

            {/* Microinverters */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Microinverters</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {microinverters.map((inverter) => (
                  <EquipmentCard key={inverter.id} item={inverter} type="inverter" />
                ))}
              </div>
            </div>

            {/* Power Optimizers */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Power Optimizers</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {powerOptimizers.map((optimizer) => (
                  <EquipmentCard key={optimizer.id} item={optimizer} type="inverter" />
                ))}
              </div>
            </div>

            {/* Inverter Comparison Table */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Inverter Type Comparison</h3>
              <EquipmentComparisonTable data={inverterTypeComparison} type="inverters" />
            </div>
          </div>
        </section>

        {/* Battery Storage Section */}
        <section id="batteries" className="py-16 px-4 scroll-mt-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Battery Storage Systems
              </h2>
              <p className="text-xl text-gray-600 mb-2">
                Backup Power and Energy Independence
              </p>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Battery storage allows you to use solar energy at night, provides backup power during outages,
                and maximizes energy independence. We design and source all major battery systems.
              </p>
            </div>

            {/* Battery Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {batteries.map((battery) => (
                <EquipmentCard key={battery.id} item={battery} type="battery" />
              ))}
            </div>

            {/* Battery Comparison Table */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Battery Comparison</h3>
              <EquipmentComparisonTable data={batteries} type="batteries" />
            </div>

            {/* Battery Sizing Guide */}
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Battery Sizing Guide</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {batterySizingGuide.map((item, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="font-semibold text-gray-900 mb-1">{item.useCase}</div>
                    <div className="text-solar-700 font-bold">{item.capacity}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mounting Systems Section */}
        <section id="mounting" className="py-16 px-4 bg-gray-50 scroll-mt-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Mounting & Racking Systems
              </h2>
              <p className="text-xl text-gray-600 mb-2">
                Engineered Mounting for Every Roof Type
              </p>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Quality mounting systems are essential for safe, long-lasting solar installations. We specify mounting
                systems based on roof type, wind/snow loads, and local code requirements.
              </p>
            </div>

            {/* Mounting System Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {mountingSystems.map((system) => (
                <EquipmentCard key={system.id} item={system} type="mounting" />
              ))}
            </div>

            {/* Mounting System Selection Guide */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Mounting System Selection Guide</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded">
                  <div className="text-2xl">🏠</div>
                  <div>
                    <div className="font-semibold text-gray-900">Composition Shingle</div>
                    <div className="text-sm text-gray-700">IronRidge, Unirac, Quick Mount</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded">
                  <div className="text-2xl">🏛️</div>
                  <div>
                    <div className="font-semibold text-gray-900">Tile Roof</div>
                    <div className="text-sm text-gray-700">IronRidge with tile hooks/replacements</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded">
                  <div className="text-2xl">🏗️</div>
                  <div>
                    <div className="font-semibold text-gray-900">Metal Standing Seam</div>
                    <div className="text-sm text-gray-700">S-5! clamps (no penetrations)</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded">
                  <div className="text-2xl">🏭</div>
                  <div>
                    <div className="font-semibold text-gray-900">Metal Corrugated</div>
                    <div className="text-sm text-gray-700">S-5! or IronRidge with metal roof attachments</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Equipment Selection Guide */}
        <section id="selection-guide" className="py-16 px-4 scroll-mt-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                How to Choose Equipment
              </h2>
              <p className="text-gray-600">Make informed decisions based on your specific needs</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Panel Selection */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-2xl">☀️</span> Panel Selection
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-700"><strong>Efficiency:</strong> Higher efficiency = fewer panels needed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-700"><strong>Temperature Coefficient:</strong> Important in hot climates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-700"><strong>Warranty:</strong> 25-year performance minimum</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-700"><strong>Aesthetics:</strong> All-black vs. silver frames</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-700"><strong>Budget:</strong> Balance performance and cost</span>
                  </li>
                </ul>
              </div>

              {/* Inverter Selection */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-2xl">⚡</span> Inverter Selection
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-700"><strong>Shading:</strong> Shaded roofs benefit from micros or optimizers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-700"><strong>Roof Complexity:</strong> Multiple orientations favor micros</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-700"><strong>Monitoring:</strong> Panel-level vs. string-level</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-700"><strong>Budget:</strong> String inverters generally most economical</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-700"><strong>Expansion:</strong> Consider future expansion plans</span>
                  </li>
                </ul>
              </div>

              {/* Battery Selection */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-2xl">🔋</span> Battery Selection
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-700"><strong>Backup Needs:</strong> Essential loads vs. whole home</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-700"><strong>Budget:</strong> Capacity drives cost</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-700"><strong>Solar System:</strong> Some batteries integrate better with specific inverters</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-700"><strong>Scalability:</strong> Can you add more capacity later?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-700"><strong>Warranty:</strong> Longer warranty = better value</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Warranties & Guarantees */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Warranties & Guarantees
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Standard Warranties */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Standard Warranties</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="text-green-600 font-bold">✓</div>
                    <div>
                      <div className="font-semibold text-gray-900">Solar Panels</div>
                      <div className="text-sm text-gray-700">25-year performance (80-90% output), 12-20 year product</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="text-green-600 font-bold">✓</div>
                    <div>
                      <div className="font-semibold text-gray-900">Inverters</div>
                      <div className="text-sm text-gray-700">10-25 years (varies by manufacturer)</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="text-green-600 font-bold">✓</div>
                    <div>
                      <div className="font-semibold text-gray-900">Batteries</div>
                      <div className="text-sm text-gray-700">10-15 years</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="text-green-600 font-bold">✓</div>
                    <div>
                      <div className="font-semibold text-gray-900">Mounting</div>
                      <div className="text-sm text-gray-700">10-25 years</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="text-green-600 font-bold">✓</div>
                    <div>
                      <div className="font-semibold text-gray-900">Workmanship</div>
                      <div className="text-sm text-gray-700">Depends on installer (DIY = your responsibility)</div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* What We Provide */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">What We Provide</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="text-blue-600 font-bold">✓</div>
                    <div>
                      <div className="font-semibold text-gray-900">Equipment Specification Verification</div>
                      <div className="text-sm text-gray-700">Ensure compatibility and compliance</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="text-blue-600 font-bold">✓</div>
                    <div>
                      <div className="font-semibold text-gray-900">Warranty Registration Assistance</div>
                      <div className="text-sm text-gray-700">Help you register all warranties properly</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="text-blue-600 font-bold">✓</div>
                    <div>
                      <div className="font-semibold text-gray-900">Manufacturer Contact Information</div>
                      <div className="text-sm text-gray-700">Direct access to support resources</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="text-blue-600 font-bold">✓</div>
                    <div>
                      <div className="font-semibold text-gray-900">RMA Support</div>
                      <div className="text-sm text-gray-700">Assistance with returns if needed</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing & Savings */}
        <section id="pricing" className="py-16 px-4 scroll-mt-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Pricing & Savings
              </h2>
            </div>

            {/* Equipment Cost Breakdown */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-lg shadow-lg mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Equipment Cost Breakdown (Typical 8kW System)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-900">Panels (20-24 panels)</span>
                    <span className="text-lg font-bold text-gray-900">$4,000 - $6,000</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-900">Inverter (string or micros)</span>
                    <span className="text-lg font-bold text-gray-900">$1,500 - $5,000</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-900">Mounting System</span>
                    <span className="text-lg font-bold text-gray-900">$1,000 - $1,500</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-900">Balance of System</span>
                    <span className="text-lg font-bold text-gray-900">$800 - $1,200</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t-2 border-gray-300">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-900">Total Equipment Cost</span>
                  <span className="text-2xl font-bold text-green-600">$7,300 - $12,200</span>
                </div>
              </div>
            </div>

            {/* Our Pricing */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Pricing</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="text-green-600 text-2xl">✓</div>
                  <div>
                    <div className="font-semibold text-gray-900">15-30% Below Retail</div>
                    <div className="text-sm text-gray-700">Industry relationships = better pricing</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-green-600 text-2xl">✓</div>
                  <div>
                    <div className="font-semibold text-gray-900">Transparent Pricing</div>
                    <div className="text-sm text-gray-700">No hidden markups or fees</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-green-600 text-2xl">✓</div>
                  <div>
                    <div className="font-semibold text-gray-900">Volume Discounts Available</div>
                    <div className="text-sm text-gray-700">Larger systems get better pricing</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-green-600 text-2xl">✓</div>
                  <div>
                    <div className="font-semibold text-gray-900">Price Matching</div>
                    <div className="text-sm text-gray-700">On equivalent equipment</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs with Schema Markup */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <FAQSection
              questions={[...equipmentFAQs, ...batteryStorageFAQs.slice(0, 2)]}
              generateSchema={true}
              title="Frequently Asked Questions About Solar Equipment"
              description="Get expert answers about solar panels, inverters, battery storage, and equipment sourcing."
            />

            <div className="text-center mt-8">
              <Link href="/faq" className="text-solar-600 font-semibold hover:text-solar-700 text-lg">
                View All FAQs →
              </Link>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 bg-gradient-to-br from-solar-700 to-solar-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Source Your Equipment?
            </h2>
            <p className="text-xl text-solar-100 mb-8">
              Get a custom equipment quote based on your system design
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-solar-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-solar-50 transition-colors">
                Get Equipment Quote
              </Link>
              <Link href="/design-request" className="bg-transparent text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-solar-600 transition-colors border-2 border-white">
                Schedule Consultation
              </Link>
            </div>
          </div>
        </section>
      </div>
    <Footer />

    </>
  );
}
