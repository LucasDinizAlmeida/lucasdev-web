import { Desktop, Cpu } from 'phosphor-react'

export function MyWork() {

  return (
    <div className="flex flex-col bg-inherit gap-10 items-center mx-auto py-20 max-w-[1114px] px-4">
      <div className="flex flex-col lg:flex-row gap-36 items-center justify-between my-12">
        <h2 className="block font-semibold text-5xl leading-[54px] text-gray-100">
          Método desenhado para
          acelerar a sua evolução
        </h2>

        <div className='max-w-[500px]'>
          <p className="block font-normal text-base leading-7 text-gray-100">
            Combinamos 3 pilares para você conquistar experiência, dominar as ferramentas e saber se posicionarprofissionalmente
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row w-full items-center justify-between">
        <div className="max-w-[350px] h-[450px] flex flex-col p-6 rounded-lg border-b-[1px] border-t-[1px] border-l-[1px] border-r-[0.5px] border-gray-800">
          <Desktop color='#eba417' size={64} />

          <span className='block font-normal text-4xl my-9'>Foco</span>
          <p className='font-normal text-base text-gray-500'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, quae et nisi labore placeat sint sapiente quos fugit eum saepe deleniti velit, distinctio unde dolore officia eveniet necessitatibus exercitationem nobis?
          </p>
        </div>
        <div className="max-w-[350px] h-[450px] flex flex-col p-6 rounded-lg border-b-[1px] border-t-[1px] border-l-[1px] border-r-[0.5px] border-gray-800">
          <Desktop color='#eba417' size={64} />

          <span className='block font-normal text-4xl my-9'>Foco</span>
          <p className='font-normal text-base text-gray-500'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, quae et nisi labore placeat sint sapiente quos fugit eum saepe deleniti velit, distinctio unde dolore officia eveniet necessitatibus exercitationem nobis?
          </p>
        </div>
        <div className="max-w-[350px] h-[450px] flex flex-col p-6 rounded-lg border-b-[1px] border-t-[1px] border-l-[1px] border-r-[0.5px] border-gray-800">
          <Desktop color='#eba417' size={64} />

          <span className='block font-normal text-4xl my-9'>Foco</span>
          <p className='font-normal text-base text-gray-500'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, quae et nisi labore placeat sint sapiente quos fugit eum saepe deleniti velit, distinctio unde dolore officia eveniet necessitatibus exercitationem nobis?
          </p>
        </div>
      </div>


    </div>
  )
}