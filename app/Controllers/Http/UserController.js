'use strict'

const User = use('App/Models/User')

class UserController {
    /**
     * @swagger
     * /api/v1/users:
     *   get:
     *     tags:
     *       - User
     *     security:
     *       - bearerAuth: []
     *     summary: Listar os Users
     *     parameters:
     *       - name: username
     *         description: Filtra o username parcialmente
     *         in: query
     *         required: false
     *         type: string
     *       - name: email
     *         description: Filtra o email parcialmente
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
        const {page, qtd, username, email} = request.all()

        const query = User.query()

        if(username){
        query.where('username', 'like', '%'+username+'%')
        }
        if(email){
        query.where('email', 'like', '%'+email+'%')
        }

        return await query.paginate(page, qtd);
    }
     /**
     * @swagger
     * /api/v1/users:
     *   post:
     *     tags:
     *       - User
     *     summary: Insere um registro de Usuário
     *     parameters:
     *       - name: body
     *         description: Objeto do Usuário
     *         in: body
     *         required: true
     *         schema: 
     *           $ref: '#/definitions/User'
     *     responses:
     *       200:
     *         description: Sucesso
     *         schema:
     *           $ref: '#/definitions/UserObject'
     *       400:
     *         description: Bad Request
     */

    async store({request}){
        const campos = ['username', 'email', 'password']
        const dados = request.only(campos)

        return await User.create(dados)
    }

    /**
     * @swagger
     * /api/v1/users/token:
     *   post:
     *     tags:
     *       - User
     *     summary: Login de Usuário
     *     parameters:
     *       - name: body
     *         description: Objeto do Usuário
     *         in: body
     *         required: true
     *         schema: 
     *           $ref: '#/definitions/UserLogin'
     *     responses:
     *       200:
     *         description: Sucesso
     *         schema:
     *           $ref: '#/definitions/UserObject'
     *       400:
     *         description: Bad Request
     */

    async token({request, auth}){

        const{ email, password }= request.all()

        return await auth.attempt(email, password)
    }

    /**
     * @swagger
     * /api/v1/users/{id}:
     *   get:
     *     tags:
     *       - User
     *     security:
     *       - bearerAuth: []
     *     summary: Exibe detalhes de um User
     *     parameters:
     *       - name: id
     *         description: Identificador de um User
     *         in: path
     *         required: true
     *         type: integer
     *     responses:
     *       200:
     *         description: Sucesso
     *         schema:
     *           $ref: '#/definitions/UserObject'
     *       400:
     *         description: Bad Request
     */
    async show ({ params, request, response, view }) {
        return await User.query()
                        .where('id', params.id)
                        .first()
    }

    /**
     * Render a form to update an existing user.
     * GET users/:id/edit
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
     * /api/v1/users/{id}:
     *   put:
     *     tags:
     *       - User
     *     security:
     *       - bearerAuth: []
     *     summary: Altera um registro de um User
     *     parameters:
     *       - name: id
     *         description: Identificador de um User
     *         in: path
     *         required: true
     *         type: integer
     *       - name: modo
     *         description: Objeto da User
     *         in: body
     *         required: true
     *         schema: 
     *           $ref: '#/definitions/User'
     *     responses:
     *       200:
     *         description: Sucesso
     *         schema:
     *           $ref: '#/definitions/UserObject'
     *       400:
     *         description: Bad Request
     */
    async update ({ params, request, response }) {
        const campos = ['username', 'email', 'password']
        const dados = request.only(campos)
        
        const user = await User.findOrFail(params.id)
        
        user.merge(dados)
        await user.save();

        return user
    }

    /**
     * @swagger
     * /api/v1/users/{id}:
     *   delete:
     *     tags:
     *       - User
     *     security:
     *       - bearerAuth: []
     *     summary: Exclui uma User
     *     parameters:
     *       - name: id
     *         description: Identificador de User
     *         in: path
     *         required: true
     *         type: integer
     *     responses:
     *       200:
     *         description: Sucesso.
     */
    async destroy ({ params, request, response }) {
        const user = await User.findOrFail(params.id)

        user.delete()

        return 'Apagado com sucesso!'
    }
}

module.exports = UserController
