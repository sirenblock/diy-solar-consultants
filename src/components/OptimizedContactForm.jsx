'use client';
import { useState } from 'react';
import { Check, ArrowRight, Phone, Mail, User } from 'lucide-react';

export default function OptimizedContactForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', electricBill: '', timeline: '', projectType: '', message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone) => {
    return /^\d{10,}$/.test(phone.replace(/\D/g, ''));
  };

  const handleFieldChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));

    // Inline validation
    if (field === 'email' && value) {
      setErrors(prev => ({
        ...prev,
        email: validateEmail(value) ? '' : 'Please enter a valid email'
      }));
    }

    if (field === 'phone' && value) {
      setErrors(prev => ({
        ...prev,
        phone: validatePhone(value) ? '' : 'Please enter a valid 10-digit phone number'
      }));
    }

    if (field === 'name' && value) {
      setErrors(prev => ({
        ...prev,
        name: value.trim().length < 2 ? 'Please enter your full name' : ''
      }));
    }
  };

  const nextStep = () => {
    // Validate current step
    if (step === 1) {
      if (!formData.name || !formData.email || !validateEmail(formData.email)) {
        setErrors({
          name: !formData.name ? 'Name is required' : '',
          email: !formData.email ? 'Email is required' : !validateEmail(formData.email) ? 'Please enter a valid email' : ''
        });
        return;
      }
    }

    if (step === 2) {
      if (!formData.projectType || !formData.message) {
        setErrors({
          projectType: !formData.projectType ? 'Please select what you\'re interested in' : '',
          message: !formData.message ? 'Please tell us about your project' : ''
        });
        return;
      }
    }

    setStep(step + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setStep(step - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStep(3);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setErrors({ submit: 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors({ submit: 'Something went wrong. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Step {step} of 3</span>
          <span className="text-sm text-gray-500">{Math.round((step / 3) * 100)}% Complete</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-solar-600 to-energy-600 transition-all duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>
      </div>

      {/* Step 1: Basic Info */}
      {step === 1 && (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold mb-6">Let&apos;s Get Started</h3>

          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your Name *
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleFieldChange('name', e.target.value)}
                className="w-full pl-11 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-solar-600 focus:ring-2 focus:ring-solar-200 outline-none transition-colors"
                placeholder="John Smith"
                autoComplete="name"
              />
            </div>
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleFieldChange('email', e.target.value)}
                className={`w-full pl-11 pr-4 py-3 border-2 rounded-lg outline-none transition-colors ${
                  errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : 'border-gray-300 focus:border-solar-600 focus:ring-solar-200'
                } focus:ring-2`}
                placeholder="john@example.com"
                autoComplete="email"
                inputMode="email"
              />
              {formData.email && !errors.email && validateEmail(formData.email) && (
                <Check className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-600" />
              )}
            </div>
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          {/* Phone Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number (Optional)
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleFieldChange('phone', e.target.value)}
                className="w-full pl-11 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-solar-600 focus:ring-2 focus:ring-solar-200 outline-none transition-colors"
                placeholder="(555) 123-4567"
                autoComplete="tel"
                inputMode="tel"
              />
              {formData.phone && !errors.phone && validatePhone(formData.phone) && (
                <Check className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-600" />
              )}
            </div>
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
            )}
          </div>

          <button
            onClick={nextStep}
            className="w-full bg-gradient-to-r from-solar-600 to-energy-600 text-white font-bold py-4 rounded-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
          >
            Continue
            <ArrowRight className="w-5 h-5" />
          </button>

          <p className="text-xs text-center text-gray-500">
            We&apos;ll never share your information. See our Privacy Policy.
          </p>
        </div>
      )}

      {/* Step 2: Project Details */}
      {step === 2 && (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold mb-6">Tell Us About Your Project</h3>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              What are you interested in? *
            </label>
            <select
              value={formData.projectType}
              onChange={(e) => handleFieldChange('projectType', e.target.value)}
              className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 outline-none transition-colors ${
                errors.projectType ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : 'border-gray-300 focus:border-solar-600 focus:ring-solar-200'
              }`}
            >
              <option value="">Select an option</option>
              <option value="Solar System Design">Solar System Design</option>
              <option value="Permitting Services">Permitting Services</option>
              <option value="Equipment Sourcing">Equipment Sourcing</option>
              <option value="Technical Consulting">Technical Consulting</option>
              <option value="Complete Package">Complete Package (Design + Permit + Equipment)</option>
              <option value="General Question">General Question</option>
              <option value="Other">Other</option>
            </select>
            {errors.projectType && (
              <p className="mt-1 text-sm text-red-600">{errors.projectType}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Approximate Monthly Electric Bill
            </label>
            <select
              value={formData.electricBill}
              onChange={(e) => handleFieldChange('electricBill', e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-solar-600 focus:ring-2 focus:ring-solar-200 outline-none transition-colors"
            >
              <option value="">Select range...</option>
              <option value="0-100">$0 - $100</option>
              <option value="100-200">$100 - $200</option>
              <option value="200-300">$200 - $300</option>
              <option value="300+">$300+</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              When are you planning to go solar?
            </label>
            <select
              value={formData.timeline}
              onChange={(e) => handleFieldChange('timeline', e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-solar-600 focus:ring-2 focus:ring-solar-200 outline-none transition-colors"
            >
              <option value="">Select timeline...</option>
              <option value="asap">As soon as possible</option>
              <option value="1-3months">1-3 months</option>
              <option value="3-6months">3-6 months</option>
              <option value="6+months">6+ months</option>
              <option value="research">Just researching</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tell us about your project *
            </label>
            <textarea
              value={formData.message}
              onChange={(e) => handleFieldChange('message', e.target.value)}
              rows={4}
              className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 outline-none transition-colors resize-none ${
                errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : 'border-gray-300 focus:border-solar-600 focus:ring-solar-200'
              }`}
              placeholder="What questions do you have? What are you trying to accomplish?"
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-600">{errors.message}</p>
            )}
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={handleBack}
              className="flex-1 border-2 border-gray-300 text-gray-700 font-bold py-4 rounded-lg hover:bg-gray-50 transition-all"
            >
              Back
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="flex-1 bg-gradient-to-r from-solar-600 to-energy-600 text-white font-bold py-4 rounded-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  Submit
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </div>
          {errors.submit && (
            <p className="text-sm text-red-600 text-center">{errors.submit}</p>
          )}
        </div>
      )}

      {/* Step 3: Confirmation */}
      {step === 3 && (
        <div className="text-center space-y-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <Check className="w-10 h-10 text-green-600" />
          </div>
          <h3 className="text-3xl font-bold">You&apos;re All Set!</h3>
          <p className="text-lg text-gray-600">
            We&apos;ll get back to you within 24 hours with answers to your questions.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 text-left">
            <p className="font-semibold mb-2">What happens next?</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Our team reviews your message</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>We respond within 24 hours with answers or next steps</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>If interested, we schedule a free consultation</span>
              </li>
            </ul>
          </div>

          <div className="pt-4">
            <a
              href="/calculator"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-solar-600 text-solar-600 font-semibold rounded-lg hover:bg-solar-50 transition-all"
            >
              Try Our Solar Calculator
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
