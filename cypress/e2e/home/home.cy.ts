describe('Home Page Tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('should display the correct introductory text', () => {
    cy.contains(/Hello, I'm Riley Boyd./, { timeout: 30000 }).should(
      'be.visible'
    )
  })

  it('should display the "View My Work" button', () => {
    cy.contains('button', 'View My Work', { timeout: 30000 }).should(
      'be.visible'
    )
  })
})
