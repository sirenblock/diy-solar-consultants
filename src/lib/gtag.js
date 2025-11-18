// Google Analytics utilities
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

/**
 * Track page views
 * @param {string} url - The page URL
 */
export const pageview = (url) => {
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

/**
 * Track custom events
 * @param {Object} params - Event parameters
 * @param {string} params.action - Event action
 * @param {string} params.category - Event category
 * @param {string} params.label - Event label
 * @param {number} params.value - Event value
 */
export const event = ({ action, category, label, value }) => {
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

/**
 * Track conversions
 * @param {string} conversionId - Google Ads conversion ID
 * @param {number} value - Conversion value
 */
export const conversion = (conversionId, value = 0) => {
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('event', 'conversion', {
      send_to: `${GA_MEASUREMENT_ID}/${conversionId}`,
      value: value,
      currency: 'USD',
    });
  }
};

/**
 * Predefined conversion goals
 */
export const CONVERSION_GOALS = {
  DESIGN_REQUEST: 'design_request_submitted',
  PHONE_CALL: 'phone_call_clicked',
  CALCULATOR_USED: 'calculator_completed',
  EMAIL_SIGNUP: 'email_subscribed',
  RESOURCE_DOWNLOAD: 'resource_downloaded',
  CHAT_OPENED: 'chat_widget_opened',
};

/**
 * Track conversion goals
 * @param {string} goal - Conversion goal from CONVERSION_GOALS
 * @param {number} value - Conversion value in USD
 * @param {Object} additionalParams - Additional parameters
 */
export const trackConversion = (goal, value = 0, additionalParams = {}) => {
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('event', goal, {
      value: value,
      currency: 'USD',
      ...additionalParams,
    });
  }
};

/**
 * Track form interactions
 * @param {string} formName - Name of the form
 * @param {string} action - Form action (start, step, error, submit)
 * @param {Object} additionalData - Additional form data
 */
export const trackForm = (formName, action, additionalData = {}) => {
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('event', `form_${action}`, {
      event_category: 'Form',
      event_label: formName,
      ...additionalData,
    });
  }
};

/**
 * Track funnel steps
 * @param {string} stepName - Name of the funnel step
 * @param {number} stepNumber - Step number
 * @param {number} value - Step value
 */
export const trackFunnelStep = (stepName, stepNumber, value = 0) => {
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('event', 'funnel_step', {
      event_category: 'Design Request Funnel',
      event_label: `Step ${stepNumber}: ${stepName}`,
      value: value,
    });
  }
};

/**
 * Track enhanced lead data
 * @param {Object} formData - Form data
 */
export const trackEnhancedLead = (formData) => {
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('event', 'generate_lead', {
      currency: 'USD',
      value: 2299,
      lead_type: 'design_request',
      electric_bill: formData.electricBill || 'unknown',
      timeline: formData.timeline || 'unknown',
      location: formData.state || 'unknown',
    });
  }
};

/**
 * Track scroll depth
 * @param {number} percentage - Scroll percentage
 */
export const trackScrollDepth = (percentage) => {
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('event', 'scroll', {
      event_category: 'Engagement',
      event_label: `${percentage}% Scroll Depth`,
      value: percentage,
    });
  }
};

/**
 * Track video interactions
 * @param {string} videoName - Name of the video
 * @param {string} action - Video action (play, pause, complete)
 */
export const trackVideo = (videoName, action) => {
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('event', `video_${action}`, {
      event_category: 'Video',
      event_label: videoName,
    });
  }
};

/**
 * Track outbound links
 * @param {string} url - Outbound URL
 * @param {string} label - Link label
 */
export const trackOutboundLink = (url, label) => {
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('event', 'click', {
      event_category: 'Outbound Link',
      event_label: label || url,
      transport_type: 'beacon',
    });
  }
};
