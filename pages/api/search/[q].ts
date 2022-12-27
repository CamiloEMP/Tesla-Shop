import type { NextApiRequest, NextApiResponse } from 'next'

import { Product } from 'interfaces/products'
import { searchProducts } from 'services/searchProducts'

export type DataSearchProduct =
  | {
      message: string
    }
  | Product[]

export default function handler(req: NextApiRequest, res: NextApiResponse<DataSearchProduct>) {
  switch (req.method) {
    case 'GET':
      return searchProducts(req, res)

    default:
      res.setHeader('Allow', ['GET'])

      return res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
