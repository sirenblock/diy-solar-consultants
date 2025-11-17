import React from 'react';

const FormStep2 = ({ formData, updateFormData, errors, onFileUpload }) => {
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

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    if (onFileUpload) {
      onFileUpload(files);
    }
  };

  const removeFile = (index) => {
    const newFiles = [...(formData.files || [])];
    newFiles.splice(index, 1);
    updateFormData({ files: newFiles });
  };

  return (
    <div className="space-y-8">
      {/* Step Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Roof & Property Information</h2>
        <p className="text-lg text-gray-600">
          Help us understand your roof and site conditions
        </p>
      </div>

      {/* 1. Property Address */}
      <div className="space-y-4">
        <label className="block text-sm font-semibold text-gray-900">
          Installation Address <span className="text-red-500">*</span>
        </label>
        <div className="space-y-3">
          <input
            type="text"
            placeholder="Street Address"
            value={formData.street || ''}
            onChange={(e) => handleChange('street', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-solar-500 focus:border-transparent"
          />
          {errors.street && <p className="text-sm text-red-600">{errors.street}</p>}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div>
              <input
                type="text"
                placeholder="City"
                value={formData.city || ''}
                onChange={(e) => handleChange('city', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-solar-500 focus:border-transparent"
              />
              {errors.city && <p className="text-sm text-red-600 mt-1">{errors.city}</p>}
            </div>
            <div>
              <select
                value={formData.state || ''}
                onChange={(e) => handleChange('state', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-solar-500 focus:border-transparent"
              >
                <option value="">State</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </select>
              {errors.state && <p className="text-sm text-red-600 mt-1">{errors.state}</p>}
            </div>
            <div>
              <input
                type="text"
                placeholder="ZIP Code"
                value={formData.zip || ''}
                onChange={(e) => handleChange('zip', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-solar-500 focus:border-transparent"
              />
              {errors.zip && <p className="text-sm text-red-600 mt-1">{errors.zip}</p>}
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-2">
          We'll use this to assess sun exposure and local code requirements
        </p>
      </div>

      {/* 2. Roof Type */}
      <div className="space-y-3">
        <label className="block text-sm font-semibold text-gray-900">
          Primary Roof Type <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            { value: 'shingle', label: 'Composition Shingle (asphalt)' },
            { value: 'tile', label: 'Tile (clay or concrete)' },
            { value: 'metal-seam', label: 'Metal - Standing Seam' },
            { value: 'metal-corrugated', label: 'Metal - Corrugated/Ribbed' },
            { value: 'flat', label: 'Flat/Low-slope' },
            { value: 'other', label: 'Other (specify)' },
          ].map((option) => (
            <label
              key={option.value}
              className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                formData.roofType === option.value
                  ? 'border-solar-500 bg-solar-50'
                  : 'border-gray-200 hover:border-solar-300'
              }`}
            >
              <input
                type="radio"
                name="roofType"
                value={option.value}
                checked={formData.roofType === option.value}
                onChange={(e) => handleChange('roofType', e.target.value)}
                className="w-4 h-4 text-solar-600 focus:ring-solar-500"
              />
              <span className="ml-3 font-medium text-gray-900">{option.label}</span>
            </label>
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-2">
          This determines the mounting system we'll specify
        </p>
        {errors.roofType && <p className="text-sm text-red-600 mt-1">{errors.roofType}</p>}
      </div>

      {formData.roofType === 'other' && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Describe Roof Type
          </label>
          <input
            type="text"
            placeholder="Enter roof type description"
            value={formData.roofTypeOther || ''}
            onChange={(e) => handleChange('roofTypeOther', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-solar-500 focus:border-transparent"
          />
        </div>
      )}

      {/* 3. Roof Age */}
      <div className="space-y-3">
        <label className="block text-sm font-semibold text-gray-900">
          Approximate Roof Age <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            { value: 'under-5', label: 'Less than 5 years old' },
            { value: '5-10', label: '5-10 years old' },
            { value: '10-15', label: '10-15 years old' },
            { value: '15-20', label: '15-20 years old' },
            { value: '20plus', label: '20+ years old' },
            { value: 'not-sure', label: 'Not sure' },
          ].map((option) => (
            <label
              key={option.value}
              className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                formData.roofAge === option.value
                  ? 'border-solar-500 bg-solar-50'
                  : 'border-gray-200 hover:border-solar-300'
              }`}
            >
              <input
                type="radio"
                name="roofAge"
                value={option.value}
                checked={formData.roofAge === option.value}
                onChange={(e) => handleChange('roofAge', e.target.value)}
                className="w-4 h-4 text-solar-600 focus:ring-solar-500"
              />
              <span className="ml-3 font-medium text-gray-900">{option.label}</span>
            </label>
          ))}
        </div>
        {(formData.roofAge === '15-20' || formData.roofAge === '20plus') && (
          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <div className="flex items-start">
              <svg
                className="w-5 h-5 text-yellow-600 mt-0.5 mr-2 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-sm text-yellow-800">
                <strong>Important:</strong> We recommend replacing roofs older than 15 years before
                solar installation. Solar systems last 25+ years.
              </p>
            </div>
          </div>
        )}
        {errors.roofAge && <p className="text-sm text-red-600 mt-1">{errors.roofAge}</p>}
      </div>

      {/* 4. Roof Pitch */}
      <div className="space-y-3">
        <label className="block text-sm font-semibold text-gray-900">
          Roof Pitch <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            { value: 'flat', label: 'Flat (0-2:12)' },
            { value: 'low', label: 'Low slope (2:12 - 4:12)' },
            { value: 'medium', label: 'Medium slope (4:12 - 7:12)' },
            { value: 'steep', label: 'Steep (7:12 - 12:12)' },
            { value: 'very-steep', label: 'Very steep (12:12+)' },
            { value: 'not-sure', label: 'Not sure' },
          ].map((option) => (
            <label
              key={option.value}
              className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                formData.roofPitch === option.value
                  ? 'border-solar-500 bg-solar-50'
                  : 'border-gray-200 hover:border-solar-300'
              }`}
            >
              <input
                type="radio"
                name="roofPitch"
                value={option.value}
                checked={formData.roofPitch === option.value}
                onChange={(e) => handleChange('roofPitch', e.target.value)}
                className="w-4 h-4 text-solar-600 focus:ring-solar-500"
              />
              <span className="ml-3 font-medium text-gray-900">{option.label}</span>
            </label>
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-2">
          Affects mounting and production. If unsure, we can assess from satellite imagery.
        </p>
        {errors.roofPitch && <p className="text-sm text-red-600 mt-1">{errors.roofPitch}</p>}
      </div>

      {/* 5. Primary Roof Orientation */}
      <div className="space-y-3">
        <label className="block text-sm font-semibold text-gray-900">
          Which direction does your roof face? <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { value: 'south', label: 'South', badge: 'Best' },
            { value: 'southwest', label: 'Southwest' },
            { value: 'southeast', label: 'Southeast' },
            { value: 'east', label: 'East' },
            { value: 'west', label: 'West' },
            { value: 'north', label: 'North' },
            { value: 'multiple', label: 'Multiple' },
            { value: 'not-sure', label: 'Not sure' },
          ].map((option) => (
            <label
              key={option.value}
              className={`flex items-center justify-center p-4 border-2 rounded-lg cursor-pointer transition-all relative ${
                formData.roofOrientation === option.value
                  ? 'border-solar-500 bg-solar-50'
                  : 'border-gray-200 hover:border-solar-300'
              }`}
            >
              {option.badge && (
                <span className="absolute -top-2 -right-2 bg-energy-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  {option.badge}
                </span>
              )}
              <input
                type="radio"
                name="roofOrientation"
                value={option.value}
                checked={formData.roofOrientation === option.value}
                onChange={(e) => handleChange('roofOrientation', e.target.value)}
                className="sr-only"
              />
              <span className="font-medium text-gray-900">{option.label}</span>
            </label>
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-2">
          South-facing roofs produce the most energy in the Northern Hemisphere
        </p>
        {errors.roofOrientation && (
          <p className="text-sm text-red-600 mt-1">{errors.roofOrientation}</p>
        )}
      </div>

      {formData.roofOrientation === 'multiple' && (
        <div className="space-y-3">
          <label className="block text-sm font-medium text-gray-700">
            Available Roof Sections
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {['South', 'Southwest', 'Southeast', 'East', 'West', 'North'].map((direction) => (
              <label key={direction} className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                <input
                  type="checkbox"
                  value={direction.toLowerCase()}
                  checked={(formData.roofSections || []).includes(direction.toLowerCase())}
                  onChange={() => handleCheckboxChange('roofSections', direction.toLowerCase())}
                  className="w-4 h-4 text-solar-600 focus:ring-solar-500 rounded"
                />
                <span className="ml-2 text-gray-900">{direction}</span>
              </label>
            ))}
          </div>
        </div>
      )}

      {/* 6. Shading Conditions */}
      <div className="space-y-3">
        <label className="block text-sm font-semibold text-gray-900">
          Is your roof shaded during the day? <span className="text-red-500">*</span>
        </label>
        <div className="space-y-2">
          {[
            { value: 'none', label: 'No shading (full sun all day)' },
            { value: 'minimal', label: 'Minimal shading (< 10% of roof, < 2 hours/day)' },
            { value: 'moderate', label: 'Moderate shading (10-30% of roof, 2-4 hours/day)' },
            { value: 'heavy', label: 'Heavy shading (> 30% of roof, > 4 hours/day)' },
            { value: 'not-sure', label: 'Not sure' },
          ].map((option) => (
            <label
              key={option.value}
              className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                formData.shading === option.value
                  ? 'border-solar-500 bg-solar-50'
                  : 'border-gray-200 hover:border-solar-300'
              }`}
            >
              <input
                type="radio"
                name="shading"
                value={option.value}
                checked={formData.shading === option.value}
                onChange={(e) => handleChange('shading', e.target.value)}
                className="w-4 h-4 text-solar-600 focus:ring-solar-500"
              />
              <span className="ml-3 font-medium text-gray-900">{option.label}</span>
            </label>
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-2">
          Shading affects production. Microinverters or optimizers help with shaded roofs.
        </p>
        {errors.shading && <p className="text-sm text-red-600 mt-1">{errors.shading}</p>}
      </div>

      {formData.shading && formData.shading !== 'none' && formData.shading !== 'not-sure' && (
        <div className="space-y-3">
          <label className="block text-sm font-medium text-gray-700">
            What causes the shading?
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {[
              { value: 'trees', label: 'Trees' },
              { value: 'buildings', label: 'Neighboring buildings' },
              { value: 'chimneys', label: 'Chimneys/vents' },
              { value: 'structures', label: 'Other roof structures' },
              { value: 'other', label: 'Other' },
            ].map((option) => (
              <label
                key={option.value}
                className="flex items-center p-3 border rounded-lg hover:bg-gray-50"
              >
                <input
                  type="checkbox"
                  value={option.value}
                  checked={(formData.shadingCauses || []).includes(option.value)}
                  onChange={() => handleCheckboxChange('shadingCauses', option.value)}
                  className="w-4 h-4 text-solar-600 focus:ring-solar-500 rounded"
                />
                <span className="ml-2 text-gray-900">{option.label}</span>
              </label>
            ))}
          </div>
        </div>
      )}

      {/* 7. Available Roof Space */}
      <div className="space-y-3">
        <label className="block text-sm font-semibold text-gray-900">
          Approximate Available Roof Space
        </label>
        <div className="space-y-2">
          {[
            { value: 'small', label: 'Small (200-400 sq ft)', desc: 'fits 3-6 kW' },
            { value: 'medium', label: 'Medium (400-600 sq ft)', desc: 'fits 6-10 kW' },
            { value: 'large', label: 'Large (600-1,000 sq ft)', desc: 'fits 10-16 kW' },
            { value: 'very-large', label: 'Very large (1,000+ sq ft)', desc: 'fits 16+ kW' },
            { value: 'not-sure', label: 'Not sure - please assess', desc: '' },
          ].map((option) => (
            <label
              key={option.value}
              className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                formData.roofSpace === option.value
                  ? 'border-solar-500 bg-solar-50'
                  : 'border-gray-200 hover:border-solar-300'
              }`}
            >
              <input
                type="radio"
                name="roofSpace"
                value={option.value}
                checked={formData.roofSpace === option.value}
                onChange={(e) => handleChange('roofSpace', e.target.value)}
                className="w-4 h-4 text-solar-600 focus:ring-solar-500"
              />
              <span className="ml-3 flex-1">
                <span className="font-medium text-gray-900">{option.label}</span>
                {option.desc && <span className="text-gray-500 ml-2">- {option.desc}</span>}
              </span>
            </label>
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-2">
          Don't worry if unsure - we'll determine this from satellite imagery
        </p>
      </div>

      {/* 8. Roof Obstructions */}
      <div className="space-y-3">
        <label className="block text-sm font-semibold text-gray-900">
          Are there obstructions on the roof?
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {[
            { value: 'skylights', label: 'Skylights' },
            { value: 'vents', label: 'Vents/pipes' },
            { value: 'chimneys', label: 'Chimneys' },
            { value: 'hvac', label: 'HVAC equipment' },
            { value: 'satellite', label: 'Satellite dish' },
            { value: 'none', label: 'None' },
          ].map((option) => (
            <label key={option.value} className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
              <input
                type="checkbox"
                value={option.value}
                checked={(formData.obstructions || []).includes(option.value)}
                onChange={() => handleCheckboxChange('obstructions', option.value)}
                className="w-4 h-4 text-solar-600 focus:ring-solar-500 rounded"
              />
              <span className="ml-2 text-gray-900">{option.label}</span>
            </label>
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-2">We'll work around these in the design</p>
      </div>

      {/* 9. Mounting System Preference */}
      <div className="space-y-3">
        <label className="block text-sm font-semibold text-gray-900">
          Mounting/Racking Preference
        </label>
        <select
          value={formData.mountingSystem || ''}
          onChange={(e) => handleChange('mountingSystem', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-solar-500 focus:border-transparent"
        >
          <option value="">Select mounting preference</option>
          <option value="ironridge">IronRidge (premium, most common)</option>
          <option value="unirac">Unirac (reliable mid-range)</option>
          <option value="quickmount">Quick Mount PV (excellent flashings)</option>
          <option value="s5">S-5! (for metal roofs)</option>
          <option value="no-preference">No preference - recommend best option</option>
        </select>
        <p className="text-sm text-gray-500 mt-2">
          We'll recommend the appropriate system for your roof type
        </p>
      </div>

      {/* 10. Electrical Service */}
      <div className="space-y-3">
        <label className="block text-sm font-semibold text-gray-900">
          Main Electrical Panel Amperage <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            { value: '100', label: '100 amp' },
            { value: '125', label: '125 amp' },
            { value: '150', label: '150 amp' },
            { value: '200', label: '200 amp' },
            { value: '400', label: '400 amp (commercial)' },
            { value: 'not-sure', label: 'Not sure' },
          ].map((option) => (
            <label
              key={option.value}
              className={`flex items-center justify-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                formData.panelAmperage === option.value
                  ? 'border-solar-500 bg-solar-50'
                  : 'border-gray-200 hover:border-solar-300'
              }`}
            >
              <input
                type="radio"
                name="panelAmperage"
                value={option.value}
                checked={formData.panelAmperage === option.value}
                onChange={(e) => handleChange('panelAmperage', e.target.value)}
                className="sr-only"
              />
              <span className="font-medium text-gray-900">{option.label}</span>
            </label>
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-2">
          Found on main breaker in electrical panel. May require upgrade for larger systems.
        </p>
        {errors.panelAmperage && (
          <p className="text-sm text-red-600 mt-1">{errors.panelAmperage}</p>
        )}
      </div>

      {/* 11. Panel Location */}
      <div className="space-y-3">
        <label className="block text-sm font-semibold text-gray-900">
          Where is your main electrical panel?
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            { value: 'garage', label: 'Garage' },
            { value: 'basement', label: 'Basement' },
            { value: 'outside', label: 'Outside wall' },
            { value: 'utility', label: 'Inside utility room' },
            { value: 'other', label: 'Other/not sure' },
          ].map((option) => (
            <label
              key={option.value}
              className={`flex items-center justify-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                formData.panelLocation === option.value
                  ? 'border-solar-500 bg-solar-50'
                  : 'border-gray-200 hover:border-solar-300'
              }`}
            >
              <input
                type="radio"
                name="panelLocation"
                value={option.value}
                checked={formData.panelLocation === option.value}
                onChange={(e) => handleChange('panelLocation', e.target.value)}
                className="sr-only"
              />
              <span className="font-medium text-gray-900">{option.label}</span>
            </label>
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-2">Helps us plan conduit routing</p>
      </div>

      {/* 12. Photos/Documents Upload */}
      <div className="space-y-3">
        <label className="block text-sm font-semibold text-gray-900">
          Upload Photos or Documents (Optional but Helpful)
        </label>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-solar-400 transition-colors">
          <input
            type="file"
            id="file-upload"
            multiple
            accept="image/*,.pdf"
            onChange={handleFileChange}
            className="hidden"
          />
          <label htmlFor="file-upload" className="cursor-pointer">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="mt-2 text-sm text-gray-600">
              <span className="font-medium text-solar-600 hover:text-solar-500">
                Click to upload
              </span>{' '}
              or drag and drop
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Images (JPG, PNG) or PDF up to 10MB each
            </p>
          </label>
        </div>

        <div className="text-sm text-gray-600 space-y-1">
          <p className="font-medium">Recommended uploads:</p>
          <ul className="list-disc list-inside space-y-1 ml-2 text-gray-500">
            <li>Roof photos (multiple angles)</li>
            <li>Electrical panel photo</li>
            <li>Recent electric bills (12 months if available)</li>
            <li>Property survey (if available)</li>
          </ul>
        </div>

        {formData.files && formData.files.length > 0 && (
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-700">Uploaded Files:</p>
            {formData.files.map((file, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-gray-700">{file.name}</span>
                  <span className="text-xs text-gray-500">
                    ({(file.size / 1024 / 1024).toFixed(2)} MB)
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => removeFile(index)}
                  className="text-red-600 hover:text-red-800"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FormStep2;
