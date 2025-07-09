class LoginPage {
  keHalamanLogin() {
    cy.visit("https://www.saucedemo.com/");
  }

  IsiUsername(username) {
    cy.xpath("//input[@id='user-name']").clear().type(username);
  }

  IsiPassword(password) {
    cy.xpath("//input[@id='password']").clear().type(password);
  }

  clickLogin() {
    cy.xpath("//input[@id='login-button']").click();
  }

  VerivikasiLoginBerhasil() {
    cy.url().should("include", "/inventory.html");
    cy.xpath("//span[@class='title']").should("contain", "Products");
  }

  VerifikasiLoginGagal() {
    cy.xpath("//h3[@data-test='error']").should("be.visible");
  }
}

export default new LoginPage();
