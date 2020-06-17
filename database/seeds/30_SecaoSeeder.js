'use strict'

/*
|--------------------------------------------------------------------------
| SecaoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Secao = use('App/Models/Secao')

class SecaoSeeder {
  async run () {
    await Secao.createMany([
      {id: '1', nome: 'Facas', descricao: 'Instrumento constituído por lâmina cortante presa a um cabo.'},
      {id: '2', nome: 'Pistolas', descricao: 'Arma de fogo portátil, que se dispara com uma só mão.'},
      {id: '3', nome: "SMG's", descricao: 'Metralhadora de tamanho e calibre pequenos.'},
      {id: '4', nome: 'Rifles', descricao: 'Carabina de cano longo.'},
      {id: '5', nome: 'Pesadas', descricao: 'Arma de fogo portátil, de cano comprido e com coronha própria para apoiar no ombro.'},
      {id: '6', nome: 'Granadas', descricao: 'Artefato bélico que contém explosivo ou agente químico (incendiário, fumígeno ou lacrimogêneo) e que se lança com a mão.'},
      {id: '7', nome: 'Equipamento', descricao: 'Composto por itens (vestuário, objetos, ferramentas, recursos, etc.) necessários para o exercício eficiente de um trabalho, função ou missão.'},
    ])
  }
}

module.exports = SecaoSeeder
