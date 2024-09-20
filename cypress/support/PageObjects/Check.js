import { CAT_TABLET,ELITEPAD, CHECK, CHECK_LOG_USER, CHECK_LOG_USER, BTN_LOG, NEXT } from "../Elements/Elementos"
import { CARTAO, N_CARTAO, CVV, MES, ANO, CARD_NAME, BTN_CHECK } from "../Elements/Elementos"


export default class checkout {
    static category_tablet () {
        cy.get(CAT_TABLET).click()
    }
    static prod_elitepad() {
        cy.get(ELITEPAD).click()
    }
    static btn_checkout() {
        cy.get(CHECK).click()
    }
    static log_user() {
        cy.get(CHECK_LOG_USER).type('username')
    }
    static log_pass() {
        cy.get(CHECK_LOG_PASS).type('Password1')
    }
    static log_btn() {
        cy.get(BTN_LOG).click()
    }
    static next_btn() {
        cy.get(NEXT).click()
    }
    static pay_master() {
        cy.get(CARTAO).click()
    }
    static info_pay() {
      
    cy.get(N_CARTAO).type('381189104473')
      cy.get(CVV).type('0317')
      cy.get(MES).select('05')
      cy.get(ANO).select('2026')
      cy.get(CARD_NAME).type('Camila Oliveira')
    }
    static info_prod() {
        cy.contains('ORDER SUMMARY')
    }
    static btn_check() {
        cy.get(BTN_CHECK).click()
    }
}