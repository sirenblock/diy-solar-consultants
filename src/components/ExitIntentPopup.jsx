'use client';
import { useState, useEffect } from 'react';
import { X, Download, Check, Lock, Shield, Users } from 'lucide-react';

export function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const hasShown = sessionStorage.getItem('exitIntentShown');

    // Don't show on conversion pages where user is already engaged
    const isConversionPage = window.location.pathname.includes('design-request') ||
      window.location.pathname.includes('thank-you') ||
      window.location.pathname.includes('contact');
    if (hasShown || isConversionPage) return;

    const triggerPopup = () => {
      if (!show) {
        setShow(true);
        sessionStorage.setItem('exitIntentShown', 'true');
      }
    };

    // Desktop: mouse leaves top of viewport
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0) triggerPopup();
    };

    // Mobile: trigger after user scrolls up (back-scroll intent) past 50% of page
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollPercent = currentScrollY / (document.documentElement.scrollHeight - window.innerHeight);

      // User scrolled past 50% then scrolled back up significantly
      if (scrollPercent > 0.5 && currentScrollY < lastScrollY - 200) {
        triggerPopup();
      }
      lastScrollY = currentScrollY;
    };

    // Fallback: trigger after 45 seconds of inactivity
    const timeout = setTimeout(triggerPopup, 45000);

    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeout);
    };
  }, [show]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          source: 'exit-intent',
          leadMagnet: 'diy-solar-guide'
        })
      });

      if (response.ok) {
        setSubmitted(true);
        // Track conversion
        if (window.gtag) {
          window.gtag('event', 'generate_lead', {
            event_category: 'Lead Generation',
            event_label: 'Exit Intent Popup',
            value: 1
          });
        }
      }
    } catch (error) {
      console.error('Subscription error:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl relative animate-scaleIn max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={() => setShow(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10 bg-white rounded-full p-1 shadow-md"
          aria-label="Close popup"
        >
          <X className="w-6 h-6" />
        </button>

        {!submitted ? (
          <div className="p-8 md:p-12">
            {/* Icon */}
            <div className="w-20 h-20 bg-gradient-to-br from-solar-500 to-energy-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Download className="w-10 h-10 text-white" />
            </div>

            {/* Headline */}
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-solar-600 to-energy-600 bg-clip-text text-transparent">
              Wait! Get Your FREE Solar Savings Guide
            </h3>

            {/* Subheadline */}
            <p className="text-lg text-gray-600 text-center mb-8">
              Before you go, download our comprehensive guide with everything you need to know about going solar DIY.
            </p>

            {/* What's included */}
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 mb-8 border border-gray-200">
              <p className="font-semibold mb-4 text-gray-900 text-lg">You'll Get:</p>
              <ul className="space-y-3">
                {[
                  'Complete DIY Solar Installation Checklist',
                  'Equipment Buying Guide (Save $5K+)',
                  'Permitting & Inspection Roadmap',
                  'ROI Calculator Spreadsheet',
                  'Common Mistakes to Avoid'
                ].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Email form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                  title="Please enter a valid email address"
                  className="w-full px-6 py-4 border-2 border-gray-300 rounded-lg focus:border-solar-600 focus:ring-2 focus:ring-solar-200 outline-none text-lg transition-all"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-solar-600 to-energy-600 text-white font-bold py-4 rounded-lg hover:shadow-xl transition-all text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Download FREE Guide Now'}
              </button>
            </form>

            {/* Trust signals */}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Lock className="w-4 h-4" />
                <span>100% Free</span>
              </div>
              <div className="flex items-center gap-1">
                <Shield className="w-4 h-4" />
                <span>No Spam Ever</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span>Join 10,000+ Readers</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-12 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-3xl font-bold mb-4 text-gray-900">Check Your Email!</h3>
            <p className="text-lg text-gray-600 mb-8">
              We've sent your FREE Solar Savings Guide to <strong className="text-gray-900">{email}</strong>
            </p>
            <p className="text-gray-500 mb-8">
              Don't forget to check your spam folder if you don't see it in a few minutes.
            </p>
            <button
              onClick={() => setShow(false)}
              className="px-8 py-3 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition-colors"
            >
              Close
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
