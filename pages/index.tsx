import { ShopLayout } from 'components/layouts/ShopLayout'
import { initialData } from 'data/products'
import { ProductList } from 'components/products/ProductList'

export default function Home() {
  return (
    <ShopLayout description="Encuentra los mejores productos aqui" title="Teslo shop - home">
      <h1>Teslo Shop</h1>
      <h3>Todos los productos</h3>
      <ProductList products={initialData.products as any} />
    </ShopLayout>
  )
}
