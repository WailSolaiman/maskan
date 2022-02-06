import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'
import { ChakraProvider } from '@chakra-ui/react'

import Layout from '../components/Layout'
import '../styles/nprogress.css'

function MyApp({ Component, pageProps }) {
  NProgress.configure({ showSpinner: false })

  Router.events.on('routeChangeStart', () => {
    NProgress.start()
  })

  Router.events.on('routeChangeComplete', () => {
    NProgress.done()
  })

  return (
    <>
      <Head>
        <title>Maskan - Real Estate</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  )
}

export default MyApp
