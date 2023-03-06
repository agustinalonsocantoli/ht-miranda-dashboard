/* global cy */

describe('Test Login', () => {

  it('Testing correct data input, click on login button and correct redirection', () => {
    cy.visit('http://localhost:3000/ht-miranda-dashboard');
    cy.url().should('eq', 'http://localhost:3000/ht-miranda-dashboard/login');
    
    cy.get('[data-cy="username"]').should('have.value', 'agustin@hm.com');
    cy.get('[data-cy="password"]').should('have.value', '000000');
    cy.get('[data-cy="btn"]').click();

    cy.url().should('eq', 'http://localhost:3000/ht-miranda-dashboard');
  })

  it('Testing null data input', () => {
    cy.visit('http://localhost:3000/ht-miranda-dashboard');
    cy.url().should('eq', 'http://localhost:3000/ht-miranda-dashboard/login');
    
    cy.get('[data-cy="username"]').clear().should('have.value', '');
    cy.get('[data-cy="password"]').clear().should('have.value', '');
    cy.get('[data-cy="btn"]').click();

    cy.on('window:alert',(text)=>{
      expect(text).to.contains('Usuario Incorrecto');
   })

    cy.url().should('eq', 'http://localhost:3000/ht-miranda-dashboard/login')
  })

  it('Testing incorrect data input', () => {
    cy.visit('http://localhost:3000/ht-miranda-dashboard');
    cy.url().should('eq', 'http://localhost:3000/ht-miranda-dashboard/login');
    
    cy.get('[data-cy="username"]').clear();
    cy.get('[data-cy="username"]').type('admin@hm.com').should('have.value', 'admin@hm.com');
    cy.get('[data-cy="password"]').clear();
    cy.get('[data-cy="password"]').type('123456').should('have.value', '123456');
    cy.get('[data-cy="btn"]').click();

    cy.on('window:alert',(text)=>{
      expect(text).to.contains('Usuario Incorrecto');
   })

    cy.url().should('eq', 'http://localhost:3000/ht-miranda-dashboard/login');
  })

})

describe('Test Logout', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/ht-miranda-dashboard');
    cy.url().should('eq', 'http://localhost:3000/ht-miranda-dashboard/login');
    
    cy.get('[data-cy="username"]').should('have.value', 'agustin@hm.com');
    cy.get('[data-cy="password"]').should('have.value', '000000');
    cy.get('[data-cy="btn"]').click();

  })

  it('Correct logout', () => {
    cy.visit('http://localhost:3000/ht-miranda-dashboard');

    cy.get('[data-cy="logout"]').click();

    cy.url().should('eq', 'http://localhost:3000/ht-miranda-dashboard/login');
  })
})