import React from 'react';

const Step3RoofProperty = ({ inputs, onChange }) => {
  const roofSpaceOptions = [
    {
      value: 'small',
      label: 'Small (200-400 sq ft)',
      description: 'Enough for 3-6 kW system',
      icon: '🏠',
    },
    {
      value: 'medium',
      label: 'Medium (400-600 sq ft)',
      description: 'Enough for 6-10 kW system',
      icon: '🏡',
    },
    {
      value: 'large',
      label: 'Large (600-1,000 sq ft)',
      description: 'Enough for 10-16 kW system',
      icon: '🏘️',
    },
    {
      value: 'veryLarge',
      label: 'Very Large (1,000+ sq ft)',
      description: 'Enough for 16+ kW system',
      icon: '🏭',
    },
  ];

  const orientationOptions = [
    { value: 'south', label: 'South', efficiency: '100%', best: true },
    { value: 'southwest', label: 'Southwest', efficiency: '95%' },
    { value: 'southeast', label: 'Southeast', efficiency: '95%' },
    { value: 'east', label: 'East', efficiency: '85%' },
    { value: 'west', label: 'West', efficiency: '85%' },
    { value: 'north', label: 'North', efficiency: '60%' },
    { value: 'mixed', label: 'Mixed', efficiency: '90%' },
    { value: 'notSure', label: 'Not sure', efficiency: '~' },
  ];

  const shadingOptions = [
    {
      value: 'none',
      label: 'No shading',
      description: 'Full sun all day',
      icon: '☀️',
    },
    {
      value: 'minimal',
      label: 'Minimal shading',
      description: 'Shaded < 2 hours/day',
      icon: '🌤️',
    },
    {
      value: 'moderate',
      label: 'Moderate shading',
      description: 'Shaded 2-4 hours/day',
      icon: '⛅',
    },
    {
      value: 'heavy',
      label: 'Heavy shading',
      description: 'Shaded > 4 hours/day',
      icon: '🌳',
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Tell us about your property
        </h2>
        <p className="text-gray-600">
          This helps us determine the best system configuration
        </p>
      </div>

      {/* Available Roof Space */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          Available Roof Space
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {roofSpaceOptions.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => onChange('roofSpace', option.value)}
              className={`p-4 rounded-lg border-2 text-left transition-all ${
                inputs.roofSpace === option.value
                  ? 'border-solar-500 bg-solar-50 shadow-md'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              <div className="flex items-start gap-3">
                <span className="text-3xl">{option.icon}</span>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">{option.label}</p>
                  <p className="text-sm text-gray-600 mt-1">{option.description}</p>
                </div>
                {inputs.roofSpace === option.value && (
                  <svg className="w-6 h-6 text-solar-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
            </button>
          ))}
        </div>
        <p className="mt-2 text-sm text-gray-500">
          Don't worry if you're unsure - we'll help you assess this during the design process
        </p>
      </div>

      {/* Roof Orientation */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          Primary Roof Orientation
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {orientationOptions.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => onChange('roofOrientation', option.value)}
              className={`p-3 rounded-lg border-2 text-center transition-all relative ${
                inputs.roofOrientation === option.value
                  ? 'border-solar-500 bg-solar-50 shadow-md'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              {option.best && (
                <span className="absolute -top-2 -right-2 bg-energy-500 text-white text-xs px-2 py-0.5 rounded-full font-semibold">
                  Best
                </span>
              )}
              <p className="font-semibold text-gray-900">{option.label}</p>
              <p className="text-xs text-gray-600 mt-1">{option.efficiency}</p>
            </button>
          ))}
        </div>
        <div className="mt-3 p-3 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-900">
            <strong>Tip:</strong> South-facing roofs produce the most energy in the northern hemisphere.
            East/West facing can still work great, especially with optimizers or microinverters.
          </p>
        </div>
      </div>

      {/* Shading */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          Roof Shading
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {shadingOptions.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => onChange('shading', option.value)}
              className={`p-4 rounded-lg border-2 text-left transition-all ${
                inputs.shading === option.value
                  ? 'border-solar-500 bg-solar-50 shadow-md'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl">{option.icon}</span>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">{option.label}</p>
                  <p className="text-sm text-gray-600 mt-1">{option.description}</p>
                </div>
                {inputs.shading === option.value && (
                  <svg className="w-6 h-6 text-solar-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
            </button>
          ))}
        </div>
        <div className="mt-3 p-3 bg-yellow-50 rounded-lg">
          <p className="text-sm text-yellow-900">
            <strong>Note:</strong> Shading affects production, but we can work with shaded roofs using
            microinverters or optimizers. We'll optimize the design for your specific conditions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Step3RoofProperty;
