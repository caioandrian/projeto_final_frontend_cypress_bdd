export const ELEMENTS = {
    PAGINA: {
        XPATH_PRODUTOS_DESTAQUES:  "//h2[text()='Destaques']//following-sibling::div/div/div/div",
        XPATH_PRODUTOS_NOVIDADES:  "//h2[text()='Novidades']//following-sibling::div/div/div/div",
        XPATH_DIV_DEPOIMENTOS_DESTAQUE: "//h2[text()='O QUE OS CLIENTES ESTÃO DIZENDO']//following-sibling::div/div/ul",
        XPATH_DEPOIMENTOS:  "//h2[text()='O QUE OS CLIENTES ESTÃO DIZENDO']//following-sibling::div/div/ul/li",
    },
    POPUP_INFO_PROD:{
        DIV: "div[class='box-center']",
        TITULO_PRODUTO: ".box-info > .name",
        VALOR_PRODUTO: "form > .box-price > .price",
        TXT_BTN_COMPRAR: "Comprar",
        INPUT_QTDE_READONLY: '.quant_modal',
        DIMINUIR_QTDE: "div[class='increment-page'] > div",
        AUMENTAR_QTDE: "div[class='increment-page'] > div + div",
        SELECT_VARIANTES: '.box-info > form > div > select',
        ARRAY_BOX_VARIANTES: ".box-info > form > div"
    },
    CARRINHO_LATERAL:{
        DIV: '.cart-sidebar',
        BTN_VOLTAR: '.box-prev',
        BTN_MEU_CARRINHO : 'div[class="footer-cart"] > div + div > a',
        BTN_FINALIZAR_PEDIDO : 'div[class="footer-cart"] > div + div > a + a',
        PRODUTOS: '.box-cart',
        //FN_BTN_REMOVER_PRODUTO: (posicao) => `[data-id=${posicao}]`
        BTN_REMOVER_PRODUTO: '.remove',
        TXT_CARRINHO_VAZIO: 'Carrinho Vazio',
        QTDE_PRODUTO: '.qnt'
    }
}