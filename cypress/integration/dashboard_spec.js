describe('Describe', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/reservations',
       [
        {
          "id": 1,
          "name": "Christie",
          "date": "12/29",
          "time": "7:00",
          "number": 12
        },
        {
          "id": 2,
          "name": "Leta",
          "date": "4/5",
          "time": "7:00",
          "number": 2
        },
        {
          "id": 3,
          "name": "Pam",
          "date": "1/21",
          "time": "6:00",
          "number": 4
        }
      ]
    )
    cy.visit('http://localhost:3000')
  });

  it('should display the title', () => {
    cy.contains('h1', 'Turing Cafe Reservations')
  });

  it('should display the form', () => {
    cy.get('form')
  });

  it('should display the reservations', () => {
    cy.get('article')
  });

  it('should be able to fill in the form and reflect the info in input', () => {
    cy.get('form input[name="name"]').type('Rachel')
      .get('form input[name="name"]').invoke('val').should('equal', 'Rachel')
      .get('form input[name="date"]').type('05/26')
      .get('form input[name="date"]').invoke('val').should('equal', '05/26')
      .get('form input[name="time"]').type('6')
      .get('form input[name="time"]').invoke('val').should('equal', '6')
      .get('form input[name="number"]').type('2')
      .get('form input[name="number"]').invoke('val').should('equal', '2')
  });

  it('should add new reservation after clicking make reservation', () => {
    cy.get('form input[name="name"]').type('Rachel')
      .get('form input[name="date"]').type('05/26')
      .get('form input[name="time"]').type('6')
      .get('form input[name="number"]').type('2')
      .get('form > button').click()
      .get('article').contains('h2', 'Rachel')
  })
})
