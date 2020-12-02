'use strict'

const AbstractValidator = use('App/Validators/AbstractValidator')

class Secao extends AbstractValidator{
  get rules () {
    const id = this.ctx.params.id
    return {
      nome: `required|unique:secoes,id,${this.id}|max:45`,
      descricao: 'required|max:200',
    }
  }
}

module.exports = Secao
