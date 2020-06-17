'use strict'

const AbstractValidator = use('App/Validators/AbstractValidator')

class Secao extends AbstractValidator{
  get rules () {
    return {
      nome: 'required|unique:secoes|max:45',
      descricao: 'required|max:200',
    }
  }
}

module.exports = Secao
