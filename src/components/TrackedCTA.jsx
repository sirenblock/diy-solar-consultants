import Button from './Button';

/**
 * CTA Button/Link Component with Analytics Tracking
 *
 * This is a wrapper around the Button component that maintains
 * backward compatibility with the old TrackedCTA API.
 *
 * Note: The Button component now includes analytics tracking,
 * so this wrapper primarily exists for legacy support.
 */
export default function TrackedCTA({
  href,
  children,
  location = 'unknown',
  className = '',
  variant = 'primary',
  external = false,
  onClick,
  size = 'lg',
  ...props
}) {
  // Map old variant names to new ones if needed
  const variantMap = {
    primary: 'primary',
    secondary: 'secondary',
    outline: 'ghost', // Map outline to ghost variant
  };

  const mappedVariant = variantMap[variant] || variant;

  return (
    <Button
      href={href}
      variant={mappedVariant}
      size={size}
      className={className}
      external={external}
      location={location}
      onClick={onClick}
      {...props}
    >
      {children}
    </Button>
  );
}
