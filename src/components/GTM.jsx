import Script from 'next/script';

/**
 * Google Tag Manager Component
 * Handles GTM container initialization
 * Use this if you prefer managing all tags through GTM instead of direct GA4
 */
export default function GTM() {
  const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

  // Don't render if no GTM ID is provided
  if (!GTM_ID) {
    console.warn('GTM ID not found. Set NEXT_PUBLIC_GTM_ID in .env.local if using Google Tag Manager');
    return null;
  }

  return (
    <>
      {/* Google Tag Manager - Head Script */}
      <Script
        id="google-tag-manager"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `,
        }}
      />

      {/* Google Tag Manager - NoScript Fallback */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
          title="Google Tag Manager"
        />
      </noscript>
    </>
  );
}
