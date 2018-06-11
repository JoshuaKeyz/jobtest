const express = require("express");
const router = express.Router();
const bookshelf = require("../bookshelf")
let Consumer = require("../models/Consumer")
router.post("/signup", function(req, res, next){
    if(req.body.email.indexOf("@") < 2){
        res.jsonp({error: "invalid email"})
    }else if(req.body.email && req.body.password && req.body.first_name && req.body.last_name && req.body.location){
        new Consumer({email: req.body.email})
            .fetch()
            .then(function(model){
                if(model){
                    res.jsonp({error: "this email is already registered"})
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
                        res.jsonp(model.toJSON())
                    })
                }
            })
    }else{
        res.jsonp({error: "first_name, last_name, email, password, location are all required"})
    }
})


router.post("/signin", (function(req, res, next){
    console.log(req.body);
    new Consumer({email: req.body.email, password: req.body.password})
    .fetch()
    .then(function(model){
        if(model){
            res.jsonp({success: true})
        }else{
            res.jsonp({error: "wrong email / password combination"})
        }
    })
 }))

 router.get("quotes", (function(req, res, next){

}))
module.exports = router;