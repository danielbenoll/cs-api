'use strict'

const AbstractValidator = use('App/Validators/AbstractValidator')

class Classe extends AbstractValidator{
  get rules () {
    return {
      lado: 'required|max:45',
      descricao: 'required|max:200',
      img: 'max:700'
    }
  }
}

module.exports = Classe
