/// <reference types="cypress" />

import Base from '../base_page'

const el = require('./elements').ELEMENTS;

export class MinhaConta extends Base{

    static deslogarConta(status_conta = false){
        if(status_conta)
            super.clickOnElement(el.PAGINA.GREETINGS)
            super.clickOnElement(el.PAGINA.LINK_SAIR)
    }

    static validarRedirecionamento(deve_redirecionar = false, usuario_nome = ""){
        if(deve_redirecionar){
            let nome_aux = usuario_nome
            let nome_nao_composto = nome_aux.split(' ')
            
            if(nome_nao_composto.length >= 2)
                nome_nao_composto = nome_nao_composto[0]

            super.validateTextExistOnPage(`Olá, ${nome_nao_composto}`)
            this.deslogarConta("sim")
        }
    }

}