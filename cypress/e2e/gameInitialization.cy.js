describe("Game Initialization", () => {
  beforeEach(() => {
    // Visit the game page
    cy.visit("/dist/index.html");
  });

  it("correctly initializes the game with 5 ships in pre-defined positions", () => {
    // Array of ship data
    const ships = [
      { x: 0, width: "64.25px" },
      { x: 2, width: "96.59375px" },
      { x: 4, width: "96.59375px" },
      { x: 6, width: "129px" },
      { x: 8, width: "161.1953125px" },
    ];

    // Loop over each ship
    ships.forEach((ship) => {
      // Check if the ship exists
      cy.get(
        `.battle-cell-content__player[data-x='${ship.x}'][data-y='0'] .ship`
      ).should("exist");

      // Check the CSS properties
      checkCSSProperties(
        `.battle-cell-content__player[data-x='${ship.x}'][data-y='0'] .ship`,
        ship.width
      );
    });

    // Check if the start button is enabled
    cy.get("#start-btn").should("be.enabled");
  });
});

// Helper function to check CSS properties
function checkCSSProperties(selector, width) {
  cy.get(selector)
    .should("have.css", "flex-direction", "row")
    .and("have.css", "background-color", "rgb(51, 51, 51)")
    .and("have.css", "width", width);
}
