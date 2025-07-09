import Products from "../../support/SwagLabs/penambahanProduk";
import Login from "../../support/SwagLabs/Login";

describe("Fitur Login - SwagLabs", () => {
  beforeEach(() => {
    Login.keHalamanLogin();
    Login.IsiUsername("standard_user");
    Login.IsiPassword("secret_sauce");
    Login.clickLogin();
    Login.VerivikasiLoginBerhasil();
  });

  it("membeli suatu barang", () => {
    Products.menambahkanProduk();
    Products.mengKlikKeranjang();
    Products.verivikasiKeHalamanCheckOut();
    Products.KlikCheckOut();
    Products.masukkanNamaDepan("standard");
    Products.masukkanNamaBelakang("user");
    Products.masukkanPostalCode("assaa");
    Products.KlikContinue();
  });

  it("meremove suatu barang", () => {
    Products.menambahkanProduk();
    Products.mengKlikKeranjang();
    Products.verivikasiKeHalamanCheckOut();
    Products.meRemoveProduk();
    Products.melanjutkanBelanja();
  });
});
