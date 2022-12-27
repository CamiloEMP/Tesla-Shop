import Link from 'next/link'

import { ShopLayout } from 'components/layouts/ShopLayout'
import { SadIcon } from 'components/ui/icons/SadIcon'

const EmptyPage = () => {
  return (
    <ShopLayout description="No hay articulos en el carrito de compras" title="Carrito Vacio">
      <section className="flex flex-col items-center gap-4 height-404 pt-28">
        <div className="flex items-center gap-2 h-fit">
          <SadIcon className="w-12 h-12" />
          <h1 className="text-xl sm:text-2xl">| Tu carrito esta vacio</h1>
        </div>
        <Link
          className="px-2 py-1 text-lg transition-colors bg-green-200 rounded hover:bg-green-300"
          href="/"
        >
          Volver al home
        </Link>
      </section>
    </ShopLayout>
  )
}

export default EmptyPage
