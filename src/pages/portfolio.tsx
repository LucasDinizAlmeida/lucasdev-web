import Head from "next/head"
import { Footer } from "../components/Footer"
import { Menu } from "../components/Menu"
import { useMenuContext } from "../context/MenuContext"


export default function Portfolio() {

  const { isOpenMenu } = useMenuContext()

  return (
    <>
      <Head>
        <title>Portfólio | LucasDev</title>
      </Head>
      {
        isOpenMenu ?
          <Menu />
          :
          <>
            <h1 className='text-red-500'>Portfólio</h1>

          </>
      }
    </>
  )
}