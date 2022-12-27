import Head from 'next/head'
import { ReactNode } from 'react'

interface Props {
  title: string
  description: string
  children: ReactNode
}

export const AuthLayout = ({ children, title, description }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={description} name="description" />
      </Head>
      <main>
        <div className="flex items-center justify-center height-404">{children}</div>
      </main>
    </>
  )
}
