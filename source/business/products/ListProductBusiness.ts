import { CustomError } from '../../helpers/errors'
import ProductQueries from '../../queries/ProductQueries'

class ListProductBusiness {
  async execute () {
    const products = await ProductQueries.find()
    if (!products) throw new CustomError('Produtos não encontrados!', 400)

    return products
  }
}

export default new ListProductBusiness()
