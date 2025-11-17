import { useEffect, useRef } from 'react';
import { trackScrollDepth } from '@/utils/analytics';

/**
 * Custom hook to track scroll depth on a page
 * Tracks 25%, 50%, 75%, and 100% scroll milestones
 * @param {object} options - Configuration options
 * @param {boolean} options.enabled - Whether tracking is enabled (default: true)
 * @param {number[]} options.thresholds - Custom scroll depth thresholds (default: [25, 50, 75, 100])
 */
export default function useScrollTracking(options = {}) {
  const { enabled = true, thresholds = [25, 50, 75, 100] } = options;
  const depthsTracked = useRef({});
  const timeOnPageStart = useRef(null);

  useEffect(() => {
    if (!enabled) return;

    // Initialize depths tracking
    thresholds.forEach(threshold => {
      depthsTracked.current[threshold] = false;
    });

    // Record page entry time
    timeOnPageStart.current = Date.now();

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      // Calculate scroll percentage
      const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;

      // Track each threshold once
      thresholds.forEach(threshold => {
        if (scrollPercent >= threshold && !depthsTracked.current[threshold]) {
          trackScrollDepth(threshold, window.location.pathname);
          depthsTracked.current[threshold] = true;
        }
      });
    };

    // Track time on page when user leaves
    const handleBeforeUnload = () => {
      if (timeOnPageStart.current) {
        const timeOnPage = Math.round((Date.now() - timeOnPageStart.current) / 1000);

        // Use sendBeacon for reliable tracking on page unload
        if (navigator.sendBeacon && typeof window.gtag === 'function') {
          window.gtag('event', 'time_on_page', {
            time_seconds: timeOnPage,
            page: window.location.pathname,
            transport_type: 'beacon'
          });
        }
      }
    };

    // Add event listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('beforeunload', handleBeforeUnload);

    // Initial check in case user is already scrolled
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [enabled, thresholds]);
}
