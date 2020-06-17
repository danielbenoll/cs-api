'use strict'

const AbstractValidator = use('App/Validators/AbstractValidator')

class Modo extends AbstractValidator{
  get rules () {
    return {
      modo: 'required|unique:modos|max:45|min:2',
      descricao: 'required|max:400',
    }
  }
}

module.exports = Modo
