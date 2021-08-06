/// <reference types="cypress" />

//importando métodos básicos
import Base from '../base_page'

// elementos da página
const el = require('./elements').ELEMENTS;

export class Depoimentos extends Base{

    static validaTituloDaPagina(titulo) { 
        if(titulo)
            super.validateTextElement(el.PAGINA.TITULO, titulo)
    }

    static validaConteudoDaPagina() { 
        super.verifyIfElementNotEmpty(el.PAGINA.editDep)
        super.validateElementLenght(el.PAGINA.DEPOIMENTOS, 1, ">=")
    }

    static cadastrarDepoimento(tipo){
        super.clickOnElement(el.PAGINA.BTN_CADASTRAR_DEPOIMENTO, 0, true);
        super.verifyIfElementIsVisibleByXPatch(el.FORM_DEPOIMENTO.XPATH_POPUP_CADASTRO)

        //Por favor, informe seu nome completo
        //Por favor, informe seu e-mail
        //Por favor, escreva uma mensagem no seu depoimento.

        if(tipo === 'inválidas'){
            super.clickOnModalByXPath_and_elementInside(el.FORM_DEPOIMENTO.XPATH_POPUP_CADASTRO, el.FORM_DEPOIMENTO.BTN_ENVIAR);
            super.verifyIfElementIsVisible(el.FORM_DEPOIMENTO.MSG_ERRO_NOME)
            super.verifyIfElementIsVisible(el.FORM_DEPOIMENTO.MSG_ERRO_EMAIL)
            super.verifyIfElementIsVisible(el.FORM_DEPOIMENTO.MSG_ERRO_DEPOIMENTO)
        }

        //TODO: CADASTRO USANDO INTERCEPT
         // cy.intercept(method, url, staticResponse)

         //GET https://lojadetestetemanetzeetech.commercesuite.com.br/depoimentos-de-clientes

         //POST https://bam-cell.nr-data.net/events/1/NRBR-b4cc0fea5465368d898?a=438977010,439463578&v=1210.e2a3f80&to=NQBQMhcCD0MDARZcWgxKcRMWFw5dTU0%3D&rst=12799&ck=1&ref=https://lojadetestetemanetzeetech.commercesuite.com.br/depoimentos-de-clientes

        /*cy.intercept(
            'POST',
            'https://bam-cell.nr-data.net/events/1/NRBR-b4cc0fea5465368d898?a=438977010,439463578&v=1210.e2a3f80&to=NQBQMhcCD0MDARZcWgxKcRMWFw5dTU0%3D&rst=12799&ck=1&ref=https://lojadetestetemanetzeetech.commercesuite.com.br/depoimentos-de-clientes',
            {
                //resposta
                statusCode: 200,
                body: {
                    message: 'OLHAAAAAA',
                    result: ['my-data']
                }
            }
        ).as('response')*/
        
        /*cy.get(el.PAGINA.BTN_CADASTRAR_DEPOIMENTO).click();
        cy.get(el.FORM_DEPOIMENTO.NOME).type('Gabriel Santos')
        cy.get(el.FORM_DEPOIMENTO.EMAIL).type('gabriel@uol.com.br')
        cy.get(el.FORM_DEPOIMENTO.TEXTO).type('Simplesmente incrível')
        cy.get(el.FORM_DEPOIMENTO.BTN_ENVIAR).click();*/

        // clicar no botão irá acessar os dados 
        // do endpoint https://jsonplaceholder.typicode.com/todos/1

        /*cy.wait('@response')
        .then((interception) => {
            console.log('interception', interception)
        })*/
    }

}