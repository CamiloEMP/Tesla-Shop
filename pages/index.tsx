import { ShopLayout } from 'components/layouts/ShopLayout'
import { ProductList } from 'components/products/ProductList'
import { Loading } from 'components/ui/Loading'
import { useProduct } from 'hooks/useProducts'
import { Product } from 'interfaces/products'

export default function Home() {
  const { products, isLoading } = useProduct<Product[]>('/products')

  return (
    <ShopLayout description="Encuentra los mejores productos aqui" title="Teslo shop - home">
      <h1>Teslo Shop</h1>
      <h3>Todos los productos</h3>
      {isLoading ? <Loading /> : <ProductList products={products} />}
    </ShopLayout>
  )
}
