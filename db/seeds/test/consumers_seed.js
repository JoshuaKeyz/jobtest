
exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex("consumers").del()
		.then(function () {
			// Inserts seed entries
			return knex("consumers").insert({
				first_name: "meg",
				last_name: "perry",
				email: "meg.perryw@example.com",
				password:"example",
			});
		});
};
