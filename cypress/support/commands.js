// cypress/support/commands.ts

import { addButton, deleteButton } from '../selectors/addRemove';
import { usernameBox, passwordBox, submitBtn } from '../selectors/login';

Cypress.Commands.add('addElement', () => {
  cy.get(addButton).click();
});

Cypress.Commands.add('deleteAllElements', () => {
  // Itera sobre todos los botones Delete y hace clic en cada uno
  cy.get(deleteButton).each(($btn) => {
    cy.wrap($btn).click();
  });
});

Cypress.Commands.add('login', (username, password) => {
  cy.get(usernameBox).type(username);
  cy.get(passwordBox).type(password);
  cy.get(submitBtn).click();
});