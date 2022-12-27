import { NextApiRequest, NextApiResponse } from 'next'

import { db } from 'db/db'
import { ProductModel } from 'models/Product'
import { DataSearchProduct } from 'pages/api/search/[q]'

export const searchProducts = async (
  req: NextApiRequest,
  res: NextApiResponse<DataSearchProduct>
) => {
  let { q = '' } = req.query

  if (q.length === 0) res.status(400)

  q = q.toString().toLowerCase()

  await db.connect()
  const products = await ProductModel.find({
    $text: { $search: q },
  })
    .select('title images price inStock slug -_id')
    .lean()

  await db.disconnect()

  return res.status(200).json(products)
}
