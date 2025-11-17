import { motion } from 'framer-motion';

/**
 * LoadingSpinner Component - Animated loading spinner
 * @param {object} props
 * @param {string} props.size - Size: 'sm', 'md', 'lg' (default: 'md')
 * @param {string} props.color - Color class (default: 'text-green-600')
 */
export function LoadingSpinner({
  size = 'md',
  color = 'text-green-600',
  className = ''
}) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <motion.div
        className={`${sizeClasses[size]} ${color}`}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: 'linear'
        }}
      >
        <svg
          className="w-full h-full"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      </motion.div>
    </div>
  );
}

/**
 * LoadingDots Component - Three dots loading animation
 */
export function LoadingDots({ color = 'bg-green-600' }) {
  const dotVariants = {
    initial: { y: 0 },
    animate: {
      y: [-8, 0, -8],
      transition: {
        duration: 0.6,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  };

  return (
    <div className="flex items-center justify-center space-x-2">
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className={`w-2 h-2 rounded-full ${color}`}
          variants={dotVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: index * 0.15 }}
        />
      ))}
    </div>
  );
}

/**
 * LoadingPulse Component - Pulsing loading animation
 */
export function LoadingPulse({ color = 'bg-green-600', className = '' }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <motion.div
        className={`w-16 h-16 rounded-full ${color}`}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [1, 0.5, 1]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
    </div>
  );
}
