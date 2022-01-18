describe('Crossing Companion - Actions', () => {
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
  
      cy.visit('http://localhost:3000/all-critters')
    })
  
    it('should be able to click on a card to mark a critter as caught', () => {
      cy.get('[data-cy=fish-critter-card]')
        .contains('Dace')
        .click()
        
        .get('[data-cy=critter-caught-checkmark]')
    })
    
    it('should be able to see that a critter has been caught from both views', () => {
        cy.get('[data-cy=bug-critter-card')
        .contains('Wasp')
        .click()
        
        .get('[data-cy=bug-critter-card').eq(24)
        .contains('Wasp')
        .get('[data-cy=critter-caught-checkmark]')

        .visit('http://localhost:3000/')

        .get('[data-cy=bug-critter-card')
        .contains('Wasp')
        .get('[data-cy=critter-caught-checkmark]')
    })
    
    it('should be able to mark a critter as caught, refresh the page and see that the critter is still marked as caught', () => {
        cy.get('[data-cy=bug-critter-card')
        .contains('Fly')
        .click()
        
        .get('[data-cy=bug-critter-card').eq(71)
        .contains('Fly')
        .get('[data-cy=critter-caught-checkmark]')

        .reload()
        .get('[data-cy=bug-critter-card').eq(71)
        .contains('Fly')
        .get('[data-cy=critter-caught-checkmark]')
    })

    it('should be able to retain critter caught status while using back and forward buttons', () => {
        cy.get('[data-cy=bug-critter-card')
        .contains('Wharf Roach')
        .click()
        
        .get('[data-cy=bug-critter-card').eq(70)
        .contains('Wharf Roach')
        .get('[data-cy=critter-caught-checkmark]')

        .get('[data-cy=current-critters-nav-link]')
        .click()
        cy.go('back')

        .get('[data-cy=bug-critter-card').eq(70)
        .contains('Wharf Roach')
        .get('[data-cy=critter-caught-checkmark]')
    })

    it('should be able to navigate using the header nav links', () => {
        cy.get('[data-cy=current-critters-nav-link]')
        .click()
        .url('http://localhost:3000/')

        .get('[data-cy=all-critters-nav-link]')
        .click()
        .url('http://localhost:3000/all-critters')
    })

    it('should be able to navigate using the back and forward buttons', () => {
        cy.visit('http://localhost:3000/')
        .url('http://localhost:3000/')
        cy.go('back')
        .url('http://localhost:3000/all-critters')
        cy.go('forward')
        .url('http://localhost:3000')
    })
  
  })