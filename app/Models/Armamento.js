'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/** 
*  @swagger
*  definitions:
*    Armamento:
*      type: object
*      properties:
*        classe_id:
*          type: integer
*        secao_id:
*          type: integer
*        pais_id:
*          type: integer
*        nome:
*          type: string
*          maxLenght: 45
*        descricao:
*          type: string
*        foto:
*          type: string
*      required:
*        - nome
*        - descricao
*        - secao_id
*    ArmamentoObject:
*      type: object
*      properties:
*        id:
*          type: integer
*        classe_id:
*          type: integer
*        secao_id:
*          type: integer
*        pais_id:
*          type: integer
*        nome:
*          type: string
*          maxLenght: 45
*        descricao:
*          type: string
*        foto:
*          type: string
*        created_at:
*          type: string
*        updated_at:
*          type: string
*      required:
*        - nome
*        - descricao
*        - secao_id
*/

class Armamento extends Model {
    static getCampos(){
        return [
            'classe_id', 
            'secao_id',
            'pais_id',
            'nome',
            'descricao',
            'foto'
        ]
    }

    classe(){
        return this.belongsTo('App/Models/Classe')
    }

    secao(){
        return this.belongsTo('App/Models/Secao')
    }

    pais(){
        return this.belongsTo('App/Models/Pais', 'pais_id', 'id')
    }
}

module.exports = Armamento
