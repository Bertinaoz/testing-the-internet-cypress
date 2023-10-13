describe("Test JS alerts", () => {
  it("clicks on different javascript alerts", () => {
    cy.visit("http://the-internet.herokuapp.com/javascript_alerts");

    cy.get('ul[style="list-style-type: none;"] li').should(($lis) => {
      // Check the number of list items
      expect($lis).to.have.length(3);

      // Check the text content of each list item
      expect($lis.eq(0)).to.contain("Click for JS Alert");
      expect($lis.eq(1)).to.contain("Click for JS Confirm");
      expect($lis.eq(2)).to.contain("Click for JS Prompt");
    });

    cy.get(":nth-child(1) > button").click();
    cy.get("#result").contains("You successfully clicked an alert");

    cy.get(":nth-child(2) > button").click();
    cy.get("#result").contains("You clicked: Ok");

    cy.get(":nth-child(3) > button").click();
    // manually enter the word "hello" in the alert input field
    cy.get("#result").contains("You entered: hello");
  });
});
