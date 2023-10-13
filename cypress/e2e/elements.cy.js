describe("Disappearing Elements Test", () => {
  it("Should check for disappearing/reappearing elements", () => {
    cy.visit("http://the-internet.herokuapp.com/disappearing_elements");

    // Verify the initial elements are present
    cy.get('a:contains("Home")').should("exist");
    cy.get('a:contains("About")').should("exist");
    cy.get('a:contains("Contact Us")').should("exist");
    cy.get('a:contains("Portfolio")').should("exist");

    // Reload the page
    cy.reload();

    // Verify that the elements disappear after navigation
    cy.get('a:contains("Home")').should("exist");
    cy.get('a:contains("About")').should("exist");
    cy.get('a:contains("Contact Us")').should("exist");
    cy.get('a:contains("Portfolio")').should("exist");
    cy.get('a:contains("Gallery")').should("exist");

    cy.visit("/");
  });
});
