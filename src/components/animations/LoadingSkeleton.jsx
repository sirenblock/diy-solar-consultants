import { motion } from 'framer-motion';

/**
 * LoadingSkeleton Component - Skeleton loading screen
 * @param {object} props
 * @param {string} props.variant - Type: 'text', 'card', 'circle' (default: 'text')
 * @param {number} props.lines - Number of lines for text variant (default: 1)
 * @param {string} props.className - Additional CSS classes
 */
export function LoadingSkeleton({
  variant = 'text',
  lines = 1,
  className = ''
}) {
  const shimmer = {
    animate: {
      backgroundPosition: ['200% 0', '-200% 0'],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'linear'
      }
    }
  };

  const baseClass = 'bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer';

  if (variant === 'circle') {
    return (
      <motion.div
        className={`w-12 h-12 rounded-full ${baseClass} ${className}`}
        variants={shimmer}
        animate="animate"
      />
    );
  }

  if (variant === 'card') {
    return (
      <div className={`space-y-4 ${className}`}>
        <motion.div
          className={`h-48 rounded-lg ${baseClass}`}
          variants={shimmer}
          animate="animate"
        />
        <motion.div
          className={`h-4 rounded ${baseClass}`}
          variants={shimmer}
          animate="animate"
        />
        <motion.div
          className={`h-4 w-3/4 rounded ${baseClass}`}
          variants={shimmer}
          animate="animate"
        />
      </div>
    );
  }

  // Text variant
  return (
    <div className={`space-y-3 ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <motion.div
          key={index}
          className={`h-4 rounded ${baseClass} ${
            index === lines - 1 ? 'w-3/4' : 'w-full'
          }`}
          variants={shimmer}
          animate="animate"
        />
      ))}
    </div>
  );
}

/**
 * CardSkeleton Component - Pre-built card skeleton
 */
export function CardSkeleton({ count = 1, className = '' }) {
  return (
    <div className={`grid gap-6 ${className}`}>
      {Array.from({ length: count }).map((_, index) => (
        <LoadingSkeleton key={index} variant="card" />
      ))}
    </div>
  );
}
