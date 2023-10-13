describe("Test numbers inputs", () => {
  it("can input numbers", () => {
    cy.visit("http://the-internet.herokuapp.com/inputs");

    cy.get("input").type("12").type("{downArrow}");
  });
});
