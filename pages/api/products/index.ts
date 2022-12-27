import type { NextApiRequest, NextApiResponse } from 'next'

import { Product } from 'interfaces/products'
import { getProducts } from 'services'

export type DataProduct =
  | {
      message: string
    }
  | Product[]

export default function handler(req: NextApiRequest, res: NextApiResponse<DataProduct>) {
  switch (req.method) {
    case 'GET':
      return getProducts(req, res)

    default:
      res.setHeader('Allow', ['GET'])

      return res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
