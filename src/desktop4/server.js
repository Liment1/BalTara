const express = require("express");
const bodyParser = require("body-parser");
const { kritik, saveKritik } = require("./kritik");

const app = express();
app.use(bodyParser.json()); // Middleware untuk parsing JSON

// Rute GET untuk endpoint root
app.get("/", (req, res) => {
  res.send("Welcome to the Express server!");
});

// Rute POST untuk menerima data dari klien
app.post("/api/submit", (req, res) => {
  const { name, suggestions } = req.body;

  // Validasi input
  if (!name || !suggestions) {
    return res.json({
      success: false,
      message: "Name and suggestions cannot be empty.",
    });
  }

  // Cek untuk nama duplikat
  const existing = kritik.find(
    (entry) => entry.name.toLowerCase() === name.toLowerCase()
  );
  if (existing) {
    return res.json({ success: false, message: "Name already exists." });
  }

  // Jika valid, tambahkan ke array dan simpan
  kritik.push({ name, suggestions });
  saveKritik(kritik); // Simpan perubahan ke file

  res.json({ success: true });
});

const PORT = 3000; // Port tempat server mendengarkan
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// Middleware untuk menangani 404 - Rute tidak ditemukan
app.use((req, res) => {
  res.status(404).send("Page not found.");
});
