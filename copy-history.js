const fs = require("fs");
const path = require("path");

const source = path.join(__dirname, "allure-report", "history");
const target = path.join(__dirname, "allure-results", "history");

if (fs.existsSync(source)) {
  fs.rmSync(target, { recursive: true, force: true });
  fs.mkdirSync(target, { recursive: true });

  fs.cpSync(source, target, { recursive: true });
  console.log("✔ Histórico copiado!");
} else {
  console.log("ℹ Nenhum histórico existente encontrado.");
}
