
exports.up = function(knex, Promise) {
  return knex.schema.createTable('quotes',(table)=>{
    table.increments('id').unsigned().primary();
    table.integer('contractor_id')
    table.integer('consumer_id')
    table.integer("labor");
    table.integer("expenses");
    table.integer("sales_task");
    table.integer("miscellaneous")
    table.integer("total");
    table.enu("status", ["pending", "accepted", "rejected"]).defaultTo("pending");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.foreign("contractor_id").references("id").inTable("contractors");
    table.foreign("consumer_id").references("id").inTable("consumers");
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable("quotes");
};