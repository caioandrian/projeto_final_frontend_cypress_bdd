/// <reference types="cypress" />

import Base from '../base_page'

const el = require('./elements').ELEMENTS;

export class Carrinho extends Base{

    static fecharModalAlert() {
        super.clickOnElementByFind_InsideAnotherElement(el.MODAL.DIV_ALERT, el.MODAL.BTN_FECHAR);
        super.verifyIfElementIsHidden(el.MODAL.DIV_ALERT)
    }

    static validarProdutoNoCarrinho(){
        // com bug na página do carrinho
        // as vezes o produto adicionado não aparece.......
        super.validateElementLenght(el.PAGINA.ARRAY_PRODUTOS, 1, ">=")  
    }

    static removerProdutoNaPaginaCarrinho(){
        super.clickOnElement(el.PAGINA.REMOVER_PRODUTO)
    }
}