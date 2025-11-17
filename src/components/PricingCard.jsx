import React from 'react';

export default function PricingCard({ pkg, onSelect }) {
  const {
    id,
    name,
    price,
    priceNote,
    badge,
    featured,
    subtitle,
    savingsBadge,
    timeline,
    successRate,
    includes,
    excludes,
    bestFor,
    typicalSavings
  } = pkg;

  return (
    <div
      className={`relative rounded-2xl border-2 p-8 transition-all hover:shadow-xl ${
        featured
          ? 'border-green-600 bg-green-50 shadow-lg scale-105'
          : 'border-gray-200 bg-white hover:border-green-300'
      }`}
    >
      {/* Badge */}
      {badge && (
        <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-sm font-bold ${
          featured
            ? 'bg-green-600 text-white'
            : 'bg-gray-800 text-white'
        }`}>
          {badge}
        </div>
      )}

      {/* Header */}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
        <div className="mb-4">
          {price === 0 ? (
            <div>
              <div className="text-4xl font-bold text-green-600">FREE</div>
              {priceNote && <div className="text-sm text-gray-600 mt-1">{priceNote}</div>}
            </div>
          ) : (
            <div>
              <span className="text-5xl font-bold text-gray-900">${price}</span>
            </div>
          )}
        </div>
        <p className="text-gray-600">{subtitle}</p>
        {savingsBadge && (
          <div className="mt-3 inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
            {savingsBadge}
          </div>
        )}
      </div>

      {/* Success Rate */}
      {successRate && (
        <div className="mb-6 p-3 bg-green-100 border border-green-300 rounded-lg text-center">
          <div className="text-green-800 font-semibold">{successRate}</div>
        </div>
      )}

      {/* What's Included */}
      <div className="mb-6">
        <h4 className="font-bold text-gray-900 mb-3">What's Included:</h4>
        <ul className="space-y-2">
          {includes.map((item, index) => (
            <li key={index} className="flex items-start">
              <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* What's NOT Included */}
      {excludes && excludes.length > 0 && (
        <div className="mb-6">
          <h4 className="font-bold text-gray-900 mb-3">NOT Included:</h4>
          <ul className="space-y-2">
            {excludes.map((item, index) => (
              <li key={index} className="flex items-start">
                <svg className="w-5 h-5 text-gray-400 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-500">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Timeline */}
      {timeline && (
        <div className="mb-6 p-3 bg-gray-50 rounded-lg">
          <div className="text-sm font-semibold text-gray-700 mb-1">Timeline:</div>
          <div className="text-sm text-gray-600 whitespace-pre-line">{timeline}</div>
        </div>
      )}

      {/* Typical Savings */}
      {typicalSavings && (
        <div className="mb-6">
          <h4 className="font-bold text-gray-900 mb-3">Typical Savings:</h4>
          <ul className="space-y-2">
            {typicalSavings.map((item, index) => (
              <li key={index} className="flex items-start">
                <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Best For */}
      {bestFor && (
        <div className="mb-6">
          <h4 className="font-bold text-gray-900 mb-3">Best For:</h4>
          <ul className="space-y-2">
            {bestFor.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span className="text-sm text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* CTA Button */}
      <button
        onClick={() => onSelect && onSelect(pkg)}
        className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition-all ${
          featured
            ? 'bg-green-600 text-white hover:bg-green-700 shadow-md hover:shadow-lg'
            : 'bg-gray-800 text-white hover:bg-gray-900'
        }`}
      >
        {id === 'consultation' ? 'Schedule Free Consultation' :
         id === 'design-permit' ? 'Get Started' :
         id === 'full-service' ? 'Get Complete Package' :
         'Get Design Quote'}
      </button>
    </div>
  );
}
