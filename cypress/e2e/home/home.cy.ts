describe('Home Page Tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should display the correct introductory text', () => {
    cy.contains(/Hello, I'm Riley Boyd./).should('be.visible')
  })

  it('should display the "View My Work" button', () => {
    cy.contains('button', 'View My Work').should('be.visible')
  })
})
