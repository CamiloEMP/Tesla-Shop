import Link from 'next/link'
import { useRouter } from 'next/router'

import { useUI } from 'hooks/useUI'

import { CartIcon } from './icons/CartIcon'
import { MenuIcon } from './icons/MenuIcon'
import { SearchIcon } from './icons/SearchIcon'

interface Props {}

export const Navbar = (props: Props) => {
  const { asPath } = useRouter()
  const { toggleSideMenu } = useUI()

  return (
    <nav className="flex items-center justify-between p-8">
      <section>
        <Link className="" href="/">
          Teslo | Shop
        </Link>
      </section>
      <section className="hidden sm:block">
        <ul className="flex gap-1">
          <li>
            <Link
              className={`px-2 py-1 rounded hover:bg-green-200 transition-colors ${
                asPath === '/category/men' ? 'bg-green-200 ' : ''
              }`}
              href="/category/men"
            >
              Hombres
            </Link>
          </li>
          <li>
            <Link
              className={`px-2 py-1 rounded hover:bg-green-200 transition-colors ${
                asPath === '/category/women' ? 'bg-green-200 ' : ''
              }`}
              href="/category/women"
            >
              Mujeres
            </Link>
          </li>
          <li>
            <Link
              className={`px-2 py-1 rounded hover:bg-green-200 transition-colors ${
                asPath === '/category/kid' ? 'bg-green-200 ' : ''
              }`}
              href="/category/kid"
            >
              Niños
            </Link>
          </li>
        </ul>
      </section>
      <section className="flex gap-4">
        <button>
          <SearchIcon />
        </button>
        <Link href="/cart">
          <CartIcon />
        </Link>
        <button onClick={toggleSideMenu}>
          <MenuIcon />
        </button>
      </section>
    </nav>
  )
}
