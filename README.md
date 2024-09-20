# Projeto Cypress+Cucumber
## Testes automatizados utilizando Cypress
[Documentação Cypress](https://docs.cypress.io/guides/overview/why-cypress.html)

### Requisitos para instalação ###

* [Node.js](https://nodejs.org/en/)
* Cypress

### Configurando o Ambiente :gear: ###

#### Iniciando o projeto ####

1. Faça um clone do projeto:
2. Instale o Node.js no computador
3. Instale o Vs code para gerenciar os arquivos do projeto
4. No terminal, com a tecla (CTRL + aspas simples) abra o terminal do VS code
5. Navegue até a pasta onde clonou o repositório (Utilize ls para listar e cd nome da pasta para entra) e execute os seguintes comandos:
```shell
    npm install
    npm init
    npm install cypress --save-dev
    npm install cypress-cucumber-preprocessor --save-dev
    npm install blob-util --save-dev
    npm i cypress-intercept-formdata
    npm install cypress-form-data  
    npm install form-data  
```
6. Iniciar o Cypress
```shell
   npx cypress open
```

## Desafio de Automação de testes em cypress
--------------------------------

 ### Contempla os segintes passos:
 > WEB
 * Visitar Site
 * Login
 * Lista de Produtos
 * Busca de Produto
 * Inclusão de Produto no carrinho
 * Checkout

> API

* Metodo GET
* Metodo POST

## Tecnologias Utilizadas:
--------------------------------------------------------------
#### Para a escrita dos cenários solicitados seguindo BDD: Cucumber.

#### Linguagem de programação: Cypress

> Criado no VSCode.

> Author: Camila de Sousa Oliveira

### Esse desafio se trata da elaboração de testes automatizados do site AdvantageShop com as seguintes validações:
#### WEB: ####
- Realize a busca de um produto;
- Incluir produto no carrinho;
- Validar os produtos incluídos no carrinho na tela de pagamento.
#### API: ####
> api docs: https://www.advantageonlineshopping.com/api/docs/
1. Procure por um produto (GET)_
   - API: https://www.advantageonlineshopping.com/catalog/api/v1/products/search
   - Verifique se a lista exibe somente produtos conforme sua busca.
   - Validar o status code da resposta do serviço.

2. Atualize a imagem de um produto (POST):
   - API: https://www.advantageonlineshopping.com/catalog/api/v1/product/image/{userId}/{source}/{color}
   - Verifique que o produto foi atualizado corretamente.
   - Verifique o id da image nova inserida
   - Validar o status code da resposta do serviço

