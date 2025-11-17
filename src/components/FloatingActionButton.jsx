import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Phone, MessageCircle, FileText, X } from 'lucide-react'

export default function FloatingActionButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
    // Show on mobile devices after scrolling 300px
    const checkVisibility = () => {
      const isMobile = window.innerWidth < 768
      const hasScrolled = window.scrollY > 300
      setIsVisible(isMobile && hasScrolled)
    }

    checkVisibility()
    window.addEventListener('resize', checkVisibility)
    window.addEventListener('scroll', checkVisibility)

    return () => {
      window.removeEventListener('resize', checkVisibility)
      window.removeEventListener('scroll', checkVisibility)
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40">
        {/* Quick Action Menu */}
        {showMenu && (
          <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-2xl mb-2 overflow-hidden animate-scale-in min-w-[200px]">
            <a
              href="tel:+18885551234"
              className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-100 min-h-[56px]"
              onClick={() => setShowMenu(false)}
              aria-label="Call now at (888) 555-1234"
            >
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">Call Now</p>
                <p className="text-xs text-gray-600">Talk to expert</p>
              </div>
            </a>

            <a
              href="sms:+18885551234"
              className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-100 min-h-[56px]"
              onClick={() => setShowMenu(false)}
              aria-label="Send text message to (888) 555-1234"
            >
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">Text Us</p>
                <p className="text-xs text-gray-600">Quick response</p>
              </div>
            </a>

            <Link
              href="/design-request"
              className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors min-h-[56px]"
              onClick={() => setShowMenu(false)}
              aria-label="Get free solar quote"
            >
              <div className="w-10 h-10 bg-solar-100 rounded-full flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-solar-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">Get Quote</p>
                <p className="text-xs text-gray-600">Free design</p>
              </div>
            </Link>
          </div>
        )}

        {/* Main FAB - 56x56px for easy touch target */}
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="w-14 h-14 min-w-[56px] min-h-[56px] bg-gradient-to-br from-solar-600 to-energy-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center animate-pulse-slow"
          aria-label="Contact options"
          aria-expanded={showMenu}
        >
          {showMenu ? (
            <X className="w-6 h-6" />
          ) : (
            <Phone className="w-6 h-6" />
          )}
        </button>

        {/* Notification badge */}
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-bold">!</span>
        </div>
      </div>

      {/* Backdrop overlay when menu is open */}
      {showMenu && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => setShowMenu(false)}
          aria-hidden="true"
        />
      )}
    </>
  )
}
