const Carousel = dynamic(() => import('@brainhubeu/react-carousel'), {
  ssr: false,
})

import dynamic from 'next/dynamic'
import Image from 'next/image'
import { arrowsPlugin } from '@brainhubeu/react-carousel'

import { LeftArrowIcon, RightArrowIcon } from 'components/ui/icons'
import '@brainhubeu/react-carousel/lib/style.css'

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
