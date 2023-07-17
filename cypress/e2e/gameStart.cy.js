describe("Game Start", () => {
  beforeEach(() => {
    // Visit the game page
    cy.visit("/dist/index.html");
  });

  it("correctly start the game", () => {
    cy.get("#start-btn").click();
    cy.get("#start-btn").should("have.text", "Restart");
    // Check if the game board is disabled
    cy.get(".battlefield-cell")
      .should("have.css", "pointer-events", "none")
      .and("have.css", "background-color", "rgb(228, 228, 228)");
  });
});
