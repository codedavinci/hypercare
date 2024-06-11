describe("List View - Integration Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it('loads more cards when "Load More" button is clicked', () => {
    cy.get("#load-more").click();
    cy.get(".card").should("have.length", 20);
  });

  it("displays user details modal when the 'View More' is clicked", () => {
    cy.get("#view-more").first().click();
    cy.get("#modal").should("be.visible");
    cy.get("#modal .card-title").should("contain", "Norton Berwick");
  });

  it("closes the modal when the close button is clicked", () => {
    cy.get("#view-more").first().click();
    cy.get("#modal").should("be.visible");
    cy.get("#modal button").click();
    cy.get("#modal").should("not.exist");
  });
});
