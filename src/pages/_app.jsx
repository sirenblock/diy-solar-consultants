import '@/styles/globals.css'
import Analytics from '@/components/Analytics'
import GTM from '@/components/GTM'
import Clarity from '@/components/Clarity'
import CookieConsent from '@/components/CookieConsent'
import StickyCTABar from '@/components/StickyCTABar'
import FloatingActionButton from '@/components/FloatingActionButton'
import ExitIntentPopup from '@/components/ExitIntentPopup'
import LiveActivityFeed from '@/components/LiveActivityFeed'

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* Analytics Components */}
      <Analytics />
      <GTM />
      <Clarity />

      {/* Main App */}
      <Component {...pageProps} />

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
