import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../../../support/PageObjects/VisitSit';
import ListProdut from '../../../support/PageObjects/LoadProductList';

Given ('I m on the main screen', () =>{
    LoginPage.enterURL()
})

When('I click on the Speakers product category', () => {
    ListProdut.ClickSpeakers()
})

Then('I see the list of products corresponding to the chosen category', () =>{
    ListProdut.SeeSpeakers()
})
