/*import {Given} from "cypress-cucumber-preprocessor/steps";*/

/*   Given("I am on the home page", () => {
        cy.visit("https://advantageonlineshopping.com/#/")
    })
    Then("I should see a navigation ", () => {
        cy.get('footer').scrollIntoView()
    })
*/
describe('Navegando Pelo Site AdvantageShop', () => {
    it('Dado que estou na página inicial', () => {
        cy.visit('https://advantageonlineshopping.com/#/')
    })
    it('Entao devo conseguir navegar pela homePage', () => {
        cy.get('body').should('be.visible')
            .trigger('mousedown')

    })
})