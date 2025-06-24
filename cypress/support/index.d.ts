// cypress/support/index.d.ts

/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Comando personalizado: hace clic en el botón "Add Element".
     * @example cy.addElement()
     */
    addElement(): Chainable<any>;

    /**
     * Comando personalizado: elimina todos los elementos "Delete" existentes.
     * @example cy.deleteAllElements()
     */
    deleteAllElements(): Chainable<any>;

    login(username: string, password: string): Chainable<any>;
  }
}