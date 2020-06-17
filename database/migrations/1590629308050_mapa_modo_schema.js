'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MapaModoSchema extends Schema {
  up () {
    this.create('mapa_modos', (table) => {
      table.increments()
      table.integer('mapa_id').unsigned().references('id').inTable('mapas').notNullable()
      table.integer('modo_id').unsigned().references('id').inTable('modos').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('mapa_modos')
  }
}

module.exports = MapaModoSchema
