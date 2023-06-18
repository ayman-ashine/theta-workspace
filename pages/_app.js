import Head from 'next/head'
import '@/styles/globals.css'
import '@/styles/buttons.css'
import '@/styles/colors.css'
import '@/styles/containers.css'
import '@/styles/effects.css'
import '@/styles/font.css'
import '@/styles/icons.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Theta Workspace</title>
        <link rel='shortcut icon' href='https://img.icons8.com/fluency/200/sticky-notes.png' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
