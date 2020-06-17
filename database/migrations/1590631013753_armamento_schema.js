'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ArmamentoSchema extends Schema {
  up () {
    this.create('armamentos', (table) => {
      table.increments()
      table.integer('classe_id').unsigned().references('id').inTable('classes')
      table.integer('secao_id').unsigned().references('id').inTable('secoes').notNullable()
      table.integer('pais_id').unsigned().references('id').inTable('paises')
      table.string('nome', 45).notNullable().unique()
      table.string('descricao', 400).notNullable()
      table.string('foto', 200)
      table.timestamps()
    })
  }

  down () {
    this.drop('armamentos')
  }
}
module.exports = ArmamentoSchema
