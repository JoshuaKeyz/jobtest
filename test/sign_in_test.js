process.env.NODE_ENV = "test";

var chai = require("chai");
var should = chai.should();
var chaiHttp = require("chai-http");
var server = require("../app");
var knex = require("../db/knex");

chai.use(chaiHttp);

describe("Signing In of Contractors", ()=>{
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
	it("Contractors with right email and password signs in", (done)=>{
		chai.request(server)
			.post("/contractors/signin")
			.send({
				email: "josh.doew@example.com", 
				password: "example"
			})
			.end(function(err, res){
				res.body.should.have.property("success");
				res.body.success.should.equal(true);
				done();
			});
	});
	it("Constractors with wrong email / password combination can't sign in", (done)=>{
		chai.request(server)
			.post("/contractors/signin")
			.send({
				email: "wrongemail@outlook.com",
				password: "example"
			})
			.end(function(err, res){
				res.body.should.have.property("error");
				res.body.error.should.equal("wrong email / password combination");
				done();
			});
	});
});

describe("Signing In of Consumers", ()=>{
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
	it("Consumers with right email and password signs in", (done)=>{
		chai.request(server)
			.post("/consumers/signin")
			.send({
				email: "meg.perryw@example.com",
				password:"example"
			})
			.end(function(err, res){
				res.body.should.have.property("success");
				res.body.success.should.equal(true);
				done();
			});
	});
	it("Consumers with wrong email / password combination can't sign in", (done)=>{
		chai.request(server)
			.post("/consumers/signin")
			.send({
				email: "wrongemail@outlook.com",
				password: "example"
			})
			.end(function(err, res){
				res.body.should.have.property("error");
				res.body.error.should.equal("wrong email / password combination");
				done();
			});
	});
});