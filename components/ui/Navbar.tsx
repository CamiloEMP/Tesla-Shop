import Link from 'next/link'

interface Props {}

export const Navbar = (props: Props) => {
  return (
    <nav className="flex justify-between p-8">
      <section>
        <Link className="" href="/">
          Teslo | Shop
        </Link>
      </section>
      <section className="hidden sm:block">
        <ul className="flex gap-4">
          <li>
            <Link href="/category/men">Hombres</Link>
          </li>
          <li>
            <Link href="/category/women">Mujeres</Link>
          </li>
          <li>
            <Link href="/category/children">Niños</Link>
          </li>
        </ul>
      </section>
      <section className="flex gap-4">
        <div>
          <input placeholder="search" />
        </div>
        <Link href="/cart">Carrito icono</Link>
        <div>Menu</div>
      </section>
    </nav>
  )
}
