/// <reference types="cypress" />

describe('locating Elements', function()
{
    it('verify types of locators', function() 
       {
          cy.visit("https://new.edmodoqabranch.com/") // opens the url
          cy.get(".qa-test-navbar-login-button").click() // click on log in button
          cy.get(".qa-test-login-username").type("pallavi@edmodo.com")
          cy.get(".qa-test-login-password").type("hungryhippos")
          cy.get(".qa-test-lightbox-login").click()
          
        
       } 
     )
}


)