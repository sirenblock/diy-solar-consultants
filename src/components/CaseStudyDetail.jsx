import { useState, useEffect } from 'react';
import ImageGallery from './ImageGallery';

export default function CaseStudyDetail({ caseStudy, onClose }) {
  const [activeTab, setActiveTab] = useState('overview');

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!caseStudy) return null;

  const formatCurrency = (amount) => {
    if (typeof amount !== 'number') return amount;
    return `$${amount.toLocaleString()}`;
  };

  const {
    name,
    category,
    stats,
    background,
    challenges,
    solution,
    system,
    costs,
    testimonial,
    results,
    lessonsLearned,
    photos
  } = caseStudy;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="flex items-center justify-center min-h-screen p-4">
          <div className="relative bg-white rounded-lg shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="sticky top-4 right-4 float-right z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
              aria-label="Close"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Header */}
            <div className="px-6 sm:px-8 pt-8 pb-6">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-solar-100 text-solar-700 rounded-full text-sm font-semibold mb-3">
                  {category}
                </span>
                <h2 className="heading-lg text-gray-900 mb-2">{name}</h2>
                <p className="text-lg text-gray-600">{stats.location}</p>
              </div>

              {/* Key Stats Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-gradient-to-r from-solar-50 to-energy-50 rounded-lg p-4">
                <div>
                  <p className="text-xs text-gray-600 mb-1">System Size</p>
                  <p className="text-2xl font-bold text-solar-600">{stats.systemSize}kW</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 mb-1">Timeline</p>
                  <p className="text-lg font-semibold text-gray-900">{stats.timeline}</p>
                </div>
                {costs.savingsPercent !== 'N/A' && (
                  <>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Total Savings</p>
                      <p className="text-lg font-semibold text-energy-600">
                        {formatCurrency(costs.savings)}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Savings</p>
                      <p className="text-2xl font-bold text-energy-600">{costs.savingsPercent}%</p>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="border-b border-gray-200 px-6 sm:px-8">
              <nav className="flex gap-6 overflow-x-auto">
                {['overview', 'system', 'costs', 'results'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`py-3 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                      activeTab === tab
                        ? 'border-solar-600 text-solar-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </nav>
            </div>

            {/* Tab Content */}
            <div className="px-6 sm:px-8 py-6">
              {/* Overview Tab */}
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  {/* Client Background */}
                  <section>
                    <h3 className="heading-sm text-gray-900 mb-3">Client Background</h3>
                    <p className="text-gray-700 leading-relaxed">{background}</p>
                  </section>

                  {/* Challenges */}
                  <section>
                    <h3 className="heading-sm text-gray-900 mb-3">Project Challenges</h3>
                    <ul className="space-y-2">
                      {challenges.map((challenge, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-solar-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                          <span className="text-gray-700">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  {/* Solution */}
                  <section>
                    <h3 className="heading-sm text-gray-900 mb-3">Our Solution</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">{solution.description}</p>
                    <ul className="space-y-2">
                      {solution.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-energy-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  {/* Photo Gallery */}
                  {photos && photos.length > 0 && (
                    <section>
                      <h3 className="heading-sm text-gray-900 mb-3">Photo Gallery</h3>
                      <ImageGallery photos={photos} />
                    </section>
                  )}
                </div>
              )}

              {/* System Tab */}
              {activeTab === 'system' && (
                <div className="space-y-6">
                  <section>
                    <h3 className="heading-sm text-gray-900 mb-4">System Specifications</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Panels */}
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <svg className="w-5 h-5 text-solar-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
                          </svg>
                          Solar Panels
                        </h4>
                        <dl className="space-y-2">
                          <div>
                            <dt className="text-sm text-gray-600">Model</dt>
                            <dd className="font-medium text-gray-900">{system.panels.model}</dd>
                          </div>
                          <div>
                            <dt className="text-sm text-gray-600">Quantity</dt>
                            <dd className="font-medium text-gray-900">{system.panels.quantity} panels</dd>
                          </div>
                          <div>
                            <dt className="text-sm text-gray-600">Warranty</dt>
                            <dd className="font-medium text-gray-900">{system.panels.warranty}</dd>
                          </div>
                        </dl>
                      </div>

                      {/* Inverter */}
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <svg className="w-5 h-5 text-solar-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                          Inverter System
                        </h4>
                        <p className="font-medium text-gray-900">{system.inverter}</p>
                      </div>

                      {/* Battery (if applicable) */}
                      {system.battery && (
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                            <svg className="w-5 h-5 text-solar-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                            Battery Storage
                          </h4>
                          <p className="font-medium text-gray-900">{system.battery}</p>
                        </div>
                      )}

                      {/* Mounting */}
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <svg className="w-5 h-5 text-solar-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                          Mounting System
                        </h4>
                        <p className="font-medium text-gray-900">{system.mounting}</p>
                      </div>

                      {/* Production Stats */}
                      <div className="bg-gradient-to-br from-energy-50 to-energy-100 rounded-lg p-4 md:col-span-2">
                        <h4 className="font-semibold text-gray-900 mb-3">Production & Savings</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <dt className="text-sm text-gray-600">Annual Production</dt>
                            <dd className="text-2xl font-bold text-energy-600">
                              {system.annualProduction.toLocaleString()} kWh
                            </dd>
                          </div>
                          <div>
                            <dt className="text-sm text-gray-600">Annual Savings</dt>
                            <dd className="text-2xl font-bold text-energy-600">
                              {formatCurrency(system.annualSavings)}
                            </dd>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              )}

              {/* Costs Tab */}
              {activeTab === 'costs' && (
                <div className="space-y-6">
                  <section>
                    <h3 className="heading-sm text-gray-900 mb-4">Cost Breakdown</h3>

                    {/* DIY Costs */}
                    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-6">
                      <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
                        <h4 className="font-semibold text-gray-900">DIY Project Costs</h4>
                      </div>
                      <div className="divide-y divide-gray-200">
                        <div className="px-4 py-3 flex justify-between">
                          <span className="text-gray-700">Equipment</span>
                          <span className="font-semibold">{formatCurrency(costs.equipment)}</span>
                        </div>
                        {costs.battery && (
                          <div className="px-4 py-3 flex justify-between">
                            <span className="text-gray-700">Battery System</span>
                            <span className="font-semibold">{formatCurrency(costs.battery)}</span>
                          </div>
                        )}
                        {costs.groundMount && (
                          <div className="px-4 py-3 flex justify-between">
                            <span className="text-gray-700">Ground Mount Structure</span>
                            <span className="font-semibold">{formatCurrency(costs.groundMount)}</span>
                          </div>
                        )}
                        <div className="px-4 py-3 flex justify-between">
                          <span className="text-gray-700">Design + Permitting</span>
                          <span className="font-semibold">
                            {formatCurrency(costs.designPermitting || costs.designEngineering || costs.design)}
                          </span>
                        </div>
                        {costs.electrician && (
                          <div className="px-4 py-3 flex justify-between">
                            <span className="text-gray-700">Electrician</span>
                            <span className="font-semibold">{formatCurrency(costs.electrician)}</span>
                          </div>
                        )}
                        {costs.roofer && (
                          <div className="px-4 py-3 flex justify-between">
                            <span className="text-gray-700">Roofer (mounting)</span>
                            <span className="font-semibold">{formatCurrency(costs.roofer)}</span>
                          </div>
                        )}
                        {costs.contractors && (
                          <div className="px-4 py-3 flex justify-between">
                            <span className="text-gray-700">Installation Contractors</span>
                            <span className="font-semibold">{formatCurrency(costs.contractors)}</span>
                          </div>
                        )}
                        <div className="px-4 py-3 flex justify-between bg-gray-50 font-semibold">
                          <span className="text-gray-900">Total DIY Cost</span>
                          <span className="text-gray-900">{formatCurrency(costs.totalDIY)}</span>
                        </div>
                        <div className="px-4 py-3 flex justify-between bg-energy-50">
                          <span className="text-gray-900 font-semibold">After 30% Tax Credit</span>
                          <span className="text-lg font-bold text-energy-600">
                            {formatCurrency(costs.afterTaxCredit || costs.afterIncentives)}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Comparison */}
                    {costs.savingsPercent !== 'N/A' && (
                      <div className="bg-gradient-to-r from-solar-50 to-energy-50 rounded-lg p-6">
                        <h4 className="font-semibold text-gray-900 mb-4">Savings Comparison</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          <div className="text-center">
                            <p className="text-sm text-gray-600 mb-1">Professional Quote</p>
                            <p className="text-xl font-bold text-gray-900">
                              {formatCurrency(costs.professionalQuote)}
                            </p>
                          </div>
                          <div className="text-center">
                            <p className="text-sm text-gray-600 mb-1">Total Savings</p>
                            <p className="text-2xl font-bold text-energy-600">
                              {formatCurrency(costs.savings)}
                            </p>
                          </div>
                          <div className="text-center">
                            <p className="text-sm text-gray-600 mb-1">Savings Percentage</p>
                            <p className="text-2xl font-bold text-energy-600">{costs.savingsPercent}%</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </section>
                </div>
              )}

              {/* Results Tab */}
              {activeTab === 'results' && (
                <div className="space-y-6">
                  {/* Results List */}
                  <section>
                    <h3 className="heading-sm text-gray-900 mb-4">Project Results</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {results.map((result, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 bg-energy-50 rounded-lg p-3"
                        >
                          <svg className="w-6 h-6 text-energy-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700 font-medium">{result.text}</span>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Testimonial */}
                  {testimonial && (
                    <section>
                      <h3 className="heading-sm text-gray-900 mb-4">Installation Experience</h3>
                      <div className="bg-gradient-to-br from-solar-50 to-solar-100 rounded-lg p-6">
                        <div className="flex items-center gap-1 mb-3">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-5 h-5 ${
                                i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
                              }`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <blockquote className="text-gray-700 text-lg italic mb-4">
                          "{testimonial.text}"
                        </blockquote>
                        <p className="text-gray-900 font-semibold">
                          - {testimonial.author}, {testimonial.location}
                        </p>
                      </div>
                    </section>
                  )}

                  {/* Lessons Learned */}
                  {lessonsLearned && (
                    <section>
                      <h3 className="heading-sm text-gray-900 mb-3">Lessons Learned</h3>
                      <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-4">
                        <p className="text-gray-700 italic">"{lessonsLearned}"</p>
                      </div>
                    </section>
                  )}
                </div>
              )}
            </div>

            {/* Footer CTA */}
            <div className="border-t border-gray-200 bg-gray-50 px-6 sm:px-8 py-6">
              <div className="text-center">
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Ready to Create Your Own Success Story?
                </h4>
                <p className="text-gray-600 mb-4">
                  Join thousands of homeowners who've successfully gone solar with our professional design services
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button className="btn-primary">
                    Request Your Design Quote
                  </button>
                  <button className="btn-secondary">
                    Calculate Your System Size
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
