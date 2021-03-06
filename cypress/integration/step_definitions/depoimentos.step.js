/// <reference types="cypress" />
import {Given, When, Then, Before, And} from 'cypress-cucumber-preprocessor/steps'

import {Head} from '../../pages/head_page'
import {Home} from '../../pages/home'
import {Depoimentos} from '../../pages/depoimentos'


When(`visualizar a seção {string}`, (secao) => {
    Home.visualizarDepoimentosEmDestaque()
})

When(`acessar a página de depoimentos`, (secao) => {
    Home.acessarPaginaDepoimentos()
})

When(`cadastrar um novo depoimento usando credenciais {string} no site`, (tipo) => {
    Depoimentos.cadastrarDepoimento(tipo)
})

Then(`deverá ser exibido pelo menos um depoimento do cliente`, () => {
    Home.validaQuantidadeDepoimentos()
})

Then(`deverá retornar a mensagem {string}`, (msg) => {
    Depoimentos.validaMensagem(msg)
})

Then(`deverão ser exibidos todos os {string} cadastrados pelos clientes`, (titulo) => {
    Depoimentos.validaTituloDaPagina(titulo)
    Depoimentos.validaConteudoDaPagina()
})