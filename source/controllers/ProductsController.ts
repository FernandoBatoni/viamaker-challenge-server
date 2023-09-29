import { type Request, type Response, Router } from 'express'

import ListProductBusiness from '../business/Products/ListProductBusiness'
import { CustomErrorResponse } from '../helpers/errors'

const ProductController = Router()

//* [GET ALL]
ProductController.get('', async (_: Request, response: Response) => {
  try {
    const products = await ListProductBusiness.execute()

    response.send_ok('Produtos encontrados com sucesso', products)
  } catch (error) {
    return CustomErrorResponse(response, error)
  }
})

export default ProductController
