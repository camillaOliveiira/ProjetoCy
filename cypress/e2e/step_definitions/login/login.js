import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'
import LoginPage from '../../../support/PageObjects/VisitSit';

Given("I'm on the login page", () =>{
    LoginPage.enterURL();
    LoginPage.clickSignInLink();
})

When("I type a registered my username and password", () =>{
    LoginPage.enterusername();
    LoginPage.enterpassword();
    LoginPage.clickSignButton();
})

Then("I have a susseccful login", () =>{
    cy.get('#menuUserLink').should('be.visible');
})
