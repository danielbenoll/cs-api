'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const MapaModo = use('App/Models/MapaModo')

/**
 * Resourceful controller for interacting with mapaModos
 */
class MapaModoController {
  /**
  * @swagger
  * /api/v1/mapa-modos:
  *   get:
  *     tags:
  *       - Mapa Modos
  *     security:
  *       - bearerAuth: []
  *     summary: Listar os Mapa Modos
  *     parameters:
  *       - name: qtd
  *         description: Quantidade de Itens que vão aparecer
  *         in: query
  *         required: false
  *         type: integer
  *       - name: page
  *         description: Número da pagina
  *         in: query
  *         required: false
  *         type: string
  *     responses:
  *       200:
  *         description: Sucesso.
  */
  async index ({ request, response, view }) {
    
    const {page, qtd} = request.all()

    return await MapaModo.query()
                      .paginate(page, qtd);
  }

  /**
   * Render a form to be used for creating a new mapaModo.
   * GET mapaModos/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

    /**
  * @swagger
  * /api/v1/mapa-modos:
  *   post:
  *     tags:
  *       - Mapa Modos
  *     security:
  *       - bearerAuth: []
  *     summary: Insere um registro de Mapa Modos
  *     parameters:
  *       - name: mapa
  *         description: Objeto de Mapa Modos
  *         in: body
  *         required: true
  *         schema: 
  *           $ref: '#/definitions/MapaModo'
  *     responses:
  *       200:
  *         description: Sucesso
  *         schema:
  *           $ref: '#/definitions/MapaModoObject'
  *       400:
  *         description: Bad Request
  */
  async store ({ request, response }) {

    const campos = MapaModo.getCampos()
    const dados = request.only(campos)
    return MapaModo.create(dados)
  }

   /**
  * @swagger
  * /api/v1/mapa-modos/{id}:
  *   get:
  *     tags:
  *       - Mapa Modos
  *     security:
  *       - bearerAuth: []
  *     summary: Exibe detalhes de um Mapa Modos
  *     parameters:
  *       - name: id
  *         description: Identificador de um Mapa Modos
  *         in: path
  *         required: true
  *         type: integer
  *     responses:
  *       200:
  *         description: Sucesso
  *         schema:
  *           $ref: '#/definitions/MapaModoObject'
  *       400:
  *         description: Bad Request
  */
  async show ({ params, request, response, view }) {
    
    return await MapaModo.findOrFail(params.id)
  }

  /**
   * Render a form to update an existing mapaModo.
   * GET mapaModos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

    /**
  * @swagger
  * /api/v1/mapa-modos/{id}:
  *   put:
  *     tags:
  *       - Mapa Modos
  *     security:
  *       - bearerAuth: []
  *     summary: Altera um registro de Mapa Modos
  *     parameters:
  *       - name: id
  *         description: Identificador de Mapa Modos
  *         in: path
  *         required: true
  *         type: integer
  *       - name: foto
  *         description: Objeto de Mapa Modos
  *         in: body
  *         required: true
  *         schema: 
  *           $ref: '#/definitions/MapaModo'
  *     responses:
  *       200:
  *         description: Sucesso
  *         schema:
  *           $ref: '#/definitions/MapaModoObject'
  *       400:
  *         description: Bad Request
  */
  async update ({ params, request, response }) {
    const campos = MapaModo.getCampos()
    const dados = request.only(campos)
    
    const mapaModo = await MapaModo.findOrFail(params.id)
    
    mapaModo.merge(dados)
    await mapaModo.save();

    return mapaModo
  }

  /**
  * @swagger
  * /api/v1/mapa-modos/{id}:
  *   delete:
  *     tags:
  *       - Mapa Modos
  *     security:
  *       - bearerAuth: []
  *     summary: Exclui um Mapa Modos
  *     parameters:
  *       - name: id
  *         description: Identificador de Mapa Modos
  *         in: path
  *         required: true
  *         type: integer
  *     responses:
  *       200:
  *         description: Sucesso.
  */
  async destroy ({ params, request, response }) {
    const mapaModo = await MapaModo.findOrFail(params.id)

    mapaModo.delete()

    return 'Apagado com sucesso!'
  }
}

module.exports = MapaModoController
