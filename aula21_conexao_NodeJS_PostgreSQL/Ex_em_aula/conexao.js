const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    password: '663645',
    host: 'localhost',
    database: 'Conexao VSCODE',
    port: 5432
});

const query = (text, params) => { return pool.query(text, params) };

module.exports = { query };
