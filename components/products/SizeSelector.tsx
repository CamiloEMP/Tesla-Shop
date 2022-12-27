import { Size } from 'interfaces/products'

interface Props {
  selectedSize?: Size
  sizes: Size[]
}

export const SizeSelector = ({ selectedSize, sizes }: Props) => {
  return (
    <div>
      {sizes.map((size) => (
        <button key={size}>{size}</button>
      ))}
    </div>
  )
}
