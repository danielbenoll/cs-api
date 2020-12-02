'use strict'

const AbstractValidator = use('App/Validators/AbstractValidator')

class Mapa extends AbstractValidator{
  get rules () {
    const id = this.ctx.params.id
    return {
      pais_id: 'integer|required',
      nome: `required|unique:mapas,id,${this.id}|max:45|min:2`,
    }
  }
}

module.exports = Mapa
