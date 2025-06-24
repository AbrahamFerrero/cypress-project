/// <reference types="cypress" />

import { successMessage, errorMessage, logoutBtn } from "../selectors/login";


describe('Login and password are as expected', () => {
  beforeEach(() => {
    cy.visit('login');
  });

  it('introduces valid user and password, gets to the next page', () => {
    cy.login('tomsmith', 'SuperSecretPassword!');
    cy.url().should('include', 'secure');
    cy.get(successMessage).should('have.text', '\n            You logged into a secure area!\n            ×\n          ');
    cy.get(logoutBtn).should('have.text', ' Logout');
    cy.get(logoutBtn).click();
    cy.url().should('include', 'login');
  });

    it('introduces wrong user and password, returns error', () => {
    cy.login('wronguser', 'wrongpassword');
    cy.url().should('include', 'login');
    cy.get(successMessage).should('not.exist');
    cy.get(errorMessage).should('have.text', '\n            Your username is invalid!\n            ×\n          ');
    cy.get(logoutBtn).should('not.exist');
    cy.get(errorMessage).should('be.visible');
  });
});