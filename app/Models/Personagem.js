'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/** 
*  @swagger
*  definitions:
*    Personagem:
*      type: object
*      properties:
*        pais_id:
*          type: integer
*        classe_id:
*          type: integer
*        nome:
*          type: string
*          maxLenght: 45
*        foto:
*          type: string
*          maxLenght: 100
*      required:
*        - pais_id
*        - classe_id
*        - nome
*    PersonagemObject:
*      type: object
*      properties:
*        id:
*          type: integer
*        pais_id:
*          type: integer
*        classe_id:
*          type: integer
*        nome:
*          type: string
*          maxLenght: 45
*        foto:
*          type: string
*          maxLenght: 100
*        created_at:
*          type: string
*        updated_at:
*          type: string
*      required:
*        - pais_id
*        - classe_id
*        - nome
*/

class Personagem extends Model {
    static get table(){
        return 'personagens'
    }
    static getCampos(){
        return [
            'pais_id', 
            'classe_id',
            'nome',
            'foto'
        ]
    }

    pais(){
        return this.belongsTo('App/Models/Pais', 'pais_id' , 'id')
    }

    classe(){
        return this.belongsTo('App/Models/Classe')
    }
}

module.exports = Personagem
