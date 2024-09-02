describe('Validar Produto no Carrinho', () => {
    it(' Dado que acesso o site Advantage', () => {
        cy.visit('https://advantageonlineshopping.com/#/')
    })
    it('Quando busco por mice e pressiono Enter\n' +'E clico no produto mice escolhido\n' +
    'E clico em ADD TO CART\n' + 'E clico no carrinho de compras', () => {
    })
    it('Entao devo visualizar pagina do carrinho com os itens inclusos', () => {
        cy.visit('https://advantageonlineshopping.com/#/')
        cy.get('#mobileSearch > .roboto-medium').type('mice').type('{enter}')
        cy.get('[data-ng-show="([] | productsFilterForCategoriesProduct:searchResult:minPriceToFilter:maxPriceToFilter:productsInclude).length != 0"] > ul > :nth-child(3)').click()
        cy.get('.fixedBtn > .roboto-medium').click()
        cy.visit('https://advantageonlineshopping.com/#/product/28?viewAll=mice')
        cy.get('[data-ng-mouseenter="enterCart()"]').click()
    })
})