const express = require("express");
const router = express.Router();

router.get("/", function(req, res, next){
    res.send("Response from route")
})

module.exports = router;