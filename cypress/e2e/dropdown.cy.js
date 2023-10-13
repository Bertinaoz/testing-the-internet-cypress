describe("Test dropdown list", () => {
  it("select different options from dropdown list", () => {
    cy.visit("http://the-internet.herokuapp.com/dropdown");
    cy.get("#dropdown").should("contain", "Please select an option");
    cy.get("#dropdown").select("Option 1");
    cy.get("#dropdown").select("Option 2");

    cy.visit("/"); //returns to homeopage (we set the base URL in the config file)
  });
});
