import React from 'react';

export default function PaymentInfo({ paymentInfo, guarantee }) {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Payment Information */}
      <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-gray-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Payment & Guarantee</h3>

        {/* Payment Methods */}
        <div className="mb-6">
          <h4 className="font-bold text-gray-900 mb-3 flex items-center">
            <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
            Payment Methods Accepted
          </h4>
          <ul className="space-y-2">
            {paymentInfo.methods.map((method, index) => (
              <li key={index} className="flex items-start">
                <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-700">{method}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Payment Terms */}
        <div className="mb-6">
          <h4 className="font-bold text-gray-900 mb-3 flex items-center">
            <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Payment Terms
          </h4>
          <ul className="space-y-2">
            {paymentInfo.terms.map((term, index) => (
              <li key={index} className="flex items-start">
                <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-700">{term}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Financing */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-bold text-blue-900 mb-2">Financing Options</h4>
          <p className="text-sm text-blue-800 mb-3">{paymentInfo.financing.description}</p>
          <ul className="space-y-1 mb-3">
            {paymentInfo.financing.options.map((option, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-sm text-blue-800">{option}</span>
              </li>
            ))}
          </ul>
          <p className="text-xs text-blue-700 italic">{paymentInfo.financing.note}</p>
        </div>
      </div>

      {/* Money-Back Guarantee */}
      <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl shadow-lg p-8 border-2 border-green-300">
        <div className="flex items-center mb-4">
          <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mr-4">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-green-900">{guarantee.title}</h3>
            <div className="text-green-700 font-semibold">100% Satisfaction</div>
          </div>
        </div>

        <p className="text-gray-800 mb-6 leading-relaxed">{guarantee.description}</p>

        <div className="mb-6">
          <h4 className="font-bold text-green-900 mb-3">What This Means:</h4>
          <ul className="space-y-2">
            {guarantee.points.map((point, index) => (
              <li key={index} className="flex items-start">
                <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-800">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-lg p-4 border border-green-300">
          <h4 className="font-bold text-green-900 mb-2">Our Confidence:</h4>
          <div className="grid grid-cols-2 gap-3">
            {guarantee.confidence.map((stat, index) => (
              <div key={index} className="flex items-start">
                <svg className="w-4 h-4 text-green-600 mr-1 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-xs text-gray-800">{stat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
