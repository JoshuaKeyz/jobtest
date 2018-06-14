exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex("quotes").del()
		.then(function () {
			// Inserts seed entries
			return knex("quotes").insert({
				contractor_id: 1,
				consumer_id: 1,
				labor: 500,
				expenses: 600,
				sales_task: 50,
				miscellaneous: 20,
				total: 1170,
				status: "pending",
			});
		})
		.then(function(){
			return knex("quotes").insert({
				contractor_id: 1, 
				consumer_id: 1, 
				labor: 700,
				expenses: 800,
				sales_task: 50, 
				miscellaneous: 30,
				total: 1580,
				status: "pending"
			});
		})
		.then(function(){
			return knex("quotes").insert({
				contractor_id: 1, 
				consumer_id: 1, 
				labor: 500, 
				expenses: 500,
				sales_task: 500, 
				miscellaneous: 500, 
				total: 2500, 
				status: "rejected"
			});
		});
};