import { useState, useEffect } from 'react';
import { initializeAnalytics, revokeConsent } from '@/utils/analytics';

/**
 * Cookie Consent Banner Component
 * GDPR/CCPA compliant cookie consent banner
 * Stores user preference in localStorage
 */
export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consentGiven = localStorage.getItem('cookieConsent');

    if (!consentGiven) {
      // Show banner after a short delay for better UX
      setTimeout(() => {
        setShowBanner(true);
        // Trigger animation
        setTimeout(() => setIsVisible(true), 100);
      }, 1000);
    } else if (consentGiven === 'accepted') {
      // User previously accepted, initialize analytics
      initializeAnalytics(true);
    }
  }, []);

  const handleAccept = () => {
    // Store consent
    localStorage.setItem('cookieConsent', 'accepted');

    // Initialize analytics
    initializeAnalytics(true);

    // Hide banner with animation
    setIsVisible(false);
    setTimeout(() => setShowBanner(false), 300);
  };

  const handleDecline = () => {
    // Store decline
    localStorage.setItem('cookieConsent', 'declined');

    // Revoke consent
    revokeConsent();

    // Hide banner with animation
    setIsVisible(false);
    setTimeout(() => setShowBanner(false), 300);
  };

  if (!showBanner) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="bg-gray-900 border-t-4 border-orange-500 shadow-2xl">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Message */}
            <div className="flex-1 text-white">
              <p className="text-sm md:text-base">
                We use cookies to enhance your browsing experience, analyze site traffic, and personalize content.
                By clicking "Accept", you consent to our use of cookies.
                {' '}
                <a
                  href="/privacy-policy"
                  className="text-orange-400 hover:text-orange-300 underline"
                >
                  Learn more
                </a>
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 flex-shrink-0">
              <button
                onClick={handleDecline}
                className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors font-medium"
              >
                Decline
              </button>
              <button
                onClick={handleAccept}
                className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
