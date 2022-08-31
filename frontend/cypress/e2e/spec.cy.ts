describe('My First Test', () => {
  it('Visits vue project', () => {
    cy.visit('http://127.0.0.1:5173/')

    cy.get('#email_input')
    .type('fake@email.com')
    .should('have.value', 'fake@email.com')

    cy.get('#password_input')
    .type('123')
    .should('have.value', '123')

    cy.contains('Login').click()

    //Need to figure out how to assert the profile page is visible
  })
})