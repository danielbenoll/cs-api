'use strict'

const AbstractValidator = use('App/Validators/AbstractValidator')

class MapaModo extends AbstractValidator{
  get rules () {
    return {
      mapa_id: 'integer|required',
      modo_id: 'integer|required',
    }
  }
}

module.exports = MapaModo
