'use strict'

const AbstractValidator = use('App/Validators/AbstractValidator')

class Classe extends AbstractValidator{
  get rules () {
    const id = this.ctx.params.id
    return {
      lado: `unique:classes,id,${this.id}|required|max:45`,
      descricao: 'required|max:200',
      img: 'max:700'
    }
  }
}

module.exports = Classe
