'use strict'

const AbstractValidator = use('App/Validators/AbstractValidator')

class Armamento extends AbstractValidator{
  get rules () {
    return {
      classe_id: 'integer',
      secao_id: 'integer|required',
      pais_id: 'integer',
      nome: 'required|unique:armamentos|max:45|min:2',
      descricao: 'required|max:400',
      foto: 'max:400',
    }
  }
}

module.exports = Armamento
