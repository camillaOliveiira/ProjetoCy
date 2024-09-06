class LoginPage {
        enterURL() {
          cy.visit("https://advantageonlineshopping.com/#/");
        }
        clickSignInLink() {
            cy.get('#menuUserLink').click();
          return this;
        }
        enterusernamepassword(username, password) {
            cy.get("#username").type("username");
            cy.get("#password").type("password");
          return this;
        }
        clickSignButton() {
            cy.get('#loginButton').click().click();
          return this;
        }
        
        enteruserpassinvalid(usernamein, passwordin) {
            cy.get("#username").type("username");
            cy.get("#password").type("password");
          return this;
        }
 }

 class Buscar{

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


 
 const login = new LoginPage();
 export default login;
