import { NextApiRequest, NextApiResponse } from 'next'

import { db } from 'db/db'
import { ProductModel } from 'models/Product'
import { DataProduct } from 'pages/api/products'
import { SHOP_CONSTANTS } from 'db/constants'

export const getProducts = async (req: NextApiRequest, res: NextApiResponse<DataProduct>) => {
  const { gender = 'all' } = req.query

  let condition = {}

  if (gender !== 'all' && SHOP_CONSTANTS.validGenders.includes(`${gender}`)) {
    condition = { gender }
  }

  await db.connect()
  const products = await ProductModel.find(condition)
    .select('title images price inStock slug -_id')
    .lean()

  await db.disconnect()

  return res.status(200).json(products)
}
