const express = require("express");
const router = express.Router();
const { addData, getData } = require("../controllers/clozeController");

router.post("/addCloze", addData);
router.get("/getCloze", getData);

module.exports = router;
