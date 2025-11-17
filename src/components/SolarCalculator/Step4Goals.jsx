import React from 'react';

const Step4Goals = ({ inputs, onChange }) => {
  const offsetOptions = [
    { value: 50, label: '50%', description: 'Partial offset' },
    { value: 75, label: '75%', description: 'Most usage' },
    { value: 100, label: '100%', description: 'Full offset', recommended: true },
    { value: 125, label: '125%', description: 'Future-proof' },
  ];

  const batteryOptions = [
    {
      value: null,
      label: 'No battery',
      description: 'Grid-tied only',
      cost: '$0',
      icon: '🔌',
    },
    {
      value: 'essential',
      label: 'Essential loads',
      description: '10-13 kWh capacity',
      cost: '+$8k-$12k',
      icon: '🔋',
    },
    {
      value: 'wholeHome',
      label: 'Whole-home backup',
      description: '13-20 kWh capacity',
      cost: '+$12k-$18k',
      icon: '🏠',
    },
    {
      value: 'large',
      label: 'Large system',
      description: '20+ kWh capacity',
      cost: '+$18k-$30k',
      icon: '⚡',
    },
  ];

  const inverterOptions = [
    {
      value: 'string',
      label: 'String Inverter',
      description: 'Lower cost, good for unshaded roofs',
      pros: ['Lower upfront cost', 'Proven technology', 'Simple design'],
      cons: ['No panel-level monitoring', 'Less flexible with shading'],
    },
    {
      value: 'micro',
      label: 'Microinverters',
      description: 'Panel-level optimization and monitoring',
      pros: ['Panel-level monitoring', 'Better shade performance', 'No single point of failure'],
      cons: ['Higher upfront cost', 'More components'],
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          What are your solar goals?
        </h2>
        <p className="text-gray-600">
          Let's customize your system to meet your needs
        </p>
      </div>

      {/* Energy Offset Goal */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          Energy Offset Goal
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {offsetOptions.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => onChange('offsetPercent', option.value)}
              className={`p-4 rounded-lg border-2 text-center transition-all relative ${
                inputs.offsetPercent === option.value
                  ? 'border-solar-500 bg-solar-50 shadow-md'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              {option.recommended && (
                <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-energy-500 text-white text-xs px-2 py-0.5 rounded-full font-semibold whitespace-nowrap">
                  Most Popular
                </span>
              )}
              <p className="text-2xl font-bold text-gray-900">{option.label}</p>
              <p className="text-xs text-gray-600 mt-1">{option.description}</p>
            </button>
          ))}
        </div>

        {/* Slider */}
        <div className="mt-4">
          <input
            type="range"
            value={inputs.offsetPercent}
            onChange={(e) => onChange('offsetPercent', parseInt(e.target.value))}
            min="25"
            max="150"
            step="25"
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-solar-600"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>25%</span>
            <span>50%</span>
            <span>100%</span>
            <span>150%</span>
          </div>
        </div>

        <p className="mt-3 text-sm text-gray-600">
          Targeting <strong className="text-solar-700">{inputs.offsetPercent}%</strong> of your energy usage
          {inputs.offsetPercent > 100 && (
            <span className="text-energy-600"> - Great for future EV charging or increased usage</span>
          )}
        </p>
      </div>

      {/* Battery Storage */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          Battery Backup Storage
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {batteryOptions.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => onChange('batteryOption', option.value)}
              className={`p-4 rounded-lg border-2 text-left transition-all ${
                inputs.batteryOption === option.value
                  ? 'border-solar-500 bg-solar-50 shadow-md'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              <div className="flex items-start gap-3">
                <span className="text-3xl">{option.icon}</span>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">{option.label}</p>
                  <p className="text-sm text-gray-600 mt-1">{option.description}</p>
                  <p className="text-sm font-semibold text-solar-700 mt-2">{option.cost}</p>
                </div>
                {inputs.batteryOption === option.value && (
                  <svg className="w-6 h-6 text-solar-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
            </button>
          ))}
        </div>
        <div className="mt-3 p-3 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-900">
            <strong>Battery Benefits:</strong> Backup power during outages, time-of-use optimization,
            and energy independence. Batteries also qualify for the 30% federal tax credit.
          </p>
        </div>
      </div>

      {/* Inverter Type */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          Inverter Technology
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {inverterOptions.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => onChange('inverterType', option.value)}
              className={`p-5 rounded-lg border-2 text-left transition-all ${
                inputs.inverterType === option.value
                  ? 'border-solar-500 bg-solar-50 shadow-md'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="font-semibold text-gray-900 text-lg">{option.label}</p>
                  <p className="text-sm text-gray-600 mt-1">{option.description}</p>
                </div>
                {inputs.inverterType === option.value && (
                  <svg className="w-6 h-6 text-solar-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                )}
              </div>

              <div className="space-y-2">
                <div>
                  <p className="text-xs font-semibold text-energy-700 mb-1">Pros:</p>
                  <ul className="space-y-1">
                    {option.pros.map((pro, idx) => (
                      <li key={idx} className="text-xs text-gray-700 flex items-start gap-1">
                        <span className="text-energy-500 mt-0.5">✓</span>
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-600 mb-1">Cons:</p>
                  <ul className="space-y-1">
                    {option.cons.map((con, idx) => (
                      <li key={idx} className="text-xs text-gray-700 flex items-start gap-1">
                        <span className="text-gray-400 mt-0.5">−</span>
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Help Text */}
      <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded-r-lg">
        <p className="text-sm text-green-900">
          <strong>Almost there!</strong> Click "Calculate" to see your customized solar system
          design, cost breakdown, and projected savings.
        </p>
      </div>
    </div>
  );
};

export default Step4Goals;
