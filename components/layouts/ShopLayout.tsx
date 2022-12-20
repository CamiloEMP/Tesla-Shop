import Head from 'next/head'

import { Navbar } from 'components/ui/Navbar'
import { SideMenu } from 'components/ui/SideMenu'

interface Props {
  children: React.ReactNode
  title: string
  description: string
  imageFullUrl?: string
}

export const ShopLayout = ({ children, title, description, imageFullUrl }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={description} name="description" />
        <meta content={title} name="og:title" />
        <meta content={description} name="og:description" />
        {imageFullUrl && <meta content={imageFullUrl} name="og:image" />}
      </Head>

      <Navbar />
      <SideMenu />

      <main className="px-8 mx-auto mt-20 max-w-screen-2xl">{children}</main>

      <footer>Footer</footer>
    </>
  )
}
