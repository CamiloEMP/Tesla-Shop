import Link from 'next/link'

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

interface Props {}

export const SideMenu = () => {
  return (
    <div className="fixed top-0 z-10 flex justify-end w-screen h-screen transition-all bg-black bg-opacity-60 backdrop-blur-sm">
      <section className="h-full py-12 space-y-4 bg-white w-80">
        <section className="relative px-8 group">
          <input
            className="w-full py-1 pl-2 border-b outline-none focus:border-black"
            placeholder="..."
            type="text"
          />
          <button className="absolute outline-none right-8 bottom-2">
            <SearchIcon className="w-5 h-5 text-gray-800 hover:text-black" />
          </button>
        </section>
        <section className="w-5/6 py-2 mx-auto border-b">
          <h4 className="px-4 mb-2 font-semibold bg-gray-100 rounded-full w-fit">Categorías</h4>
          <ul>
            <SideMenuItem href="/" icon={<MaleIcon />} title="Hombres" />
            <SideMenuItem href="/" icon={<FemaleIcon />} title="Mujeres" />
            <SideMenuItem href="/" icon={<ChildrenIcon />} title="Niños" />
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
  )
}

interface PropsItem {
  title: string
  href: string
  icon: JSX.Element
}

const SideMenuItem = ({ href, icon, title }: PropsItem) => {
  return (
    <li>
      <Link
        className="flex items-center w-full gap-5 p-2 transition-colors duration-75 rounded hover:bg-gray-100"
        href={href}
      >
        {icon}
        <span>{title}</span>
      </Link>
    </li>
  )
}
