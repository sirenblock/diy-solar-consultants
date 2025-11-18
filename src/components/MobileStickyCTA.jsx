'use client';
import { useState, useEffect } from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Button from './Button';

/**
 * Mobile sticky CTA bar that appears after user scrolls
 * Optimized for mobile conversion with tap-to-call and primary CTA
 */
export default function MobileStickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px down
      setShow(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-solar-600 shadow-2xl p-3 z-50 lg:hidden animate-slide-up">
      <div className="flex gap-2 max-w-md mx-auto">
        {/* Tap to Call Button */}
        <a
          href="tel:+18885551234"
          className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 active:scale-95 transition-transform shadow-lg shadow-blue-600/30"
          data-location="mobile-sticky-cta-phone"
        >
          <Phone className="w-5 h-5" />
          <span className="text-sm sm:text-base">Call Now</span>
        </a>

        {/* Primary CTA */}
        <Link
          href="/design-request"
          className="flex-1 bg-gradient-to-r from-solar-600 to-energy-600 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 active:scale-95 transition-transform shadow-lg shadow-solar-600/30"
          data-location="mobile-sticky-cta-design"
        >
          <span className="text-sm sm:text-base">Free Design</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}
