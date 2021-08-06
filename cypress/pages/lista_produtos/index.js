/// <reference types="cypress" />

//importando métodos básicos
import Base from '../base_page'

// elementos da página
const el = require('./elements').ELEMENTS;

export class ListaProdutos extends Base{

    static validaTituloDaPagina(titulo) { 
        if(titulo)
            super.validateTextElement(el.PAGINA.TITULO, titulo)
    }

    static validaConteudoDaPagina(conteudo) {
        if(conteudo === 'lista_de_produtos')
            super.validateElementLenght(el.PAGINA.ARRAY_PRODUTOS, 1, ">=")
        else
            super.validateTextElement(el.PAGINA.MSG_ERRO, conteudo)
    }
}