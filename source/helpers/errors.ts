import { type Response } from 'express'

export class CustomError {
  public readonly message: string

  public readonly code: number

  public readonly data: any

  public readonly path: string

  constructor (message, code, data?: any, path?: string) {
    this.code = code
    this.message = message
    this.data = data
    this.path = path
  }
}

export const ResponseError = async (response: Response, code: number, message: string, data: any) => {
  switch (code) {
    case 200:
      response.send_ok(message, data)
      break
    case 400:
      response.send_badRequest(message, data)
      break
    case 401:
      response.send_unauthorized(message, data)
      break
    case 403:
      response.send_forbidden(message, data)
      break
    case 404:
      response.send_notFound(message, data)
      break
    case 409:
      response.send_conflict(message, data)
      break
    case 410:
      response.send_gone(message, data)
      break
    case 418:
      response.send_imATeapot(message, data)
      break
    case 422:
      response.send_unprocessableEntity(message, data)
      break
    case 500:
      console.warn({ message, data })
      response.send_internalServerError(message, data)
      break
    case 503:
      console.warn({ message, data })
      response.send_badGateway(message, data)
      break
    default:
      console.warn({ message, data })
      response.send_internalServerError('Ocorreu um erro! Tente novamente mais tarde.', data)
      break
  }
}

export const CustomErrorResponse = async (response: Response, customError: CustomError) => {
  const { code, message, data } = customError
  return ResponseError(response, code, message, data)
}
