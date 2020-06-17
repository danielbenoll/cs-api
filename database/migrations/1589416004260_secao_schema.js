'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SecaoSchema extends Schema {
  up () {
    this.create('secoes', (table) => {
      table.increments()
      table.string('nome', 45).notNullable().unique()
      table.string('descricao', 200).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('secoes')
  }
}

module.exports = SecaoSchema
