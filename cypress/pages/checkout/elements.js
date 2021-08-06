export const ELEMENTS = {
    PAGINA:{
        INPUT_EMAIL: '#login-email',
        BTN_CONTINUAR: '#login-action',
        CONTEUDO: '#checkout-collapse'
    },
    FORM_DADOS_PESSOAIS: {
        DIV: '#form-customer',
        EMAIL: '#customer-email',
        NOME_COMPLETO: '#customer-name',
        CPF: '#customer-cpf',
        CELULAR: '#customer-phone',
        BTN_CONFIRMAR: 'button',
        NEWSLETTER: "input[name='newsletter']",
        TIPO_PESSOA_PJ: "input[name='customer-type-business']"
    },
    FORM_ENDERECO: {
        DIV: "#form-shipping",
        CEP: "#customer-address-zipcode",
        BTN_LOCALIZAR_CEP: "#btnFindAddress",
        ENDERECO_AUTOCOMPLETE: '#form-shipping > fieldset > div + div > div > p',
        NUM: "#customer-address-number",
        BTN_SALVAR_DADOS: "button"
    },
    FORM_PAGAMENTO:{
        DIV_FORMAS_PAG: "#payment-form",
        ARRAY_OPCOES_PAGAMENTO: "#payment-form > div ~ div > header",
        BTN_FINALIZAR_COMPRA: "#finalize-order",
        EDITAR_DADOS_PESSOAIS: 'a[data-tray-tst="customerEdit"]',
        LOADING_GIF: "#payment > .ch-modal-overlay > .ch-modal-content > .ch-loading-mask > .ch-loading-line"
    },
    CARTAO_CREDITO: {
        DIV_FORM_CARTAO_CREDITO: "#credit-card",
        NUMERO_CARTAO: "input[name='card[number]']",
        SELECT_MES: "#creditCardMonth",
        SELECT_ANO: "#creditCardYear",
        NOME_COMPLETO_PROPRIETARIO_CARTAO: "#cardHolder",
        CCV: "#card-cvv",
        SELECT_PARCELAS: "#card-instalment",
    },
    PEDIDO_CONCLUIDO: {
        CONTEUDO: "#finalize-container",
        DIV_MSG: ".col-md-7 > .ch-title-2",
        TEXT_MSG_AGUARDANDO_PAGAMENTO_BOLETO: "Está quase lá, agora só falta realizar o pagamento...",
        CODIGO_BOLETO: "#copy-numbers"
    }
}