
describe('Buscar Produto', () => {
    it('Dado que acesso o site Advantage', () => {
        cy.visit('https://advantageonlineshopping.com/#/')
    })
    it('Quando busco por mice e pressiono Enter'), () => {
    }
    it('Entao exibe uma lista de produtos relacionados com mice', () =>{
        cy.visit('https://advantageonlineshopping.com/#/')
        cy.get('#mobileSearch > .roboto-medium').type('mice')
            .type('{enter}')
    })
})