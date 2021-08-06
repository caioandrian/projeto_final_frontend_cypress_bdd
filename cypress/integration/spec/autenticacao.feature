#language: pt

@funcionalidade_autenticacao
Funcionalidade: Autenticação 
    Como cliente do site manetzeetech
    Quero realizar meu cadastro e login para ter acesso na aplicação

    Contexto:
        Dado que esteja na página home da loja manetzeetech
        E tenha acessado a página de login e cadastro da loja manetzeetech

    @cadastro_usuario
    Esquema do Cenario: Cadastrar novo usuário
        Quando preencher os campos com "<dados_tipo>" para "realizar um novo cadastro"
        Então deverá apresentar a mensagem "<msg>" para o cadastro ou login do usuário
        E deverá ser "<redirecionado>" para a página minha conta
    Exemplos:
        | dados_tipo      | msg                                                               | redirecionado |
        | NomeInválido    | Digite o seu nome completo, por favor.                            |               |
        | cpfInválido     | Para prosseguir com o cadastro, por favor, informe um CPF válido. |               |
        | celularInválido | O telefone deve ter 10 digitos DDD + telefone!                    |               |
        | válidos         |                                                                   | sim           |
    # cpf já cadastrado

    @login_usuario
    Esquema do Cenario: Login do usuário
        Dado que esteja com um usuário "<status_cadastro>"
        Quando preencher os campos com "<dados_tipo>" para "acessar a aplicação"
        Então deverá apresentar a mensagem "<msg>" para o cadastro ou login do usuário
        E deverá ser "<redirecionado>" para a página minha conta
        Exemplos:
            | status_cadastro  | dados_tipo    | msg                                | redirecionado |
            | cadastroInválido | emailInválido | Dados inválidos, digite novamente! |               |
            | cadastroInválido | senhaInválida | Autenticação incorreta.            |               |
            | cadastroVálido   | válidos       |                                    | sim           |

        #Autenticação incorreta. O acesso será bloqueado por 60 minutos após 5 tentativas. Restam 2 tentativas.