import * as gtag from './gtag';

/**
 * Define active experiments
 */
export const EXPERIMENTS = {
  HERO_HEADLINE: 'hero_headline_test',
  CTA_BUTTON_TEXT: 'cta_button_text',
  PRICING_DISPLAY: 'pricing_display_test',
  TESTIMONIAL_LAYOUT: 'testimonial_layout_test',
};

/**
 * Get experiment variant for a user
 * @param {string} experimentId - Experiment identifier
 * @param {number} split - A/B split percentage (default 0.5 = 50/50)
 * @returns {string} - 'A' or 'B'
 */
export const getExperimentVariant = (experimentId, split = 0.5) => {
  if (typeof window === 'undefined') {
    return 'A'; // Default to A on server-side
  }

  try {
    // Check if user already has a variant assigned
    let variant = localStorage.getItem(`experiment_${experimentId}`);

    if (!variant) {
      // Randomly assign variant based on split
      variant = Math.random() < split ? 'A' : 'B';
      localStorage.setItem(`experiment_${experimentId}`, variant);

      // Track variant assignment
      gtag.event({
        action: 'experiment_view',
        category: 'A/B Test',
        label: `${experimentId}_${variant}`,
      });
    }

    return variant;
  } catch (error) {
    // If localStorage is not available, return default
    console.error('Error accessing localStorage for experiments:', error);
    return 'A';
  }
};

/**
 * Track experiment conversion
 * @param {string} experimentId - Experiment identifier
 * @param {string} conversionType - Type of conversion
 * @param {number} value - Conversion value
 */
export const trackExperimentConversion = (experimentId, conversionType, value = 0) => {
  if (typeof window === 'undefined') return;

  try {
    const variant = localStorage.getItem(`experiment_${experimentId}`);

    if (variant) {
      gtag.event({
        action: 'experiment_conversion',
        category: 'A/B Test',
        label: `${experimentId}_${variant}_${conversionType}`,
        value: value,
      });
    }
  } catch (error) {
    console.error('Error tracking experiment conversion:', error);
  }
};

/**
 * Reset experiment variant (for testing)
 * @param {string} experimentId - Experiment identifier
 */
export const resetExperiment = (experimentId) => {
  if (typeof window === 'undefined') return;

  try {
    localStorage.removeItem(`experiment_${experimentId}`);
  } catch (error) {
    console.error('Error resetting experiment:', error);
  }
};

/**
 * Get all active experiment variants for the current user
 * @returns {Object} - Object with experimentId as key and variant as value
 */
export const getAllExperimentVariants = () => {
  if (typeof window === 'undefined') return {};

  const variants = {};

  try {
    Object.values(EXPERIMENTS).forEach((experimentId) => {
      const variant = localStorage.getItem(`experiment_${experimentId}`);
      if (variant) {
        variants[experimentId] = variant;
      }
    });
  } catch (error) {
    console.error('Error getting experiment variants:', error);
  }

  return variants;
};

/**
 * Hook for using experiments in components
 * @param {string} experimentId - Experiment identifier
 * @param {number} split - A/B split percentage
 * @returns {Object} - { variant, trackConversion }
 */
export const useExperiment = (experimentId, split = 0.5) => {
  const variant = getExperimentVariant(experimentId, split);

  const trackConversion = (conversionType, value = 0) => {
    trackExperimentConversion(experimentId, conversionType, value);
  };

  return {
    variant,
    trackConversion,
    isVariantA: variant === 'A',
    isVariantB: variant === 'B',
  };
};

/**
 * Multi-variant testing (A/B/C/D...)
 * @param {string} experimentId - Experiment identifier
 * @param {Array<string>} variants - Array of variant names (e.g., ['A', 'B', 'C'])
 * @returns {string} - Selected variant
 */
export const getMultiVariantExperiment = (experimentId, variants = ['A', 'B']) => {
  if (typeof window === 'undefined') {
    return variants[0]; // Default to first variant on server-side
  }

  try {
    let variant = localStorage.getItem(`experiment_${experimentId}`);

    if (!variant || !variants.includes(variant)) {
      // Randomly assign variant
      const randomIndex = Math.floor(Math.random() * variants.length);
      variant = variants[randomIndex];
      localStorage.setItem(`experiment_${experimentId}`, variant);

      // Track variant assignment
      gtag.event({
        action: 'experiment_view',
        category: 'Multi-Variant Test',
        label: `${experimentId}_${variant}`,
      });
    }

    return variant;
  } catch (error) {
    console.error('Error in multi-variant experiment:', error);
    return variants[0];
  }
};
