Cypress.Commands.add('Login', () => {
    cy.get('[type="text"]').type('muhammad.usman@247labs.com')
    cy.get('[type="password"]').type('Test@12345')  
    cy.get('[type="submit"]').click()
})