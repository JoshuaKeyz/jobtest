const express = require("express");
const router = express.Router();

var assert = require("assert");
var Contractor = require("../models/Contractor")
var Consumer = require("../models/Consumer")
var Quote = require("../models/Quotes")
router.post("/signup", function(req, res, next){
  
    if(req.body.email.indexOf("@") < 1){
        res.jsonp({"error": "Invalid Email"})
    }else if(req.body.email && req.body.password && req.body.first_name && req.body.last_name && req.body.location){
        new Contractor({email: req.body.email})
            .fetch()
            .then(function(model){
                if(model){
                    res.jsonp({error: "this email is already registered"})
                }else{
                    new Contractor({first_name: req.body.first_name, last_name: req.body.last_name, email: req.body.email, password: req.body.password, location: req.body.location})
                    .save(null, {methods: "insert"})
                    .then((model)=>{
                        res.jsonp(model);
                    })
                }
            })
    }else{
        res.jsonp({error: "first_name, last_name, email, password, location are all required"})
    }
})

router.post("/signin", function(req, res, next){
   console.log(req.body);
   new Contractor({email: req.body.email, password: req.body.password})
   .fetch()
   .then(function(model){
       if(model){
           res.jsonp({success: true})
       }else{
           res.jsonp({error: "wrong email / password combination"})
       }
   })
})

router.post("/quotes", function(req, res, next){
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
                                    res.jsonp({status: "success"});
                                })
                            }
                    }else{
                        res.jsonp({error: "Unknown consumer"})
                    }
                })
            }else{
                res.jsonp({error: "Unknown Contractor"})
            }
        })
    }
})

/*router.get("/quotes", function(req, res, next){
    
})*/
module.exports = router;