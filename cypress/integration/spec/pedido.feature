#language: pt

@funcionalidade_pedido
Funcionalidade: Pedido 
    Como cliente do site manetzeetech
    Quero finalizar pedidos de compra no site

    Contexto: 
        Dado que esteja na página home da loja manetzeetech
        E que tenha ao menos um produto adicionado ao carrinho
        E seja um cliente PF da manetzeetech
        E tenha acessado a página de checkout

    @pedido_finalizar_pedido
    Cenario: Finalizar Pedido
        Quando preencher todas as informações úteis para que seja feito o pedido
        Então deverá registrado o pedido do cliente