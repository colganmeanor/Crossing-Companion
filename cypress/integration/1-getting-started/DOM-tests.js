describe('Crossing Companion - About/Home Page - DOM', () => {
  beforeEach(() => {

    cy.intercept('GET', 'v1/fish/', {
        fixture: 'fish.json'
    })

    cy.intercept('GET', 'v1/sea/', {
      fixture: 'seacreatures.json'
  })

  cy.intercept('GET', 'v1/bugs/', {
    fixture: 'bugs.json'
})

    cy.visit('http://localhost:3000/')
  })

  it('should display the current time and date', () => {
    cy.get('[data-cy=clock-display]')
      .should('exist')
      .get('[data-cy=clock-time]')
      .get('[data-cy=clock-date]')
  })

  it('should display the About Component', () => {
    cy.get('[data-cy=about-section')
      .should('exist')
  })

  it('should show links to navigate around the site inside the about component', () => {
    cy.get('[data-cy=current-critters-link]')
      .should('exist')

      .get('[data-cy=all-critters-link]')
      .should('exist')
  })

})


describe('Crossing Companion - Current Critters - DOM', () => {
  beforeEach(() => {

    cy.intercept('GET', 'v1/fish/', {
        fixture: 'fish.json'
    })

    cy.intercept('GET', 'v1/sea/', {
      fixture: 'seacreatures.json'
  })

  cy.intercept('GET', 'v1/bugs/', {
    fixture: 'bugs.json'
})

    cy.visit('http://localhost:3000/current-critters')
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
    cy.get('[data-cy=current-fish-container-northern]')
      .should('exist')
      .get('[data-cy=fish-critter-card]')
      .should('exist')
      
  })

  it('should have a current sea creatures section', () => {
    cy.get('[data-cy=current-sea-creatures-container-northern]')
      .should('exist')

      .get('[data-cy=sea-creature-critter-card]')
      .should('exist')
  })
  
  it('should have a current bugs section', () => {
    cy.get('[data-cy=current-bugs-container-northern]')
      .should('exist')

      .get('[data-cy=bug-critter-card]')
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
    cy.get('[data-cy=fish-critter-card]')
      .should('have.length', 80)
  })

  it('should show all sea creatures', () => {
    cy.get('[data-cy=sea-creature-critter-card]')
      .should('have.length', 40)
  })

  it('should show all bugs', () => {
    cy.get('[data-cy=bug-critter-card]')
      .should('have.length', 80)
  })

})

describe('Crossing Companion - Oops Page - DOM', () => {
  beforeEach(() => {

    cy.visit('http://localhost:3000/best-critters')
  })

  it('should show a prominent 404 Page not Found message', () => {
    cy.get('[data-cy=oops-page]')
      .should('exist')
      .contains('404 - Not Found')
  })

  it('should have links to help the user return', () => {
    cy.get('[data-cy=oops-link-home]')
    .should('exist')

    .get('[data-cy=oops-link-current-critters]')
    .should('exist')

    .get('[data-cy=oops-link-all-critters]')
    .should('exist')
  })


})

describe('Crossing Companion - No Data', () => {
  beforeEach(() => {

    cy.intercept('GET', 'v1/fish/', {
        'body': {}
    })

    cy.intercept('GET', 'v1/sea/', {
      'body': {}
  })

  cy.intercept('GET', 'v1/bugs/', {
    'body': {}
})

    cy.visit('http://localhost:3000/all-critters')
  })

  it('should show a message to the user if data fails to load for some reason', () => {
    cy.get('[data-cy=fetch-error-message]')
    .should('have.length', 3)
  })

})