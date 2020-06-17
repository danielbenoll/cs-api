'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Personagem = use('App/Models/Personagem')

/**
 * Resourceful controller for interacting with personagems
 */
class PersonagemController {
  /**
  * @swagger
  * /api/v1/personagens:
  *   get:
  *     tags:
  *       - Personagem
  *     security:
  *       - bearerAuth: []
  *     summary: Listar os Personagens
  *     parameters:
  *       - name: personagem
  *         description: Filtra o nome do personagem parcialmente
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

    const query = Personagem.query()

    if(nome){
      query.where('nome', 'like', '%'+nome+'%')
    }

    return await query.with('classe').paginate(page, qtd);
  }

  /**
   * Render a form to be used for creating a new personagem.
   * GET personagems/create
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
  * /api/v1/personagens:
  *   post:
  *     tags:
  *       - Personagem
  *     security:
  *       - bearerAuth: []
  *     summary: Insere um registro de Personagem
  *     parameters:
  *       - name: modo
  *         description: Objeto de Personagem
  *         in: body
  *         required: true
  *         schema: 
  *           $ref: '#/definitions/Personagem'
  *     responses:
  *       200:
  *         description: Sucesso
  *         schema:
  *           $ref: '#/definitions/PersonagemObject'
  *       400:
  *         description: Bad Request
  */
  async store ({ request, response }) {
    
    const campos = Personagem.getCampos()
    const dados = request.only(campos)
    return Personagem.create(dados)
  }

  /**
  * @swagger
  * /api/v1/personagens/{id}:
  *   get:
  *     tags:
  *       - Personagem
  *     security:
  *       - bearerAuth: []
  *     summary: Exibe detalhes de um Personagem
  *     parameters:
  *       - name: id
  *         description: Identificador de um Personagem
  *         in: path
  *         required: true
  *         type: integer
  *     responses:
  *       200:
  *         description: Sucesso
  *         schema:
  *           $ref: '#/definitions/PersonagemObject'
  *       400:
  *         description: Bad Request
  */
  async show ({ params, request, response, view }) {
    return await Personagem.query()
                          .where('id', params.id)
                          .with('pais')
                          .with('classe')
                          .first()
  }

  /**
   * Render a form to update an existing personagem.
   * GET personagems/:id/edit
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
  * /api/v1/personagens/{id}:
  *   put:
  *     tags:
  *       - Personagem
  *     security:
  *       - bearerAuth: []
  *     summary: Altera um registro de Personagem
  *     parameters:
  *       - name: id
  *         description: Identificador de Personagem
  *         in: path
  *         required: true
  *         type: integer
  *       - name: modo
  *         description: Objeto de Personagem
  *         in: body
  *         required: true
  *         schema: 
  *           $ref: '#/definitions/Personagem'
  *     responses:
  *       200:
  *         description: Sucesso
  *         schema:
  *           $ref: '#/definitions/PersonagemObject'
  *       400:
  *         description: Bad Request
  */
  async update ({ params, request, response }) {
    const campos = Personagem.getCampos()
    const dados = request.only(campos)
    
    const personagem = await Personagem.findOrFail(params.id)
    
    personagem.merge(dados)
    await personagem.save();

    return personagem
}

  /**
  * @swagger
  * /api/v1/personagens/{id}:
  *   delete:
  *     tags:
  *       - Personagem
  *     security:
  *       - bearerAuth: []
  *     summary: Exclui um Personagem
  *     parameters:
  *       - name: id
  *         description: Identificador de Personagem
  *         in: path
  *         required: true
  *         type: integer
  *     responses:
  *       200:
  *         description: Sucesso.
  */
  async destroy ({ params, request, response }) {
    const personagem = await Personagem.findOrFail(params.id)

    personagem.delete()

    return 'Apagado com sucesso!'
}
}

module.exports = PersonagemController
