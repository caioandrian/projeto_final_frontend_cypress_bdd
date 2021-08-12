#language: pt

@funcionalidade_depoimentos
Funcionalidade: Depoimentos 
    Como cliente do site manetzeetech
    Quero ver os depoimentos de outros clientes
    e quero deixar registrado meu depoimento

    Contexto:
        Dado que esteja na página home

    @depoimentos_em_destaques
    Cenario: Depoimentos em destaque
        Quando visualizar a seção "o que os clientes estão dizendo"
        Então deverá ser exibido pelo menos um depoimento do cliente

    @ver_todos_depoimentos
    Cenario: Ver todos os depoimentos
        Quando acessar a página de depoimentos
        Então deverão ser exibidos todos os "Depoimentos" cadastrados pelos clientes

    @cadastrar_depoimentos
    Esquema do Cenario: Cadastrar um novo depoimento
        Quando acessar a página de depoimentos
        E cadastrar um novo depoimento usando credenciais "<status>" no site
        Então deverá retornar a mensagem "<msg>"
        Exemplos: 
            | status    | msg                             |
            | inválidas | de erro                         |
            | válidas   | Depoimento enviado com sucesso! |
        