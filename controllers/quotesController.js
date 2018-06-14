let Consumer = require("../models/Consumer");
let Quote = require("../models/Quotes");
let Contractor = require("../models/Contractor");

module.exports = function(req, res){
	if(req.body.contractor_id && req.body.consumer_id){
		new Contractor({id: req.body.contractor_id})
			.fetch()
			.then(function(model){
				if(model){
					new Consumer({id: req.body.consumer_id})
						.fetch()
						.then(function(model){
							if(model){
								if(req.body.labor && 
                            req.body.expenses &&
                            req.body.sales_task && req.body.miscellaneous &&
                            req.body.status &&
                            req.body.total){
									new Quote({
										contractor_id: req.body.contractor_id,
										consumer_id: req.body.consumer_id, 
										labor: req.body.labor,
										sales_task: req.body.sales_task, 
										status: req.body.status, 
										total: req.body.total
									})
										.save(null, {method: "insert"})
										.then(function(model){
											res.jsonp({status: "success", inserted : model});
										});
								}
							}else{
								res.jsonp({error: "Unknown consumer"});
							}
						});
				}else{
					res.jsonp({error: "Unknown Contractor"});
				}
			});
	}
};