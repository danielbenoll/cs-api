'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Modo = use('App/Models/Modo')

/**
 * Resourceful controller for interacting with modos
 */
class ModoController {
  /**
  * @swagger
  * /api/v1/modos:
  *   get:
  *     tags:
  *       - Modo
  *     security:
  *       - bearerAuth: []
  *     summary: Listar os Modos
  *     parameters:
  *       - name: modo
  *         description: Filtra o nome do modo parcialmente
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

    const {page, qtd, modo} = request.all()

    const query = Modo.query()

    if(modo){
      query.where('modo', 'like', '%'+modo+'%')
    }

    return await query.paginate(page, qtd);
  }

  /**
   * Render a form to be used for creating a new modo.
   * GET modos/create
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
  * /api/v1/modos:
  *   post:
  *     tags:
  *       - Modo
  *     security:
  *       - bearerAuth: []
  *     summary: Insere um registro de Modo
  *     parameters:
  *       - name: modo
  *         description: Objeto de Modo
  *         in: body
  *         required: true
  *         schema: 
  *           $ref: '#/definitions/Modo'
  *     responses:
  *       200:
  *         description: Sucesso
  *         schema:
  *           $ref: '#/definitions/ModoObject'
  *       400:
  *         description: Bad Request
  */
  async store ({ request, response }) {

    const campos = Modo.getCampos()
    const dados = request.only(campos)
    return Modo.create(dados)
  }

   /**
  * @swagger
  * /api/v1/modos/{id}:
  *   get:
  *     tags:
  *       - Modo
  *     security:
  *       - bearerAuth: []
  *     summary: Exibe detalhes de um Modo
  *     parameters:
  *       - name: id
  *         description: Identificador de um Modo
  *         in: path
  *         required: true
  *         type: integer
  *     responses:
  *       200:
  *         description: Sucesso
  *         schema:
  *           $ref: '#/definitions/ModoObject'
  *       400:
  *         description: Bad Request
  */
  async show ({ params, request, response, view }) {
    return await Modo.query()
                      .where('id', params.id)
                      .with('mapas')
                      .first()
  }

  /**
   * Render a form to update an existing modo.
   * GET modos/:id/edit
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
  * /api/v1/modos/{id}:
  *   put:
  *     tags:
  *       - Modo
  *     security:
  *       - bearerAuth: []
  *     summary: Altera um registro de Modo
  *     parameters:
  *       - name: id
  *         description: Identificador de Modo
  *         in: path
  *         required: true
  *         type: integer
  *       - name: modo
  *         description: Objeto de Modo
  *         in: body
  *         required: true
  *         schema: 
  *           $ref: '#/definitions/Modo'
  *     responses:
  *       200:
  *         description: Sucesso
  *         schema:
  *           $ref: '#/definitions/ModoObject'
  *       400:
  *         description: Bad Request
  */
  async update ({ params, request, response }) {
    const campos = Modo.getCampos()
    const dados = request.only(campos)
    
    const modo = await Modo.findOrFail(params.id)
    
    modo.merge(dados)
    await modo.save();

    return modo
  }

  /**
  * @swagger
  * /api/v1/modos/{id}:
  *   delete:
  *     tags:
  *       - Modo
  *     security:
  *       - bearerAuth: []
  *     summary: Exclui um Modo
  *     parameters:
  *       - name: id
  *         description: Identificador de Modo
  *         in: path
  *         required: true
  *         type: integer
  *     responses:
  *       200:
  *         description: Sucesso.
  */
  async destroy ({ params, request, response }) {
    const modo = await Modo.findOrFail(params.id)

    modo.delete()

    return 'Apagado com sucesso!'
  }
}

module.exports = ModoController
