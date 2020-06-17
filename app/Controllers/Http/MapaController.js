'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Mapa = use('App/Models/Mapa')

/**
 * Resourceful controller for interacting with mapas
 */
class MapaController {
  /**
  * @swagger
  * /api/v1/mapas:
  *   get:
  *     tags:
  *       - Mapa
  *     security:
  *       - bearerAuth: []
  *     summary: Listar os Mapas
  *     parameters:
  *       - name: nome
  *         description: Filtra o nome parcialmente
  *         in: query
  *         required: false
  *         type: string
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
    
    const {page, qtd, nome} = request.all()

    const query = Mapa.query()

    if(nome){
      query.where('nome', 'like', '%'+nome+'%')
    }

    return await query.with('fotos').paginate(page, qtd);
  }

  /**
   * Render a form to be used for creating a new mapa.
   * GET mapas/create
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
  * /api/v1/mapas:
  *   post:
  *     tags:
  *       - Mapa
  *     security:
  *       - bearerAuth: []
  *     summary: Insere um registro de Mapa
  *     parameters:
  *       - name: mapa
  *         description: Objeto de Mapa
  *         in: body
  *         required: true
  *         schema: 
  *           $ref: '#/definitions/Mapa'
  *     responses:
  *       200:
  *         description: Sucesso
  *         schema:
  *           $ref: '#/definitions/MapaObject'
  *       400:
  *         description: Bad Request
  */
  async store ({ request, response }) {

    const campos = Mapa.getCampos()
    const dados = request.only(campos)
    return Mapa.create(dados)
  }

   /**
  * @swagger
  * /api/v1/mapas/{id}:
  *   get:
  *     tags:
  *       - Mapa
  *     security:
  *       - bearerAuth: []
  *     summary: Exibe detalhes de um Mapa
  *     parameters:
  *       - name: id
  *         description: Identificador de um Mapa
  *         in: path
  *         required: true
  *         type: integer
  *     responses:
  *       200:
  *         description: Sucesso
  *         schema:
  *           $ref: '#/definitions/MapaObject'
  *       400:
  *         description: Bad Request
  */
  async show ({ params, request, response, view }) {
    
    return await Mapa.query()
                      .where('id', params.id)
                      .with('pais')
                      .with('modos')
                      .with('fotos')
                      .first()
  }

  /**
   * Render a form to update an existing mapa.
   * GET mapas/:id/edit
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
  * /api/v1/mapas/{id}:
  *   put:
  *     tags:
  *       - Mapa
  *     security:
  *       - bearerAuth: []
  *     summary: Altera um registro de Mapa
  *     parameters:
  *       - name: id
  *         description: Identificador de Mapa
  *         in: path
  *         required: true
  *         type: integer
  *       - name: foto
  *         description: Objeto de Mapa
  *         in: body
  *         required: true
  *         schema: 
  *           $ref: '#/definitions/Mapa'
  *     responses:
  *       200:
  *         description: Sucesso
  *         schema:
  *           $ref: '#/definitions/MapaObject'
  *       400:
  *         description: Bad Request
  */
  async update ({ params, request, response }) {
    const campos = Mapa.getCampos()
    const dados = request.only(campos)
    
    const mapa = await Mapa.findOrFail(params.id)
    
    mapa.merge(dados)
    await mapa.save();

    return mapa
  }

  /**
  * @swagger
  * /api/v1/mapas/{id}:
  *   delete:
  *     tags:
  *       - Mapa
  *     security:
  *       - bearerAuth: []
  *     summary: Exclui um Mapa
  *     parameters:
  *       - name: id
  *         description: Identificador de Mapa
  *         in: path
  *         required: true
  *         type: integer
  *     responses:
  *       200:
  *         description: Sucesso.
  */
  async destroy ({ params, request, response }) {
    const mapa = await Mapa.findOrFail(params.id)

    mapa.delete()

    return 'Apagado com sucesso!'
  }
}

module.exports = MapaController
