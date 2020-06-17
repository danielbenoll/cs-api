'use strict'

/*
|--------------------------------------------------------------------------
| ArmamentoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Armamento = use('App/Models/Armamento')

class ArmamentoSeeder {
  async run () {
    await Armamento.createMany([
      //Pistolas
      {id: '1', classe_id: '2', secao_id: '2', pais_id: '5', nome: 'P2000', descricao: 'Exato e controlável, o P2000, fabricado na Alemanha, é uma pistola de primeira ordem que funciona melhor que funciona melhor contra oponentes desarmados. ', foto: 'https://vignette.wikia.nocookie.net/cswikia/images/2/23/CSGO_P2000_Inventory.png/revision/latest?cb=20130813194247'},
      {id: '2', classe_id: '2', secao_id: '2', pais_id: '5', nome: 'USP-S', descricao: 'Uma das favoritas dos fãs do Counter-Strike: Source , a pistola silenciada da USP possui um silenciador destacável que dá menos tiros à ré e suprime o ruído que chama a atenção. ', foto: 'https://vignette.wikia.nocookie.net/cswikia/images/e/e7/CSGO_USP-S_Inventory.png/revision/latest/scale-to-width-down/310?cb=20130813110903'},
      {id: '3', classe_id: '1', secao_id: '2', pais_id: '13', nome: "Glock-18", descricao: 'A Glock 18 é uma pistola de primeira rodada que funciona melhor contra oponentes desarmados e é capaz de disparar rajadas de três rodadas.', foto: 'https://vignette.wikia.nocookie.net/cswikia/images/9/99/CSGO_Glock-18_Inventory.png/revision/latest/scale-to-width-down/310?cb=20130813194200'},
      {id: '4', classe_id: null, secao_id: '2', pais_id: '5', nome: 'P250', descricao: 'Uma arma de fogo com baixo recuo e alta taxa de tiro, o P250 é uma escolha relativamente barata contra oponentes blindados.', foto: 'https://vignette.wikia.nocookie.net/cswikia/images/3/32/CSGO_P250_Inventory.png/revision/latest/scale-to-width-down/310?cb=20130813194341'},
      {id: '5', classe_id: null, secao_id: '2', pais_id: '14', nome: 'Five-Seven', descricao: 'Altamente preciso e perfurante, o caro Five-Seven é um carregador lento que compensa com uma generosa revista de 20 balas e um recuo indulgente.', foto: 'https://vignette.wikia.nocookie.net/cswikia/images/9/90/CSGO_Five-SeveN_Inventory.png/revision/latest/scale-to-width-down/310?cb=20130813194104'},
      {id: '6', classe_id: '1', secao_id: '2', pais_id: '4', nome: 'Tec-9', descricao: 'Uma pistola ideal para o terrorista em movimento, a Tec-9 é letal em locais próximos e possui uma alta capacidade de munição.', foto: 'https://vignette.wikia.nocookie.net/cswikia/images/e/e3/CSGO_Tec-9_Inventory.png/revision/latest?cb=20130813200131'},
      {id: '7', classe_id: null, secao_id: '2', pais_id: '15', nome: 'CZ75-Auto', descricao: 'Uma variante totalmente automática do CZ75, o CZ75-Auto é outra opção barata contra oponentes blindados. Mas com muito pouca munição fornecida, é necessária uma forte disciplina de gatilho.', foto: 'https://vignette.wikia.nocookie.net/cswikia/images/d/da/CSGO_CZ75-Auto_Inventory.png/revision/latest?cb=20140710231132'},
      {id: '8', classe_id: null, secao_id: '2', pais_id: '2', nome: 'Dual Berettas', descricao: 'O disparo de Dual Berettas de grande porte de uma só vez reduzirá a precisão e aumentará o tempo de carregamento. Pelo lado positivo, você poderá disparar Dual Berettas de grande porte de uma só vez.', foto: 'https://vignette.wikia.nocookie.net/cswikia/images/b/bc/CSGO_Dual_Berettas_Inventory.png/revision/latest/scale-to-width-down/310?cb=20130813194010'},
      {id: '9', classe_id: null, secao_id: '2', pais_id: '9', nome: 'Desert Eagle', descricao: 'Por mais cara que seja poderosa, a Desert Eagle é uma pistola icônica que é difícil de dominar, mas surpreendentemente precisa a longo alcance.', foto: 'https://vignette.wikia.nocookie.net/cswikia/images/f/f3/CSGO_Desert_Eagle_Inventory.png/revision/latest/scale-to-width-down/310?cb=20130903115839'},
      {id: '10', classe_id: null, secao_id: '2', pais_id: '4', nome: 'R8 Revolver', descricao: 'O R8 Revolver oferece uma rodada altamente precisa e poderosa às custas de um longo acionamento do gatilho. Disparar rapidamente ventilando o martelo pode ser a melhor opção quando for necessária uma força de parada à queima-roupa.', foto: 'https://vignette.wikia.nocookie.net/cswikia/images/b/b8/CSGO_R8_Revolver_Inventory.png/revision/latest?cb=20151209034424'},
      //SMG's
      {id: '11', classe_id: '2', secao_id: '3', pais_id: '16', nome: 'MP9', descricao: 'Fabricado na Suíça, o MP9 SMG de ponta é uma arma de polímero ergonômica preferida por empresas de segurança privadas.', foto: 'https://vignette.wikia.nocookie.net/cswikia/images/e/eb/CSGO_MP9_Inventory.png/revision/latest/scale-to-width-down/310?cb=20130813201324'},
      {id: '12', classe_id: '1', secao_id: '3', pais_id: '4', nome: 'MAC-10', descricao: 'Essencialmente uma caixa da qual as balas saem, o MAC-10 SMG possui uma alta taxa de incêndio, com baixa precisão de propagação e alto recuo como compensação.', foto: 'https://vignette.wikia.nocookie.net/cswikia/images/9/9c/CSGO_MAC-10_Inventory.png/revision/latest?cb=20130813201114'},
      {id: '13', classe_id: null, secao_id: '3', pais_id: '1', nome: 'PP-Bizon', descricao: 'O Bizon SMG é de baixo dano, mas oferece uma revista de bateria de alta capacidade e design exclusivo que é recarregada rapidamente.', foto: 'https://vignette.wikia.nocookie.net/cswikia/images/9/99/CSGO_PP-Bizon_Inventory.png/revision/latest?cb=20130813201509'},
      {id: '14', classe_id: null, secao_id: '3', pais_id: '5', nome: 'MP7', descricao: 'Versátil, mas caro, o MP7 SMG de fabricação alemã é a escolha perfeita para combate de curto alcance e alto impacto.', foto: 'https://vignette.wikia.nocookie.net/cswikia/images/0/04/CSGO_MP7_Inventory.png/revision/latest?cb=20130813201223'},
      {id: '15', classe_id: null, secao_id: '3', pais_id: '5', nome: 'UMP-45', descricao: 'O filho do meio incompreendido da família SMG, a pequena revista do UMP45 é a única desvantagem de um automático versátil de perto.', foto: 'https://vignette.wikia.nocookie.net/cswikia/images/1/12/CSGO_UMP-45_Inventory.png/revision/latest?cb=20130813201733'},
      {id: '16', classe_id: null, secao_id: '3', pais_id: '14', nome: 'P90', descricao: 'Facilmente reconhecível por seu design exclusivo de bullpup, a P90 é uma ótima arma para disparar em movimento devido à sua revista de alta capacidade e baixo recuo.', foto: 'https://vignette.wikia.nocookie.net/cswikia/images/5/54/CSGO_P90_Inventory.png/revision/latest?cb=20130813201421'},
      {id: '17', classe_id: null, secao_id: '3', pais_id: '5', nome: 'MP5-SD', descricao: 'Frequentemente imitado, mas nunca igualado, o icônico MP5 é talvez o SMG mais versátil e popular do mundo. Esta variante SD vem equipada com um silenciador integrado , tornando uma arma já formidável silenciosa.', foto: 'https://vignette.wikia.nocookie.net/cswikia/images/b/b8/CSGO_MP5-SD_Inventory.png/revision/latest?cb=20180816181307'},
      //Rifles
      {id: '18', classe_id: '2', secao_id: '4', pais_id: '6', nome: 'FAMAS', descricao: 'Uma opção barata para jogadores sem dinheiro, a FAMAS efetivamente preenche o nicho entre espingardas mais caras e SMGs menos eficazes.', foto: 'https://vignette.wikia.nocookie.net/cswikia/images/e/e4/CSGO_FAMAS_Inventory.png/revision/latest?cb=20130813202130'},
      {id: '19', classe_id: '1', secao_id: '4', pais_id: '9', nome: 'Galil AR', descricao: 'Uma opção mais barata entre as espingardas de assalto exclusivas para terroristas, a Galil AR é uma arma que pode ser utilizada em combate de médio a longo alcance.', foto: 'https://vignette.wikia.nocookie.net/cswikia/images/9/93/CSGO_Galil_AR_Inventory.png/revision/latest?cb=20130813202237'},
      {id: '20', classe_id: '2', secao_id: '4', pais_id: '4', nome: 'M4A4', descricao: 'Mais preciso, mas menos prejudicial que o seu AK-47, o M4A4 é o rifle de assalto totalmente automático de escolha para os CTs.', foto: 'https://vignette.wikia.nocookie.net/cswikia/images/7/77/CSGO_M4A4_Inventory.png/revision/latest?cb=20130813202347'},
      {id: '21', classe_id: '2', secao_id: '4', pais_id: '4', nome: 'M4A1-S', descricao: 'Com uma revista menor que sua contraparte não abafada, a M4A1 silenciosa fornece fotos mais silenciosas com menos recuo e melhor precisão.', foto: 'https://vignette.wikia.nocookie.net/cswikia/images/8/81/CSGO_M4A1-S_Inventory.png/revision/latest?cb=20130824215315'},
      {id: '22', classe_id: '1', secao_id: '4', pais_id: '1', nome: 'AK-47', descricao: 'Poderoso e confiável, o AK-47 é um dos fuzis de assalto mais populares do mundo. É mais mortal em breves e controladas explosões de fogo.', foto: 'https://vignette.wikia.nocookie.net/cswikia/images/8/80/CSGO_AK-47_Inventory.png/revision/latest?cb=20130813201911'},
      {id: '23', classe_id: '2', secao_id: '4', pais_id: '13', nome: 'AUG', descricao: 'Poderoso e preciso, o rifle de assalto AUG compensa seus longos tempos de recarga, com baixa propagação e alta taxa de tiro.', foto: 'https://vignette.wikia.nocookie.net/cswikia/images/9/92/CSGO_AUG_Inventory.png/revision/latest?cb=20130813202013'},
      {id: '24', classe_id: '1', secao_id: '4', pais_id: '16', nome: 'SG 553', descricao: 'O SG 553, exclusivo para terroristas, é uma alternativa de escopo premium ao AK-47 para um engajamento eficaz a longo prazo.', foto: 'https://vignette.wikia.nocookie.net/cswikia/images/1/16/CSGO_SG_553_Inventory.png/revision/latest?cb=20130813202530'},
      {id: '25', classe_id: null, secao_id: '4', pais_id: '16', nome: 'SSG 08', descricao: 'A ação do parafuso SSG 08 é um rifle sniper de baixo dano, mas com ótimo custo-benefício, tornando-o uma escolha inteligente para tiro de longo alcance no início da rodada.', foto: 'https://vignette.wikia.nocookie.net/cswikia/images/4/47/CSGO_SSG_08_Inventory.png/revision/latest?cb=20130813202813'},
      {id: '26', classe_id: null, secao_id: '4', pais_id: '10', nome: 'AWP', descricao: 'Alto risco e alta recompensa, o infame AWP é reconhecível por seu relatório de assinatura e política de um tiro e uma morte.', foto: 'https://vignette.wikia.nocookie.net/cswikia/images/2/23/CSGO_AWP_Inventory.png/revision/latest?cb=20130813202700'},
      {id: '27', classe_id: '2', secao_id: '4', pais_id: '14', nome: 'SCAR-20', descricao: 'O SCAR-20 é um rifle sniper semiautomático que comercializa uma alta taxa de tiro e poderosos danos a longa distância, resultando em velocidade de movimento lenta e alto preço', foto: 'https://vignette.wikia.nocookie.net/cswikia/images/b/bf/CSGO_SCAR-20_Inventory.png/revision/latest?cb=20130813203014'},
      {id: '28', classe_id: '1', secao_id: '4', pais_id: '5', nome: 'G3SG1', descricao: 'O caro G3SG1 reduz consideravelmente a velocidade de movimento, mas compensa com uma taxa de tiro mais alta do que outros rifles de precisão.', foto: 'https://vignette.wikia.nocookie.net/cswikia/images/3/35/CSGO_G3SG1_Inventory.png/revision/latest?cb=20130813202929'},
      //Pesadas
      {id: '29', classe_id: null, secao_id: '5', pais_id: '2', nome: 'Nova', descricao: 'O preço mais baixo da Nova a torna uma excelente arma de emboscada para uma equipe sem dinheiro.', foto: 'https://vignette.wikia.nocookie.net/cswikia/images/1/11/CSGO_Nova_Inventory.png/revision/latest?cb=20130813200616'},
      {id: '30', classe_id: null, secao_id: '5', pais_id: '2', nome: 'XM1014', descricao: 'A XM1014 é uma poderosa espingarda totalmente automática que justifica seu preço mais elevado com a capacidade de pintar uma sala com chumbo rapidamente.', foto: 'https://vignette.wikia.nocookie.net/cswikia/images/3/37/CSGO_XM1014_Inventory.png/revision/latest?cb=20130813200959'},
      {id: '31', classe_id: '2', secao_id: '5', pais_id: '17', nome: 'MAG-7', descricao: 'O Mag-7 exclusivo da CT fornece uma quantidade devastadora de danos à queima-roupa. Suas recargas rápidas no estilo de revista fazem dele uma ótima opção tática.', foto: 'https://vignette.wikia.nocookie.net/cswikia/images/d/d4/CSGO_MAG-7_Inventory.png/revision/latest?cb=20130813200441'},
      {id: '32', classe_id: '1', secao_id: '5', pais_id: '4', nome: 'Cano Curto', descricao: 'O clássico Cano Curto causa muito dano a curta distância, mas com sua baixa precisão, alta propagação e baixa taxa de tiro, é melhor matar o que acertar. ', foto: 'https://vignette.wikia.nocookie.net/cswikia/images/b/b4/CSGO_Sawed-Off_Inventory.png/revision/latest?cb=20130813200706'},
      {id: '33', classe_id: null, secao_id: '5', pais_id: '4', nome: 'M249', descricao: 'Um LMG forte em área aberta, o M249 é a escolha perfeita para jogadores dispostos a negociar uma taxa de tiro lenta para maior precisão e alta capacidade de munição.', foto: 'https://vignette.wikia.nocookie.net/cswikia/images/7/7c/CSGO_M249_Inventory.png/revision/latest?cb=20130813203106'},
      {id: '34', classe_id: null, secao_id: '5', pais_id: '9', nome: 'Negev', descricao: 'O Negev é um animal que pode manter o inimigo à distância com seu fogo supressor, desde que você tenha o luxo de tempo para ganhar controle sobre ele.', foto: 'https://vignette.wikia.nocookie.net/cswikia/images/0/03/CSGO_Negev_Inventory.png/revision/latest?cb=20130813203153'},
      //Granadas
      {id: '35', classe_id: null, secao_id: '6', pais_id: '11', nome: 'HE', descricao: 'A granada de alta fragmentação explosiva administra altos danos através de uma ampla área, tornando-a ideal para limpar salas hostis.', foto: 'https://vignette.wikia.nocookie.net/cswikia/images/c/ce/Hegrenadehud_csgo.png/revision/latest?cb=20151118070058'},
      {id: '36', classe_id: null, secao_id: '6', pais_id: '11', nome: 'Flashbang', descricao: 'A granada não letal de flashbang cega temporariamente qualquer pessoa dentro de sua explosão concussiva, tornando-a perfeita para expulsar áreas fechadas. Sua explosão alta também mascara temporariamente o som de passos.', foto: 'https://vignette.wikia.nocookie.net/cswikia/images/f/f3/Flashbanghud_csgo.png/revision/latest?cb=20151118070054'},
      {id: '37', classe_id: null, secao_id: '6', pais_id: '11', nome: 'Smoke', descricao: 'A granada de fumaça cria uma cortina de fumaça de área média. Ele pode efetivamente esconder sua equipe de atiradores de elite, ou até mesmo criar uma distração útil. ', foto: 'https://vignette.wikia.nocookie.net/cswikia/images/7/76/Smokegrenadehud_csgo.png/revision/latest?cb=20151118071919'},
      {id: '38', classe_id: null, secao_id: '6', pais_id: '11', nome: 'Decoy', descricao: 'Quando lançada, a granada chamariz emula o som da arma mais poderosa que você está carregando, criando a ilusão de forças de apoio adicionais.', foto: 'https://vignette.wikia.nocookie.net/cswikia/images/2/23/Decoyhud_csgo.png/revision/latest?cb=20150620150732'},
      {id: '39', classe_id: '1', secao_id: '6', pais_id: '11', nome: 'Molotov', descricao: 'O Molotov é uma arma de negação de área poderosa e imprevisível que explode em chamas quando jogada no chão, ferindo qualquer jogador em seu raio.', foto: 'https://vignette.wikia.nocookie.net/cswikia/images/5/56/Molotovhud.png/revision/latest?cb=20151118070338'},
      {id: '40', classe_id: '2', secao_id: '6', pais_id: '11', nome: 'Incendiária', descricao: 'Quando lançada, a granada incendiária libera uma reação química de alta temperatura capaz de queimar qualquer pessoa dentro de seu amplo raio de explosão.', foto: 'https://vignette.wikia.nocookie.net/cswikia/images/1/1b/Incgrenadehud_csgo.png/revision/latest?cb=20150622014843'},
      //Equipamento
      {id: '41', classe_id: null, secao_id: '7', pais_id: null, nome: 'Colete', descricao: 'Conhecido pela comunidade, por ser a proteção mais barata por não conter o capacete.', foto: 'https://counterstrike.fandom.com/wiki/Kevlar_Vest'},
      {id: '42', classe_id: null, secao_id: '7', pais_id: null, nome: 'Colete + Capacete', descricao: 'E a melhor proteção que tem, pois protege o personagem contra tiros tanto no peitoral quanto na cabeça', foto: 'https://counterstrike.fandom.com/wiki/Kevlar_%2B_Helmet'},
      {id: '43', classe_id: null, secao_id: '7', pais_id: null, nome: 'Zeus x27', descricao: 'Perfeito para emboscadas de curto alcance e encontros em áreas fechadas, o Zeus x27 de tiro único é capaz de incapacitar um inimigo em um único golpe.', foto: 'https://counterstrike.fandom.com/wiki/Zeus_x27'},
      {id: '44', classe_id: '2', secao_id: '7', pais_id: null, nome: 'Kit de Desarme', descricao: 'O Kit de Desarme é um equipamento exclusivo de combate ao terrorismo usado para diminuir  pela metade o tempo de desarme das bombas . ', foto: 'https://counterstrike.fandom.com/wiki/File:Defuserhud_csgo.png'},
    ])
  }
}

module.exports = ArmamentoSeeder
