import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, ArrowRight } from 'lucide-react';
import { trackCTAClick } from '@/utils/analytics';

/**
 * Sticky CTA Bar Component
 *
 * Mobile-optimized sticky bar that appears during scroll
 * Features:
 * - Shows after 30% scroll
 * - Hides when near footer (90%)
 * - Dual CTA layout (Call + Get Quote)
 * - Responsive design optimized for mobile
 * - Analytics tracking
 * - Smooth animations
 */
export default function StickyCTABar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      // Show after 30% scroll, hide when near footer (90%)
      setIsVisible(scrollPercentage > 30 && scrollPercentage < 90);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePhoneClick = () => {
    trackCTAClick('Call Now', 'sticky-cta-bar', 'tel:+18885551234');
  };

  const handleQuoteClick = () => {
    trackCTAClick('Get Free Design', 'sticky-cta-bar', '/design-request');
  };

  if (!isVisible) return null;

  return (
    <>
      <div
        className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-solar-600 to-energy-600 text-white shadow-2xl z-50 transform transition-all duration-300 animate-slideUp"
        role="region"
        aria-label="Call to action bar"
      >
        {/* Mobile Layout */}
        <div className="md:hidden px-3 py-3">
          <div className="flex gap-2">
            <a
              href="tel:+18885551234"
              onClick={handlePhoneClick}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white text-solar-600 rounded-lg font-bold hover:bg-gray-50 transition-all shadow-lg active:scale-95"
              aria-label="Call us now"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </a>
            <Link
              href="/design-request"
              onClick={handleQuoteClick}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-energy-700 text-white rounded-lg font-bold hover:bg-energy-800 transition-all border-2 border-white shadow-lg active:scale-95"
            >
              <span>Free Design</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block px-6 py-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center gap-4">
            <div>
              <p className="font-bold text-lg">Ready to save 40-60% on solar installation?</p>
              <p className="text-sm text-solar-100">No credit card required • Free consultation • 5-7 day turnaround</p>
            </div>
            <div className="flex gap-3">
              <a
                href="tel:+18885551234"
                onClick={handlePhoneClick}
                className="flex items-center gap-2 px-6 py-3 bg-white text-solar-600 rounded-lg font-bold hover:bg-gray-50 hover:shadow-xl transition-all whitespace-nowrap"
                aria-label="Call us now"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <Link
                href="/design-request"
                onClick={handleQuoteClick}
                className="flex items-center gap-2 px-6 py-3 bg-energy-700 text-white rounded-lg font-bold hover:bg-energy-800 hover:shadow-xl transition-all border-2 border-white whitespace-nowrap"
              >
                Get Free Design
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
