import classNames from 'classnames'
import Head from 'next/head'
import { ContentFullStack } from '../components/ContentFullStack'
import { CustomerComments } from '../components/CustomerComments'
import { Footer } from '../components/Footer'
import { Menu } from '../components/Menu'
import { MyWork } from '../components/MyWork'
import { useMenuContext } from '../context/MenuContext'


export default function Home() {

  const { isOpenMenu } = useMenuContext()

  return (
    <div>
      <Head>
        <title>Home | LucasDev</title>
      </Head>
      {
        isOpenMenu ?
          <Menu />
          :
          <div className='py-5 h-100vh mt-20'>
            <div className="flex flex-col lg:flex-row justify-between items-center mx-auto max-w-[1114px] px-4">
              <div className='flex flex-col items-center lg:items-start'>
                <h1 className='text-cyan-500 font-semibold text-3xl'>LUCAS DEV</h1>
                <h2 className='font-bold text-4xl lg:text-6xl my-6'>Full Stack Developer</h2>

                <button className='py-4 px-12 bg-cyan-500 hover:bg-cyan-600 transition-colors rounded-full text-gray-900 font-bold text-lg'>Saiba mais</button>
              </div>
              <img src="/dev-coding.webp" alt="codando" />


            </div>

            <ContentFullStack />

            <MyWork />

            <h2 className="block text-center mt-32 font-semibold text-5xl leading-[54px] text-gray-100">
              Leia o comentário dos clientes
            </h2>

            <div className='flex flex-row gap-6 items-center justify-center flex-wrap  mx-auto max-w-[1114px] px-4 my-10'>
              <CustomerComments />
              <CustomerComments />
              <CustomerComments />
            </div>


          </div>
      }
    </div>

  )
}
