class Products {
  keHalamanProduk() {
    cy.visit("https://www.saucedemo.com/inventory.html");
  }

  menambahkanProduk() {
    cy.xpath("//button[@id='add-to-cart-sauce-labs-backpack']").click();
  }

  meRemoveProduk() {
    cy.xpath("//button[@id='remove-sauce-labs-backpack']").click();
  }

  mengKlikKeranjang() {
    cy.xpath("//a[@class='shopping_cart_link']").click();
  }

  verivikasiKeHalamanCheckOut() {
    cy.url().should("include", "/cart.html");
    cy.xpath("//span[@class='title']").should("contain", "Your Cart");
  }

  KlikCheckOut() {
    cy.xpath("//button[@id='checkout']").click();
  }

  masukkanNamaDepan() {
    cy.xpath("//input[@id='first-name']").clear().type(FirstName);
  }

  masukkanNamaBelakang() {
    cy.xpath("//input[@id='last-name']").clear().type(LastName);
  }

  masukkanPostalCode() {
    cy.xpath("//input[@id='postal-code']").clear().type(PostalCode);
  }

  KlikContinue() {
    cy.xpath("//input[@id='continue']").click();
  }

  melanjutkanBelanja() {
    cy.xpath("//button[@id='continue-shopping']").click();
  }
}

export default new Products();
