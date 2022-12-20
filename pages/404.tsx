import { ShopLayout } from 'components/layouts/ShopLayout'

const CustomNotFound = () => {
  return (
    <ShopLayout description="No existe esta pagina en nuestra web" title="Page not found">
      <section className="flex justify-center height-404 pt-28">
        <h1 className="text-xl sm:text-2xl">404 | Página no encontrada</h1>
      </section>
    </ShopLayout>
  )
}

export default CustomNotFound
