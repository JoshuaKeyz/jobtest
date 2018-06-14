let Consumer = require("../models/Consumer");

module.exports = function(req, res){
	if(req.body.email.indexOf("@") < 2){
		res.jsonp({error: "invalid email"});
	}else if(req.body.email && req.body.password && req.body.first_name && req.body.last_name && req.body.location){
		new Consumer({email: req.body.email})
			.fetch()
			.then(function(model){
				if(model){
					res.jsonp({error: "this email is already registered"});
				}else{
					new Consumer({
						first_name: req.body.first_name,
						last_name: req.body.last_name, 
						email: req.body.email, 
						password: req.body.password,
						location: req.body.location
					})
						.save(null, {method: "insert"})
						.then(function(model){
							res.jsonp(model.toJSON());
						});
				}
			});
	}else{
		res.jsonp({error: "first_name, last_name, email, password, location are all required"});
	}
};