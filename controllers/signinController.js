let Contractor = require("../models/Contractor");

module.exports = function(req, res){
	new Contractor({email: req.body.email, password: req.body.password})
		.fetch()
		.then(function(model){
			if(model){
				req.session.isLoggedIn = true;
				res.jsonp({success: true});
			}else{
				req.session.isLoggedIn = false;
				res.jsonp({error: "wrong email / password combination"});
			}
		});
};