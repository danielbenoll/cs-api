'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/** 
*  @swagger
*  definitions:
*    Classe:
*      type: object
*      properties:
*        lado:
*          type: string
*          maxLenght: 45
*        descricao:
*          type: string
*          maxLenght: 200
*        img:
*          type: string
*          maxLenght: 100
*      required:
*        - lado
*        - descricao
*    ClasseObject:
*      type: object
*      properties:
*        id:
*          type: integer
*        lado:
*          type: string
*          maxLenght: 45
*        descricao:
*          type: string
*          maxLenght: 200
*        img:
*          type: string
*          maxLenght: 100
*        created_at:
*          type: string
*        updated_at:
*          type: string
*      required:
*        - lado
*        - descricao
*/

class Classe extends Model {
    static getCampos(){
        return [
            'lado', 
            'img', 
            'descricao'
        ]
    }

    personagens(){
        return this.hasMany('App/Models/Personagem')
    }

    armamentos(){
        return this.hasMany('App/Models/Armamento')
    }
}

module.exports = Classe
