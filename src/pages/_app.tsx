import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { GoogleAnalytics } from "nextjs-google-analytics"

import '@fontsource/roboto-slab/400.css'
import '@fontsource/roboto-slab/600.css'
import '@fontsource/open-sans/600.css'

import theme from '../styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <GoogleAnalytics trackPageViews />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App