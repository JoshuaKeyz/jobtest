let Contractor= require("../models/Contractor");

module.exports = function(req, res){
  
	if(req.body.email.indexOf("@") < 1){
		res.jsonp({"error": "Invalid Email"});
	}else if(req.body.email && req.body.password && req.body.first_name && req.body.last_name && req.body.location){
		new Contractor({email: req.body.email})
			.fetch()
			.then(function(model){
				if(model){
					res.jsonp({error: "this email is already registered"});
				}else{
					new Contractor({first_name: req.body.first_name, last_name: req.body.last_name, email: req.body.email, password: req.body.password, location: req.body.location})
						.save(null, {methods: "insert"})
						.then((model)=>{
							res.jsonp(model);
						});
				}
			});
	}else{
		res.jsonp({error: "first_name, last_name, email, password, location are all required"});
	}
};