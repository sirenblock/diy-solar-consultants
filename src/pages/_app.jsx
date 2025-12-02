import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import dynamic from 'next/dynamic'
import Analytics from '@/components/Analytics'
import GTM from '@/components/GTM'
import Clarity from '@/components/Clarity'
import { PageTransition } from '@/components/animations'
import { ToastProvider } from '@/components/Toast'

// Lazy load non-critical components for better performance
// These components are below-the-fold or triggered by user interaction
const CookieConsent = dynamic(() => import('@/components/CookieConsent'), {
  ssr: false, // Client-side only
})

const StickyCTABar = dynamic(() => import('@/components/StickyCTABar'), {
  ssr: false, // Below-the-fold component
})

const FloatingActionButton = dynamic(() => import('@/components/FloatingActionButton'), {
  ssr: false, // Below-the-fold component
})

const ExitIntentPopup = dynamic(() => import('@/components/ExitIntentPopup').then(mod => mod.ExitIntentPopup), {
  ssr: false, // Only triggered on exit intent
})

const LiveActivityFeed = dynamic(() => import('@/components/LiveActivityFeed'), {
  ssr: false, // Below-the-fold component
})

// Mobile-optimized conversion components
const MobileStickyCTA = dynamic(() => import('@/components/MobileStickyCTA'), {
  ssr: false, // Mobile-only, below-the-fold
})

const MobileFloatingAction = dynamic(() => import('@/components/MobileFloatingAction'), {
  ssr: false, // Mobile-only, below-the-fold
})

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
    <ToastProvider>
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

      {/* Mobile-Optimized Conversion Components */}
      <MobileStickyCTA />
      <MobileFloatingAction />
    </ToastProvider>
  )
}
