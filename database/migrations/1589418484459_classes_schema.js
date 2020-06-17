'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClassesSchema extends Schema {
  up () {
    this.create('classes', (table) => {
      table.increments()
      table.string('lado', 45).notNullable().unique()
      table.string('descricao', 200).notNullable()
      table.string('img', 100)
      table.timestamps()
    })
  }

  down () {
    this.drop('classes')
  }
}

module.exports = ClassesSchema
