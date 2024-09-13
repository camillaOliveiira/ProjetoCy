const URL = 'https://advantageonlineshopping.com/#/'
const SIGN = '#menuUser'
const USER_INPUT = 'input[name="username"]'
const PASS_INPUT = 'input[name="password"]'
const SUBMIT_BUTTON = '#sign_in_btn'


export default class LoginPage {
        static enterURL() {
          cy.visit(URL)
        }
        static clickSignInLink() {
            cy.get(SIGN).click()
        }
        static enterusername(username) {
          cy.get(USER_INPUT).type('username')
        }
        static enterpassword(password){
          cy.get(PASS_INPUT).type('Password1')
        }
        static clickSignButton() {
            cy.get(SUBMIT_BUTTON).click()
        }
 }