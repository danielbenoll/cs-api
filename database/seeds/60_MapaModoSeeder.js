'use strict'

/*
|--------------------------------------------------------------------------
| MapaModoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const MapaModo = use('App/Models/MapaModo')

class MapaModoSeeder {
  async run () {
    await MapaModo.createMany([
      {id: '1', mapa_id: '1', modo_id: '1'},
      {id: '2', mapa_id: '1', modo_id: '2'},
      {id: '3', mapa_id: '2', modo_id: '1'},
      {id: '4', mapa_id: '2', modo_id: '2'},
      {id: '5', mapa_id: '3', modo_id: '1'},
      {id: '6', mapa_id: '3', modo_id: '2'},
      {id: '7', mapa_id: '4', modo_id: '1'},
      {id: '8', mapa_id: '4', modo_id: '2'},
      {id: '9', mapa_id: '5', modo_id: '1'},
      {id: '10', mapa_id: '5', modo_id: '2'},
      {id: '11', mapa_id: '6', modo_id: '1'},
      {id: '12', mapa_id: '6', modo_id: '2'},
      {id: '13', mapa_id: '7', modo_id: '1'},
      {id: '14', mapa_id: '7', modo_id: '2'},
      {id: '15', mapa_id: '8', modo_id: '1'},
			{id: '16', mapa_id: '8', modo_id: '2'},
      {id: '17', mapa_id: '9', modo_id: '1'},
      {id: '18', mapa_id: '9', modo_id: '2'},
      {id: '19', mapa_id: '10', modo_id: '4'},
      {id: '20', mapa_id: '11', modo_id: '4'},
      {id: '21', mapa_id: '12', modo_id: '4'},
      {id: '22', mapa_id: '13', modo_id: '4'},
      {id: '23', mapa_id: '14', modo_id: '4'},
      {id: '24', mapa_id: '15', modo_id: '4'},
			{id: '25', mapa_id: '16', modo_id: '5'},
      {id: '26', mapa_id: '17', modo_id: '5'},
      {id: '27', mapa_id: '18', modo_id: '5'},
      {id: '28', mapa_id: '19', modo_id: '5'},
      {id: '29', mapa_id: '20', modo_id: '3'},
			{id: '30', mapa_id: '11', modo_id: '3'},
      {id: '31', mapa_id: '12', modo_id: '3'},
      {id: '42', mapa_id: '15', modo_id: '3'},
      {id: '43', mapa_id: '17', modo_id: '1'},
      {id: '44', mapa_id: '18', modo_id: '1'},
      {id: '45', mapa_id: '19', modo_id: '1'},
      {id: '46', mapa_id: '16', modo_id: '1'},
    ])
  }
}

module.exports = MapaModoSeeder
