import Head from 'next/head'
import '@/styles/globals.css'
import '@/styles/display.css'
import '@/styles/btn.css'
import '@/styles/color.css'
import '@/styles/pmg.css'
import '@/styles/effect.css'
import '@/styles/text.css'
import '@/styles/icon.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Theta Workspace</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
        <link rel='shortcut icon' href='https://img.icons8.com/fluency/200/sticky-notes.png' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
