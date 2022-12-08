import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>CMTA Locations</title>
        <meta name="google-site-verification" content="p1EHZSHT0NEX5qMPpa7p9bwXpBrf16dO9IL7QFUtz5c" />
      </Head>

  <Component {...pageProps} />
    </>
  )
}

export default MyApp
