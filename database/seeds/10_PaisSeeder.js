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
      {id: '1', local: 'Rússia', bandeira: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpt.wikipedia.org%2Fwiki%2FBandeira_da_R%25C3%25BAssia&psig=AOvVaw272nT41nbBFLXc_6aJqJUS&ust=1591820053111000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIjg4fnF9ekCFQAAAAAdAAAAABAE'},
      {id: '2', local: 'Itália', bandeira: 'https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.bandeiras-nacionais.com%2Fbandeira-italia.html&psig=AOvVaw0cBu0KA2WusxoDa3xO4-NT&ust=1591820072381000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPi-vYDG9ekCFQAAAAAdAAAAABAD'},
      {id: '3', local: 'Arábia Saldita', bandeira: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpt.wikipedia.org%2Fwiki%2FBandeira_da_Ar%25C3%25A1bia_Saudita&psig=AOvVaw3VZ9_1TOlh6b6UeDIjEyrw&ust=1591820086826000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJi6tIfG9ekCFQAAAAAdAAAAABAD'},
      {id: '4', local: 'Estados Unidos', bandeira: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpt.wikipedia.org%2Fwiki%2FBandeira_dos_Estados_Unidos&psig=AOvVaw2UVoLakgb8LekN0yb8YHM3&ust=1591820103474000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLCXpY_G9ekCFQAAAAAdAAAAABAO'},
      {id: '5', local: 'Alemanha', bandeira: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpt.wikipedia.org%2Fwiki%2FBandeira_da_Alemanha&psig=AOvVaw0ElX96m6--M0YoIBse9AMm&ust=1591820140445000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMDZ86DG9ekCFQAAAAAdAAAAABAD'},
      {id: '6', local: 'França', bandeira: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg'},
      {id: '7', local: 'Vietnã', bandeira: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1200px-Flag_of_Vietnam.svg.png'},
      {id: '8', local: 'Haiti', bandeira: 'https://4.bp.blogspot.com/_jC1nqRX_tfY/S78hr1ajCbI/AAAAAAAAAAk/LmaJ5KBTjbk/s320/Haiti-flag.png'},
      {id: '9', local: 'Israel', bandeira: 'https://img.freepik.com/vetores-gratis/ilustracao-da-bandeira-de-israel_53876-27122.jpg?size=626&ext=jpg'},
      {id: '10', local: 'Reino Unido', bandeira: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_the_United_Kingdom.svg/290px-Flag_of_the_United_Kingdom.svg.png'},
      {id: '11', local: 'Desconhecido', bandeira: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.freepik.com%2Ficones-gratis%2Fponto-de-interrogacao-branco-sobre-um-fundo-preto-circular_750291.htm&psig=AOvVaw3bHTKe2oBSuaBdv8zpGF8x&ust=1591822463187000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLCux_TO9ekCFQAAAAAdAAAAABA8'},
      {id: '12', local: 'Somalia', bandeira: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpt.wikipedia.org%2Fwiki%2FBandeira_da_Som%25C3%25A1lia&psig=AOvVaw2rM5CuKBG2EpR3PqZWEL2g&ust=1591822586330000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPj-mq_P9ekCFQAAAAAdAAAAABAD'},
      {id: '13', local: 'Áustria', bandeira: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_Austria.svg/1024px-Flag_of_Austria.svg.png'},
      {id: '14', local: 'Belgica', bandeira: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpt.wikipedia.org%2Fwiki%2FBandeira_da_B%25C3%25A9lgica&psig=AOvVaw2cpqSlJAzVy2oyq923veee&ust=1591823973827000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOCW-sTU9ekCFQAAAAAdAAAAABAD'},
      {id: '15', local: 'República Checa', bandeira: 'https://lh3.googleusercontent.com/proxy/hzxTzmxOkYW7eY6gy36dEsGqDhPZxmxJkIeHLfIh7E8WxEm6R3v7NRkssQ_EjmoRCE1C0xajYVsqqxdoZKPULDNWzD__JtgGLvzao0gGliPff6c'},
      {id: '16', local: 'Suíça', bandeira: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Flag_of_Switzerland_%28Pantone%29.svg/1024px-Flag_of_Switzerland_%28Pantone%29.svg.png'},
      {id: '17', local: 'África do Sul', bandeira: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_of_South_Africa.svg/1024px-Flag_of_South_Africa.svg.png'},
    ])
  }
}

module.exports = PaisSeeder
