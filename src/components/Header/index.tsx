import Link from "next/link";
import classNames from 'classnames';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { useRouter } from "next/router";


export function Header() {

  const { asPath } = useRouter()

  return (
    <header className="h-20 w-100% border-b-[1px] border-gray-800">
      <div className="flex justify-between items-center mx-auto h-20 max-w-[1114px] px-2">
        <img src="/logo.svg" />

        <nav className="flex items-center gap-3 h-20 text-gray-300">
          <Link href="/" className={
            classNames("h-20 flex items-center text-gray-300 hover:text-white transition-colors", {
              'border-b-2 border-cyan-500': asPath === '/'
            })}>
            Home
          </Link>
          <Link href="/portfolio" className={
            classNames("h-20 flex items-center text-gray-300 hover:text-white transition-colors", {
              'border-b-2 border-cyan-500': asPath === '/portfolio'
            })}>
            Portfólio
          </Link>
        </nav>

        <div className="flex gap-3 w-[120px] justify-end">
          <a
            href="https://github.com/LucasDinizAlmeida"
            target="_blank"
          >
            <FaGithub color="#61dafb" className="text-[24px] hover:text-3xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/lucas-diniz-almeida-642037233/"
            target="_blank"
          >
            <FaLinkedin color="#61dafb" className="text-[24px] hover:text-3xl" />
          </a>
          <a
            href="https://www.instagram.com/lucas_diniz_almeida/"
            target="_blank"
          >
            <FaInstagram color="#61dafb" className="text-[24px] hover:text-3xl" />
          </a>
        </div>

      </div>
    </header>
  )
}