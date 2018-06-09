var express = require("express");
var router = express.Router();

// *** register as a contractor ***//
router.get("/register_contractor", (req, res,next)=>{});
router.post("/register_contractor", (req, res,next)=>{});

router.get("/register_consumer", (req, res,next)=>{})
router.post("/register_consumer", (req, res,next)=>{});

router.get("/provide_location", (req, res,next)=>{});
router.put("/provide_location", (req, res,next)=>{});

router.get("revise_quote", (req, res,next)=>{})
router.patch("revise_quote", (req, res,next)=>{});


module.exports = router;
