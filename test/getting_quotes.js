process.env.NODE_ENV = "test";

var chai = require("chai");
var should = chai.should();
var chaiHttp = require("chai-http");
var server = require("../app");
var knex = require("../db/knex");

chai.use(chaiHttp);

describe("Getting Quotes", ()=>{
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
	it("Should get all the quotes that has been assigned to a consumer", (done)=>{
		chai.request(server)
			.get("/consumers/getquotes?consumer_id=1")
			.end((err, res)=>{
				res.body.should.be.a("array");
				res.body[0].should.have.property("consumer_id");
				res.body[0].consumer_id.should.equal(1);
				done();
			});
	});
	it("If the id provided is not relating to a consumer, return error", (done)=>{
		chai.request(server)
			.get("/consumers/getquotes?consumer_id=0")
			.end((err, res)=>{
				res.body.should.have.property("error");
				res.body.error.should.equal("Not a registered consumer");
				done();
			});
	});
	it("In the absence of a consumer_id, return error", (done)=>{
		chai.request(server)
			.get("/consumers/getquotes")
			.end((err, res)=>{
				res.body.should.have.property("error");
				res.body.error.should.equal("invalid request for quotes");
				done();
			});
	});
});