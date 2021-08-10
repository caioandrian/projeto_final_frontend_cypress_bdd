/// <reference types="cypress" />
import {Given, When, Then, Before} from 'cypress-cucumber-preprocessor/steps'

import {Head} from '../../pages/head_page'
import {Home} from '../../pages/home'
import {ListaProdutos} from '../../pages/lista_produtos'

Given(`que esteja na página home`, () => {
    Head.acessar_site()
})

When(`procurar um produto por {string}`, (texto) => {
    Head.pesquisarProdutoPorString(texto)
})

When(`selecionar a categoria {string}`, (categoria) => {
    Head.acessarCategoriaPorNome(categoria)
})

When(`escolher o primeiro produto em destaque`, () => {
    Home.acessarPrimeiroProdutoEmDestaque()
})

Then(`deverá apresentar o {string} na página de resultado`, (titulo) => {
    ListaProdutos.validaTituloDaPagina(titulo);
})

Then(`deverá apresentar a página de resultado com o conteúdo {string}`, (conteudo) => {
    ListaProdutos.validaConteudoDaPagina(conteudo);
})

Then(`deverá apresentar a lista de produtos da categoria selecionada`, (titulo) => {
    ListaProdutos.validaTituloDaPagina(titulo);
})

Then(`deverá apresentar as informações do produto na janela flutuante`, () => {
    Home.validaInformacoesDoProdutoJanelaFlutuante();
})

Then(`deverá apresentar as informações do produto na página do produto`, () => {
    cy.stepNotImplemented()
})

Then(`deverá apresentar a mensagem com valor {string} na página de resultado`, (mensagem) => {
    ListaProdutos.validaMensagemResultadoDaBusca(mensagem)
})