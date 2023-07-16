var filename = "/dist/index.html";

describe("Game Initialization", () => {
  beforeEach(() => {
    // Visit the game page
    cy.visit(filename);
  });

  it("correctly initializes the game", function () {
    cy.get("#start-btn").should("be.enabled");
  });
});
