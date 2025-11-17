import React, { useState } from 'react';

export default function SavingsCalculator() {
  const [systemSize, setSystemSize] = useState(8);

  // Calculate costs based on system size
  const calculateCosts = (size) => {
    // Professional installation: ~$3,000 per kW
    const professionalCost = Math.round(size * 3000);

    // DIY equipment: ~$1,200-1,400 per kW (using $1,300 average)
    const equipmentCost = Math.round(size * 1300);

    // Our design service (using most popular package)
    const ourService = 995;

    // Total DIY cost
    const totalDIY = equipmentCost + ourService;

    // Savings
    const saved = professionalCost - totalDIY;
    const savingsPercent = Math.round((saved / professionalCost) * 100);

    return {
      professionalCost,
      equipmentCost,
      ourService,
      totalDIY,
      saved,
      savingsPercent
    };
  };

  const costs = calculateCosts(systemSize);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 shadow-lg">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          See Your Potential Savings
        </h2>
        <p className="text-gray-600">
          Calculate how much you'll save with DIY Solar Consultants vs. professional installation
        </p>
      </div>

      {/* System Size Slider */}
      <div className="mb-8">
        <label className="block text-center mb-4">
          <span className="text-lg font-semibold text-gray-900">System Size:</span>
          <span className="ml-2 text-3xl font-bold text-green-600">{systemSize} kW</span>
        </label>
        <input
          type="range"
          min="4"
          max="20"
          step="0.5"
          value={systemSize}
          onChange={(e) => setSystemSize(parseFloat(e.target.value))}
          className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          style={{
            background: `linear-gradient(to right, #16a34a 0%, #16a34a ${((systemSize - 4) / 16) * 100}%, #e5e7eb ${((systemSize - 4) / 16) * 100}%, #e5e7eb 100%)`
          }}
        />
        <div className="flex justify-between text-sm text-gray-600 mt-2">
          <span>4 kW</span>
          <span>20 kW</span>
        </div>
      </div>

      {/* Results */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Professional Installation */}
        <div className="bg-white rounded-xl p-6 shadow-md">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <svg className="w-6 h-6 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            Professional Installation
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center pb-3 border-b border-gray-200">
              <span className="text-gray-600">Total Cost:</span>
              <span className="text-2xl font-bold text-red-600">{formatCurrency(costs.professionalCost)}</span>
            </div>
            <div className="text-sm text-gray-500">
              Includes: Installation, equipment, permitting, overhead, profit margin
            </div>
          </div>
        </div>

        {/* DIY Installation */}
        <div className="bg-white rounded-xl p-6 shadow-md border-2 border-green-500">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <svg className="w-6 h-6 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            DIY with Our Service
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-600">Equipment:</span>
              <span className="font-semibold text-gray-900">{formatCurrency(costs.equipmentCost)}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-600">Our Services:</span>
              <span className="font-semibold text-gray-900">{formatCurrency(costs.ourService)}</span>
            </div>
            <div className="flex justify-between items-center pt-3 border-t-2 border-green-200">
              <span className="text-gray-900 font-bold">Total DIY Cost:</span>
              <span className="text-2xl font-bold text-green-600">{formatCurrency(costs.totalDIY)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Savings Display */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-8 text-white text-center shadow-xl">
        <div className="mb-2 text-lg font-semibold">Your Total Savings</div>
        <div className="text-5xl font-bold mb-2">{formatCurrency(costs.saved)}</div>
        <div className="text-2xl font-semibold">({costs.savingsPercent}% savings)</div>
        <div className="mt-6 pt-6 border-t border-green-500">
          <p className="text-green-100">
            That's enough to buy a new {costs.saved > 15000 ? 'electric vehicle' : costs.saved > 10000 ? 'home battery system' : costs.saved > 5000 ? 'high-end appliance' : 'vacation'}!
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-8">
        <button className="bg-gray-900 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl">
          Get Your Custom Quote
        </button>
        <p className="text-sm text-gray-600 mt-4">
          These are estimates. Actual costs vary by location, equipment, and complexity.
        </p>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #16a34a;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }

        .slider::-moz-range-thumb {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #16a34a;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  );
}
