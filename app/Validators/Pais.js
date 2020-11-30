'use strict'

const AbstractValidator = use('App/Validators/AbstractValidator')

class Pais extends AbstractValidator{
  get rules () {
    return {
      local: 'required|unique:paises|max:45',
      bandeira: 'max:280',
    }
  }
}

module.exports = Pais
