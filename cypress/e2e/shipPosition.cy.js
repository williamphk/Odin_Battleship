describe("Drag and Drop Ships", () => {
  beforeEach(() => {
    // Visit the game page
    cy.visit("/dist/index.html");
  });

  it("click ships to change direction correctly", () => {
    cy.get(`#drag1`).click().should("have.css", "flex-direction", "column");
    cy.get(`#drag2`).click().should("not.have.css", "flex-direction", "column");

    // cy.get(`#drag1`)
    //   .trigger("mousedown", { force: true, which: 1 })
    //   .trigger("mousemove", {
    //     clientX: 150,
    //     clientY: 250,
    //     screenX: 150,
    //     screenY: 250,
    //     pageX: 150,
    //     pageY: 250,
    //     force: true,
    //   })
    //   .trigger("mousemove", {
    //     force: true,
    //     which: 1,
    //   })
    //   .trigger("mouseup", {
    //     force: true,
    //     which: 1,
    //   });
  });
});
