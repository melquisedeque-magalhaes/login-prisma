import { ChakraProvider } from '@chakra-ui/react'
import { SessionProvider } from "next-auth/react"
import { AppProps } from 'next/app'
 
function MyApp({ 
  Component, 
  pageProps: {
    session,
    ...pageProps
  } 
}: AppProps) {
  return (
    <ChakraProvider>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </ChakraProvider>
  )
}

export default MyApp
