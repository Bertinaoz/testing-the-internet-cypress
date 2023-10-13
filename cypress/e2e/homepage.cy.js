describe("Test homepage", () => {
  beforeEach(() => {
    cy.visit("http://the-internet.herokuapp.com/");
  });
  it("Headings have correct text", () => {
    cy.get(".heading").should("have.text", "Welcome to the-internet");
    cy.get("h2").should("have.text", "Available Examples");
  });

  it.only("Find and click on links", () => {
    cy.contains("a", "Broken Images").click(); //can use a insteal of li because it is a link
    cy.go(-1); //navigate back to the previous page in the browser's history,
    cy.contains("a", "Entry Ad").click();

    //test modal
    cy.get(".modal")
      .contains(/this is a modal window/i)
      .should("exist"); //use this style to search for a text that is not case sensitive
    cy.get(".modal-body > p").should(
      "have.text",
      "It's commonly used to encourage a user to take an action (e.g., give their e-mail address to sign up for something or disable their ad blocker)."
    );
    cy.get(".modal-footer").click();
    cy.go(-1); //returns to homepage
  });
});
