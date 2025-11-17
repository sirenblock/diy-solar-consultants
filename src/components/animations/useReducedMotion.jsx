import { useState, useEffect } from 'react';

/**
 * useReducedMotion Hook - Detects if user prefers reduced motion
 * @returns {boolean} - True if user prefers reduced motion
 */
export function useReducedMotion() {
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false);

  useEffect(() => {
    // Check if the browser supports the media query
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    // Set initial value
    setShouldReduceMotion(mediaQuery.matches);

    // Listen for changes
    const handleChange = (event) => {
      setShouldReduceMotion(event.matches);
    };

    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
    // Fallback for older browsers
    else if (mediaQuery.addListener) {
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, []);

  return shouldReduceMotion;
}
