
exports.up = function(knex) {
    return knex.schema.createTable('ongs', function (table){
        table.string('id')
        table.string('name').notNullable()
        table.string('email').notNullable()
        table.string('zipzorp').notNullable()
        table.string('city').notNullable()
        table.string('state',2).notNullable()
    })
  
};

exports.down = function(knex) {
  knex.schema.dropTable('ongs')
};
