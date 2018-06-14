const express = require("express");
const router = express.Router();
var bodyParser = require("body-parser");
let session = require("express-session");

/*Controllers */
var signupController = require("../controllers/signupController");
var signinController = require("../controllers/signinController");
var quotesController = require("../controllers/quotesController");
var reviewQuotesController = require("../controllers/reviewQuotesController");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.use(session({
	secret: "jobtest", 
	resave: false,
	cookie: {maxAge:1200000}, //20 minutes
	saveUninitialized:true
}));

router.post("/signup", signupController);
router.post("/signin", signinController);
router.post("/quotes", quotesController);
router.put("/quotes", reviewQuotesController);

module.exports = router;