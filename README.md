# projeto_final_frontend_cypress_bdd
 projeto de capacitação

#### Site (E-Commerce):
- https://lojadetestetemanetzeetech.commercesuite.com.br/

### ---- Lista de Funcionalidades ----

**Produto**
- Busca **(esquema de cenário)**
- Categorias **(esquema de cenário)**
- Ver Produto

**Autenticação**
- Login **(esquema de cenário)**
- Cadastro **(esquema de cenário)** **(com faker )** 

**Carrinho**
- Adicionar Produtos **(esquema de cenário)**
- Remover Produto / Carrinho Vazio
- Selecionar Quantidade

**Pedido**
- Finalizar Pedido (Boleto)

**Depoimentos**
- Em Destaques
- Ver Todos
- Cadastrar **(esquema de cenário)** **(com intercept - não finalizado)** 

### ---- Diferenciais no projeto ----

##### Page Object:
- sim
##### BDD / Gherkin:
- sim
##### Massa de Dados Dinâmicas (faker):
- sim
##### Com Intercept:
- não (a fazer)
##### Massa de Dados Fixas (json / cy.fixture):
- não (a fazer)
##### Dockerfile & Jenkins:
- sim (mas possivelmente com erro, pode ser do site..)

### ---- Lista de dependências ----

    { "cypress": "^8.0.0",
    "cypress-cucumber-preprocessor": "^4.1.3",
    "faker": "^5.5.3",
    "fs-extra": "^10.0.0",
    "rimraf": "^3.0.2",
    "cypress-xpath": "^1.6.2",
    "faker-br": "^0.4.1",
    "multiple-cucumber-html-reporter": "^1.18.0" }

### ---- Instalar dependências via node ----
> npm install

### ---- Executar os testes com interface gráfica do cypress ----
> npm run cy:open

### ---- Executar os testes com report / screenshots ----
> npm run cy:run