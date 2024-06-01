const { Router } = require("express");
const router = Router();

const homeView = require("../controllers/homeController.js");

router.get("/", homeView.get);

module.exports = router;