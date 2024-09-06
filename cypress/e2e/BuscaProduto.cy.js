import {Given, And, When, Then, cucumberTemplate} from "cypress-cucumber-preprocessor/lib/cucumberTemplate";
import {ELEMENTS} from "../support/Pages/Elements";
import login from "../support/Pages/pageobject";
import { features } from "process";
import(cucumberTemplate);
import(cucumberJson);
import(ELEMENTS);
import(features);
import { TestContext } from "node:test"; 


Given('Que acesso o site Advantage', () => {
    login.enterURL();
    return true;
});

And('clico na barra de pesquisa', () =>{
    Buscar.barradepesquisa();
    return true;
});

When('busco por mice e clico na lupa', () => {
    Buscar.produto();
    Buscar.lupa();
});

Then ('exibe uma lista de produtos relacionados com mice', () =>{
    cy.get('.pages').should('be.visible');
});
