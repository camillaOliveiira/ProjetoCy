const login = new LoginPage()
const URL = 'https://advantageonlineshopping.com/#/'
const SIGN = '#menuUser'
const USER_INPUT = 'input[name="username"]'
const PASS_INPUT = 'input[name="password"]'
const SUBMIT_BUTTON = '#sign_in_btn'


class LoginPage {
        static enterURL() {
          cy.visit(URL)
        }
        static clickSignInLink() {
            cy.get(SIGN).click()
        }
        static enterusername(username) {
          cy.get(USER_INPUT).type('username')
        }
        static enterpassword(password){
          cy.get(PASS_INPUT).type('Password1')
        }
        static clickSignButton() {
            cy.get(SUBMIT_BUTTON).click()
        }
 }

 /*class Buscar{

  barradepesquisa() {
    cy.get('#mobileSearch > .roboto-medium').click()
    return this;
  }

  produto (produto) {
    cy.get('#mobileSearch > .roboto-medium').type('mice')
    return this;
  }

  lupa() {
    cy.get('#mobileSearch > #menuSearch').click()
  }

 }

  class InfoProduct{

    ProductSpeakers() {
     cy.visit("https://advantageonlineshopping.com/#/category/Speakers/4")
    }

    TitleProduct() {
      cy.contains('BOSE SOUNDLINK BLUETOOTH SPEAKER III')
    }

    PriceProduct() {
      cy.contains('$269.99')
    }

    descricaoProduct() {
      cy.contains('Meet the speaker that brings your music and friends together-with a style thats all your own. The SoundLink® Bluetooth speaker III is our best-performing mobile Bluetooth speaker. It plays louder and longer than its popular predecessor, with advanced Bose® technologies that reproduce the fullness, clarity and depth of your music. And a colorful assortment of optional covers let you personalize your speaker.')
    }

    ColorProduct() {
      cy.contains('.Colors').should('exist')
    }

    ProductEscolhido() {
      cy.get('[data-ng-show="([] | productsFilterForCategoriesProduct:searchResult:minPriceToFilter:maxPriceToFilter:productsInclude).length != 0"] > ul > :nth-child(1)').click()
    }

    ADDTOCART() {
      cy.get('.fixedBtn > .roboto-medium').click()
    }

  }

  class Carrinho{
    popupCar() {
      cy.get('tbody').should('exist')
    }
    ListaCar() {
      cy.get('#shoppingCartLink').click()
    }
    PageCar() {
     cy.visit("https://advantageonlineshopping.com/#/shoppingCart")
    }
    CarTitle() {
      cy.contains('SHOPPING CART(1)').should('.sticky(1)').check()
    }
    CarProdName() {
      cy.contains('').should('.fixedTableEdgeCompatibility > tbody > tr.ng-scope > :nth-child(2)').check()
    }
    CarProdColor() {
      cy.contains('').should('tr.ng-scope > :nth-child(4)').check()
    }
    CarProdPrice() {
      cy.contains('').should('tr.ng-scope > :nth-child(6)').check()
    }
  }

  class Checkout {
    BtnCheckout() {
      cy.get('#checkOutButton').click()
    }
    OrderPayment() {
      cy.contains('#userDetails').check()
      cy.contains('#userCart').check()
    }
    BtnNext() {
      cy.get('.mobileBtnHandler > #next_btn').click()
    }
    Payment() {
      cy.get('.selected > input').click()
      cy.get('#creditCard').type('5307461187785012')
      cy.get('.creditCard > .inputContainer > .ng-pristine').type('628')
      cy.get('[a-hint="MM"] > .inputContainer > .ng-pristine').click().type('07').click()
      cy.get('[a-hint="YYYY"] > .inputContainer > .ng-pristine').click().type('2026').click()
      cy.get('[a-hint="Cardholder name"] > .inputContainer > .ng-pristine').type('Camila Oliveira')
      cy.get('[ng-show="(imgRadioButton == 2) && (noCards || showMasterCart)"] > .secForm > .option > .ng-pristine').click()
    }
    PayNow() {
      cy.get('#pay_now_btn_ManualPayment').click()
    }
    Sucesso() {
      cy.check('Product Added Successfully').should('exist')
    }
  }**/
 
export default LoginPage
 
