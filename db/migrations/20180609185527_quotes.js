
exports.up = function(knex) {
	return knex.schema.createTable("quotes",(table)=>{
		table.increments("id").unsigned().primary();
		table.integer("contractor_id");
		table.integer("consumer_id");
		table.integer("labor");
		table.integer("expenses");
		table.integer("sales_task");
		table.integer("miscellaneous");
		table.integer("total");
		table.enu("status", ["pending", "accepted", "rejected"]).defaultTo("pending");
		table.timestamp("created_at").defaultTo(knex.fn.now());
		table.foreign("contractor_id").references("id").inTable("contractors")
			.onDelete("cascade")
			.onUpdate("cascade");
		table.foreign("consumer_id").references("id").inTable("consumers")
		.onDelete("cascade")
		.onUpdate("cascade");
	});
};

exports.down = function(knex) {
	return knex.schema.dropTable("quotes");
};