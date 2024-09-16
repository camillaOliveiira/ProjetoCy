const PROD_DETAILS = '#20'
const DESCRIPTION_PROD = '#Description>.roboto-light.ng-binding'
const ADD_TO_CART = '.fixedBtn>.roboto-medium'
const CART_LIST = '#shoppingCartLink'

export default class Include {
    static clickProd() {
        cy.get(PROD_DETAILS).click()
    }
    static SeeProd() {
        cy.get(DESCRIPTION_PROD)
    }
    static addcart() {
        cy.get(ADD_TO_CART).click()
    }
    static cart () {
        cy.get(CART_LIST).click()
    }
}