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
    it("Should get all the quotes that has been assigned to a consumer")
})