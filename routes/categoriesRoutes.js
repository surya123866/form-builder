const express = require("express");
const router = express.Router();
const { addData, getData } = require("../controllers/categoriesController");


router.post("/addCategories", addData);
router.get("/getCategories", getData);

module.exports = router;
