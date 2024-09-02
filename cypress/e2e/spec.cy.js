describe('Abrir Site', () => {
  it('passes', () => {
    cy.visit('https://advantageonlineshopping.com/#/')
  })
})

describe('Buscar Produto', () => {
  it('passes', () => {
    cy.visit('https://advantageonlineshopping.com/#/')
    cy.get('#mobileSearch > .roboto-medium').type('mice')
    .type('{enter}')
  })
})

describe('Clicar Produto', () => {
  it('passes', () => {
    cy.visit('https://advantageonlineshopping.com/#/')
    cy.get('#mobileSearch > .roboto-medium').type('mice')
        .type('{enter}')
    cy.get('[data-ng-show="([] | productsFilterForCategoriesProduct:searchResult:minPriceToFilter:maxPriceToFilter:productsInclude).length != 0"] > ul > :nth-child(3)').click()

  })
})

describe('Incluir Produto no Carrinho', () => {
  it('passes', () => {
    cy.visit('https://advantageonlineshopping.com/#/')
    cy.get('#mobileSearch > .roboto-medium').type('mice')
        .type('{enter}')
    cy.get('[data-ng-show="([] | productsFilterForCategoriesProduct:searchResult:minPriceToFilter:maxPriceToFilter:productsInclude).length != 0"] > ul > :nth-child(3)').click()
    cy.get('.fixedBtn > .roboto-medium').click()
  })
})

describe('Validar Produto no Carrinho', () => {
  it('passes', () => {
    cy.visit('https://advantageonlineshopping.com/#/')
    cy.get('#mobileSearch > .roboto-medium').type('mice')
        .type('{enter}')
    cy.get('[data-ng-show="([] | productsFilterForCategoriesProduct:searchResult:minPriceToFilter:maxPriceToFilter:productsInclude).length != 0"] > ul > :nth-child(3)').click()
    cy.get('.fixedBtn > .roboto-medium').click()
    cy.visit('https://advantageonlineshopping.com/#/product/28?viewAll=mice')
    cy.get('[data-ng-mouseenter="enterCart()"]').click()
  })
})