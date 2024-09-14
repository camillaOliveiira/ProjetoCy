import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import ListProdut from '../../../support/LoadProductList';
import LoginPage from '../../../support/VisitSit';

Given ('I m on the main screen', () =>{
    LoginPage.enterURL()
})

When('I click on the Speakers product category', () => {
    ListProdut.ClickSpeakers()
})

Then('I see the list of products corresponding to the chosen category', () =>{
    ListProdut.SeeSpeakers()
})