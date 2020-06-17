'use strict'

/*
|--------------------------------------------------------------------------
| ClasseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Classe = use('App/Models/Classe')

class ClasseSeeder {
  async run () {
    await Classe.createMany([
      {id: '1', lado: 'Terrorista', descricao: 'Pessoa partidária do terrorismo ou que pratica atos de terrorismo.', img: 'https://c7.uihere.com/files/986/216/943/counter-strike-global-offensive-counter-strike-source-logo-astralis-csgo.jpg'},
      {id: '2', lado: 'Contra Terrorista', descricao:'Grupo governamental, contra o ato de terrorismo.', img: 'https://i7.pngflow.com/pngimage/674/486/png-counter-strike-global-offensive-logo-counter-terrorism-mirage-video-game-dota-2-pixel-art-symbol-clipart-thumb.png'},
    ])
  }
}

module.exports = ClasseSeeder
