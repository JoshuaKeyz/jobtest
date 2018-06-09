var express = require("express");
var router = express.Router();

// *** register as a contractor ***//
<<<<<<< HEAD
router.get("/register_contractor", (req, res,next)=>{});
router.post("/register_contractor", (req, res,next)=>{});

router.get("/register_consumer", (req, res,next)=>{})
router.post("/register_consumer", (req, res,next)=>{});

router.get("/provide_location", (req, res,next)=>{});
router.put("/provide_location", (req, res,next)=>{});

router.get("revise_quote", (req, res,next)=>{})
router.patch("revise_quote", (req, res,next)=>{});
=======
router.get("/register_contractor");
router.post("/register_contractor");

router.get("/register_consumer")
router.post("/register_consumer");

router.get("/provide_location");
router.put("/provide_location");

router.get("revise_quote")
router.patch("revise_quote");
>>>>>>> 379d539df1145ee84505554f0a14b576a70b0b58
