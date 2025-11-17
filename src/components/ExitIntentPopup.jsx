import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    // Check if popup was already shown this session
    const hasSeenPopup = sessionStorage.getItem('exitPopupShown')
    if (hasSeenPopup) return

    let exitIntentTriggered = false

    // Desktop: Exit intent detection
    const handleMouseLeave = (e) => {
      if (
        !exitIntentTriggered &&
        e.clientY <= 0 &&
        e.relatedTarget === null &&
        !isVisible
      ) {
        exitIntentTriggered = true
        setIsVisible(true)
        sessionStorage.setItem('exitPopupShown', 'true')
      }
    }

    // Mobile: Scroll-based trigger (80% down page)
    const handleScroll = () => {
      if (exitIntentTriggered) return

      const scrollPercentage =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100

      if (scrollPercentage > 80) {
        exitIntentTriggered = true
        setIsVisible(true)
        sessionStorage.setItem('exitPopupShown', 'true')
      }
    }

    // Detect device type
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

    if (isMobile) {
      window.addEventListener('scroll', handleScroll)
    } else {
      document.addEventListener('mouseleave', handleMouseLeave)
    }

    return () => {
      if (isMobile) {
        window.removeEventListener('scroll', handleScroll)
      } else {
        document.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [isVisible])

  const handleClose = () => {
    setIsVisible(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitted(true)
    setIsSubmitting(false)

    // Auto-close after 3 seconds
    setTimeout(() => {
      handleClose()
    }, 3000)
  }

  if (!isVisible) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-50 animate-fade-in"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Popup */}
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
        role="dialog"
        aria-modal="true"
        aria-labelledby="popup-title"
      >
        <div
          className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 sm:p-8 pointer-events-auto animate-scale-in relative"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close popup"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {!isSubmitted ? (
            <>
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-solar-500 to-energy-500 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <h2
                id="popup-title"
                className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-3"
              >
                Wait! Don't Leave Yet
              </h2>
              <p className="text-gray-600 text-center mb-6">
                Get our <strong className="text-solar-600">FREE Solar ROI Calculator</strong> and discover how much you could save with DIY solar installation.
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-solar-600 focus:outline-none focus:ring-2 focus:ring-solar-200 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Get Free Calculator →'}
                </button>
              </form>

              {/* Trust signals */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-600">
                  <div className="flex items-center">
                    <svg
                      className="w-4 h-4 text-green-500 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    No spam ever
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="w-4 h-4 text-green-500 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Unsubscribe anytime
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="w-4 h-4 text-green-500 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    100% Free
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Success state */}
              <div className="text-center py-8">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Check Your Email!
                </h3>
                <p className="text-gray-600">
                  We've sent the Solar ROI Calculator to <strong>{email}</strong>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}
