/// <reference types="cypress" />
import {Given, When, Then, Before, And} from 'cypress-cucumber-preprocessor/steps'

import {Head} from '../../pages/head_page'
import {Home} from '../../pages/home'

Given(`que esteja na página home`, () => {
    Head.acessar_site()
})

Given(`que tenha ao menos um produto adicionado ao carrinho`, () => {
    Home.selecionarProduto(1)
    Home.editarVariantesDoProduto(1, ">")
    Home.adicionarNoCarrinho();
})

When(`adicionar no carrinho {int} produtos da seção Novidades`, (quantidade) => {
    for (let i = 0; i < quantidade; i ++){
        if(quantidade === 1){
            Home.selecionarProduto(0)
            Home.editarVariantesDoProduto(1, ">")
            Home.adicionarNoCarrinho();
        }else{
            Home.selecionarProduto(i)
            Home.editarVariantesDoProduto(1, ">")
            Home.adicionarNoCarrinho();
            if(i != quantidade){
                Home.carrinhoContinuarComprando()
            }
        }
    }
})

When(`adicionar {int} items do mesmo produto da seção Novidades no carrinho`, (qtde) => {
    Home.selecionarProduto(0)
    Home.editarVariantesDoProduto(qtde, ">")
    Home.adicionarNoCarrinho()
})

When(`remover o primeiro produto do carrinho usando a janela lateral da página home`, () => {
    Home.removerProdutoDoCarrinho(0)
})

Then(`o carrinho deverá ter {int} produtos adicionados`, (quantidade) => {
    Home.validarQuantidadeProdutosNoCarrinho(quantidade)
})

Then(`o carrinho deverá ter {int} items do produto adicionado`, (qtde) => {
    Home.validaQuantidadeDoMesmoProduto(qtde)
})