import React, { useState } from 'react';

const FormStep3 = ({ formData, updateFormData, errors }) => {
  const [showSummary, setShowSummary] = useState(false);

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
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Contact Information</h2>
        <p className="text-lg text-gray-600">
          How should we reach you with your solar design?
        </p>
      </div>

      {/* 1. Name */}
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-900">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          placeholder="John Smith"
          value={formData.name || ''}
          onChange={(e) => handleChange('name', e.target.value)}
          autoComplete="name"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-solar-500 focus:border-transparent"
        />
        {errors.name && <p className="text-sm text-red-600">{errors.name}</p>}
      </div>

      {/* 2. Email */}
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-900">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          placeholder="john@example.com"
          value={formData.email || ''}
          onChange={(e) => handleChange('email', e.target.value)}
          autoComplete="email"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-solar-500 focus:border-transparent"
        />
        <p className="text-sm text-gray-500">
          We'll send your design and quote to this address
        </p>
        {errors.email && <p className="text-sm text-red-600">{errors.email}</p>}
      </div>

      {/* 3. Phone */}
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-900">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          placeholder="(555) 123-4567"
          value={formData.phone || ''}
          onChange={(e) => handleChange('phone', e.target.value)}
          autoComplete="tel"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-solar-500 focus:border-transparent"
        />
        <p className="text-sm text-gray-500">For follow-up questions about your design</p>
        {errors.phone && <p className="text-sm text-red-600">{errors.phone}</p>}
      </div>

      {/* 4. Best Time to Contact */}
      <div className="space-y-3">
        <label className="block text-sm font-semibold text-gray-900">
          Best time to reach you
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {[
            { value: 'morning', label: 'Morning (8am-12pm)' },
            { value: 'afternoon', label: 'Afternoon (12pm-5pm)' },
            { value: 'evening', label: 'Evening (5pm-8pm)' },
            { value: 'anytime', label: 'Anytime' },
          ].map((option) => (
            <label key={option.value} className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
              <input
                type="checkbox"
                value={option.value}
                checked={(formData.bestTime || []).includes(option.value)}
                onChange={() => handleCheckboxChange('bestTime', option.value)}
                className="w-4 h-4 text-solar-600 focus:ring-solar-500 rounded"
              />
              <span className="ml-2 text-gray-900">{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* 5. Project Timeline */}
      <div className="space-y-3">
        <label className="block text-sm font-semibold text-gray-900">
          When are you planning to start your project? <span className="text-red-500">*</span>
        </label>
        <div className="space-y-2">
          {[
            { value: '1-month', label: 'Within 1 month' },
            { value: '1-3-months', label: '1-3 months' },
            { value: '3-6-months', label: '3-6 months' },
            { value: '6-12-months', label: '6-12 months' },
            { value: '12plus-months', label: '12+ months' },
            { value: 'researching', label: 'Just researching/gathering quotes' },
          ].map((option) => (
            <label
              key={option.value}
              className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                formData.timeline === option.value
                  ? 'border-solar-500 bg-solar-50'
                  : 'border-gray-200 hover:border-solar-300'
              }`}
            >
              <input
                type="radio"
                name="timeline"
                value={option.value}
                checked={formData.timeline === option.value}
                onChange={(e) => handleChange('timeline', e.target.value)}
                className="w-4 h-4 text-solar-600 focus:ring-solar-500"
              />
              <span className="ml-3 font-medium text-gray-900">{option.label}</span>
            </label>
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-2">Helps us prioritize your design</p>
        {errors.timeline && <p className="text-sm text-red-600 mt-1">{errors.timeline}</p>}
      </div>

      {/* 6. How Did You Hear About Us */}
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-900">
          How did you find us?
        </label>
        <select
          value={formData.referralSource || ''}
          onChange={(e) => handleChange('referralSource', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-solar-500 focus:border-transparent"
        >
          <option value="">Select source</option>
          <option value="google">Google search</option>
          <option value="social-media">Social media</option>
          <option value="referral">Referral from friend/family</option>
          <option value="forum">Online forum/Reddit</option>
          <option value="youtube">YouTube</option>
          <option value="blog">Blog/article</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* 7. Budget */}
      <div className="space-y-3">
        <label className="block text-sm font-semibold text-gray-900">
          Estimated Budget (Optional)
        </label>
        <div className="space-y-2">
          {[
            { value: 'under-10k', label: 'Under $10,000' },
            { value: '10-15k', label: '$10,000 - $15,000' },
            { value: '15-20k', label: '$15,000 - $20,000' },
            { value: '20-30k', label: '$20,000 - $30,000' },
            { value: '30k-plus', label: '$30,000+' },
            { value: 'prefer-not-say', label: 'Prefer not to say' },
          ].map((option) => (
            <label
              key={option.value}
              className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                formData.budget === option.value
                  ? 'border-solar-500 bg-solar-50'
                  : 'border-gray-200 hover:border-solar-300'
              }`}
            >
              <input
                type="radio"
                name="budget"
                value={option.value}
                checked={formData.budget === option.value}
                onChange={(e) => handleChange('budget', e.target.value)}
                className="w-4 h-4 text-solar-600 focus:ring-solar-500"
              />
              <span className="ml-3 font-medium text-gray-900">{option.label}</span>
            </label>
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-2">
          Helps us recommend appropriate equipment and options
        </p>
      </div>

      {/* 8. Additional Information */}
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-900">
          Anything else we should know?
        </label>
        <textarea
          placeholder="Special requirements, concerns, goals, questions, etc."
          value={formData.additionalInfo || ''}
          onChange={(e) => handleChange('additionalInfo', e.target.value)}
          maxLength={1000}
          rows={5}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-solar-500 focus:border-transparent resize-none"
        />
        <div className="flex justify-between text-sm text-gray-500">
          <span>Tell us about any specific goals, concerns, or requirements</span>
          <span>{(formData.additionalInfo || '').length}/1000</span>
        </div>
      </div>

      {/* 9. Service Package Interest */}
      <div className="space-y-3">
        <label className="block text-sm font-semibold text-gray-900">
          Which package are you interested in? <span className="text-red-500">*</span>
        </label>
        <div className="space-y-3">
          {[
            { value: 'design-only', label: 'Design Only' },
            { value: 'design-permitting', label: 'Design + Permitting' },
            {
              value: 'design-permitting-equipment',
              label: 'Design + Permitting + Equipment Sourcing',
            },
            {
              value: 'complete',
              label: 'Complete Package (Design + Permit + Equipment + Consulting)',
            },
            { value: 'not-sure', label: 'Not sure - provide recommendations' },
          ].map((option) => (
            <label
              key={option.value}
              className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                formData.servicePackage === option.value
                  ? 'border-solar-500 bg-solar-50'
                  : 'border-gray-200 hover:border-solar-300'
              }`}
            >
              <input
                type="radio"
                name="servicePackage"
                value={option.value}
                checked={formData.servicePackage === option.value}
                onChange={(e) => handleChange('servicePackage', e.target.value)}
                className="w-4 h-4 text-solar-600 focus:ring-solar-500"
              />
              <span className="ml-3 font-medium text-gray-900">{option.label}</span>
            </label>
          ))}
        </div>
        {errors.servicePackage && (
          <p className="text-sm text-red-600 mt-1">{errors.servicePackage}</p>
        )}
      </div>

      {/* 10. Agreement & Consent */}
      <div className="space-y-4 p-6 bg-gray-50 rounded-lg border border-gray-200">
        <div className="space-y-3">
          <label className="flex items-start">
            <input
              type="checkbox"
              checked={formData.agreeTerms || false}
              onChange={(e) => handleChange('agreeTerms', e.target.checked)}
              className="w-4 h-4 mt-1 text-solar-600 focus:ring-solar-500 rounded"
            />
            <span className="ml-3 text-sm text-gray-900">
              I agree to the{' '}
              <a href="/terms" target="_blank" className="text-solar-600 hover:text-solar-700 underline">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="/privacy" target="_blank" className="text-solar-600 hover:text-solar-700 underline">
                Privacy Policy
              </a>{' '}
              <span className="text-red-500">*</span>
            </span>
          </label>
          {errors.agreeTerms && <p className="text-sm text-red-600 ml-7">{errors.agreeTerms}</p>}

          <label className="flex items-start">
            <input
              type="checkbox"
              checked={formData.agreeContact || false}
              onChange={(e) => handleChange('agreeContact', e.target.checked)}
              className="w-4 h-4 mt-1 text-solar-600 focus:ring-solar-500 rounded"
            />
            <span className="ml-3 text-sm text-gray-900">
              I agree to be contacted about my solar design request{' '}
              <span className="text-red-500">*</span>
            </span>
          </label>
          {errors.agreeContact && <p className="text-sm text-red-600 ml-7">{errors.agreeContact}</p>}

          <label className="flex items-start">
            <input
              type="checkbox"
              checked={formData.newsletter || false}
              onChange={(e) => handleChange('newsletter', e.target.checked)}
              className="w-4 h-4 mt-1 text-solar-600 focus:ring-solar-500 rounded"
            />
            <span className="ml-3 text-sm text-gray-900">
              Send me DIY solar tips, guides, and updates (optional)
            </span>
          </label>
        </div>
      </div>

      {/* Form Summary */}
      <div className="border-t pt-6">
        <button
          type="button"
          onClick={() => setShowSummary(!showSummary)}
          className="flex items-center justify-between w-full p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <span className="font-semibold text-gray-900">Review Your Information</span>
          <svg
            className={`w-5 h-5 text-gray-600 transition-transform ${
              showSummary ? 'rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {showSummary && (
          <div className="mt-4 p-6 bg-white border border-gray-200 rounded-lg space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">System Details</h4>
              <div className="text-sm text-gray-600 space-y-1">
                <p>System Size: {formData.systemSize || 'Not specified'}</p>
                <p>Energy Offset: {formData.energyOffset || 'Not specified'}%</p>
                <p>Inverter Type: {formData.inverterType || 'Not specified'}</p>
                <p>Battery: {formData.batteryStorage || 'Not specified'}</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Property Information</h4>
              <div className="text-sm text-gray-600 space-y-1">
                <p>
                  Address: {formData.street || ''}, {formData.city || ''}, {formData.state || ''}{' '}
                  {formData.zip || ''}
                </p>
                <p>Roof Type: {formData.roofType || 'Not specified'}</p>
                <p>Roof Age: {formData.roofAge || 'Not specified'}</p>
                <p>Panel Amperage: {formData.panelAmperage || 'Not specified'}</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Contact</h4>
              <div className="text-sm text-gray-600 space-y-1">
                <p>Name: {formData.name || 'Not specified'}</p>
                <p>Email: {formData.email || 'Not specified'}</p>
                <p>Phone: {formData.phone || 'Not specified'}</p>
                <p>Timeline: {formData.timeline || 'Not specified'}</p>
                <p>Package: {formData.servicePackage || 'Not specified'}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormStep3;
