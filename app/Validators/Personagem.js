'use strict'

const AbstractValidator = use('App/Validators/AbstractValidator')

class Personagem extends AbstractValidator{
  get rules () {
    return {
      pais_id: 'integer|required',
      classe_id: 'integer|required',
      nome: 'required|unique:personagens|max:45',
      foto: 'max:400',
    }
  }
}

module.exports = Personagem
