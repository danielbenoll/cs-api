'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/** 
*  @swagger
*  definitions:
*    Secao:
*      type: object
*      properties:
*        nome:
*          type: string
*          maxLenght: 45
*        descricao:
*          type: string
*          maxLenght: 200
*      required:
*        - nome
*        - descricao
*    SecaoObject:
*      type: object
*      properties:
*        id:
*          type: integer
*        nome:
*          type: string
*          maxLenght: 45
*        descricao:
*          type: string
*          maxLenght: 200
*        created_at:
*          type: string
*        updated_at:
*          type: string
*      required:
*        - nome
*        - descricao
*/

class Secao extends Model {
    static get table(){
        return 'secoes'
    }

    static getCampos(){
        return [
            'nome', 
            'descricao'
        ]
    }

    armamentos(){
        return this.hasMany('App/Models/Armamento', 'id' , 'secao_id')
    }
}

module.exports = Secao
