import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function UrgencyBanner({
  type = 'limited-spots',
  customMessage = null,
  link = '/design-request'
}) {
  const [spotsLeft, setSpotsLeft] = useState(7)
  const [quotesThisWeek, setQuotesThisWeek] = useState(0)
  const [daysLeft, setDaysLeft] = useState(0)

  useEffect(() => {
    // Generate realistic dynamic numbers
    setSpotsLeft(Math.floor(Math.random() * 5) + 5) // 5-9 spots
    setQuotesThisWeek(Math.floor(Math.random() * 20) + 30) // 30-49 quotes

    // Calculate days until end of month
    const today = new Date()
    const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0)
    const days = Math.ceil((lastDay - today) / (1000 * 60 * 60 * 24))
    setDaysLeft(days)
  }, [])

  const bannerTypes = {
    'limited-spots': {
      bg: 'bg-gradient-to-r from-red-500 to-orange-500',
      text: (
        <>
          ⚡ <strong>Limited Time:</strong> Only {spotsLeft} design slots available this month!
          <Link href={link} className="underline ml-2 hover:text-white font-semibold">
            Reserve Your Spot →
          </Link>
        </>
      )
    },
    'social-proof': {
      bg: 'bg-gradient-to-r from-blue-600 to-indigo-600',
      text: (
        <>
          🔥 <strong>{quotesThisWeek} homeowners</strong> requested quotes this week
          <Link href={link} className="underline ml-2 hover:text-white font-semibold">
            Join Them →
          </Link>
        </>
      )
    },
    'countdown': {
      bg: 'bg-gradient-to-r from-purple-600 to-pink-600',
      text: (
        <>
          ⏰ <strong>Special offer expires in {daysLeft} days</strong>
          <Link href={link} className="underline ml-2 hover:text-white font-semibold">
            Claim Now →
          </Link>
        </>
      )
    },
    'scarcity': {
      bg: 'bg-gradient-to-r from-orange-500 to-red-600',
      text: (
        <>
          🚨 <strong>Only {spotsLeft} consultation slots left this month</strong> - Don't miss out!
          <Link href={link} className="underline ml-2 hover:text-white font-semibold">
            Book Now →
          </Link>
        </>
      )
    },
    'custom': {
      bg: 'bg-gradient-to-r from-solar-600 to-energy-600',
      text: customMessage
    }
  }

  const selectedBanner = bannerTypes[type] || bannerTypes['limited-spots']

  return (
    <div
      className={`${selectedBanner.bg} text-white py-3 px-4 text-center relative overflow-hidden`}
      role="alert"
      aria-live="polite"
    >
      {/* Animated background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>

      <div className="relative z-10">
        <p className="font-bold text-sm sm:text-base">
          {selectedBanner.text}
        </p>
      </div>
    </div>
  )
}
