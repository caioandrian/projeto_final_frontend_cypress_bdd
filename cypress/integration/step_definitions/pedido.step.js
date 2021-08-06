/// <reference types="cypress" />
import {Given, When, Then, Before, And} from 'cypress-cucumber-preprocessor/steps'

//páginas
import {Head} from '../../pages/head_page'
import {Home} from '../../pages/home'
import {Checkout} from '../../pages/checkout'

Given(`que esteja na página home da loja manetzeetech`, () => {
    Head.acessar_site()
})

Given(`que tenha ao menos um produto adicionado ao carrinho`, () => {
    Home.selecionarProduto(1)
    Home.editarVariantesDoProduto()
    Home.adicionarNoCarrinho();
})

Given(`seja um cliente PF da manetzeetech`, () => {
    let usuario = Checkout.gerarNovoUsuarioPF()
    cy.wrap(usuario).as('usuario_criado')
})


Given(`tenha acessado a página de checkout`, () => {
    Home.acessarPaginaCheckout();
})

When(`preencher todas as informações úteis para que seja feito o pedido`, () => {
    cy.get('@usuario_criado').then( (usuario) => {
        Checkout.informarDadosPessoais(usuario)
    })

    Checkout.informarEndereco()
    //Checkout.pagamentoComCartaoCredito()
    Checkout.pagamentoComBoleto()
})


Then(`deverá registrado o pedido do cliente`, () => {
    Checkout.validaPedidoRealizado("boleto")
})