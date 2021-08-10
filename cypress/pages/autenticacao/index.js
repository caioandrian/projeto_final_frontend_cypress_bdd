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

        // DADOS SEMPRE VÁLIDOS POIS PARA VALIDAR O PRÓXIMO CAMPO
        // O CAMPO ANTERIOR PRECISA ESTAR COM UM DADO VÁLIDO
        let novo_usuario = Factory.postUsuarioPF('válidos');

        //E-Mail
        super.setElementTypeValue(el.PAGINA.EMAIL_CADASTRO, novo_usuario.email, undefined, true)
        super.clickOnElement(el.PAGINA.BTN_CADASTRESE, undefined, true)
        super.verifyIfElementIsVisible(el.FORM_CADASTRO_PF.BOX)

        //Nome Completo
        if(tipo === 'inválidos'){
            cy.fixture('dados_invalidos_form_usuario').then((dados)=>{
                for (const campo of dados.nome_completo) {
                    super.setElementTypeValue(el.FORM_CADASTRO_PF.NOME, campo.valor, undefined, true)
                    super.clickOnElement(el.FORM_CADASTRO_PF.BTN_CONFIRMAR, undefined, true)
                    super.validateTextElement(el.FORM_CADASTRO_PF.SPAN_MSG_NOME_ERRO, campo.resultado_esperado, undefined, true)
                }
            })
        }
        super.setElementTypeValue(el.FORM_CADASTRO_PF.NOME, `${novo_usuario.nome} ${novo_usuario.sobrenome}`, 0, true)
        
        //CPF
        if(tipo === 'inválidos'){
            cy.fixture('dados_invalidos_form_usuario').then((campo)=>{
                super.setElementTypeValue(el.FORM_CADASTRO_PF.CPF, campo.cpf.vazio.valor, undefined, true)
                super.clickOnElement(el.FORM_CADASTRO_PF.BTN_CONFIRMAR, undefined, true)
                super.validateTextElement(el.FORM_CADASTRO_PF.SPAN_MSG_CPF_ERRO, campo.cpf.vazio.resultado_esperado, undefined, true)

                super.setElementTypeValue(el.FORM_CADASTRO_PF.CPF, campo.cpf.invalido.valor, undefined, true)
                super.clickOnElement(el.FORM_CADASTRO_PF.BTN_CONFIRMAR, undefined, true)
                super.validateTextElement(el.FORM_CADASTRO_PF.SPAN_MSG_CPF_ERRO, campo.cpf.invalido.resultado_esperado, undefined, true)

                super.setElementTypeValue(el.FORM_CADASTRO_PF.CPF, campo.cpf.quantidade_insuficiente.valor, undefined, true)
                super.clickOnElement(el.FORM_CADASTRO_PF.BTN_CONFIRMAR, undefined, true)
                super.validateTextElement(el.FORM_CADASTRO_PF.SPAN_MSG_CPF_ERRO, campo.cpf.quantidade_insuficiente.resposta_esperada, undefined, true)

                super.setElementTypeValue(el.FORM_CADASTRO_PF.CPF, campo.cpf.com_letras.valor, undefined, true)
                super.clickOnElement(el.FORM_CADASTRO_PF.BTN_CONFIRMAR, undefined, true)
                super.verifyIfElementIsEmpty(el.FORM_CADASTRO_PF.CPF, undefined, true)

                super.setElementTypeValue(el.FORM_CADASTRO_PF.CPF, campo.cpf.quantidade_acima_do_permitido.valor, undefined, true)
                super.clickOnElement(el.FORM_CADASTRO_PF.BTN_CONFIRMAR, undefined, true)
                super.verifyStringQuantidadeCaracteres(el.FORM_CADASTRO_PF.CPF, 14, undefined, true)     
            })
        }
        super.setElementTypeValue(el.FORM_CADASTRO_PF.CPF, novo_usuario.cpf, 0, true)

        //CELULAR
        if(tipo === 'inválidos'){
            cy.fixture('dados_invalidos_form_usuario').then((campo)=>{
                super.setElementTypeValue(el.FORM_CADASTRO_PF.CELULAR, campo.celular.vazio.valor, undefined, true)
                super.clickOnElement(el.FORM_CADASTRO_PF.BTN_CONFIRMAR, undefined, true)
                super.validateTextElement(el.FORM_CADASTRO_PF.SPAN_MSG_CELULAR_ERRO, campo.celular.vazio.resultado_esperado, undefined, true)

                super.setElementTypeValue(el.FORM_CADASTRO_PF.CELULAR, campo.celular.invalido.valor, undefined, true)
                super.clickOnElement(el.FORM_CADASTRO_PF.BTN_CONFIRMAR, undefined, true)
                super.validateTextElement(el.FORM_CADASTRO_PF.BLOCO_ALERTA, campo.celular.invalido.resultado_esperado, undefined, true)

                super.setElementTypeValue(el.FORM_CADASTRO_PF.CELULAR, campo.celular.quantidade_insuficiente.valor, undefined, true)
                super.clickOnElement(el.FORM_CADASTRO_PF.BTN_CONFIRMAR, undefined, true)
                super.validateTextElement(el.FORM_CADASTRO_PF.SPAN_MSG_ERRO_TELEFONES_EM_BRANCO, campo.celular.quantidade_insuficiente.resultado_esperado, undefined, true)
                
                super.setElementTypeValue(el.FORM_CADASTRO_PF.CELULAR, campo.celular.com_letras.valor, undefined, true)
                super.clickOnElement(el.FORM_CADASTRO_PF.BTN_CONFIRMAR, undefined, true)
                super.verifyIfElementIsEmpty(el.FORM_CADASTRO_PF.CELULAR, undefined, true)

                super.setElementTypeValue(el.FORM_CADASTRO_PF.CELULAR, campo.celular.quantidade_acima_do_permitido.valor, undefined, true)
                super.clickOnElement(el.FORM_CADASTRO_PF.BTN_CONFIRMAR, undefined, true)
                super.verifyStringQuantidadeCaracteres(el.FORM_CADASTRO_PF.CELULAR, 15, undefined, true)
            })
        }
        super.setElementTypeValue(el.FORM_CADASTRO_PF.CELULAR, novo_usuario.celular, 0, true)
        
        //CONFIRMAÇÃO DO EMAIL E SENHA
        super.setElementTypeValue(el.FORM_CADASTRO_PF.EMAIL2, novo_usuario.email, undefined, true)
        super.setElementTypeValue(el.FORM_CADASTRO_PF.SENHA, novo_usuario.senha, undefined, true)
        super.setElementTypeValue(el.FORM_CADASTRO_PF.SENHA2, novo_usuario.senha, undefined, true)

        if(tipo != 'inválidos')
            super.clickOnElement(el.FORM_CADASTRO_PF.BTN_CONFIRMAR, undefined, true)

        return novo_usuario
    }

    static CadastrarUsuarioParaLogin(tipo = ""){
        if(tipo === "cadastroInválido"){
            return Factory.postUsuarioPF(tipo);
        }else{
            let novo_usuario = Factory.postUsuarioPF(tipo);
            super.setElementTypeValue(el.PAGINA.EMAIL_CADASTRO, novo_usuario.email, undefined, true)
            super.clickOnElement(el.PAGINA.BTN_CADASTRESE, undefined, true)
            super.verifyIfElementIsVisible(el.FORM_CADASTRO_PF.BOX)
            super.setElementTypeValue(el.FORM_CADASTRO_PF.NOME, `${novo_usuario.nome} ${novo_usuario.sobrenome}`, 0, true)
            super.setElementTypeValue(el.FORM_CADASTRO_PF.CPF, novo_usuario.cpf, 0, true)
            super.setElementTypeValue(el.FORM_CADASTRO_PF.CELULAR, novo_usuario.celular, 0, true)
            super.setElementTypeValue(el.FORM_CADASTRO_PF.EMAIL2, novo_usuario.email, undefined, true)
            super.setElementTypeValue(el.FORM_CADASTRO_PF.SENHA, novo_usuario.senha, undefined, true)
            super.setElementTypeValue(el.FORM_CADASTRO_PF.SENHA2, novo_usuario.senha, undefined, true)

            super.clickOnElement(el.FORM_CADASTRO_PF.BTN_CONFIRMAR, undefined, true)
            return novo_usuario
        }
    }

    static loginUsuario(tipo, email, senha){
        super.clickOnElement(el.PAGINA.BTN_LOGIN)

        super.setElementTypeValue(el.FORM_LOGIN.EMAIL, email)
        super.clickOnElement(el.FORM_LOGIN.BTN_CONTINUAR)

        if(tipo != 'válidos'){
            super.verifyIfElementIsVisible(el.FORM_LOGIN.BOX_MSGS_ERRO)
            cy.fixture('msgs_erro_form_login').then((msg)=>{
                super.validateTextElement(el.FORM_LOGIN.SPAN_MSG_ERRO, msg.email_invalido, undefined, true)
            })

            super.setElementTypeValue(el.FORM_LOGIN.EMAIL, "qualquer@gmail.com")
            super.clickOnElement(el.FORM_LOGIN.BTN_CONTINUAR)
        }

        super.setElementTypeValue(el.FORM_LOGIN.SENHA, senha)
        super.clickOnElement(el.FORM_LOGIN.BTN_CONFIRMAR)

        if(tipo != 'válidos'){
            super.verifyIfElementIsVisible(el.FORM_LOGIN.BOX_MSGS_ERRO)
            cy.fixture('msgs_erro_form_login').then((msg)=>{
                super.validateTextElement(el.FORM_LOGIN.SPAN_MSG_ERRO, msg.autenticacao_falhou, undefined, true)
            })
        }
    }
}