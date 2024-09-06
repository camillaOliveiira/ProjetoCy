import {Given, And, When, Then} ;
import {cucumberTemplate} from "cypress-cucumber-preprocessor/lib/cucumberTemplate";
import {ELEMENTS} from "../support/Pages/Elements";
import login from "../support/Pages/pageobject";
import(cucumberTemplate);
import(cucumberJson);
import(ELEMENTS);

    Given("que estou na página inicial", () => {
        login.enterURL();
        return true;
    });

    And("E entro na página de login"), () => {
        login.clickSignInLink();
    return true;
    };
    
    When("insiro credenciais válidas", (database) => {
        login.enterusernamepassword(username, password)
        cy.get("#username").type("camila.oliveira");
        cy.get("#password").type("Novasenha123");
        return true;
    };

    And("clico no botão de login", () => {
        login.clickSignButton();
    });

    When("insiro credenciais invalidas", () => {
        enteruserpassinvalid(usernamein, passwordin)
        cy.get("#username").type("invalidusername");
        cy.get("#password").type("invalidpassword");
        return false;
    });

    And("clico no botão de login", () => {
        login.clickSignButton();
    });

    Then("devo conseguir efetuar login com sucesso", () => {
        cy.get('#menuUserLink').should("be.visible");
    });

    Then("não devo conseguir efetuar login", () => {
        cy.get('#signInResultMessage').should("be.visible");
    });