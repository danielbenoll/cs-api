'use strict'

const AbstractValidator = use('App/Validators/AbstractValidator')

class User extends AbstractValidator{
  get rules () {
    return {
      nome: 'required|unique:users|max:80',
      email: 'required|unique:users|max:250',
      senha: 'required|max:60',
    }
  }
}

module.exports = User
