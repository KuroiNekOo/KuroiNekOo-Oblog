const { Router } = require("express");
const router = Router();

const articleView = require("../controllers/articleController.js");

router.get("/article/:id", articleView.get);

module.exports = router;