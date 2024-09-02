describe('Incluir Produto no Carrinho', () => {
    it('passes', () => {
        cy.visit('https://advantageonlineshopping.com/#/')
        cy.get('#mobileSearch > .roboto-medium').type('mice')
            .type('{enter}')
        cy.get('[data-ng-show="([] | productsFilterForCategoriesProduct:searchResult:minPriceToFilter:maxPriceToFilter:productsInclude).length != 0"] > ul > :nth-child(3)').click()
        cy.get('.fixedBtn > .roboto-medium').click()
    })
})