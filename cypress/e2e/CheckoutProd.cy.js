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


Given('que sou um usuario logado no Site', () => {
    login.enterURL();
    login.clickSignInLink();
    login.enterusernamepassword();
    login.clickSignButton();
    login.checkUser();
    return true;
});

And('tenha produtos no carrinho', () => {
    Carrinho.ListaCar();
    return true;
});

When('clicar em Checkout', () => {
    Checkout.BtnCheckout();
    return true;
});

And('validar informações da ordem de pagamento', () => {
    Checkout.OrderPayment();
    return true;
});

And('clicar em Next', () => {
    Checkout.BtnNext();
    return true;
});

And('preencher informações de pagamento', () => {
    Checkout.Payment();
    return true;
});

And('clicar em Pay Now', () => {
    Checkout.PayNow();
    return true;
});

Then ('devo realizar compra com sucesso', () =>{
    Checkout.Sucesso();
    return true;
});