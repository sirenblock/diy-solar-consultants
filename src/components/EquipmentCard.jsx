import React, { useState } from 'react';

const EquipmentCard = ({ item, type }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-200">
      {/* Card Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4">
        <h3 className="text-xl font-bold">{item.manufacturer}</h3>
        <p className="text-blue-100 text-sm">{item.model}</p>
      </div>

      {/* Card Body */}
      <div className="p-4">
        {/* Main Specs Grid */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          {type === 'panel' && (
            <>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Power</p>
                <p className="text-lg font-semibold text-gray-900">{item.power}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Efficiency</p>
                <p className="text-lg font-semibold text-gray-900">{item.efficiency}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Warranty</p>
                <p className="text-sm font-medium text-gray-900">
                  {item.performanceWarranty} / {item.productWarranty}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Temp Coeff</p>
                <p className="text-sm font-medium text-gray-900">{item.temperatureCoefficient}</p>
              </div>
            </>
          )}

          {type === 'inverter' && (
            <>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Power Range</p>
                <p className="text-sm font-semibold text-gray-900">{item.powerRange || item.models}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Efficiency</p>
                <p className="text-lg font-semibold text-gray-900">{item.efficiency}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Warranty</p>
                <p className="text-sm font-medium text-gray-900">{item.warranty}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Type</p>
                <p className="text-sm font-medium text-gray-900">{item.type}</p>
              </div>
            </>
          )}

          {type === 'battery' && (
            <>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Capacity</p>
                <p className="text-lg font-semibold text-gray-900">{item.capacity}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Power</p>
                <p className="text-sm font-semibold text-gray-900">{item.power}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Warranty</p>
                <p className="text-sm font-medium text-gray-900">{item.warranty}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Efficiency</p>
                <p className="text-sm font-medium text-gray-900">{item.efficiency}</p>
              </div>
            </>
          )}

          {type === 'mounting' && (
            <>
              <div className="col-span-2">
                <p className="text-xs text-gray-500 uppercase tracking-wide">Roof Types</p>
                <p className="text-sm font-medium text-gray-900">{item.roofTypes?.join(', ')}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Warranty</p>
                <p className="text-sm font-medium text-gray-900">{item.warranty}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Price</p>
                <p className="text-sm font-medium text-gray-900">{item.priceRange}</p>
              </div>
            </>
          )}
        </div>

        {/* Best For Badge */}
        <div className="mb-4">
          <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-2.5 py-1 rounded">
            Best For: {item.bestFor}
          </span>
        </div>

        {/* Price Badge */}
        <div className="mb-4">
          <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full ${
            item.priceNumeric === 3 ? 'bg-purple-100 text-purple-800' :
            item.priceNumeric === 2 ? 'bg-blue-100 text-blue-800' :
            'bg-green-100 text-green-800'
          }`}>
            {item.priceRange} {item.priceCategory}
            {item.priceEstimate && ` (${item.priceEstimate})`}
          </span>
        </div>

        {/* Expandable Features Section */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full text-left flex justify-between items-center text-blue-600 hover:text-blue-800 font-medium text-sm mb-2"
        >
          <span>{expanded ? 'Hide' : 'Show'} Features & Details</span>
          <svg
            className={`w-5 h-5 transform transition-transform ${expanded ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {expanded && (
          <div className="mt-3 pt-3 border-t border-gray-200 space-y-3">
            {/* Technology/Type */}
            {item.technology && (
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Technology</p>
                <p className="text-sm text-gray-700">{item.technology}</p>
              </div>
            )}

            {/* Monitoring */}
            {item.monitoring && (
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Monitoring</p>
                <p className="text-sm text-gray-700">{item.monitoring}</p>
              </div>
            )}

            {/* Key Features */}
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Key Features</p>
              <ul className="space-y-1">
                {item.features?.map((feature, index) => (
                  <li key={index} className="flex items-start text-sm text-gray-700">
                    <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Additional Info */}
            {item.requires && (
              <div className="bg-yellow-50 border border-yellow-200 rounded p-2">
                <p className="text-xs text-yellow-800">
                  <strong>Requires:</strong> {item.requires}
                </p>
              </div>
            )}

            {item.required && (
              <div className="bg-yellow-50 border border-yellow-200 rounded p-2">
                <p className="text-xs text-yellow-800">
                  <strong>Required:</strong> {item.required}
                </p>
              </div>
            )}

            {item.components && (
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Components</p>
                <p className="text-sm text-gray-700">{item.components}</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Card Footer CTA */}
      <div className="bg-gray-50 px-4 py-3 border-t border-gray-200">
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors duration-200">
          Get Quote for {item.manufacturer} {item.model}
        </button>
      </div>
    </div>
  );
};

export default EquipmentCard;
