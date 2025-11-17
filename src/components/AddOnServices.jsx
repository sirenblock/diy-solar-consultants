import React from 'react';

export default function AddOnServices({ addons }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {addons.map((addon) => (
        <div
          key={addon.id}
          className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-green-500 hover:shadow-lg transition-all"
        >
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-lg font-bold text-gray-900 flex-1">{addon.name}</h3>
            <div className="ml-2">
              {addon.price !== null ? (
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-600">
                    {addon.priceNote || `+$${addon.price}`}
                  </div>
                </div>
              ) : addon.priceRange ? (
                <div className="text-right">
                  <div className="text-lg font-bold text-green-600">{addon.priceRange}</div>
                </div>
              ) : (
                <div className="text-right">
                  <div className="text-sm font-semibold text-gray-600">{addon.priceNote}</div>
                </div>
              )}
            </div>
          </div>

          <p className="text-gray-700 text-sm mb-4">{addon.description}</p>

          {addon.compatibleWith && (
            <div className="mb-3 p-3 bg-blue-50 rounded-lg">
              <div className="text-xs font-semibold text-blue-900 mb-1">Compatible With:</div>
              <div className="text-xs text-blue-700">{addon.compatibleWith}</div>
            </div>
          )}

          {addon.bestFor && (
            <div className="mb-3 p-3 bg-green-50 rounded-lg">
              <div className="text-xs font-semibold text-green-900 mb-1">When to Choose:</div>
              <div className="text-xs text-green-700">{addon.bestFor}</div>
            </div>
          )}

          {addon.requiredFor && (
            <div className="mb-3 p-3 bg-yellow-50 rounded-lg">
              <div className="text-xs font-semibold text-yellow-900 mb-1">Required For:</div>
              <div className="text-xs text-yellow-700">{addon.requiredFor}</div>
            </div>
          )}

          {addon.usefulFor && (
            <div className="mb-3 p-3 bg-purple-50 rounded-lg">
              <div className="text-xs font-semibold text-purple-900 mb-1">Useful For:</div>
              <div className="text-xs text-purple-700">{addon.usefulFor}</div>
            </div>
          )}

          {addon.recommendedFor && (
            <div className="mb-3 p-3 bg-indigo-50 rounded-lg">
              <div className="text-xs font-semibold text-indigo-900 mb-1">Recommended For:</div>
              <div className="text-xs text-indigo-700">{addon.recommendedFor}</div>
            </div>
          )}

          {addon.successRate && (
            <div className="mb-3 p-3 bg-green-100 border border-green-300 rounded-lg">
              <div className="text-xs font-semibold text-green-900">Success Rate: {addon.successRate}</div>
            </div>
          )}

          {addon.benefit && (
            <div className="mb-3 p-3 bg-green-50 rounded-lg">
              <div className="text-xs font-semibold text-green-900 mb-1">Benefit:</div>
              <div className="text-xs text-green-700">{addon.benefit}</div>
            </div>
          )}

          {addon.note && (
            <div className="text-xs text-gray-600 italic mt-2">
              Note: {addon.note}
            </div>
          )}

          {addon.contact && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <button className="w-full bg-gray-800 text-white py-2 px-4 rounded-lg text-sm font-semibold hover:bg-gray-900 transition-all">
                {addon.contact}
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
