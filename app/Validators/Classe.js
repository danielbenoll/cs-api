'use strict'

const AbstractValidator = use('App/Validators/AbstractValidator')

class Classe extends AbstractValidator{
  get rules () {
    return {
      lado: 'required|unique:classes|max:45',
      descricao: 'required|max:200',
      img: 'max:100'
    }
  }
}

module.exports = Classe
