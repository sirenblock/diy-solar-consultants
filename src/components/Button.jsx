import Link from 'next/link';
import { trackCTAClick } from '@/utils/analytics';
import { Loader2 } from 'lucide-react';

/**
 * Modern Button Component
 *
 * A comprehensive button system with multiple variants, sizes, and states.
 * Includes analytics tracking and accessibility features.
 *
 * @param {Object} props
 * @param {'primary'|'secondary'|'ghost'|'icon'} props.variant - Button style variant
 * @param {'sm'|'md'|'lg'} props.size - Button size
 * @param {React.ReactNode} props.children - Button content
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.href - Link destination (optional)
 * @param {boolean} props.external - Whether link is external
 * @param {boolean} props.loading - Loading state
 * @param {boolean} props.disabled - Disabled state
 * @param {string} props.location - Analytics location identifier
 * @param {Function} props.onClick - Click handler
 * @param {'square'|'circle'} props.iconShape - Shape for icon variant (optional)
 * @param {React.ReactNode} props.leftIcon - Icon to display before text
 * @param {React.ReactNode} props.rightIcon - Icon to display after text
 */
export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  href,
  external = false,
  loading = false,
  disabled = false,
  location = 'unknown',
  onClick,
  iconShape,
  leftIcon,
  rightIcon,
  ...props
}) {
  // Handle click with analytics tracking
  const handleClick = (e) => {
    if (disabled || loading) {
      e.preventDefault();
      return;
    }

    // Track CTA click
    if (href) {
      trackCTAClick(
        typeof children === 'string' ? children : 'Button',
        location,
        href
      );
    }

    // Call custom onClick if provided
    if (onClick) {
      onClick(e);
    }
  };

  // Base styles
  const baseStyles = 'font-medium rounded-lg transition-all duration-200 inline-flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2';

  // Variant styles
  const variants = {
    primary: disabled
      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
      : 'bg-gradient-to-r from-solar-600 to-energy-600 text-white shadow-lg shadow-solar-600/30 hover:shadow-solar-600/50 hover:-translate-y-0.5 focus:ring-solar-500',
    secondary: disabled
      ? 'bg-gray-100 border-2 border-gray-300 text-gray-400 cursor-not-allowed'
      : 'bg-white border-2 border-gray-300 text-gray-800 hover:border-solar-600 hover:text-solar-600 hover:shadow-md focus:ring-solar-500',
    ghost: disabled
      ? 'bg-transparent text-gray-400 cursor-not-allowed'
      : 'bg-transparent text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:ring-gray-500',
    icon: disabled
      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
      : iconShape === 'circle'
        ? 'bg-white text-gray-700 hover:bg-solar-50 hover:text-solar-600 shadow-md hover:shadow-lg rounded-full focus:ring-solar-500'
        : 'bg-white text-gray-700 hover:bg-solar-50 hover:text-solar-600 shadow-md hover:shadow-lg focus:ring-solar-500',
  };

  // Size styles
  const sizes = {
    sm: variant === 'icon' ? 'p-2 text-sm' : 'py-2 px-4 text-sm',
    md: variant === 'icon' ? 'p-3 text-base' : 'py-3 px-6 text-base',
    lg: variant === 'icon' ? 'p-4 text-lg' : 'py-4 px-8 text-lg',
  };

  // Icon sizes
  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  // Combine all classes
  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  // Loading spinner
  const LoadingSpinner = () => (
    <Loader2 className={`animate-spin ${iconSizes[size]}`} />
  );

  // Button content
  const buttonContent = (
    <>
      {loading && <LoadingSpinner />}
      {!loading && leftIcon && <span className={iconSizes[size]}>{leftIcon}</span>}
      {children}
      {!loading && rightIcon && <span className={iconSizes[size]}>{rightIcon}</span>}
    </>
  );

  // If no href, render as button
  if (!href) {
    return (
      <button
        onClick={handleClick}
        disabled={disabled || loading}
        className={buttonClasses}
        aria-busy={loading}
        aria-disabled={disabled}
        {...props}
      >
        {buttonContent}
      </button>
    );
  }

  // External link
  if (external) {
    return (
      <a
        href={href}
        onClick={handleClick}
        className={buttonClasses}
        target="_blank"
        rel="noopener noreferrer"
        aria-busy={loading}
        aria-disabled={disabled || loading}
        {...props}
      >
        {buttonContent}
      </a>
    );
  }

  // Internal link
  return (
    <Link
      href={href}
      onClick={handleClick}
      className={buttonClasses}
      aria-busy={loading}
      aria-disabled={disabled || loading}
      {...props}
    >
      {buttonContent}
    </Link>
  );
}

/**
 * Icon Button Component
 * Specialized button for icon-only interactions
 */
export function IconButton({
  icon,
  shape = 'square',
  'aria-label': ariaLabel,
  ...props
}) {
  return (
    <Button
      variant="icon"
      iconShape={shape}
      aria-label={ariaLabel}
      {...props}
    >
      {icon}
    </Button>
  );
}

/**
 * Button Group Component
 * Groups multiple buttons together with proper spacing
 */
export function ButtonGroup({ children, className = '', orientation = 'horizontal' }) {
  const orientationClasses = orientation === 'horizontal'
    ? 'flex flex-wrap gap-3'
    : 'flex flex-col gap-3';

  return (
    <div className={`${orientationClasses} ${className}`}>
      {children}
    </div>
  );
}
