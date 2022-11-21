import Head from 'next/head'
import { ContentFullStack } from '../components/ContentFullStack'
import { CustomerComments } from '../components/CustomerComments'
import { Menu } from '../components/Menu'
import { MyWork } from '../components/MyWork'
import { useMenuContext } from '../context/MenuContext'
import styles from './home.module.css';
import classNames from 'classnames'


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
          <div className='py-5 overflow-x-hidden h-100vh mt-20'>
            <div className={classNames("flex flex-col lg:flex-row justify-between items-center mx-auto max-w-[1114px] px-4", styles.animate)}>
              <div className='flex flex-col items-center lg:items-start'>
                <h1 className='text-cyan-500 font-semibold text-3xl'>LUCAS DEV</h1>
                <h2 className='font-bold text-4xl lg:text-6xl text-center sm:text-start my-6'>Full Stack <br />Developer</h2>

                <a href="https://www.instagram.com/lucas_diniz_almeida/" target="_blank">
                  <button className='py-4 px-12 bg-cyan-500 hover:bg-cyan-600 transition-colors rounded-full text-gray-900 font-bold text-lg'>
                    Saiba mais
                  </button>
                </a>
              </div>


              <img src="/imagem-principal03.jpg" alt="codando" className={styles.animate} />

            </div>

            <ContentFullStack />

            <MyWork />

            <h2 className="block text-center mt-32 font-semibold text-5xl leading-[54px] text-gray-100">
              Leia o comentário dos clientes
            </h2>

            <div className='flex flex-row gap-6 items-center justify-center flex-wrap  mx-auto max-w-[1114px] px-4 my-10'>
              <CustomerComments
                name='Cecília Amorin'
                office='Gerente de vendas'
                image='./client1.jpg'
                comment='Mesmo pelo prazo curto e complexidade do nosso negócio, LucasDev conseguiu compreender tudo com muita agilidade e profissionalismo. Sem dúvida indicaria os seus serviços.'
              />
              <CustomerComments
                name='Hélio Brito'
                office='Empresário'
                image='./client2.jpg'
                comment='Muito honesto e preço justo! Equipe nota mil. Excelente atendimento e o produto foi entregue no tempo pré-determinado. Recomendo o serviço.'
              />
              <CustomerComments
                name='Carlos Magno'
                office='Software Engineer'
                image='./user.png'
                comment='Terceirizei meu front-end e superou minhas expectativas. Trabalho bem feito e muito organizado o projeto, entrega dentro do prazo estipulado.'
              />

            </div>

          </div>
      }
    </div>

  )
}
