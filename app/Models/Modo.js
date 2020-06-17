'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/** 
*  @swagger
*  definitions:
*    Modo:
*      type: object
*      properties:
*        modo:
*          type: string
*          maxLenght: 45
*        descricao:
*          type: string
*          maxLenght: 400
*      required:
*        - modo
*        - descricao
*    ModoObject:
*      type: object
*      properties:
*        id:
*          type: integer
*        modo:
*          type: string
*          maxLenght: 45
*        descricao:
*          type: string
*          maxLenght: 400
*        created_at:
*          type: string
*        updated_at:
*          type: string
*      required:
*        - modo
*        - descricao
*/

class Modo extends Model {
    static getCampos(){
        return [
            'modo', 
            'descricao'
        ]
    }
    mapas(){
        return this.belongsToMany('App/Models/Mapa').pivotTable('mapa_modos')
    }
}

module.exports = Modo
