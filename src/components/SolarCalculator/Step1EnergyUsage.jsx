import React from 'react';

const Step1EnergyUsage = ({ inputs, onChange }) => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Tell us about your energy usage
        </h2>
        <p className="text-gray-600">
          We'll use this to calculate the right system size for your home
        </p>
      </div>

      {/* Toggle between Bill and kWh */}
      <div className="flex gap-4 p-1 bg-gray-100 rounded-lg w-fit">
        <button
          type="button"
          onClick={() => onChange('usageInputType', 'bill')}
          className={`px-6 py-2 rounded-md font-medium transition-colors ${
            inputs.usageInputType === 'bill'
              ? 'bg-white text-solar-700 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Monthly Bill
        </button>
        <button
          type="button"
          onClick={() => onChange('usageInputType', 'kwh')}
          className={`px-6 py-2 rounded-md font-medium transition-colors ${
            inputs.usageInputType === 'kwh'
              ? 'bg-white text-solar-700 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Monthly kWh
        </button>
      </div>

      {/* Monthly Bill Input */}
      {inputs.usageInputType === 'bill' ? (
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Average Monthly Electric Bill
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg">
              $
            </span>
            <input
              type="number"
              value={inputs.monthlyBill}
              onChange={(e) => onChange('monthlyBill', parseFloat(e.target.value) || 0)}
              min="0"
              step="10"
              className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-solar-500 focus:ring-2 focus:ring-solar-200 outline-none text-lg"
              placeholder="150"
            />
          </div>
          <p className="mt-2 text-sm text-gray-500">
            Find this on your utility bill. We'll use this to estimate your usage.
          </p>

          {/* Range slider for visual feedback */}
          <div className="mt-4">
            <input
              type="range"
              value={inputs.monthlyBill}
              onChange={(e) => onChange('monthlyBill', parseFloat(e.target.value))}
              min="50"
              max="1000"
              step="10"
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-solar-600"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>$50</span>
              <span>$500</span>
              <span>$1,000+</span>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Average Monthly kWh Usage
          </label>
          <div className="relative">
            <input
              type="number"
              value={inputs.monthlyKwh}
              onChange={(e) => onChange('monthlyKwh', parseFloat(e.target.value) || 0)}
              min="0"
              step="50"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-solar-500 focus:ring-2 focus:ring-solar-200 outline-none text-lg"
              placeholder="900"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg">
              kWh
            </span>
          </div>
          <p className="mt-2 text-sm text-gray-500">
            If you know your usage in kWh, enter it here. Find this on your utility bill.
          </p>

          {/* Range slider */}
          <div className="mt-4">
            <input
              type="range"
              value={inputs.monthlyKwh}
              onChange={(e) => onChange('monthlyKwh', parseFloat(e.target.value))}
              min="200"
              max="3000"
              step="50"
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-solar-600"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>200 kWh</span>
              <span>1,500 kWh</span>
              <span>3,000+ kWh</span>
            </div>
          </div>
        </div>
      )}

      {/* Utility Rate */}
      <div className="pt-6 border-t border-gray-200">
        <div className="flex items-center justify-between mb-2">
          <label className="block text-sm font-semibold text-gray-700">
            Electricity Rate ($/kWh)
          </label>
          <button
            type="button"
            onClick={() => onChange('customRate', !inputs.customRate)}
            className="text-sm text-solar-600 hover:text-solar-700 font-medium"
          >
            {inputs.customRate ? 'Use State Average' : 'Enter Custom Rate'}
          </button>
        </div>

        {inputs.customRate ? (
          <>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                $
              </span>
              <input
                type="number"
                value={inputs.utilityRate}
                onChange={(e) => onChange('utilityRate', parseFloat(e.target.value) || 0)}
                min="0"
                max="1"
                step="0.01"
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-solar-500 focus:ring-2 focus:ring-solar-200 outline-none"
                placeholder="0.14"
              />
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Enter your exact rate from your utility bill, or we'll estimate based on your location.
            </p>
          </>
        ) : (
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-lg font-semibold text-gray-900">
              ${inputs.utilityRate.toFixed(2)} / kWh
            </p>
            <p className="text-sm text-gray-600 mt-1">
              {inputs.state
                ? `Average rate for ${inputs.state}`
                : 'National average - will update based on your state'
              }
            </p>
          </div>
        )}
      </div>

      {/* Estimated Annual Usage Preview */}
      <div className="mt-6 p-4 bg-solar-50 border-l-4 border-solar-500 rounded-r-lg">
        <p className="text-sm font-semibold text-gray-700">Estimated Annual Usage</p>
        <p className="text-2xl font-bold text-solar-700 mt-1">
          {inputs.usageInputType === 'bill'
            ? Math.round((inputs.monthlyBill / inputs.utilityRate) * 12).toLocaleString()
            : (inputs.monthlyKwh * 12).toLocaleString()
          } kWh/year
        </p>
        <p className="text-sm text-gray-600 mt-1">
          Based on your {inputs.usageInputType === 'bill' ? 'monthly bill' : 'monthly usage'}
        </p>
      </div>
    </div>
  );
};

export default Step1EnergyUsage;
