const express = require("express");
const router = express.Router();
const { addData, getData } = require("../controllers/comprehensionController");

router.post("/addComprehension", addData);
router.get("/getComprehension", getData);

module.exports = router;
