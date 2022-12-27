import Image from 'next/image'
import Link from 'next/link'

import { ItemCounter } from 'components/products/ItemCounter'
import { initialData } from 'data/products'

export const CartList = () => {
  return (
    <>
      {initialData.products.slice(0, 3).map((product) => (
        <div key={product.slug} className="flex max-w-2xl gap-2 p-4 rounded shadow">
          <Link className="w-44" href={`/product/${product.slug}`}>
            <Image
              alt={product.title}
              height={150}
              src={`/products/${product.images[0]}`}
              style={{
                objectFit: 'cover',
              }}
              width={150}
            />
          </Link>
          <div className="flex flex-col flex-1 gap-2">
            <span className="font-medium">{product.title}</span>
            <span>Talla: M</span>
            <ItemCounter />
          </div>
          <div className="flex flex-col items-center gap-2 w-28">
            <span className="font-medium">${product.price}</span>
            <button className="py-0.5 text-sm font-medium text-red-500 transition-colors  rounded px-2 hover:bg-red-100">
              Remover
            </button>
          </div>
        </div>
      ))}
    </>
  )
}
