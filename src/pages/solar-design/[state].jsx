import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StateFAQ from '@/components/StateFAQ';
import StateTestimonialCard from '@/components/StateTestimonialCard';
import { getStateData, getStatesList } from '@/data/stateInfo';
import {
  generateLocalBusinessSchema,
  generateBreadcrumbSchema,
  generateFAQSchema
} from '@/utils/localSchema';

export default function StatePage({ state }) {
  if (!state) {
    return (
      <>
        <Head>
          <title>State Not Found | DIY Solar Consultants</title>
        </Head>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">State Not Found</h1>
            <Link href="/" className="btn-primary">
              Return Home
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const localBusinessSchema = generateLocalBusinessSchema(state);
  const breadcrumbSchema = generateBreadcrumbSchema(state);
  const faqSchema = generateFAQSchema(state.faqs);

  return (
    <>
      <Head>
        <title>
          Solar Design Services in {state.name} | Licensed PE Engineers | DIY Solar Consultants
        </title>
        <meta
          name="description"
          content={`Professional solar system design for ${state.name} homeowners. Licensed PE engineers, ${state.name}-specific permitting expertise, ${state.incentiveCount}+ incentives. Save 40-60% on installation costs.`}
        />
        <meta
          name="keywords"
          content={`solar design ${state.name}, solar engineer ${state.name}, solar permitting ${state.name}, PE stamp solar ${state.name}, DIY solar ${state.name}, ${state.name} solar incentives`}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        <meta property="og:title" content={`Solar Design Services in ${state.name} | DIY Solar Consultants`} />
        <meta property="og:description" content={`Licensed PE solar engineers serving ${state.name}. Get professional solar designs optimized for ${state.name}'s climate, codes, and incentives.`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://diysolarconsultants.com/solar-design/${state.slug}`} />

        <link rel="canonical" href={`https://diysolarconsultants.com/solar-design/${state.slug}`} />
      </Head>

      <Header />

      <main>
        <section className="pt-20 pb-16 bg-gradient-to-br from-solar-600 to-solar-800 text-white">
          <div className="container mx-auto px-4 max-w-6xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Solar Design Services in {state.name}
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 leading-relaxed">
              Licensed Professional Engineers helping {state.name} homeowners go solar.
              {state.name}-specific permitting, local incentive guidance, and expert support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/design-request" className="btn-primary bg-white text-solar-600 hover:bg-gray-100 text-lg px-8 py-3">
                Get Your {state.name} Solar Design
              </Link>
              <a href="#incentives" className="btn-secondary border-2 border-white text-white hover:bg-white hover:text-solar-600 text-lg px-8 py-3">
                View {state.name} Incentives
              </a>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold">{state.systemsDesigned}</div>
                <div className="text-sm opacity-90">Systems Designed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold">{state.avgSystemSize}</div>
                <div className="text-sm opacity-90">Avg System Size</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold">{state.avgSavings}</div>
                <div className="text-sm opacity-90">Average Savings</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold">{state.incentiveCount}</div>
                <div className="text-sm opacity-90">Available Incentives</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Why {state.name} Homeowners Choose Us
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-solar-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-solar-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {state.name} Permitting Experts
                </h3>
                <p className="text-gray-700">
                  We understand {state.name}'s unique permitting requirements including {state.specialRequirement}.
                  Our engineers are licensed in {state.name} and have completed {state.systemsDesigned} solar
                  designs in the state.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-energy-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-energy-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  Local Incentive Knowledge
                </h3>
                <p className="text-gray-700">
                  Navigate {state.name}'s solar incentive programs including {state.topIncentive}.
                  We'll help you maximize available rebates and tax credits specific to {state.name} residents.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {state.climate.charAt(0).toUpperCase() + state.climate.slice(1)} Climate Optimized
                </h3>
                <p className="text-gray-700">
                  Designs optimized for {state.name}'s {state.climate} climate and weather patterns.
                  {state.specialConsideration}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="incentives" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900">
              {state.name} Solar Incentives & Rebates
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Take advantage of {state.incentiveCount} solar incentives available to {state.name} homeowners
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {state.incentives.map((incentive, i) => (
                <div key={i} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-gray-900 flex-grow pr-4">
                      {incentive.name}
                    </h3>
                    <span className="text-2xl flex-shrink-0">💰</span>
                  </div>
                  <p className="text-gray-600 mb-4">{incentive.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-solar-600 font-bold text-xl">
                      {incentive.value}
                    </span>
                    <span className="text-sm text-gray-500">
                      Expires: {incentive.expires}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
              Serving Major Cities in {state.name}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {state.majorCities.map((city, i) => (
                <div key={i} className="text-center p-4 bg-gray-50 rounded-lg hover:bg-solar-50 transition-colors">
                  <div className="text-2xl mb-2">📍</div>
                  <h3 className="font-bold text-gray-900">{city.name}</h3>
                  <p className="text-sm text-gray-600">{city.systemsCompleted} systems</p>
                  <p className="text-xs text-gray-500">{city.population}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900">
              {state.name} Customer Success Stories
            </h2>
            <p className="text-center text-gray-600 mb-12">
              See what {state.name} homeowners are saying about our solar design services
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {state.testimonials.map((testimonial, i) => (
                <StateTestimonialCard key={i} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">
              We Work With All {state.name} Utilities
            </h2>
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="grid md:grid-cols-3 gap-4">
                {state.utilityCompanies.map((utility, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-700">
                    <svg className="w-5 h-5 text-solar-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{utility}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900">
              Frequently Asked Questions - {state.name}
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Common questions from {state.name} homeowners about solar design and permitting
            </p>
            <StateFAQ faqs={state.faqs} />
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-solar-600 to-energy-600 text-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Go Solar in {state.name}?
            </h2>
            <p className="text-xl mb-8">
              Join {state.homeownerCount}+ {state.name} homeowners who've gone solar with our expert guidance.
              Get your professional PE-stamped solar design today.
            </p>
            <Link
              href="/design-request"
              className="inline-block bg-white text-solar-600 hover:bg-gray-100 font-bold text-lg px-10 py-4 rounded-lg transition-colors"
            >
              Request Your {state.name} Solar Design
            </Link>
            <p className="mt-6 text-sm opacity-90">
              Average electric rate in {state.name}: {state.avgElectricRate} |
              Average savings: {state.avgSavings}
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const states = getStatesList();

  return {
    paths: states.map(state => ({
      params: { state: state.slug }
    })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const stateData = getStateData(params.state);

  if (!stateData) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      state: stateData
    }
  };
}
