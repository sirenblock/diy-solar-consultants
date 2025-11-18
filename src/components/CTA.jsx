import Button from './Button';
import { ArrowRight, Calculator, Phone, Mail, ChevronRight } from 'lucide-react';

/**
 * Strategic CTA Component System
 *
 * Provides a hierarchy of Call-to-Action buttons optimized for conversion:
 * - Primary CTA: Main conversion goal (Get Free Design)
 * - Secondary CTA: Low-friction entry point (Calculate Savings)
 * - Tertiary CTA: Nurture leads (Learn More, View Portfolio)
 *
 * Design Philosophy:
 * - Clear visual hierarchy
 * - Action-oriented copy
 * - Consistent placement every 300-500px of scrolling
 * - Mobile-first responsive design
 */

/**
 * Primary CTA Button
 *
 * The main conversion driver. Use for:
 * - "Get Free Design"
 * - "Get Free Quote"
 * - "Start Your Solar Journey"
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Button text (should be action-oriented)
 * @param {string} props.href - Destination URL (defaults to /design-request)
 * @param {Function} props.onClick - Optional click handler
 * @param {React.ReactNode} props.icon - Icon component (defaults to ArrowRight)
 * @param {string} props.location - Analytics location identifier
 * @param {string} props.size - Button size (sm, md, lg)
 */
export function PrimaryCTA({
  children = 'Get Free Design',
  href = '/design-request',
  onClick,
  icon: Icon = ArrowRight,
  location = 'primary-cta',
  size = 'lg',
  className = '',
  ...props
}) {
  return (
    <Button
      href={href}
      onClick={onClick}
      variant="primary"
      size={size}
      location={location}
      rightIcon={<Icon className="w-5 h-5" />}
      className={`font-semibold ${className}`}
      {...props}
    >
      {children}
    </Button>
  );
}

/**
 * Secondary CTA Button
 *
 * Low-friction entry point. Use for:
 * - "Calculate My Savings"
 * - "See Pricing"
 * - "View Examples"
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Button text
 * @param {string} props.href - Destination URL (defaults to /calculator)
 * @param {Function} props.onClick - Optional click handler
 * @param {React.ReactNode} props.icon - Icon component (defaults to Calculator)
 * @param {string} props.location - Analytics location identifier
 * @param {string} props.size - Button size (sm, md, lg)
 */
export function SecondaryCTA({
  children = 'Calculate Savings',
  href = '/calculator',
  onClick,
  icon: Icon = Calculator,
  location = 'secondary-cta',
  size = 'lg',
  className = '',
  ...props
}) {
  return (
    <Button
      href={href}
      onClick={onClick}
      variant="secondary"
      size={size}
      location={location}
      rightIcon={<Icon className="w-5 h-5" />}
      className={`font-semibold ${className}`}
      {...props}
    >
      {children}
    </Button>
  );
}

/**
 * Tertiary CTA Link
 *
 * Subtle, text-based links for nurturing. Use for:
 * - "Learn More"
 * - "View Portfolio"
 * - "Read Case Study"
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Link text
 * @param {string} props.href - Destination URL
 * @param {React.ReactNode} props.icon - Icon component (defaults to ChevronRight)
 * @param {string} props.className - Additional CSS classes
 */
