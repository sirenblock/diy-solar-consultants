import React from 'react';

export default function SuccessStories({ stories }) {
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {stories.map((story, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all border-2 border-gray-200 hover:border-green-500"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6">
            <div className="flex items-center mb-2">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-green-600 font-bold text-xl mr-3">
                {story.name.charAt(0)}
              </div>
              <div>
                <div className="font-bold text-lg">{story.name}</div>
                <div className="text-green-100 text-sm">{story.location}</div>
              </div>
            </div>
            <div className="text-2xl font-bold mt-2">{story.systemSize}</div>
          </div>

          {/* Cost Breakdown */}
          <div className="p-6">
            <div className="space-y-3 mb-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">Our Fee:</span>
                <span className="font-semibold text-gray-900">{formatCurrency(story.ourFee)}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">Equipment:</span>
                <span className="font-semibold text-gray-900">{formatCurrency(story.equipment)}</span>
              </div>
              {story.otherCosts > 0 && (
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">{story.otherCostsLabel}:</span>
                  <span className="font-semibold text-gray-900">{formatCurrency(story.otherCosts)}</span>
                </div>
              )}
              <div className="flex justify-between items-center pt-3 border-t-2 border-gray-200">
                <span className="font-bold text-gray-900">Total DIY:</span>
                <span className="font-bold text-green-600 text-lg">{formatCurrency(story.totalDIY)}</span>
              </div>
            </div>

            {/* vs Professional */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-700">Professional Quote:</span>
                <span className="font-bold text-red-600">{formatCurrency(story.professionalQuote)}</span>
              </div>
            </div>

            {/* Savings */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-4 text-white text-center">
              <div className="text-sm font-semibold mb-1">Total Saved</div>
              <div className="text-3xl font-bold">{formatCurrency(story.saved)}</div>
              <div className="text-lg font-semibold">({story.savingsPercent}% savings)</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
