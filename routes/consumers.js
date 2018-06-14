const express = require("express");
const router = express.Router();
var bodyParser = require("body-parser");
let session = require("express-session");
/*Controllers */
let consumerSignupController = require("../controllers/consumerSignupController");
let consumerSigninController = require("../controllers/consumerSigninController");
let consumerGetQuotesController = require("../controllers/consumerGetQuotesController");
let consumerHandleQuotesController = require("../controllers/consumerHandleQuotesController");


router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.use(session({
	secret: "jobtest", 
	resave: false,
	cookie: {maxAge:1200000}, //20 minutes
	saveUninitialized: true
}));

router.post("/signup", consumerSignupController);

router.post("/signin", consumerSigninController);

router.get("/getquotes", consumerGetQuotesController);

router.put("/quotes", consumerHandleQuotesController);

module.exports = router;