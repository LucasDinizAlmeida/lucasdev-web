
import { GithubLogo } from "phosphor-react";
import { AnchorHTMLAttributes } from "react";
import { FaGithub } from 'react-icons/fa';
type T = any

interface CardProjectProps extends AnchorHTMLAttributes<T> {
  title: string;
  description: string;
  createAt: string;

}

export function CardProject({ createAt, description, title, ...rest }: CardProjectProps) {


  return (
    <a
      target="_blank"
      {...rest}
    >
      <div className="max-w-[500px] h-[270px] rounded-2xl bg-gray-750 flex flex-row gap-2 hover:opacity-70 transition-opacity">
        <div className="min-h-[270px] w-1/3 flex items-center justify-center bg-yellow-500 rounded-tl-2xl rounded-bl-2xl">
          {/* <img src="./github.png" alt="project github" /> */}
          <FaGithub size={120} color='#202024' />
        </div>

        <div className="w-2/3 m-5 relative scrollbar-thin scrollbar-thumb-black scrollbar-track-gray-800 pr-3">
          <div className="flex flex-row items-start justify-between">
            <h3 className="text-gray-500 font-medium text-xl">
              {title}
            </h3>
            <div className="w-8">
              <GithubLogo color='#61dafb' size={20} weight='bold' className="absolute top-0 right-2" />
            </div>
          </div>

          <span className="text-gray-500 font-medium text-xs">{`Último commit:  ${createAt}`}</span>

          <p className='block my-5 text-gray-100 text-justify'>{description}</p>
        </div>


      </div>

    </a>
  )
}