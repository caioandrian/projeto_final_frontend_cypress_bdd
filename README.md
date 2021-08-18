# projeto_final_frontend_cypress_bdd
 projeto de capacitação

#### Site:
- https://lojadetestetemanetzeetech.commercesuite.com.br/

<br/>

### ---- Lista de Funcionalidades ----
<br/>

- Busca Produto **(esquema de cenário)**
- Produto por Categorias **(esquema de cenário)**
- Ver Produto

<br/>

- Login **(esquema de cenário)** 
- Cadastro **(esquema de cenário)** **(com faker )** 

<br/>

- Adicionar Produtos no Carrinho **(esquema de cenário)**
- Remover Produto do Carrinho
- Selecionar Quantidade

<br/>

- Finalizar Pedido (Boleto)

<br/>

- Depoimentos em destaque
- Ver todos depoimentos
- Cadastrar depoimento **(esquema de cenário)** **(com intercept - não finalizado)** 

<br/>

### ---- Diferenciais no projeto ----
<br/>

- Page Object
- BDD / Gherkin
- Massa de Dados Dinâmicas (faker)
- Com Intercept
- Massa de Dados Fixas (json / cy.fixture)
- Dockerfile & Jenkinsfile

<br/>

### ---- Lista de dependências ----
<br/>

    { "cypress": "^8.0.0",
    "cypress-cucumber-preprocessor": "^4.1.3",
    "faker": "^5.5.3",
    "fs-extra": "^10.0.0",
    "rimraf": "^3.0.2",
    "cypress-xpath": "^1.6.2",
    "faker-br": "^0.4.1",
    "multiple-cucumber-html-reporter": "^1.18.0" }

**Instalar dependências via node**
> npm install

**Executar os testes com interface gráfica do cypress**
> npm run cy:open

**Gerar reports json / screenshots**
> npm run cy:run

**Gerar reports html a partir do report json**
> npm run cy:report

<br/>

**Como rodar o teste usando o Docker Localmente**
Download do docker no site https://www.docker.com/products/docker-desktop

Criar uma imagem do seu projeto: 

> docker build -t nome_da_imagem . 

Ou criar imagem e executar um container com uma saída http: 

> docker container run -d -p 8082:80 nome_imagem (acessar localhost:8082:80)

<br/>

Criar e executar um container: 

> docker run -it --name primeiro-container nome_da_imagem

com tags:
> docker run --rm -it –e tags=@funcionalidade_depoimentos -v %cd%:/usr/src/e2e nome_da_imagem

no linux:
> trocar de %cd% para %pwd% (esse comando com tags precisa ser avaliado)

<br/>

**Como rodar o teste usando o Docker Pipeline + Jenkins Localmente**
> docker network create jenkins

> docker container run  --name jenkins-blueocean --rm --detach ^   --network jenkins --env DOCKER_HOST=tcp://docker:2376 ^   --env DOCKER_CERT_PATH=/certs/client --env DOCKER_TLS_VERIFY=1 ^   --volume jenkins-data:/var/jenkins_home ^   --volume jenkins-docker-certs:/certs/client:ro ^   --publish 8080:8080 --publish 50000:50000 jenkinsci/blueocean

> docker container run  --name jenkins-docker --rm --detach ^   --privileged --network jenkins --network-alias docker ^   --env DOCKER_TLS_CERTDIR=/certs ^   --volume jenkins-docker-certs:/certs/client ^   --volume jenkins-data:/var/jenkins_home ^   docker:dind

> docker container ls 

> docker container exec -it <id_container> bash 

<br/>

Copiar chave de acesso Jenkins

> cat /var/jenkins_home/secrets/initialAdminPassword 

Acessar a página: https://localhost:8080

> Colar a chave de acesso do Jenkins

<br/>

Instalar plugins recomendados + plugin Docker Pipeline e cucumber reports

Configurar a PIPELINE do Jenkins: Pipeline script from SCM

> SCM -> GIT

> Adicionar credenciais do git para usar o repositório que está nele. 

<br/>

Como usar o Jenkins com tags: (precisa ser testado)

Jenkinsfile

    {
        stage('Tests'){ 
            steps{ 
                sh "npm run cucumber TAGS=$tags" 
            } 
        } 
    }

cypress.json - script test

    {
        "cucumber": "cucumber-cypress-tags run -e" 
    }

<br/>

No Jenkins configurar a pipeline com: "Este build é parametrizado"

> Nome: tags

> Escolhas:

    {
        @tag1
        @tag2
        @tag3
    }
