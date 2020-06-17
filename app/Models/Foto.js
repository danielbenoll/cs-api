'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/** 
*  @swagger
*  definitions:
*    Foto:
*      type: object
*      properties:
*        mapa_id:
*          type: integer
*        foto:
*          type: string
*          maxLenght: 100
*      required:
*        - mapa_id
*        - foto
*    FotoObject:
*      type: object
*      properties:
*        id:
*          type: integer
*        mapa_id:
*          type: integer
*        foto:
*          type: string
*          maxLenght: 100
*        created_at:
*          type: string
*        updated_at:
*          type: string
*      required:
*        - mapa_id
*        - foto
*/

class Foto extends Model {
    static getCampos(){
        return [
            'foto', 
            'mapa_id'
        ]
    }

    mapa(){
        return this.belongsTo('App/Models/Mapa')
    }
}

module.exports = Foto
