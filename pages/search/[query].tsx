import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'

import { searchProducts } from 'services/searchProducts'
import { ShopLayout } from 'components/layouts/ShopLayout'
import { ProductList } from 'components/products/ProductList'
import { getProducts } from 'services'
import { SHOP_CONSTANTS } from 'db/constants'

export default function SearchPage({
  products,
  haveProducts,
  query,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <ShopLayout
      description="Los mejores productos adecuados a tu busqueda actual"
      title="Teslo shop - Search"
    >
      {haveProducts ? (
        <h1>
          Buscando por {SHOP_CONSTANTS.validGenders.includes(query) ? `categoria ${query}` : query}
        </h1>
      ) : (
        <h1>Producto no encontrado</h1>
      )}
      <ProductList products={products} />
    </ShopLayout>
  )
}

export async function getServerSideProps({ params }: GetServerSidePropsContext) {
  const { query = '' } = params as { query: string }

  let products = await searchProducts(query)
  const haveProducts = products.length > 0

  if (!haveProducts) {
    products = await getProducts({
      fieldsSelected: 'title images price inStock slug -_id',
    })
  }

  return {
    props: {
      products,
      haveProducts,
      query,
    },
  }
}
