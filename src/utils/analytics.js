/**
 * Analytics utility functions for tracking events and conversions
 * Supports Google Analytics 4, GTM, and custom tracking
 */

// Check if gtag is available
const isGtagAvailable = () => {
  return typeof window !== 'undefined' && typeof window.gtag === 'function';
};

// Check if dataLayer is available (GTM)
const isDataLayerAvailable = () => {
  return typeof window !== 'undefined' && Array.isArray(window.dataLayer);
};

/**
 * Track a custom event
 * @param {string} eventName - Name of the event
 * @param {object} eventParams - Event parameters
 */
export const trackEvent = (eventName, eventParams = {}) => {
  try {
    // Track with GA4
    if (isGtagAvailable()) {
      window.gtag('event', eventName, eventParams);
    }

    // Also push to dataLayer for GTM
    if (isDataLayerAvailable()) {
      window.dataLayer.push({
        event: eventName,
        ...eventParams
      });
    }

    // Console log in development
    if (process.env.NODE_ENV === 'development') {
      console.log('📊 Analytics Event:', eventName, eventParams);
    }
  } catch (error) {
    console.error('Error tracking event:', error);
  }
};

/**
 * Track page view
 * @param {string} url - Page URL
 * @param {string} title - Page title
 */
export const trackPageView = (url, title) => {
  try {
    if (isGtagAvailable()) {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
        page_path: url,
        page_title: title
      });
    }

    if (isDataLayerAvailable()) {
      window.dataLayer.push({
        event: 'page_view',
        page_path: url,
        page_title: title
      });
    }
  } catch (error) {
    console.error('Error tracking page view:', error);
  }
};

/**
 * Track form submission
 * @param {string} formName - Name of the form
 * @param {object} formData - Form data (non-PII only)
 */
export const trackFormSubmission = (formName, formData = {}) => {
  trackEvent('form_submitted', {
    form_name: formName,
    ...formData
  });
};

/**
 * Track form start
 * @param {string} formName - Name of the form
 */
export const trackFormStart = (formName) => {
  trackEvent('form_started', {
    form_name: formName
  });
};

/**
 * Track form field interaction
 * @param {string} formName - Name of the form
 * @param {string} fieldName - Name of the field
 */
export const trackFormFieldInteraction = (formName, fieldName) => {
  trackEvent('form_field_interaction', {
    form_name: formName,
    field_name: fieldName
  });
};

/**
 * Track CTA click
 * @param {string} ctaText - CTA button text
 * @param {string} ctaLocation - Where the CTA is located
 * @param {string} ctaDestination - Where the CTA leads
 */
export const trackCTAClick = (ctaText, ctaLocation, ctaDestination) => {
  trackEvent('cta_clicked', {
    cta_text: ctaText,
    cta_location: ctaLocation,
    cta_destination: ctaDestination
  });
};

/**
 * Track phone click
 * @param {string} phoneNumber - Phone number clicked
 * @param {string} location - Where the phone link is located
 */
export const trackPhoneClick = (phoneNumber, location) => {
  trackEvent('phone_clicked', {
    phone_number: phoneNumber,
    click_location: location
  });
};

/**
 * Track email click
 * @param {string} emailAddress - Email address clicked
 * @param {string} location - Where the email link is located
 */
export const trackEmailClick = (emailAddress, location) => {
  trackEvent('email_clicked', {
    email_address: emailAddress,
    click_location: location
  });
};

/**
 * Track calculator usage
 * @param {object} calculatorData - Calculator input/output data
 */
export const trackCalculatorUsage = (calculatorData) => {
  trackEvent('calculator_completed', {
    ...calculatorData
  });
};

/**
 * Track scroll depth
 * @param {number} depth - Scroll depth percentage (25, 50, 75, 100)
 * @param {string} page - Page path
 */
export const trackScrollDepth = (depth, page) => {
  trackEvent('scroll_depth', {
    depth: `${depth}%`,
    page: page
  });
};

/**
 * Track file download
 * @param {string} fileName - Name of the downloaded file
 * @param {string} fileType - Type of file (pdf, doc, etc)
 */
export const trackFileDownload = (fileName, fileType) => {
  trackEvent('file_download', {
    file_name: fileName,
    file_type: fileType
  });
};

/**
 * Track external link click
 * @param {string} url - External URL
 * @param {string} linkText - Link text
 */
export const trackExternalLink = (url, linkText) => {
  trackEvent('external_link_click', {
    link_url: url,
    link_text: linkText
  });
};

/**
 * Track video play
 * @param {string} videoTitle - Video title
 * @param {string} videoUrl - Video URL
 */
export const trackVideoPlay = (videoTitle, videoUrl) => {
  trackEvent('video_play', {
    video_title: videoTitle,
    video_url: videoUrl
  });
};

/**
 * Track search
 * @param {string} searchTerm - Search term
 */
export const trackSearch = (searchTerm) => {
  trackEvent('search', {
    search_term: searchTerm
  });
};

/**
 * Track conversion
 * @param {string} conversionType - Type of conversion
 * @param {number} value - Conversion value
 * @param {object} additionalData - Additional conversion data
 */
export const trackConversion = (conversionType, value = 0, additionalData = {}) => {
  trackEvent('conversion', {
    conversion_type: conversionType,
    value: value,
    currency: 'USD',
    ...additionalData
  });
};

/**
 * Track time on page
 * @param {number} seconds - Time spent on page
 * @param {string} page - Page path
 */
export const trackTimeOnPage = (seconds, page) => {
  trackEvent('time_on_page', {
    time_seconds: seconds,
    page: page
  });
};

/**
 * Set user properties
 * @param {object} properties - User properties
 */
export const setUserProperties = (properties) => {
  try {
    if (isGtagAvailable()) {
      window.gtag('set', 'user_properties', properties);
    }

    if (isDataLayerAvailable()) {
      window.dataLayer.push({
        event: 'user_properties_set',
        user_properties: properties
      });
    }
  } catch (error) {
    console.error('Error setting user properties:', error);
  }
};

/**
 * Initialize analytics with user consent
 * @param {boolean} hasConsent - Whether user has given consent
 */
export const initializeAnalytics = (hasConsent) => {
  if (hasConsent && isGtagAvailable()) {
    window.gtag('consent', 'update', {
      analytics_storage: 'granted',
      ad_storage: 'granted'
    });
  }
};

/**
 * Revoke analytics consent
 */
export const revokeConsent = () => {
  if (isGtagAvailable()) {
    window.gtag('consent', 'update', {
      analytics_storage: 'denied',
      ad_storage: 'denied'
    });
  }
};
