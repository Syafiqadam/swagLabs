import Login from "../../support/SwagLabs/Login";

describe("Fitur Login - SwagLabs", () => {
  beforeEach(() => {
    Login.keHalamanLogin();
  });

  it("1. Login berhasil dengan kredensial valid", () => {
    Login.IsiUsername("standard_user");
    Login.IsiPassword("secret_sauce");
    Login.clickLogin();
    Login.VerivikasiLoginBerhasil();
  });

  it("2. Login gagal dengan password salah", () => {
    Login.IsiUsername("standard_user");
    Login.IsiPassword("salah123");
    Login.clickLogin();
    Login.VerifikasiLoginGagal();
  });

  it("3. Login gagal dengan username salah", () => {
    Login.IsiUsername("locked_out_user");
    Login.IsiPassword("secret_sauce");
    Login.clickLogin();
    Login.VerifikasiLoginGagal();
  });

  it("4. Login gagal dengan username kosong", () => {
    Login.IsiUsername(" ");
    Login.IsiPassword("secret_sauce");
    Login.clickLogin();
    Login.VerifikasiLoginGagal();
  });

  it("5. Login gagal dengan password kosong", () => {
    Login.IsiUsername("standard_user");
    Login.IsiPassword(" ");
    Login.clickLogin();
    Login.VerifikasiLoginGagal();
  });

  it("6. Login gagal dengan username dan password kosong", () => {
    Login.clickLogin();
    cy.xpath(
      "//h3[normalize-space()='Epic sadface: Username is required']"
    ).should("contain", "Epic sadface: Username is required");
  });
});
