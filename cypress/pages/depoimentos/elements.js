export const ELEMENTS = {
    PAGINA: {
        TITULO:  'div[class="board"] > h1',
        MAIN: '.editDep',
        DEPOIMENTOS: '.editDep > li',
        BTN_CADASTRAR_DEPOIMENTO: ".container > .botao-commerce"
    },
    FORM_DEPOIMENTO:{
        XPATH_POPUP_CADASTRO: "//div[@class='modal-theme depoimentos-modal active']/div/div",
        NOME: "#nome_depoimento",
        EMAIL: "#email_depoimento",
        CHECKBOX_AVALIAÇÃO: "input[name='nota_depoimento']",
        TEXTO: "#msg_depoimento",
        BTN_ENVIAR: "button",
        MSG_ERRO_NOME: "#nome_depoimento-error",
        MSG_ERRO_EMAIL: "#email_depoimento-error",
        MSG_ERRO_DEPOIMENTO: "#msg_depoimento-error"
    }
}