
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('quotes').del()
    .then(function () {
      // Inserts seed entries
      return knex('quotes').insert({
        contractor_id: 1,
        consumer_id: 1,
        labor: 500,
        expenses: 600,
        sales_task: 50,
        miscellaneous: 20,
        total: 1170,
        status: "accepted",
      });
    });
};