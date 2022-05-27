const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    password: '663645',
    host: 'localhost',
    database: 'catalogo_pokemon',
    port: 5432
});

const query = (text, param) => {
    return pool.query(text, param);
}

module.exports = {
    query
}

