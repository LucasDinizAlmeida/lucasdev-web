import Head from "next/head"
import { CardProject } from "../components/CardProject"
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
          <div className="py-5 mt-20 max-w-[1114px] px-4 mx-auto">
            <h1 className="block my-7 text-center font-semibold text-4xl leading-[54px] text-gray-400">
              Conheça um pouco do meu trabalho
            </h1>

            <div className="flex flex-row items-center justify-center gap-4 flex-wrap">
              <CardProject />
              <CardProject />
              <CardProject />
              <CardProject />
              <CardProject />
              <CardProject />
              <CardProject />
            </div>
          </div>
      }
    </>
  )
}