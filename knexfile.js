require('dotenv').config();

module.exports = {
    // Vendos te dhenat sipas dataBazes tende
    development: { //per knex
        client: 'mysql2',
        connection: //per mysql
            {
                host: "localhost",
                port:8885,
                user: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_SCHEMA
            },
        migrations: {
            directory: './db/migrations'
            // 1:npx knex migrate:make init
            // 2:npx knex migrate:latest --env development
        },
        seeds: {
            directory: './db/seeds' //folderi ku do te ruaj DB
            //1:npx knex seed:make init
            // 2:npx knex seed:run
        }
    },
    test:{
        client: 'mysql2',
        connection: //for mysql
            {
                host: "localhost",
                user: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_SCHEMA
            }
    }

};