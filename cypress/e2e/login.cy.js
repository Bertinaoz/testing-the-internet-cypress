describe("Test Login Form", () => {
  beforeEach(() => {
    cy.visit("http://the-internet.herokuapp.com/login");
  });
  it("should log in with valid credentials", () => {
    cy.get("#username").type("tomsmith");
    cy.get("#password").type("SuperSecretPassword!");
    cy.get(".radius").click();

    cy.get(".button").should("contain", "Logout").click();

    // Check that the new URL is as expected
    cy.url().should("eq", "http://the-internet.herokuapp.com/login");
    cy.get("#flash").should("contain", "You logged out of the secure area!");
  });

  it("trys to login with invalid username", () => {
    cy.get("#username").type("tom");
    cy.get("#password").type("SuperSecretPassword!");
    cy.get(".radius").click();
    cy.get("#flash").should("contain", "Your username is invalid!");
  });
  it("trys to login with invalid password", () => {
    cy.get("#username").type("tomsmith");
    cy.get("#password").type("SuperSecret");
    cy.get(".radius").click();
    cy.get("#flash").should("contain", "Your password is invalid!");
  });
});
