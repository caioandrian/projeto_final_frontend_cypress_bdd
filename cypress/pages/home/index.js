/// <reference types="cypress" />

//importando métodos básicos
import Base from '../base_page'

// elementos da página
const el = require('./elements').ELEMENTS;

export class Home extends Base{

    static acessarPrimeiroProdutoEmDestaque() {
        super.getElementByXPath(el.PAGINA.XPATH_PRODUTOS_DESTAQUES, 0, true).click()
    }

    static adicionarProdutosNoCarrinho(quantidadeDeProdutos, qtdeDeitemsDoMesmoProduto = 1, operador = ">"){
        for (let i = 1; i <= quantidadeDeProdutos; i ++){
            this.selecionarProduto(i - 1)
            this.selecionarVariantesDoProduto(qtdeDeitemsDoMesmoProduto, operador)
            this.adicionarNoCarrinho();

            if(i < quantidadeDeProdutos)
                this.carrinhoContinuarComprando()
        }
    }

    static selecionarVariantesDoProduto(qtdeDeitemsDoMesmoProduto = 1, operador = ">"){
        //SELECIONAR VARIANTES DO MESMO (COR, TAMANHO, VOLTAGEM.. ETC)
        super.getElement(el.POPUP_INFO_PROD.ARRAY_BOX_VARIANTES)
            .then((elem) => {
                let qtdeElementosDentroDaBox = elem.length

                if(qtdeElementosDentroDaBox >= 3){
                    let indexDoSeletor = 0
                    for(let i = 3; i < qtdeElementosDentroDaBox; i++){

                        //SELECIONA UMA OPÇÃO NO SELECT DA VARIANTE
                        super.getElement(el.POPUP_INFO_PROD.SELECT_VARIANTES, indexDoSeletor).then((seletor2) => {
                            let valorOption = seletor2[0][2].outerText
                            super.selectOption(el.POPUP_INFO_PROD.SELECT_VARIANTES, valorOption, 0)
                        })
                        indexDoSeletor++
                    }
                }
            })
        
        //ADICIONAR MAIS ITEMS DO MESMO PRODUTO
        if(qtdeDeitemsDoMesmoProduto >= 1){
            for(let i = 1; i < qtdeDeitemsDoMesmoProduto; i++){
                if(operador === ">")
                    super.clickOnElement(el.POPUP_INFO_PROD.AUMENTAR_QTDE)
                else
                    super.clickOnElement(el.POPUP_INFO_PROD.DIMINUIR_QTDE)
            }
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