import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { trackPageView } from '@/utils/analytics';

/**
 * Google Analytics 4 Component
 * Handles GA4 initialization and automatic page view tracking
 */
export default function Analytics() {
  const router = useRouter();
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  // Track page views on route change
  useEffect(() => {
    const handleRouteChange = (url) => {
      trackPageView(url, document.title);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  // Don't render if no measurement ID is provided
  if (!GA_MEASUREMENT_ID) {
    console.warn('GA4 Measurement ID not found. Set NEXT_PUBLIC_GA_MEASUREMENT_ID in .env.local');
    return null;
  }

  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}

            // Set default consent to denied (GDPR compliance)
            gtag('consent', 'default', {
              'analytics_storage': 'denied',
              'ad_storage': 'denied',
              'wait_for_update': 500
            });

            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              anonymize_ip: true,
              cookie_flags: 'SameSite=None;Secure'
            });
          `,
        }}
      />
    </>
  );
}
