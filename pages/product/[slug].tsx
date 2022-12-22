import { ShopLayout } from 'components/layouts/ShopLayout'
import { ItemCounter } from 'components/products/ItemCounter'
import { ProductSlideShow } from 'components/products/ProductSlideShow'
import { initialData } from 'data/products'

const product = initialData.products[0]

const ProductPage = () => {
  return (
    <ShopLayout
      description={product.description}
      imageFullUrl={product.images[0]}
      title={`Teslo | Shop ${product.title}`}
    >
      <section className="flex gap-12 flex-col md:flex-row max-w-screen-lg mx-auto">
        <aside className="w-full md:max-w-lg overflow-hidden">
          <ProductSlideShow images={product.images} />
        </aside>
        <aside className="flex flex-col gap-4">
          <div className="space-y-2">
            <h1 className="font-semibold text-lg bg-green-200 w-fit rounded py-1 px-2">
              {product.title}
            </h1>
            <h2 className="font-medium bg-green-100 w-fit rounded py-1 px-2">${product.price}/u</h2>
          </div>
          <div className="space-y-2">
            <span>Cantidad</span>
            <ItemCounter />
          </div>
          <div>
            <button className="bg-green-100 font-medium border border-green-200 rounded px-12 py-1">
              Agregar al carrito
            </button>
          </div>
          <div>
            <span>Descripción</span>
            <p className=" max-w-prose">{product.description}</p>
          </div>
        </aside>
      </section>
    </ShopLayout>
  )
}

export default ProductPage
