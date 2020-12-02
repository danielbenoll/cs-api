'use strict'

const AbstractValidator = use('App/Validators/AbstractValidator')

class Personagem extends AbstractValidator{
  get rules () {
    const id = this.ctx.params.id
    return {
      pais_id: 'integer|required',
      classe_id: 'integer|required',
      nome: `required|unique:personagens,id,${this.id}|max:45`,
      foto: 'max:400',
    }
  }
}

module.exports = Personagem
