/// <reference types="Cypress" />

beforeEach(() => {
  cy.task("seedDatabase");
});

describe("Takeaways", () => {
  it("should display a list of fetched takeaways", () => {
    cy.visit("/");
    cy.get("[data-cy='takeaway-item']").should("have.length", 2);
  });
});
