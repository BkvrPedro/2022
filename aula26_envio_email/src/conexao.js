const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'ec2-18-204-142-254.compute-1.amazonaws.com',
        user: 'wnzgairrogmrrb',
        password: '2fd3f24475f9f1eb3997f7790a4f4f8f11b23b8cd939f5ab3e631a078372b83f',
        database: 'd9vrmbk9g045l2',
        ssl: { rejectUnauthorized: false }
    }
});

module.exports = knex;  