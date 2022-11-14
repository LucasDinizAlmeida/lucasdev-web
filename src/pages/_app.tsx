import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { MenuContextProvider, useMenuContext } from '../context/MenuContext'

export default function App({ Component, pageProps }: AppProps) {

  // const { isOpenMenu } = useMenuContext()

  return (
    <MenuContextProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </MenuContextProvider>
  )
}
