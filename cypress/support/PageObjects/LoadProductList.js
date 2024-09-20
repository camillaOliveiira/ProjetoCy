import { SPEAKERS, SEPEAKERS_LIST } from "../Elements/Elementos"

export default class ListProdut {
    static ClickSpeakers() {
        cy.get(SPEAKERS).click()
    }
    static SeeSpeakers() {
        cy.get(SEPEAKERS_LIST).should('be.visible')
    }

}