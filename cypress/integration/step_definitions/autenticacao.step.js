/// <reference types="cypress" />
import {Given, When, Then, Before} from 'cypress-cucumber-preprocessor/steps'

//páginas
import {Head} from '../../pages/head_page'
import {Autenticacao} from '../../pages/autenticacao'
import {MinhaConta} from '../../pages/minha_conta'

Given(`que esteja na página home da loja manetzeetech`, () => {
    Head.acessar_site()
})

Given(`tenha acessado a página de login e cadastro da loja manetzeetech`, () => {
    Autenticacao.acessarPagina()
    //TODO: TENTAR NOVAMENTE COM HEAD..
    //Head.acessar_pagina_login()
})

Given(`que esteja com um usuário {string}`, (cadastro_status) => {
    if(cadastro_status === 'cadastroVálido'){
        let user = Autenticacao.cadastrarUsuario(cadastro_status)
        cy.wrap(user).as('usuario_criado')
        MinhaConta.deslogarConta()
        Autenticacao.acessarPagina()
    }else{
        cy.wrap({nome: "", senha: "qualquer", email: "qualquer@"}).as('usuario_criado')
    }
})

When(`preencher os campos com {string} para {string}`, (dados_tipo, objetivo) => {
    if(objetivo === 'realizar um novo cadastro'){
        let user = Autenticacao.cadastrarUsuario(dados_tipo)
        cy.wrap(user).as('usuario_criado')
    }
    
    if(objetivo === 'acessar a aplicação')
        cy.get('@usuario_criado').then((usuario) => {
            Autenticacao.loginUsuario(dados_tipo, usuario.email, usuario.senha)
        })
})

Then(`deverá ser {string} para a página minha conta`, (redirecionado = "") => {
    cy.get('@usuario_criado').then( (usuario) => {
        MinhaConta.validarRedirecionamento(redirecionado, usuario.nome)
        if(redirecionado)
            MinhaConta.deslogarConta()
    })
})
