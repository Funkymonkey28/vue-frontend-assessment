describe('My First Test', () => {
  it('Login fail', () => {
    cy.visit('http://127.0.0.1:5173/')

    cy.get('#password_input')
    .type('123')
    .should('have.value', '123')

    cy.contains('Login').click()
    cy.contains('Close').click()
  })

  it('Login success', () => {
    cy.visit('http://127.0.0.1:5173/')

    cy.get('#email_input')
    .type('fake@email.com')
    .should('have.value', 'fake@email.com')

    cy.get('#password_input')
    .type('123')
    .should('have.value', '123')

    cy.contains('Login').click()
    cy.contains('Continue to profile').click()
  })

  it('Logout', () => {
    cy.visit('http://127.0.0.1:5173/')

    cy.get('#email_input')
    .type('fake@email.com')
    .should('have.value', 'fake@email.com')

    cy.get('#password_input')
    .type('123')
    .should('have.value', '123')

    cy.contains('Login').click()
    cy.contains('Continue to profile').click()

    cy.contains('Logout').click()
  })
})