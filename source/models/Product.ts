import mongoose from 'mongoose'

import { type IProduct } from '../interfaces/IProduct'
import ProductSchema from '../schema/ProductSchema'

interface IProductModel extends mongoose.Model<IProduct.Document> {}

const Products: mongoose.Schema = new mongoose.Schema(ProductSchema.schema, { timestamps: true })

export default mongoose.model<IProduct.Document, IProductModel>('Products', Products)
