const tableNames = require('../../config/constants/tableNames');
exports.up = async (knex) =>{
    /*****There is only 1 table for the moment which will store albanian words *****/
    await knex.schema.createTable(tableNames.albanian,tableBuilder => {
        tableBuilder.increments().notNullable().unsigned();
        tableBuilder.string('word',254).unique();
    })
  
};

exports.down = async (knex) =>{

  knex.schema.dropTable(tableNames.albanian);
};
