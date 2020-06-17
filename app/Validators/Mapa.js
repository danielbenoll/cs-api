'use strict'

const AbstractValidator = use('App/Validators/AbstractValidator')

class Mapa extends AbstractValidator{
  get rules () {
    return {
      pais_id: 'integer|required',
      nome: 'required|unique:mapas|max:45|min:2',
    }
  }
}

module.exports = Mapa
