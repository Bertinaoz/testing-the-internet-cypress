describe("Drag and Drop Test", () => {
  it("Should drag and drop elements", () => {
    cy.visit("http://the-internet.herokuapp.com/drag_and_drop");

    // to hold the data that is dragged during a drag-and-drop operation
    const dataTransfer = new DataTransfer();

    // Assert that the elements exist and are visible
    cy.get("#column-a").should("exist").should("be.visible");
    cy.get("#column-b").should("exist").should("be.visible");

    cy
      // getting "A"
      .get("div[draggable=true]")
      .eq(0)
      // triggering the "dragstart" event to
      // initialize the dataTransfer object
      .trigger("dragstart", { dataTransfer });

    cy 
      // getting "B"
      .get("div[draggable=true]")
      .eq(1)
      // dropping "C" into the "A" position defined in dataTransfer
      .trigger("drop", { dataTransfer });

    cy
      // getting "A"
      .get("div[draggable=true]")
      .eq(0)
      .trigger("dragend")
      .then(() => {
        // "A" should now be in the position of "C" and vice versa
        cy.get("div[draggable=true]").then((elements) => {
          cy.wrap(elements.text()).should("be.eq", "BA");
        });

        cy.visit("/");
      });
  });
});
