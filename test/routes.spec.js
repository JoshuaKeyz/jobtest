var express = require("express");
var router = express.Router();

// *** register as a contractor ***//
router.get("/register_contractor");
router.post("/register_contractor");

router.get("/register_consumer")
router.post("/register_consumer");

router.get("/provide_location");
router.put("/provide_location");

router.get("revise_quote")
router.patch("revise_quote");