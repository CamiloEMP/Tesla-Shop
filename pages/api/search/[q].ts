import type { NextApiRequest, NextApiResponse } from 'next'

import { Product } from 'interfaces/products'
import { searchProducts } from 'services/searchProducts'

export type DataSearchProduct =
  | {
      message: string
    }
  | Product[]

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<DataSearchProduct>
) {
  switch (req.method) {
    case 'GET':
      const { q = '' } = req.query

      if (q.length === 0) res.status(400)
      const products = await searchProducts(`${q}`)

      return res.status(200).json(products)
    default:
      res.setHeader('Allow', ['GET'])

      return res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
