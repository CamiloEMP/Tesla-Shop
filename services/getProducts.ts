import { db } from 'db/db'
import { ProductModel } from 'models/Product'

interface Props {
  findCondition?: {
    [key: string]: string
  }
  fieldsSelected?: string
}

export const getProducts = async ({ fieldsSelected = '', findCondition = {} }: Props) => {
  await db.connect()
  const products = await ProductModel.find(findCondition).select(fieldsSelected).lean()

  await db.disconnect()

  return products
}
