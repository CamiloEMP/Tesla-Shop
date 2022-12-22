import { Product } from 'interfaces/products'

import { ProductCard } from './ProductCard'

interface Props {
  products: Product[]
}

export const ProductList = ({ products }: Props) => {
  return (
    <section className="grid grid-cols-1 justify-items-center sm:justify-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {products.map((product) => (
        <ProductCard {...product} key={product.slug} />
      ))}
    </section>
  )
}
