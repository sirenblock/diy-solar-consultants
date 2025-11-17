import { useEffect, useRef, useState } from 'react'

/**
 * Custom hook to detect when an element enters the viewport
 * Useful for lazy loading components and images
 *
 * @param {Object} options - IntersectionObserver options
 * @param {number} options.threshold - Percentage of element visibility (0-1)
 * @param {string} options.rootMargin - Margin around the root element
 * @param {boolean} options.triggerOnce - Whether to trigger only once (default: true)
 * @returns {Array} [ref, isVisible] - Ref to attach to element and visibility state
 *
 * @example
 * const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 })
 * return (
 *   <div ref={ref}>
 *     {isVisible ? <HeavyComponent /> : <Placeholder />}
 *   </div>
 * )
 */
export function useIntersectionObserver(options = {}) {
  const {
    threshold = 0.1,
    rootMargin = '50px',
    triggerOnce = true,
  } = options

  const elementRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    // Check if IntersectionObserver is supported
    if (typeof IntersectionObserver === 'undefined') {
      // Fallback for browsers that don't support IntersectionObserver
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Disconnect observer after first intersection if triggerOnce is true
          if (triggerOnce) {
            observer.disconnect()
          }
        } else if (!triggerOnce) {
          // Allow toggling visibility if not triggerOnce
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin,
      }
    )

    observer.observe(element)

    return () => {
      if (observer && element) {
        observer.unobserve(element)
      }
    }
  }, [threshold, rootMargin, triggerOnce])

  return [elementRef, isVisible]
}
