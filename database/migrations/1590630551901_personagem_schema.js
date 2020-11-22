'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PersonagemSchema extends Schema {
  up () {
    this.create('personagens', (table) => {
      table.increments()
      table.integer('pais_id').unsigned().references('id').inTable('paises').notNullable()
      table.integer('classe_id').unsigned().references('id').inTable('classes').notNullable()
      table.string('nome', 45).notNullable().unique()
      table.string('foto', 150)
      table.timestamps()
    })
  }

  down () {
    this.drop('personagens')
  }
}

module.exports = PersonagemSchema
