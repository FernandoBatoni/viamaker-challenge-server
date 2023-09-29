import requestCheck from 'request-check'

import validators from '../helpers/validators'

const UserRules = {
  create: (...args) => {
    const validator = requestCheck()
    validator.requiredMessage = 'Campo obrigatório!'

    validator.addRule('name', {
      validator: (value) => validators.name(value),
      message: 'Nome é inválido'
    })

    validator.addRule('email', {
      validator: (value) => validators.email(value),
      message: 'Email é inválido'
    })

    return validator.check(...args)
  }
}

export default UserRules
