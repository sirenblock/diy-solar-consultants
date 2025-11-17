import React from 'react';
import { getSolarResourceData, SOLAR_RESOURCE_DATA } from '../../utils/solarCalculations';

const US_STATES = [
  'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
  'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
  'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
  'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
  'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
];

const Step2Location = ({ inputs, onChange }) => {
  const solarData = inputs.state ? getSolarResourceData(inputs.state) : null;

  const handleZipChange = (zip) => {
    onChange('zipCode', zip);
    // Basic ZIP to state mapping would go here
    // For now, user selects state manually
  };

  const getQualityColor = (quality) => {
    switch (quality) {
      case 'Excellent':
        return 'text-energy-600 bg-energy-50';
      case 'Good':
        return 'text-solar-600 bg-solar-50';
      case 'Moderate':
        return 'text-yellow-600 bg-yellow-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Where will the system be installed?
        </h2>
        <p className="text-gray-600">
          We'll use this to estimate solar production in your area
        </p>
      </div>

      {/* ZIP Code */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          ZIP Code
        </label>
        <input
          type="text"
          value={inputs.zipCode}
          onChange={(e) => handleZipChange(e.target.value.replace(/\D/g, '').slice(0, 5))}
          maxLength="5"
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-solar-500 focus:ring-2 focus:ring-solar-200 outline-none text-lg"
          placeholder="12345"
        />
        <p className="mt-2 text-sm text-gray-500">
          Enter your 5-digit ZIP code
        </p>
      </div>

      {/* State Selection */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          State
        </label>
        <select
          value={inputs.state}
          onChange={(e) => onChange('state', e.target.value)}
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-solar-500 focus:ring-2 focus:ring-solar-200 outline-none text-lg bg-white"
        >
          <option value="">Select your state</option>
          {US_STATES.map(state => (
            <option key={state} value={state}>{state}</option>
          ))}
        </select>
        <p className="mt-2 text-sm text-gray-500">
          We'll use this for solar resource data and cost estimates
        </p>
      </div>

      {/* Solar Resource Information */}
      {solarData && (
        <div className="mt-6 p-6 bg-gradient-to-br from-solar-50 to-energy-50 rounded-lg border border-solar-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Solar Resource in Your Area
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-sm text-gray-600 mb-1">Average Sun Hours</p>
              <p className="text-3xl font-bold text-solar-700">
                {solarData.sunHours} hrs/day
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-sm text-gray-600 mb-1">Solar Resource Quality</p>
              <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${getQualityColor(solarData.quality)}`}>
                {solarData.quality}
              </span>
            </div>
          </div>

          <div className="mt-4 p-4 bg-white rounded-lg">
            <p className="text-sm text-gray-700">
              {solarData.quality === 'Excellent' && (
                <>
                  <strong>Excellent news!</strong> Your location receives abundant sunshine,
                  making solar a great investment. You can expect strong energy production year-round.
                </>
              )}
              {solarData.quality === 'Good' && (
                <>
                  <strong>Great location!</strong> Your area receives good sun exposure,
                  providing solid solar energy production and good return on investment.
                </>
              )}
              {solarData.quality === 'Moderate' && (
                <>
                  <strong>Solar still works well!</strong> While your area gets moderate sun,
                  solar is still cost-effective. System sizing will be adjusted accordingly.
                </>
              )}
            </p>
          </div>
        </div>
      )}

      {/* Help Text */}
      <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
        <p className="text-sm text-blue-900">
          <strong>Tip:</strong> Solar works in all 50 states! Even areas with less sunshine
          can benefit significantly from solar energy. We'll optimize your system for your specific location.
        </p>
      </div>
    </div>
  );
};

export default Step2Location;
