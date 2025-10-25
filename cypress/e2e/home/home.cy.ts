describe('Home Page Tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should allow the user to navigate to the Portfolio page by clicking the "View My Work" button in the hero section', () => {
    // Wait for the button to be visible (has 3s animation delay + 1s animation)
    cy.contains('button', 'View My Work', { timeout: 10000 })
      .should('be.visible')
      .and('not.have.css', 'opacity', '0')
      .click()

    // Check the URL changed to /portfolio
    cy.url().should('include', '/portfolio')

    // Check for specific content on the Portfolio page
    cy.contains('h1', 'Portfolio').should('be.visible')
  })
})
