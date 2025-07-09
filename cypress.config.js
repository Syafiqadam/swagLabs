const { defineConfig } = require("cypress"); // <-- Tambahkan ini di baris 1

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com/", // Tanpa /api jika kamu ingin akses semua endpoint
    fixturesFolder: "cypress/fixtures",
    supportFile: "cypress/support/e2e.js",
  },
});
