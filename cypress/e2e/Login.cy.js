import { Given, And, When, Then } from 'cypress-cucumber-preprocessor/steps'
import 'cypress-cucumber-steps'
import LoginPage from '../../../support/pageobject'


    Given('I m on the home page', () => {
        LoginPage.enterURL()
    });

    And('I enter the login page', () => {
        LoginPage.clickSignInLink()
    })

    When('I enter my username and password', () => {
        LoginPage.enterusername('username')
        LoginPage.enterpassword('password')
    })

    And('I click the login button', () => {
        LoginPage.clickSignButton()
    })

    Then('I should be able to log in successfully', () => {
        cy.contains('#menuUserLink').should('be.visible')
    })
