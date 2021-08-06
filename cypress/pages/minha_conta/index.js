/// <reference types="cypress" />

//importando métodos básicos
import Base from '../base_page'

// elementos da página
const el = require('./elements').ELEMENTS;

export class MinhaConta extends Base{

    static deslogarConta(){
        super.clickOnElement(el.PAGINA.GREETINGS)
        super.clickOnElement(el.PAGINA.LINK_SAIR)
        //super.clickOnText(el.PAGINA.TXT_LINK_SAIR);
    }

    static validarRedirecionamento(deve_redirecionar = "", usuario_nome = ""){
        if(deve_redirecionar){
            let nome_aux = usuario_nome
            let nome_nao_composto = nome_aux.split(' ')

            if(nome_nao_composto.length >= 2)
                nome_nao_composto = nome_nao_composto[0]

            super.validateTextExistOnPage(`Olá, ${nome_nao_composto}`)
        }
    }

}