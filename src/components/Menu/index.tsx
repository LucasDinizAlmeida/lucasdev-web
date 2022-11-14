import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMenuContext } from "../../context/MenuContext";


export function Menu() {

  const { asPath, push } = useRouter()
  const { setIsOpenMenu } = useMenuContext()

  return (
    <div className="flex items-center justify-center h-[calc(100vh-81px)]">
      <nav className="flex w-full flex-col items-center gap-4">
        <button
          className="bg-inherit hover:bg-gray-800 transition-colors active:bg-cyan-500 py-5 w-full mx-10 border-l-2 border-cyan-500"
          onClick={() => {
            setIsOpenMenu(false)
            push('/')
          }}
        >
          Home
        </button>
        <button
          className="bg-inherit hover:bg-gray-800 transition-colors active:bg-cyan-500 py-5 w-full mx-10 border-l-2 border-cyan-500"
          onClick={() => {
            setIsOpenMenu(false)
            push('/portfolio')
          }}
        >
          Portfólio
        </button>
      </nav>

    </div>
  )
}