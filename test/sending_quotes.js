process.env.NODE_ENV = 'test';

var chai = require('chai');
var should = chai.should();
var chaiHttp = require('chai-http');
var server = require('../app');
var knex = require("../db/knex");

chai.use(chaiHttp);

describe("Sending Quotes", ()=>{
    beforeEach((done)=>{
        knex.migrate.rollback()
            .then(function(){
                knex.migrate.latest()
                    .then(function(){
                        return knex.seed.run()
                            .then(function(){
                                done();
                            })
                    })
            })
    })

    afterEach((done)=>{
        knex.migrate.rollback()
            .then(function(){
                done();
            })
    })
    it("Should send quotes to a registered consumer from a contractor", (done)=>{
        chai.request(server)
        .post("/contractors/quotes")
        .send({
            contractor_id: 1,
            consumer_id: 1,
            labor: 900,
            expenses: 400,
            sales_task: 150,
            miscellaneous: 120,
            total: 1100,
            status: "pending",
        })
        .end((err, res)=>{
            res.body.should.have.property("status");
            res.body.status.should.equal("success")
            done()
        })
    })
})