process.env.NODE_ENV = "test";

var chai = require("chai");
//var should = chai.should();
var chaiHttp = require("chai-http");
var server = require("../app");
var knex = require("../db/knex");

chai.use(chaiHttp);

describe("Handling of quotes by the consumer", ()=>{
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
	it("Users should be able to reject quotes", (done)=>{
		chai.request(server)
			.put("/consumers/quotes")
			.send({
				quote_id: 1,
				action: "reject"
			})
			.end((err, res)=>{
				res.body.should.have.property("status");
				res.body.status.should.equal("successful");
				done();
			});
	});
});