import { ChatCentered } from 'phosphor-react'

interface CustomerCommentsProps {
  name: string;
  office: string;
  comment: string;
  image: string
}

export function CustomerComments({ name, image, comment, office }: CustomerCommentsProps) {

  return (
    <div className="max-w-[500px] min-h-[270px] p-5 rounded-2xl bg-gray-750">
      <ChatCentered color='#61dafb' size={32} weight='bold' />

      <p className='block my-5 text-gray-100'>{comment}</p>

      <div className='flex flex-row gap-4'>
        <img src={image}
          alt="client"
          className='w-[60px] h-[60px] rounded-full'
        />

        <div className='flex flex-col'>
          <span className='text-gray-500 font-bold'>{name}</span>
          <span className='text-gray-100 font-light text-sm'>{office}</span>
        </div>
      </div>

    </div>
  )
}