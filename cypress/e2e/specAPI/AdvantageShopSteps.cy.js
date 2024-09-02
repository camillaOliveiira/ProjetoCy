describe('Pesquisar um produto Mice', () => {
    it('Dado que quero pesquisar pelo produto {word}\n' +
        'Quando realizo a requisição\n' +
        'Entao valido que o status code é 200\n' +
        'E valido que a categoria retornada é Mice', () => {
        cy.request({
            method: 'GET',
            url: 'https://www.advantageonlineshopping.com/catalog/api/v1/products/16'
        }).then((response) => {
            expect(response.status).to.equal(200);

        })
    })
})