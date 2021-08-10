/// <reference types="cypress" />

import Base from '../base_page'

const el = require('./elements').ELEMENTS;

export class Head extends Base{

    static acessar_site() {
        cy.visit("/")
    }

    static acessar_pagina_login(){
        //super.getElement(el.HEAD.BTN_MINHA_CONTA, 0, true).scrollTo('top').trigger('mouseover')
        //super.clickOnElement(el.HEAD.BTN_ENTRAR_MINHA_CONTA, true).scrollTo('top')
    }

    static acessarCategoriaPorNome(nome){
        super.clickOnElementByText(el.HEAD.CATEGORIA, nome, false, true)
    }

    static pesquisarProdutoPorString(texto) {
        super.getElement(el.HEAD.CAMPO_BUSCA).eq(1).type(texto)
        super.clickOnElement(el.HEAD.BTN_BUSCAR)
    }
}