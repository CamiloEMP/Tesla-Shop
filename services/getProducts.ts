import { NextApiRequest, NextApiResponse } from 'next'

import { db } from 'db/db'
import { ProductModel } from 'models/Product'
import { DataProduct } from 'pages/api/products'

export const getProducts = async (req: NextApiRequest, res: NextApiResponse<DataProduct>) => {
  await db.connect()
  const products = await ProductModel.find().select('title images price inStock slug -_id').lean()

  await db.disconnect()

  return res.status(200).json(products)
}
