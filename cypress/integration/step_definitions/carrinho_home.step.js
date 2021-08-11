/// <reference types="cypress" />
import {Given, When, Then, Before, And} from 'cypress-cucumber-preprocessor/steps'

import {Head} from '../../pages/head_page'
import {Home} from '../../pages/home'


Given(`que tenha ao menos um produto adicionado ao carrinho`, () => {
    Home.adicionarProdutosNoCarrinho(1)
})

When(`adicionar no carrinho {int} produtos da seção Novidades`, (quantidade) => {
    Home.adicionarProdutosNoCarrinho(quantidade)
})

When(`adicionar {int} items do mesmo produto da seção Novidades no carrinho`, (qtdeDoMesmoItem) => {
    Home.adicionarProdutosNoCarrinho(1, qtdeDoMesmoItem)
})

When(`remover o primeiro produto do carrinho usando a janela lateral da página home`, () => {
    Home.removerProdutoDoCarrinho(0)
})

Then(`o carrinho deverá ter {int} produtos adicionados`, (qtdeDoMesmoItem) => {
    Home.validarQuantidadeProdutosNoCarrinho(qtdeDoMesmoItem)
})

Then(`o carrinho deverá ter {int} items do produto adicionado`, (qtde) => {
    Home.validaQuantidadeDoMesmoProduto(qtde)
})