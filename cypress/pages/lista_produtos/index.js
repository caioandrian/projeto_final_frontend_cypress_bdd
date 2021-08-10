/// <reference types="cypress" />

import Base from '../base_page'

const el = require('./elements').ELEMENTS;

export class ListaProdutos extends Base{

    static validaTituloDaPagina(titulo) { 
        if(titulo)
            super.validateTextElement(el.PAGINA.TITULO, titulo)
    }

    static validaConteudoDaPagina(conteudo) {
        if(conteudo)
            super.validateElementLenght(el.PAGINA.ARRAY_PRODUTOS, 1, ">=")     
    }

    static validaMensagemResultadoDaBusca(mensagem) {
        if(mensagem)
            super.validateTextElement(el.PAGINA.MSG_ERRO, mensagem)
    }
}