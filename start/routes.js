'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.get('/users', 'UserController.index').prefix('api/v1')
Route.post('/users', 'UserController.store').prefix('api/v1')
Route.get('/users/:id', 'UserController.show').middleware('auth').prefix('api/v1')
Route.put('/users/:id', 'UserController.update').middleware('auth').prefix('api/v1')
Route.delete('/users/:id', 'UserController.destroy').middleware('auth').prefix('api/v1')

Route.post('/users/token', 'UserController.token').prefix('api/v1')

Route.group(()=>{

  Route.resource('/modos', 'ModoController')
        .apiOnly()
        .validator(new Map([
          [['store', 'update'], 'Modo']
  ]))

  Route.resource('/secoes', 'SecaoController')
        .apiOnly()
        .validator(new Map([
          [['store', 'update'], 'Secao']
  ]))

  Route.resource('/classes', 'ClasseController')
        .apiOnly()
        .validator(new Map([
          [['store', 'update'], 'Classe']
  ]))

  Route.resource('/paises', 'PaisController')
        .apiOnly()
        .validator(new Map([
          [['store', 'update'], 'Pais']
  ]))

  Route.resource('/mapas', 'MapaController')
        .apiOnly()
        .validator(new Map([
          [['store', 'update'], 'Mapa']
  ]))

  Route.resource('/fotos', 'FotoController')
        .apiOnly()
        .validator(new Map([
          [['store', 'update'], 'Foto']
  ]))

  Route.resource('/mapa-modos', 'MapaModoController')
        .apiOnly()
        .validator(new Map([
          [['store', 'update'], 'MapaModo']
  ]))

  Route.resource('/personagens', 'PersonagemController')
        .apiOnly()
        .validator(new Map([
          [['store', 'update'], 'Personagem']
  ]))

  Route.resource('/armamentos', 'ArmamentoController')
        .apiOnly()
        .validator(new Map([
          [['store', 'update'], 'Armamento']
  ]))


}).prefix('api/v1')

