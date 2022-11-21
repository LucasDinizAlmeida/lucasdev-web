import { Desktop, Cpu, DeviceMobile } from 'phosphor-react'

export function MyWork() {

  return (
    <div className="flex flex-col bg-inherit gap-10 items-center mx-auto py-20 max-w-[1114px] px-4">
      <div className="flex flex-col lg:flex-row gap-36 items-center justify-between my-12">
        <h2 className="block font-semibold text-5xl leading-[54px] text-gray-100">
          {/* Método desenhado para
          acelerar a sua evolução */}
          Solução completa para a sua empresa decolar
        </h2>

        <div className='max-w-[500px]'>
          <p className="block font-normal text-base leading-7 text-gray-100">
            {/* Combinamos 3 pilares para você conquistar experiência, dominar as ferramentas e saber se posicionarprofissionalmente */}
            Trazendo a sua empresa para o mundo digital você terá várias vantagens como mais
            visibilidade, sua marca terá um peso muito maior.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row w-full items-center justify-between">
        <div className="max-w-[350px] h-[450px] flex flex-col p-6 rounded-lg border-b-[1px] border-t-[1px] border-l-[1px] border-r-[0.5px] border-gray-800">
          <Cpu color='#eba417' size={64} />

          <span className='block font-normal text-4xl my-9'>Back-end</span>
          <p className='font-normal text-base text-gray-400'>
            Programação do lado do servidor. Desenvolvimento de API's para servir o front-end, regras de negócio da aplicação conexão com banco de Dados, regras de segurança e muito mais. <br />
            <span className='text-cyan-500 font-medium'>
              Tecnologias utilizadas: NodeJS, MySQL, MongoDB, FaunaDB, Prisma ORM e etc...
            </span>
          </p>
        </div>
        <div className="max-w-[350px] h-[450px] flex flex-col p-6 rounded-lg border-b-[1px] border-t-[1px] border-l-[1px] border-r-[0.5px] border-gray-800">
          <Desktop color='#eba417' size={64} />

          <span className='block font-normal text-4xl my-9'>Front-end</span>
          <p className='font-normal text-base text-gray-400'>
            Programação client side. Desenvolvimento de interfaces interativas, reativas e totalmente responsivas. Desenvolvimento de SPA, SSR também projetos JAM-Stacks conectados a api`s e serviços de terceiros.<br />
            <span className='text-cyan-500 font-medium'>
              Tecnologias utilizadas: ReactJS, NextJS, TawinddleCSS e etc...
            </span>
          </p>
        </div>
        <div className="max-w-[350px] h-[450px] flex flex-col p-6 rounded-lg border-b-[1px] border-t-[1px] border-l-[1px] border-r-[0.5px] border-gray-800">
          <DeviceMobile color='#eba417' size={64} />

          <span className='block font-normal text-4xl my-9'>Mobile</span>
          <p className='font-normal text-base text-gray-400'>
            Desenvolvimento de aplicativos multiplataforma IOS e Android. Aplicativos dos mais variados tipo<br />
            <span className='text-cyan-500 font-medium'>
              Tecnologias utilizadas: React Native, Native Base, Style-components, Expo SDK e etc...
            </span>
          </p>
        </div>
      </div>


    </div>
  )
}