const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    password: '123456',
    host: 'localhost',
    database: 'dindin',
    port: 5432
});

const query = (text, params) => { return pool.query(text, params) };

module.exports = { query };
