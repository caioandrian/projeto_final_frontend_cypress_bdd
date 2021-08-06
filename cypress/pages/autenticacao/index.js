/// <reference types="cypress" />

//importando métodos básicos
import Base from '../base_page'

import {Factory} from '../../fixtures/factory'

// elementos da página
const el = require('./elements').ELEMENTS;

export class Autenticacao extends Base{

    static acessarPagina() {
        cy.visit('/central-do-cliente')
    }

    static cadastrarUsuario(tipo = ""){
        let novo_usuario = Factory.postUsuarioPF('válidos');

        super.setElementTypeValue(el.PAGINA.EMAIL_CADASTRO, novo_usuario.email, undefined, true)
        super.clickOnElement(el.PAGINA.BTN_CADASTRESE, undefined, true)
        super.verifyIfElementIsVisible(el.FORM_CADASTRO_PF.BOX)

        if(tipo === 'inválidos'){
            super.setElementTypeValue(el.FORM_CADASTRO_PF.NOME, "caio", undefined, true)
            super.clickOnElement(el.FORM_CADASTRO_PF.BTN_CONFIRMAR, undefined, true)

            cy.fixture('msgs_erro_form_usuario').then((msg)=>{
                super.validateTextElement(el.FORM_CADASTRO_PF.SPAN_MSG_NOME_ERRO, msg.nome, undefined, true)  
            })
        }
        super.setElementTypeValue(el.FORM_CADASTRO_PF.NOME, `${novo_usuario.nome} ${novo_usuario.sobrenome}`, 0, true)
        
        if(tipo === 'inválidos'){
            super.setElementTypeValue(el.FORM_CADASTRO_PF.CPF, "234.555.222-11", undefined, true)
            super.clickOnElement(el.FORM_CADASTRO_PF.BTN_CONFIRMAR, undefined, true)

            cy.fixture('msgs_erro_form_usuario').then((msg)=>{
                super.validateTextElement(el.FORM_CADASTRO_PF.SPAN_MSG_CPF_ERRO, msg.cpf_inválido, undefined, true)
            })
        }
        super.setElementTypeValue(el.FORM_CADASTRO_PF.CPF, novo_usuario.cpf, 0, true)

        if(tipo === 'inválidos'){
            super.setElementTypeValue(el.FORM_CADASTRO_PF.CELULAR, "4663", undefined, true)
            super.clickOnElement(el.FORM_CADASTRO_PF.BTN_CONFIRMAR, undefined, true)

            cy.fixture('msgs_erro_form_usuario').then((msg)=>{
                super.validateTextElement(el.FORM_CADASTRO_PF.SPAN_MSG_CELULAR_ERRO, msg.celular_inválido, undefined, true)
            })
        }
        super.setElementTypeValue(el.FORM_CADASTRO_PF.CELULAR, novo_usuario.celular, 0, true)
        
        super.setElementTypeValue(el.FORM_CADASTRO_PF.EMAIL2, novo_usuario.email, undefined, true)
        super.setElementTypeValue(el.FORM_CADASTRO_PF.SENHA, novo_usuario.senha, undefined, true)
        super.setElementTypeValue(el.FORM_CADASTRO_PF.SENHA2, novo_usuario.senha, undefined, true)

        if(tipo === 'válidos' || tipo === 'cadastroVálido')
            super.clickOnElement(el.FORM_CADASTRO_PF.BTN_CONFIRMAR, undefined, true)

        return novo_usuario
    }

    static loginUsuario(tipo, email, senha){

        super.clickOnElement(el.PAGINA.BTN_LOGIN)

        if(tipo === 'válidos'){
            super.setElementTypeValue(el.FORM_LOGIN.EMAIL, email)
            super.clickOnElement(el.FORM_LOGIN.BTN_CONTINUAR)

            super.setElementTypeValue(el.FORM_LOGIN.SENHA, senha)
            super.clickOnElement(el.FORM_LOGIN.BTN_CONFIRMAR)
        }else{
            super.setElementTypeValue(el.FORM_LOGIN.EMAIL, email)
            super.clickOnElement(el.FORM_LOGIN.BTN_CONTINUAR)

            super.verifyIfElementIsVisible(el.FORM_LOGIN.BOX_MSGS_ERRO)
            cy.fixture('msgs_erro_form_login').then((msg)=>{
                super.validateTextElement(el.FORM_LOGIN.SPAN_MSG_ERRO, msg.email_invalido, undefined, true)
            })

            super.setElementTypeValue(el.FORM_LOGIN.EMAIL, "qualquer@gmail.com")
            super.clickOnElement(el.FORM_LOGIN.BTN_CONTINUAR)

            super.setElementTypeValue(el.FORM_LOGIN.SENHA, senha)
            super.clickOnElement(el.FORM_LOGIN.BTN_CONFIRMAR)

            super.verifyIfElementIsVisible(el.FORM_LOGIN.BOX_MSGS_ERRO)
            cy.fixture('msgs_erro_form_login').then((msg)=>{
                super.validateTextElement(el.FORM_LOGIN.SPAN_MSG_ERRO, msg.autenticacao_falhou, undefined, true)
            })
        }
    }
}