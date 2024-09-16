Feature: Checkout
        Scenario: Product Checkout
            Given that I have a product in the cart
             When I click Checkout
              And I fill in the login information
              And I click Next
              And I fill in the payment information
              And I validate that the product information is correct
             Then I should be able to make payment successfully