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
  
      cy.visit('http://localhost:3000/')
    })
  
    it('should display the current time and date', () => {
      cy.get('[data-cy=clock-display]')
        .should('exist')
        .get('[data-cy=clock-time]')
        .get('[data-cy=clock-date]')
    })
  
    
  
  })