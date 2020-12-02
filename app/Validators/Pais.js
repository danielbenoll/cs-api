'use strict'

const AbstractValidator = use('App/Validators/AbstractValidator')

class Pais extends AbstractValidator{
  get rules () {
    const id = this.ctx.params.id
    return {
      local: `required|unique:paises,id,${this.id}|max:45`,
      bandeira: 'max:400',
    }
  }
}

module.exports = Pais
