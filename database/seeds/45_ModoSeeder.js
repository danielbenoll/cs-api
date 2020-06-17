'use strict'

/*
|--------------------------------------------------------------------------
| ModoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Modo = use('App/Models/Modo')

class ModoSeeder {
  async run () {
    await Modo.createMany([
      {id: '1', modo: 'Competitivo', descricao: 'Este modo clássico que tornou o CS:GO famoso. Entre numa partida 5 contra 5 no formato melhor de 30 com as regras padrão competitivas do Counter-Strike num dos mapas clássicos. Podendo entrar numa partida sozinho ou formar um time e entrar numa partida juntamente com os amigos.'},
      {id: '2', modo: 'Casual', descricao:'Quer jogar Counter-Strike, mas sem se comprometer em jogar uma partida completa? Procure uma partida casual e joga no seu próprio ritmo. No modo Casual, os jogadores recebem colete e kits defuse automaticamente e ganham dinheiro adicional por matarem adversários.'},
      {id: '3', modo: 'Demolição', descricao:'No modo Demolição, os jogadores jogam várias rondas de ataque e defesa de um único alvo de bomba numa série de mapas concebidos para partidas rápidas. Os jogadores recebem automaticamente uma arma inicial e avançam através de uma sequência de armas sempre que matarem um adversário. Se achar que está à altura do desafio, pode tentar matar um adversário em cada rodada e alcançar o patamar das armas derradeiras, as famosas snipers!'},
      {id: '4', modo: 'Corrida Armada', descricao:'O modo Corrida às Armas é um modo de progressão de armas onde entra em jogo instantaneamente e onde também acaba muitas vezes enfrentando os teus adversários de perto. Os jogadores são equipados com uma arma nova imediatamente após matarem um adversário. Mate um adversário com a última arma da sequência, uma faca dourada, para ganhar a partida.'},
      {id: '5', modo: 'Refém', descricao:'Modo clássico onde os Contra-Terroristas devem salvar os reféns enquanto os Terroristas devem impedir que isto aconteça.'},
    ])
  }
}

module.exports = ModoSeeder
