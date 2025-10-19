describe('Home Page Tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('should display the correct introductory text', () => {
    // wait for the GSAP animation to make the hero text visible
    cy.get('#hero-text-1', { timeout: 30000 })
      .should('exist')
      .should(($el) => {
        const opacity = parseFloat(window.getComputedStyle($el[0]).opacity)
        assert.isAbove(opacity, 0, 'hero text opacity should be greater than 0')
      })

    // also assert the text content is present
    cy.contains(/Hello, I'm Riley Boyd\./).should('exist')
  })

  it('should display the "View My Work" button', () => {
    cy.contains('button', 'View My Work', { timeout: 30000 }).should(
      'be.visible'
    )
  })
})
