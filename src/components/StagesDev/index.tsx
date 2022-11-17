import { IconProps } from 'phosphor-react'

interface StageDevProps {
  icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;
  title: string;
  subtitle: string;
}

export function StagesDev({ icon: Icon, subtitle, title }: StageDevProps) {

  return (
    <div className="min-w-[310px] max-w-[600px] p-7 flex mt-5 items-center gap-16 bg-gray-850 hover:bg-gray-900 transition-colors rounded-lg">
      <div className='min-w-[45px]'>
        <Icon
          size={45}
          color='#eba417'
        />
      </div>


      <div className='flex flex-col gap-4'>
        <p className='font-light text-lg text-white'>
          {title}
        </p>
        <p className='font-light text-sm text-white'>
          {subtitle}
        </p>
      </div>
    </div>
  )
}