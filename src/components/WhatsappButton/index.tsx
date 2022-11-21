import { FaWhatsapp } from 'react-icons/fa'

export function WhatsappButton() {

  return (
    <a
      href="https://wa.me/5528999942517?text=ola%20tudo%20bem"
      target="_blank"
      className="w-16 h-16 rounded-full flex items-center justify-center bg-green-500 fixed bottom-8 right-8"
    >

      <FaWhatsapp color="white" className='font-bold text-3xl animate-ping' />
    </a>
  )
}