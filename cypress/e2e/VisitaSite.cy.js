import {Given, Then, cucumberTemplate} from "cypress-cucumber-preprocessor/lib/cucumberTemplate";
import {ELEMENTS} from "../support/Pages/Elements";
import login from "../support/Pages/pageobject";
import { features } from "process";
import(cucumberTemplate);
import(cucumberJson);
import(ELEMENTS);
import(features);
import { TestContext } from "node:test"; 

Given("que estou na página inicial", () => {
    login.enterURL();
    cy.get('.logo > a').should('be.visible')
    return true;
});

Then ("devo conseguir navegar pela homePage", () => {
    cy.get('body').should('be.visible')
        cy.get('#follow').scrollIntoView({ duration: 2000 })
        return true;
});
