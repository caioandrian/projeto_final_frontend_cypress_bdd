/// <reference types="cypress" />

//importando métodos básicos
import Base from '../base_page'

import {Factory} from '../../fixtures/factory'

// elementos da página
const el = require('./elements').ELEMENTS;

export class Checkout extends Base{

    static informarDadosPessoais(usuario){
        super.setElementTypeValue(el.PAGINA.INPUT_EMAIL, usuario.email)
        super.clickOnElement(el.PAGINA.BTN_CONTINUAR)

        super.verifyIfElementIsVisible(el.FORM_DADOS_PESSOAIS.DIV)
        //super.validateTextElement(el.FORM_DADOS_PESSOAIS.EMAIL, usuario.email)

        super.setElementTypeValue(el.FORM_DADOS_PESSOAIS.NOME_COMPLETO, `${usuario.nome} ${usuario.sobrenome}`)
        super.setElementTypeValue(el.FORM_DADOS_PESSOAIS.CPF, usuario.cpf)
        super.setElementTypeValue(el.FORM_DADOS_PESSOAIS.CELULAR, usuario.celular)
        super.verifyIfCheckBoxElementIsNotChecked(el.FORM_DADOS_PESSOAIS.NEWSLETTER)
        super.clickOnElement(el.FORM_DADOS_PESSOAIS.NEWSLETTER, undefined, false, true)
        super.verifyIfCheckBoxElementIsChecked(el.FORM_DADOS_PESSOAIS.NEWSLETTER)
        super.verifyIfCheckBoxElementIsNotChecked(el.FORM_DADOS_PESSOAIS.TIPO_PESSOA_PJ)

        super.clickOnElementByFind_InsideAnotherElement(el.FORM_DADOS_PESSOAIS.DIV, el.FORM_DADOS_PESSOAIS.BTN_CONFIRMAR)
    }

    static informarEndereco(){
        let endereco = Factory.gerarEndereco('válidos');
        super.verifyIfElementIsVisible(el.FORM_ENDERECO.DIV)
        super.removeReadOnly(el.FORM_ENDERECO.CEP);
        super.setElementTypeValue(el.FORM_ENDERECO.CEP, endereco.cep);
        super.clickOnElement(el.FORM_ENDERECO.BTN_LOCALIZAR_CEP)
        super.verifyIfElementIsVisible(el.FORM_ENDERECO.ENDERECO_AUTOCOMPLETE)
        super.setElementTypeValue(el.FORM_ENDERECO.NUM, endereco.numero)

        super.clickOnElementByFind_InsideAnotherElement(el.FORM_ENDERECO.DIV, el.FORM_ENDERECO.BTN_SALVAR_DADOS)
    }

    static pagamentoComCartaoCredito(){
        let formaPagamento = Factory.gerarFormaPagamento('válidos');
        super.verifyIfElementIsVisible(el.FORM_PAGAMENTO.DIV_FORMAS_PAG)

        super.verifyIfElementIsVisible(el.FORM_PAGAMENTO.ARRAY_OPCOES_PAGAMENTO)
        super.clickOnElement(el.FORM_PAGAMENTO.ARRAY_OPCOES_PAGAMENTO, 0, true)

        super.verifyIfElementIsVisible(el.CARTAO_CREDITO.DIV_FORM_CARTAO_CREDITO)
        super.setElementTypeValue(el.CARTAO_CREDITO.NUMERO_CARTAO, formaPagamento.numero_cartao);
        super.selectOption(el.CARTAO_CREDITO.SELECT_MES, formaPagamento.mes);
        super.selectOption(el.CARTAO_CREDITO.SELECT_ANO, formaPagamento.ano);
        super.setElementTypeValue(el.CARTAO_CREDITO.NOME_COMPLETO_PROPRIETARIO_CARTAO, formaPagamento.proprietario);
        super.setElementTypeValue(el.CARTAO_CREDITO.CCV, formaPagamento.ccv);
        super.selectOption(el.CARTAO_CREDITO.SELECT_PARCELAS, formaPagamento.parcelas);

        //super.clickOnElementByFind_InsideAnotherElement(el.FORM_PAGAMENTO.DIV_FORMAS_PAG, el.FORM_PAGAMENTO.BTN_FINALIZAR_COMPRA)
    }

    static pagamentoComBoleto(){
        super.verifyIfElementIsVisible(el.FORM_PAGAMENTO.DIV_FORMAS_PAG)

        super.clickOnElement(el.FORM_PAGAMENTO.EDITAR_DADOS_PESSOAIS)
        super.clickOnElementByFind_InsideAnotherElement(el.FORM_DADOS_PESSOAIS.DIV, el.FORM_DADOS_PESSOAIS.BTN_CONFIRMAR)

        super.verifyIfElementIsHidden(el.FORM_PAGAMENTO.LOADING_GIF)

        super.verifyIfElementIsVisible(el.FORM_PAGAMENTO.ARRAY_OPCOES_PAGAMENTO)
        super.clickOnElement(el.FORM_PAGAMENTO.ARRAY_OPCOES_PAGAMENTO, 1, true)

        super.verifyIfElementIsHidden(el.FORM_PAGAMENTO.LOADING_GIF)
        super.clickOnElementByFind_InsideAnotherElement(el.FORM_PAGAMENTO.DIV_FORMAS_PAG, el.FORM_PAGAMENTO.BTN_FINALIZAR_COMPRA)
    }

    static gerarNovoUsuarioPF(){
        let novo_usuario = Factory.postUsuarioPF('válidos');
        return novo_usuario
    }

    static validaPedidoRealizado(tipo){
        if(tipo === "boleto"){
            super.verifyIfElementIsVisible(el.PEDIDO_CONCLUIDO.CONTEUDO);
            super.validateTextElement(el.PEDIDO_CONCLUIDO.DIV_MSG, el.PEDIDO_CONCLUIDO.TEXT_MSG_AGUARDANDO_PAGAMENTO_BOLETO);
            super.verifyIfElementNotEmpty(el.PEDIDO_CONCLUIDO.CODIGO_BOLETO);
        }
        
    }
}