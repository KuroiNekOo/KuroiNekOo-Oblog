const { Router } = require("express");
const router = Router();

// ==========================
// Définition des routes
// ==========================

// Utilisation d'un routeur secondaire
router.use("/", require("./home.js"));

// Utilisation d'un routeur secondaire
router.use("/", require("./article.js"));

// Utilisation d'un routeur secondaire
router.use("/", require("./category.js"));

router.use((_, res) => {

  res.render("404.ejs");

});

module.exports = router;