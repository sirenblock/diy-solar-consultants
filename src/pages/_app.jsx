import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import Analytics from '@/components/Analytics'
import GTM from '@/components/GTM'
import Clarity from '@/components/Clarity'
import CookieConsent from '@/components/CookieConsent'
import StickyCTABar from '@/components/StickyCTABar'
import FloatingActionButton from '@/components/FloatingActionButton'
import ExitIntentPopup from '@/components/ExitIntentPopup'
import LiveActivityFeed from '@/components/LiveActivityFeed'
import { PageTransition } from '@/components/animations'

// Configure Inter font with optimizations
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
  weight: ['400', '500', '600', '700'],
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>

      {/* Analytics Components */}
      <Analytics />
      <GTM />
      <Clarity />

      {/* Main App with Page Transitions */}
      <div className={inter.variable}>
        <PageTransition>
          <Component {...pageProps} />
        </PageTransition>
      </div>

      {/* Cookie Consent Banner */}
      <CookieConsent />

      {/* Conversion-Focused Components */}
      <StickyCTABar />
      <FloatingActionButton />
      <ExitIntentPopup />
      <LiveActivityFeed />
    </>
  )
}
