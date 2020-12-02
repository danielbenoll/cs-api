'use strict'

const AbstractValidator = use('App/Validators/AbstractValidator')

class Modo extends AbstractValidator{
  get rules () {
    const id = this.ctx.params.id
    return {
      modo: `required|unique:modos,id,${this.id}|max:45|min:2`,
      descricao: 'required|max:400',
    }
  }
}

module.exports = Modo
