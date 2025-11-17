import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  CheckCircleIcon,
  ClockIcon,
  DocumentTextIcon,
  WrenchScrewdriverIcon,
  ChatBubbleLeftRightIcon,
  BeakerIcon,
  BuildingOfficeIcon,
  BoltIcon,
  SparklesIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

export default function Process() {
  return (
    <>
      <Head>
        <title>How It Works - DIY Solar Process Explained | DIY Solar Consultants</title>
        <meta
          name="description"
          content="Step-by-step guide to going solar with professional design support. From consultation to activation in 6-12 weeks. 98% permit approval rate. Licensed PE engineers."
        />
        <meta name="keywords" content="DIY solar process, how to go solar DIY, solar installation process, solar design process, DIY solar timeline, solar permit process" />

        {/* Open Graph */}
        <meta property="og:title" content="How It Works - DIY Solar Process | DIY Solar Consultants" />
        <meta property="og:description" content="Learn the complete DIY solar process from consultation to system activation. Professional engineering support at every stage." />
        <meta property="og:type" content="website" />

        {/* HowTo Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HowTo",
              "name": "DIY Solar Installation Process",
              "description": "Complete guide to installing solar with professional design and permitting support",
              "totalTime": "P12W",
              "estimatedCost": {
                "@type": "MonetaryAmount",
                "currency": "USD",
                "value": "10000-25000"
              },
              "step": [
                {
                  "@type": "HowToStep",
                  "name": "Consultation & Assessment",
                  "text": "Free consultation to assess your energy needs and site conditions",
                  "itemListElement": [
                    {
                      "@type": "HowToDirection",
                      "text": "Provide recent electric bills and property information"
                    },
                    {
                      "@type": "HowToDirection",
                      "text": "Receive solar feasibility assessment and cost estimates"
                    }
                  ]
                },
                {
                  "@type": "HowToStep",
                  "name": "Professional Design",
                  "text": "Licensed PE engineers create custom solar system design",
                  "itemListElement": [
                    {
                      "@type": "HowToDirection",
                      "text": "Engineers design optimal panel layout and system configuration"
                    },
                    {
                      "@type": "HowToDirection",
                      "text": "Receive complete design package with PE stamp"
                    }
                  ]
                },
                {
                  "@type": "HowToStep",
                  "name": "Permitting & Approval",
                  "text": "Submit permit-ready documentation to building department",
                  "itemListElement": [
                    {
                      "@type": "HowToDirection",
                      "text": "Submit permit package to local building department"
                    },
                    {
                      "@type": "HowToDirection",
                      "text": "Receive permit approval (98% first-time approval rate)"
                    }
                  ]
                },
                {
                  "@type": "HowToStep",
                  "name": "Installation & Activation",
                  "text": "Install system with our guidance and pass final inspection",
                  "itemListElement": [
                    {
                      "@type": "HowToDirection",
                      "text": "Install solar panels and electrical components"
                    },
                    {
                      "@type": "HowToDirection",
                      "text": "Pass building inspection and receive utility permission to operate"
                    }
                  ]
                }
              ]
            })
          }}
        />
      </Head>
      <Header />

      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-br from-solar-600 via-solar-500 to-energy-500 text-white">
        <div className="section-container text-center">
          <h1 className="heading-xl mb-6">How It Works</h1>
          <p className="text-xl sm:text-2xl mb-8 max-w-4xl mx-auto opacity-95">
            From design to installation, here's exactly what to expect when you go solar with professional guidance
          </p>
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3 text-sm sm:text-base">
            <ShieldCheckIcon className="w-5 h-5 mr-2" />
            <span className="font-semibold">5,000+ homeowners have successfully completed this process</span>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
            Going solar is easier than you think. We've streamlined the process into four simple steps,
            providing professional engineering support at each stage while you maintain control and save thousands.
            Here's exactly how it works.
          </p>
        </div>
      </section>

      {/* Process Overview Timeline */}
      <ProcessTimeline />

      {/* Detailed Step 1: Consultation */}
      <Step1Consultation />

      {/* Detailed Step 2: Design */}
      <Step2Design />

      {/* Detailed Step 3: Permitting */}
      <Step3Permitting />

      {/* Detailed Step 4: Installation */}
      <Step4Installation />

      {/* Timeline Summary */}
      <TimelineSummary />

      {/* What to Expect */}
      <WhatToExpect />

      {/* Success Stories */}
      <SuccessStories />

      {/* Common Concerns */}
      <CommonConcerns />

      {/* CTA Section */}
      <CTASection />
    </>
  );
}

