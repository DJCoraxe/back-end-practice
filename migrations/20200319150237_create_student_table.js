
exports.up = function(knex) {
  return knex.schema.createTable('student', (table) => {
      table.increments();
      table.string('first_name');
      table.string('last_name');
      table.decimal('grade_point_average');
      table.boolean('bus_rider');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('student');
};
