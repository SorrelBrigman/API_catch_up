
exports.up = function(knex, Promise) {

};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('shows').dropTable('favorites');
};
