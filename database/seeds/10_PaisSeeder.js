'use strict'

/*
|--------------------------------------------------------------------------
| PaisSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Pais = use('App/Models/Pais')

class PaisSeeder {
  async run () {
    await Pais.createMany([
      {id: '1', local: 'Rússia', bandeira: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/1920px-Flag_of_Russia.svg.png'},
      {id: '2', local: 'Itália', bandeira: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/800px-Flag_of_Italy.svg.png'},
      {id: '3', local: 'Arábia Saldita', bandeira: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/1920px-Flag_of_Saudi_Arabia.svg.png'},
      {id: '4', local: 'Estados Unidos', bandeira: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/800px-Flag_of_the_United_States.svg.png'},
      {id: '5', local: 'Alemanha', bandeira: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/1920px-Flag_of_Germany.svg.png'},
      {id: '6', local: 'França', bandeira: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg'},
      {id: '7', local: 'Vietnã', bandeira: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1200px-Flag_of_Vietnam.svg.png'},
      {id: '8', local: 'Haiti', bandeira: 'https://4.bp.blogspot.com/_jC1nqRX_tfY/S78hr1ajCbI/AAAAAAAAAAk/LmaJ5KBTjbk/s320/Haiti-flag.png'},
      {id: '9', local: 'Israel', bandeira: 'https://img.freepik.com/vetores-gratis/ilustracao-da-bandeira-de-israel_53876-27122.jpg?size=626&ext=jpg'},
      {id: '10', local: 'Reino Unido', bandeira: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_the_United_Kingdom.svg/290px-Flag_of_the_United_Kingdom.svg.png'},
      {id: '11', local: 'Desconhecido', bandeira: 'https://image.flaticon.com/icons/png/512/18/18436.png'},
      {id: '12', local: 'Somalia', bandeira: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Flag_of_Somalia.svg/1920px-Flag_of_Somalia.svg.png'},
      {id: '13', local: 'Áustria', bandeira: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_Austria.svg/1024px-Flag_of_Austria.svg.png'},
      {id: '14', local: 'Belgica', bandeira: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Belgium.svg/1024px-Flag_of_Belgium.svg.png'},
      {id: '15', local: 'República Checa', bandeira: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/1920px-Flag_of_the_Czech_Republic.svg.png'},
      {id: '16', local: 'Suíça', bandeira: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Flag_of_Switzerland_%28Pantone%29.svg/1024px-Flag_of_Switzerland_%28Pantone%29.svg.png'},
      {id: '17', local: 'África do Sul', bandeira: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_of_South_Africa.svg/1024px-Flag_of_South_Africa.svg.png'},
    ])
  }
}

module.exports = PaisSeeder
