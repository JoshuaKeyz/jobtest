
exports.up = function(knex, Promise) {
    return knex.schema.createTable("consumers", (table)=>{
        table.increments('id').unsigned().primary();
        table.string('first_name').notNull();
        table.string('last_name').notNull();
        table.string("email").notNull();
        table.string("password").notNull();
        table.specificType("location", "point")
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable("consumers");
};
