const fs = require("fs");
const path = require("path");

function loadKritik() {
  const filePath = path.join(__dirname, "kritik.json");
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, "utf8");
    return JSON.parse(data);
  }
  return [];
}

function saveKritik(data) {
  const filePath = path.join(__dirname, "kritik.json");
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

const kritik = loadKritik(); // Memuat data saat server dimulai

module.exports = { kritik, saveKritik };
