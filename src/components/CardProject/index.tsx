import { GithubLogo } from "phosphor-react";


export function CardProject() {

  return (
    <div className="max-w-[500px] min-h-[270px] rounded-2xl bg-gray-750 flex flex-row gap-2 hover:opacity-70 transition-opacity">
      <div className="min-h-[270px] w-1/3 bg-yellow-500 rounded-tl-2xl rounded-bl-2xl">
        <img src="./github.png" alt="project github" />
      </div>

      <div className="w-2/3 m-5">
        <GithubLogo color='#61dafb' size={32} weight='bold' className="ml-auto" />

        <p className='block my-5 text-gray-100'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel ut sed explicabo suscipit amet ex sunt, inventore consequuntur ipsa asperiores reprehenderit. Quidem provident deleniti fugit sequi praesentium nesciunt enim quam.</p>
      </div>


    </div>
  )
}