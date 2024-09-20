import { URL } from "../Elements/Elementos"
import { SIGN } from "../Elements/Elementos"
import { USER_INPUT } from "../Elements/Elementos"
import { PASS_INPUT } from "../Elements/Elementos"
import { SUBMIT_BUTTON } from "../Elements/Elementos"


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