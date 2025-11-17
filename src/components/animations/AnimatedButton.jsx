import { motion } from 'framer-motion';
import Link from 'next/link';
import { useReducedMotion } from './useReducedMotion';

/**
 * AnimatedButton Component - Button with micro-interactions
 * @param {object} props
 * @param {React.ReactNode} props.children - Button content
 * @param {function} props.onClick - Click handler
 * @param {string} props.variant - Button style variant: 'primary', 'secondary', 'outline'
 * @param {string} props.size - Button size: 'sm', 'md', 'lg'
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.type - Button type (default: 'button')
 */
export function AnimatedButton({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  disabled = false,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();

  const baseClasses = 'font-bold rounded-lg transition-all inline-flex items-center justify-center';

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const variantClasses = {
    primary: 'bg-gradient-to-r from-solar-600 to-energy-600 text-white shadow-md hover:shadow-lg',
    secondary: 'bg-gray-800 text-white hover:bg-gray-900',
    outline: 'border-2 border-gray-300 text-gray-800 hover:border-solar-600 hover:text-solar-600'
  };

  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className} ${
    disabled ? 'opacity-50 cursor-not-allowed' : ''
  }`;

  if (shouldReduceMotion) {
    return (
      <button
        type={type}
        onClick={onClick}
        className={buttonClasses}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={disabled ? {} : { scale: 1.02, y: -2 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      className={buttonClasses}
      disabled={disabled}
      {...props}
    >
      {children}
    </motion.button>
  );
}

/**
 * AnimatedLink Component - Next.js Link with micro-interactions
 * @param {object} props
 * @param {React.ReactNode} props.children - Link content
 * @param {string} props.href - Link destination
 * @param {string} props.variant - Link style variant
 * @param {string} props.className - Additional CSS classes
 */
export function AnimatedLink({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();

  const baseClasses = 'font-bold rounded-lg transition-all inline-flex items-center justify-center';

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const variantClasses = {
    primary: 'bg-gradient-to-r from-solar-600 to-energy-600 text-white shadow-md hover:shadow-lg',
    secondary: 'bg-gray-800 text-white hover:bg-gray-900',
    outline: 'border-2 border-gray-300 text-gray-800 hover:border-solar-600 hover:text-solar-600'
  };

  const linkClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (shouldReduceMotion) {
    return (
      <Link href={href} className={linkClasses} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <Link href={href} {...props}>
      <motion.span
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        className={linkClasses}
      >
        {children}
      </motion.span>
    </Link>
  );
}

/**
 * AnimatedIconButton Component - Icon button with micro-interactions
 */
export function AnimatedIconButton({
  children,
  onClick,
  className = '',
  ariaLabel,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <button
        onClick={onClick}
        className={`p-2 rounded-full transition-colors ${className}`}
        aria-label={ariaLabel}
        {...props}
      >
        {children}
      </button>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      className={`p-2 rounded-full transition-colors ${className}`}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </motion.button>
  );
}
