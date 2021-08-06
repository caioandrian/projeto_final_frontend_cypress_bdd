/// <reference types="cypress" />
import {Given, When, Then, Before, And} from 'cypress-cucumber-preprocessor/steps'

//páginas
import {Head} from '../../pages/head_page'
import {Home} from '../../pages/home'
import {Depoimentos} from '../../pages/depoimentos'

//background / contexto
Given(`que esteja na página home da loja manetzeetech`, () => {
    Head.acessar_site()
})

When(`visualizar a seção {string}`, (secao) => {
    Home.visualizarDepoimentosEmDestaque()
})

When(`acessar a página de depoimentos`, (secao) => {
    Home.acessarPaginaDepoimentos()
})

And(`cadastrar um novo depoimento no site da manetzeetech`, () => {
    Depoimentos.cadastrarDepoimento();
})

When(`cadastrar um novo depoimento usando credenciais {string} no site da manetzeetech`, (tipo) => {
    Depoimentos.cadastrarDepoimento(tipo)

    //TODO: CONCLUIR CADASTRO USANDO INTERCEPT
    cy.stepNotImplemented()
})

Then(`deverá ser exibido pelo menos um depoimento do cliente manetzeetech`, () => {
    Home.validaQuantidadeDepoimentos()
})

Then(`deverá retornar a mensagem {string}`, (msg) => {
    cy.stepNotImplemented()
})

Then(`deverão ser exibidos todos os {string} cadastrados pelos clientes da loja manetzeetech`, (titulo) => {
    Depoimentos.validaTituloDaPagina(titulo)
    Depoimentos.validaConteudoDaPagina()
})