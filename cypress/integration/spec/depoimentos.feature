#language: pt

@funcionalidade_depoimentos
Funcionalidade: Depoimentos 
    Como cliente do site manetzeetech
    Quero ver os depoimentos de outros clientes
    e quero deixar registrado meu depoimento

    Contexto:
        Dado que esteja na página home da loja manetzeetech

    @depoimentos_em_destaques
    Cenario: Depoimentos em destaque
        Quando visualizar a seção "o que os clientes estão dizendo"
        Então deverá ser exibido pelo menos um depoimento do cliente manetzeetech
    #cenario adicional verificar comportamento caso não tenha nenhum depoimento cadastrado

    @ver_depoimentos
    Cenario: Ver todos os depoimentos
        Quando acessar a página de depoimentos
        Então deverão ser exibidos todos os "Depoimentos" cadastrados pelos clientes da loja manetzeetech

    @ver_depoimentos
    Esquema do Cenario: Cadastrar um novo depoimento
        Quando acessar a página de depoimentos
        E cadastrar um novo depoimento usando credenciais "<status>" no site da manetzeetech
        Então deverá retornar a mensagem "<msg>"
        #E aparecer o depoimento na lista de depoimentos da manetzeetech
        Exemplos: 
            | status    | msg                             |
            | inválidas | de erro                         |
            #| válidas   | Depoimento enviado com sucesso! |
        