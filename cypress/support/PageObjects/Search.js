import { BARSEARCH,LOUPE } from "../Elements/Elementos"

export default class SearchMice {
    static barSearch(){
        cy.get(BARSEARCH).click()
    }

    static mice(){
        cy.get(BARSEARCH).type('mice')
    }

    static loupe(){
        cy.get(LOUPE).click()
    }

}