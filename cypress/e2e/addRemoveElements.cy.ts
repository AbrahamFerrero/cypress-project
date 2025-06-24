// cypress/e2e/addRemoveElements.spec.ts

import { addButton, deleteButton } from '../selectors/addRemove';

describe('Add/Remove Elements', () => {
  beforeEach(() => {
    cy.visit('add_remove_elements/');
  });

  it('should add elements and delet them', () => {
    cy.addElement();
    cy.get(deleteButton).should('have.length', 1);
    cy.addElement();
    cy.get(deleteButton).should('have.length', 2);

    cy.deleteAllElements();
    cy.get(deleteButton).should('not.exist');
  });
});