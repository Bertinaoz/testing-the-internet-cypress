describe("Test checkboxes", () => {
  it("checks and unchecks boxes", () => {
    cy.visit("http://the-internet.herokuapp.com/checkboxes");

    cy.get("h3").should("have.text", "Checkboxes");

    cy.get('#checkboxes input[type="checkbox"]')
      .eq(0)
      .check()
      .should("be.checked");

    cy.get('#checkboxes input[type="checkbox"]')
      .eq(0)
      .uncheck()
      .should("not.be.checked");

    cy.get('#checkboxes input[type="checkbox"]')
      .eq(1)
      .check()
      .should("be.checked");

    cy.get('#checkboxes input[type="checkbox"]')
      .eq(1)
      .uncheck()
      .should("not.be.checked");

    cy.visit("/"); //returns to homeopage (we set the base URL in the config file)
  });
});