// Process Timeline Component
function ProcessTimeline() {
  const steps = [
    {
      number: 1,
      title: 'Consultation',
      duration: '30-60 minutes',
      cost: 'Free',
      icon: ChatBubbleLeftRightIcon,
      color: 'from-blue-500 to-blue-600'
    },
    {
      number: 2,
      title: 'Design',
      duration: '5-7 days',
      cost: 'Starting at $XXX',
      icon: BeakerIcon,
      color: 'from-solar-500 to-solar-600'
    },
    {
      number: 3,
      title: 'Permitting',
      duration: '2-6 weeks',
      cost: 'Included',
      icon: DocumentTextIcon,
      color: 'from-energy-500 to-energy-600'
    },
    {
      number: 4,
      title: 'Support',
      duration: 'Throughout',
      cost: 'Included',
      icon: WrenchScrewdriverIcon,
      color: 'from-amber-500 to-amber-600'
    }
  ];

  return (
    <section className="bg-gray-50 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="heading-lg text-center mb-4">4-Step Process Overview</h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Total Timeline: 6-12 weeks from consultation to system activation
        </p>

        {/* Desktop Timeline - Horizontal */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-solar-500 via-energy-500 to-amber-500"
                 style={{ width: 'calc(100% - 160px)', left: '80px' }}></div>

            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="flex flex-col items-center text-center">
                    {/* Icon Circle */}
                    <div className={`relative z-10 w-32 h-32 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg transform transition-transform hover:scale-110`}>
                      <step.icon className="w-16 h-16 text-white" />
                    </div>

                    {/* Step Number */}
                    <div className="absolute top-0 right-0 w-8 h-8 bg-white rounded-full border-4 border-gray-100 flex items-center justify-center font-bold text-gray-700 z-20">
                      {step.number}
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                    <div className="space-y-1 text-gray-600">
                      <div className="flex items-center justify-center">
                        <ClockIcon className="w-4 h-4 mr-1" />
                        <span className="text-sm">{step.duration}</span>
                      </div>
                      <p className="font-semibold text-solar-600">{step.cost}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Timeline - Vertical */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className={`absolute left-16 top-32 w-1 h-full bg-gradient-to-b ${step.color}`}></div>
              )}

              <div className="flex items-start space-x-4">
                {/* Icon Circle */}
                <div className={`relative z-10 w-32 h-32 flex-shrink-0 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                  <step.icon className="w-16 h-16 text-white" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full border-4 border-gray-100 flex items-center justify-center font-bold text-gray-700">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-4">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">{step.title}</h3>
                  <div className="space-y-1 text-gray-600">
                    <div className="flex items-center">
                      <ClockIcon className="w-4 h-4 mr-2" />
                      <span>{step.duration}</span>
                    </div>
                    <p className="font-semibold text-solar-600">{step.cost}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Step 1: Consultation
function Step1Consultation() {
  return (
    <section id="step1" className="section-container">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-start space-x-6 mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
            <ChatBubbleLeftRightIcon className="w-8 h-8 text-white" />
          </div>
          <div>
            <div className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">Step 1</div>
            <h2 className="heading-md mb-2">Consultation & Assessment</h2>
            <div className="flex flex-wrap gap-4 text-gray-600">
              <span className="flex items-center">
                <ClockIcon className="w-4 h-4 mr-1" />
                30-60 minutes
              </span>
              <span className="font-semibold text-blue-600">Free</span>
            </div>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-8">
            In this initial phase, we learn about your property, energy usage, goals, and answer all your questions.
          </p>

          <div className="grid md:grid-cols-2 gap-8 not-prose mb-12">
            {/* You Provide */}
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-900">You Provide:</h3>
              <ul className="space-y-2">
                {[
                  'Recent electric bills (12 months ideal, 3 months minimum)',
                  'Property address for solar resource assessment',
                  'Photos of roof and electrical panel',
                  'Basic property information (roof type, age, shading)',
                  'Your energy goals and budget'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* We Provide */}
            <div className="bg-solar-50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-900">We Provide:</h3>
              <ul className="space-y-2">
                {[
                  'Free consultation call or email exchange',
                  'Solar feasibility assessment',
                  'Preliminary system size estimate',
                  'Ballpark cost estimates (DIY vs. professional)',
                  'Answer all your questions about DIY solar',
                  'Service options and pricing',
                  'Timeline expectations'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-solar-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* How to Start */}
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6">How to Start</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link href="/calculator" className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border-2 border-transparent hover:border-solar-500">
                <div className="text-3xl mb-3">🧮</div>
                <h4 className="font-bold mb-2">Solar Calculator</h4>
                <p className="text-sm text-gray-600">Get instant estimates, then schedule consultation</p>
              </Link>
              <Link href="/contact" className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border-2 border-transparent hover:border-solar-500">
                <div className="text-3xl mb-3">📝</div>
                <h4 className="font-bold mb-2">Contact Form</h4>
                <p className="text-sm text-gray-600">Tell us about your project</p>
              </Link>
              <Link href="/design-request" className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border-2 border-transparent hover:border-solar-500">
                <div className="text-3xl mb-3">🚀</div>
                <h4 className="font-bold mb-2">Design Request</h4>
                <p className="text-sm text-gray-600">Skip ahead if you're ready</p>
              </Link>
            </div>
          </div>

          {/* What You'll Learn */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">What You'll Learn:</h3>
            <ul className="grid sm:grid-cols-2 gap-3">
              {[
                'Is solar feasible for your property?',
                'Approximate system size needed',
                'Estimated costs and savings',
                'Whether DIY is right for you',
                'What services you need',
                'Next steps'
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <SparklesIcon className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Typical Questions */}
          <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6">Typical Questions We Answer:</h3>
            <div className="space-y-3">
              {[
                '"How much will this cost?"',
                '"Can I really do this myself?"',
                '"What\'s the ROI in my area?"',
                '"Do I need batteries?"',
                '"What equipment is best for my situation?"',
                '"How difficult is the installation?"'
              ].map((question, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-solar-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 italic">{question}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Step 2: Design
function Step2Design() {
  return (
    <section id="step2" className="bg-gray-50 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-start space-x-6 mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-solar-500 to-solar-600 rounded-full flex items-center justify-center flex-shrink-0">
            <BeakerIcon className="w-8 h-8 text-white" />
          </div>
          <div>
            <div className="text-sm font-semibold text-solar-600 uppercase tracking-wide mb-2">Step 2</div>
            <h2 className="heading-md mb-2">Professional Design</h2>
            <div className="flex flex-wrap gap-4 text-gray-600">
              <span className="flex items-center">
                <ClockIcon className="w-4 h-4 mr-1" />
                5-7 business days
              </span>
              <span className="font-semibold text-solar-600">Starting at $XXX</span>
            </div>
          </div>
        </div>

        <p className="text-xl text-gray-700 mb-12">
          Our licensed Professional Engineers create a complete, customized solar system design tailored to your property,
          energy needs, and goals.
        </p>

        {/* Design Phases */}
        <div className="space-y-8">
          {/* Phase 2A */}
          <DesignPhase
            phase="2A"
            title="Information Gathering"
            timeline="Day 1-2"
            content={
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-lg mb-3">We Collect:</h4>
                  <ul className="space-y-2">
                    {[
                      'Detailed property information',
                      'Energy usage data (12-month bills)',
                      'Site photos and documentation',
                      'Roof dimensions',
                      'Electrical service details',
                      'Equipment preferences',
                      'Local code requirements'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start text-gray-700">
                        <div className="w-1.5 h-1.5 bg-solar-500 rounded-full mr-2 mt-2"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-3">We Research:</h4>
                  <ul className="space-y-2">
                    {[
                      'Local building codes',
                      'AHJ-specific requirements',
                      'Utility interconnection standards',
                      'Solar resource data',
                      'Shading analysis',
                      'Available incentives'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start text-gray-700">
                        <div className="w-1.5 h-1.5 bg-energy-500 rounded-full mr-2 mt-2"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            }
          />

          {/* Phase 2B */}
          <DesignPhase
            phase="2B"
            title="Engineering & Design"
            timeline="Day 2-6"
            content={
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-lg mb-3">Our Engineers:</h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      'Size system for optimal production and ROI',
                      'Design panel layout for maximum efficiency',
                      'Select appropriate equipment',
                      'Calculate string sizing and electrical loads',
                      'Perform structural analysis',
                      'Create detailed electrical diagrams',
                      'Model production and financial returns',
                      'Ensure code compliance'
                    ].map((item, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircleIcon className="w-5 h-5 text-solar-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <h4 className="font-bold text-lg mb-3">Design Optimization</h4>
                  <p className="text-gray-700 mb-3">We optimize for:</p>
                  <div className="flex flex-wrap gap-2">
                    {['Maximum energy production', 'Cost-effectiveness', 'Aesthetic appeal',
                      'Ease of DIY installation', 'Long-term reliability', 'Code compliance'].map((item, index) => (
                      <span key={index} className="bg-white px-3 py-1 rounded-full text-sm border border-blue-200">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            }
          />

          {/* Phase 2C */}
          <DesignPhase
            phase="2C"
            title="Review & Delivery"
            timeline="Day 7"
            content={
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-solar-50 to-energy-50 rounded-xl p-6">
                  <h4 className="font-bold text-lg mb-4">Complete Design Package Includes:</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      {
                        title: '1. Site Plan & Layout',
                        items: ['Roof plan with panel placement', 'Dimensions and measurements', 'Setbacks and clearances']
                      },
                      {
                        title: '2. Electrical Diagrams',
                        items: ['Single-line diagram', 'Three-line diagram', 'String sizing', 'Grounding details']
                      },
                      {
                        title: '3. Equipment Specifications',
                        items: ['Complete bill of materials', 'Panel & inverter specs', 'All manufacturer datasheets']
                      },
                      {
                        title: '4. Production Analysis',
                        items: ['Monthly/annual estimates', '25-year projections', 'ROI calculations']
                      },
                      {
                        title: '5. Installation Guidelines',
                        items: ['Step-by-step overview', 'Mounting instructions', 'Safety requirements']
                      },
                      {
                        title: '6. Permit-Ready Planset',
                        items: ['PE-stamped drawings', 'Structural calculations', 'Code compliance docs']
                      }
                    ].map((section, index) => (
                      <div key={index} className="bg-white rounded-lg p-4">
                        <h5 className="font-bold mb-2 text-gray-900">{section.title}</h5>
                        <ul className="space-y-1">
                          {section.items.map((item, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-start">
                              <span className="text-solar-500 mr-2">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-white border-2 border-solar-200 rounded-lg p-6">
                  <ShieldCheckIcon className="w-8 h-8 text-solar-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg mb-2">98% First-Time Approval Rate</h4>
                    <p className="text-gray-700">
                      Our conservative engineering approach and thorough documentation ensure your permit sails through approval.
                      Minor revisions included at no charge.
                    </p>
                  </div>
                </div>
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
}

// Design Phase Component
function DesignPhase({ phase, title, timeline, content }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="bg-gradient-to-r from-solar-500 to-energy-500 px-6 py-4">
        <div className="flex items-center justify-between text-white">
          <div>
            <span className="text-sm font-semibold opacity-90">Phase {phase}</span>
            <h3 className="text-xl font-bold">{title}</h3>
          </div>
          <div className="flex items-center bg-white/20 rounded-lg px-3 py-1">
            <ClockIcon className="w-4 h-4 mr-1" />
            <span className="text-sm font-semibold">{timeline}</span>
          </div>
        </div>
      </div>
      <div className="p-6">
        {content}
      </div>
    </div>
  );
}

// Step 3: Permitting
function Step3Permitting() {
  return (
    <section id="step3" className="section-container">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-start space-x-6 mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-energy-500 to-energy-600 rounded-full flex items-center justify-center flex-shrink-0">
            <DocumentTextIcon className="w-8 h-8 text-white" />
          </div>
          <div>
            <div className="text-sm font-semibold text-energy-600 uppercase tracking-wide mb-2">Step 3</div>
            <h2 className="heading-md mb-2">Permitting & Approval</h2>
            <div className="flex flex-wrap gap-4 text-gray-600">
              <span className="flex items-center">
                <ClockIcon className="w-4 h-4 mr-1" />
                2-6 weeks
              </span>
              <span className="font-semibold text-energy-600">Included in Design</span>
            </div>
          </div>
        </div>

        <p className="text-xl text-gray-700 mb-12">
          We prepare permit-ready documentation, you submit to building department, and we support you through approval.
        </p>

        {/* Permitting Phases */}
        <div className="space-y-6">
          {/* Phase 3A */}
          <PermitPhase
            phase="3A"
            title="Permit Package Preparation"
            content={
              <div>
                <p className="text-gray-700 mb-4">
                  We create complete, AHJ-specific permit documentation with PE stamp.
                </p>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    'PE-stamped engineering drawings',
                    'Electrical diagrams to code',
                    'Structural calculations',
                    'Equipment specifications',
                    'Site plan integration',
                    'Code compliance documentation',
                    'AHJ-specific forms',
                    'Rapid shutdown design',
                    'Fire setback calculations'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start bg-gray-50 rounded-lg p-3">
                      <CheckCircleIcon className="w-5 h-5 text-energy-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            }
          />

          {/* Phase 3B */}
          <PermitPhase
            phase="3B"
            title="Permit Submission (You)"
            content={
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-3">Your Responsibilities:</h4>
                  <ol className="space-y-2">
                    {[
                      'Download permit package',
                      'Complete jurisdiction\'s permit application',
                      'Pay permit fees (typically $50-$500)',
                      'Submit to building department',
                      'Provide proof of homeownership'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="font-bold text-energy-600 mr-3">{index + 1}.</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ol>
                </div>
                <div className="bg-blue-50 rounded-lg p-6">
                  <h4 className="font-bold mb-3">We Provide:</h4>
                  <ul className="space-y-2">
                    {[
                      'Instructions for your jurisdiction',
                      'List of required forms',
                      'Guidance on submission process',
                      'Expected fees',
                      'Building department contact info'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start text-gray-700">
                        <SparklesIcon className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            }
          />

          {/* Phase 3C */}
          <PermitPhase
            phase="3C"
            title="Plan Review (Building Department)"
            content={
              <div className="space-y-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
                    <div className="text-3xl mb-2">✅</div>
                    <h4 className="font-bold text-lg mb-2">Approved</h4>
                    <p className="text-sm text-gray-600">98% of our designs</p>
                    <p className="text-sm text-gray-700 mt-2">Permit issued, begin installation</p>
                  </div>
                  <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6">
                    <div className="text-3xl mb-2">📝</div>
                    <h4 className="font-bold text-lg mb-2">Corrections</h4>
                    <p className="text-sm text-gray-600">Rare, minor changes</p>
                    <p className="text-sm text-gray-700 mt-2">We handle at no charge</p>
                  </div>
                  <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-6">
                    <div className="text-3xl mb-2">🔄</div>
                    <h4 className="font-bold text-lg mb-2">Rejected</h4>
                    <p className="text-sm text-gray-600">Very rare</p>
                    <p className="text-sm text-gray-700 mt-2">We revise until approved</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-energy-50 to-green-50 rounded-lg p-6">
                  <h4 className="font-bold text-lg mb-3 flex items-center">
                    <ShieldCheckIcon className="w-6 h-6 text-energy-600 mr-2" />
                    Free Revision Support
                  </h4>
                  <p className="text-gray-700">
                    We provide unlimited revisions for AHJ-requested changes at no additional charge.
                    Our 98% first-time approval rate means this is rarely needed.
                  </p>
                </div>
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
}

// Permit Phase Component
function PermitPhase({ phase, title, content }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="bg-gradient-to-r from-energy-500 to-green-500 px-6 py-3">
        <div className="text-white">
          <span className="text-sm font-semibold opacity-90">Phase {phase}</span>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
      </div>
      <div className="p-6">
        {content}
      </div>
    </div>
  );
}

// Step 4: Installation
function Step4Installation() {
  return (
    <section id="step4" className="bg-gray-50 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-start space-x-6 mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
            <WrenchScrewdriverIcon className="w-8 h-8 text-white" />
          </div>
          <div>
            <div className="text-sm font-semibold text-amber-600 uppercase tracking-wide mb-2">Step 4</div>
            <h2 className="heading-md mb-2">Installation Support & Activation</h2>
            <div className="flex flex-wrap gap-4 text-gray-600">
              <span className="flex items-center">
                <ClockIcon className="w-4 h-4 mr-1" />
                1-5 days installation | 1-4 weeks activation
              </span>
              <span className="font-semibold text-amber-600">Support Included</span>
            </div>
          </div>
        </div>

        <p className="text-xl text-gray-700 mb-12">
          You install the system (with our guidance), pass inspection, and get utility permission to operate.
        </p>

        {/* Installation Phases */}
        <div className="space-y-6">
          {/* Phase 4A: Equipment */}
          <InstallPhase
            phase="4A"
            title="Equipment Procurement"
            timeline="Week 0-3"
            content={
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-amber-50 rounded-lg p-6">
                  <h4 className="font-bold mb-3">Equipment Checklist:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      'Solar panels',
                      'Inverter(s)',
                      'Mounting system',
                      'Flashings',
                      'AC disconnect',
                      'Wire & conduit',
                      'Breakers',
                      'Labels & placards',
                      'Grounding equipment',
                      'Rapid shutdown'
                    ].map((item, index) => (
                      <div key={index} className="flex items-start text-sm">
                        <CheckCircleIcon className="w-4 h-4 text-amber-600 mr-1 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold mb-3">Sourcing Options:</h4>
                  <div className="space-y-3">
                    <div className="bg-white border-2 border-solar-200 rounded-lg p-4">
                      <h5 className="font-bold text-solar-600 mb-1">Through Us</h5>
                      <p className="text-sm text-gray-600">Competitive pricing, verified compatibility</p>
                    </div>
                    <div className="bg-white border-2 border-gray-200 rounded-lg p-4">
                      <h5 className="font-bold mb-1">Self-Source</h5>
                      <p className="text-sm text-gray-600">Use our BOM, we verify specs</p>
                    </div>
                  </div>
                </div>
              </div>
            }
          />

          {/* Phase 4B: Installation */}
          <InstallPhase
            phase="4B"
            title="Installation"
            timeline="1-5 Days"
            content={
              <div className="space-y-6">
                <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-lg mb-4">Typical Installation Sequence:</h4>
                  <div className="space-y-4">
                    {[
                      { day: '1', title: 'Roof Mounting', tasks: ['Install flashings', 'Align rails', 'Waterproof penetrations'] },
                      { day: '2', title: 'Panel Installation', tasks: ['Attach panels', 'Wire strings', 'Install rapid shutdown'] },
                      { day: '3', title: 'Inverter & Electrical', tasks: ['Mount inverter', 'Run conduit', 'Install disconnects'] },
                      { day: '4-5', title: 'Interconnection', tasks: ['Connect to panel', 'System testing', 'Install labels'] }
                    ].map((phase, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center flex-shrink-0 text-white font-bold">
                          {phase.day}
                        </div>
                        <div className="flex-1">
                          <h5 className="font-bold mb-1">{phase.title}</h5>
                          <div className="flex flex-wrap gap-2">
                            {phase.tasks.map((task, idx) => (
                              <span key={idx} className="text-sm bg-gray-100 px-2 py-1 rounded text-gray-700">
                                {task}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
                    <h4 className="font-bold mb-3">✅ Typically DIY:</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      {['Roof mounting', 'Panel installation', 'DC wiring', 'Conduit running', 'Inverter mounting', 'Labeling'].map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
                    <h4 className="font-bold mb-3">🤝 Consider Hiring:</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Roof mounting: $1,000-$2,500</li>
                      <li>• AC interconnection: $500-$1,500</li>
                      <li>• Complex electrical work</li>
                      <li className="font-semibold text-blue-700 mt-2">Still save $10K-$15K total!</li>
                    </ul>
                  </div>
                </div>
              </div>
            }
          />

          {/* Phase 4C: Inspection */}
          <InstallPhase
            phase="4C"
            title="Building Inspection"
            timeline="Week 1-2"
            content={
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-3">Inspection Process:</h4>
                    <ol className="space-y-2">
                      {[
                        'Schedule inspection',
                        'Inspector visits property',
                        'Verifies code compliance',
                        'Issues approval or notes corrections'
                      ].map((step, index) => (
                        <li key={index} className="flex items-start">
                          <span className="font-bold text-amber-600 mr-3">{index + 1}.</span>
                          <span className="text-gray-700">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-lg p-6">
                    <h4 className="font-bold mb-3">Inspector Checks:</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      {['Structural attachments', 'Electrical connections', 'Grounding & bonding',
                        'Rapid shutdown', 'Labeling & placards', 'Fire setbacks'].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircleIcon className="w-4 h-4 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            }
          />

          {/* Phase 4D: Utility */}
          <InstallPhase
            phase="4D"
            title="Utility Interconnection"
            timeline="Week 2-4"
            content={
              <div className="space-y-6">
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div className="bg-white rounded-lg p-6 border-2 border-gray-200">
                    <div className="text-3xl mb-2">📝</div>
                    <h5 className="font-bold mb-1">Submit</h5>
                    <p className="text-sm text-gray-600">Interconnection application</p>
                  </div>
                  <div className="bg-white rounded-lg p-6 border-2 border-gray-200">
                    <div className="text-3xl mb-2">🔍</div>
                    <h5 className="font-bold mb-1">Review</h5>
                    <p className="text-sm text-gray-600">Utility reviews system</p>
                  </div>
                  <div className="bg-white rounded-lg p-6 border-2 border-green-200">
                    <div className="text-3xl mb-2">✅</div>
                    <h5 className="font-bold mb-1">PTO</h5>
                    <p className="text-sm text-gray-600">Permission to Operate!</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-energy-50 rounded-lg p-6">
                  <h4 className="font-bold text-lg mb-3 flex items-center">
                    <BoltIcon className="w-6 h-6 text-energy-600 mr-2" />
                    Net Metering Setup
                  </h4>
                  <p className="text-gray-700">
                    Bi-directional meter tracks production and consumption, crediting you for excess solar energy.
                    We help with net metering agreement setup.
                  </p>
                </div>
              </div>
            }
          />

          {/* Phase 4E: Activation */}
          <div className="bg-gradient-to-br from-green-500 to-energy-500 rounded-xl shadow-lg p-8 text-white">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <SparklesIcon className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">System Activation & Celebration! 🎉</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">First Day:</h4>
                    <ul className="space-y-1 text-sm opacity-95">
                      <li>✓ Turn system on</li>
                      <li>✓ Verify production</li>
                      <li>✓ Set up monitoring</li>
                      <li>✓ Document performance</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">You're Now:</h4>
                    <ul className="space-y-1 text-sm opacity-95">
                      <li>⚡ Producing clean energy</li>
                      <li>💰 Generating savings</li>
                      <li>🌍 Reducing carbon footprint</li>
                      <li>🎯 25+ years of production ahead!</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Install Phase Component
function InstallPhase({ phase, title, timeline, content }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-3">
        <div className="flex items-center justify-between text-white">
          <div>
            <span className="text-sm font-semibold opacity-90">Phase {phase}</span>
            <h3 className="text-xl font-bold">{title}</h3>
          </div>
          {timeline && (
            <div className="flex items-center bg-white/20 rounded-lg px-3 py-1">
              <ClockIcon className="w-4 h-4 mr-1" />
              <span className="text-sm font-semibold">{timeline}</span>
            </div>
          )}
        </div>
      </div>
      <div className="p-6">
        {content}
      </div>
    </div>
  );
}

// Timeline Summary
function TimelineSummary() {
  const timeline = [
    { phase: 'Consultation', duration: '1 day', yourTime: '30-60 min', ourTime: '30-60 min' },
    { phase: 'Design', duration: '5-7 days', yourTime: '1-2 hours', ourTime: '20-30 hours' },
    { phase: 'Permitting', duration: '2-6 weeks', yourTime: '2-3 hours', ourTime: 'As needed' },
    { phase: 'Equipment', duration: '1-3 weeks', yourTime: 'Varies', ourTime: 'If sourcing' },
    { phase: 'Installation', duration: '1-5 days', yourTime: '2-5 days', ourTime: 'Support' },
    { phase: 'Inspection', duration: '1-2 weeks', yourTime: '2-3 hours', ourTime: 'Support' },
    { phase: 'Interconnection', duration: '2-4 weeks', yourTime: '1-2 hours', ourTime: 'Support' }
  ];

  return (
    <section className="section-container">
      <div className="max-w-6xl mx-auto">
        <h2 className="heading-lg text-center mb-12">Complete Timeline Summary</h2>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-solar-600 to-energy-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Phase</th>
                  <th className="px-6 py-4 text-left font-semibold">Duration</th>
                  <th className="px-6 py-4 text-left font-semibold">Your Time</th>
                  <th className="px-6 py-4 text-left font-semibold">Our Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {timeline.map((row, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-900">{row.phase}</td>
                    <td className="px-6 py-4 text-gray-700">{row.duration}</td>
                    <td className="px-6 py-4 text-gray-700">{row.yourTime}</td>
                    <td className="px-6 py-4 text-gray-700">{row.ourTime}</td>
                  </tr>
                ))}
                <tr className="bg-gray-50 font-bold">
                  <td className="px-6 py-4 text-gray-900">Total</td>
                  <td className="px-6 py-4 text-solar-600">6-12 weeks</td>
                  <td className="px-6 py-4 text-solar-600">~1 week work</td>
                  <td className="px-6 py-4 text-solar-600">Full support</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <p className="text-center text-gray-600 mt-6 text-lg">
          Most of the timeline is waiting (permits, equipment, utility) — not active work on your part
        </p>
      </div>
    </section>
  );
}

// What to Expect
function WhatToExpect() {
  const expectations = [
    {
      title: 'Communication',
      icon: '💬',
      points: [
        'Prompt email responses (24-48 hours)',
        'Scheduled phone calls when needed',
        'Proactive updates on progress',
        'Clear, jargon-free explanations'
      ]
    },
    {
      title: 'Quality',
      icon: '⭐',
      points: [
        'Professional engineering',
        'Code-compliant designs',
        'Detailed documentation',
        'Peer-reviewed work'
      ]
    },
    {
      title: 'Support',
      icon: '🤝',
      points: [
        'Questions answered thoroughly',
        'Patient, educational approach',
        'Troubleshooting assistance',
        'We\'re here until you succeed'
      ]
    },
    {
      title: 'Transparency',
      icon: '🔍',
      points: [
        'Honest timelines',
        'Clear pricing',
        'No hidden fees',
        'Realistic projections'
      ]
    }
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="heading-lg text-center mb-12">What You Can Expect at Each Stage</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {expectations.map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <ul className="space-y-2">
                {item.points.map((point, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-700">
                    <CheckCircleIcon className="w-4 h-4 text-solar-600 mr-2 flex-shrink-0 mt-0.5" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Success Stories
function SuccessStories() {
  const stories = [
    {
      name: 'John M.',
      location: 'Texas',
      system: '8.5kW residential',
      timeline: '8 weeks total',
      approach: 'Mostly DIY, hired electrician for final connection',
      cost: '$11,200',
      professionalQuote: '$24,000',
      savings: '$12,800 (53%)',
      quote: 'The design was incredibly detailed. Permit approved first try. System producing exactly as projected.'
    },
    {
      name: 'Sarah L.',
      location: 'Colorado',
      system: '12kW + Tesla Powerwall',
      timeline: '10 weeks',
      approach: 'DIY with roofer for mounting',
      cost: '$26,500',
      professionalQuote: '$48,000',
      savings: '$21,500 (45%)',
      quote: 'Best investment we\'ve made. The process was smoother than expected, and support was excellent.'
    },
    {
      name: 'Mike R.',
      location: 'Florida',
      system: '10kW residential',
      timeline: '7 weeks (expedited design)',
      approach: '100% DIY',
      cost: '$13,800',
      professionalQuote: '$30,000',
      savings: '$16,200 (54%)',
      quote: 'I\'m not particularly handy, but the instructions were clear. Took my time over three weekends. Worth it!'
    }
  ];

  return (
    <section className="section-container">
      <div className="max-w-6xl mx-auto">
        <h2 className="heading-lg text-center mb-4">Real DIY Solar Success Stories</h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Homeowners just like you who successfully went solar with our guidance
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-solar-500 to-energy-500 text-white p-6">
                <h3 className="text-2xl font-bold mb-1">{story.name}</h3>
                <p className="opacity-90">{story.location}</p>
                <div className="mt-4 space-y-1 text-sm">
                  <p>📊 {story.system}</p>
                  <p>⏱️ {story.timeline}</p>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Approach:</p>
                  <p className="text-sm font-medium">{story.approach}</p>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <div className="grid grid-cols-2 gap-2 text-sm mb-2">
                    <div>
                      <p className="text-gray-600">DIY Cost:</p>
                      <p className="font-bold text-green-700">{story.cost}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Pro Quote:</p>
                      <p className="font-bold text-gray-700 line-through">{story.professionalQuote}</p>
                    </div>
                  </div>
                  <p className="font-bold text-green-600 text-center">Saved: {story.savings}</p>
                </div>

                <blockquote className="border-l-4 border-solar-500 pl-4 italic text-gray-700">
                  "{story.quote}"
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Common Concerns
function CommonConcerns() {
  const concerns = [
    {
      question: "I'm not an electrician - can I really do this?",
      answer: "Many of our clients aren't electricians. Modern solar equipment (especially microinverters) is designed for easier installation. Plus, you can hire an electrician for final connections and still save 30-40%."
    },
    {
      question: "What if I make a mistake?",
      answer: "Our designs ensure you have the right plan. Most \"mistakes\" are easily corrected. We're here to support troubleshooting. Plus, inspections catch issues before system goes live."
    },
    {
      question: "I don't have time for a long project.",
      answer: "Actual installation is typically 2-5 days of work (spread over weekends if needed). Most of the timeline is waiting (permits, equipment, utility) - not active work."
    },
    {
      question: "What if it doesn't work after I install it?",
      answer: "We help troubleshoot until your system is operational. Our designs are proven. If equipment is defective, warranties cover replacement."
    },
    {
      question: "I'm worried about damaging my roof.",
      answer: "Proper flashing techniques prevent leaks. Many DIY'ers hire roofers just for mounting ($1,000-$2,500) and do the rest themselves. Still save substantially."
    }
  ];

  return (
    <section className="bg-gray-50 py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="heading-lg text-center mb-12">Common Concerns Addressed</h2>

        <div className="space-y-6">
          {concerns.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-start">
                <span className="text-solar-500 mr-2 text-xl">Q:</span>
                {item.question}
              </h3>
              <p className="text-gray-700 ml-7">
                <span className="font-semibold text-energy-600 mr-2">A:</span>
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section className="bg-gradient-to-br from-solar-600 via-solar-500 to-energy-500 text-white py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="heading-lg mb-4">Ready to Begin Your Solar Journey?</h2>
        <p className="text-xl mb-8 opacity-95">
          Join thousands of homeowners who've successfully gone solar with our guidance
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link href="/calculator" className="bg-white text-solar-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl">
            Calculate Your System
          </Link>
          <Link href="/design-request" className="bg-energy-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-energy-700 transition-colors shadow-lg hover:shadow-xl">
            Request Design Quote
          </Link>
          <Link href="/contact" className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-colors">
            Schedule Consultation
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm opacity-90">
          <div className="flex items-center">
            <ShieldCheckIcon className="w-5 h-5 mr-2" />
            <span>98% approval rate</span>
          </div>
          <div className="flex items-center">
            <ClockIcon className="w-5 h-5 mr-2" />
            <span>5-7 day design</span>
          </div>
          <div className="flex items-center">
            <CheckCircleIcon className="w-5 h-5 mr-2" />
            <span>Licensed PE engineers</span>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20">
          <h3 className="text-xl font-semibold mb-4">Still Have Questions?</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/faq" className="hover:underline">FAQ</Link>
            <Link href="/contact" className="hover:underline">Contact Us</Link>
            <a href="tel:1-800-XXX-XXXX" className="hover:underline">📞 1-800-XXX-XXXX</a>
            <a href="mailto:info@diysolar.com" className="hover:underline">✉️ info@diysolar.com</a>
          </div>
        </div>
      </div>
    </section>
  );
}
