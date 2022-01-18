

describe('Crossing Companion - Current Critters - DOM', () => {
  beforeEach(() => {

    cy.visit('http://localhost:3000/')
  })

  it('should display the current time and date', () => {
    cy.get('[data-cy=clock-display]')
      .should('exist')
      .get('[data-cy=clock-time]')
      .get('[data-cy=clock-date]')
  })

  it('should display navigation links in the Header', () => {
    cy.get('[data-cy=header]')
      .should('exist')
      .get('[data-cy=header-links]')
      .get('[data-cy=current-critters-nav-link]')
      .get('[data-cy=all-critters-nav-link]')
  })

  it('should have buttons that allow the user to choose between hemispheres', () => {
    cy.get('[data-cy=set-northern]')
      .get('[data-cy=set-southern]')
  })

  it('should have a current fish section', () => {
    cy.get('[data-cy=current-fish-container]')
      .should('exist')
      .contains('[data-cy=critter-card]')
      
  })

  it('should have a current sea creatures section', () => {
    cy.get('[data-cy=current-fish-container]')
      .should('exist')
  })
  
  it('should have a current bugs section', () => {
    cy.get('[data-cy=current-bugs-container]')
      .should('exist')
  })

  it('should have a footer', () => {
    cy.get('[data-cy=footer]')
      .should('exist')
  })

})


describe('Crossing Companion - All Critters - DOM', () => {
  beforeEach(() => {

    cy.visit('http://localhost:3000/all-critters')
  })

  it('should show all fish', () => {
    cy.get('[data-cy=footer]')
      .should('exist')
  })

  it('should show all sea creatures', () => {
    cy.get('[data-cy=footer]')
      .should('exist')
  })

  it('should show all bugs', () => {
    cy.get('[data-cy=footer]')
      .should('exist')
  })

})