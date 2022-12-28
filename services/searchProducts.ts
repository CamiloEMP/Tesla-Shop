import { db } from 'db/db'
import { ProductModel } from 'models/Product'

export const searchProducts = async (q: string) => {
  const query = q.toString().toLowerCase()

  await db.connect()
  const products = await ProductModel.find({
    $text: { $search: query },
  })
    .select('title images price inStock slug -_id')
    .lean()

  await db.disconnect()

  return products
}
