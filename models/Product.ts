import mongoose, { Model, Schema, model } from 'mongoose'

import { Product } from 'interfaces/products'

const productSchema = new Schema(
  {
    description: {
      type: String,
      required: true,
    },
    images: [
      {
        type: String,
      },
    ],
    inStock: {
      type: Number,
      required: true,
      default: 1,
    },
    price: {
      type: Number,
      required: true,
    },
    sizes: [
      {
        type: String,
        enum: {
          values: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
          message: '{VALUE} no es un tamaño válido',
        },
      },
    ],
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    tags: [
      {
        type: String,
      },
    ],
    title: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: {
        values: ['shirts', 'pants', 'hoodies', 'hats'],
        message: '{VALUE} no es un tipo válido',
      },
    },
    gender: {
      type: String,
      enum: {
        values: ['men', 'women', 'kid', 'unisex'],
        message: '{VALUE} no es un genero válido',
      },
    },
  },
  {
    timestamps: true,
  }
)

export const ProductModel: Model<Product> =
  mongoose.models.Product ?? model('Product', productSchema)
