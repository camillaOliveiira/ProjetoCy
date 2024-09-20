import { Given, And, When, Then} from 'cypress-cucumber-preprocessor/steps';
import checkout from '../../../support/PageObjects/Check';
import Include from '../../../support/PageObjects/Include';
import LoginPage from '../../../support/PageObjects/VisitSit';

Given("that I have a product in the cart", () => {
    LoginPage.enterURL()
    checkout.category_tablet()
    checkout.prod_elitepad()
    Include.addcart()
    Include.cart()
})

When("I click Checkout", () => {
    checkout.btn_checkout()
})

And("I fill in the login information", () => {
    checkout.log_user()
    checkout.log_pass()
    checkout.log_btn()
})

And("I click Next", () => {
    checkout.next_btn()
})

And("I fill in the payment information", () => {
    
})

And("I validate that the product information is correct", () => {
    checkout.info_prod()
})

Then("I should be able to make payment successfully", () => {
    checkout.btn_check()
})
