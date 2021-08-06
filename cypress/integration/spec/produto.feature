#language: pt

@funcionalidade_produto
Funcionalidade: Produto 
    Como cliente do site manetzeetech
    Quero pesquisar por um ou mais produtos

    Contexto: 
        Dado que esteja na página home da loja manetzeetech

    @produto_busca
    Esquema do Cenario: Campo de Busca
        Quando procurar um produto por "<texto>"
        Então deverá apresentar o "<titulo_da_busca>" na página de resultado 
        E deverá apresentar a página de resultado com o conteúdo "<conteudo>"
        Exemplos: 
            | texto            | titulo_da_busca | conteudo                   |
            | NOTEBOOK         | NOTEBOOK        | lista_de_produtos          |
            | *_)~~''DSA235235 |                 | Nenhum Produto Encontrado. |

    @produto_categoria
    Esquema do Cenario: Listar Produtos por Categoria
        Quando selecionar a categoria "<nome_da_categoria>"
        Então deverá apresentar o "<nome_da_categoria>" na página de resultado 
        E deverá apresentar a página de resultado com o conteúdo "lista_de_produtos"
        Exemplos:
            | nome_da_categoria |
            | Telefonia         |
            #| Informática       |
            | Eletrônicos       |
            #| TV & Áudio        |
            #| Gamer             |
            #| Computadores      |
            | Smatwatch         |

    @produto_informacoes
    Cenario: Apresentar as informações de um produto no PopUp
        Quando escolher o primeiro produto em destaque
        Então deverá apresentar as informações do produto na janela flutuante
        #Então deverá apresentar as informações do produto na página do produto


