'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ModosSchema extends Schema {
  up () {
    this.create('modos', (table) => {
      table.increments()
      table.string('modo', 45).notNullable().unique()
      table.string('descricao', 400).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('modos')
  }
}

module.exports = ModosSchema
