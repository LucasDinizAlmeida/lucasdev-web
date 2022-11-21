import Link from "next/link";
import classNames from 'classnames';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { useRouter } from "next/router";
import { useMenuContext } from "../../context/MenuContext";
import { MenuHamburguer } from "../MenuHamburguer";


export function Header() {

  const { asPath } = useRouter()
  const { isOpenMenu, setIsOpenMenu } = useMenuContext()


  return (
    <header className="h-20 z-10 fixed top-0 right-0 left-0 w-100% bg-gray-750 shadow-3xl">
      <div className="flex justify-between items-center mx-auto h-20 max-w-[1350px] px-4">
        <div className="lg:w-auto">
          <img src="/logo-lucas-dev.png" className="w-32 lg:w-52" />
        </div>



        <div className="flex gap-3 w-[120px] justify-end">
          <a
            href="https://github.com/LucasDinizAlmeida"
            target="_blank"
          >
            <FaGithub size={28} className="text-gray-500 hover:text-cyan-500 transition-colors" />
          </a>
          <a
            href="https://www.linkedin.com/in/lucas-diniz-almeida-642037233/"
            target="_blank"
          >
            <FaLinkedin size={28} className="text-gray-500 hover:text-cyan-500 transition-colors" />
          </a>
          <a
            href="https://www.instagram.com/lucas_diniz_almeida/"
            target="_blank"
          >
            <FaInstagram size={28} className="text-gray-500 hover:text-cyan-500 transition-colors" />
          </a>
        </div>

        <nav className="hidden lg:flex items-center gap-4 h-20 text-gray-300">
          <Link href="/" className={
            classNames("h-20 flex items-center font-normal text-xl text-gray-500 hover:text-white transition-colors", {
              'border-b-4 border-cyan-500': asPath === '/'
            })}>
            Home
          </Link>
          <Link href="/portfolio" className={
            classNames("h-20 flex items-center font-normal text-xl text-gray-500 hover:text-white transition-colors", {
              'border-b-4 border-cyan-500': asPath === '/portfolio'
            })}>
            Portfólio
          </Link>
        </nav>


        <MenuHamburguer
          onClick={() => setIsOpenMenu(!isOpenMenu)}
        />


      </div>
    </header>
  )
}