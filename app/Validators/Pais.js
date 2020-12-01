'use strict'

const AbstractValidator = use('App/Validators/AbstractValidator')

class Pais extends AbstractValidator{
  get rules () {
    return {
      local: 'required|unique:paises|max:45',
      bandeira: 'max:400',
    }
  }
}

module.exports = Pais
