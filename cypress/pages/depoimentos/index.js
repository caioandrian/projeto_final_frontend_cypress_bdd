/// <reference types="cypress" />

import Base from '../base_page'

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

    static validaMensagem(msg) { 
        if(msg === 'de erro'){
            super.validateTextElement(el.FORM_DEPOIMENTO.MSG_ERRO_NOME, "Por favor, informe seu nome completo")
            super.validateTextElement(el.FORM_DEPOIMENTO.MSG_ERRO_EMAIL, "Por favor, informe seu e-mail")
            super.validateTextElement(el.FORM_DEPOIMENTO.MSG_ERRO_DEPOIMENTO, "Por favor, escreva uma mensagem no seu depoimento.")
        }
    }

    static cadastrarDepoimento(tipo){
        super.clickOnElement(el.PAGINA.BTN_CADASTRAR_DEPOIMENTO, 0, true);
        super.verifyIfElementIsVisibleByXPatch(el.FORM_DEPOIMENTO.XPATH_POPUP_CADASTRO)

        if(tipo === 'inválidas'){
            super.clickOnModalByXPath_and_elementInside(el.FORM_DEPOIMENTO.XPATH_POPUP_CADASTRO, el.FORM_DEPOIMENTO.BTN_ENVIAR);
        }else{
            //GET https://lojadetestetemanetzeetech.commercesuite.com.br/depoimentos-de-clientes

            /*let body = {
                nome_depoimento: "Tester",
                email_depoimento: "tester.santos@outook.com.br",
                nota_depoimento: "1",
                msg_depoimento: "Ótimo atendimento! Vocês estão de parabéns"
            }*/

            cy.intercept(
                'POST',
                '/loja/funcoes/envia_depoimento.php?loja=*&transID=*',
                {
                    statusCode: 200,
                    body: {
                        message: 'Depoimento enviado com sucesso!'
                    }
                }
            ).as('response')

            /*cy.intercept(
                'POST',
                '/loja/funcoes/envia_depoimento.php?loja=*&transID=*',
                (req) => {
                    //req.body = "nome_depoimento=Tester&email_depoimento=tester.santos@outook.com.br&nota_depoimento=1&msg_depoimento=Otimo!!!&g-recaptcha-response=03AGdBq26FA_aFSFZsgRACJSGi5KOC6Nqu4JLqQSaQWTqeuXY0cNd_RHwZV1eENHtSwfKVhdqVwLadWbA5443jQi1y0jM8LhpdFXqX54Dd0fbIn53AvCEYqeCDOcJztUDVCiXWI14VEuk0aV"

                    req.reply({
                        statusCode: 200,
                        body: {
                            message: 'Depoimento enviado com sucesso!'
                        }
                    })
                    //req.redirect('/depoimentos-de-clientes', 301)
                }
            ).as('response')*/

            cy.get(el.FORM_DEPOIMENTO.NOME).type('Otávio')
            cy.get(el.FORM_DEPOIMENTO.EMAIL).type('oto@uol.com.br')
            cy.get(el.FORM_DEPOIMENTO.TEXTO).type('Os melhores preços :D')
            cy.get(el.FORM_DEPOIMENTO.BTN_ENVIAR).click();
        
            cy.wait('@response')
              .then((interception) => {
                  console.log('interception', interception)
              })
            
        }
    }
}