'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/** 
*  @swagger
*  definitions:
*    MapaModo:
*      type: object
*      properties:
*        mapa_id:
*          type: integer
*        modo_id:
*          type: integer
*      required:
*        - mapa_id
*        - modo_id
*    MapaModoObject:
*      type: object
*      properties:
*        id:
*          type: integer
*        mapa_id:
*          type: integer
*        modo_id:
*          type: integer
*        created_at:
*          type: string
*        updated_at:
*          type: string
*      required:
*        - mapa_id
*        - modo_id
*/

class MapaModo extends Model {
    static getCampos(){
        return [
            'mapa_id', 
            'modo_id'
        ]
    }
}

module.exports = MapaModo
