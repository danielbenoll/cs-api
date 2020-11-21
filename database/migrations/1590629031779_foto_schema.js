'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FotoSchema extends Schema {
  up () {
    this.create('fotos', (table) => {
      table.increments()
      table.integer('mapa_id').unsigned().references('id').inTable('mapas').notNullable()
      table.string('foto', 280).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('fotos')
  }
}

module.exports = FotoSchema
