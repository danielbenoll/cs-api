'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/** 
*  @swagger
*  definitions:
*    Mapa:
*      type: object
*      properties:
*        pais_id:
*          type: integer
*        nome:
*          type: string
*          maxLenght: 45
*      required:
*        - pais_id
*        - nome
*    MapaObject:
*      type: object
*      properties:
*        id:
*          type: integer
*        pais_id:
*          type: integer
*        nome:
*          type: string
*          maxLenght: 45
*        created_at:
*          type: string
*        updated_at:
*          type: string
*      required:
*        - pais_id
*        - nome
*/

class Mapa extends Model {
    static getCampos(){
        return [
            'pais_id', 
            'nome'
        ]
    }
    
    modos(){
        return this.belongsToMany('App/Models/Modo').pivotTable('mapa_modos')
    }

    fotos(){
        return this.hasMany('App/Models/Foto')
    }

    pais(){
        return this.belongsTo('App/Models/Pais', 'pais_id', 'id')
    }
}

module.exports = Mapa
