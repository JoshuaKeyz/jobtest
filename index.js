var express = require("express");

var pg = require('knex')({
  	client: 'pg',
  	connection: {
		host: "127.0.0.1", 
		user: "joshua",
		password: "jobtest",
		database: "mydb"
	}
});

var bookshelf = require('bookshelf')(pg);
console.log(bookshelf);
//pg.destroy();