export function TertiaryCTA({
  children,
  href,
  icon: Icon = ChevronRight,
  className = '',
  ...props
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-1 text-solar-600 hover:text-solar-700 font-medium underline underline-offset-4 decoration-2 hover:decoration-solar-700 transition-all ${className}`}
      {...props}
    >
      {children}
      {Icon && <Icon className="w-4 h-4" />}
    </a>
  );
}

/**
 * CTA Group Component
 *
 * Groups CTAs together with proper spacing and responsive layout
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - CTA buttons/links
 * @param {string} props.alignment - left, center, right (default: center)
 * @param {string} props.orientation - horizontal, vertical (default: horizontal)
 */
export function CTAGroup({
  children,
  alignment = 'center',
  orientation = 'horizontal',
  className = ''
}) {
  const alignmentClasses = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end'
  };

  const orientationClasses = orientation === 'horizontal'
    ? 'flex-col sm:flex-row'
    : 'flex-col';

  return (
    <div className={`flex ${orientationClasses} gap-3 sm:gap-4 ${alignmentClasses[alignment]} ${className}`}>
      {children}
    </div>
  );
}

/**
 * Phone CTA Button
 *
 * Specialized CTA for phone calls
 *
 * @param {Object} props
 * @param {string} props.phoneNumber - Phone number to call
 * @param {string} props.children - Button text (default: "Call Now")
 * @param {string} props.variant - primary or secondary (default: secondary)
 */
export function PhoneCTA({
  phoneNumber = '+18885551234',
  children = 'Call Now',
  variant = 'secondary',
  size = 'lg',
  location = 'phone-cta',
  className = '',
  ...props
}) {
  return (
    <Button
      href={`tel:${phoneNumber}`}
      variant={variant}
      size={size}
      location={location}
      external
      leftIcon={<Phone className="w-5 h-5" />}
      className={`font-semibold ${className}`}
      {...props}
    >
      {children}
    </Button>
  );
}

/**
 * In-Content CTA Block
 *
 * Full-width CTA block for placement within content sections
 * Follows the 300-500px scroll rule
 *
 * @param {Object} props
 * @param {string} props.variant - default, highlighted, subtle, urgent
 * @param {string} props.title - CTA headline
 * @param {string} props.description - Supporting text
 * @param {React.ReactNode} props.primaryCTA - Primary CTA button element
 * @param {React.ReactNode} props.secondaryCTA - Optional secondary CTA button element
 * @param {boolean} props.showTrustSignals - Show trust badges (default: true)
 */
export function InContentCTA({
  variant = 'default',
  title = 'Ready to Get Started?',
  description = 'Get your custom solar design from licensed PE engineers',
  primaryCTA,
  secondaryCTA,
  showTrustSignals = true,
  className = ''
}) {
  const variants = {
    default: {
      bg: 'bg-gradient-to-br from-solar-50 to-energy-50',
      border: 'border-2 border-solar-200',
      titleColor: 'text-gray-900',
      descColor: 'text-gray-700'
    },
    highlighted: {
      bg: 'bg-gradient-to-br from-solar-600 to-energy-600',
      border: 'border-0',
      titleColor: 'text-white',
      descColor: 'text-white/90'
    },
    subtle: {
      bg: 'bg-gray-50',
      border: 'border border-gray-200',
      titleColor: 'text-gray-900',
      descColor: 'text-gray-600'
    },
    urgent: {
      bg: 'bg-gradient-to-r from-orange-500 to-red-500',
      border: 'border-0',
      titleColor: 'text-white',
      descColor: 'text-white/90'
    }
  };

  const selectedVariant = variants[variant] || variants.default;

  const trustSignals = [
    { icon: '✓', text: 'Free consultation' },
    { icon: '✓', text: 'No obligation' },
    { icon: '✓', text: '5-7 day turnaround' }
  ];

  return (
    <div
      className={`${selectedVariant.bg} ${selectedVariant.border} rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow my-8 ${className}`}
    >
      <div className="text-center max-w-2xl mx-auto">
        {/* Title */}
        <h3 className={`${selectedVariant.titleColor} text-2xl sm:text-3xl font-bold mb-3`}>
          {title}
        </h3>

        {/* Description */}
        <p className={`${selectedVariant.descColor} text-base sm:text-lg mb-6`}>
          {description}
        </p>

        {/* CTAs */}
        <CTAGroup className="mb-4">
          {primaryCTA || <PrimaryCTA location="in-content-cta" />}
          {secondaryCTA}
        </CTAGroup>

        {/* Trust Signals */}
        {showTrustSignals && (
          <div
            className={`flex flex-wrap justify-center gap-4 text-sm ${
              variant === 'highlighted' || variant === 'urgent'
                ? 'text-white/80'
                : 'text-gray-600'
            }`}
          >
            {trustSignals.map((signal, index) => (
              <div key={index} className="flex items-center gap-1">
                <span
                  className={`${
                    variant === 'highlighted' || variant === 'urgent'
                      ? 'text-white'
                      : 'text-green-600'
                  } font-bold`}
                >
                  {signal.icon}
                </span>
                <span>{signal.text}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * End of Page CTA Section
 *
 * Large, prominent CTA section for the end of each page
 *
 * @param {Object} props
 * @param {string} props.title - Main headline
 * @param {string} props.description - Supporting text
 * @param {React.ReactNode} props.primaryCTA - Primary CTA button element
 * @param {React.ReactNode} props.secondaryCTA - Optional secondary CTA button element
 * @param {boolean} props.showTrustSignals - Show trust badges (default: true)
 */
export function EndOfPageCTA({
  title = 'Ready to Start Saving?',
  description = 'Join 10,000+ homeowners who\'ve gone solar with our expert guidance',
  primaryCTA,
  secondaryCTA,
  showTrustSignals = true,
  className = ''
}) {
  const trustSignals = [
    'Free consultation',
    'No obligation',
    '5-7 day turnaround'
  ];

  return (
    <section className={`bg-gradient-to-br from-solar-600 to-energy-600 text-white py-16 sm:py-20 ${className}`}>
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-lg sm:text-xl mb-8 text-white/90">
          {description}
        </p>

        <CTAGroup className="mb-6">
          {primaryCTA || (
            <Button
              href="/design-request"
              variant="primary"
              size="lg"
              location="end-of-page-cta"
              className="bg-white text-solar-600 hover:bg-gray-50 font-bold shadow-xl"
              rightIcon={<ArrowRight className="w-5 h-5" />}
            >
              Get Free Design
            </Button>
          )}
          {secondaryCTA || (
            <PhoneCTA
              variant="secondary"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10"
            />
          )}
        </CTAGroup>

        {showTrustSignals && (
          <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-solar-100">
            {trustSignals.map((signal, index) => (
              <div key={index} className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                {signal}
                {index < trustSignals.length - 1 && (
                  <span className="text-solar-300 ml-4">•</span>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

// Export all components as named exports
export default {
  PrimaryCTA,
  SecondaryCTA,
  TertiaryCTA,
  CTAGroup,
  PhoneCTA,
  InContentCTA,
  EndOfPageCTA
};
