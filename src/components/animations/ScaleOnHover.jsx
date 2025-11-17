import { motion } from 'framer-motion';
import { useReducedMotion } from './useReducedMotion';

/**
 * ScaleOnHover Component - Scales element on hover
 * @param {object} props
 * @param {React.ReactNode} props.children - Content to animate
 * @param {number} props.scale - Scale amount (default: 1.05)
 * @param {string} props.className - Additional CSS classes
 */
export function ScaleOnHover({
  children,
  scale = 1.05,
  className = ''
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      whileHover={{ scale }}
      whileTap={{ scale: scale * 0.98 }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 17
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * LiftOnHover Component - Lifts element on hover with shadow
 */
export function LiftOnHover({
  children,
  className = ''
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      whileHover={{
        y: -8,
        transition: { duration: 0.2 }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * ButtonPress Component - Press effect for buttons
 */
export function ButtonPress({
  children,
  onClick,
  className = ''
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <button onClick={onClick} className={className}>
        {children}
      </button>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 17
      }}
      className={className}
    >
      {children}
    </motion.button>
  );
}
