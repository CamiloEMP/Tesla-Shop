import Image from 'next/image'
import { useMemo, useState } from 'react'
import Link from 'next/link'

import { Product } from 'interfaces/products'

export const ProductCard = ({ title, price, images, slug }: Product) => {
  const [isHovered, hovered] = useState(false)

  const productImage = useMemo(() => {
    return isHovered ? `/products/${images[1]}` : `/products/${images[0]}`
  }, [images, isHovered])

  return (
    <Link
      className=" w-72"
      href={`/product/${slug}`}
      prefetch={false}
      onMouseEnter={() => hovered(true)}
      onMouseLeave={() => hovered(false)}
    >
      <Image alt={title} height={288} loading="lazy" src={productImage} width={288} />
      <div className="flex flex-col gap-1 mt-2">
        <span>{title}</span>
        <span>${price}</span>
      </div>
    </Link>
  )
}
