
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('consumers').del()
  .then(function () {
    // Inserts seed entries
    return knex('consumers').insert({
      id: 1,
      first_name: "meg",
      last_name: "perry",
      email: "meg.perryw@example.com",
      password:"example",
    })
  });
};
