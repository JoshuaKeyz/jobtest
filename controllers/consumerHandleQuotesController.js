let Quote = require("../models/Quotes");

module.exports = (req, res)=>{
	if("quote_id" in req.body && "action" in req.body){
		new Quote({id: req.body.quote_id})
			.fetch()
			.then((model)=>{
				if(model){
					switch(req.body.action){
					case "accept":
						//Check if the task has been accepted or rejected
						//If still pending, accept
						if(model.toJSON().status == "accepted"){
							res.jsonp({error: "already accepted"});
						}else if(model.toJSON.status == "rejected"){
							res.jsonp({error: "already rejected"});
						}else{
							new Quote({id: req.body.quote_id})
								.save({status: "accepted"}, {patch: true});
							res.jsonp({status: "success"});
						}
                        
						break;
					case "reject":
						//Check if the task as been accepted or rejected
						//if pending, reject
						if(model.toJSON().status == "accepted"){
							res.jsonp({error: "already accepted"});
						}else if(model.toJSON.status == "rejected"){
							new Quote({id: req.body.quote_id})
								.save({status: "rejected"}, {patch: true});
							res.jsonp({status: "successful"});
						}else{
							new Quote({id: req.body.quote_id})
								.save({status: "rejected"}, {patch: true});
							res.jsonp({status: "successful"});
						}
						break;
					default: 
						//send error of "invalid action"
						res.jsonp({error: "unrecognized command"});
						break;
					}
				}else{
					res.jsonp({error: "invalid quote specified"});
				}
			});
	}else{
		res.jsonp({status: "error"});
	}
};