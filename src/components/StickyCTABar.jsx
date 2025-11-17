import { useState, useEffect } from 'react';
import Link from 'next/link';

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

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-solar-600 to-energy-600 text-white py-3 sm:py-4 px-4 sm:px-6 shadow-2xl z-50 transform transition-all duration-300"
      style={{ animation: 'slideUp 0.3s ease-out' }}
      role="region"
      aria-label="Call to action bar"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
        <div className="text-center sm:text-left">
          <p className="font-bold text-base sm:text-lg">Ready to save 40-60% on solar installation?</p>
          <p className="text-xs sm:text-sm text-solar-100 hidden sm:block">No credit card required • Free consultation</p>
        </div>
        <div className="flex gap-3 w-full sm:w-auto">
          <a
            href="tel:+18885551234"
            className="flex-1 sm:flex-none px-4 sm:px-6 py-2 sm:py-3 bg-white text-solar-600 rounded-lg font-bold hover:bg-gray-100 transition-colors whitespace-nowrap text-center shadow-md hover:shadow-lg"
            aria-label="Call us now"
          >
            📞 Call Now
          </a>
          <Link
            href="/design-request"
            className="flex-1 sm:flex-none px-4 sm:px-6 py-2 sm:py-3 bg-energy-700 text-white rounded-lg font-bold hover:bg-energy-800 transition-colors border-2 border-white whitespace-nowrap text-center shadow-md hover:shadow-lg"
          >
            Get Free Quote →
          </Link>
        </div>
      </div>
    </div>
  );
}
