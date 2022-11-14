import classNames from "classnames"
import { useMenuContext } from "../../context/MenuContext"


export function Footer() {

  const { isOpenMenu } = useMenuContext()

  return (
    <footer className={classNames("w-100vw bg-gray-750 border-t-[1px] border-gray-800 mt-auto bottom-0 left-0 right-0 ", { 'hidden': isOpenMenu === true })}>
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-[1114px] mx-auto px-4 py-10">
        <div className="w-20 h-10">
          <img src="./logo.svg" />
        </div>
        <p className="text-sm text-gray-500">&copy; Site criado por LucasDev - 2022</p>

        <div className="hidden lg:flex gap-3 text-base text-gray-500">
          <a
            href="https://github.com/LucasDinizAlmeida"
            target="_blank"
            className="hover:text-white transition-colors"
          >
            Linkedin
          </a>
          <a
            href="https://github.com/LucasDinizAlmeida"
            target="_blank"
            className="hover:text-white transition-colors"
          >
            Whatsapp
          </a>
          <a
            href="https://github.com/LucasDinizAlmeida"
            target="_blank"
            className="hover:text-white transition-colors"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  )
}