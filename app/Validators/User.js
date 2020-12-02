'use strict'

const AbstractValidator = use('App/Validators/AbstractValidator')

class User extends AbstractValidator{
  get rules () {
    const id = this.ctx.params.id
    return {
      nome: `required|unique:users,id,${this.id}|max:80`,
      email: `required|unique:users,id,${this.id}|max:250`,
      senha: 'required|max:60',
    }
  }
}

module.exports = User
