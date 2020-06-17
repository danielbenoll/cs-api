'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Foto = use('App/Models/Foto')

/**
 * Resourceful controller for interacting with fotos
 */
class FotoController {
  /**
  * @swagger
  * /api/v1/fotos:
  *   get:
  *     tags:
  *       - Foto
  *     security:
  *       - bearerAuth: []
  *     summary: Listar os Fotos
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
    
    const {page, qtd, mapa_id} = request.all()

    const query = Foto.query()

    if(mapa_id){
      query.where('mapa_id', 'like', mapa_id)
    }

    return await query.paginate(page, qtd);
  }

  /**
   * Render a form to be used for creating a new foto.
   * GET fotos/create
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
  * /api/v1/fotos:
  *   post:
  *     tags:
  *       - Foto
  *     security:
  *       - bearerAuth: []
  *     summary: Insere um registro de Foto
  *     parameters:
  *       - name: foto
  *         description: Objeto de Foto
  *         in: body
  *         required: true
  *         schema: 
  *           $ref: '#/definitions/Foto'
  *     responses:
  *       200:
  *         description: Sucesso
  *         schema:
  *           $ref: '#/definitions/FotoObject'
  *       400:
  *         description: Bad Request
  */
  async store ({ request, response }) {

    const campos = Foto.getCampos()
    const dados = request.only(campos)
    return Foto.create(dados)
  }

   /**
  * @swagger
  * /api/v1/fotos/{id}:
  *   get:
  *     tags:
  *       - Foto
  *     security:
  *       - bearerAuth: []
  *     summary: Exibe detalhes de um Foto
  *     parameters:
  *       - name: id
  *         description: Identificador de um Foto
  *         in: path
  *         required: true
  *         type: integer
  *     responses:
  *       200:
  *         description: Sucesso
  *         schema:
  *           $ref: '#/definitions/FotoObject'
  *       400:
  *         description: Bad Request
  */
  async show ({ params, request, response, view }) {
    
    return await Foto.query()
                      .where('id', params.id)
                      .with('mapa')
                      .first()
  }

  /**
   * Render a form to update an existing foto.
   * GET fotos/:id/edit
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
  * /api/v1/fotos/{id}:
  *   put:
  *     tags:
  *       - Foto
  *     security:
  *       - bearerAuth: []
  *     summary: Altera um registro de Foto
  *     parameters:
  *       - name: id
  *         description: Identificador de Foto
  *         in: path
  *         required: true
  *         type: integer
  *       - name: foto
  *         description: Objeto de Foto
  *         in: body
  *         required: true
  *         schema: 
  *           $ref: '#/definitions/Foto'
  *     responses:
  *       200:
  *         description: Sucesso
  *         schema:
  *           $ref: '#/definitions/FotoObject'
  *       400:
  *         description: Bad Request
  */
  async update ({ params, request, response }) {
    const campos = Foto.getCampos()
    const dados = request.only(campos)
    
    const foto = await Foto.findOrFail(params.id)
    
    foto.merge(dados)
    await foto.save();

    return foto
  }

  /**
  * @swagger
  * /api/v1/fotos/{id}:
  *   delete:
  *     tags:
  *       - Foto
  *     security:
  *       - bearerAuth: []
  *     summary: Exclui um Foto
  *     parameters:
  *       - name: id
  *         description: Identificador de Foto
  *         in: path
  *         required: true
  *         type: integer
  *     responses:
  *       200:
  *         description: Sucesso.
  */
  async destroy ({ params, request, response }) {
    const foto = await Foto.findOrFail(params.id)

    foto.delete()

    return 'Apagado com sucesso!'
  }
}

module.exports = FotoController
