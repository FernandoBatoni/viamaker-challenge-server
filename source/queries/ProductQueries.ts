import { type IProduct } from '../interfaces/IProduct'
import Product from '../models/Product'
import AbstractQueries from './AbstractQueries'

class ProductQueries extends AbstractQueries<IProduct.Document, IProduct.Schema> {
  constructor () {
    super(Product)
  }
}

export default new ProductQueries()
