/// <reference types="cypress" />
import {Given, When, Then, Before} from 'cypress-cucumber-preprocessor/steps'

import {Head} from '../../pages/head_page'
import {Autenticacao} from '../../pages/autenticacao'
import {MinhaConta} from '../../pages/minha_conta'

Given(`que esteja na página home`, () => {
    Head.acessar_site()
})

Given(`tenha acessado a página de login e cadastro`, () => {
    Autenticacao.acessarPagina()
})

Given(`que esteja com um usuário com um {string}`, (cadastro_status) => {
    let user = Autenticacao.CadastrarUsuarioParaLogin(cadastro_status)
    cy.wrap(user).as('usuario_criado')
})

Given(`que esteja com a conta {string}`, (status_conta) => {
    MinhaConta.deslogarConta(status_conta)
    Autenticacao.acessarPagina()
})

When(`preencher os campos com {string} para realizar um novo cadastro`, (dados_tipo) => {
    let user = Autenticacao.cadastrarUsuario(dados_tipo)
    cy.wrap(user).as('usuario_criado')
})

When(`preencher os campos com {string} para acessar a aplicação`, (dados_tipo) => {
    cy.get('@usuario_criado').then((usuario) => {
        Autenticacao.loginUsuario(dados_tipo, usuario.email, usuario.senha)
    })
})

Then(`deverá ser {string} para a página minha conta`, (redirecionado = "") => {
    cy.get('@usuario_criado').then( (usuario) => {
        MinhaConta.validarRedirecionamento(redirecionado, usuario.nome)
    })
})
