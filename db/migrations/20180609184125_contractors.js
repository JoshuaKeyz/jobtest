
exports.up = function(knex) {
	return knex.schema.createTable("contractors", (table)=>{
		table.increments("id").unsigned().primary();
		table.string("first_name").notNull();
		table.string("last_name").notNull();
		table.string("email").notNull();
		table.string("password").notNull();
		table.specificType("location", "point");
	});
};

exports.down = function(knex) {
	return knex.schema.dropTable("contractors");
};
