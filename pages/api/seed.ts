import type { NextApiRequest, NextApiResponse } from 'next'

import { db } from 'db/db'
import { ProductModel } from 'models/Product'
import { initialData } from 'data/products'

type Data = {
  message: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (process.env.NODE_ENV === 'production')
    return res.status(401).json({
      message: 'No tiene acceso a este servicio',
    })

  await db.connect()

  await ProductModel.deleteMany()
  await ProductModel.insertMany(initialData.products)
  await db.disconnect()

  res.status(200).json({ message: 'Done' })
}
