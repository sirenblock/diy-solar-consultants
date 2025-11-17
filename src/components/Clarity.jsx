import Script from 'next/script';

/**
 * Microsoft Clarity Component
 * Provides heatmaps, session recordings, and user behavior insights
 * Free alternative to Hotjar with no session limits
 */
export default function Clarity() {
  const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID;

  // Don't render if no Clarity ID is provided
  if (!CLARITY_ID) {
    console.warn('Clarity ID not found. Set NEXT_PUBLIC_CLARITY_ID in .env.local if using Microsoft Clarity');
    return null;
  }

  return (
    <Script
      id="microsoft-clarity"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${CLARITY_ID}");
        `,
      }}
    />
  );
}
