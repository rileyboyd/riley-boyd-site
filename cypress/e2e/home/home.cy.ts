describe('Home Page Tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('should display the "View My Work" button', () => {
    cy.contains('button', 'View My Work').should('exist')
  })
})
