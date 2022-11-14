import { ChatCentered } from 'phosphor-react'

export function CustomerComments() {

  return (
    <div className="max-w-[500px] min-h-[270px] p-5 rounded-2xl bg-gray-750">
      <ChatCentered color='#61dafb' size={32} weight='bold' />

      <p className='block my-5 text-gray-100'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel ut sed explicabo suscipit amet ex sunt, inventore consequuntur ipsa asperiores reprehenderit. Quidem provident deleniti fugit sequi praesentium nesciunt enim quam.</p>

      <div className='flex flex-row gap-4'>
        <img src="https://i.pinimg.com/736x/14/30/35/143035bbec562335d8b2217317273ba1.jpg"
          alt="client"
          className='w-[60px] h-[60px] rounded-full'
        />

        <div className='flex flex-col'>
          <span className='text-gray-500 font-bold'>CeCilia Amorin</span>
          <span className='text-gray-100 font-light text-sm'>CEO da Google</span>
        </div>
      </div>

    </div>
  )
}