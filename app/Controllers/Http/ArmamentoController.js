'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Armamento = use('App/Models/Armamento')

/**
 * Resourceful controller for interacting with armamentos
 */
class ArmamentoController {
  /**
  * @swagger
  * /api/v1/armamentos:
  *   get:
  *     tags:
  *       - Armamento
  *     security:
  *       - bearerAuth: []
  *     summary: Listar os Armamentos
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

    const query = Armamento.query()

    if(nome){
      query.where('nome', 'like', '%'+nome+'%')
    }

    return await query.paginate(page, qtd);
  }

  /**
   * Render a form to be used for creating a new armamento.
   * GET armamentos/create
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
  * /api/v1/armamentos:
  *   post:
  *     tags:
  *       - Armamento
  *     security:
  *       - bearerAuth: []
  *     summary: Insere um registro de Armamento
  *     parameters:
  *       - name: armamento
  *         description: Objeto de Armamento
  *         in: body
  *         required: true
  *         schema: 
  *           $ref: '#/definitions/Armamento'
  *     responses:
  *       200:
  *         description: Sucesso
  *         schema:
  *           $ref: '#/definitions/ArmamentoObject'
  *       400:
  *         description: Bad Request
  */
  async store ({ request, response }) {
    
    const campos = Armamento.getCampos()
    const dados = request.only(campos)
    return Armamento.create(dados)
  }

   /**
  * @swagger
  * /api/v1/armamentos/{id}:
  *   get:
  *     tags:
  *       - Armamento
  *     security:
  *       - bearerAuth: []
  *     summary: Exibe detalhes de um Armamento
  *     parameters:
  *       - name: id
  *         description: Identificador de um Armamento
  *         in: path
  *         required: true
  *         type: integer
  *     responses:
  *       200:
  *         description: Sucesso
  *         schema:
  *           $ref: '#/definitions/ArmamentoObject'
  *       400:
  *         description: Bad Request
  */
  async show ({ params, request, response, view }) {
    return await Armamento.query()
                          .where('id', params.id)
                          .with('classe')
                          .with('secao')
                          .with('pais')
                          .first()
  }

  /**
   * Render a form to update an existing armamento.
   * GET armamentos/:id/edit
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
  * /api/v1/armamentos/{id}:
  *   put:
  *     tags:
  *       - Armamento
  *     security:
  *       - bearerAuth: []
  *     summary: Altera um registro de Armamento
  *     parameters:
  *       - name: id
  *         description: Identificador de Armamento
  *         in: path
  *         required: true
  *         type: integer
  *       - name: armamento
  *         description: Objeto de Armamento
  *         in: body
  *         required: true
  *         schema: 
  *           $ref: '#/definitions/Armamento'
  *     responses:
  *       200:
  *         description: Sucesso
  *         schema:
  *           $ref: '#/definitions/ArmamentoObject'
  *       400:
  *         description: Bad Request
  */
  async update ({ params, request, response }) {
    const campos = Armamento.getCampos()
    const dados = request.only(campos)
    
    const armamento = await Armamento.findOrFail(params.id)
    
    armamento.merge(dados)
    await armamento.save();

    return armamento
}

  /**
  * @swagger
  * /api/v1/armamentos/{id}:
  *   delete:
  *     tags:
  *       - Armamento
  *     security:
  *       - bearerAuth: []
  *     summary: Exclui um Armamento
  *     parameters:
  *       - name: id
  *         description: Identificador de Armamento
  *         in: path
  *         required: true
  *         type: integer
  *     responses:
  *       200:
  *         description: Sucesso.
  */
  async destroy ({ params, request, response }) {
    const armamento = await Armamento.findOrFail(params.id)

    armamento.delete()

    return 'Apagado com sucesso!'
}
}

module.exports = ArmamentoController
