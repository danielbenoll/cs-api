'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/** 
*  @swagger
*  definitions:
*    Pais:
*      type: object
*      properties:
*        local:
*          type: string
*          maxLenght: 45
*        bandeira:
*          type: string
*          maxLenght: 100
*      required:
*        - local
*    PaisObject:
*      type: object
*      properties:
*        id:
*          type: integer
*        local:
*          type: string
*          maxLenght: 45
*        bandeira:
*          type: string
*          maxLenght: 100
*        created_at:
*          type: string
*        updated_at:
*          type: string
*      required:
*        - local
*/

class Pais extends Model {
    static get table(){
        return 'paises'
    }
    // static get primaryKey () {
    //     return 'pais_id'
    // }
    static getCampos(){
        return [
            'local', 
            'bandeira'
        ]
    }

    mapas(){
        return this.hasMany('App/Models/Mapa', 'id' , 'pais_id')
    }

    armamentos(){
        return this.hasMany('App/Models/Armamento', 'id' , 'pais_id')
    }

    personagens(){
        return this.hasMany('App/Models/Personagem', 'id' , 'pais_id')
    }
}

module.exports = Pais
