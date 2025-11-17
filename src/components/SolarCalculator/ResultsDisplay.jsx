import React, { useState } from 'react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const ResultsDisplay = ({ results, inputs, onGetReport, onStartOver, onBack }) => {
  const [showAssumptions, setShowAssumptions] = useState(false);

  if (!results) return null;

  const { system, production, costs, financial, environmental, chartData, assumptions } = results;

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  // Format number with commas
  const formatNumber = (num) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  // Cost comparison data for chart
  const costComparisonData = [
    {
      category: 'Equipment',
      DIY: costs.diy.equipment,
      Professional: costs.professional.totalBeforeCredit - costs.professional.batteryCost,
    },
    {
      category: 'Design & Permit',
      DIY: costs.diy.design + costs.diy.permit,
      Professional: 0,
    },
    {
      category: 'Battery',
      DIY: costs.diy.batteryCost,
      Professional: costs.professional.batteryCost,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-solar-600 to-energy-600 text-white rounded-lg p-8 shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Your Solar Estimate
        </h1>
        <p className="text-solar-100 text-lg">
          Here's what we recommend for your home
        </p>
      </div>

      {/* Main Results Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* System Size */}
        <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-solar-500">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-solar-100 p-3 rounded-lg">
              <svg className="w-8 h-8 text-solar-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-700">System Size</h3>
          </div>
          <p className="text-4xl font-bold text-solar-700 mb-2">
            {system.sizeKw} kW
          </p>
          <div className="space-y-1 text-sm text-gray-600">
            <p>{system.panelCount} panels @ 400W each</p>
            <p>Requires ~{system.requiredRoofSpace} sq ft</p>
            {!system.roofCheck.adequate && (
              <p className="text-yellow-600 font-semibold">
                ⚠️ May need to adjust for roof space
              </p>
            )}
          </div>
        </div>

        {/* Annual Production */}
        <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-energy-500">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-energy-100 p-3 rounded-lg">
              <svg className="w-8 h-8 text-energy-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-700">Annual Production</h3>
          </div>
          <p className="text-4xl font-bold text-energy-700 mb-2">
            {formatNumber(production.annualKwh)} kWh
          </p>
          <div className="space-y-1 text-sm text-gray-600">
            <p>Offsets {production.offsetPercent}% of usage</p>
            <p>{production.sunHours} sun hours/day</p>
            <p className="text-energy-600 font-semibold">{production.solarQuality} solar resource</p>
          </div>
        </div>

        {/* Your DIY Cost */}
        <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-blue-500">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-700">Your Cost (DIY)</h3>
          </div>
          <p className="text-4xl font-bold text-blue-700 mb-2">
            {formatCurrency(costs.diy.netCost)}
          </p>
          <div className="space-y-1 text-sm text-gray-600">
            <p>After 30% tax credit</p>
            <p className="line-through">{formatCurrency(costs.diy.totalBeforeCredit)} before credit</p>
          </div>
        </div>
      </div>

      {/* Cost Breakdown Section */}
      <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Cost Breakdown</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* DIY Cost Details */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              <span className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm">DIY</span>
              Installation
            </h3>

            <div className="space-y-2">
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="text-gray-700">Equipment</span>
                <span className="font-semibold">{formatCurrency(costs.diy.equipment)}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="text-gray-700">Design & Engineering</span>
                <span className="font-semibold">{formatCurrency(costs.diy.design)}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="text-gray-700">Permitting</span>
                <span className="font-semibold">{formatCurrency(costs.diy.permit)}</span>
              </div>
              {costs.diy.batteryCost > 0 && (
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-700">Battery Storage</span>
                  <span className="font-semibold">{formatCurrency(costs.diy.batteryCost)}</span>
                </div>
              )}
              <div className="flex justify-between py-2 border-b-2 border-gray-300">
                <span className="font-semibold text-gray-900">Subtotal</span>
                <span className="font-semibold">{formatCurrency(costs.diy.totalBeforeCredit)}</span>
              </div>
              <div className="flex justify-between py-2 text-energy-600">
                <span className="font-semibold">Federal Tax Credit (30%)</span>
                <span className="font-semibold">-{formatCurrency(costs.diy.taxCredit)}</span>
              </div>
              <div className="flex justify-between py-3 bg-blue-50 px-4 rounded-lg">
                <span className="font-bold text-lg text-gray-900">Your Cost</span>
                <span className="font-bold text-2xl text-blue-700">
                  {formatCurrency(costs.diy.netCost)}
                </span>
              </div>
            </div>
          </div>

          {/* Professional Cost Comparison */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              <span className="bg-gray-500 text-white px-3 py-1 rounded-lg text-sm">PRO</span>
              Installation (for comparison)
            </h3>

            <div className="space-y-2">
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="text-gray-700">Professional Installation</span>
                <span className="font-semibold">
                  {formatCurrency(costs.professional.totalBeforeCredit)}
                </span>
              </div>
              <div className="flex justify-between py-2 text-energy-600">
                <span className="font-semibold">Federal Tax Credit (30%)</span>
                <span className="font-semibold">-{formatCurrency(costs.professional.taxCredit)}</span>
              </div>
              <div className="flex justify-between py-3 bg-gray-100 px-4 rounded-lg">
                <span className="font-bold text-lg text-gray-900">Professional Cost</span>
                <span className="font-bold text-2xl text-gray-700">
                  {formatCurrency(costs.professional.netCost)}
                </span>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-energy-50 to-solar-50 border-2 border-energy-500 rounded-lg">
                <p className="text-sm font-semibold text-gray-700 mb-2">Your Savings with DIY</p>
                <p className="text-3xl font-bold text-energy-700">
                  {formatCurrency(costs.savings.savings)}
                </p>
                <p className="text-lg font-semibold text-energy-600 mt-1">
                  ({costs.savings.savingsPercent}% savings)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Cost Comparison Chart */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">DIY vs Professional Cost Comparison</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={costComparisonData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis tickFormatter={(value) => `$${value / 1000}k`} />
              <Tooltip formatter={(value) => formatCurrency(value)} />
              <Legend />
              <Bar dataKey="DIY" fill="#ea580c" name="DIY Installation" />
              <Bar dataKey="Professional" fill="#6b7280" name="Professional Installation" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Savings & ROI Section */}
      <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Savings & Return on Investment</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-energy-50 to-green-50 p-6 rounded-lg border border-energy-200">
            <p className="text-sm font-semibold text-gray-700 mb-2">Annual Savings</p>
            <p className="text-3xl font-bold text-energy-700">
              {formatCurrency(financial.annualSavings)}
            </p>
            <p className="text-sm text-gray-600 mt-1">per year in electricity</p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-solar-50 p-6 rounded-lg border border-blue-200">
            <p className="text-sm font-semibold text-gray-700 mb-2">Payback Period</p>
            <p className="text-3xl font-bold text-blue-700">
              {financial.paybackPeriod} years
            </p>
            <p className="text-sm text-gray-600 mt-1">to break even</p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-200">
            <p className="text-sm font-semibold text-gray-700 mb-2">25-Year Savings</p>
            <p className="text-3xl font-bold text-purple-700">
              {formatCurrency(financial.lifetimeSavings)}
            </p>
            <p className="text-sm text-gray-600 mt-1">total lifetime savings</p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-lg border border-orange-200">
            <p className="text-sm font-semibold text-gray-700 mb-2">25-Year ROI</p>
            <p className="text-3xl font-bold text-orange-700">
              {financial.roi}%
            </p>
            <p className="text-sm text-gray-600 mt-1">return on investment</p>
          </div>
        </div>

        {/* Cumulative Savings Chart */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Cumulative Savings Over 25 Years</h3>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={chartData.cumulativeSavings}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="year"
                label={{ value: 'Years', position: 'insideBottom', offset: -5 }}
              />
              <YAxis
                tickFormatter={(value) => `$${value / 1000}k`}
                label={{ value: 'Savings ($)', angle: -90, position: 'insideLeft' }}
              />
              <Tooltip
                formatter={(value) => formatCurrency(value)}
                labelFormatter={(label) => `Year ${label}`}
              />
              <Line
                type="monotone"
                dataKey="savings"
                stroke="#2563eb"
                strokeWidth={3}
                dot={false}
                name="Cumulative Savings"
              />
            </LineChart>
          </ResponsiveContainer>
          <p className="text-sm text-gray-600 mt-4 text-center">
            Accounts for 3% annual utility rate inflation and 0.5% system degradation
          </p>
        </div>
      </div>

      {/* Environmental Impact */}
      <div className="bg-gradient-to-r from-green-50 to-energy-50 rounded-lg shadow-lg p-6 md:p-8 border border-energy-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <span>🌍</span>
          Environmental Impact
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-sm font-semibold text-gray-700 mb-2">CO₂ Offset (25 years)</p>
            <p className="text-4xl font-bold text-energy-700 mb-1">
              {formatNumber(environmental.lifetimeCO2Tons)}
            </p>
            <p className="text-lg text-gray-600">tons of CO₂</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-sm font-semibold text-gray-700 mb-2">Equivalent To</p>
            <p className="text-4xl font-bold text-green-700 mb-1">
              {formatNumber(environmental.treesEquivalent)}
            </p>
            <p className="text-lg text-gray-600">trees planted</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-sm font-semibold text-gray-700 mb-2">Or</p>
            <p className="text-4xl font-bold text-blue-700 mb-1">
              {formatNumber(environmental.milesNotDriven)}
            </p>
            <p className="text-lg text-gray-600">miles not driven</p>
          </div>
        </div>
      </div>

      {/* Assumptions */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <button
          onClick={() => setShowAssumptions(!showAssumptions)}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <h3 className="text-lg font-semibold text-gray-900">Assumptions Used in This Calculation</h3>
          <svg
            className={`w-6 h-6 text-gray-600 transition-transform ${showAssumptions ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {showAssumptions && (
          <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-700">
              <li>• Utility rate: ${assumptions.utilityRate.toFixed(2)}/kWh</li>
              <li>• Sun hours: {assumptions.sunHours} hours/day</li>
              <li>• System efficiency: {(assumptions.systemEfficiency * 100).toFixed(0)}%</li>
              <li>• Panel wattage: {assumptions.panelWattage}W average</li>
              <li>• Federal tax credit: {(assumptions.federalTaxCredit * 100).toFixed(0)}%</li>
              <li>• Utility rate inflation: {(assumptions.utilityRateInflation * 100).toFixed(0)}%/year</li>
              <li>• System degradation: {(assumptions.systemDegradation * 100).toFixed(1)}%/year</li>
              <li>• System lifespan: {assumptions.systemLifespan} years</li>
              {assumptions.shadingFactor < 1 && (
                <li>• Shading adjustment: {(assumptions.shadingFactor * 100).toFixed(0)}%</li>
              )}
              {assumptions.orientationFactor < 1 && (
                <li>• Orientation adjustment: {(assumptions.orientationFactor * 100).toFixed(0)}%</li>
              )}
            </ul>
            <p className="mt-4 text-sm text-gray-600 italic">
              This is an estimate only. Actual results depend on specific site conditions, equipment selection,
              and installation quality. For precise calculations and engineering, request a professional design.
            </p>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-solar-600 to-energy-600 rounded-lg shadow-lg p-8 text-center text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          Get Your Detailed Solar Report
        </h2>
        <p className="text-solar-100 text-lg mb-6 max-w-2xl mx-auto">
          Receive a comprehensive analysis with equipment recommendations, financing options,
          and step-by-step guidance for your DIY solar project.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onGetReport}
            className="px-8 py-4 bg-white text-solar-700 rounded-lg font-bold text-lg hover:bg-solar-50 transition-colors shadow-lg"
          >
            Get My Free Report
          </button>
          <button
            onClick={onStartOver}
            className="px-8 py-4 bg-solar-700 text-white rounded-lg font-semibold hover:bg-solar-800 transition-colors border-2 border-white"
          >
            Calculate Another System
          </button>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-solar-100">
          <span>✓ 5,000+ systems designed</span>
          <span>✓ 98% permit approval rate</span>
          <span>✓ Licensed PE engineers</span>
        </div>
      </div>

      {/* Back Button */}
      <div className="text-center">
        <button
          onClick={onBack}
          className="text-gray-600 hover:text-gray-900 font-medium"
        >
          ← Back to Calculator
        </button>
      </div>
    </div>
  );
};

export default ResultsDisplay;
