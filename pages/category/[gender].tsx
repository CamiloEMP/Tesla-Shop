import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { SHOP_CONSTANTS } from 'db/constants'
import { useProduct } from 'hooks/useProducts'
import { Loading } from 'components/ui/Loading'
import { ShopLayout } from 'components/layouts/ShopLayout'
import { ProductList } from 'components/products/ProductList'
import { Product } from 'interfaces/products'

const GenderPage = () => {
  const { query, push } = useRouter()
  const gender = (query.gender as string) ?? ''

  useEffect(() => {
    if (SHOP_CONSTANTS.validGenders.includes(gender)) return
    push('/404')

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gender])

  const { products, isLoading } = useProduct<Product[]>(`/products?gender=${gender}`)

  return (
    <ShopLayout
      description={`El mejor catalogo de ropa que podras encontrar para tí`}
      title={`${gender} | Teslo shop`}
    >
      {isLoading ? <Loading /> : <ProductList products={products} />}
    </ShopLayout>
  )
}

export default GenderPage
