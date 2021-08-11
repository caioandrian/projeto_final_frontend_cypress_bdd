#language: pt

@funcionalidade_carrinho
Funcionalidade: Visualização Rápida do Carrinho
    Como cliente do site
    Quero adicionar items no meu carrinho
    e editar os produtos dentro dele usando a janela lateral na página home

    Contexto: 
        Dado que esteja na página home

    @carrinho_adicionar_produtos
    Esquema do Cenario: Adicionar Produto(s) no Carrinho
        Quando adicionar no carrinho <quantidade> produtos da seção Novidades 
        Então o carrinho deverá ter <quantidade> produtos adicionados
        Exemplos: 
            | quantidade |
            | 1          |
            | 2          |
            | 3          |
    
    @carrinho_remover_produto
    Cenario: Retirar Produto(s) do Carrinho
        #Dado que tenha ao menos um produto adicionado ao carrinho
        #Quando remover o primeiro produto do carrinho usando a janela lateral da página home
        #Então o carrinho deverá ter 0 produtos adicionados

    @carrinho_selecionar_quantidade_produto
    Cenario: Selecionar Quantidade do mesmo Produto
        #Quando adicionar 4 items do mesmo produto da seção Novidades no carrinho
        #Então o carrinho deverá ter 4 items do produto adicionado

