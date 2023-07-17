describe("Game End", () => {
  beforeEach(() => {
    // Visit the game page
    cy.visit("/dist/index.html");
  });

  it("correctly restart the game", () => {
    cy.get("#start-btn").click();
    cy.get("#start-btn").should("have.text", "Start");
    // Check if the game board is enabled
    cy.get(".battlefield-cell")
      .should("have.css", "pointer-events", "auto")
      .and("have.css", "background-color", "rgba(0, 0, 0, 0)");
  });
});
