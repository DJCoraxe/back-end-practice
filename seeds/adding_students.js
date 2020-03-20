
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('student').del()
    .then(function () {
      // Inserts seed entries
      return knex('student').insert([
        {first_name: 'Tom', last_name: 'The Bomb', grade_point_average: 3.90, bus_rider: true},
        {first_name: 'Dave', last_name: 'The Brave', grade_point_average: 2.57, bus_rider: false}
      ]);
    });
};
