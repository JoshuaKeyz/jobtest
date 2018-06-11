
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('contractors').del()
    .then(function () {
      // Inserts seed entries
      return knex('contractors').insert({
        first_name: "John",
        last_name: "Doew",
        email: "josh.doew@example.com",
        password:"example",
      })
    });
};