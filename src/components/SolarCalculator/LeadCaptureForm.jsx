import React, { useState } from 'react';

const LeadCaptureForm = ({ onSubmit, onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    bestTimeToContact: '',
    comments: '',
    wantsProfessionalDesign: false,
    wantsDIYGuides: true,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Get Your Detailed Solar Report
          </h2>
          <p className="text-lg text-gray-600">
            Receive a comprehensive analysis with equipment recommendations, financing options, and next steps
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-solar-200 outline-none ${
                errors.name ? 'border-red-500' : 'border-gray-300 focus:border-solar-500'
              }`}
              placeholder="John Doe"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-solar-200 outline-none ${
                errors.email ? 'border-red-500' : 'border-gray-300 focus:border-solar-500'
              }`}
              placeholder="john@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
            <p className="mt-1 text-sm text-gray-500">
              We'll email your detailed report to this address
            </p>
          </div>

          {/* Phone (Optional) */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Phone Number <span className="text-gray-500 text-xs">(optional)</span>
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-solar-500 focus:ring-2 focus:ring-solar-200 outline-none"
              placeholder="(555) 123-4567"
            />
          </div>

          {/* Best Time to Contact */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Best Time to Contact <span className="text-gray-500 text-xs">(optional)</span>
            </label>
            <select
              value={formData.bestTimeToContact}
              onChange={(e) => handleChange('bestTimeToContact', e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-solar-500 focus:ring-2 focus:ring-solar-200 outline-none bg-white"
            >
              <option value="">Select a time</option>
              <option value="morning">Morning (8am - 12pm)</option>
              <option value="afternoon">Afternoon (12pm - 5pm)</option>
              <option value="evening">Evening (5pm - 8pm)</option>
              <option value="anytime">Anytime</option>
            </select>
          </div>

          {/* Comments / Questions */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Additional Comments or Questions <span className="text-gray-500 text-xs">(optional)</span>
            </label>
            <textarea
              value={formData.comments}
              onChange={(e) => handleChange('comments', e.target.value)}
              rows={4}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-solar-500 focus:ring-2 focus:ring-solar-200 outline-none resize-none"
              placeholder="Tell us about your project, timeline, or any specific questions..."
            />
          </div>

          {/* Checkboxes */}
          <div className="space-y-3 pt-4 border-t border-gray-200">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.wantsProfessionalDesign}
                onChange={(e) => handleChange('wantsProfessionalDesign', e.target.checked)}
                className="mt-1 w-5 h-5 text-solar-600 border-gray-300 rounded focus:ring-solar-500"
              />
              <div className="flex-1">
                <span className="font-semibold text-gray-900">I'm interested in a professional design quote</span>
                <p className="text-sm text-gray-600 mt-1">
                  Get a custom system design with permit-ready plans from our licensed engineers
                </p>
              </div>
            </label>

            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.wantsDIYGuides}
                onChange={(e) => handleChange('wantsDIYGuides', e.target.checked)}
                className="mt-1 w-5 h-5 text-solar-600 border-gray-300 rounded focus:ring-solar-500"
              />
              <div className="flex-1">
                <span className="font-semibold text-gray-900">Send me DIY solar guides and tips</span>
                <p className="text-sm text-gray-600 mt-1">
                  Receive helpful resources, equipment recommendations, and installation guides
                </p>
              </div>
            </label>
          </div>

          {/* Privacy Notice */}
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-xs text-gray-600">
              By submitting this form, you agree to receive email communications from DIY Solar Consultants.
              We respect your privacy and will never share your information with third parties.
              You can unsubscribe at any time.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <button
              type="button"
              onClick={onBack}
              className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
            >
              Back to Results
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-solar-600 text-white rounded-lg font-bold text-lg hover:bg-solar-700 transition-colors shadow-lg"
            >
              Get My Free Report
            </button>
          </div>
        </form>

        {/* Trust Signals */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm font-semibold text-gray-700 mb-3 text-center">
            What You'll Receive:
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start gap-2">
              <svg className="w-5 h-5 text-energy-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Detailed equipment recommendations with specific product models and pricing</span>
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-5 h-5 text-energy-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Financing options and available incentives in your area</span>
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-5 h-5 text-energy-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Step-by-step installation timeline and planning guide</span>
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-5 h-5 text-energy-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Information on permitting requirements and utility interconnection in your state</span>
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-5 h-5 text-energy-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Access to our team for questions and consultation</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LeadCaptureForm;
