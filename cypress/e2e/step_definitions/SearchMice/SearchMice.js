import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../../../support/VisitSit';
import SearchMice from '../../../support/Search';

Given("I am on the main screen of the Site", () => {
    LoginPage.enterURL();
});

When("I click on the search field", () => {
    SearchMice.barSearch();
});

And("type Mice", () => {
    SearchMice.mice();
});

And("click on the loupe", () => {
    SearchMice.loupe();
});

Then("I should see the list corresponding to the search", () => {
    cy.get('#virtualFooter').scrollIntoView({ duration: 2000 });
});