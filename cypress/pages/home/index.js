/// <reference types="cypress" />

//importando métodos básicos
import Base from '../base_page'

// elementos da página
const el = require('./elements').ELEMENTS;

export class Home extends Base{

    static acessarPrimeiroProdutoEmDestaque() {
        super.getElementByXPath(el.PAGINA.XPATH_PRODUTOS_DESTAQUES, 0, true).click()
    }

    static editarVariantesDoProduto(quantidade = 1, operador = ""){
        
        if(super.getElement(el.POPUP_INFO_PROD.ARRAY_BOX_VARIANTES)
            .then((elem) => {
                if(elem.length === 3){
                    super.getElement(el.POPUP_INFO_PROD.SELECT_VARIANTES, 0).then((seletor2) => {
                        let valorOption = seletor2[0][2].outerText
                        super.selectOption(el.POPUP_INFO_PROD.SELECT_VARIANTES, valorOption, 0)
                    })
                }
                if(elem.length === 4){
                    super.getElement(el.POPUP_INFO_PROD.SELECT_VARIANTES, 1).then((seletor2) => {
                        let valorOption = seletor2[0][2].outerText
                        super.selectOption(el.POPUP_INFO_PROD.SELECT_VARIANTES, valorOption, 1)
                    })
                }
            })
        )
            
        if(quantidade >= 1){
            for(let i = 1; i < quantidade; i++)
                if(operador === ">")
                    super.clickOnElement(el.POPUP_INFO_PROD.AUMENTAR_QTDE)
                else
                    super.clickOnElement(el.POPUP_INFO_PROD.DIMINUIR_QTDE)
        }
    }

    static adicionarNoCarrinho(){
        super.clickOnText(el.POPUP_INFO_PROD.TXT_BTN_COMPRAR)
    }

    static selecionarProduto(posicao){
        super.getElementByXPath(el.PAGINA.XPATH_PRODUTOS_NOVIDADES, posicao, true).click()
        this.verifyIfElementIsVisible(el.POPUP_INFO_PROD.DIV)
    }

    static carrinhoContinuarComprando(){
        super.verifyIfElementIsVisible(el.CARRINHO_LATERAL.DIV)
        super.clickOnElement(el.CARRINHO_LATERAL.BTN_VOLTAR)
    }

    static removerProdutoDoCarrinho(posicao){
        super.verifyIfElementIsVisible(el.CARRINHO_LATERAL.DIV)
        super.clickOnElement(el.CARRINHO_LATERAL.BTN_REMOVER_PRODUTO, posicao)
    }

    static acessarPaginaCheckout(){
        super.verifyIfElementIsVisible(el.CARRINHO_LATERAL.DIV)
        super.clickOnElement(el.CARRINHO_LATERAL.BTN_FINALIZAR_PEDIDO)
    }

    /*static irParaPaginaDoMeuCarrinho(){
        super.verifyIfElementIsVisible(el.CARRINHO_LATERAL.DIV)
        super.validateElementLenght(el.CARRINHO_LATERAL.PRODUTOS, 1, ">=")
        super.clickOnElement(el.CARRINHO_LATERAL.BTN_MEU_CARRINHO, 0)
    }*/

    static carrinhoLateralContinuarComprando(){
        super.clickOnElementByFind_InsideAnotherElement(el.CARRINHO_LATERAL.DIV, el.CARRINHO_LATERAL.BTN_VOLTAR)
    }

    static validaInformacoesDoProdutoJanelaFlutuante() {
        super.verifyIfElementIsVisible(el.POPUP_INFO_PROD.DIV)
        super.validateTextElement(el.POPUP_INFO_PROD.TITULO_PRODUTO);
        super.validateTextElement(el.POPUP_INFO_PROD.VALOR_PRODUTO);
    }

    static visualizarDepoimentosEmDestaque() {
        super.getElementByXPath(el.PAGINA.XPATH_DIV_DEPOIMENTOS_DESTAQUE)
    }

    static validarQuantidadeProdutosNoCarrinho(quantidade){
        if(quantidade === 0){
            super.validateTextElement(el.CARRINHO_LATERAL.DIV_MSG_CARRINHO, el.CARRINHO_LATERAL.TXT_CARRINHO_VAZIO)
        }else{
            super.validateElementLenght(el.CARRINHO_LATERAL.PRODUTOS, quantidade, "=")
        }
    }

    static acessarPaginaDepoimentos() {
        super.getElementByXPath(el.PAGINA.XPATH_DEPOIMENTOS, 0, true).click()
    }

    static validaQuantidadeDepoimentos(){
        super.validateElementLenghtByXPath(el.PAGINA.XPATH_DEPOIMENTOS, 1, ">=")
    }

    static validaQuantidadeDoMesmoProduto(quantidade){
        super.validateTextElement(el.CARRINHO_LATERAL.QTDE_PRODUTO, `Qnt: ${quantidade}`)
    }

}