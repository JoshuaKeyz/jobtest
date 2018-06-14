module.exports = {

	development: {
		client: "pg",
		connection: {
			database: "rest_api",
			user: "joshua",
			password: "example",
			host: "127.0.0.1",
			port: 5432
		},
		migrations: {
			directory: __dirname + "/db/migrations"
		},
		seeds:{
			directory: __dirname + "/db/seeds/development"
		}
	},
	test: {
		client: "pg",
		connection: {
			database: "rest_api_test",
			user: "joshua",
			password: "example",
			host: "127.0.0.1",
			port: 5432
		},
		migrations:{
			directory: __dirname + "/db/migrations"
		},
		seeds: {
			directory: __dirname + "/db/seeds/test"
		}
	},
	production: {
		client: "pg", 
		connection:process.env.DATABASE_URL,
		migrations: {
			directory: __dirname + "/db/migrations"
		},
		seeds: {
			directory: __dirname + "/db/seeds/production"
		}
	}
};
