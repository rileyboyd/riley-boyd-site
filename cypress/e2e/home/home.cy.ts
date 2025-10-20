describe('Home Page Tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should allow the user to navigate to the Portfolio page by clicking the "View My Work" button in the hero section', () => {
    // Ensure the button exists
    cy.contains('button', 'View My Work').should('exist')

    // Click the button
    cy.contains('button', 'View My Work').click()

    // Option 1: Check the URL (if you use routing)
    cy.url().should('include', '/portfolio')

    // Option 2: Check for specific content on the Portfolio page
    cy.contains('h1', 'Portfolio').should('be.visible')
  })
})
