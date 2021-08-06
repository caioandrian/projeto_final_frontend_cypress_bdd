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

            super.setElementTypeValue(el.PAGINA.EMAIL_CADASTRO, novo_usuario.email, 0, true)
            super.clickOnElement(el.PAGINA.BTN_CADASTRESE, 0, true)

            super.verifyIfElementIsVisible(el.FORM_CADASTRO_PF.BOX)
            let nomecompleto = (tipo === 'NomeInválido') ? "caio" : `${novo_usuario.nome} ${novo_usuario.sobrenome}`
            super.setElementTypeValue(el.FORM_CADASTRO_PF.NOME, nomecompleto, 0, true)
            let cpf = (tipo === 'cpfInválido') ? "999.999.999-99" : novo_usuario.cpf
            super.setElementTypeValue(el.FORM_CADASTRO_PF.CPF, cpf, 0, true)
            let celular = (tipo === 'celularInválido') ? "4663" : novo_usuario.celular
            super.setElementTypeValue(el.FORM_CADASTRO_PF.CELULAR, celular, 0, true)
            super.setElementTypeValue(el.FORM_CADASTRO_PF.EMAIL2, novo_usuario.email, 0, true)
            super.setElementTypeValue(el.FORM_CADASTRO_PF.SENHA, novo_usuario.senha, 0, true)
            super.setElementTypeValue(el.FORM_CADASTRO_PF.SENHA2, novo_usuario.senha, 0, true)
            super.clickOnElement(el.FORM_CADASTRO_PF.BTN_CONFIRMAR)

            return novo_usuario
    }

    static loginUsuario(tipo, email, senha){
        if(tipo === 'emailInválido'){
            super.clickOnElement(el.PAGINA.BTN_LOGIN)
            super.setElementTypeValue(el.FORM_LOGIN.EMAIL, "qualquer@")
            super.clickOnElement(el.FORM_LOGIN.BTN_CONTINUAR)
        }else{
            super.clickOnElement(el.PAGINA.BTN_LOGIN)
            super.setElementTypeValue(el.FORM_LOGIN.EMAIL, email)
            super.clickOnElement(el.FORM_LOGIN.BTN_CONTINUAR)

            let senha_final = (tipo === 'senhaInválida') ? "qualquer...": senha 
            super.setElementTypeValue(el.FORM_LOGIN.SENHA, senha_final)
            super.clickOnElement(el.FORM_LOGIN.BTN_CONFIRMAR)
        }
    }

    static validarMensagem(msg){
        if(msg){
            super.verifyIfPageContainingTextVisible(msg, true)
        }
    }

    static validarRedirecionamento(deve_redirecionar = "", usuario_nome = ""){
        if(deve_redirecionar){
            let nome_aux = usuario_nome
            let nome_nao_composto = nome_aux.split(' ')

            if(nome_nao_composto.length >= 2)
                nome_nao_composto = nome_nao_composto[0]

            super.verifyIfPageContainingTextVisible(`Olá, ${nome_nao_composto}`)
        }
    }
}