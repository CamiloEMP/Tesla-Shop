import { NextApiRequest, NextApiResponse } from 'next'

import { db } from 'db/db'
import { ProductModel } from 'models/Product'
import { DataProductSlug } from 'pages/api/products/[slug]'

export const getProductBySlug = async (
  req: NextApiRequest,
  res: NextApiResponse<DataProductSlug>
) => {
  const { slug } = req.query

  await db.connect()
  const product = await ProductModel.findOne({
    slug,
  }).lean()

  await db.disconnect()

  if (!product)
    return res.status(404).json({
      message: 'El producto no existe',
    })

  return res.status(200).json(product)
}
