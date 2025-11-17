import { motion } from 'framer-motion';
import { useReducedMotion } from './useReducedMotion';

/**
 * FadeIn Component - Fades in content on scroll
 * @param {object} props
 * @param {React.ReactNode} props.children - Content to animate
 * @param {number} props.delay - Animation delay in seconds (default: 0)
 * @param {number} props.duration - Animation duration in seconds (default: 0.5)
 * @param {number} props.y - Y offset for slide animation (default: 20)
 * @param {string} props.className - Additional CSS classes
 */
export function FadeIn({
  children,
  delay = 0,
  duration = 0.5,
  y = 20,
  className = ''
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1] // Custom easing for smooth animation
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * FadeInScale Component - Fades in with scale effect
 */
export function FadeInScale({
  children,
  delay = 0,
  duration = 0.5,
  className = ''
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
