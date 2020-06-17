'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Secao = use('App/Models/Secao')

/**
 * Resourceful controller for interacting with secaos
 */
class SecaoController {
  /**
  * @swagger
  * /api/v1/secoes:
  *   get:
  *     tags:
  *       - Seção
  *     security:
  *       - bearerAuth: []
  *     summary: Listar as Seções
  *     parameters:
  *       - name: nome
  *         description: Filtra o nome da seção parcialmente
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

    const query = Secao.query()

    if(nome){
      query.where('nome', 'like', '%'+nome+'%')
    }

    return await query.paginate(page, qtd);
  }

  /**
   * Render a form to be used for creating a new secao.
   * GET secaos/create
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
  * /api/v1/secoes:
  *   post:
  *     tags:
  *       - Seção
  *     security:
  *       - bearerAuth: []
  *     summary: Insere um registro de Seção
  *     parameters:
  *       - name: modo
  *         description: Objeto de Seção
  *         in: body
  *         required: true
  *         schema: 
  *           $ref: '#/definitions/Secao'
  *     responses:
  *       200:
  *         description: Sucesso
  *         schema:
  *           $ref: '#/definitions/SecaoObject'
  *       400:
  *         description: Bad Request
  */
  async store ({ request, response }) {
    
    const campos = Secao.getCampos()
    const dados = request.only(campos)
    return Secao.create(dados)
  }

  /**
  * @swagger
  * /api/v1/secoes/{id}:
  *   get:
  *     tags:
  *       - Seção
  *     security:
  *       - bearerAuth: []
  *     summary: Exibe detalhes de uma Seção
  *     parameters:
  *       - name: id
  *         description: Identificador de uma Seção
  *         in: path
  *         required: true
  *         type: integer
  *     responses:
  *       200:
  *         description: Sucesso
  *         schema:
  *           $ref: '#/definitions/SecaoObject'
  *       400:
  *         description: Bad Request
  */
  async show ({ params, request, response, view }) {
    return await Secao.query()
                      .where('id', params.id)
                      .with('armamentos')
                      .first()
  }

  /**
   * Render a form to update an existing secao.
   * GET secaos/:id/edit
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
  * /api/v1/secoes/{id}:
  *   put:
  *     tags:
  *       - Seção
  *     security:
  *       - bearerAuth: []
  *     summary: Altera um registro de uma Seção
  *     parameters:
  *       - name: id
  *         description: Identificador de uma Seção
  *         in: path
  *         required: true
  *         type: integer
  *       - name: modo
  *         description: Objeto da Seção
  *         in: body
  *         required: true
  *         schema: 
  *           $ref: '#/definitions/Secao'
  *     responses:
  *       200:
  *         description: Sucesso
  *         schema:
  *           $ref: '#/definitions/SecaoObject'
  *       400:
  *         description: Bad Request
  */
  async update ({ params, request, response }) {
    const campos = Secao.getCampos()
    const dados = request.only(campos)
    
    const secao = await Secao.findOrFail(params.id)
    
    secao.merge(dados)
    await secao.save();

    return secao
  }

  /**
  * @swagger
  * /api/v1/secoes/{id}:
  *   delete:
  *     tags:
  *       - Seção
  *     security:
  *       - bearerAuth: []
  *     summary: Exclui uma Seção
  *     parameters:
  *       - name: id
  *         description: Identificador de Seção
  *         in: path
  *         required: true
  *         type: integer
  *     responses:
  *       200:
  *         description: Sucesso.
  */
  async destroy ({ params, request, response }) {
    const secao = await Secao.findOrFail(params.id)

    secao.delete()

    return 'Apagado com sucesso!'
  }
}

module.exports = SecaoController
