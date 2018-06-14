let Consumer = require("../models/Consumer");
let Quote = require("../models/Quotes");

module.exports = function(req, res){
	if("consumer_id" in req.query){
		new Consumer({id: req.query.consumer_id})
			.fetch()
			.then((model)=>{
				if(model){
					new Quote({consumer_id: req.query.consumer_id})
						.fetchAll()
						.then((model)=>{
							if(model){
								res.jsonp(model);
							}else{
								res.jsonp({error: "No quotes yet"});
							}
						});
				}else{
                
					res.jsonp({error: "Not a registered consumer"});
				}
			});
	}else{
		res.jsonp({error: "invalid request for quotes"});
	}
};