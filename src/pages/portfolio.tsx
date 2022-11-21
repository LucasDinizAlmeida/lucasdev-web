import { GetServerSideProps, GetStaticProps } from "next"
import Head from "next/head"
import { useEffect, useState } from "react"
import { CardProject } from "../components/CardProject"
import { Footer } from "../components/Footer"
import { Menu } from "../components/Menu"
import { useMenuContext } from "../context/MenuContext"


interface Repository {
  id: number
  name: string;
  description: string;
  html_url: string;
  dateFormatted: string;
}
interface RepositoryFetch {
  id: number
  name: string;
  description: string;
  html_url: string;
  updated_at: string;
}

interface PortfolioProps {
  repositoriesGithub: Repository[]
}

export default function Portfolio({ repositoriesGithub }: PortfolioProps) {

  const { isOpenMenu } = useMenuContext()
  // const [repositories, setRepositories] = useState<Repository[]>([])


  // useEffect(() => {
  //   fetch('https://api.github.com/users/LucasDinizAlmeida/repos')
  //     .then(response => response.json())
  //     .then((data: Repository[]) => {

  //       const dataFormatted = data.map(item => {
  //         const { name, description, id } = item

  //         return { name, description, id }
  //       })

  //       setRepositories(dataFormatted)
  //     })
  // })

  return (
    <>
      <Head>
        <title>Portfólio | LucasDev</title>
      </Head>
      {
        isOpenMenu ?
          <Menu />
          :
          <div className="py-5 mt-20 max-w-[1114px] px-4 mx-auto">
            <h1 className="block my-7 text-center font-semibold text-4xl leading-[54px] text-gray-100">
              Conheça um pouco do meu trabalho
            </h1>

            <div className="flex flex-row items-center justify-center gap-4 flex-wrap">
              {
                repositoriesGithub.map(item => (
                  <CardProject
                    href={item.html_url}
                    key={String(item.id)}
                    title={item.name}
                    description={item.description}
                    createAt={item.dateFormatted}
                  />
                ))
              }


            </div>
          </div>
      }
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const response = await fetch('https://api.github.com/users/LucasDinizAlmeida/repos')
  const data: RepositoryFetch[] = await response.json()

  const dataFormatted = data.map(item => {
    const { name, description, id, html_url, updated_at } = item

    const dateFormatted = new Date(updated_at).toLocaleString('pt-br', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })

    return { name, description, id, html_url, dateFormatted }
  })


  return {
    props: {
      repositoriesGithub: dataFormatted
    },
    revalidate: 60 * 60 * 24 //24 hours
  }
}