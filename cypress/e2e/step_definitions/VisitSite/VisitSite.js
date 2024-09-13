import { Given, And, When, Then } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from '../../../support/VisitSit';

Given("que estou na página inicial", () => {
    LoginPage.enterURL();
});

When("eu visualizar a pagina", () => {
    cy.get('.logo > a').should('be.visible');
});

Then ("devo conseguir navegar pela homePage", () => {
    cy.get('body').should('be.visible')
        cy.get('#follow').scrollIntoView({ duration: 2000 })
});