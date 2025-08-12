import '../styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }){
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>SnailTrail — Niacinamide 10% + Snail Mucin 5%</title>
        <meta name="description" content="SnailTrail combines science and nature. Niacinamide 10%, Snail Mucin 5% and Zinc PCA 1% — targeted repair, hydration and glow." />
        <meta property="og:title" content="SnailTrail — Niacinamide 10% + Snail Mucin 5%" />
        <meta property="og:description" content="Advanced Repair Serum — science-backed skincare." />
        <meta property="og:image" content="/og-image.jpg" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
