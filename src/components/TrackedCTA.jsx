import Link from 'next/link';
import { trackCTAClick } from '@/utils/analytics';

/**
 * CTA Button/Link Component with Analytics Tracking
 * Tracks when users click call-to-action buttons
 */
export default function TrackedCTA({
  href,
  children,
  location = 'unknown',
  className = '',
  variant = 'primary',
  external = false,
  onClick,
  ...props
}) {
  const handleClick = (e) => {
    // Track CTA click
    trackCTAClick(
      typeof children === 'string' ? children : 'CTA',
      location,
      href || '#'
    );

    // Call custom onClick if provided
    if (onClick) {
      onClick(e);
    }
  };

  // Base button classes
  const baseClasses = 'inline-block px-8 py-4 rounded-lg font-semibold transition-all duration-300';

  // Variant classes
  const variantClasses = {
    primary: 'bg-orange-500 text-white hover:bg-orange-600 hover:shadow-lg transform hover:-translate-y-0.5',
    secondary: 'bg-white text-orange-500 border-2 border-orange-500 hover:bg-orange-50',
    outline: 'bg-transparent text-white border-2 border-white hover:bg-white hover:text-orange-500'
  };

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  // If no href, render as button
  if (!href) {
    return (
      <button
        onClick={handleClick}
        className={buttonClasses}
        {...props}
      >
        {children}
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
        {...props}
      >
        {children}
      </a>
    );
  }

  // Internal link
  return (
    <Link
      href={href}
      onClick={handleClick}
      className={buttonClasses}
      {...props}
    >
      {children}
    </Link>
  );
}
