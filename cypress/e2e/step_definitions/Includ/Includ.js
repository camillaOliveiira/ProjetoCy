import { Given, And, When, Then} from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../../../support/PageObjects/VisitSit';
import ListProdut from '../../../support/PageObjects/LoadProductList';
import Include from '../../../support/PageObjects/Include';


Given("I am logged in", () => {
    LoginPage.enterURL()
    LoginPage.clickSignInLink()
    LoginPage.enterusername();
    LoginPage.enterpassword();
    LoginPage.clickSignButton();
  
})

And("I want to add a product to my cart", () => {
    ListProdut.ClickSpeakers();
    ListProdut.SeeSpeakers();
})

When("I select the chosen product", () => {
    Include.clickProd();
    Include.SeeProd();
})

And("I click ADD TO CART", () => {
    Include.addcart()
})

Then("I should see product inside the cart", () => {
    Include.cart();
    
})
