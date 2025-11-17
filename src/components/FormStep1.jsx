import React from 'react';
import Input from './Input';
import Select from './Select';

const FormStep1 = ({ formData, updateFormData, errors }) => {
  const handleChange = (field, value) => {
    updateFormData({ [field]: value });
  };

  const handleCheckboxChange = (field, value) => {
    const currentValues = formData[field] || [];
    const newValues = currentValues.includes(value)
      ? currentValues.filter((v) => v !== value)
      : [...currentValues, value];
    updateFormData({ [field]: newValues });
  };

  return (
    <div className="space-y-8">
      {/* Step Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">System Details</h2>
        <p className="text-lg text-gray-600">
          Tell us about the solar system you want to design
        </p>
      </div>

      {/* 1. Desired System Size */}
      <div className="space-y-3">
        <label className="block text-sm font-semibold text-gray-900">
          Estimated System Size <span className="text-red-500">*</span>
        </label>
        <div className="space-y-2">
          {[
            { value: 'under-5kw', label: 'Under 5 kW', desc: 'small home, minimal usage' },
            { value: '5-8kw', label: '5-8 kW', desc: 'typical residential' },
            { value: '8-12kw', label: '8-12 kW', desc: 'large home or high usage' },
            { value: '12-16kw', label: '12-16 kW', desc: 'very large home' },
            { value: '16-20kw', label: '16-20 kW', desc: 'large residential or small commercial' },
            { value: '20plus-kw', label: '20+ kW', desc: 'commercial' },
            { value: 'not-sure', label: 'Not sure - help me determine this', desc: '' },
          ].map((option) => (
            <label
              key={option.value}
              className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                formData.systemSize === option.value
                  ? 'border-solar-500 bg-solar-50'
                  : 'border-gray-200 hover:border-solar-300'
              }`}
            >
              <input
                type="radio"
                name="systemSize"
                value={option.value}
                checked={formData.systemSize === option.value}
                onChange={(e) => handleChange('systemSize', e.target.value)}
                className="w-4 h-4 text-solar-600 focus:ring-solar-500"
              />
              <span className="ml-3 flex-1">
                <span className="font-medium text-gray-900">{option.label}</span>
                {option.desc && <span className="text-gray-500 ml-2">({option.desc})</span>}
              </span>
            </label>
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-2">
          Not sure? We can help determine optimal size. Upload recent energy bills in next step.
        </p>
        {errors.systemSize && (
          <p className="text-sm text-red-600 mt-1">{errors.systemSize}</p>
        )}
      </div>

      {/* Show if "Not sure" selected */}
      {formData.systemSize === 'not-sure' && (
        <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
          <div className="relative">
            <Input
              type="number"
              label="Average Monthly Electric Bill ($)"
              value={formData.monthlyBill || ''}
              onChange={(e) => handleChange('monthlyBill', e.target.value)}
            />
          </div>
          <div className="text-center text-gray-500 py-2">OR</div>
          <div className="relative">
            <Input
              type="number"
              label="Average Monthly kWh Usage"
              value={formData.monthlyKwh || ''}
              onChange={(e) => handleChange('monthlyKwh', e.target.value)}
              helperText="kWh"
            />
          </div>
        </div>
      )}

      {/* 2. Energy Offset Goal */}
      <div className="space-y-3">
        <label className="block text-sm font-semibold text-gray-900">
          How much of your energy do you want to offset? <span className="text-red-500">*</span>
        </label>
        <div className="space-y-2">
          {[
            { value: '50', label: '50% offset', desc: 'partial solar' },
            { value: '75', label: '75% offset', desc: 'most usage' },
            { value: '100', label: '100% offset', desc: 'net-zero energy' },
            { value: '125', label: '125% offset', desc: 'future needs - EV, expansion' },
            { value: 'maximum', label: 'Maximum possible', desc: 'use all available space' },
          ].map((option) => (
            <label
              key={option.value}
              className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                formData.energyOffset === option.value
                  ? 'border-solar-500 bg-solar-50'
                  : 'border-gray-200 hover:border-solar-300'
              }`}
            >
              <input
                type="radio"
                name="energyOffset"
                value={option.value}
                checked={formData.energyOffset === option.value}
                onChange={(e) => handleChange('energyOffset', e.target.value)}
                className="w-4 h-4 text-solar-600 focus:ring-solar-500"
              />
              <span className="ml-3 flex-1">
                <span className="font-medium text-gray-900">{option.label}</span>
                <span className="text-gray-500 ml-2">({option.desc})</span>
              </span>
            </label>
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-2">
          100% offset means your solar produces as much energy as you use annually
        </p>
        {errors.energyOffset && (
          <p className="text-sm text-red-600 mt-1">{errors.energyOffset}</p>
        )}
      </div>

      {/* 3. Solar Panel Preference */}
      <Select
        label="Solar Panel Preference"
        value={formData.panelPreference || ''}
        onChange={(e) => handleChange('panelPreference', e.target.value)}
        helperText="We'll recommend the best panels for your needs and budget"
      >
        <option value="">Select panel preference</option>
        <option value="rec-alpha">REC Alpha Pure-R (premium, highest efficiency)</option>
        <option value="qpeak">Q.PEAK DUO BLK-G10+ (mid-premium)</option>
        <option value="jinko">Jinko Tiger Neo (value, high performance)</option>
        <option value="canadian">Canadian Solar HiKu7 (reliable value)</option>
        <option value="longi">Longi Hi-MO 6 (value, high efficiency)</option>
        <option value="no-preference">No preference - recommend best option</option>
        <option value="other">Other (specify)</option>
      </Select>

      {formData.panelPreference === 'other' && (
        <Input
          type="text"
          label="Specify Panel Model"
          value={formData.panelOther || ''}
          onChange={(e) => handleChange('panelOther', e.target.value)}
        />
      )}

      {/* 4. Panel Power Rating */}
      <Select
        label="Preferred Panel Wattage (Optional)"
        value={formData.panelWattage || ''}
        onChange={(e) => handleChange('panelWattage', e.target.value)}
        helperText="Higher wattage = fewer panels needed"
      >
        <option value="">Select wattage preference</option>
        <option value="370-400">370-400W</option>
        <option value="400-430">400-430W</option>
        <option value="430-460">430-460W</option>
        <option value="460plus">460W+</option>
        <option value="no-preference">No preference</option>
      </Select>

      {/* 5. Inverter Type */}
      <div className="space-y-3">
        <label className="block text-sm font-semibold text-gray-900">
          Inverter Type Preference <span className="text-red-500">*</span>
        </label>
        <div className="space-y-3">
          {[
            {
              value: 'string',
              label: 'String Inverter',
              desc: 'Most economical, good for simple roofs',
            },
            {
              value: 'micro',
              label: 'Microinverters',
              desc: 'Best for shading/complex roofs, panel-level monitoring',
            },
            {
              value: 'optimizer',
              label: 'String Inverter + Optimizers',
              desc: 'Middle ground, panel-level monitoring',
            },
            {
              value: 'no-preference',
              label: 'No preference - recommend best option',
              desc: '',
            },
          ].map((option) => (
            <label
              key={option.value}
              className={`flex items-start p-4 border-2 rounded-lg cursor-pointer transition-all ${
                formData.inverterType === option.value
                  ? 'border-solar-500 bg-solar-50'
                  : 'border-gray-200 hover:border-solar-300'
              }`}
            >
              <input
                type="radio"
                name="inverterType"
                value={option.value}
                checked={formData.inverterType === option.value}
                onChange={(e) => handleChange('inverterType', e.target.value)}
                className="w-4 h-4 mt-1 text-solar-600 focus:ring-solar-500"
              />
              <span className="ml-3 flex-1">
                <div className="font-medium text-gray-900">{option.label}</div>
                {option.desc && <div className="text-sm text-gray-500 mt-1">{option.desc}</div>}
              </span>
            </label>
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-2">
          Affects cost, performance, and monitoring capabilities
        </p>
        {errors.inverterType && (
          <p className="text-sm text-red-600 mt-1">{errors.inverterType}</p>
        )}
      </div>

      {/* 6. Inverter Brand/Model */}
      {formData.inverterType && formData.inverterType !== 'no-preference' && (
        <Select
          label="Inverter Brand Preference"
          value={formData.inverterBrand || ''}
          onChange={(e) => handleChange('inverterBrand', e.target.value)}
        >
          <option value="">Select brand preference</option>
          {formData.inverterType === 'micro' ? (
            <>
              <option value="enphase">Enphase IQ8 Series</option>
              <option value="apsystems">APsystems DS3</option>
              <option value="other">Other (specify)</option>
            </>
          ) : (
            <>
              <option value="solaredge">SolarEdge HD-Wave</option>
              <option value="sma">SMA Sunny Boy</option>
              <option value="fronius">Fronius Primo/Symo</option>
              <option value="other">Other (specify)</option>
            </>
          )}
        </Select>
      )}

      {/* 7. Battery Storage */}
      <div className="space-y-3">
        <label className="block text-sm font-semibold text-gray-900">
          Battery Storage <span className="text-red-500">*</span>
        </label>
        <div className="space-y-3">
          {[
            {
              value: 'essential',
              label: 'Yes - Essential loads backup',
              desc: 'refrigerator, internet, lights',
            },
            {
              value: 'partial',
              label: 'Yes - Partial home backup',
              desc: 'essential + some circuits',
            },
            {
              value: 'whole-home',
              label: 'Yes - Whole home backup',
              desc: 'entire electrical panel',
            },
            {
              value: 'maybe',
              label: 'Maybe - include in quote for comparison',
              desc: '',
            },
            { value: 'no', label: 'No - Grid-tied only', desc: '' },
          ].map((option) => (
            <label
              key={option.value}
              className={`flex items-start p-4 border-2 rounded-lg cursor-pointer transition-all ${
                formData.batteryStorage === option.value
                  ? 'border-solar-500 bg-solar-50'
                  : 'border-gray-200 hover:border-solar-300'
              }`}
            >
              <input
                type="radio"
                name="batteryStorage"
                value={option.value}
                checked={formData.batteryStorage === option.value}
                onChange={(e) => handleChange('batteryStorage', e.target.value)}
                className="w-4 h-4 mt-1 text-solar-600 focus:ring-solar-500"
              />
              <span className="ml-3 flex-1">
                <div className="font-medium text-gray-900">{option.label}</div>
                {option.desc && <div className="text-sm text-gray-500 mt-1">{option.desc}</div>}
              </span>
            </label>
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-2">
          Batteries add $10,000-$20,000+ but provide backup power during outages
        </p>
        {errors.batteryStorage && (
          <p className="text-sm text-red-600 mt-1">{errors.batteryStorage}</p>
        )}
      </div>

      {/* 8. Battery System Preference */}
      {formData.batteryStorage &&
        formData.batteryStorage !== 'no' &&
        formData.batteryStorage !== '' && (
          <>
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-gray-900">
                Battery Preference
              </label>
              <div className="space-y-2">
                {[
                  { value: 'powerwall', label: 'Tesla Powerwall 3', desc: '13.5 kWh, $10,500' },
                  { value: 'enphase', label: 'Enphase IQ Battery 5P', desc: '5 kWh modular' },
                  { value: 'lg', label: 'LG RESU', desc: '9.8-16 kWh' },
                  { value: 'generac', label: 'Generac PWRcell', desc: '9-18 kWh' },
                  {
                    value: 'no-preference',
                    label: 'No preference - recommend best option',
                    desc: '',
                  },
                ].map((option) => (
                  <label
                    key={option.value}
                    className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      formData.batteryPreference === option.value
                        ? 'border-solar-500 bg-solar-50'
                        : 'border-gray-200 hover:border-solar-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="batteryPreference"
                      value={option.value}
                      checked={formData.batteryPreference === option.value}
                      onChange={(e) => handleChange('batteryPreference', e.target.value)}
                      className="w-4 h-4 text-solar-600 focus:ring-solar-500"
                    />
                    <span className="ml-3 flex-1">
                      <span className="font-medium text-gray-900">{option.label}</span>
                      {option.desc && <span className="text-gray-500 ml-2">({option.desc})</span>}
                    </span>
                  </label>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-2">
                We'll help you select the right battery for your needs
              </p>
            </div>

            {/* 9. Desired Battery Capacity */}
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-gray-900">
                How much backup do you need?
              </label>
              <div className="space-y-2">
                {[
                  { value: '8-12', label: '8-12 hours', desc: 'essential loads' },
                  { value: '12-24', label: '12-24 hours', desc: 'partial home' },
                  { value: '24-48', label: '24-48 hours', desc: 'whole home' },
                  { value: 'multiple', label: 'Multiple days', desc: '' },
                  { value: 'not-sure', label: 'Not sure - help me determine', desc: '' },
                ].map((option) => (
                  <label
                    key={option.value}
                    className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      formData.batteryCapacity === option.value
                        ? 'border-solar-500 bg-solar-50'
                        : 'border-gray-200 hover:border-solar-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="batteryCapacity"
                      value={option.value}
                      checked={formData.batteryCapacity === option.value}
                      onChange={(e) => handleChange('batteryCapacity', e.target.value)}
                      className="w-4 h-4 text-solar-600 focus:ring-solar-500"
                    />
                    <span className="ml-3 flex-1">
                      <span className="font-medium text-gray-900">{option.label}</span>
                      {option.desc && <span className="text-gray-500 ml-2">({option.desc})</span>}
                    </span>
                  </label>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-2">
                More capacity = higher cost but longer backup duration
              </p>
            </div>
          </>
        )}

      {/* 10. Additional Services */}
      <div className="space-y-3">
        <label className="block text-sm font-semibold text-gray-900">
          What else do you need?
        </label>
        <div className="space-y-2">
          {[
            { value: 'permitting', label: 'Permitting planset with PE stamp' },
            { value: 'equipment', label: 'Equipment sourcing assistance' },
            { value: 'structural', label: 'Structural calculations (if required)' },
            { value: 'consulting', label: 'Installation consulting/support' },
            { value: 'utility', label: 'Utility interconnection assistance' },
            { value: 'none', label: 'None - design only' },
          ].map((option) => (
            <label
              key={option.value}
              className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50"
            >
              <input
                type="checkbox"
                value={option.value}
                checked={(formData.additionalServices || []).includes(option.value)}
                onChange={() => handleCheckboxChange('additionalServices', option.value)}
                className="w-4 h-4 text-solar-600 focus:ring-solar-500 rounded"
              />
              <span className="ml-3 text-gray-900">{option.label}</span>
            </label>
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-2">Select all services you're interested in</p>
      </div>
    </div>
  );
};

export default FormStep1;
