import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from '../../../support/PageObjects/VisitSit';
Given("that I'm on the homepage", () => {
    LoginPage.enterURL();
});

When("I view the page", () => {
    cy.get('.logo > a').should('be.visible');
});

Then ("I should be able to navigate the homePage", () => {
    cy.get('body').should('be.visible')
        cy.get('#follow').scrollIntoView({ duration: 2000 })
});
