// ==========================
// Requires
// ==========================
const express = require("express");
const app = express();
const router = require("./routes/router.js");

// ==========================
// Configuration Express
// ==========================
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));

app.use(express.static("static"));

// ==========================
// Configuration locals (global)
// ==========================
// ...

// ==========================
// Redirection vers le routeur
// ==========================

app.use("/", router);

// ==========================
// Lancement du serveur
// ==========================
const port = 3000;
app.listen(port, () => {
  console.log(`Serveur en écoute http://localhost:${port}/`);
})