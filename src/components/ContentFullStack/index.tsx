import { Desktop, Cpu, ChatsCircle, Code } from 'phosphor-react'
import { StagesDev } from '../StagesDev'

export function ContentFullStack() {

  return (
    <div className="w-full my-20 bg-gray-750">
      <div className="flex flex-col lg:flex-row bg-inherit justify-between gap-10 items-center mx-auto py-20 max-w-[1114px] px-4">
        <div className='relative'>
          <Desktop size={65} color='#61dafb' className='absolute -top-6 -right-6' />
          <Cpu size={65} color='#eba417' className='absolute -bottom-6 -left-6' />
          <img src="/teste02.jpg" alt="computer" className="rounded-2xl w-[150px] h-[225px] sm:w-[300px] sm:h-[450px]" />
        </div>

        <div>
          <span className='text-xl max-lg:mt-10 font-normal text-yellow-500 block mb-10'>
            Vamos tirar aquela ideia do papel e desenvolver seu projeto?
          </span>
          <StagesDev
            icon={ChatsCircle}
            title='Entrevista para conhecer o projeto.'
            subtitle='Um bate papo para conhecer mais a ideia, as preferências, o grau de complexidade para tornar o projeto real e muito mais.'
          />
          <StagesDev
            icon={Code}
            title='Desenvolvimento do projeto'
            subtitle='Aqui que a aplicação é desenvolvida com as tecnologias mais atuais do mercado proporcionando modernidade e segurança para o projeto.'
          />
          <StagesDev
            icon={Desktop}
            title='Entrega do projeto já online e totalmente operacional'
            subtitle='Deploy da aplicação atendendo os prazos de entrega já estipulados no início.'
          />
        </div>
      </div>
    </div>
  )
}