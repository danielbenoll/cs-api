'use strict'

const AbstractValidator = use('App/Validators/AbstractValidator')

class Foto extends AbstractValidator{
  get rules () {
    return {
      mapa_id: 'integer|required',
      foto: 'required|max:100',
    }
  }
}

module.exports = Foto
