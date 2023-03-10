import { GetStaticPaths, GetStaticProps } from 'next'

import { ShopLayout } from 'components/layouts/ShopLayout'
import { ItemCounter } from 'components/products/ItemCounter'
import { ProductSlideShow } from 'components/products/ProductSlideShow'
import { SizeSelector } from 'components/products/SizeSelector'
import { Product } from 'interfaces/products'
import { getProducts } from 'services'
import { getProductBySlug } from 'services/getProductBySlug'

const ProductPage = ({ product }: { product: Product }) => {
  return (
    <ShopLayout
      description={product.description}
      imageFullUrl={product.images[0]}
      title={`Teslo | Shop ${product.title}`}
    >
      <section className="flex flex-col max-w-screen-lg gap-12 mx-auto md:flex-row">
        <aside className="w-full overflow-hidden md:max-w-lg">
          <ProductSlideShow images={product.images} />
        </aside>
        <aside className="flex flex-col gap-4">
          <div className="space-y-2">
            <h1 className="px-2 py-1 text-lg font-semibold bg-green-200 rounded w-fit">
              {product.title}
            </h1>
            <h2 className="px-2 py-1 font-medium bg-green-100 rounded w-fit">${product.price}/u</h2>
          </div>
          <div className="space-y-2">
            <span>Cantidad</span>
            <ItemCounter />
          </div>
          <div>
            <SizeSelector sizes={product.sizes} />
          </div>
          <div>
            <button className="px-12 py-1 font-medium bg-green-100 border border-green-200 rounded">
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

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await getProducts({
    fieldsSelected: 'slug -_id',
  })
  const paths = slugs.map(({ slug }) => ({
    params: {
      slug,
    },
  }))

  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string

  const product = await getProductBySlug(slug)

  if (!product) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
        statusCode: 404,
      },
    }
  }

  return {
    props: {
      product,
    },
    revalidate: 86400,
  }
}

export default ProductPage
