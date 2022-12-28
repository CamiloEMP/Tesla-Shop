import type { NextApiRequest, NextApiResponse } from 'next'

import { Product } from 'interfaces/products'
import { getProducts } from 'services'
import { SHOP_CONSTANTS } from 'db/constants'

export type DataProduct =
  | {
      message: string
    }
  | Product[]

export default async function handler(req: NextApiRequest, res: NextApiResponse<DataProduct>) {
  switch (req.method) {
    case 'GET':
      const { gender = 'all' } = req.query

      let condition = {}

      if (gender !== 'all' && SHOP_CONSTANTS.validGenders.includes(`${gender}`)) {
        condition = { gender }
      }

      const fieldsSelected = 'title images price inStock slug -_id'

      const products = await getProducts({
        fieldsSelected,
        findCondition: condition,
      })

      return res.status(200).json(products)

    default:
      res.setHeader('Allow', ['GET'])

      return res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
