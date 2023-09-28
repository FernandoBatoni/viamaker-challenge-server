import dayjs from 'dayjs'
import mongoose from 'mongoose'

const objectId = (variable: any): boolean =>
  Boolean(mongoose.Types.ObjectId.isValid(variable))

const number = (variable: any): boolean => !isNaN(variable)

const string = (variable: any): boolean =>
  typeof variable === 'string' || variable instanceof String

const array = (variable: any): boolean => Array.isArray(variable)

const date = (variable: string): boolean => !isNaN(dayjs(variable).date())

const undef = (variable: any): boolean => typeof variable === 'undefined'

const positive = (variable: any): boolean => number(variable) && Boolean(Math.sign(variable))

const boolean = (variable: any): boolean =>
  ['true', true, 1, '1', 'false', false, 0, '0'].includes(variable)

const email = (variable: any): boolean =>
  /^[^\s@]+@[^\s@]+.[^\s@]+$/.test(variable)

const object = (variable: any): boolean => typeof variable === 'object'

const zipcode = (variable: any): boolean =>
  typeof variable === 'string' && variable.length === 8

const stringNumber = (variables: any): boolean => !/\D/i.test(variables)

const truly = (variables: any): boolean =>
  ['true', true, 1, '1'].includes(variables)

const falsely = (variables: any): boolean =>
  ['false', false, 0, '0'].includes(variables)

const typeNumber = (variable: any): boolean => !isNaN(variable) && typeof variable === 'number'

const Null = (variable: any): boolean => ['', undefined, null].includes(variable)

const link = (variable: string): boolean => /^https?:\/\/[a-zA-Z0-9*-]+(?:\.[a-zA-Z0-9-]+)+/.test(variable)

const externalLink = (variable, productSlug?: string) => {
  if (!variable) return false

  const isBmgProduct = productSlug ? productSlug.toLowerCase().includes('bmg') : false

  return isBmgProduct
    ? variable.toLowerCase().includes('bmg') && /^https?:\/\/[a-zA-Z0-9*-]+(?:\.[a-zA-Z0-9-]+)+/.test(variable)
    : /^https?:\/\/[a-zA-Z0-9*-]+(?:\.[a-zA-Z0-9-]+)+/.test(variable)
}

export default {
  boolean,
  objectId,
  number,
  string,
  array,
  date,
  undef,
  positive,
  email,
  object,
  zipcode,
  stringNumber,
  truly,
  falsely,
  typeNumber,
  Null,
  link,
  externalLink
}
