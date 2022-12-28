import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Inter } from '@next/font/google'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { useUI } from 'hooks/useUI'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

import {
  ChildrenIcon,
  FemaleIcon,
  LogoutIcon,
  MaleIcon,
  OrdersIcon,
  SearchIcon,
  SignUpIcon,
  UserIcon,
} from './icons'
import { CloseIcon } from './icons/CloseIcon'

export const SideMenu = () => {
  const router = useRouter()
  const { isMenuOpen, toggleSideMenu } = useUI()
  const [mounted, setMounted] = useState(false)
  const [search, setSearch] = useState('')
  const onSearch = () => {
    if (search.length === 0) return
    toggleSideMenu()
    router.push(`/search/${search}`)
  }

  useEffect(() => {
    if (window === undefined) return
    setMounted(true)
  }, [])

  return (
    <>
      {mounted &&
        createPortal(
          <>
            {isMenuOpen && (
              <div
                className={`fixed top-0 z-10 flex justify-end w-screen h-screen bg-black bg-opacity-60 backdrop-blur-sm`}
              />
            )}
            <div
              className={`fixed top-0 right-0 ${isMenuOpen ? 'z-20' : '-z-10'} ${inter.className}`}
            >
              <section
                className={`relative h-screen py-12 space-y-4 bg-white w-80 transition-transform duration-150 ${
                  isMenuOpen ? 'translate-x-0' : 'translate-x-96'
                }`}
              >
                <button
                  className="absolute transition-transform top-4 left-4"
                  onClick={toggleSideMenu}
                >
                  <CloseIcon />
                </button>
                <section className="relative px-8 group">
                  <input
                    autoFocus
                    className="w-full py-1 pl-2 border-b outline-none focus:border-black"
                    placeholder="..."
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyUp={(e) => e.key === 'Enter' && onSearch()}
                  />
                  <button className="absolute outline-none right-8 bottom-2" onClick={onSearch}>
                    <SearchIcon className="w-5 h-5 text-gray-800 hover:text-black" />
                  </button>
                </section>
                <section className="w-5/6 py-2 mx-auto border-b">
                  <h4 className="px-4 mb-2 font-semibold bg-gray-100 rounded-full w-fit">
                    Categorías
                  </h4>
                  <ul>
                    <SideMenuItem
                      href="/category/men"
                      icon={<MaleIcon />}
                      title="Hombres"
                      onClick={() => toggleSideMenu()}
                    />
                    <SideMenuItem
                      href="/category/women"
                      icon={<FemaleIcon />}
                      title="Mujeres"
                      onClick={() => toggleSideMenu()}
                    />
                    <SideMenuItem
                      href="/category/kid"
                      icon={<ChildrenIcon />}
                      title="Niños"
                      onClick={() => toggleSideMenu()}
                    />
                  </ul>
                </section>
                <section className="w-5/6 py-2 mx-auto">
                  <ul>
                    <SideMenuItem href="/" icon={<UserIcon />} title="Perfil" />
                    <SideMenuItem href="/" icon={<OrdersIcon />} title="Mis Ordenes" />
                    <SideMenuItem href="/" icon={<SignUpIcon />} title="Ingresar" />
                    <SideMenuItem href="/" icon={<LogoutIcon />} title="Salir" />
                  </ul>
                </section>
              </section>
            </div>
          </>,
          document.body
        )}
    </>
  )
}

interface PropsItem {
  title: string
  href: string
  icon: JSX.Element
  onClick?: () => void
}

const SideMenuItem = ({ href, icon, title, onClick }: PropsItem) => {
  return (
    <li>
      <Link
        className="flex items-center w-full gap-5 p-2 transition-colors duration-75 rounded hover:bg-gray-100"
        href={href}
        onClick={() => (onClick ? onClick() : null)}
      >
        {icon}
        <span>{title}</span>
      </Link>
    </li>
  )
}
