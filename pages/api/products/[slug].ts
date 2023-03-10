import { NextApiRequest, NextApiResponse } from 'next'

import { Product } from 'interfaces/products'
import { getProductBySlug } from 'services/getProductBySlug'

export type DataProductSlug =
  | {
      message: string
    }
  | Product

export default async function handler(req: NextApiRequest, res: NextApiResponse<DataProductSlug>) {
  switch (req.method) {
    case 'GET':
      const { slug } = req.query
      const product = await getProductBySlug(`${slug}`)

      if (product) return res.status(200).json(product)

      return res.status(404).json({
        message: 'El producto no existe',
      })

    default:
      res.setHeader('Allow', ['GET'])

      return res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
