# Auto-Cypress
 Desafio de Automação de testes em cypress.
 OBS. Para execução dos Testes, utilizar o comando npx cypress run no terminal;
 Criado no VSCode.
 Author: Camila de Sousa Oliveira


 
  Esse desafio se trata da elaboração de testes automatizados do site AdvantageShop com as seguintes validações:
  
    WEB:
    § Realize a busca de um produto;

    § Incluir produto no carrinho;

    § Validar os produtos incluídos no carrinho na tela de pagamento.

    API:
    $ Procure por um produto (GET)
        API: https://www.advantageonlineshopping.com/catalog/api/v1/products/search
        Verifique se a lista exibe somente produtos conforme sua busca.
        Validar o status code da resposta do serviço.

    $ Atualize a imagem de um produto (PUT):
        API: https://www.advantageonlineshopping.com/catalog/api/v1/product/image/{userId}/{source}/{color}
        Verifique que o produto foi atualizado corretamente.
        Verifique o id da image nova inserida
        Validar o status code da resposta do serviço

· Tecnologias Utilizadas:
Para a escrita dos cenários solicitados seguindo BDD: Cucumber.

Linguagem de programação: Cypress
