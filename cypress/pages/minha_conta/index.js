/// <reference types="cypress" />

//importando métodos básicos
import Base from '../base_page'

// elementos da página
const el = require('./elements').ELEMENTS;

export class MinhaConta extends Base{

    static deslogarConta(){
        super.clickOnElement(el.PAGINA.GREETINGS)
        super.verifyIfPageContainingTextVisible(el.PAGINA.TXT_LINK_SAIR).click()
    }

}