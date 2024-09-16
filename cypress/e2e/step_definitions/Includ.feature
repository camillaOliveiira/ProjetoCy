Feature: Product Inclusion
        Scenario: Add product to cart
            Given I am logged in
              And I want to add a product to my cart
             When I select the chosen product
              And I click ADD TO CART
             Then I should see product inside the cart