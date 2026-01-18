/**
 * Site Configuration
 * Centralized configuration for site-wide settings
 */

// Base URL for the site - uses environment variable with fallback
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://diysolarconsultants.com';

// Site metadata
export const SITE_NAME = 'DIY Solar Consultants';
export const SITE_DESCRIPTION = 'Professional solar system design and permitting for DIY homeowners. Save 40-60% on installation costs.';

// Contact information
export const CONTACT = {
  phone: '(555) 123-4567',
  email: 'info@diysolarconsultants.com',
  address: {
    street: '123 Solar Way',
    city: 'Phoenix',
    state: 'AZ',
    zip: '85001',
    country: 'US',
  },
};

// Social media links (update these with actual social handles)
export const SOCIAL = {
  facebook: 'https://facebook.com/DIYSolarConsultants',
  twitter: 'https://twitter.com/DIYSolarConsult',
  instagram: 'https://instagram.com/DIYSolarConsultants',
  youtube: 'https://youtube.com/@DIYSolarConsultants',
  linkedin: 'https://linkedin.com/company/diy-solar-consultants',
};

// Helper function to generate absolute URLs
export function getAbsoluteUrl(path = '') {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${cleanPath}`;
}

// Helper function to generate OG image URL
export function getOgImageUrl(imageName) {
  return getAbsoluteUrl(`/images/${imageName}`);
}
