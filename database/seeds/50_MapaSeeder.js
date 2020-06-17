'use strict'

/*
|--------------------------------------------------------------------------
| MapaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Mapa = use('App/Models/Mapa')

class MapaSeeder {
  async run () {
    await Mapa.createMany([
      {id: '1', pais_id: '1', nome: 'Cache'},
      {id: '2', pais_id: '4', nome: 'Cobblestone'},
      {id: '3', pais_id: '9', nome: 'Dust II'},
      {id: '4', pais_id: '2', nome: 'Inferno'},
      {id: '5', pais_id: '3', nome: 'Mirage'},
      {id: '6', pais_id: '4', nome: 'Nuke'},
      {id: '7', pais_id: '5', nome: 'Overpass'},
      {id: '8', pais_id: '1', nome: 'Train'},
      {id: '9', pais_id: '4', nome: 'Vertigo'},
      {id: '10', pais_id: '4', nome: 'Baggage'},
      {id: '11', pais_id: '4', nome: 'Safe House'},
      {id: '12', pais_id: '4', nome: 'Lake'},
      {id: '13', pais_id: '5', nome: 'Monastery'},
      {id: '14', pais_id: '7', nome: 'Shoots'},
      {id: '15', pais_id: '8', nome: 'St. Mark'},
      {id: '16', pais_id: '2', nome: 'Italy'},
      {id: '17', pais_id: '4', nome: 'Office'},
      {id: '18', pais_id: '4', nome: 'Assault'},
      {id: '19', pais_id: '4', nome: 'Militia'},
      {id: '20', pais_id: '4', nome: 'Bank'},
    ])
  }
}

module.exports = MapaSeeder
