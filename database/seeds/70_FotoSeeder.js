'use strict'

/*
|--------------------------------------------------------------------------
| FotoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Foto = use('App/Models/Foto')

class FotoSeeder {
  async run () {
    await Foto.createMany([
      {id: '1', mapa_id: '1', foto: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmanualdosgames.com%2Fcsgo-nova-cache-ganha-data-para-chegar%2F&psig=AOvVaw1MyIzzQvQ7FmrfYRPUlUNk&ust=1591820930380000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJj6kp7J9ekCFQAAAAAdAAAAABAK'},
      {id: '2', mapa_id: '2', foto: 'https://i2.wp.com/paradoxalnews.com/wp-content/uploads/2018/11/csgo-de-cbble.png?resize=1920%2C1080&ssl=1'},
      {id: '3', mapa_id: '3', foto: 'https://1.bp.blogspot.com/-3xb8jFETPd8/XQncco1VURI/AAAAAAAAczw/y2cV5nrF51QFIMgTn8Rydlj4f4OGLd6dQCLcBGAs/s1600/dust-2-retro-atualizacao-counter-strike-global-offensive-comemoracao-20-anos-franquia-csgo-armadura-nerd.webp'},
      {id: '4', mapa_id: '4', foto: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fcounterstrike.fandom.com%2Fwiki%2FInferno&psig=AOvVaw2spWLH2Bl49HoGJgtu3N6s&ust=1591821039143000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiuitHJ9ekCFQAAAAAdAAAAABAD'},
      {id: '5', mapa_id: '5', foto: 'https://i.ytimg.com/vi/ZaP8eD3SC-Y/maxresdefault.jpg'},
      {id: '6', mapa_id: '6', foto: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.theenemy.com.br%2Fcounter-strike-global-offensive%2Fmapa-do-competitivo-de-csgo-nuke-passa-por-mudancas&psig=AOvVaw1zcp8c96AOorYfgADu-ttS&ust=1591821080748000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJjiy-HJ9ekCFQAAAAAdAAAAABAD'},
      {id: '7', mapa_id: '7', foto: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fdotesports.com%2Fbr%2Fcounter-strike%2Fnews%2Fvalve-enfraquece-sg553-em-enorme-atualizacao-de-csgo&psig=AOvVaw2Ntqb5SWk4JYvBcFCtlIq0&ust=1591821102583000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPiQkezJ9ekCFQAAAAAdAAAAABAD'},
      {id: '8', mapa_id: '8', foto: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fcriticalhits.com.br%2Fgames%2Fcsgo-nomes-mapa-train%2F&psig=AOvVaw0Htd-8yPdqu1qbUnHKv5cx&ust=1591821117375000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPif8fTJ9ekCFQAAAAAdAAAAABAD'},
      {id: '9', mapa_id: '9', foto: 'https://s2.glbimg.com/m522ePRE2jbsCbWG1LnmBh-X1gk=/0x0:1000x563/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2019/d/Y/VIK2otRXAy1ud6CAmLXA/vertigo-3.jpg'},
      {id: '10', mapa_id: '10', foto: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fcounterstrike.fandom.com%2Fwiki%2FBaggage&psig=AOvVaw0asKHqWIT01Zcl67OHieZN&ust=1591821157835000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMjp-4bK9ekCFQAAAAAdAAAAABAD'},
      {id: '11', mapa_id: '11', foto: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fcounterstrike.fandom.com%2Fwiki%2FSafehouse&psig=AOvVaw3LBnoqQq6pzt0TSUla0eMc&ust=1591821180339000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLit1JHK9ekCFQAAAAAdAAAAABAD'},
      {id: '12', mapa_id: '12', foto: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fcounterstrike.fandom.com%2Fwiki%2FLake&psig=AOvVaw0UoC-ImVWis_20DD6lYUhF&ust=1591821202238000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOD-3JvK9ekCFQAAAAAdAAAAABAD'},
      {id: '13', mapa_id: '13', foto: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fcounterstrike.fandom.com%2Fwiki%2FMonastery&psig=AOvVaw3ZzUb020LeTzz_Jn1o_nFX&ust=1591821218230000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJD_kqTK9ekCFQAAAAAdAAAAABAD'},
      {id: '14', mapa_id: '14', foto: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fcounterstrike.fandom.com%2Fwiki%2FShoots&psig=AOvVaw3-6kYxFsnbTEmS68kdrwgh&ust=1591821234830000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMDJ3avK9ekCFQAAAAAdAAAAABAD'},
      {id: '15', mapa_id: '15', foto: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fcounterstrike.fandom.com%2Fwiki%2FSt._Marc&psig=AOvVaw10usoccrKcVX-veiG7JrBO&ust=1591821253590000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPCa-bPK9ekCFQAAAAAdAAAAABAD'},
      {id: '16', mapa_id: '16', foto: 'https://vignette.wikia.nocookie.net/cswikia/images/2/2c/Cs_italy_csgo.png/revision/latest/scale-to-width-down/310?cb=20140819100829'},
      {id: '17', mapa_id: '17', foto: 'https://vignette.wikia.nocookie.net/cswikia/images/f/f7/Csgo-cs-office.png/revision/latest?cb=20140820132335'},
      {id: '18', mapa_id: '18', foto: 'https://vignette.wikia.nocookie.net/cswikia/images/0/00/Cs_assault_go.png/revision/latest?cb=20140819095651'},
      {id: '19', mapa_id: '19', foto: 'https://vignette.wikia.nocookie.net/cswikia/images/2/2b/Csgo_militia_pic1.jpg/revision/latest?cb=20190123130803'},
      {id: '20', mapa_id: '20', foto: 'https://vignette.wikia.nocookie.net/cswikia/images/a/a9/Csgo-de-bank.png/revision/latest?cb=20140820131729'},
    ])
  }
}

module.exports = FotoSeeder
