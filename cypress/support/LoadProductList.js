
const SPEAKERS = '#speakersImg'
const SEPEAKERS_LIST = '.categoryTitle'

export default class ListProdut {
    static ClickSpeakers() {
        cy.get(SPEAKERS).click()
    }
    static SeeSpeakers() {
        cy.get(SEPEAKERS_LIST).should('be.visible')
    }

}