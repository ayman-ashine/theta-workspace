import '@/styles/globals.css'
import '@/styles/class_prebuilt.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
    
      <Head>

        <title>Theta Workspace</title>
        <link rel='shortcut icon' href='/logo.png' />
        
      </Head>

      <Component {...pageProps} />

    </>
  )
}
