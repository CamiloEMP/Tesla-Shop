import Image from 'next/image'

import { ShopLayout } from 'components/layouts/ShopLayout'
import { initialData } from 'data/products'

export default function Home() {
  return (
    <ShopLayout description="Encuentra los mejores productos aqui" title="Teslo shop - home">
      <h1>Teslo Shop</h1>
      <h3>Todos los productos</h3>
      <section className="flex flex-wrap gap-8">
        {initialData.products.map((product) => (
          <div key={product.slug}>
            <Image
              alt={product.title}
              height={250}
              src={`/products/${product.images[0]}`}
              width={250}
            />
          </div>
        ))}
      </section>
    </ShopLayout>
  )
}
