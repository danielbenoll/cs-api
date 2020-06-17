'use strict'

/*
|--------------------------------------------------------------------------
| PersonagemSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Personagem = use('App/Models/Personagem')

class PersonagemSeeder {
  async run () {
    await Personagem.createMany([
      {id: '1', pais_id: '6', classe_id: '2', nome: 'GIGN', foto: 'https://vignette.wikia.nocookie.net/cswikia/images/7/76/Gign_closeup.png/revision/latest?cb=20130203112954'},
      {id: '2', pais_id: '5', classe_id: '2', nome: 'GSG-9', foto: 'https://vignette.wikia.nocookie.net/cswikia/images/d/df/GSG9.png/revision/latest?cb=20140826222754'},
      {id: '3', pais_id: '9', classe_id: '2', nome: 'IDF', foto: 'https://vignette.wikia.nocookie.net/cswikia/images/7/73/IDF.png/revision/latest?cb=20140827092940'},
      {id: '4', pais_id: '4', classe_id: '2', nome: 'FBI', foto: 'https://vignette.wikia.nocookie.net/cswikia/images/b/b6/FBI.png/revision/latest/scale-to-width-down/310?cb=20181222212803'},
      {id: '5', pais_id: '10', classe_id: '2', nome: 'SAS', foto: 'https://vignette.wikia.nocookie.net/cswikia/images/5/5b/Sas-0.jpg/revision/latest?cb=20161214211219'},
      {id: '6', pais_id: '4', classe_id: '2', nome: 'SEAL Team 6', foto: 'https://vignette.wikia.nocookie.net/cswikia/images/3/3d/ST6.png/revision/latest?cb=20140827091321'},
      {id: '7', pais_id: '4', classe_id: '2', nome: 'SWAT', foto: 'https://vignette.wikia.nocookie.net/cswikia/images/b/b1/SWAT.png/revision/latest?cb=20140827092522'},
      {id: '8', pais_id: '4', classe_id: '1', nome: 'Anarchist', foto: 'https://vignette.wikia.nocookie.net/cswikia/images/3/3e/T_anarchist.png/revision/latest?cb=20120913071552'},
      {id: '9', pais_id: '1', classe_id: '1', nome: 'Balkan', foto: 'https://vignette.wikia.nocookie.net/cswikia/images/6/69/T_balkan.png/revision/latest?cb=20121231164054'},
      {id: '10', pais_id: '3', classe_id: '1', nome: 'Elite Crew', foto: 'https://vignette.wikia.nocookie.net/cswikia/images/b/bb/Leet_closeup.jpg/revision/latest?cb=20171011110523'},
      {id: '11', pais_id: '11', classe_id: '1', nome: 'Phoenix Connexion', foto: 'https://vignette.wikia.nocookie.net/cswikia/images/6/60/Phoenix_closeup.jpg/revision/latest?cb=20170524151213'},
      {id: '12', pais_id: '12', classe_id: '1', nome: 'Pirate', foto: 'https://vignette.wikia.nocookie.net/cswikia/images/9/9e/T_pirate.png/revision/latest?cb=20120913115525'},
      {id: '13', pais_id: '4', classe_id: '1', nome: 'Professional', foto: 'https://vignette.wikia.nocookie.net/cswikia/images/e/e2/T_prof.png/revision/latest?cb=20130211110016'},
      {id: '14', pais_id: '6', classe_id: '1', nome: 'Separatist', foto: 'https://vignette.wikia.nocookie.net/cswikia/images/8/83/T_separatist.png/revision/latest?cb=20130119102135'},
    ])
  }
}

module.exports = PersonagemSeeder
