import { db } from 'db/db'
import { Product } from 'interfaces/products'
import { ProductModel } from 'models/Product'

export const getProductBySlug = async (slug: string): Promise<Product | null> => {
  await db.connect()
  const product = await ProductModel.findOne({
    slug,
  }).lean()

  await db.disconnect()

  if (!product) return null

  return JSON.parse(JSON.stringify(product))
}
