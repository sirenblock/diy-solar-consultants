import { motion } from 'framer-motion';
import { useReducedMotion } from './useReducedMotion';

/**
 * StaggerChildren Component - Animates children with stagger effect
 * @param {object} props
 * @param {React.ReactNode} props.children - Child elements to stagger
 * @param {number} props.staggerDelay - Delay between each child (default: 0.1)
 * @param {string} props.className - Additional CSS classes
 */
export function StaggerChildren({
  children,
  staggerDelay = 0.1,
  className = ''
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={containerVariants}
      className={className}
    >
      {Array.isArray(children) ? (
        children.map((child, index) => (
          <motion.div key={index} variants={itemVariants}>
            {child}
          </motion.div>
        ))
      ) : (
        <motion.div variants={itemVariants}>
          {children}
        </motion.div>
      )}
    </motion.div>
  );
}
