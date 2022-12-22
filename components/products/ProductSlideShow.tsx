import Image from 'next/image'
import '@brainhubeu/react-carousel/lib/style.css'
import Carousel, { arrowsPlugin } from '@brainhubeu/react-carousel'

import { LeftArrowIcon, RightArrowIcon } from 'components/ui/icons'

interface Props {
  images: string[]
}

export const ProductSlideShow = ({ images }: Props) => {
  return (
    <Carousel
      plugins={[
        'infinite',
        {
          resolve: arrowsPlugin,
          options: {
            arrowLeft: (
              <button>
                <LeftArrowIcon />
              </button>
            ),
            arrowRight: (
              <button>
                <RightArrowIcon />
              </button>
            ),
            addArrowClickHandler: true,
          },
        },
      ]}
    >
      {images.map((image) => {
        const url = `/products/${image}`

        return (
          <Image
            key={image}
            alt={image}
            height={400}
            src={url}
            style={{
              objectFit: 'cover',
            }}
            width={400}
          />
        )
      })}
    </Carousel>
  )
}
