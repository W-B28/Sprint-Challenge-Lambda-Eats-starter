describe("Testing members form", function() {
  beforeEach(function() {
    cy.visit("http://localhost:3000/pizza");
  })
  it("Add test to inputs and submit form", function() {
    cy.get('input[name="name"]')
      .type("William")
      .should("have.value", "William");


    cy.get('textarea[name="specInstr"]')
        .type("some text")
        .should("have.value", "some text")

    cy.get('select[name="sizes"]')
        .select('Sm')
        .should("have.value", "Sm")


    cy.get('[type="checkbox"]')
      .check()
      .should("be.checked");

    cy.get("button").click();

    it("Empy form", function() {


    cy.get('button[name="orderButton"]')
      .click()

    cy.get('input[name="name"]')
      .type("Jesslin")
      .should("have.value", "Jesslin")

    cy.get('select[name="size"]')
        .select('Sm')
        .should("have.value", "Sm")

    cy.get('button[name="submit"]')
        .click()

        });
  })
})
