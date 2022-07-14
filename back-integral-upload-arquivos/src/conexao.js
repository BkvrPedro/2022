const knex = require('knex')({
    client: 'pg',
    connection: {
        host: process.env.conexao_host,
        user: process.env.conexao_user,
        password: process.env.conexao_pwd,
        database: process.env.conexao_database,
        ssl: { rejectUnauthorized: false }
    }
});

module.exports = knex;  