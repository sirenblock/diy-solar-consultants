import { trackPhoneClick, trackConversion } from '@/utils/analytics';

/**
 * Phone Link Component with Analytics Tracking
 * Tracks when users click phone numbers (high-intent action)
 */
export default function TrackedPhoneLink({
  phoneNumber = '(555) 123-4567',
  location = 'unknown',
  className = '',
  children,
  trackAsConversion = true,
  conversionValue = 250
}) {
  const handleClick = () => {
    // Track phone click event
    trackPhoneClick(phoneNumber, location);

    // Track as conversion (optional)
    if (trackAsConversion) {
      trackConversion('phone_click', conversionValue, {
        phone_number: phoneNumber,
        click_location: location
      });
    }
  };

  // Format phone number for tel: link (remove formatting)
  const telNumber = phoneNumber.replace(/\D/g, '');

  return (
    <a
      href={`tel:+1${telNumber}`}
      onClick={handleClick}
      className={className}
      aria-label={`Call ${phoneNumber}`}
    >
      {children || phoneNumber}
    </a>
  );
}
