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
      {id: '1', lado: 'Terrorista', descricao: 'Pessoa partidária do terrorismo ou que pratica atos de terrorismo.', img: 'https://my-test-11.slatic.net/shop/c01b3903f9eb00099a71c8b3f2aac09a.png'},
      {id: '2', lado: 'Contra Terrorista', descricao:'Grupo governamental, contra o ato de terrorismo.', img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3e50fc94-a1de-4734-b30c-23be84b8b0b5/ddbr62c-215a537a-1b25-4792-8a68-77b0acd1ef7a.png/v1/fill/w_1280,h_1280,strp/cs_go___counter_terrorists_logo_by_starkevan_ddbr62c-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0xMjgwIiwicGF0aCI6IlwvZlwvM2U1MGZjOTQtYTFkZS00NzM0LWIzMGMtMjNiZTg0YjhiMGI1XC9kZGJyNjJjLTIxNWE1MzdhLTFiMjUtNDc5Mi04YTY4LTc3YjBhY2QxZWY3YS5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.5k3PeAZQ3ZWAR6fP36X2Ne1W3f_n1Uti-W3q2i46kP4'},
    ])
  }
}

module.exports = ClasseSeeder
