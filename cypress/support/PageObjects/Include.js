import { PROD_DETAILS, DESCRIPTION_PROD, ADD_TO_CART, CART_LIST } from "../Elements/Elementos"

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