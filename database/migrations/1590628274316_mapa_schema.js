'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MapaSchema extends Schema {
  up () {
    this.create('mapas', (table) => {
      table.increments()
      table.integer('pais_id').unsigned().references('id').inTable('paises').notNullable()
      table.string('nome', 45).notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('mapas')
  }
}

module.exports = MapaSchema
