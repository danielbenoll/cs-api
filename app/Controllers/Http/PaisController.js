'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Pais = use('App/Models/Pais')

/**
 * Resourceful controller for interacting with pais
 */
class PaisController {
  /**
  * @swagger
  * /api/v1/paises:
  *   get:
  *     tags:
  *       - País
  *     security:
  *       - bearerAuth: []
  *     summary: Listar os Países
  *     parameters:
  *       - name: local
  *         description: Filtra o nome do local parcialmente
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
    const {page, qtd, local} = request.all()

    const query = Pais.query()

    if(local){
      query.where('local', 'like', '%'+local+'%')
    }

    return await query.paginate(page, qtd);
  }

  /**
   * Render a form to be used for creating a new pais.
   * GET pais/create
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
  * /api/v1/paises:
  *   post:
  *     tags:
  *       - País
  *     security:
  *       - bearerAuth: []
  *     summary: Insere um registro de País
  *     parameters:
  *       - name: pais
  *         description: Objeto de País
  *         in: body
  *         required: true
  *         schema: 
  *           $ref: '#/definitions/Pais'
  *     responses:
  *       200:
  *         description: Sucesso
  *         schema:
  *           $ref: '#/definitions/PaisObject'
  *       400:
  *         description: Bad Request
  */
  async store ({ request, response }) {

    const campos = Pais.getCampos()
    const dados = request.only(campos)
    return Pais.create(dados)
  }

/**
  * @swagger
  * /api/v1/paises/{id}:
  *   get:
  *     tags:
  *       - País
  *     security:
  *       - bearerAuth: []
  *     summary: Exibe detalhes de um País
  *     parameters:
  *       - name: id
  *         description: Identificador de um País
  *         in: path
  *         required: true
  *         type: integer
  *     responses:
  *       200:
  *         description: Sucesso
  *         schema:
  *           $ref: '#/definitions/PaisObject'
  *       400:
  *         description: Bad Request
  */
  async show ({ params, request, response, view }) {

    return await Pais.query()
                     .where('id', params.id)
                     .with('mapas')
                     .with('armamentos')
                     .with('personagens')
                     .first()
  }

  /**
   * Render a form to update an existing pais.
   * GET pais/:id/edit
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
  * /api/v1/paises/{id}:
  *   put:
  *     tags:
  *       - País
  *     security:
  *       - bearerAuth: []
  *     summary: Altera um registro de País
  *     parameters:
  *       - name: id
  *         description: Identificador de País
  *         in: path
  *         required: true
  *         type: integer
  *       - name: pais
  *         description: Objeto de Pais
  *         in: body
  *         required: true
  *         schema: 
  *           $ref: '#/definitions/Pais'
  *     responses:
  *       200:
  *         description: Sucesso
  *         schema:
  *           $ref: '#/definitions/PaisObject'
  *       400:
  *         description: Bad Request
  */
  async update ({ params, request, response }) {
    const campos = Pais.getCampos()
    const dados = request.only(campos)
    
    const pais = await Pais.findOrFail(params.id)
    
    pais.merge(dados)
    await pais.save();

    return pais
  }

/**
  * @swagger
  * /api/v1/paises/{id}:
  *   delete:
  *     tags:
  *       - País
  *     security:
  *       - bearerAuth: []
  *     summary: Exclui um País
  *     parameters:
  *       - name: id
  *         description: Identificador de País
  *         in: path
  *         required: true
  *         type: integer
  *     responses:
  *       200:
  *         description: Sucesso.
  */
  async destroy ({ params, request, response }) {
    const pais = await Pais.findOrFail(params.id)

    pais.delete()

    return 'Apagado com sucesso!'
  }
}

module.exports = PaisController
