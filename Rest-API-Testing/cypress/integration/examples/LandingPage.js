
describe('DemoSuite', function()
{
it('landingpage teachers',function()
{
cy.visit('https://go.edmodo.com/teachers/')
cy.title().should('eq','Teachers - Edmodo')
})

})


  



