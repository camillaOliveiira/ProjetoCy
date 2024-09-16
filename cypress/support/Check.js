const CAT_TABLET = '#tabletsTxt'
const ELITEPAD = '#16'
const CHECK = '#checkOutButton'
const CHECK_LOG_USER = 'input[name="usernameInOrderPayment"]'
const CHECK_LOG_PASS = 'input[name=passwordInOrderPayment]'
const BTN_LOG = '#login_btn'
const NEXT = '#next_btn'
const CARTAO = 'input[name="masterCredit"]'
const N_CARTAO = '#creditCard'
const CVV = 'input[name="cvv_number"]'
const MES = 'select[name="mmListbox"]'
const ANO = 'select[name="yyyyListbox"]'
const CARD_NAME = 'input[name="cardholder_name"]'
const PROD_INFO = '#orderPayment'
const BTN_CHECK = '#pay_now_btn_MasterCredit'


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