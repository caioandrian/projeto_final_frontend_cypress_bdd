#language: pt

@funcionalidade_autenticacao
Funcionalidade: Autenticação 
    Como cliente do site manetzeetech
    Quero realizar meu cadastro e login para ter acesso na aplicação

    Contexto:
        Dado que esteja na página home
        E tenha acessado a página de login e cadastro

    @cadastro_usuario
    Esquema do Cenario: Cadastrar novo usuário
        Quando preencher os campos com "<dados_tipo>" para realizar um novo cadastro
        Então deverá ser "<redirecionado>" para a página minha conta
    Exemplos:
        | dados_tipo | msg  | redirecionado |
        | inválidos  | erro |               |
        | válidos    |      | sim           |

    @login_usuario
    Esquema do Cenario: Login do usuário
        Dado que esteja com um usuário com um "<status_cadastro>"
        E que esteja com a conta "<conta_status>"
        Quando preencher os campos com "<dados_tipo>" para acessar a aplicação
        E deverá ser "<redirecionado>" para a página minha conta
        Exemplos:
            | status_cadastro  | dados_tipo | msg  | redirecionado | conta_status |
            | cadastroInválido |            | erro |               |              |
            | cadastroVálido   | válidos    |      | sim           | deslogada    |