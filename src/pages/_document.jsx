import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="icon" href="/favicon.ico" />

        {/* DNS prefetch for analytics and other third-party services */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* Note: Fonts are optimized through next/font in _app.jsx - no need for font preloading here */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
