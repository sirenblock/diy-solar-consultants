'use client';
import { useState } from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';

/**
 * Mobile-optimized form component with:
 * - Large touch-friendly inputs (min 44px)
 * - Appropriate keyboard types (email, tel, numeric)
 * - Auto-complete attributes
 * - Clear visual feedback
 * - Smooth animations
 */
export default function MobileOptimizedForm({
  onSubmit,
  submitButtonText = 'Get My Free Design',
  location = 'mobile-form',
  showAddressField = false,
  showSystemSizeField = false,
  className = '',
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData);

      if (onSubmit) {
        await onSubmit(data);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="John Smith"
          className="w-full px-4 py-4 text-base lg:text-lg border-2 border-gray-300 rounded-lg focus:border-solar-600 focus:ring-2 focus:ring-solar-600/20 outline-none transition-all duration-200"
          autoComplete="name"
        />
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="john@example.com"
          className="w-full px-4 py-4 text-base lg:text-lg border-2 border-gray-300 rounded-lg focus:border-solar-600 focus:ring-2 focus:ring-solar-600/20 outline-none transition-all duration-200"
          autoComplete="email"
          inputMode="email"
        />
      </div>

      {/* Phone Field */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          placeholder="(555) 123-4567"
          className="w-full px-4 py-4 text-base lg:text-lg border-2 border-gray-300 rounded-lg focus:border-solar-600 focus:ring-2 focus:ring-solar-600/20 outline-none transition-all duration-200"
          autoComplete="tel"
          inputMode="tel"
        />
      </div>

      {/* Address Field (Optional) */}
      {showAddressField && (
        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="123 Main St, City, State, ZIP"
            className="w-full px-4 py-4 text-base lg:text-lg border-2 border-gray-300 rounded-lg focus:border-solar-600 focus:ring-2 focus:ring-solar-600/20 outline-none transition-all duration-200"
            autoComplete="street-address"
          />
        </div>
      )}

      {/* System Size Field (Optional) */}
      {showSystemSizeField && (
        <div>
          <label htmlFor="systemSize" className="block text-sm font-medium text-gray-700 mb-1">
            Desired System Size (kW)
          </label>
          <input
            type="number"
            id="systemSize"
            name="systemSize"
            placeholder="10"
            min="1"
            max="100"
            step="0.5"
            className="w-full px-4 py-4 text-base lg:text-lg border-2 border-gray-300 rounded-lg focus:border-solar-600 focus:ring-2 focus:ring-solar-600/20 outline-none transition-all duration-200"
            inputMode="decimal"
          />
        </div>
      )}

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message (Optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          placeholder="Tell us about your project..."
          className="w-full px-4 py-4 text-base lg:text-lg border-2 border-gray-300 rounded-lg focus:border-solar-600 focus:ring-2 focus:ring-solar-600/20 outline-none transition-all duration-200 resize-none"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-solar-600 to-energy-600 text-white font-bold py-4 px-8 rounded-lg text-base lg:text-lg flex items-center justify-center gap-2 active:scale-95 transition-transform shadow-lg shadow-solar-600/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100"
        data-location={location}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Submitting...</span>
          </>
        ) : (
          <>
            <span>{submitButtonText}</span>
            <ArrowRight className="w-5 h-5" />
          </>
        )}
      </button>

      {/* Privacy Note */}
      <p className="text-xs text-gray-500 text-center">
        By submitting this form, you agree to our{' '}
        <a href="/privacy" className="text-solar-600 hover:underline">
          Privacy Policy
        </a>
        . We respect your privacy and never share your information.
      </p>
    </form>
  );
}
