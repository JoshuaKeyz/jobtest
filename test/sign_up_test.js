process.env.NODE_ENV = "test";

var chai = require("chai");
var should = chai.should();
var chaiHttp = require("chai-http");
var server = require("../app");
var knex = require("../db/knex");


chai.use(chaiHttp);

describe("API signup for /contractors/signup: ", ()=>{
	beforeEach((done)=>{
		knex.migrate.rollback()
			.then(function(){
				knex.migrate.latest()
					.then(function(){
						return knex.seed.run()
							.then(function(){
								done();
							});
					});
			});
	});

	afterEach((done)=>{
		knex.migrate.rollback()
			.then(function(){
				done();
			});
	});
	it("should only accept valid emails", (done)=>{
		chai.request(server)
			.post("/contractors/signup")
			.send({
				first_name: "Joshua",
				last_name: "Oguma", 
				email: "joshua.oguma.outlook.com",
				password: "example",
				location: "(0.0, 0.0)"
			})
			.end(function(err, res){
				res.should.be.json;
				res.body.should.have.property("error");
				res.body.error.should.equal("Invalid Email");
				done();
			});
	});
	it("first_name, last_name, email, password, location should all be present", (done)=>{
		chai.request(server)
			.post("/contractors/signup")
			.send({
				email: "joshua.oguma@outlook.com", 
				first_name: "Joshua"
			})
			.end(function(err, res){
				res.should.be.json;
				res.body.should.have.property("error");
				res.body.error.should.equal("first_name, last_name, email, password, location are all required");
				done();
			});
	});
	it("if email is already registered, return error, 'email already registered'", (done)=>{
		chai.request(server)
			.post("/contractors/signup")
			.send({
				first_name: "John",
				last_name: "Doew",
				email: "josh.doew@example.com",
				password:"example",
				location: "(0, 0)"
			})
			.end((err, res)=>{
				res.should.be.json;
				res.body.should.have.property("error");
				res.body.error.should.equal("this email is already registered");
				done();
			});
	});

	it("If email is not registered, register the user", (done)=>{
		chai.request(server)
			.post("/contractors/signup")
			.send({
				id: 2, 
				first_name: "Joshua",
				last_name: "Oguma", 
				email: "joshua.oguma@outlook.com", 
				password: "example", 
				location: "(60.6666, 80.9999)"
			})
			.end((err, res)=>{
				res.should.be.json;
				res.body.should.have.property("email");
				res.body.email.should.equal("joshua.oguma@outlook.com");
				done();
			});
	});    
});



describe("API signup for /consumers/signup: ", ()=>{
	beforeEach((done)=>{
		knex.migrate.rollback()
			.then(function(){
				knex.migrate.latest()
					.then(function(){
						return knex.seed.run()
							.then(function(){
								done();
							});
					});
			});
	});

	afterEach((done)=>{
		knex.migrate.rollback()
			.then(function(){
				done();
			});
	});
	it("should only accept valid emails", (done)=>{
		chai.request(server)
			.post("/consumers/signup")
			.send({
				first_name: "Joshua",
				last_name: "Oguma", 
				email: "joshua.oguma.outlook.com",
				password: "example",
				location: "(0.0, 0.0)"
			})
			.end(function(err, res){
				res.should.be.json;
				res.body.should.have.property("error");
				res.body.error.should.equal("invalid email");
				done();
			});
	});
	it("first_name, last_name, email, password, location should all be present", (done)=>{
		chai.request(server)
			.post("/consumers/signup")
			.send({
				email: "joshua.oguma@outlook.com", 
				first_name: "Joshua"
			})
			.end(function(err, res){
				res.should.be.json;
				res.body.should.have.property("error");
				res.body.error.should.equal("first_name, last_name, email, password, location are all required");
				done();
			});
	});
	it("if email is already registered, return error, 'email already registered'", (done)=>{
		chai.request(server)
			.post("/consumers/signup")
			.send({
				first_name: "meg",
				last_name: "perry",
				email: "meg.perryw@example.com",
				password:"example",
				location: "(800.8888, 9000.9999)"
			})
			.end((err, res)=>{
				res.should.be.json;
				res.body.should.have.property("error");
				res.body.error.should.equal("this email is already registered");
				done();
			});
	});

	it("If email is not registered, register the user", (done)=>{
		chai.request(server)
			.post("/consumers/signup")
			.send({
				id: 2, 
				first_name: "Joshua",
				last_name: "Oguma", 
				email: "joshua.oguma@outlook.com", 
				password: "example", 
				location: "(60.6666, 80.9999)"
			})
			.end((err, res)=>{
				res.should.be.json;
				res.body.should.have.property("email");
				res.body.email.should.equal("joshua.oguma@outlook.com");
				done();
			});
	});
});