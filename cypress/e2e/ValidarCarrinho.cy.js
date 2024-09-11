import {Given, And, When, Then, cucumberTemplate} from "cypress-cucumber-preprocessor/lib/cucumberTemplate";
import {ELEMENTS} from "../support/Pages/Elements";
import {pageobject} from "../support/Pages/pageobject";
import { features } from "process";
import login from "../../support/Pages/pageobject";
import(cucumberTemplate);
import(cucumberJson);
import(ELEMENTS);
import(features);
import(pageobject);


Given('que eu tenha produtos inclusos no carrinho', () => {
    login.enterURL();
    return true;
});

When('acessar a tela do carrinho', () => {
    cy.contains('SHOPPING CART').should('#shoppingCartLink(1)').check();
    Carrinho.ListaCar();
    return true;
})

Then('devo visualizar informações dos itens inclusos', () => {
    Carrinho.CarTitle();
    Carrinho.CarProdName();
    Carrinho.CarProdColor();
    Carrinho.CarProdPrice();
    })
