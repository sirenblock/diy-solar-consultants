import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import FormProgress from './FormProgress';
import FormStep1 from './FormStep1';
import FormStep2 from './FormStep2';
import FormStep3 from './FormStep3';
import SecurityBadges from './SecurityBadges';
import { trackFormStart, trackEvent, trackFormSubmission, trackConversion } from '@/utils/analytics';

const DesignRequestForm = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStartTime, setFormStartTime] = useState(null);

  // Load form data from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem('solarDesignFormData');
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        setFormData(parsed);
      } catch (e) {
        console.error('Error loading saved form data:', e);
      }
    }

    // Track form start
    trackFormStart('design_request');
    setFormStartTime(Date.now());
  }, []);

  // Save form data to localStorage whenever it changes
  useEffect(() => {
    if (Object.keys(formData).length > 0) {
      localStorage.setItem('solarDesignFormData', JSON.stringify(formData));
    }
  }, [formData]);

  const updateFormData = (updates) => {
    setFormData((prev) => ({ ...prev, ...updates }));

    // Clear errors for updated fields and perform inline validation
    const updatedFields = Object.keys(updates);
    setErrors((prev) => {
      const newErrors = { ...prev };
      updatedFields.forEach((field) => {
        delete newErrors[field];

        // Inline validation for email
        if (field === 'email' && updates[field]) {
          if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(updates[field])) {
            newErrors[field] = 'Please enter a valid email address';
          }
        }

        // Inline validation for phone
        if (field === 'phone' && updates[field]) {
          if (!/^[\d\s\-\(\)]+$/.test(updates[field]) || updates[field].replace(/\D/g, '').length < 10) {
            newErrors[field] = 'Please enter a valid 10-digit phone number';
          }
        }

        // Inline validation for ZIP code
        if (field === 'zip' && updates[field]) {
          if (!/^\d{5}(-\d{4})?$/.test(updates[field])) {
            newErrors[field] = 'Please enter a valid ZIP code';
          }
        }
      });
      return newErrors;
    });
  };

  const handleFileUpload = (files) => {
    updateFormData({ files: [...(formData.files || []), ...files] });
  };

  const validateStep1 = () => {
    const newErrors = {};

    if (!formData.systemSize) {
      newErrors.systemSize = 'Please select a system size';
    }

    if (!formData.energyOffset) {
      newErrors.energyOffset = 'Please select an energy offset goal';
    }

    if (!formData.inverterType) {
      newErrors.inverterType = 'Please select an inverter type';
    }

    if (!formData.batteryStorage) {
      newErrors.batteryStorage = 'Please select a battery storage option';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};

    if (!formData.street) {
      newErrors.street = 'Street address is required';
    }

    if (!formData.city) {
      newErrors.city = 'City is required';
    }

    if (!formData.state) {
      newErrors.state = 'State is required';
    }

    if (!formData.zip) {
      newErrors.zip = 'ZIP code is required';
    } else if (!/^\d{5}(-\d{4})?$/.test(formData.zip)) {
      newErrors.zip = 'Please enter a valid ZIP code';
    }

    if (!formData.roofType) {
      newErrors.roofType = 'Please select a roof type';
    }

    if (!formData.roofAge) {
      newErrors.roofAge = 'Please select roof age';
    }

    if (!formData.roofPitch) {
      newErrors.roofPitch = 'Please select roof pitch';
    }

    if (!formData.roofOrientation) {
      newErrors.roofOrientation = 'Please select roof orientation';
    }

    if (!formData.shading) {
      newErrors.shading = 'Please select shading conditions';
    }

    if (!formData.panelAmperage) {
      newErrors.panelAmperage = 'Please select panel amperage';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep3 = () => {
    const newErrors = {};

    if (!formData.name || formData.name.trim().length < 2) {
      newErrors.name = 'Please enter your full name';
    }

    if (!formData.email) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\d\s\-\(\)]+$/.test(formData.phone) || formData.phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.timeline) {
      newErrors.timeline = 'Please select a project timeline';
    }

    if (!formData.servicePackage) {
      newErrors.servicePackage = 'Please select a service package';
    }

    if (!formData.agreeTerms) {
      newErrors.agreeTerms = 'You must agree to the terms of service';
    }

    if (!formData.agreeContact) {
      newErrors.agreeContact = 'You must agree to be contacted about your request';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    let isValid = false;

    if (currentStep === 1) {
      isValid = validateStep1();
    } else if (currentStep === 2) {
      isValid = validateStep2();
    }

    if (isValid) {
      const nextStep = Math.min(currentStep + 1, 3);

      // Track step progression
      trackEvent('form_step_completed', {
        form_name: 'design_request',
        step: currentStep,
        next_step: nextStep
      });

      setCurrentStep(nextStep);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateStep3()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Generate a unique request ID
      const requestId = `REQ-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;

      // Calculate form completion time
      const completionTime = formStartTime ? Math.round((Date.now() - formStartTime) / 1000) : 0;

      // Prepare form data for submission
      const submissionData = {
        ...formData,
        requestId,
        submittedAt: new Date().toISOString(),
      };

      // Submit to API endpoint
      const response = await fetch('/api/design-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      // Track form submission
      trackFormSubmission('design_request', {
        service_package: formData.servicePackage,
        system_size: formData.systemSize,
        has_battery: formData.batteryStorage !== 'none',
        completion_time_seconds: completionTime,
        request_id: requestId
      });

      // Track conversion (high value)
      trackConversion('design_request_submitted', 500, {
        service_package: formData.servicePackage,
        system_size: formData.systemSize,
        request_id: requestId
      });

      // Clear localStorage
      localStorage.removeItem('solarDesignFormData');

      // Redirect to thank you page with request ID
      router.push(`/design-request-thank-you?id=${requestId}`);
    } catch (error) {
      console.error('Error submitting form:', error);

      // Track form error
      trackEvent('form_error', {
        form_name: 'design_request',
        error_type: 'submission_failed'
      });

      setErrors({
        submit: 'There was an error submitting your request. Please try again.',
      });
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Progress Indicator */}
        <FormProgress currentStep={currentStep} totalSteps={3} />

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <form onSubmit={handleSubmit}>
            {/* Render Current Step */}
            {currentStep === 1 && (
              <FormStep1
                formData={formData}
                updateFormData={updateFormData}
                errors={errors}
              />
            )}

            {currentStep === 2 && (
              <FormStep2
                formData={formData}
                updateFormData={updateFormData}
                errors={errors}
                onFileUpload={handleFileUpload}
              />
            )}

            {currentStep === 3 && (
              <FormStep3
                formData={formData}
                updateFormData={updateFormData}
                errors={errors}
              />
            )}

            {/* Error Message */}
            {errors.submit && (
              <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800 text-sm">{errors.submit}</p>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="mt-12 flex items-center justify-between">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-6 py-3 text-gray-700 bg-white border-2 border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  Back
                </button>
              ) : (
                <div></div>
              )}

              {currentStep < 3 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-8 py-3 bg-gradient-to-r from-solar-500 to-energy-500 text-white rounded-lg font-semibold hover:from-solar-600 hover:to-energy-600 transition-all shadow-lg hover:shadow-xl flex items-center ml-auto"
                >
                  Next
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 bg-gradient-to-r from-solar-500 to-energy-500 text-white rounded-lg font-semibold hover:from-solar-600 hover:to-energy-600 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center ml-auto"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Get My Free Design
                      <svg
                        className="w-5 h-5 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </>
                  )}
                </button>
              )}
              {/* Microcopy - reduces form anxiety */}
              <p className="text-center text-sm text-gray-500 mt-3">
                No credit card required &bull; Free consultation &bull; 5-7 day turnaround
              </p>
            </div>
          </form>
        </div>

        {/* Security Badges & Privacy Notice */}
        <div className="mt-8 text-center space-y-4">
          <SecurityBadges />

          <div className="text-sm text-gray-600">
            <p>
              We respect your privacy. Read our{' '}
              <Link href="/privacy" className="text-solar-600 underline hover:text-solar-700">
                Privacy Policy
              </Link>
              . Your information is never sold or shared.
            </p>
          </div>
        </div>

        {/* Help Text */}
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Questions?{' '}
            <a href="/contact" className="text-solar-600 hover:text-solar-700 font-semibold">
              Contact us
            </a>{' '}
            or call{' '}
            <a href="tel:+18885551234" className="text-solar-600 hover:text-solar-700 font-semibold">
              (888) 555-1234
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DesignRequestForm;
