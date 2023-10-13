describe("Test key presses", () => {
  it("can press different keys", () => {
    cy.visit("http://the-internet.herokuapp.com/key_presses");

    // Simulate pressing the Backspace key
    cy.get("#target").type("{backspace}");
    cy.get("#result").should("contain", "You entered: BACK_SPACE");

    // Simulate pressing the Delete key
    cy.get("#target").type("{del}");
    cy.get("#result").should("contain", "You entered: DELETE");

    // Simulate pressing the down arrow key
    cy.get("#target").type("{downArrow}");
    cy.get("#result").should("contain", "You entered: DOWN");

    // Simulate pressing the up arrow key
    cy.get("#target").type("{upArrow}");
    cy.get("#result").should("contain", "You entered: UP");

    // Simulate pressing the right arrow key
    cy.get("#target").type("{rightArrow}");
    cy.get("#result").should("contain", "You entered: RIGHT");

    // Simulate pressing the left arrow key
    cy.get("#target").type("{leftArrow}");
    cy.get("#result").should("contain", "You entered: LEFT");

    // Simulate pressing the page up key
    cy.get("#target").type("{pageUp}");
    cy.get("#result").should("contain", "You entered: PAGE_UP");

    // Simulate pressing the page down key
    cy.get("#target").type("{pageDown}");
    cy.get("#result").should("contain", "You entered: PAGE_DOWN");

    // Simulate pressing the up arrow key
    cy.get("#target").type("{home}");
    cy.get("#result").should("contain", "You entered: HOME");

    // Simulate pressing the up arrow key
    cy.get("#target").type("{end}");
    cy.get("#result").should("contain", "You entered: END");
  });
});
