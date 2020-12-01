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
      {id: '1', mapa_id: '1', foto: 'https://manualdosgames.com/wp-content/uploads/2019/09/maxresdefault-2-3-1170x720.jpg'},
      {id: '2', mapa_id: '2', foto: 'https://i2.wp.com/paradoxalnews.com/wp-content/uploads/2018/11/csgo-de-cbble.png?resize=1920%2C1080&ssl=1'},
      {id: '3', mapa_id: '3', foto: 'https://1.bp.blogspot.com/-3xb8jFETPd8/XQncco1VURI/AAAAAAAAczw/y2cV5nrF51QFIMgTn8Rydlj4f4OGLd6dQCLcBGAs/s1600/dust-2-retro-atualizacao-counter-strike-global-offensive-comemoracao-20-anos-franquia-csgo-armadura-nerd.webp'},
      {id: '4', mapa_id: '4', foto: 'https://criticalhits.com.br/wp-content/uploads/2016/10/inferno_cs_go.jpg'},
      {id: '5', mapa_id: '5', foto: 'https://i.ytimg.com/vi/ZaP8eD3SC-Y/maxresdefault.jpg'},
      {id: '6', mapa_id: '6', foto: 'https://img.redbull.com/images/q_auto,f_auto/redbullcom/2018/02/12/383ff8b0-a910-4055-9688-46db68bcc1cc/csgo-nuke-b-site'},
      {id: '7', mapa_id: '7', foto: 'https://img.cinemablend.com/filter:scale/cb/f/8/8/1/7/7/f88177c8801ad2c776421b6c47c533b1959815bd6e1817b056fb9ffde1881e46.jpg?mw=600'},
      {id: '8', mapa_id: '8', foto: 'https://s2.glbimg.com/f48kKtVkrRdY63x2JOIVW_3UeE0=/0x0:1920x1080/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2019/G/m/dnM4ZHQXaWgQAObsNpOw/19-bombsite-b.jpg'},
      {id: '9', mapa_id: '9', foto: 'https://s2.glbimg.com/m522ePRE2jbsCbWG1LnmBh-X1gk=/0x0:1000x563/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2019/d/Y/VIK2otRXAy1ud6CAmLXA/vertigo-3.jpg'},
      {id: '10', mapa_id: '10', foto: 'https://screenshots.gamebanana.com/img/ss/prefabs/588ef6e591628.webp'},
      {id: '11', mapa_id: '11', foto: 'https://screenshots.gamebanana.com/img/ss/maps/5c59cfe576f17.jpg'},
      {id: '12', mapa_id: '12', foto: 'https://tsarvar.com/maps/csgo/de_lake/151571.jpg'},
      {id: '13', mapa_id: '13', foto: 'https://i.redd.it/v6wbfeg1syn31.jpg'},
      {id: '14', mapa_id: '14', foto: 'https://media.moddb.com/cache/images/games/1/16/15456/thumb_620x2000/csgo_shoots_02.jpg'},
      {id: '15', mapa_id: '15', foto: 'https://www.gamemaps.com/imgmgr/limit/img/addons/l4d2/ss/cs_go_st_marc_survival_16297_2.jpg?x=1456246652&w=975&h=550'},
      {id: '16', mapa_id: '16', foto: 'https://vignette.wikia.nocookie.net/cswikia/images/2/2c/Cs_italy_csgo.png/revision/latest/scale-to-width-down/310?cb=20140819100829'},
      {id: '17', mapa_id: '17', foto: 'https://vignette.wikia.nocookie.net/cswikia/images/f/f7/Csgo-cs-office.png/revision/latest?cb=20140820132335'},
      {id: '18', mapa_id: '18', foto: 'https://vignette.wikia.nocookie.net/cswikia/images/0/00/Cs_assault_go.png/revision/latest?cb=20140819095651'},
      {id: '19', mapa_id: '19', foto: 'https://vignette.wikia.nocookie.net/cswikia/images/2/2b/Csgo_militia_pic1.jpg/revision/latest?cb=20190123130803'},
      {id: '20', mapa_id: '20', foto: 'https://vignette.wikia.nocookie.net/cswikia/images/a/a9/Csgo-de-bank.png/revision/latest?cb=20140820131729'},
    ])
  }
}

module.exports = FotoSeeder
