const { Router } = require("express");
const router = Router();

const categoryView = require("../controllers/categoryController.js");

router.get("/article/:category", categoryView.get);

module.exports = router;