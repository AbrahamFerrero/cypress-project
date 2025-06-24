/// <reference types="cypress" />

import { checkboxGroup } from "../selectors/checkboxes";


describe('Checkboxes are activated and deactivated', () => {
  beforeEach(() => {
    cy.visit('checkboxes');
  });

  it('check on the checkbox 1 and 2 that work correctly', () => {
  const firstCheckbox = cy.get(checkboxGroup).first();
  const lastCheckbox = cy.get(checkboxGroup).last();

  firstCheckbox.check().should('be.checked');
  lastCheckbox.uncheck().should('not.be.checked');
  firstCheckbox.uncheck().should('not.be.checked');
  lastCheckbox.check().should('be.checked');
  });
});