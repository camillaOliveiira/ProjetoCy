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


Given('que acesso o site Advantage', () => {
    login.enterURL();
    return true;
});

When('busco por mice', () => {
    Buscar.barradepesquisa();
    Buscar.produto();
    return true;
});

And('clico na Lupa', () => {
    Buscar.lupa();
    return true;
});

And('exibe uma lista de produtos relacionados com mice', () => {
    cy.contains('mice').should('exist');
    return true;
});

And('clico no produto mice escolhido', () => {
    InfoProduct.ProductEscolhido();
    return true;
});

And('clico em ADD TO CART', () => {
    InfoProduct.ADDTOCART();
    return true;
});

Then ('exibe carrinho com o produto incluido', () =>{
    Carrinho.popupCar();
    Carrinho.ListaCar();
    return true;
});