'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Classe = use('App/Models/Classe')

/**
 * Resourceful controller for interacting with classes
 */
class ClasseController {
  /**
  * @swagger
  * /api/v1/classes:
  *   get:
  *     tags:
  *       - Classe
  *     security:
  *       - bearerAuth: []
  *     summary: Listar os Classes
  *     parameters:
  *       - name: lado
  *         description: Filtra o nome do lado parcialmente
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
    const {page, qtd, lado} = request.all()

    const query = Classe.query()

    if(lado){
      query.where('lado', 'like', '%'+lado+'%')
    }

    return await query.paginate(page, qtd);
  }

  /**
   * Render a form to be used for creating a new classe.
   * GET classes/create
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
  * /api/v1/classes:
  *   post:
  *     tags:
  *       - Classe
  *     security:
  *       - bearerAuth: []
  *     summary: Insere um registro de Classe
  *     parameters:
  *       - name: classe
  *         description: Objeto de Classe
  *         in: body
  *         required: true
  *         schema: 
  *           $ref: '#/definitions/Classe'
  *     responses:
  *       200:
  *         description: Sucesso
  *         schema:
  *           $ref: '#/definitions/ClasseObject'
  *       400:
  *         description: Bad Request
  */
  async store ({ request, response }) {

    const campos = Classe.getCampos()
    const dados = request.only(campos)
    return Classe.create(dados)
  }

   /**
  * @swagger
  * /api/v1/classes/{id}:
  *   get:
  *     tags:
  *       - Classe
  *     security:
  *       - bearerAuth: []
  *     summary: Exibe detalhes de um Classe
  *     parameters:
  *       - name: id
  *         description: Identificador de um Classe
  *         in: path
  *         required: true
  *         type: integer
  *     responses:
  *       200:
  *         description: Sucesso
  *         schema:
  *           $ref: '#/definitions/ClasseObject'
  *       400:
  *         description: Bad Request
  */
  async show ({ params, request, response, view }) {
    return await Classe.query()
                       .where('id', params.id)
                       .with('personagens')
                       .with('armamentos')
                       .first()
  }

  /**
   * Render a form to update an existing classe.
   * GET classes/:id/edit
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
  * /api/v1/classes/{id}:
  *   put:
  *     tags:
  *       - Classe
  *     security:
  *       - bearerAuth: []
  *     summary: Altera um registro de Classe
  *     parameters:
  *       - name: id
  *         description: Identificador de Classe
  *         in: path
  *         required: true
  *         type: integer
  *       - name: classe
  *         description: Objeto de Classe
  *         in: body
  *         required: true
  *         schema: 
  *           $ref: '#/definitions/Classe'
  *     responses:
  *       200:
  *         description: Sucesso
  *         schema:
  *           $ref: '#/definitions/ClasseObject'
  *       400:
  *         description: Bad Request
  */
  async update ({ params, request, response }) {
    const campos = Classe.getCampos()
    const dados = request.only(campos)
    
    const classe = await Classe.findOrFail(params.id)
    
    classe.merge(dados)
    await classe.save();

    return classe
  }

  /**
  * @swagger
  * /api/v1/classes/{id}:
  *   delete:
  *     tags:
  *       - Classe
  *     security:
  *       - bearerAuth: []
  *     summary: Exclui um Classe
  *     parameters:
  *       - name: id
  *         description: Identificador de Classe
  *         in: path
  *         required: true
  *         type: integer
  *     responses:
  *       200:
  *         description: Sucesso.
  */
  async destroy ({ params, request, response }) {
    const classe = await Classe.findOrFail(params.id)

    classe.delete()

    return 'Apagado com sucesso!'
  }
}

module.exports = ClasseController
