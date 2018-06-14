let Consumer = require("../models/Consumer");

module.exports = function(req, res){
	new Consumer({email: req.body.email, password: req.body.password})
		.fetch()
		.then(function(model){
			if(model){
				req.session.isLoggedIn=true;
				res.jsonp({success: true});
			}else{
				req.session.isLoggedIn= false;
				res.jsonp({error: "wrong email / password combination"});
			}
		});
};